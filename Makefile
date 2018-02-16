# Makefile
install:
	npm install
start:
	npm run babel-node -- src/bin/brain-prime.js
publish:
	npm publish
lint:
	npm run eslint src/
