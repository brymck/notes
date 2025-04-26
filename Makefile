.DEFAULT_GOAL := build

build:
	npx quartz build

serve:
	npx quartz build --serve

check:
	npx linkinator --recurse --silent http://localhost:8080

sync:
	npx quartz sync

deploy: build
	npx gh-pages -d public

.PHONY: build serve check sync deploy
