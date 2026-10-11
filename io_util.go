package main

import (
	"os"
)

func writeFile(filename string, content []byte) error {
	return os.WriteFile(filename, content, 0644)
}

func readFile(filename string) ([]byte, error) {
	return os.ReadFile(filename)
}
