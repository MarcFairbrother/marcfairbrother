<template>
  <div>
    <site-header />
    <nuxt />
    <site-footer />
  </div>
</template>

<script>
import SiteHeader from "~/components/SiteHeader.vue";
import SiteFooter from "~/components/SiteFooter.vue";

export default {
  components: {
    SiteHeader,
    SiteFooter
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
