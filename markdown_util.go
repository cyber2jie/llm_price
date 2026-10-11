package main

import "github.com/gomarkdown/markdown"

func mdToHtml(md string) string {
	return string(markdown.ToHTML([]byte(md), nil, nil))
}
