<template>
  <ul>
    <li><nuxt-link :to="`/${currentPath.en.slug}`">EN</nuxt-link></li>
    <li><nuxt-link :to="`/fr/${currentPath.fr.slug}`">FR</nuxt-link></li>
  </ul>
</template>


<script>
export default {
  computed: {
    // get the current route slugs from global state
    currentPath() {
      return this.$store.state.i18n.routeParams;
    },
  },
};
</script>