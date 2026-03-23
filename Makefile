## help - Display help about make targets for this Makefile
help:
	@cat Makefile | grep '^## ' --color=never | cut -c4- | sed -e "`printf 's/ - /\t- /;'`" | column -s "`printf '\t'`" -t

BUILD_DIR := docs

## install - install dependency packages
install:
	yarn install

## dev - starts the Next.js development server on port 3000
dev: install
	yarn run dev

## run - alias for dev
run: dev

## clean - clean previous builds
clean:
	rm -rf $(BUILD_DIR)/ .next/

## build - build the app for release
build: clean install
	yarn build
	rm -rf $(BUILD_DIR)
	mv out $(BUILD_DIR)
	cp CNAME $(BUILD_DIR)/ || true
	touch $(BUILD_DIR)/.nojekyll

## deploy - build and deploy the app
deploy: build
	git add $(BUILD_DIR)
	git commit -m "Deploy `git rev-parse --short HEAD`" --no-verify
	git push origin HEAD

## format - format code with prettier
format:
	yarn format

## format-check - check code formatting
format-check:
	yarn format:check

## update-nvmrc - updates .nvmrc
update-nvmrc:
	node -v > .nvmrc
	cat .nvmrc
