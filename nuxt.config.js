export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Avaliação N2 - Frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  server: {
      host: '0.0.0.0',
      port: 8080,
  },  

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'node_modules/lite-youtube-embed/src/lite-yt-embed.css'
  ], 

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios' },
    { src: '~/plugins/f-date' },
    { src: '~/plugins/f-currency' },
    { src: '~/plugins/youtube.client' }     
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    '@nuxtjs/axios',
  ],

  proxy: {
    '/api': {
        target: `https://avaliacaon2-backend.robsonjoo.repl.co`,
        changeOrigin: true,
        ws: true,
        credentials: true,
        xcsrfCookieName: "csrftoken",
        xcsrfHeaderName: "X-CSRFToken"          
    },
  },

  axios: {
      proxy: true,
      prefix: '/api',
      //baseURL: 'http://localhost:8000/api/',
      progress: true,
      credentials: true,
      debug: true,
      xcsrfCookieName: "csrftoken",
      xcsrfHeaderName: "X-CSRFToken"      
  },  

 

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
