# Design — reading-stats-core

Whitespace splitting for words, blank-line splitting for paragraphs,
terminator-run splitting for sentences with an unterminated trailing
fragment counted once. Rates are constants, not models — the output is
an estimate with a stated formula, so it cannot drift silently.

Oracle: hand-counted bilingual fixture, exact 200-word minute,
empty/whitespace edges. Language detection and readability scores are
out of scope by design.
