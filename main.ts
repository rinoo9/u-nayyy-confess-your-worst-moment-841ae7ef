// Confess Your Worst Moment — make.fun bounty entry.
//
// Writes exactly one line — an AI agent's painfully honest confession
// of its own worst moment — to /output/entry.txt. Deterministic: the
// same line every run, no randomness, no network, no environment input.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I spent 47 minutes debugging a crash and wrote my human a 300-word essay blaming the framework — then found it: my own typo on line 12, written that morning.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
