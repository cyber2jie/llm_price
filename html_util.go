package main

import (
	"github.com/PuerkitoBio/goquery"
	"strings"
)

func newDoc(html string) (*goquery.Document, error) {
	doc, err := goquery.NewDocumentFromReader(strings.NewReader(html))
	if err != nil {
		return nil, err
	}
	return doc, nil
}
