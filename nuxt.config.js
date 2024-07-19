// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vite-pwa/nuxt'
  ],
  pwa:{
    manifest:{
      name:'web-app',
      short_name:'PWA',
      description:'nuxt-pwa',
      icons:[
        {
          src:'icon/logo_64x64.png',
          sizes:'64x64',
          type:'image/png',
        },
        {
          src:'icon/logo_128x128.png',
          sizes:'128x128',
          type:'image/png',
        },
        {
          src:'icon/logo_192x192.png',
          sizes:'192x192',
          type:'image/png',
        },
        {
          src:'icon/logo_512x512.png',
          sizes:'512x512',
          type:'image/png',
        }

      ]
    },
    workbox:{
      navigateFallback:'/',
    },
    devOptions:{
      enabled:true,
      type:'module',
    }
  }
})
