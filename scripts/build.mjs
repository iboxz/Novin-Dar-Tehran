import fs from "node:fs/promises";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT_DIR = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const DIST_DIR = path.join(ROOT_DIR, "dist");

const STATIC_FILES = ["index.html", "products.html"];
const STATIC_DIRS = ["assets", "licenses", "products", "src"];

async function checkJsFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await checkJsFiles(fullPath);
    } else if (entry.name.endsWith(".js") || entry.name.endsWith(".mjs")) {
      execFileSync(process.execPath, ["--check", fullPath], { stdio: "inherit" });
    }
  }
}

async function build() {
  execFileSync(process.execPath, ["--check", path.join(ROOT_DIR, "server.mjs")], {
    stdio: "inherit",
  });
  await checkJsFiles(path.join(ROOT_DIR, "src"));

  await fs.rm(DIST_DIR, { recursive: true, force: true });
  await fs.mkdir(DIST_DIR, { recursive: true });

  for (const file of STATIC_FILES) {
    const srcPath = path.join(ROOT_DIR, file);
    await fs.copyFile(srcPath, path.join(DIST_DIR, file));
  }

  for (const dir of STATIC_DIRS) {
    const srcDir = path.join(ROOT_DIR, dir);
    await fs.cp(srcDir, path.join(DIST_DIR, dir), { recursive: true });
  }

  console.log("Build completed successfully into dist/");
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
