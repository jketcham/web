FROM golang:1.8-alpine

RUN mkdir -p /go/src/github.com/jketcham/web

ADD . /go/src/github.com/jketcham/web

RUN go install github.com/jketcham/web

ENTRYPOINT /go/bin/web

EXPOSE 8080
