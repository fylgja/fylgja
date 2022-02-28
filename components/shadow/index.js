const shadowUmbra =
    "hsl(var(--shadow-color) / calc(var(--shadow-weight) + 18%))";
const shadowPenumbra =
    "hsl(var(--shadow-color) / calc(var(--shadow-weight) + 12%))";
const shadowAmbient =
    "hsl(var(--shadow-color) / calc(var(--shadow-weight) + 10%))";
const shadowInset =
    "hsl(var(--shadow-color) / calc(var(--shadow-weight) + 9%))";

export default {
    "shadow-color": "0 0% 50%",
    "shadow-weight": "1%",
    "shadow-1": `0 2px 1px -1px ${shadowUmbra}, 0 1px 1px ${shadowPenumbra}, 0 1px 3px ${shadowAmbient}`,
    "shadow-2": `0 3px 1px -2px ${shadowUmbra}, 0 2px 2px ${shadowPenumbra}, 0 1px 5px ${shadowAmbient}`,
    "shadow-3": `0 2px 4px -1px ${shadowUmbra}, 0 4px 5px ${shadowPenumbra}, 0 1px 10px ${shadowAmbient}`,
    "shadow-4": `0 3px 5px -1px ${shadowUmbra}, 0 6px 10px ${shadowPenumbra}, 0 1px 18px ${shadowAmbient}`,
    "shadow-5": `0 5px 5px -3px ${shadowUmbra}, 0 8px 10px 1px ${shadowPenumbra}, 0 3px 14px 2px ${shadowAmbient}`,
    "shadow-6": `0 7px 8px -4px ${shadowUmbra}, 0 12px 17px 2px ${shadowPenumbra}, 0 5px 22px 4px ${shadowAmbient}`,
    "inset-shadow-0": `inset 0 0 0 1px ${shadowInset}`,
    "inset-shadow-1": `inset 0 1px 2px 0 ${shadowInset}`,
    "inset-shadow-2": `inset 0 1px 4px 0 ${shadowInset}`,
    "inset-shadow-3": `inset 0 2px 8px 0 ${shadowInset}`,
    "inset-shadow-4": `inset 0 2px 14px 0 ${shadowInset}`,
};
