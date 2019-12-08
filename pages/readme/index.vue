<template>
  <main class="readme">
    <h2>Read Me</h2>
  </main>
</template>

<style lang="scss" scoped>
.readme {
  @include breakpoint($desktop-width) {
    border: solid var(--hlf-margin) var(--clr-2);
  }
}
</style>