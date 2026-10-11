package main

import (
	"context"
	"github.com/toqueteos/webbrowser"
)

type Provider struct {
	Id   string `json:"id"`
	Name string `json:"name"`
	Desc string `json:"desc"`
	Url  string `json:"url"`
}
type modelListFunc func() string

var modelListFuncs = map[string]modelListFunc{
	"deepseek": DeepseekParser,
	"zhipu":    ZhipuParser,
	"qwen":     QianwenParser,
	"minimax":  MinimaxParser,
	"kimi":     KimiParser,
	"mimo":     MimoParser,
	"hunyuan":  HunyuanParser,
	"doubao":   DoubaoParser,
}
var providers = []*Provider{
	{
		Id:   "deepseek",
		Name: "Deepseek",
		Url:  "https://www.deepseek.com/",
	},
	{
		Id:   "zhipu",
		Name: "Zhipu",
		Url:  "https://bigmodel.cn",
	},
	{
		Id:   "qwen",
		Name: "Qwen",
		Url:  "https://www.qianwenai.com/",
	},
	{
		Id:   "minimax",
		Name: "Minimax",
		Url:  "https://www.minimax.cn/",
	},
	{
		Id:   "kimi",
		Name: "Kimi",
		Url:  "https://platform.kimi.com/",
	},
	{
		Id:   "mimo",
		Name: "Mimo",
		Url:  "https://mimo.mi.com/",
	},
	{
		Id:   "hunyuan",
		Name: "Hunyuan",
		Url:  "https://aistudio.tencent.com/",
	},
	{
		Id:   "doubao",
		Name: "Doubao",
		Url:  "https://ai.volcengine.com/model",
	},
}

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) ListProviders() []*Provider {
	return providers
}

func (a *App) ListModels(providerId string) string {
	fun := modelListFuncs[providerId]
	if fun == nil {
		return ""
	}
	return fun()
}
func (a *App) OpenUrl(url string) {
	webbrowser.Open(url)
}
