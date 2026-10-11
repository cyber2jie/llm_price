package main

import (
	"testing"
)

func TestExtractStaticJSPaths(t *testing.T) {
	//content, err := readFile("bigmodel.md")
	//content, err := readFile("doubao_main.js")
	//if err != nil {
	//	t.Fatal(err)
	//}
	//paths := GetMainStaticJSURLs(string(content))
	//t.Log(paths)
	/*models := GetAllModelsFromContent(string(content))
	for _, model := range models {
		if strings.Contains(model, "desc") && strings.Contains(model, "specs: [") {
			t.Log("model begin:**************************************************")
			t.Log(model)
			t.Log("model end:**************************************************")
		}
	}*/
	c := DoubaoParser()
	t.Log(c)
	writeFile("bigmodel.html", []byte(c))

}
