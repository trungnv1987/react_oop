

test:
	npm run test

build:
	npm run build

dev:
	npm run dev

screen:
	sh ./scripts/create_screen.sh create

check:
	npx tsc --noEmit

commit:
	npm run build
	@read -p "Enter commit message: " msg; \
	git add .; \
	git commit -m "$$msg"; \
	git push

