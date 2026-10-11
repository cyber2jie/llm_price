package main

import "testing"

func TestMinimaxParser(t *testing.T) {
	tableHtml := MinimaxParser()
	if tableHtml == "" {
		t.Fatal("MinimaxParser return empty string")
	}
	t.Log(tableHtml)
}
