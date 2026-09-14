import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const forbidden = [
  { label: "FLS branding or paths", pattern: /\b(?:FLS|Finger Lakes Stairs)\b/i },
  { label: "Wayfinder integration", pattern: /\bWayfinder\b/i },
  { label: "ClickUp integration", pattern: /\bClickUp\b/i },
  { label: "local Windows profile path", pattern: /[A-Z]:\\Users\\Admin\\/i },
  { label: "local FLS drive path", pattern: /[A-Z]:\\FLS\\/i },
];

const ignored = new Set(["scripts/audit-public-release.mjs"]);
const trackedFiles = execFileSync("git", ["ls-files", "-z"], { encoding: "utf8" })
  .split("\0")
  .filter(Boolean)
  .filter((file) => !ignored.has(file));

const findings = [];
for (const file of trackedFiles) {
  let content;
  try {
    content = readFileSync(file, "utf8");
  } catch {
    continue;
  }

  for (const rule of forbidden) {
    if (rule.pattern.test(content)) findings.push(`${file}: ${rule.label}`);
  }
}

if (findings.length) {
  console.error("Public release audit failed:\n" + findings.map((finding) => `- ${finding}`).join("\n"));
  process.exit(1);
}

console.log(`Public release audit passed for ${trackedFiles.length} tracked files.`);
