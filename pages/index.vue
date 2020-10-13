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
        <SvgArrow />
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
      @include breakpoint($desktop-width) {
        grid-template-columns: min-content 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        margin: 0 auto;
        max-width: 1280px;
        min-height: calc(100vh - 53px);
        padding: 60px 30px 60px;
        width: 100%;
      }
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
        @include breakpoint($desktop-width) {
          align-self: end;
          font-size: 2.5rem;
          grid-column: 1;
          grid-row: 1;
          margin-bottom: 30px;
        }
        @include breakpoint($large-width) {
          font-size: 3rem;
          margin-bottom: 45px;
        }
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
          @include breakpoint($desktop-width) {
            font-size: 1.2rem;
            margin-bottom: 15px;
            @include breakpoint($large-width) {
              font-size: 1.4rem;
              margin-bottom: 30px;
            }
          }
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
        align-items: flex-start;
        display: flex;
        grid-column: 1/3;
        font-size: 1.4rem;
        line-height: 1.45;
        margin-right: 0;
        @include breakpoint($desktop-width) {
          font-size: 1.2rem;
          grid-column: 1;
          grid-row: 2;
          line-height: 1.25;
          @include breakpoint($large-width) {
            font-size: 1.4rem;
            line-height: 1.45;
          }
        }
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
          @include breakpoint($large-width) {
            margin-top: 0.75rem;
          }
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
      @include breakpoint($desktop-width) {
        align-items: center;
        display: flex;
        flex-direction: column;
        grid-column: 3;
        grid-row: 1/3;
        justify-content: center;
      }
    }
    & > .cta {
      grid-column: 2/4;
      grid-row: 2;
      margin-bottom: 60px;
      @include breakpoint($desktop-width) {
        order: 2;
        margin-bottom: 45px;
      }
    }
    & > svg {
      grid-column: 3/6;
      grid-row: 1/3;
      stroke: var(--mainTextColor);
      stroke-width: 2px;
      transition: stroke 0.25s ease-in-out;
      @include breakpoint($desktop-width) {
        margin-bottom: 15px;
        order: 1;
        @include breakpoint($large-width) {
          margin-bottom: 30px;
          stroke-width: 3px;
        }
      }
    }
  }
}
</style>
