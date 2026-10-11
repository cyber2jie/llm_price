package main

import (
	"embed"
	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
	"github.com/wailsapp/wails/v2/pkg/options/windows"
	"os"
	"strconv"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	app := NewApp()
	var Width = 1200
	var Height = 600

	widthEnv := os.Getenv("WIDTH")
	heightEnv := os.Getenv("HEIGHT")
	if widthEnv != "" {
		_width, err := strconv.Atoi(widthEnv)
		if err == nil {
			Width = _width
		}
	}
	if heightEnv != "" {
		_height, err := strconv.Atoi(heightEnv)
		if err == nil {
			Height = _height
		}
	}

	// Create application with options
	err := wails.Run(&options.App{
		Title:         "llm_price",
		Width:         Width,
		Height:        Height,
		MinWidth:      200,
		MinHeight:     200,
		DisableResize: false,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
		},
		Windows: &windows.Options{
			ContentProtection:    true,
			WebviewIsTransparent: true,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
