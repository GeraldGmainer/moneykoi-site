export default defineNuxtConfig({
    modules: [
        '@nuxt/eslint',
        '@nuxt/image',
        '@nuxt/ui',
        '@nuxt/content',
        '@nuxt/icon',
        '@nuxtjs/i18n'
    ],

    i18n: {
        locales: [
            {code: 'en', file: 'en.json'},
            {code: 'de', file: 'de.json'}
        ],
        langDir: '',
        defaultLocale: 'en',
        strategy: 'prefix',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'all',
            fallbackLocale: 'en'
        }
    },

    devtools: {
        enabled: true
    },

    css: ['~/assets/css/main.css'],

    mdc: {
        highlight: {
            noApiRoute: false
        }
    },

    compatibilityDate: '2025-01-15',

    nitro: {
        prerender: {
            routes: [
                '/'
            ]
        }
    },

    eslint: {
        config: {
            stylistic: {
                commaDangle: 'never',
                braceStyle: '1tbs'
            }
        }
    }
})