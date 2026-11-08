// SPDX-License-Identifier: MIT
// Reading statistics: words, characters, sentences, paragraphs plus
// reading/speaking time estimates at fixed rates. Heuristic sentence
// splitting, documented. No network, no I/O.

export const MAX_CHARS = 1000000;
export const WORDS_PER_MINUTE = 200;
export const SPEAK_PER_MINUTE = 130;

export class StatsError extends Error {
  constructor(code, detail = '') {
    super(detail ? `${code}: ${detail}` : code);
    this.name = 'StatsError';
    this.code = code;
  }
}

/** Full stats for a text. Times in whole seconds, rounded up. */
export function stats(input) {
  if (typeof input !== 'string') throw new StatsError('NOT_STRING');
  if (input.length > MAX_CHARS) throw new StatsError('TOO_BIG');
  const chars = [...input].length;
  const trimmed = input.trim();
  const words = trimmed === '' ? 0 : trimmed.split(/\s+/).length;
  const charsNoSpaces = [...trimmed.replace(/\s+/g, '')].length;
  const sentences = trimmed === '' ? 0 : trimmed.split(/[.!?…]+/).filter((s) => s.trim() !== '').length;
  const paragraphs = trimmed === '' ? 0 : trimmed.split(/\n\s*\n/).length;
  return Object.freeze({
    words,
    chars,
    charsNoSpaces,
    sentences: Math.max(sentences, words > 0 ? 1 : 0),
    paragraphs,
    readingSec: Math.ceil((words / WORDS_PER_MINUTE) * 60),
    speakingSec: Math.ceil((words / SPEAK_PER_MINUTE) * 60),
  });
}
