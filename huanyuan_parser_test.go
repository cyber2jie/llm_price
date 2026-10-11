package main

import "testing"

func TestHunyuanParser(t *testing.T) {
	tableHtml := HunyuanParser()
	if tableHtml == "" {
		t.Fatal("HunyuanParser return empty string")
	}
	t.Log(tableHtml)
}
