<template>
  <main class="contact">
    <h2>{{ $t('contact.heading.title') }}</h2>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('contact.meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('contact.meta.description')
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Marc Fairbrother | ${this.$t('contact.meta.title')}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$t('contact.meta.description')
        }
      ]
    };
  },
  async asyncData({ store }) {
    // update current route in state when navigating to page
    await store.dispatch('i18n/setRouteParams', {
      en: { slug: 'contact' },
      fr: { slug: 'contact' }
    });
  },
  nuxtI18n: {
    paths: {
      en: '/contact',
      fr: '/contact'
    }
  }
};
</script>
