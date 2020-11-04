export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: 'Marc Fairbrother | %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#0f2237' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#061524' }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-icon-180x180.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/apple-icon-152x152.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/apple-icon-144x144.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/apple-icon-120x120.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/apple-icon-114x114.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/apple-icon-76x76.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/apple-icon-72x72.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/apple-icon-60x60.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/apple-icon-57x57.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/android-icon-192x192.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon-96x96.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#0f2237' }
    ]
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
  plugins: [{ src: '~/plugins/vuelidate.js', mode: 'client' }],

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
