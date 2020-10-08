<template>
  <ul class="languages">
    <li class="languages__item">
      <nuxt-link
        v-if="currentLocale === 'fr'"
        :to="`/${currentPath.en.slug}`"
        rel="alternate"
        hreflang="en"
      >
        EN
      </nuxt-link>
      <span v-else>EN</span>
    </li>
    <li class="languages__item">
      <nuxt-link
        v-if="currentLocale === 'en'"
        :to="`/fr/${currentPath.fr.slug}`"
        rel="alternate"
        hreflang="fr"
      >
        FR
      </nuxt-link>
      <span v-else>FR</span>
    </li>
  </ul>
</template>


<script>
export default {
  computed: {
    // get the current route slugs from global state
    currentPath() {
      return this.$store.state.i18n.routeParams;
    },
    // get the current locale code from nuxt-i18n
    currentLocale() {
      return this.$i18n.locale;
    },
  },
};
</script>

<style lang="scss" scoped>
.languages {
  background: var(--mainBg);
  display: flex;
  &__item {
    &:first-of-type {
      border-right: solid 1px var(--mainTextColor);
    }
    & > * {
      align-items: center;
      display: flex;
    }
    & > span {
      font-weight: 900;
    }
  }
  @include maxBreakpoint(1023px) {
    border: solid 1px var(--mainTextColor);
    border-radius: 15px 0 0 15px;
    font-size: 1.25rem;
    &__item {
      padding: 5px 15px;
      & > * {
        min-height: 25px;
        min-width: 25px;
        justify-content: center;
      }
    }
  }
  @include breakpoint($desktop-width) {
    margin: 0 15px;
    & > * {
      padding: 0 15px;
    }
  }
}
</style>