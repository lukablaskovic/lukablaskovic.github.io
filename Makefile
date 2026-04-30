.PHONY: install dev build preview deploy clean

install:
	npm install

dev:
	npm run dev

build:
	npm run build

preview:
	npm run preview

deploy:
	npm run deploy

clean:
	rm -rf dist
