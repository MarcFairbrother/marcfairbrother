export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: 'Marc Fairbrother | %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // Global SCSS file
    '@/assets/scss/main.scss'
  ],

  // Style resources to load in components
  styleResources: {
    scss: ['~/assets/scss/utils/_breakpoints.scss']
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: {
    dirs: [
      '~/components',
      {
        path: '~/components/svg/',
        prefix: 'Svg'
      },
      {
        path: '~/components/cta/',
        prefix: 'Cta'
      }
    ]
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/style-resources'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['nuxt-i18n'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // nuxt-i18n options
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en-EN.js'
      },
      {
        code: 'fr',
        name: 'Français',
        file: 'fr-FR.js'
      }
    ],
    lazy: true,
    langDir: 'lang/'
  }
};
