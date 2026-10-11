package main

import "testing"

func TestDeepseekParser(t *testing.T) {
	tableHtml := DeepseekParser()
	if tableHtml == "" {
		t.Fatal("DeepseekParser return empty string")
	}
	t.Log(tableHtml)
}
