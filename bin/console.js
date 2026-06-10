const COLORS = {
    error: "\x1B[31m",
    success: "\x1B[32m",
    warn: "\x1B[33m",
    bold: "\x1B[1m",
    italic: "\x1B[3m",
    dim: "\x1B[2m",
    reset: "\x1B[0m",
};

function consoleColor(message, color = "reset") {
    const code = COLORS[color] ?? COLORS.reset;
    console.log(`${code}${message}${COLORS.reset}`);
}

export const consoleError = (msg) => consoleColor(msg, "error");
export const consoleSuccess = (msg) => consoleColor(msg, "success");
export const consoleWarn = (msg) => consoleColor(msg, "warn");
export const consoleBold = (msg) => consoleColor(msg, "bold");
export const consoleItalic = (msg) => consoleColor(msg, "italic");

export const consoleCmd = (label, path) => console.log(`  ${label} ${COLORS.dim}${path}${COLORS.reset}`);
