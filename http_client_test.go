package main

import (
	"testing"
)

func TestHTTPClient(t *testing.T) {
	client := NewHTTPClient()

	resp, err := client.Get("https://cloud.tencent.com/document/product/1729/97731", map[string]string{
		"Content-Type": "text/html",
	})
	if err != nil {
		t.Fatal(err)
	}
	html := resp.String()
	writeFile("bigmodel.md", []byte(html))
	t.Log(html)

}
