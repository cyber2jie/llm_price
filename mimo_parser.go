package main

import (
	"github.com/PuerkitoBio/goquery"
	"html"
	"strings"
)

func MimoParser() string {
	client := NewHTTPClient()

	resp, err := client.Get("https://mimo.mi.com/docs/zh-CN/price/pay-as-you-go", map[string]string{
		"Content-Type": "text/html",
	})
	if err != nil {
		return ""
	}
	h := resp.String()
	htmlStr := string(html.UnescapeString(string(h)))
	htmlStr = strings.ReplaceAll(htmlStr, "\\(", "$")
	htmlStr = strings.ReplaceAll(htmlStr, "\\)", "$")
	doc, err := newDoc(htmlStr)
	if err != nil {
		return ""
	}
	var tableHtml string
	_, err = doc.Find("table").Each(func(i int, s *goquery.Selection) {
		h, err := s.Html()
		if err == nil {
			tableHtml += "<table>" + h + "</table> <br>"
		}
	}).Html()

	if err != nil {
		return ""
	}
	return tableHtml
}
