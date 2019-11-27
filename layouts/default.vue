<template>
  <div>
    <header>
      <h1>Marc Fairbrother</h1>
    </header>
    <nuxt />
  </div>
</template>

<style lang="scss">
body {
  h1 {
    color: $red;
    @include breakpoint($tablet-width) {
      color: $blue;
    }
    @include breakpoint($desktop-width) {
      color: $yellow;
    }
  }
}
</style>
