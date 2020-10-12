<template>
  <footer class="footer">
    <section class="footer__links">
      <p>
        <nuxt-link to="/">{{ $t('footer.credits') }}</nuxt-link>
      </p>
      <p>MarcFairbrother<span class="copyleft">©</span>2020</p>
    </section>
    <section class="footer__animation">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 21" fill="none">
        <path
          d="M0 0v21h360V0c-9.0939 0-13.4061 6-22.5 6S324.0939 0 315 0c-9.0938 0-13.4062 6-22.5 6S279.094 0 270 0c-9.09399 0-13.406 6-22.5 6S234.094 0 225 0s-14.5 6-22.5 6c-9 0-13.406-6-22.5-6s-13.406 6-22.5 6-13.406-6-22.5-6-13.406 6-22.5 6S99.094 0 90 0 76.594 6 67.5 6 54.09399 0 45 0c-9.094 0-13.40601 6-22.5 6C13.406 6 9.09399 0 0 0zM-6.2087425 197.7928v21H556.29126v-15s-13.406-6-22.5-6-13.406 6-22.5 6-13.406-6-22.5-6-13.4062 6-22.5 6-13.4062-6-22.5-6-13.4062 6-22.5 6c-9.0939 0-13.4061-6-22.5-6s-13.40614 6-22.5 6-13.4061-6-22.5-6-13.4061 6-22.5 6-13.4061-6-22.5-6c-9.0938 0-13.4062 6-22.5 6s-13.406-6-22.5-6c-9.09399 0-13.406 6-22.5 6s-13.406-6-22.5-6-14.5 6-22.5 6c-9 0-13.406-6-22.5-6s-13.406 6-22.5 6-13.406-6-22.5-6-13.406 6-22.5 6c-9.094002 0-13.406002-6-22.500002-6-9.094 0-13.406 6-22.5 6s-13.40601-6-22.5-6c-9.094 0-13.40601 6-22.5 6-9.0940005 0-13.4060105-6-22.5000005-6z"
        />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 21" fill="none">
        <path
          d="M22.5 0C13.406 0 9.09399 6 0 6v15h360V6c-9.09386 0-13.4061-6-22.5-6S324.0939 6 315 6s-13.4061-6-22.5-6c-9.0938 0-13.4062 6-22.5 6s-13.406-6-22.5-6c-9.09399 0-13.406 6-22.5 6s-13.406-6-22.5-6S188 6 180 6c-9 0-13.406-6-22.5-6S144.094 6 135 6s-13.406-6-22.5-6S99.094 6 90 6c-9.094002 0-13.406-6-22.5-6S54.094 6 45 6 31.59399 0 22.5 0z"
        />
      </svg>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @include maxBreakpoint(1023px) {
    margin-bottom: 75px;
    @include breakpoint($tablet-width) {
      margin-bottom: 100px;
    }
  }
  @include breakpoint($desktop-width) {
    display: flex;
    flex-direction: column;
  }
  &__links {
    margin: 0 15px 45px;
    @include breakpoint($tablet-width) {
      margin: 0 30px 45px;
      @include breakpoint($desktop-width) {
        background: var(--altBg);
        color: var(--altTextColor);
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 30px 0 45px;
        order: 2;
        @include breakpoint($large-width) {
          padding: 0 0 30px;
        }
      }
    }
    & > p {
      font-family: 'Catamaran';
      margin-bottom: 15px;
      @include breakpoint($desktop-width) {
        &:last-of-type {
          border-left: solid 1px var(--altTextColor);
          margin-left: 15px;
          padding-left: 15px;
        }
      }
      & > .copyleft {
        display: inline-block;
        transform: rotateY(180deg);
        @include breakpoint($desktop-width) {
          font-family: 'Roboto';
        }
      }
    }
  }
  &__animation {
    align-items: end;
    display: grid;
    overflow: hidden;
    width: 100%;
    & > svg {
      grid-column: 1;
      grid-row: 1;
      margin: 0 -30px;
      @include breakpoint($desktop-width) {
        margin: 0 -30px -2px;
      }
      &:first-of-type {
        animation: wavesReversed 1.35s linear infinite;
        fill: var(--altBg);
        opacity: 0.65;
        transform: translate(0px, 2px);
      }
      &:last-of-type {
        animation: waves 1.35s linear infinite;
        fill: var(--altBg);
      }
    }
  }
}

@keyframes waves {
  from {
    transform: translate(0);
  }
  25% {
    transform: translate(4px, 4px);
  }
  50% {
    transform: translate(0px, 8px);
  }
  75% {
    transform: translate(-4px, 4px);
  }
  to {
    transform: translate(0);
  }
}

@keyframes wavesReversed {
  from {
    transform: translate(0px, 2px);
  }
  25% {
    transform: translate(-4px, 4px);
  }
  50% {
    transform: translate(0px, 6px);
  }
  75% {
    transform: translate(4px, 4px);
  }
  to {
    transform: translate(0px, 2px);
  }
}
</style>