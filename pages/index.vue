<template>
  <main class="home">
    <header class="home__header">
      <h2 v-html="heading.title"></h2>
      <p>{{ heading.description }}</p>
      <section class="home__cta">
        <CtaLink
          destination="#skillset"
          :text="heading.cta"
          class-modifier="positive"
        />
        <SvgShape />
      </section>
    </header>
    <HomeSkillset :content="skillset" id="skillset" />
    <HomeBio :content="bio" />
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
  data() {
    return {
      heading: this.$t('index.heading'),
      skillset: this.$t('index.skillset'),
      bio: this.$t('index.bio'),
    };
  },
};
</script>

<style lang="scss">
.home {
  &__header {
    padding: 120px 15px 90px;
    & h2 {
      border-bottom: solid 8px var(--accentColor);
      display: inline-block;
      font-size: 2.5rem;
      margin-bottom: 30px;
      padding-bottom: 10px;
      & > span {
        display: inline-block;
        font-family: 'Roboto';
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.25;
        margin-bottom: 15px;
      }
    }
    & p {
      font-size: 1.2rem;
      line-height: 1.25;
      margin-right: 30px;
    }
  }
  &__cta {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto auto;
    margin-top: 60px;
    width: 100%;
    & > .cta {
      grid-column: 1/4;
      grid-row: 2;
      margin-bottom: 60px;
    }
    & > svg {
      stroke: var(--mainTextColor);
      grid-column: 3/6;
      grid-row: 1/3;
      transition: stroke 0.25s ease-in-out;
    }
  }
}
</style>
