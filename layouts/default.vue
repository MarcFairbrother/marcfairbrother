<template>
  <div>
    <site-header />
    <nuxt />
  </div>
</template>

<script>
import SiteHeader from "~/components/SiteHeader.vue";

export default {
  components: {
    SiteHeader
  }
};
</script>

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
