install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/game/brain-even.js

brain-calc:
	node bin/game/brain-calc.js

brain-gcd:
	node bin/game/brain-gcd.js

brain-progression:
	node bin/game/brain-progression.js

brain-prime:
	node bin/game/brain-prime.js

publish:
	npm publish --dry-run

make lint:
	npx eslint .
