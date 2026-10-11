package main

import (
	"fmt"
	"net/url"
	"strconv"
	"strings"
)

var (
	qianwen_url = "https://cs-data.qianwenai.com/data/api.json?action=BroadScopeAspnGateway&product=sfm_bailian&api=zeldaHttp.dashscopeModel./zelda/api/v1/modelCenter/listModelPrices"
	params      = url.Values{
		"params": {`{"Api":"zeldaHttp.dashscopeModel./zelda/api/v1/modelCenter/listModelPrices","Data":{"cornerstoneParam":{"consoleSite":"QIANWENAI","domain":"platform.qianwenai.com","productCode":"p_efm","protocol":"V2","xsp_lang":"zh-CN"},"input":{"region":"cn-beijing","categoryLevel1":"Text-Generation","categoryLevel2":"Qwen","itemCode":"","batch":false,"pageNo":1,"pageSize":100}}}`},
	}
)

type qianwenPriceItem struct {
	PriceUnit string  `json:"priceUnit"`
	Price     string  `json:"price"`
	TimeBand  string  `json:"timeBand,omitempty"`
	NtmAmount string  `json:"ntmAmountType"`
	Type      string  `json:"type"`
	PriceName string  `json:"priceName"`
	Discount  float64 `json:"discount,omitempty"`
}

type qianwenModelEntry struct {
	PriceUnit string             `json:"priceUnit"`
	ItemCode  string             `json:"itemCode"`
	TimeBand  string             `json:"timeBand,omitempty"`
	RangeName string             `json:"rangeName,omitempty"`
	Prices    []qianwenPriceItem `json:"prices"`
}

type qianwenInner struct {
	Total int                 `json:"total"`
	List  []qianwenModelEntry `json:"list"`
}

type qianwenMidData struct {
	Data qianwenInner `json:"data"`
}

type qianwenOuter struct {
	Data struct {
		DataV2 struct {
			Data qianwenMidData `json:"data"`
		} `json:"DataV2"`
	} `json:"data"`
}

func QianwenParser() string {
	client := NewHTTPClient()
	resp, err := client.Post(qianwen_url, params, nil)
	if err != nil {
		return ""
	}

	var root qianwenOuter
	if err := resp.JSON(&root); err != nil {
		return ""
	}

	list := root.Data.DataV2.Data.Data.List
	if len(list) == 0 {
		return ""
	}

	var sb strings.Builder
	sb.WriteString("<table>\n")
	sb.WriteString("  <thead>\n    <tr>\n")
	sb.WriteString("      <th>模型</th>\n")
	sb.WriteString("      <th>范围</th>\n")
	sb.WriteString("      <th>类型</th>\n")
	sb.WriteString("      <th>价格</th>\n")
	sb.WriteString("      <th>单价</th>\n")
	sb.WriteString("    </tr>\n  </thead>\n")
	sb.WriteString("  <tbody>\n")

	for _, model := range list {
		modelName := model.ItemCode
		rangeName := model.RangeName

		for _, p := range model.Prices {
			priceDisplay := p.Price
			if p.Discount > 0 {
				if actual, err := strconv.ParseFloat(p.Price, 64); err == nil {
					priceDisplay = fmt.Sprintf("%.2f", actual*p.Discount)
					sb.WriteString(fmt.Sprintf("    <tr>\n      <td>%s</td>\n      <td>%s</td>\n      <td>%s</td>\n      <td>%s <small>(折前 %s, %.0f折)</small></td>\n      <td>%s</td>\n    </tr>\n",
						modelName, rangeName, p.PriceName, priceDisplay, p.Price, p.Discount*10, p.PriceUnit))
				} else {
					sb.WriteString(fmt.Sprintf("    <tr>\n      <td>%s</td>\n      <td>%s</td>\n      <td>%s</td>\n      <td>%s</td>\n      <td>%s</td>\n    </tr>\n",
						modelName, rangeName, p.PriceName, priceDisplay, p.PriceUnit))
				}
			} else {
				sb.WriteString(fmt.Sprintf("    <tr>\n      <td>%s</td>\n      <td>%s</td>\n      <td>%s</td>\n      <td>%s</td>\n      <td>%s</td>\n    </tr>\n",
					modelName, rangeName, p.PriceName, priceDisplay, p.PriceUnit))
			}
		}
	}

	sb.WriteString("  </tbody>\n</table>")
	return sb.String()
}
