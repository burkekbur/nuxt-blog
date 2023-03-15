// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    telemetry: false,
    css: ['@/assets/style.css'],
    modules: ['@nuxt/content'],
    ssr: true,
    content: {
        highlight: {
            theme: 'dark-plus',
        },
    },
});
