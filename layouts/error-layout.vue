<template>
  <div>
    <ErrorHeader />
    <Nuxt />
    <SiteFooter />
  </div>
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.$t('meta.ogImg')
        }
      ]
    };
  }
};
</script>
