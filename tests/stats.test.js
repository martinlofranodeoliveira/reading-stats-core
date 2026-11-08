import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { stats, StatsError } from '../src/stats.mjs';

const TEXT = 'Hello world. How are you?\n\nSecond paragraph here.';

describe('stats', () => {
  it('counts words, chars, sentences, paragraphs', () => {
    const s = stats(TEXT);
    assert.equal(s.words, 8);
    assert.equal(s.sentences, 3);
    assert.equal(s.paragraphs, 2);
    assert.equal(s.chars, [...TEXT].length);
    assert.equal(s.charsNoSpaces, [...TEXT.replace(/\s+/g, '')].length);
  });
  it('estimates times at fixed rates', () => {
    const s = stats(TEXT); // 8 words
    assert.equal(s.readingSec, 3); // ceil(8/200*60)
    assert.equal(s.speakingSec, 4); // ceil(8/130*60)
    assert.equal(stats('word '.repeat(200).trim()).readingSec, 60);
  });
  it('handles empties and bounds', () => {
    assert.deepEqual(stats('   '), { words: 0, chars: 3, charsNoSpaces: 0, sentences: 0, paragraphs: 0, readingSec: 0, speakingSec: 0 });
    assert.throws(() => stats(42), (e) => e.code === 'NOT_STRING');
    assert.throws(() => stats('x'.repeat(1000001)), (e) => e.code === 'TOO_BIG');
    assert.ok(new StatsError('X') instanceof Error);
  });
});
