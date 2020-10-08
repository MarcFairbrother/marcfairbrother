<template>
  <main class="home">
    <header class="home__header">
      <h2 v-html="heading.title"></h2>
      <p>{{ heading.description }}</p>
    </header>
    <HomeSkillset :content="skillset" />
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
    padding: 90px 15px;
    & h2 {
      border-bottom: solid 8px var(--accentColor);
      display: inline-block;
      font-size: 2.5rem;
      margin-bottom: 30px;
      & > span {
        display: inline-block;
        font-family: 'Roboto';
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.25;
        margin-bottom: 30px;
      }
    }
    & p {
      font-size: 1.2rem;
      line-height: 1.25;
      margin-right: 30px;
    }
  }
  &__bio {
    padding: 30px 15px;
  }
}
</style>
