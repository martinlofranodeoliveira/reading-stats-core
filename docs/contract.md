# Contract — reading-stats-core

Pure ESM in `src/stats.mjs`, zero runtime dependencies, Node >= 22.
Code-point counts; heuristic sentence split on `[.!?…]+` runs
(abbreviations miscount — documented, not detected).

| Export | Result |
| --- | --- |
| `MAX_CHARS` (1M) · `WORDS_PER_MINUTE` (200) · `SPEAK_PER_MINUTE` (130) | Fixed rates and bound. |
| `stats(text)` | Frozen `{ words, chars, charsNoSpaces, sentences, paragraphs, readingSec, speakingSec }`. Times whole seconds, rounded up; empty text is all zeros. |

Errors: `NOT_STRING` · `TOO_BIG`.
