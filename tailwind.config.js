export default {
    content: [
        "./src/app/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
        "./src/pages/**/*.{js,jsx,ts,tsx}",
    ],

    theme: {
        container: {
            center: true,
            padding: "1rem",
            screens: {
                sm: "540px",
                md: "720px",
                lg: "960px",
                xl: "1140px",
                "2xl": "1320px",
            },
        },

        extend: {
            colors: {
                purple: "var(--color-purple)",
                darkpurple: "var(--color-darkpurple)",
                golden: "var(--color-golden)",
                text: "var(--color-text)",
                white: "var(--color-white)",
            },

            animation: {
                'marquee-vertical': 'marquee-vertical 30s linear infinite',
            },

            keyframes: {
                'marquee-vertical': {
                    '0%': { transform: 'translateY(0%)' },
                    '100%': { transform: 'translateY(-50%)' },
                },
            },

            fontFamily: {
                sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
                mono: ["var(--font-geist-mono)", "monospace"],
                raleway: ["var(--font-raleway)"],
                hurricane: ["var(--font-hurricane)"],
                gideon: ["var(--font-gideon-roman)"],
            },

            backgroundImage: {
                "button-gradient": "var(--button-bg)",
                "text-gradient": "var(--gradient-text)",
                "linear-bg": "var(--linear-bg)",
            },
        },
    },
};