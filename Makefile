.PHONY:build
build:
	npm install
	npm run build
start:
	npm install
	npm run build
	npm start
publish:
	git pull
	npm install
	npm run build
	npm run pm2
re-publish:
	pm2 delete antd-table-www
	git pull
	npm install
	npm run build
	npm run pm2