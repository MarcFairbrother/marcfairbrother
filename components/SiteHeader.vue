<template>
  <header
    class="mainheader"
    :class="[$nuxt.$route.path === '/' ? 'mainheader--home' : 'mainheader--other' ]"
  >
    <section class="mainheader__identity">
      <div class="mainheader__identity__logo">
        <nuxt-link to="/">
          <logo />
          <h1>Marc&nbsp;Fairbrother</h1>
        </nuxt-link>
      </div>
      <div class="mainheader__identity__tagline" v-show="$nuxt.$route.path === '/'">
        <ul class="mainheader__identity__tagline__list">
          <li
            class="mainheader__identity__tagline__list__item mainheader__identity__tagline__list__item--shooter"
          >Trouble Shooter</li>
          <li
            class="mainheader__identity__tagline__list__item mainheader__identity__tagline__list__item--cowboy"
          >Code Cowboy</li>
          <li
            class="mainheader__identity__tagline__list__item mainheader__identity__tagline__list__item--explorer"
          >UX/plorer</li>
        </ul>
      </div>
    </section>
    <nav class="mainheader__sitenav">
      <ul class="mainheader__sitenav__list">
        <li class="mainheader__sitenav__readme">
          <nuxt-link to="/readme">Read.me</nuxt-link>
        </li>
        <li class="mainheader__sitenav__resume">
          <nuxt-link to="/resume">Git Log --cv</nuxt-link>
        </li>
        <li class="mainheader__sitenav__bookmarks">
          <nuxt-link to="/bookmarks">BookMarc'd</nuxt-link>
        </li>
        <li class="mainheader__sitenav__photography">
          <nuxt-link to="/photography">Photography</nuxt-link>
        </li>
      </ul>
    </nav>
    <section class="mainheader__social">
      <ul class="mainheader__social__list">
        <li>
          <a href="#">LinkedIn</a>
        </li>
        <li>
          <a href="#">GitHub</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
      </ul>
    </section>
  </header>
</template>

<script>
import Logo from "~/components/svg/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style lang="scss">
.mainheader {
  display: grid;
  grid-template-columns: 1fr;
  width: 100vw;
  &__identity {
    align-items: center;
    background: var(--clr-1);
    color: var(--clr-2);
    display: flex;
    flex-direction: column;
    grid-row: 1;
    padding-top: 15vh;
    width: 100%;
    &__logo {
      display: flex;
      flex-direction: column;
      margin-bottom: var(--fll-margin);
      width: min-content;
    }
    & a {
      color: var(--clr-2);
    }
    &__tagline {
      padding-bottom: 15vh;
      &__list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: var(--hlf-margin);
        &__item {
          align-items: center;
          display: flex;
          justify-content: center;
          &::before {
            display: flex;
            height: 25px;
            margin-right: var(--qtr-margin);
            width: 25px;
          }
          &--shooter::before {
            @include shooter;
          }
          &--cowboy::before {
            @include cowboy;
          }
          &--explorer::before {
            @include explorer;
          }
          &:last-of-type {
            grid-column: 1/3;
          }
        }
      }
    }
  }
  &__social {
    background: var(--clr-1);
    grid-row: 2;
    padding-bottom: var(--fll-margin);
    &__list {
      display: flex;
      justify-content: center;
      & li {
        border: solid 5px var(--clr-2);
        border-radius: 50%;
        margin: 0 var(--hlf-margin);
        & > a {
          display: block;
          font-size: 0;
          height: 40px;
          width: 40px;
        }
      }
    }
  }
}
</style>