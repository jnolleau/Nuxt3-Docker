import { defineNuxtPlugin } from '#app';
import Oruga from '@oruga-ui/oruga-next';
import { bulmaConfig } from '@oruga-ui/theme-bulma'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import '@oruga-ui/theme-bulma/dist/bulma.css'




const customBulmaConfig = {
    ...bulmaConfig,
    iconComponent: 'vue-fontawesome',
    iconPack: 'fas' // or 'far'
}


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('vue-fontawesome', FontAwesomeIcon);
    nuxtApp.vueApp.use(Oruga, customBulmaConfig);
})
