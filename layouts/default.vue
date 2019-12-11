<template>
  <div class="container">
    <transition name="header">
      <home-header v-if="$nuxt.$route.path === '/'" />
      <site-header v-else />
    </transition>
    <nuxt />
    <transition name="footer">
      <home-footer v-if="$nuxt.$route.path === '/'" />
      <site-footer v-else />
    </transition>
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
  .header-enter-active,
  .header-leave-active {
    transition-delay: 0.675s;
  }
}
</style>
