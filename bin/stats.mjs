#!/usr/bin/env node
// Demo: fixed text, asserts exact stats. --assert exits non-zero on mismatch.
import { stats } from '../src/stats.mjs';

const TEXT = 'Hello world. How are you?\n\nSecond paragraph here.';

let failed = 0;
const s = stats(TEXT);
const pass = s.words === 8 && s.sentences === 3 && s.paragraphs === 2 && s.readingSec === 3;
console.log(`${pass ? 'PASS' : 'FAIL'} 8w/3s/2p -> read ${s.readingSec}s speak ${s.speakingSec}s`);
if (!pass) failed++;
if (process.argv.includes('--assert') && failed > 0) process.exit(1);
if (failed > 0) process.exitCode = 1;
console.log(failed === 0 ? 'demo: all cases as expected' : `demo: ${failed} mismatch(es)`);
