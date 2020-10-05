<template>
  <main class="contact">
    <h2>{{ $t('contact.heading.title') }}</h2>
  </main>
</template>

<script>
export default {
  async asyncData({ store }) {
    // update current route in state when navigating to page
    await store.dispatch('i18n/setRouteParams', {
      en: { slug: 'contact-me' },
      fr: { slug: 'contactez-moi' },
    });
  },
  nuxtI18n: {
    paths: {
      en: '/contact-me',
      fr: '/contactez-moi',
    },
  },
};
</script>