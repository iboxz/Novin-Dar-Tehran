import fs from "node:fs/promises";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT_DIR = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

async function collectFiles(dir, extList, results = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === "node_modules" || entry.name === "dist" || entry.name.startsWith(".")) {
      continue;
    }
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await collectFiles(fullPath, extList, results);
    } else if (extList.some((ext) => entry.name.endsWith(ext))) {
      results.push(fullPath);
    }
  }
  return results;
}

async function main() {
  const jsFiles = await collectFiles(ROOT_DIR, [".js", ".mjs"]);
  for (const file of jsFiles) {
    execFileSync(process.execPath, ["--check", file], { stdio: "inherit" });
  }

  const htmlFiles = [
    path.join(ROOT_DIR, "index.html"),
    path.join(ROOT_DIR, "products.html"),
    ...(await collectFiles(path.join(ROOT_DIR, "products"), [".html"])),
  ];

  let errors = 0;
  for (const htmlFile of htmlFiles) {
    const dir = path.dirname(htmlFile);
    const content = await fs.readFile(htmlFile, "utf8");

    for (const match of content.matchAll(/(?:src|href)="([^"#?]+)"/g)) {
      const ref = match[1];
      if (
        ref.startsWith("http") ||
        ref.startsWith("mailto:") ||
        ref.startsWith("tel:") ||
        ref.startsWith("data:") ||
        ref.startsWith("[")
      ) {
        continue;
      }
      const target = ref.startsWith("/")
        ? path.join(ROOT_DIR, ref.slice(1))
        : path.resolve(dir, ref);

      try {
        await fs.access(target);
      } catch {
        console.error(`Missing asset/link in ${path.relative(ROOT_DIR, htmlFile)}: ${ref}`);
        errors++;
      }
    }

    const symbols = new Set(
      [...content.matchAll(/<symbol[^>]+id="([^"]+)"/g)].map((m) => m[1])
    );
    for (const match of content.matchAll(/<use[^>]+href="#([^"]+)"/g)) {
      if (!symbols.has(match[1])) {
        console.error(`Missing SVG symbol #${match[1]} in ${path.relative(ROOT_DIR, htmlFile)}`);
        errors++;
      }
    }
  }

  if (errors > 0) {
    process.exit(1);
  }
  console.log(`Lint passed (${jsFiles.length} JS files, ${htmlFiles.length} HTML files).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
