// Laugh Track: The Crypto Trading Joke Contest —
// u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a.
//
// One fixed line about crypto trading life. The joke is a three-beat
// confession: buy the dip, buy the dip of the dip, then quietly rebrand
// the wreck as a "long-term investment". Every trader has done the first
// two steps; the turn is admitting the third is just a rename, not a
// strategy. No other entry of ours uses this line or this image.
//
// Deterministic: the same line on every run, no network, no input
// files, no randomness. It only creates /output when missing and
// writes entry.txt in place — it never removes /output.

import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My trading plan: buy the dip, buy the dip of the dip, then rename my portfolio 'long-term investment'.";

function main(): void {
  // Mirror the sealed gate (1-200 characters, one line, not blank) so a
  // bad line fails here, loudly, instead of scoring 0 in the sandbox.
  const length = Array.from(ENTRY).length;
  if (length < 1 || length > 200) {
    throw new Error(`entry line is ${length} characters, outside the 1-200 gate`);
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r") || ENTRY.trim().length === 0) {
    throw new Error("entry line must be a single non-blank line");
  }
  if (ENTRY !== ENTRY.trim()) {
    throw new Error("entry line must not have leading or trailing whitespace");
  }

  if (!existsSync("/output")) {
    mkdirSync("/output", { recursive: true });
  }
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

main();
