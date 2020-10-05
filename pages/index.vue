<template>
  <div class="container">
    <div>
      <h1 class="title">marcfairbrother</h1>
      <p>{{ $t('test.welcome') }}</p>
    </div>
  </div>
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
