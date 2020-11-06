<template>
  <main class="credits">
    <header class="credits__header">
      <h2>{{ heading }}</h2>
    </header>
    <section class="credits__content">
      <p v-for="(paragraph, i) in content" :key="i" v-html="paragraph"></p>
    </section>
    <section class="credits__legal">
      <p>
        Netlify, Inc.<br />
        2325 3RD STREET,SUITE 215, SAN FRANCISCO, CA 94107 (USA)<br />
        privacy@netlify.com<br />
        www.netlify.com<br />
        +1 844-899-7312
      </p>
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('credits.meta.title'),
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    };
  },
  async asyncData({ store }) {
    // update current route in state when navigating to page
    await store.dispatch('i18n/setRouteParams', {
      en: { slug: 'credits' },
      fr: { slug: 'credits' }
    });
  },
  nuxtI18n: {
    paths: {
      en: '/credits',
      fr: '/credits'
    }
  },
  data() {
    return {
      heading: this.$t('credits.heading'),
      content: this.$t('credits.content')
    };
  }
};
</script>

<style lang="scss" scoped>
.credits {
  padding: 0 15px;
  @include breakpoint($tablet-width) {
    padding: 0 30px;
  }
  @include breakpoint($desktop-width) {
    margin: 0 auto;
    max-width: 1280px;
    padding: 0 30px;
    width: 100%;
  }
  &__header {
    margin: 120px 0 60px;
    @include breakpoint($tablet-width) {
      margin: 180px 0 120px;
    }
  }
  &__content {
    & p {
      margin-bottom: 15px;
      @include breakpoint($desktop-width) {
        width: 75%;
      }
    }
  }
  &__legal {
    & p {
      font-size: 0.8rem;
      margin: 60px 0;
      @include breakpoint($tablet-width) {
        font-size: 1rem;
      }
      @include breakpoint($desktop-width) {
        margin-top: 90px;
      }
    }
  }
}
</style>
