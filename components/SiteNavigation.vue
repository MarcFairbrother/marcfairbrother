<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item nav__item--tablet">
        <nuxt-link :to="localePath('/')">
          <SvgLogo />
          {{ $t('nav.home') }}
        </nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link :to="localePath(`/${$t('about.meta.slug')}`)">
          <SvgAbout />
          {{ $t('nav.about') }}
        </nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link :to="localePath(`/${$t('projects.meta.slug')}`)">
          <SvgProjects />
          {{ $t('nav.projects') }}
        </nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link :to="localePath(`/${$t('contact.meta.slug')}`)">
          <SvgContact />
          {{ $t('nav.contact') }}
        </nuxt-link>
      </li>
      <li class="nav__item nav__item--settings nav__item--tablet">
        <button @click="toggleSettings">
          <SvgSettings />
          {{ $t('nav.settings') }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleSettings() {
      const header = document.querySelector('.header');
      header.classList.toggle('header--opensettings');
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  @include maxBreakpoint(1023px) {
    background: var(--altBg);
    border-top: solid 1px var(--altTextColor);
    color: var(--altTextColor);
    height: 75px;
    padding: 5px;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 10;
    @include breakpoint($tablet-width) {
      height: 105px;
      padding: 15px 30px;
    }
    &__list {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 10px;
      justify-items: center;
    }
    &__item {
      font-size: 0.625rem;
      @include breakpoint($tablet-width) {
        font-size: 0.75rem;
      }
      & > * {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 65px;
        padding: 10px 10px;
        justify-content: space-between;
        transition: opacity 0.25s;
        @include breakpoint($tablet-width) {
          height: 75px;
        }
        .header--opensettings & {
          opacity: 0.5;
        }
        & > svg {
          fill: var(--altTextColor);
          height: 25px;
          overflow: visible;
          transition: fill 0.25s;
          @include breakpoint($tablet-width) {
            height: 30px;
          }
        }
        &:focus {
          outline: solid 1px var(--altTextColor);
        }
        &.nuxt-link-exact-active {
          & > svg {
            fill: var(--accentColor);
            .header--opensettings & {
              fill: var(--altTextColor);
            }
          }
        }
      }
      &--settings {
        & > * {
          .header--opensettings & {
            opacity: 1;
            & > svg {
              fill: var(--accentColor);
            }
          }
        }
      }
    }
    .header--opensettings & {
      pointer-events: none;
    }
  }
  @include breakpoint($desktop-width) {
    &__list {
      display: flex;
      height: 38px;
    }
    &__item {
      margin-left: 30px;
      line-height: 38px;
      @include breakpoint($large-width) {
        margin-left: 60px;
      }
      & > a {
        align-items: center;
        border-bottom: solid 4px transparent;
        display: flex;
        height: 100%;
        &:focus {
          outline: solid 1px var(--accentColor);
          outline-offset: 5px;
        }
      }
      & > .nuxt-link-exact-active {
        border-bottom: solid 4px var(--accentColor);
      }
      & svg {
        display: none;
      }
      &--tablet {
        display: none;
      }
    }
  }
}
</style>
