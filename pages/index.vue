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
        <SvgArrow />
      </section>
      <SvgCodeToUi class="home__animation" />
    </header>
    <HomeSkillset :content="skillset" />
    <HomeBio :content="bio" />
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('index.meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('index.meta.description')
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Marc Fairbrother | ${this.$t('index.meta.title')}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$t('index.meta.description')
        }
      ]
    };
  },
  async asyncData({ store }) {
    // update current route in state when navigating to page
    await store.dispatch('i18n/setRouteParams', {
      en: { slug: '' },
      fr: { slug: '' }
    });
  },
  data() {
    return {
      heading: this.$t('index.heading'),
      skillset: this.$t('index.skillset'),
      bio: this.$t('index.bio')
    };
  },
  methods: {
    scrollToElement(element) {
      const target = document.querySelector(element);
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  },
  mounted() {
    document.activeElement.blur();
  }
};
</script>

<style lang="scss">
.home {
  &__header {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
    padding: 105px 15px 105px;
    min-height: calc(100vh - 45px);
    @include breakpoint($tablet-width) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      padding: 180px 30px 90px;
    }
    @include breakpoint($desktop-width) {
      grid-template-rows: 1fr min-content min-content min-content 1fr;
      margin: 0 auto;
      max-width: 1280px;
      min-height: calc(100vh - 53px);
      padding: 60px;
      width: 100%;
    }
    & h2 {
      border-bottom: solid 8px var(--accentColor);
      display: inline-block;
      font-size: 2.5rem;
      grid-column: 1/3;
      grid-row: 1;
      justify-self: start;
      margin-bottom: 30px;
      padding-bottom: 10px;
      @include breakpoint($tablet-width) {
        display: flex;
        flex-direction: column;
        font-size: 3rem;
        grid-column: 1/4;
        margin-bottom: 45px;
        width: max-content;
      }
      @include breakpoint($desktop-width) {
        align-self: end;
        font-size: 2.5rem;
        grid-column: 1/3;
        grid-row: 2;
        margin-bottom: 30px;
      }
      @include breakpoint($large-width) {
        font-size: 3rem;
        margin-bottom: 45px;
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
        @include breakpoint($desktop-width) {
          font-size: 1.2rem;
          margin-bottom: 15px;
        }
        @include breakpoint($large-width) {
          font-size: 1.4rem;
          margin-bottom: 30px;
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
      grid-column: 1/3;
      grid-row: 2;
      line-height: 1.25;
      margin-bottom: 45px;
      margin-right: 30px;
      @include breakpoint($tablet-width) {
        align-items: flex-start;
        display: flex;
        grid-column: 1/4;
        font-size: 1.4rem;
        line-height: 1.45;
        margin-right: 0;
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
          @include breakpoint($desktop-width) {
            margin-top: 0.5rem;
          }
          @include breakpoint($large-width) {
            margin-top: 0.75rem;
          }
        }
      }
      @include breakpoint($desktop-width) {
        font-size: 1.2rem;
        grid-column: 1/3;
        grid-row: 3;
        line-height: 1.25;
      }
      @include breakpoint($large-width) {
        font-size: 1.4rem;
        line-height: 1.45;
      }
    }
  }
  &__cta {
    align-items: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    grid-column: 2;
    grid-row: 3/5;
    justify-content: center;
    justify-self: start;
    z-index: 5;
    @include breakpoint($tablet-width) {
      grid-column: 2/4;
      justify-self: center;
    }
    @include breakpoint($desktop-width) {
      align-self: start;
      grid-column: 1/3;
      grid-row: 4;
      justify-self: start;
      margin-left: 15px;
    }
    & > .cta {
      margin: 30px 0;
      @include breakpoint($desktop-width) {
        margin-top: 0;
      }
    }
  }
  &__animation {
    grid-column: 1/3;
    grid-row: 3/5;
    opacity: 0.5;
    width: 75%;
    @include breakpoint($tablet-width) {
      grid-row: 3/5;
      width: 100%;
    }
    @include breakpoint($desktop-width) {
      align-self: start;
      grid-column: 4;
      grid-row: 2/5;
      transition: opacity 0.35s ease-in-out;
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
