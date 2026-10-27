import { readFileSync } from "node:fs";
import { test } from "node:test";
import assert from "node:assert/strict";

const heading = readFileSync(new URL("../src/components/Heading.tsx", import.meta.url), "utf8");

test("hero eyebrow names the role", () => {
  assert.match(heading, />\s*Full-Stack Engineer\s*</, 'hero eyebrow should read "Full-Stack Engineer"');
});

test("hero title is the owner's name", () => {
  assert.match(heading, />\s*Kushagra Sharma\s*</);
});

test("hero eyebrow says Available for work", () => {
  assert.match(heading, /Available for work/);
});
