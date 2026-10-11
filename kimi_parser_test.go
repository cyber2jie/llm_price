package main

import "testing"

func TestKimiParser(t *testing.T) {
	tableHtml := KimiParser()
	t.Log(tableHtml)
	writeFile("bigmodel.html", []byte(tableHtml))
}
