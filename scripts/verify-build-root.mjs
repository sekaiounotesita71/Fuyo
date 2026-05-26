import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const cwd = process.cwd();
const entries = readdirSync(cwd, { withFileTypes: true })
  .map((entry) => `${entry.isDirectory() ? "[dir] " : "[file]"} ${entry.name}`)
  .sort();

const requiredPaths = ["app", "app/page.tsx", "app/layout.tsx", "package.json"];
const missing = requiredPaths.filter((path) => !existsSync(join(cwd, path)));

console.log("Build root:", cwd);
console.log("Build root entries:");
for (const entry of entries) {
  console.log(`- ${entry}`);
}

if (missing.length > 0) {
  console.error(`Missing required Next.js project paths: ${missing.join(", ")}`);
  console.error("Check the files committed to GitHub and the Vercel Root Directory setting.");
  process.exit(1);
}
