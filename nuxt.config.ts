// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        optimizeDeps: {
            include: ['lodash.debounce'],
        },
    },
    imports: {
        dirs: ['stores', 'utils', 'utils/**'],
    },
    modules: ['@vueuse/nuxt', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxtjs/tailwindcss'],
    pinia: {
        autoImports: [
            // Automatically imports `defineStore`
            'defineStore', // This will import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // This will import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
    postcss: {
        plugins: {
            tailwindcss: {
                content: ['./components/**/*.{js,vue,ts}', './pages/**/*.vue'],
            },
            autoprefixer: {},
        },
    },
    css: [],
    app: {
        head: {
            title: 'Breeth',
            meta: [{ name: 'description', content: 'Content Creation Platform' }],
            // Font Family
            link: [
                {
                    hid: 'icon',
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: 'https://assets.infinity-api.net/gharpe/home/fav-icon-g.svg',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=DM+Sans&display=swap',
                },
            ],
            script: [{ src: 'https://cdn.tailwindcss.com' }],
        },
    },
    runtimeConfig: {
        // Private config that is only available on the server
        jwtKey: '123',
        // Config within public will be also exposed to the client
        public: {
            origin: process.env.NUXT_PUBLIC_ORIGIN || '', // Will be overwritten by Env Variable
        },
    },
    ssr: false,
    nitro: {
        minify: true,
        timing: true,
        sourceMap: false,
        compressPublicAssets: {
            gzip: true,
            brotli: true,
        },
        preset: 'vercel',
    },
})
