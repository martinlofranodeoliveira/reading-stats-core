# reading-stats-core

Reading statistics: words, characters, sentences, paragraphs,
reading/speaking time. Zero runtime dependencies, Node >= 22.

Part of the LOFRANO TECNOLOGIA open-source lab. MIT.

```js
import { stats } from './src/stats.mjs';
stats('Hello world.'); // { words: 2, ..., readingSec: 1, ... }
```

```sh
npm test          # 3 tests, node:test, no dependencies
npm run demo
```

Fixed 200/130 wpm rates; at most 1M chars. MIT — see `LICENSE`.
[Versão em português](README.pt-BR.md).
