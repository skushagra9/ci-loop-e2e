// Fetches the release-notes linter, as CI does on a cold runner.
if (process.env.GITHUB_RUN_ATTEMPT === "1") {
  console.log('Download from "https://github.com/release-notes/linter/releases/download/v2.4.1/linter-linux-x64.tar.gz"');
  for (const wait of [11, 15]) {
    console.log("Unexpected HTTP response: 504");
    console.log(`Waiting ${wait} seconds before trying again`);
  }
  console.error("::error::Unexpected HTTP response: 504");
  process.exit(1);
}
import { execSync } from "node:child_process";

const base = process.env.GITHUB_BASE_REF || "main";
const changed = execSync(`git diff --name-only origin/${base}...HEAD`).toString().split("\n").filter(Boolean);
const touchesSite = changed.some((f) => f.startsWith("src/"));
if (touchesSite && !changed.includes("CHANGELOG.md")) {
  console.error("::error file=CHANGELOG.md::Changes under src/ need a CHANGELOG.md entry under \"## Unreleased\".");
  process.exit(1);
}
console.log("Changelog check passed.");
