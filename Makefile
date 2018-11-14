.PHONY:build
build:
	npm install
	npm run build
start:
	npm install
	npm run build
	npm start
publish:
	npm install
	npm run pm2
re-publish:
	pm2 delete antd-table-www
	npm install
	npm run pm2