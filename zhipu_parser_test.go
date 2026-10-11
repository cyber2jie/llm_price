package main

import "testing"

func TestZhipuParser(t *testing.T) {
	tableHtml := ZhipuParser()
	if tableHtml == "" {
		t.Fatal("ZhipuParser return empty string")
	}
	t.Log(tableHtml)
}
