<template>
  <main class="about">
    <PageHeading :heading-text="heading" />
    <ul class="about__content">
      <li v-for="(block, i) in contentBlocks" :key="i">
        <h3>
          {{ block.heading }}
        </h3>
        <ul class="about__block">
          <li v-for="(entry, i) in block.entries" :key="i">
            <h4>{{ entry.heading }}</h4>
            <ul class="about__bullets" v-show="entry.bullets">
              <li
                v-for="(bullet, i) in entry.bullets"
                :key="i"
                v-html="bullet"
              ></li>
            </ul>
            <p
              class="about__details"
              v-show="entry.details"
              v-html="entry.details"
            ></p>
          </li>
        </ul>
      </li>
    </ul>
    <CtaLink
      :destination="localePath(`/${$t('contact.meta.slug')}`)"
      :text="cta"
      class-modifier="positive"
    />
  </main>
</template>

<script>
export default {
  async asyncData({ store }) {
    // update current route in state when navigating to page
    await store.dispatch('i18n/setRouteParams', {
      en: { slug: 'about-me' },
      fr: { slug: 'presentation' }
    });
  },
  data() {
    return {
      heading: this.$t('about.heading'),
      contentBlocks: this.$t('about.content'),
      cta: this.$t('about.cta')
    };
  },
  nuxtI18n: {
    paths: {
      en: '/about-me',
      fr: '/presentation'
    }
  }
};
</script>

<style lang="scss" scoped>
.about {
  &__content {
    margin: 0 15px 45px;
    & h3 {
      border-bottom: solid 4px var(--accentColor);
      display: inline-block;
      font-size: 1.5rem;
      margin-bottom: 45px;
      padding-bottom: 5px;
    }
  }
  &__block {
    margin-bottom: 45px;
    & h4 {
      font-family: 'Roboto';
      font-size: 1rem;
      line-height: 1.45;
      margin-bottom: 15px;
    }
  }
  &__bullets {
    & li {
      font-size: 1rem;
      line-height: 1.45;
      margin: 0 15px 15px;
      position: relative;
      &::before {
        background: var(--accentColor);
        border-radius: 50%;
        content: '';
        display: inline-block;
        height: 8px;
        left: -15px;
        position: absolute;
        top: 7px;
        width: 8px;
      }
    }
  }
  &__details {
    font-size: 1rem;
    line-height: 1.45;
    margin-bottom: 15px;
  }
  & > .cta {
    margin-left: 15px;
    margin-bottom: 45px;
  }
}
</style>
