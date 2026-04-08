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
                // Increase duration for slower, smoother scroll (was likely 20s–30s before)
                'marquee-vertical': 'marquee-vertical 60s linear infinite',
            },

            keyframes: {
                'marquee-vertical': {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-50%)' }, // -50% because list is 4x duplicated
                },
            },

            fontFamily: {
                sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
                mono: ["var(--font-geist-mono)", "monospace"],
                raleway: ["var(--font-raleway)"],
                hurricane: ["var(--font-hurricane)"],
                garamond: ["var(--font-cormorant-garamond)"],
            },

            images: {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            },

            backgroundImage: {
                "button-gradient": "var(--button-bg)",
                "text-gradient": "var(--gradient-text)",
                "linear-bg": "var(--linear-bg)",
            },
        },
    },
};