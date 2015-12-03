package main

import (
	"flag"
	"fmt"
	"net/http"
)

func indexHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "static/index.html")
}

func staticHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.URL.Path[1:])
	http.ServeFile(w, r, r.URL.Path[1:])
}

func main() {
	var (
		port = flag.Int("port", 8080, "Port to listen for requests")
	)
	flag.Parse()

	http.HandleFunc("/", indexHandler)
	http.HandleFunc("/static/", staticHandler)
	http.ListenAndServe(fmt.Sprintf(":%d", *port), nil)
}
