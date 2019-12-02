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
    @include breakpoint($tablet-width) {
    }
    @include breakpoint($desktop-width) {
    }
  }
}
</style>
