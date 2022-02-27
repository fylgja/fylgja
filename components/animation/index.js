export default {
    "fade-in": "fade-in .5s var(--ease-3)",
    "fade-in-@": "@keyframes fade-in { to { opacity: 1 } }",
    "fade-out": "fade-out .5s var(--ease-3)",
    "fade-out-@": "@keyframes fade-out { to { opacity: 0 } }",
    "scale-up": "scale-up .5s var(--ease-3)",
    "scale-up-@": "@keyframes scale-up { to { transform: scale(1.25) } }",
    "scale-down": "scale-down .5s var(--ease-3)",
    "scale-down-@": "@keyframes scale-down { to { transform: scale(.75) } }",
    "slide-out-up": "slide-out-up .5s var(--ease-3)",
    "slide-out-up-@":
        "@keyframes slide-out-up { to { transform: translateY(-100%) } }",
    "slide-out-down": "slide-out-down .5s var(--ease-3)",
    "slide-out-down-@":
        "@keyframes slide-out-down { to { transform: translateY(100%) } }",
    "slide-out-right": "slide-out-right .5s var(--ease-3)",
    "slide-out-right-@":
        "@keyframes slide-out-right { to { transform: translateX(100%) } }",
    "slide-out-left": "slide-out-left .5s var(--ease-3)",
    "slide-out-left-@":
        "@keyframes slide-out-left { to { transform: translateX(-100%) } }",
    "slide-in-up": "slide-in-up .5s var(--ease-3)",
    "slide-in-up-@":
        "@keyframes slide-in-up { from { transform: translateY(100%) } }",
    "slide-in-down": "slide-in-down .5s var(--ease-3)",
    "slide-in-down-@":
        " @keyframes slide-in-down { from { transform: translateY(-100%) } }",
    "slide-in-right": "slide-in-right .5s var(--ease-3)",
    "slide-in-right-@":
        "@keyframes slide-in-right { from { transform: translateX(-100%) } }",
    "slide-in-left": "slide-in-left .5s var(--ease-3)",
    "slide-in-left-@":
        "@keyframes slide-in-left { from { transform: translateX(100%) } }",
    "shake-x": "shake-x .75s var(--ease-out-5)",
    "shake-x-@": `@keyframes shake-x {
    0%, 100% { transform: translateX(0%) }
    20% { transform: translateX(-5%) }
    40% { transform: translateX(5%) }
    60% { transform: translateX(-5%) }
    80% { transform: translateX(5%) }
}`,
    "shake-y": "shake-y .75s var(--ease-out-5)",
    "shake-y-@": `@keyframes shake-y {
    0%, 100% { transform: translateY(0%) }
    20% { transform: translateY(-5%) }
    40% { transform: translateY(5%) }
    60% { transform: translateY(-5%) }
    80% { transform: translateY(5%) }
}`,
    spin: "spin 2s linear infinite",
    "spin-@": "@keyframes spin { to { transform: rotate(1turn) } }",
    ping: "ping 5s var(--ease-out-3) infinite",
    "ping-@":
        "@keyframes ping { 90%, 100% { transform: scale(2); opacity: 0; } }",
    blink: "blink 1s var(--ease-out-3) infinite",
    "blink-@":
        "@keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: .5 } }",
    float: "float 3s var(--ease-in-out-3) infinite",
    "float-@": "@keyframes float { 50% { transform: translateY(-25%) } }",
    bounce: "bounce 2s var(--ease-squish-2) infinite",
    "bounce-@": `@keyframes bounce {
    25% { transform: translateY(-20%) }
    40% { transform: translateY(-3%) }
    0%, 60%,100% { transform: translateY(0) }
}`,
    pulse: "pulse 2s var(--ease-out-3) infinite",
    "pulse-@": "@keyframes pulse { 50% { transform: scale(.9,.9) }}",
};