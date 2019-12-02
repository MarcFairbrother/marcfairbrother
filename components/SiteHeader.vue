<template>
  <header :class="[$nuxt.$route.path === '/' ? 'home' : 'other' ]">
    <nuxt-link class="brand" to="/">
      <logo />
      <h1>Marc&nbsp;Fairbrother</h1>
    </nuxt-link>
    <section class="tagline">
      <ul class="tagline__list">
        <li>Trouble Shooter</li>
        <li>Code Cowboy</li>
        <li>UX/plorer</li>
      </ul>
    </section>
    <nav class="sitenav">
      <ul class="sitenav__list">
        <li class="sitenav__readme">
          <nuxt-link to="/readme">Read.me</nuxt-link>
        </li>
        <li class="sitenav__resume">
          <nuxt-link to="/resume">Git Log --cv</nuxt-link>
        </li>
        <li class="sitenav__bookmarks">
          <nuxt-link to="/bookmarks">BookMarc'd</nuxt-link>
        </li>
        <li class="sitenav__photography">
          <nuxt-link to="/photography">Photography</nuxt-link>
        </li>
      </ul>
    </nav>
    <section class="social">
      <ul class="social__list">
        <li>LinkedIn</li>
        <li>GitHub</li>
        <li>Twitter</li>
      </ul>
    </section>
  </header>
</template>

<script>
import Logo from "~/components/svg/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style lang="scss" scoped>
.brand {
  display: flex;
  flex-direction: column;
  width: min-content;
}
</style>