<template>
  <div>
    <transition>
      <home-header v-show="$nuxt.$route.path === '/'" />
    </transition>
    <transition>
      <site-header v-show="$nuxt.$route.path !== '/'" />
    </transition>
    <nuxt />
    <site-footer />
  </div>
</template>

<script>
import HomeHeader from "~/components/HomeHeader.vue";
import SiteHeader from "~/components/SiteHeader.vue";
import SiteFooter from "~/components/SiteFooter.vue";

export default {
  components: {
    HomeHeader,
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
