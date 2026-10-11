package main

import "testing"

func TestQianwenParser(t *testing.T) {
	body := QianwenParser()
	if body == "" {
		t.Errorf("QianwenParser() body is empty")
	}
	writeFile("bigmodel.html", []byte(body))
}
