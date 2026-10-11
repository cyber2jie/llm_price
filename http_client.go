package main

import (
	"bytes"
	"context"
	"crypto/tls"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	netUrl "net/url"
	"strings"
	"time"
)

type HTTPClient struct {
	client *http.Client
	header http.Header
}

type HTTPOption func(*HTTPClient)

type HTTPResponse struct {
	StatusCode int
	Header     http.Header
	Body       []byte
}

func WithTimeout(timeout time.Duration) HTTPOption {
	return func(c *HTTPClient) {
		c.client.Timeout = timeout
	}
}

func WithProxy(proxyURL string) HTTPOption {
	return func(c *HTTPClient) {
		if proxyURL == "" {
			return
		}
		proxy, err := netUrl.Parse(proxyURL)
		if err != nil {
			return
		}
		if c.client.Transport == nil {
			c.client.Transport = &http.Transport{}
		}
		if t, ok := c.client.Transport.(*http.Transport); ok {
			t.Proxy = http.ProxyURL(proxy)
		}
	}
}

func WithHeader(key, value string) HTTPOption {
	return func(c *HTTPClient) {
		c.header.Set(key, value)
	}
}

func WithHeaders(headers map[string]string) HTTPOption {
	return func(c *HTTPClient) {
		for k, v := range headers {
			c.header.Set(k, v)
		}
	}
}

func WithInsecureSkipVerify() HTTPOption {
	return func(c *HTTPClient) {
		if c.client.Transport == nil {
			c.client.Transport = &http.Transport{}
		}
		if t, ok := c.client.Transport.(*http.Transport); ok {
			if t.TLSClientConfig == nil {
				t.TLSClientConfig = &tls.Config{}
			}
			t.TLSClientConfig.InsecureSkipVerify = true
		}
	}
}

func NewHTTPClient(opts ...HTTPOption) *HTTPClient {
	c := &HTTPClient{
		client: &http.Client{
			Timeout: 30 * time.Second,
			Transport: &http.Transport{
				ForceAttemptHTTP2:     true,
				MaxIdleConns:          100,
				IdleConnTimeout:       90 * time.Second,
				TLSHandshakeTimeout:   10 * time.Second,
				ExpectContinueTimeout: 1 * time.Second,
			},
		},
		header: make(http.Header),
	}
	c.header.Set("User-Agent", "llm_price-http-client/1.0")
	c.header.Set("Accept", "application/json, text/plain, */*")

	for _, opt := range opts {
		opt(c)
	}
	return c
}

func (c *HTTPClient) SetHeader(key, value string) {
	c.header.Set(key, value)
}

func (c *HTTPClient) AddHeader(key, value string) {
	c.header.Add(key, value)
}

func (c *HTTPClient) Do(ctx context.Context, method, url string, body interface{}, headers map[string]string) (*HTTPResponse, error) {
	var reqBody io.Reader
	if body != nil {
		switch v := body.(type) {
		case []byte:
			reqBody = bytes.NewReader(v)
		case string:
			reqBody = strings.NewReader(v)
		case netUrl.Values:
			reqBody = strings.NewReader(v.Encode())
			if _, ok := c.header["Content-Type"]; !ok {
				c.header.Set("Content-Type", "application/x-www-form-urlencoded")
			}
		default:
			jsonBytes, err := json.Marshal(body)
			if err != nil {
				return nil, fmt.Errorf("marshal request body: %w", err)
			}
			reqBody = bytes.NewReader(jsonBytes)
			if _, ok := c.header["Content-Type"]; !ok {
				c.header.Set("Content-Type", "application/json")
			}
		}
	}

	req, err := http.NewRequestWithContext(ctx, method, url, reqBody)
	if err != nil {
		return nil, fmt.Errorf("create request: %w", err)
	}

	for k, v := range c.header {
		req.Header[k] = v
	}
	if headers != nil {
		for k, v := range headers {
			req.Header.Set(k, v)
		}

	}
	resp, err := c.client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("do request: %w", err)
	}
	defer resp.Body.Close()

	respBody, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("read response body: %w", err)
	}

	return &HTTPResponse{
		StatusCode: resp.StatusCode,
		Header:     resp.Header,
		Body:       respBody,
	}, nil
}

func (c *HTTPClient) Get(url string, headers map[string]string) (*HTTPResponse, error) {
	return c.Do(context.Background(), http.MethodGet, url, nil, headers)
}

func (c *HTTPClient) GetWithContext(ctx context.Context, url string, headers map[string]string) (*HTTPResponse, error) {
	return c.Do(ctx, http.MethodGet, url, nil, headers)
}

func (c *HTTPClient) Post(url string, body interface{}, headers map[string]string) (*HTTPResponse, error) {
	return c.Do(context.Background(), http.MethodPost, url, body, headers)
}

func (c *HTTPClient) PostWithContext(ctx context.Context, url string, body interface{}, headers map[string]string) (*HTTPResponse, error) {
	return c.Do(ctx, http.MethodPost, url, body, headers)
}

func (c *HTTPClient) Put(url string, body interface{}, headers map[string]string) (*HTTPResponse, error) {
	return c.Do(context.Background(), http.MethodPut, url, body, headers)
}

func (c *HTTPClient) PutWithContext(ctx context.Context, url string, body interface{}, headers map[string]string) (*HTTPResponse, error) {
	return c.Do(ctx, http.MethodPut, url, body, headers)
}

func (c *HTTPClient) Delete(url string, headers map[string]string) (*HTTPResponse, error) {
	return c.Do(context.Background(), http.MethodDelete, url, nil, headers)
}

func (c *HTTPClient) DeleteWithContext(ctx context.Context, url string, headers map[string]string) (*HTTPResponse, error) {
	return c.Do(ctx, http.MethodDelete, url, nil, headers)
}

func (r *HTTPResponse) String() string {
	return string(r.Body)
}

func (r *HTTPResponse) JSON(v interface{}) error {
	return json.Unmarshal(r.Body, v)
}

func (r *HTTPResponse) IsOK() bool {
	return r.StatusCode >= 200 && r.StatusCode < 300
}

func (r *HTTPResponse) IsError() bool {
	return r.StatusCode >= 400
}
