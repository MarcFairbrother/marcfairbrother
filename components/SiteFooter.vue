<template>
  <footer :class="[$nuxt.$route.path === '/' ? 'footer--home' : 'footer--other']"></footer>
</template>

<style lang="scss" scoped>
footer {
  background: var(--dark);
  color: var(--light);
  height: 40px;
  margin: 0;
  padding-bottom: 120px;
  width: 100%;
  @include breakpoint($desktop-width) {
    grid-column: 1/3;
    grid-row: 2;
    padding-bottom: 0;
    &.footer--other {
      bottom: 0;
      grid-column: 1;
      grid-row: 1;
      position: sticky;
      top: calc(100vh - 40px);
    }
  }
}
</style>