<template>
  <footer>
    <p>
      <nuxt-link to="/credits">Crédits</nuxt-link>
    </p>
    <p>MarcFairbrother<span class="flip">&copy;</span>2019</p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  align-items: center;
  background: var(--dark);
  color: var(--light);
  display: flex;
  font-size: 0.8rem;
  height: auto;
  justify-content: space-between;
  margin: 0;
  padding: var(--hlf-margin) var(--hlf-margin);
  @include breakpoint($tablet-width) {
    padding: var(--hlf-margin) var(--hlf-margin) var(--fll-margin);
  }
  @include breakpoint($desktop-width) {
    bottom: 0;
    font-size: 0.6rem;
    grid-column: 1;
    grid-row: 1;
    height: 40px;
    padding: 0 var(--hlf-margin);
    position: sticky;
    top: calc(100vh - 40px);
    &.footer-enter-active {
      transition: transform 0.25s ease-in-out;
    }
    &.footer-leave-active {
      transition: transform 0.25s ease-in-out;
    }
    &.footer-enter,
    &.footer-leave-to {
      transform: translateX(-100%);
    }
  }
  & p {
    padding-bottom: 70px;
    @include breakpoint($desktop-width) {
      padding-bottom: 0;
    }
  }
  & a {
    color: var(--light);
  }
  & p {
    & span.flip {
      display: inline-block;
      transform: rotateZ(180deg);
    }
  }
}
</style>