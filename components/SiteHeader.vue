<template>
  <header class="mainheader">
    <section class="mainheader__identity">
      <div class="mainheader__identity__logo">
        <nuxt-link to="/">
          <div class="mainheader__identity__logo__picto">
            <logo />
          </div>
          <h1>Marc&nbsp;Fairbrother</h1>
        </nuxt-link>
      </div>
    </section>
    <nav class="mainheader__sitenav">
      <ul class="mainheader__sitenav__list">
        <li
          class="mainheader__sitenav__list__item mainheader__sitenav__list__item--readme"
          :class="[$nuxt.$route.path === '/readme' ? 'mainheader__sitenav__list__item--active' : 'mainheader__sitenav__list__item--inactive']"
        >
          <nuxt-link to="/readme">Read.me</nuxt-link>
        </li>
        <li
          class="mainheader__sitenav__list__item mainheader__sitenav__list__item--resume"
          :class="[$nuxt.$route.path === '/resume' ? 'mainheader__sitenav__list__item--active' : 'mainheader__sitenav__list__item--inactive']"
        >
          <nuxt-link to="/resume">Git Log --cv</nuxt-link>
        </li>
        <li
          class="mainheader__sitenav__list__item mainheader__sitenav__list__item--bookmarks"
          :class="[$nuxt.$route.path === '/bookmarks' ? 'mainheader__sitenav__list__item--active' : 'mainheader__sitenav__list__item--inactive']"
        >
          <nuxt-link to="/bookmarks">BookMarc'd</nuxt-link>
        </li>
        <li
          class="mainheader__sitenav__list__item mainheader__sitenav__list__item--photography"
          :class="[$nuxt.$route.path === '/photography' ? 'mainheader__sitenav__list__item--active' : 'mainheader__sitenav__list__item--inactive']"
        >
          <nuxt-link to="/photography">Photography</nuxt-link>
        </li>
      </ul>
    </nav>
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

<style lang="scss" scoped>
.mainheader {
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 4fr;
  left: 0;
  position: fixed;
  right: 0;
  @include breakpoint($desktop-width) {
    background: var(--dark);
    bottom: auto;
    display: flex;
    flex-direction: column;
    grid-column: 1;
    grid-row: 1;
    height: calc(100vh - 40px);
    padding: var(--hlf-margin) 0 0 var(--hlf-margin);
    right: auto;
    top: 0;
    position: sticky;
  }
  &__identity {
    align-items: center;
    background: var(--clr-1);
    display: flex;
    flex-direction: column;
    grid-column: 1;
    justify-content: flex-end;
    padding: var(--qtr-margin);
    @include breakpoint($desktop-width) {
      border-radius: 5px;
      margin-bottom: var(--hlf-margin);
      margin-right: var(--hlf-margin);
      padding: var(--hlf-margin);
    }
    &__logo {
      &__picto {
        margin-bottom: var(--qtr-margin);
        width: 50px;
        @include breakpoint($desktop-width) {
          width: 100%;
        }
      }
      & a {
        align-items: center;
        color: var(--clr-2);
        display: flex;
        flex-direction: column;
        & h1 {
          font-size: 0.8rem;
          @include breakpoint($desktop-width) {
            font-size: 2rem;
          }
          @include breakpoint($large-width) {
            font-size: 1.8rem;
          }
        }
      }
    }
  }
  &__sitenav {
    grid-column: 2;
    &__list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      height: 100%;
      @include breakpoint($desktop-width) {
        display: flex;
        flex-direction: column;
      }
      &__item {
        align-items: center;
        display: flex;
        flex-direction: column;
        font-size: 0.8rem;
        justify-content: flex-end;
        padding: var(--qtr-margin);
        @include breakpoint($desktop-width) {
          align-items: flex-start;
          border-radius: 5px;
          font-size: 1.5rem;
          margin-bottom: var(--hlf-margin);
          margin-right: var(--hlf-margin);
          padding: var(--hlf-margin);
          transition: all 0.15s ease-in-out;
          &--active {
            border-radius: 5px 0 0 5px;
            margin-right: 0;
          }
        }
        @include breakpoint($large-width) {
          font-size: 1.2rem;
        }
        & > a {
          align-items: center;
          display: flex;
          flex-direction: column;
          @include breakpoint($desktop-width) {
            flex-direction: row;
          }
          &::before {
            background-size: 16px 16px;
            background-repeat: no-repeat;
            background-position: center;
            border-radius: 50%;
            content: "";
            height: 34px;
            margin-bottom: var(--qtr-margin);
            width: 34px;
            @include breakpoint($desktop-width) {
              background-size: 20px 20px;
              height: 50px;
              margin-bottom: 0;
              margin-right: var(--hlf-margin);
              width: 50px;
            }
          }
        }
        &--readme {
          background: var(--clr-2);
          & > a {
            &:any-link {
              color: var(--clr-3);
            }
            &::before {
              background-image: var(--readme);
              border: var(--rnd-border) var(--clr-3);
            }
          }
        }
        &--resume {
          background: var(--clr-3);
          & > a {
            &:any-link {
              color: var(--clr-4);
            }
            &::before {
              background-image: var(--resume);
              border: var(--rnd-border) var(--clr-4);
            }
          }
        }
        &--bookmarks {
          background: var(--clr-4);
          & > a {
            &:any-link {
              color: var(--clr-5);
            }
            &::before {
              background-image: var(--bookmarks);
              border: var(--rnd-border) var(--clr-5);
            }
          }
        }
        &--photography {
          background: var(--clr-5);
          & > a {
            &:any-link {
              color: var(--clr-1);
            }
            &::before {
              background-image: var(--photography);
              border: var(--rnd-border) var(--clr-1);
            }
          }
        }
      }
    }
  }
}
</style>