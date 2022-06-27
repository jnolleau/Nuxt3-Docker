import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        shim: false,
        typeCheck: true
    },
    app : {

        head: {
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" },
                {
                    hid: "description",
                    name: "description",
                    content: "Official Nuxt.js 3 starter for Me"
                }
            ],
            link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
        }
    },
    css: [
        // Main
        '@/assets/css/main.scss',
        '@/assets/css/custom.scss',

        // Oruga
        // '@oruga-ui/oruga-next/src/scss/oruga-full-vars.scss',

        // Bulma
        // 'bulma/sass/utilities/_all.sass',
        // 'bulma/bulma',
        // '@oruga-ui/theme-bulma/dist/scss/bulma',

        // Fontawesome
        '@fortawesome/fontawesome-svg-core/styles.css',

        // Primevue
        // 'primevue/resources/primevue.css', // <================================
        // 'primeicons/primeicons.css', // <================================
        // 'primevue/resources/themes/bootstrap4-light-blue/theme.css',
        // 'primevue/resources/themes/bootstrap4-light-purple/theme.css',
        // 'primevue/resources/themes/bootstrap4-dark-blue/theme.css',
        // 'primevue/resources/themes/bootstrap4-dark-purple/theme.css',
        // 'primevue/resources/themes/md-light-indigo/theme.css',
        // 'primevue/resources/themes/md-light-deeppurple/theme.css',
        // 'primevue/resources/themes/md-dark-indigo/theme.css',
        // 'primevue/resources/themes/md-dark-deeppurple/theme.css',
        // 'primevue/resources/themes/mdc-light-indigo/theme.css',
        // 'primevue/resources/themes/mdc-light-deeppurple/theme.css',
        // 'primevue/resources/themes/mdc-dark-indigo/theme.css',
        // 'primevue/resources/themes/mdc-dark-deeppurple/theme.css',
        // 'primevue/resources/themes/tailwind-light/theme.css',
        // 'primevue/resources/themes/fluent-light/theme.css',
        // 'primevue/resources/themes/lara-light-indigo/theme.css',
        // 'primevue/resources/themes/lara-dark-indigo/theme.css',
        // 'primevue/resources/themes/lara-light-purple/theme.css',
        // 'primevue/resources/themes/lara-dark-purple/theme.css',
        // 'primevue/resources/themes/lara-light-blue/theme.css',
        // 'primevue/resources/themes/lara-dark-blue/theme.css',
        // 'primevue/resources/themes/lara-light-teal/theme.css',
        // 'primevue/resources/themes/lara-dark-teal/theme.css',
        // 'primevue/resources/themes/saga-blue/theme.css',
        // 'primevue/resources/themes/saga-green/theme.css',
        // 'primevue/resources/themes/saga-orange/theme.css', // <================================
        // 'primevue/resources/themes/saga-purple/theme.css',
        // 'primevue/resources/themes/vela-blue/theme.css',
        // 'primevue/resources/themes/vela-green/theme.css',
        // 'primevue/resources/themes/vela-orange/theme.css',
        // 'primevue/resources/themes/vela-purple/theme.css',
        // 'primevue/resources/themes/arya-blue/theme.css',
        // 'primevue/resources/themes/arya-green/theme.css',
        // 'primevue/resources/themes/arya-orange/theme.css',
        // 'primevue/resources/themes/arya-purple/theme.css',
        // 'primevue/resources/themes/nova/theme.css',
        // 'primevue/resources/themes/nova-alt/theme.css',
        // 'primevue/resources/themes/nova-accent/theme.css',
        // 'primevue/resources/themes/nova-vue/theme.css',
        // 'primevue/resources/themes/luna-amber/theme.css',
        // 'primevue/resources/themes/luna-blue/theme.css',
        // 'primevue/resources/themes/luna-green/theme.css',
        // 'primevue/resources/themes/luna-pink/theme.css',
        // 'primevue/resources/themes/rhea/theme.css ',
    ],
    // plugins: [{ src: "~/plugins/oruga.js" }],
    dev: true,
    // build: {
    //     transpile: ['primevue'],
    // }
    ssr: false // Disable Server Side rendering
})
