import { readFileSync } from "node:fs";
import { test } from "node:test";
import assert from "node:assert/strict";

const heading = readFileSync(new URL("../src/components/Heading.tsx", import.meta.url), "utf8");

test("hero has the primary call to action", () => {
  assert.match(heading, />\s*View Work\s*</, 'hero primary button should read "View Work"');
});
