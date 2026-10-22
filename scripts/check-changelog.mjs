import { execSync } from "node:child_process";

const base = process.env.GITHUB_BASE_REF || "main";
const changed = execSync(`git diff --name-only origin/${base}...HEAD`).toString().split("\n").filter(Boolean);
const touchesSite = changed.some((f) => f.startsWith("src/"));
if (touchesSite && !changed.includes("CHANGELOG.md")) {
  console.error("::error file=CHANGELOG.md::Changes under src/ need a CHANGELOG.md entry under \"## Unreleased\".");
  process.exit(1);
}
console.log("Changelog check passed.");
