<template>
  <div class="container">
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
.container {
  @include breakpoint($desktop-width) {
    display: grid;
    grid-template-columns: min-content 1fr;
  }
}
</style>
