<template>
  <ul class="socials">
    <li class="socials__item">
      <a
        href="https://linkedin.com/in/marcfairbrother/"
        target="_blank"
        rel="noopener"
        ><SvgLinkedin />
        <span class="sr-only">{{ $t('socials.linkedin') }}</span></a
      >
    </li>
    <li class="socials__item">
      <a
        href="https://github.com/MarcFairbrother"
        target="_blank"
        rel="noopener"
        ><SvgGithub />
        <span class="sr-only">{{ $t('socials.github') }}</span></a
      >
    </li>
    <li class="socials__item">
      <a
        href="https://codepen.io/marcfairbrother"
        target="_blank"
        rel="noopener"
        ><SvgCodepen />
        <span class="sr-only">{{ $t('socials.codepen') }}</span></a
      >
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.socials {
  display: flex;
  @include maxBreakpoint(1023px) {
    margin-top: 15px;
    transition: opacity 0.25s;
    @include breakpoint($tablet-width) {
      margin-top: 30px;
    }
    &__item {
      margin-right: 25px;
      @include breakpoint($tablet-width) {
        margin-right: 30px;
      }
      &:last-of-type {
        margin-right: 15px;
        @include breakpoint($tablet-width) {
          margin-right: 30px;
        }
      }
      & svg {
        height: 25px;
        fill: var(--mainTextColor);
        @include breakpoint($tablet-width) {
          height: 30px;
        }
      }
    }
    .header--opensettings & {
      opacity: 0.5;
    }
  }
  @include breakpoint($desktop-width) {
    grid-column: 3;
    grid-row: 1;
    &__item {
      margin-left: 15px;
      @include breakpoint($very-large) {
        margin-left: 20px;
      }
      & a {
        display: flex;
      }
      & svg {
        fill: var(--mainTextColor);
        height: 18px;
        @include breakpoint($very-large) {
          height: 20px;
        }
      }
    }
  }
}
</style>
