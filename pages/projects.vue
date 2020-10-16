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
      en: { slug: 'projects' },
      fr: { slug: 'projets' }
    });
  },
  nuxtI18n: {
    paths: {
      en: '/projects',
      fr: '/projets'
    }
  }
};
</script>
