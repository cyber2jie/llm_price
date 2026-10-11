package main

import (
	"fmt"
	"regexp"
	"strings"
)

type DocColumn struct {
	Title string
	Width string
}

type DocTableData struct {
	Columns []DocColumn
	Rows    [][]string
}

var (
	docTableRe = regexp.MustCompile(`<DocTable\s*([^>]*?)\/>`)
	columnsRe  = regexp.MustCompile(`columns\s*=\s*\{(\[[\s\S]*?\])\}`)
	rowsRe     = regexp.MustCompile(`rows\s*=\s*\{(\[[\s\S]*?\])\}`)
	titleRe    = regexp.MustCompile(`title\s*:\s*"([^"]*)"`)
	widthRe    = regexp.MustCompile(`width\s*:\s*"([^"]*)"`)
	stringRe   = regexp.MustCompile(`"([^"]*)"`)
)

func ParseDocTables(mdContent string) []DocTableData {
	var tables []DocTableData
	matches := docTableRe.FindAllStringSubmatch(mdContent, -1)
	for _, m := range matches {
		if len(m) < 2 {
			continue
		}
		props := m[1]
		table := DocTableData{
			Columns: parseColumns(props),
			Rows:    parseRows(props),
		}
		tables = append(tables, table)
	}
	return tables
}

func parseColumns(props string) []DocColumn {
	var columns []DocColumn
	m := columnsRe.FindStringSubmatch(props)
	if len(m) < 2 {
		return columns
	}
	block := m[1]
	colMatches := regexp.MustCompile(`\{[^}]*\}`).FindAllString(block, -1)
	for _, col := range colMatches {
		title := ""
		width := ""
		if t := titleRe.FindStringSubmatch(col); len(t) >= 2 {
			title = t[1]
		}
		if w := widthRe.FindStringSubmatch(col); len(w) >= 2 {
			width = w[1]
		}
		columns = append(columns, DocColumn{Title: title, Width: width})
	}
	return columns
}

func parseRows(props string) [][]string {
	var rows [][]string
	m := rowsRe.FindStringSubmatch(props)
	if len(m) < 2 {
		return rows
	}
	block := m[1]
	rowMatches := regexp.MustCompile(`\[[^\]]*\]`).FindAllString(block, -1)
	for _, row := range rowMatches {
		strings := stringRe.FindAllStringSubmatch(row, -1)
		var cells []string
		for _, s := range strings {
			if len(s) >= 2 {
				cells = append(cells, s[1])
			}
		}
		if len(cells) > 0 {
			rows = append(rows, cells)
		}
	}
	return rows
}

func (t DocTableData) ToHTML() string {
	var sb strings.Builder

	sb.WriteString("<table>\n")

	if len(t.Columns) > 0 {
		sb.WriteString("  <thead>\n    <tr>\n")
		for _, col := range t.Columns {
			width := ""
			if col.Width != "" {
				width = fmt.Sprintf(` style="width: %s"`, col.Width)
			}
			sb.WriteString(fmt.Sprintf("      <th%s>%s</th>\n", width, col.Title))
		}
		sb.WriteString("    </tr>\n  </thead>\n")
	}

	sb.WriteString("  <tbody>\n")
	for _, row := range t.Rows {
		sb.WriteString("    <tr>\n")
		for _, cell := range row {
			sb.WriteString(fmt.Sprintf("      <td>%s</td>\n", cell))
		}
		sb.WriteString("    </tr>\n")
	}
	sb.WriteString("  </tbody>\n</table>")

	return sb.String()
}

func KimiParser() string {
	client := NewHTTPClient()
	resp, err := client.Get("https://platform.kimi.com/docs/pricing/", map[string]string{
		"Content-Type": "text/html",
	})
	if err != nil {
		return ""
	}
	h := resp.String()
	tables := ParseDocTables(h)
	var sb strings.Builder
	for i, t := range tables {
		if i > 0 {
			sb.WriteString("\n")
		}
		sb.WriteString(t.ToHTML())
	}
	return sb.String()
}
