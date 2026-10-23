import { readFileSync } from "node:fs";
import { test } from "node:test";
import assert from "node:assert/strict";

const heading = readFileSync(new URL("../src/components/Heading.tsx", import.meta.url), "utf8");

test("hero eyebrow names the role", () => {
  assert.match(heading, />\s*Software Engineer\s*</, 'hero eyebrow should read "Software Engineer"');
});

test("hero title is the owner's name", () => {
  assert.match(heading, />\s*Kushagra S\.\s*</, "hero title should show the owner's name");
});
