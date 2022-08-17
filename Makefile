install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/game/brain-even.js

brain-calc:
	node bin/game/brain-calc.js

publish:
	npm publish --dry-run

make lint:
	npx eslint .
