<template>
  <ul>
    <li>
      <nuxt-link
        v-if="currentLocale === 'fr'"
        :to="`/${currentPath.en.slug}`"
        rel="alternate"
        hreflang="en"
      >
        EN
      </nuxt-link>
      <span v-else>EN</span>
    </li>
    <li>
      <nuxt-link
        v-if="currentLocale === 'en'"
        :to="`/fr/${currentPath.fr.slug}`"
        rel="alternate"
        hreflang="fr"
      >
        FR
      </nuxt-link>
      <span v-else>FR</span>
    </li>
  </ul>
</template>


<script>
export default {
  computed: {
    // get the current route slugs from global state
    currentPath() {
      return this.$store.state.i18n.routeParams;
    },
    // get the current locale code from nuxt-i18n
    currentLocale() {
      return this.$i18n.locale;
    },
  },
};
</script>