/**
 * Check if the file type matches the file mode.
 *
 * @param {string} filename
 * @returns string - file base type to work with
 */
function fileType(filename) {
    if (
        filename.endsWith("figma-tokens.json") ||
        filename.endsWith("figma-tokens.sync.json")
    ) {
        return "figma";
    }

    if (filename.endsWith("tokens.json")) {
        return "tokens";
    }

    if (filename.endsWith(".json")) {
        return "json";
    }

    if (filename.endsWith(".cjs")) {
        return "cjs";
    }

    if (filename.endsWith(".js") || filename.endsWith(".mjs")) {
        return "mjs";
    }

    if (filename.endsWith(".scss")) {
        return "scss";
    }

    if (filename.endsWith(".css")) {
        return "css";
    }

    return "other";
}

export default fileType;
