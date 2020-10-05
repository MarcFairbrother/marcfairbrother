<template>
  <main class="projects">
    <h2>{{ $t('projects.heading.title') }}</h2>
  </main>
</template>

<script>
export default {
  async asyncData({ store }) {
    // update current route in state when navigating to page
    await store.dispatch('i18n/setRouteParams', {
      en: { slug: 'my-projects' },
      fr: { slug: 'mes-projets' },
    });
  },
  nuxtI18n: {
    paths: {
      en: '/my-projects',
      fr: '/mes-projets',
    },
  },
};
</script>