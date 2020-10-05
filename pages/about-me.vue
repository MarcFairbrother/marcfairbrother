<template>
  <main class="about">
    <h2>{{ $t('about.heading.title') }}</h2>
  </main>
</template>

<script>
export default {
  async asyncData({ store }) {
    // update current route in state when navigating to page
    await store.dispatch('i18n/setRouteParams', {
      en: { slug: 'about-me' },
      fr: { slug: 'presentation' },
    });
  },
  nuxtI18n: {
    paths: {
      en: '/about-me',
      fr: '/presentation',
    },
  },
};
</script>