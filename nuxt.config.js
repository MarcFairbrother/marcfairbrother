export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Marc Fairbrother',
    titleTemplate: '%s | 🔫 Trouble Shooter, 🤠 Code Cowboy & 🚀 UX-plorer',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Project Management, Web Design & Development'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content:
          'Marc Fairbrother | 🔫 Trouble Shooter, 🤠 Code Cowboy & 🚀 UX-plorer'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Project Management, Web Design & Development'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://marcfairbrother.com/marcfairbrother_og.png'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/cloudinary-vue', '~/plugins/functions'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/dotenv'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Style Resources configuration
   */
  styleResources: {
    scss: ['assets/scss/_breakpoints.scss']
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    extend(config, ctx) {}
  },
  dotenv: {
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME
  }
};
