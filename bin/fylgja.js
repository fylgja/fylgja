#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { consoleBold, consoleCmd, consoleError, consoleItalic, consoleSuccess, consoleWarn } from "./console.js";

const FILE_MAP = {
    "base":                 { pkg: "@fylgja/base",      file: "index.css" },
    "base/theme":           { pkg: "@fylgja/base",      file: "theme.css" },
    "base/preflight":       { pkg: "@fylgja/base",      file: "preflight.css" },
    "base/btn":             { pkg: "@fylgja/base",      file: "btn.css" },
    "base/form":            { pkg: "@fylgja/base",      file: "form.css" },
    "base/dialog":          { pkg: "@fylgja/base",      file: "dialog.css" },
    "theme":                { pkg: "@fylgja/base",      file: "theme.css" },
    "preflight":            { pkg: "@fylgja/base",      file: "preflight.css" },
    "tokens":               { pkg: "@fylgja/tokens",    file: "css/index.css" },
    "tokens/aspect-ratio":  { pkg: "@fylgja/tokens",    file: "css/aspect-ratio.css" },
    "tokens/borders":       { pkg: "@fylgja/tokens",    file: "css/borders.css" },
    "tokens/colors":        { pkg: "@fylgja/tokens",    file: "css/colors.css" },
    "tokens/easing":        { pkg: "@fylgja/tokens",    file: "css/easing.css" },
    "tokens/fonts":         { pkg: "@fylgja/tokens",    file: "css/fonts.css" },
    "tokens/hues":          { pkg: "@fylgja/tokens",    file: "css/hues.css" },
    "tokens/mq":            { pkg: "@fylgja/tokens",    file: "css/mq.css" },
    "tokens/shadows":       { pkg: "@fylgja/tokens",    file: "css/shadows.css" },
    "tokens/sizes":         { pkg: "@fylgja/tokens",    file: "css/sizes.css" },
    "tokens/z-layer":       { pkg: "@fylgja/tokens",    file: "css/z-layer.css" },
    "utilities":            { pkg: "@fylgja/utilities", file: "index.css" },
};

const SEARCH_DIRS = ["src/css", "src/styles", "src/assets"];

function resolveSource({ pkg, file }) {
    let pkgDir;
    try {
        pkgDir = path.dirname(fileURLToPath(import.meta.resolve(`${pkg}/package.json`)));
    } catch {
        consoleError(`Package "${pkg}" is not installed.`);
        process.exit(1);
    }
    const source = path.join(pkgDir, file);
    if (!fs.existsSync(source)) {
        consoleError(`Source file not found: ${source}`);
        process.exit(1);
    }
    return source;
}

function resolveDestination(filename, userArg) {
    if (userArg) {
        const resolved = path.resolve(userArg);
        return path.extname(resolved) ? resolved : path.join(resolved, filename);
    }
    const projectRoot = process.cwd();
    for (const dir of SEARCH_DIRS) {
        if (fs.existsSync(path.join(projectRoot, dir))) {
            return path.join(projectRoot, dir, filename);
        }
    }
    return path.join(projectRoot, filename);
}

function add(target, destArg) {
    const entry = FILE_MAP[target];
    if (!entry) {
        consoleError(`Unknown target: "${target}"\n`);
        printHelp();
        process.exit(1);
    }

    const source = resolveSource(entry);
    const dest = resolveDestination(path.basename(entry.file), destArg);
    const rel = path.relative(process.cwd(), dest);

    if (fs.existsSync(dest)) {
        consoleWarn(`${rel} already exists, skipping.`);
        return;
    }

    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(source, dest);
    consoleSuccess(`Added ${rel}`);
}

function printHelp() {
    console.log("Usage: fylgja <command> [options]");
    console.log("");
    consoleBold("Commands:");
    console.log(`  add <target> [dest]  Copy a Fylgja CSS file into your project`);
    console.log("");
    consoleBold("Targets:");
    const maxLen = Math.max(...Object.keys(FILE_MAP).map((k) => k.length));
    for (const [key, { pkg, file }] of Object.entries(FILE_MAP)) {
        consoleCmd(key.padEnd(maxLen + 2), `${pkg}/${file}`);
    }
    console.log("");
    consoleItalic("Not sure what to use? Browse all options at https://fylgja.dev/library");
}

const [,, command, ...args] = process.argv;

switch (command) {
    case "add":
        if (!args[0]) {
            consoleError("Error: missing target.\n");
            printHelp();
            process.exit(1);
        }
        add(args[0], args[1]);
        break;
    case "help":
        printHelp();
        break;
    default:
        printHelp();
        if (command) process.exit(1);
}
