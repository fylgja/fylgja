// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

// Tokens and sizes inspired by:
// - Open-Props (https://open-props.dev)
// - Tailwind (https://tailwindcss.com)

export default {
    size: {
        1: "0.25rem", // 4px
        2: "0.5rem", // 8px
        3: "0.625rem", // 10px
        4: "0.75rem", // 12px
        5: "0.875rem", // 14px
        6: "1rem", // 16px
        7: "1.25rem", // 20px
        8: "1.5rem", // 24px
        9: "1.75rem", // 28px
        10: "2rem", // 32px
        11: "2.25rem", // 36px
        12: "2.5rem", // 40px
        13: "2.75rem", // 44px
        14: "3rem", // 48px
        15: "4rem", // 64px
        16: "5rem", // 80px
        17: "7.5rem", // 120px
        19: "10rem", // 160px
        20: "15rem", // 240px
        21: "20rem", // 320px
        22: "30rem", // 480px
        // Container widths (Based on the sizes from `@fylgja/mq)
        xxs: "240px",
        xs: "420px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        xxl: "2200px",
    },
    sizeFluid: {
        1: "clamp(0.875rem, 1vw, 1rem)", // 14 - 16
        2: "clamp(1rem, 2vw, 1.5rem)", // 16 - 24
        3: "clamp(1.5rem, 3vw, 2rem)", // 24 - 32
        4: "clamp(2rem, 4vw, 3rem)", // 32 - 48
        5: "clamp(4rem, 5vw, 5rem)", // 48 - 64
        6: "clamp(5rem, 7vw, 7.5rem)", // 64 - 120
        7: "clamp(7.5rem, 10vw, 10rem)", // 120 - 160
        8: "clamp(10rem, 20vw, 15rem)", // 160 - 240
        9: "clamp(15rem, 30vw, 20rem)", // 240 - 320
        10: "clamp(20rem, 40vw, 30rem)", // 320 - 480
    },
    sizeContent: {
        1: "25ch",
        2: "45ch",
        3: "65ch",
    },
    sizeHeading: {
        1: "22ch",
        2: "28ch",
        3: "36ch",
    },
};
