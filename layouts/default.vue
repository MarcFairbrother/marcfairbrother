<template>
  <div class="container">
    <transition name="homeHeaderTransition">
      <home-header v-show="$nuxt.$route.path === '/'" />
    </transition>
    <transition name="siteHeaderTransition">
      <site-header v-show="$nuxt.$route.path !== '/'" />
    </transition>
    <nuxt />
    <home-footer v-if="$nuxt.$route.path === '/'" />
    <site-footer v-else />
  </div>
</template>

<script>
import HomeHeader from "~/components/HomeHeader.vue";
import HomeFooter from "~/components/HomeFooter.vue";
import SiteHeader from "~/components/SiteHeader.vue";
import SiteFooter from "~/components/SiteFooter.vue";

export default {
  components: {
    HomeHeader,
    HomeFooter,
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
@include breakpoint($desktop-width) {
  .homeHeaderTransition-enter-active,
  .homeHeaderTransition-leave-active,
  .siteHeaderTransition-enter-active {
    transition-delay: 0.675s;
  }
}
</style>
