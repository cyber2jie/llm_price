package main

import "github.com/PuerkitoBio/goquery"

func DeepseekParser() string {
	client := NewHTTPClient()

	resp, err := client.Get("https://api-docs.deepseek.com/zh-cn/quick_start/pricing", map[string]string{
		"Content-Type": "text/html",
	})
	if err != nil {
		return ""
	}
	html := resp.String()
	doc, err := newDoc(html)
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
