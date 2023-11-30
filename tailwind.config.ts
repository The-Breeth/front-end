/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
        './node_modules/@gharpe-tech/**/*.{js,ts,vue}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1db2ff',
                body: '#1a1a1a',
                muted: '#808080',
                primaryDark: '#0054a6',
                secondary: '#f0f0f0',
                primaryLight: '#e7f6fd',
            },
        },
    },
    plugins: [],
}
