<template>
  <main class="about">
    <PageHeading :heading-text="heading" class="about__header" />
    <ul class="about__content">
      <li
        v-for="(block, i) in contentBlocks"
        :key="i"
        :style="
          `--icon-light: ${block.icon.light}; --icon-dark: ${block.icon.dark};`
        "
      >
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
    <footer class="about__footer">
      <CtaLink
        :destination="localePath(`/${$t('contact.meta.slug')}`)"
        :text="cta"
        class-modifier="positive"
      />
    </footer>
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
  &__header {
    @include breakpoint($tablet-width) {
      width: 75%;
      @include breakpoint($desktop-width) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-auto-rows: max-content;
        width: 100%;
      }
    }
  }
  &__content {
    margin: 0 15px 45px;
    @include breakpoint($tablet-width) {
      margin: 0 30px 45px;
      position: relative;
      @include breakpoint($desktop-width) {
        margin: 0px auto 45px;
        max-width: 1280px;
        padding: 0 30px;
        width: 100%;
      }
      &::before {
        border-bottom: dotted 2px var(--mainTextColor);
        border-left: dotted 2px var(--mainTextColor);
        border-radius: 5px;
        bottom: -92px;
        content: '';
        position: absolute;
        left: 22.5px;
        top: 0;
        width: 37.5px;
        z-index: -5;
        @include breakpoint($desktop-width) {
          left: 52.5px;
          @include breakpoint($large-width) {
            bottom: -120px;
          }
        }
      }
    }
    & h3 {
      border-bottom: solid 4px var(--accentColor);
      display: inline-block;
      font-size: 1.5rem;
      margin-bottom: 45px;
      padding-bottom: 5px;
      @include breakpoint($tablet-width) {
        font-size: 2rem;
        margin-bottom: 60px;
        @include breakpoint($large-width) {
          margin-bottom: 90px;
        }
      }
    }
    @include breakpoint($tablet-width) {
      & > li {
        &::before {
          background-color: var(--mainTextColor);
          background-image: var(--icon-light);
          background-position: center;
          background-repeat: no-repeat;
          background-size: auto 25px;
          border-radius: 50%;
          content: '';
          float: left;
          margin-right: 15px;
          margin-top: -5px;
          height: 45px;
          width: 45px;
          @media (prefers-color-scheme: light) {
            background-image: var(--icon-light);
          }
          html[data-theme='light'] & {
            background-image: var(--icon-light);
          }
          @media (prefers-color-scheme: dark) {
            background-image: var(--icon-dark);
          }
          html[data-theme='dark'] & {
            background-image: var(--icon-dark);
          }
        }
      }
    }
  }
  &__block {
    margin-bottom: 45px;
    @include breakpoint($tablet-width) {
      margin-bottom: 60px;
      @include breakpoint($large-width) {
        margin-bottom: 90px;
      }
    }
    & h4 {
      font-family: 'Roboto';
      font-size: 1rem;
      line-height: 1.45;
      margin-bottom: 15px;
      @include breakpoint($tablet-width) {
        font-size: 1.2rem;
        @include breakpoint($large-width) {
          font-size: 1.4rem;
        }
      }
    }
    @include breakpoint($tablet-width) {
      & > li {
        &::before {
          background: var(--mainBg);
          border: solid 2px var(--mainTextColor);
          border-radius: 50%;
          content: '';
          float: left;
          margin-left: 7.5px;
          margin-right: 22.5px;
          margin-top: -2px;
          height: 30px;
          width: 30px;
          @include breakpoint($large-width) {
            margin-top: 0;
          }
        }
      }
    }
  }
  &__bullets {
    @include breakpoint($desktop-width) {
      max-width: 75%;
      @include breakpoint($large-width) {
        margin-bottom: 60px;
      }
    }
    & li {
      font-size: 1rem;
      line-height: 1.45;
      margin: 0 15px 15px;
      position: relative;
      @include breakpoint($tablet-width) {
        font-size: 1.2rem;
        margin-left: 75px;
        &:last-of-type {
          margin-bottom: 30px;
        }
        @include breakpoint($large-width) {
          font-size: 1.4rem;
        }
      }
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
        @include breakpoint($tablet-width) {
          top: 10px;
          @include breakpoint($large-width) {
            top: 13px;
          }
        }
      }
    }
  }
  &__details {
    font-size: 1rem;
    line-height: 1.45;
    margin-bottom: 15px;
    @include breakpoint($tablet-width) {
      font-size: 1.2rem;
      margin-left: 60px;
      margin-bottom: 30px;
      @include breakpoint($desktop-width) {
        max-width: 75%;
        @include breakpoint($large-width) {
          font-size: 1.4rem;
          margin-bottom: 60px;
        }
      }
    }
  }
  &__footer {
    margin-left: 15px;
    margin-bottom: 45px;
    @include breakpoint($tablet-width) {
      margin-left: 90px;
      margin-bottom: 90px;
      @include breakpoint($desktop-width) {
        margin: 0 auto 90px;
        max-width: 1280px;
        padding: 0 30px;
        width: 100%;
      }
    }
    & > .cta {
      @include breakpoint($desktop-width) {
        margin-left: 60px;
      }
    }
  }
}
</style>
