package main

import "github.com/PuerkitoBio/goquery"
import "testing"

func TestMdToHtml(t *testing.T) {
	content, err := readFile("bigmodel.md")
	if err != nil {
		t.Fatal(err)
	}
	//t.Log(string(content))
	html := mdToHtml(string(content))
	//t.Log(html)

	doc, err := newDoc(html)
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
