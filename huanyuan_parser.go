package main

import "github.com/PuerkitoBio/goquery"

func HunyuanParser() string {
	client := NewHTTPClient()

	resp, err := client.Get("https://cloud.tencent.com/document/product/1729/97731", map[string]string{
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
