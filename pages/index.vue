<template>
  <main class="home">
    <h2>marcfairbrother</h2>
  </main>
</template>

<script>
export default {
  async asyncData({ store }) {
    // update current route in state when navigating to page
    await store.dispatch('i18n/setRouteParams', {
      en: { slug: '' },
      fr: { slug: '' },
    });
  },
};
</script>

<style lang="scss">
</style>
