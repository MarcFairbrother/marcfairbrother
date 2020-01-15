<template>
  <footer>
    <p>
      <nuxt-link to="/credits">Crédits</nuxt-link>
    </p>
    <p>
      MarcFairbrother
      <span class="flip">&copy;</span>
      2019
    </p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  align-items: center;
  background: var(--dark);
  color: var(--light);
  display: flex;
  font-size: 0.8rem;
  height: 40px;
  justify-content: space-between;
  margin: 0;
  padding: 0 var(--fll-margin);
  @include breakpoint($desktop-width) {
    font-size: 0.6rem;
    grid-column: 1/3;
    grid-row: 2;
    padding-bottom: 0;
    &.footer-enter-active {
      transition-delay: 0.25s;
    }
    &.footer-leave-active {
      transition: all 0s;
      transition-delay: 0.65s;
    }
    &.footer-leave-to {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 10;
    }
  }
  & a {
    color: var(--light);
  }
}
.flip {
  display: inline-block;
  transform: rotateZ(180deg);
}
</style>