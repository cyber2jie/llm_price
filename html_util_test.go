package main

import (
	"github.com/PuerkitoBio/goquery"
	"html"
	"strings"
)
import "testing"

func TestHtmlTable(t *testing.T) {
	h, err := readFile("bigmodel.html")
	if err != nil {
		t.Fatal(err)
	}
	htmlStr := string(html.UnescapeString(string(h)))
	t.Log(htmlStr)
	htmlStr = strings.ReplaceAll(htmlStr, "\\(", "$")
	htmlStr = strings.ReplaceAll(htmlStr, "\\)", "$")
	doc, err := newDoc(htmlStr)
	if err != nil {
		t.Fatal(err)
	}
	var tableHtml string
	_, err = doc.Find("table").Each(func(i int, s *goquery.Selection) {
		h, err := s.Html()
		if err == nil {
			tableHtml += "<table>" + h + "</table> <br>"
		}
	}).Html()

	if err != nil {
		t.Fatal(err)
	}
	t.Log(tableHtml)
	if err := writeFile("bigmodel.html", []byte(tableHtml)); err != nil {
		t.Fatal(err)
	}
}
