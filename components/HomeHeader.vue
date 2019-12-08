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
      <div class="mainheader__identity__tagline">
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
        <li class="mainheader__sitenav__list__item mainheader__sitenav__list__item--readme">
          <nuxt-link to="/readme">Read.me</nuxt-link>
        </li>
        <li class="mainheader__sitenav__list__item mainheader__sitenav__list__item--resume">
          <nuxt-link to="/resume">Git Log --cv</nuxt-link>
        </li>
        <li class="mainheader__sitenav__list__item mainheader__sitenav__list__item--bookmarks">
          <nuxt-link to="/bookmarks">BookMarc'd</nuxt-link>
        </li>
        <li class="mainheader__sitenav__list__item mainheader__sitenav__list__item--photography">
          <nuxt-link to="/photography">Photography</nuxt-link>
        </li>
      </ul>
    </nav>
    <section class="mainheader__social">
      <ul class="mainheader__social__list">
        <li class="mainheader__social__list__item mainheader__social__list__item--linkedin">
          <a href="#" title="Marc's LinkedIn Profile">LinkedIn</a>
        </li>
        <li class="mainheader__social__list__item mainheader__social__list__item--github">
          <a href="#" title="Marc's GitHub Profile">GitHub</a>
        </li>
        <li class="mainheader__social__list__item mainheader__social__list__item--instagram">
          <a href="#" title="Marc's Instagram">Instagram</a>
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

<style lang="scss" scoped>
.mainheader {
  display: grid;
  grid-template-columns: 1fr;
  @include breakpoint($desktop-width) {
    grid-column: 1/3;
    grid-row: 1;
    grid-template-columns: 45vw 1fr;
    grid-template-rows: 1fr max-content;
    height: calc(100vh - 40px);
  }
  &__identity {
    align-items: center;
    background: var(--clr-1);
    color: var(--clr-2);
    display: flex;
    flex-direction: column;
    grid-row: 1;
    height: 75vh;
    justify-content: center;
    width: 100%;
    @include breakpoint($desktop-width) {
      grid-column: 1;
      grid-row: 1;
      height: 100%;
    }
    &__logo {
      display: flex;
      flex-direction: column;
      margin-bottom: var(--fll-margin);
      width: min-content;
      &__picto {
        display: inline-block;
        margin-bottom: var(--hlf-margin);
        width: 100%;
      }
      & a {
        color: var(--clr-2);
        & h1 {
          font-size: 2rem;
        }
      }
    }
    &__tagline {
      &__list {
        display: grid;
        grid-template-columns: max-content;
        grid-gap: var(--hlf-margin);
        @include breakpoint($tablet-width) {
          grid-template-columns: 1fr 1fr;
        }
        &__item {
          align-items: center;
          display: flex;
          font-size: 1.5rem;
          @include breakpoint($tablet-width) {
            justify-content: center;
          }
          &::before {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            content: "";
            display: flex;
            height: 25px;
            margin-right: var(--qtr-margin);
            width: 25px;
            @include breakpoint($tablet-width) {
              height: 30px;
              margin-right: var(--hlf-margin);
              width: 30px;
            }
            @include breakpoint($large-width) {
              height: 35px;
              width: 35px;
            }
          }
          &--shooter::before {
            background-image: var(--shooter);
          }
          &--cowboy::before {
            background-image: var(--cowboy);
          }
          &--explorer::before {
            background-image: var(--explorer);
          }
          &:last-of-type {
            @include breakpoint($tablet-width) {
              grid-column: 1/3;
            }
          }
        }
      }
    }
  }
  &__sitenav {
    @include breakpoint($desktop-width) {
      grid-column: 2;
      grid-row: 1/3;
    }
    &__list {
      @include breakpoint($desktop-width) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        height: 100%;
      }
      &__item {
        font-size: 1.5rem;
        padding: var(--hlf-margin) var(--fll-margin);
        @include breakpoint($desktop-width) {
          display: flex;
          font-size: 4.5rem;
          justify-content: center;
          padding: var(--hlf-margin) var(--fll-margin) var(--fll-margin);
        }
        & > a {
          align-items: center;
          display: flex;
          @include breakpoint($desktop-width) {
            align-items: center;
            transform: rotate(180deg);
            writing-mode: vertical-rl;
          }
          &::before {
            background-size: 20px 20px;
            background-repeat: no-repeat;
            background-position: center;
            border-radius: 50%;
            content: "";
            height: 50px;
            margin-right: var(--hlf-margin);
            width: 50px;
            @include breakpoint($desktop-width) {
              margin-right: 0;
              margin-bottom: var(--fll-margin);
              transform: rotate(180deg);
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
  &__social {
    background: var(--clr-1);
    grid-row: 2;
    padding-bottom: var(--fll-margin);
    @include breakpoint($desktop-width) {
      grid-column: 1;
      grid-row: 2;
    }
    &__list {
      display: flex;
      justify-content: center;
      &__item {
        border: var(--rnd-border) var(--clr-2);
        border-radius: 50%;
        margin: 0 var(--qtr-margin);
        @include breakpoint($tablet-width) {
          margin: 0 var(--hlf-margin);
        }
        & > a {
          background-size: 20px 20px;
          background-repeat: no-repeat;
          background-position: center;
          display: block;
          font-size: 0;
          height: 46px;
          width: 46px;
          @include breakpoint($tablet-width) {
            height: 42px;
            width: 42px;
          }
        }
        &--linkedin > a {
          background-image: var(--linkedin);
        }
        &--github > a {
          background-image: var(--github);
        }
        &--instagram > a {
          background-image: var(--instagram);
        }
      }
    }
  }
}
</style>