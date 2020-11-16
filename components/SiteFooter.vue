<template>
  <footer class="footer">
    <section class="footer__links">
      <p>
        <nuxt-link :to="localePath(`/${$t('credits.meta.slug')}`)">{{
          $t('footer.credits')
        }}</nuxt-link>
      </p>
      <p>MarcFairbrother<span class="copyleft">©</span>2020</p>
    </section>
    <section class="footer__illustration">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 21">
        <path
          d="M0 0v21h360V0c-9.0939 0-13.4061 6-22.5 6S324.0939 0 315 0c-9.0938 0-13.4062 6-22.5 6S279.094 0 270 0c-9.09399 0-13.406 6-22.5 6S234.094 0 225 0s-14.5 6-22.5 6c-9 0-13.406-6-22.5-6s-13.406 6-22.5 6-13.406-6-22.5-6-13.406 6-22.5 6S99.094 0 90 0 76.594 6 67.5 6 54.09399 0 45 0c-9.094 0-13.40601 6-22.5 6C13.406 6 9.09399 0 0 0zM-6.2087425 197.7928v21H556.29126v-15s-13.406-6-22.5-6-13.406 6-22.5 6-13.406-6-22.5-6-13.4062 6-22.5 6-13.4062-6-22.5-6-13.4062 6-22.5 6c-9.0939 0-13.4061-6-22.5-6s-13.40614 6-22.5 6-13.4061-6-22.5-6-13.4061 6-22.5 6-13.4061-6-22.5-6c-9.0938 0-13.4062 6-22.5 6s-13.406-6-22.5-6c-9.09399 0-13.406 6-22.5 6s-13.406-6-22.5-6-14.5 6-22.5 6c-9 0-13.406-6-22.5-6s-13.406 6-22.5 6-13.406-6-22.5-6-13.406 6-22.5 6c-9.094002 0-13.406002-6-22.500002-6-9.094 0-13.406 6-22.5 6s-13.40601-6-22.5-6c-9.094 0-13.40601 6-22.5 6-9.0940005 0-13.4060105-6-22.5000005-6z"
        />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 21">
        <path
          d="M22.5 0C13.406 0 9.09399 6 0 6v15h360V6c-9.09386 0-13.4061-6-22.5-6S324.0939 6 315 6s-13.4061-6-22.5-6c-9.0938 0-13.4062 6-22.5 6s-13.406-6-22.5-6c-9.09399 0-13.406 6-22.5 6s-13.406-6-22.5-6S188 6 180 6c-9 0-13.406-6-22.5-6S144.094 6 135 6s-13.406-6-22.5-6S99.094 6 90 6c-9.094002 0-13.406-6-22.5-6S54.094 6 45 6 31.59399 0 22.5 0z"
        />
      </svg>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      moveRight: true
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @include maxBreakpoint(1023px) {
    margin-bottom: 75px;
    @include breakpoint($tablet-width) {
      margin-bottom: 100px;
    }
  }
  @include breakpoint($desktop-width) {
    // hides a rendering issue leaving a small gap between the links and illustration sections at certain screen widths
    background: linear-gradient(
      var(--mainBg) 0%,
      var(--mainBg) calc(100% - 101px),
      var(--altBg) calc(100% - 100px),
      var(--altBg) 100%
    );
  }
  &__links {
    margin: 0 15px 45px;
    @include breakpoint($tablet-width) {
      margin: 0 30px 45px;
    }
    @include breakpoint($desktop-width) {
      align-items: flex-start;
      background: var(--altBg);
      color: var(--altTextColor);
      display: flex;
      height: 90px;
      justify-content: center;
      margin: 0;
      order: 2;
    }
    @include breakpoint($large-width) {
      padding: 0 0 30px;
    }
    & > p {
      font-family: 'Catamaran', 'Arial Black', Arial, Helvetica, sans-serif;
      margin-bottom: 15px;
      @include maxBreakpoint(1023px) {
        &:last-of-type {
          margin-bottom: 0;
        }
      }
      @include breakpoint($desktop-width) {
        line-height: 1.45;
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
          font-family: 'Roboto', Arial, Helvetica, sans-serif;
        }
      }
    }
  }
  &__illustration {
    align-items: end;
    display: grid;
    overflow: hidden;
    width: 100%;
    & svg {
      grid-column: 1;
      grid-row: 1;
      @include breakpoint($desktop-width) {
        margin: 35px 0 0;
      }
      @include breakpoint($large-width) {
        margin-top: 50px;
      }
      @include breakpoint($very-large) {
        margin-top: 60px;
      }
      &:first-of-type {
        fill: var(--altBg);
        opacity: 0.5;
      }
      &:last-of-type {
        fill: var(--altBg);
      }
    }
  }
}
</style>
