<template>
  <main class="home">
    <header class="home__header">
      <h2 v-html="heading.title"></h2>
      <p>
        {{ heading.description }}
      </p>
      <section class="home__cta">
        <CtaButton
          button-type="button"
          class-modifier="positive"
          @click.native="scrollToElement('.skillset')"
          :text="heading.cta"
        />
        <SvgShape />
      </section>
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
  methods: {
    scrollToElement(element) {
      const target = document.querySelector(element);
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss">
.home {
  &__header {
    padding: 120px 15px 90px;
    @include breakpoint($tablet-width) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      padding: 180px 30px 90px;
    }
    & h2 {
      border-bottom: solid 8px var(--accentColor);
      display: inline-block;
      font-size: 2.5rem;
      margin-bottom: 30px;
      padding-bottom: 10px;
      @include breakpoint($tablet-width) {
        display: flex;
        flex-direction: column;
        font-size: 3rem;
        grid-column: 1/3;
        margin-bottom: 45px;
        width: max-content;
      }
      & > span {
        display: inline-block;
        font-family: 'Roboto';
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.25;
        margin-bottom: 15px;
        @include breakpoint($tablet-width) {
          align-items: center;
          display: flex;
          font-size: 1.4rem;
          margin-bottom: 30px;
          &::before {
            background: var(--accentColor);
            border-radius: 50%;
            content: '';
            display: inline-block;
            flex-shrink: 0;
            height: 8px;
            margin-right: 7px;
            width: 8px;
          }
        }
      }
      @include breakpoint($tablet-width) {
        & > br {
          display: none;
        }
      }
    }
    & p {
      font-size: 1.2rem;
      line-height: 1.25;
      margin-right: 30px;
      @include breakpoint($tablet-width) {
        grid-column: 1/3;
        margin-right: 0;
        align-items: flex-start;
        display: flex;
        font-size: 1.4rem;
        &::before {
          background: var(--accentColor);
          border-radius: 50%;
          content: '';
          display: inline-block;
          flex-shrink: 0;
          height: 8px;
          margin-right: 7px;
          margin-top: 0.7rem;
          width: 8px;
        }
      }
    }
  }
  &__cta {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto auto;
    margin-top: 60px;
    width: 100%;
    @include breakpoint($tablet-width) {
      grid-column: 2/5;
    }
    & > .cta {
      grid-column: 2/4;
      grid-row: 2;
      margin-bottom: 60px;
    }
    & > svg {
      grid-column: 3/6;
      grid-row: 1/3;
      stroke: var(--mainTextColor);
      stroke-width: 2px;
      transition: stroke 0.25s ease-in-out;
    }
  }
}
</style>
