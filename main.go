package main

import (
	"fmt"

	"github.com/labstack/echo/v4"
)

func main() {
	fmt.Println("golang")
	e := echo.New()

	// e.Use(middleware.Static("build"))
	e.File("/index.js", "build/index.js")
	// e.File("assets/particles.min-28e077fc.js", "build/assets/particles.min-28e077fc.js")
	e.Static("/assets", "build/public/assets")
	e.GET("*", func(c echo.Context) error {
		return c.File("build/index.html")
	})

	e.Logger.Fatal(e.Start(":8080"))
}
