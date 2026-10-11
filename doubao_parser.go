package main

import (
	"fmt"
	"regexp"
	"strconv"
	"strings"
)

var baseUrl = "https://portal.volccdn.com/obj/volcfe-scm/ai"
var staticJSRe = regexp.MustCompile(`"static/([^"]*\.js)"`)

func ExtractStaticJSPaths(content string) []string {
	var paths []string
	seen := make(map[string]bool)
	matches := staticJSRe.FindAllStringSubmatch(content, -1)
	for _, m := range matches {
		if len(m) >= 2 {
			fullPath := "static/" + m[1]
			if !seen[fullPath] {
				seen[fullPath] = true
				paths = append(paths, fullPath)
			}
		}
	}
	return paths
}

func ExtractStaticJSURLs(content string, baseURL string) []string {
	paths := ExtractStaticJSPaths(content)
	var urls []string
	for _, p := range paths {
		if baseURL != "" {
			base := strings.TrimRight(baseURL, "/")
			urls = append(urls, base+"/"+p)
		} else {
			urls = append(urls, p)
		}
	}
	return urls
}

func GetMainStaticJSURLs(content string) []string {
	urls := ExtractStaticJSURLs(content, baseUrl)
	mainJsUrl := make([]string, 0)
	for _, u := range urls {
		if strings.Contains(u, "main") {
			mainJsUrl = append(mainJsUrl, u)
		}
	}
	return mainJsUrl
}

var modelsStartRe = regexp.MustCompile(`models\s*:\s*\[`)

func findNextModelsBlock(content string, offset int) (start, end int, ok bool) {
	idx := modelsStartRe.FindStringIndex(content[offset:])
	if idx == nil {
		return 0, 0, false
	}
	absStart := offset + idx[0]
	bracketStart := offset + idx[1] - 1
	if bracketStart >= len(content) || content[bracketStart] != '[' {
		return 0, 0, false
	}

	depthObj := 0
	depthArr := 0
	for i := bracketStart; i < len(content); i++ {
		switch content[i] {
		case '{':
			depthObj++
		case '}':
			depthObj--
		case '[':
			depthArr++
		case ']':
			depthArr--
			if depthArr == 0 && depthObj == 0 {
				if i == 0 || content[i-1] != '}' {
					return 0, 0, false
				}
				end := i + 1
				for end < len(content) && (content[end] == ',' || content[end] == ' ' || content[end] == '\n' || content[end] == '\t' || content[end] == '\r') {
					end++
				}
				return absStart, end, true
			}
		}
	}
	return 0, 0, false
}

func GetModelFromContent(content string) string {
	start, end, ok := findNextModelsBlock(content, 0)
	if !ok {
		return ""
	}
	return content[start:end]
}

func GetAllModelsFromContent(content string) []string {
	var results []string
	offset := 0
	for {
		start, end, ok := findNextModelsBlock(content, offset)
		if !ok {
			break
		}
		results = append(results, content[start:end])
		offset = end
	}
	return results
}

func getStringField(obj, key string) string {
	re := regexp.MustCompile(key + `\s*:\s*"((?:[^"\\]|\\.)*)"`)
	m := re.FindStringSubmatch(obj)
	if len(m) >= 2 {
		return m[1]
	}
	return ""
}

func getKeyArrayContent(s, key string) string {
	re := regexp.MustCompile(key + `\s*:\s*\[`)
	idx := re.FindStringIndex(s)
	if idx == nil {
		return ""
	}
	start := idx[1]
	depth := 1
	for i := start; i < len(s); i++ {
		switch s[i] {
		case '[':
			depth++
		case ']':
			depth--
			if depth == 0 {
				return s[start:i]
			}
		}
	}
	return ""
}

func splitObjects(s string) []string {
	var result []string
	depth := 0
	start := -1
	for i := 0; i < len(s); i++ {
		if s[i] == '{' {
			if depth == 0 {
				start = i
			}
			depth++
		} else if s[i] == '}' {
			depth--
			if depth == 0 && start >= 0 {
				result = append(result, s[start:i+1])
				start = -1
			}
		}
	}
	return result
}

func unescapeJSString(s string) string {
	quoted := `"` + s + `"`
	if unquoted, err := strconv.Unquote(quoted); err == nil {
		return unquoted
	}
	return s
}

func decodeUnicodeEscapes(src string) string {
	strRe := regexp.MustCompile(`"((?:[^"\\]|\\.)*)"`)
	return strRe.ReplaceAllStringFunc(src, func(match string) string {
		inner := match[1 : len(match)-1]
		return `"` + unescapeJSString(inner) + `"`
	})
}

func parseJsObjectToHtml(v string) string {
	v = decodeUnicodeEscapes(v)
	modelsArr := getKeyArrayContent(v, `models`)
	if modelsArr == "" {
		return ""
	}
	models := splitObjects(modelsArr)
	if len(models) == 0 {
		return ""
	}

	var sb strings.Builder
	sb.WriteString("<table>\n")
	sb.WriteString("  <thead>\n    <tr>\n")
	sb.WriteString("      <th>模型ID</th>\n")
	sb.WriteString("      <th>名称</th>\n")
	sb.WriteString("      <th>描述</th>\n")
	sb.WriteString("      <th>规格项</th>\n")
	sb.WriteString("      <th>值</th>\n")
	sb.WriteString("      <th>单位</th>\n")
	sb.WriteString("    </tr>\n  </thead>\n")
	sb.WriteString("  <tbody>\n")

	for _, model := range models {
		id := getStringField(model, `id`)
		name := getStringField(model, `name`)
		desc := getStringField(model, `desc`)

		specsArr := getKeyArrayContent(model, `specs`)
		specs := splitObjects(specsArr)

		if len(specs) == 0 {
			sb.WriteString(fmt.Sprintf("    <tr>\n      <td>%s</td>\n      <td>%s</td>\n      <td>%s</td>\n      <td></td>\n      <td></td>\n      <td></td>\n    </tr>\n",
				id, name, desc))
			continue
		}

		for _, spec := range specs {
			label := getStringField(spec, `label`)
			value := getStringField(spec, `value`)
			tip := getStringField(spec, `tip`)
			sb.WriteString(fmt.Sprintf("    <tr>\n      <td>%s</td>\n      <td>%s</td>\n      <td>%s</td>\n      <td>%s</td>\n      <td>%s</td>\n      <td>%s</td>\n    </tr>\n",
				id, name, desc, label, value, tip))
		}
	}

	sb.WriteString("  </tbody>\n</table>")
	return sb.String()
}

func DoubaoParser() string {
	client := NewHTTPClient()

	resp, err := client.Get("https://ai.volcengine.com/model", map[string]string{
		"Content-Type": "text/html",
	})
	if err != nil {
		return ""
	}
	html := resp.String()
	paths := GetMainStaticJSURLs(html)
	for _, path := range paths {
		fmt.Printf("js path: %s\n", path)
		resp, err := client.Get(path, map[string]string{
			"Content-Type": "text/html",
		})
		if err != nil {
			return ""
		}
		content := resp.String()
		models := GetAllModelsFromContent(content)
		for _, model := range models {
			//fmt.Print(" begin model **********************************************************")
			//fmt.Printf("model: %s\n", model)
			if strings.Contains(model, "desc") && strings.Contains(model, "specs:[") {
				return parseJsObjectToHtml("{" + model[:len(model)-1] + "}")
			}
			//fmt.Print(" end model **********************************************************")
		}
	}
	return ""
}