<template>
  <header class="mainheader">
    <section class="mainheader__identity">
      <div class="mainheader__identity__logo">
        <nuxt-link to="/">
          <logo />
          <h1>Marc&nbsp;Fairbrother</h1>
        </nuxt-link>
      </div>
    </section>
    <nav class="mainheader__sitenav">
      <ul class="mainheader__sitenav__list">
        <li class="mainheader__sitenav__list__item mainheader__sitenav__list__item--readme">
          <nuxt-link to="/readme">Read.me</nuxt-link>
        </li>
        <li class="mainheader__sitenav__list__item mainheader__sitenav__list__item--resume">
          <nuxt-link to="/resume">Git Log --cv</nuxt-link>
        </li>
        <li class="mainheader__sitenav__list__item mainheader__sitenav__list__item--bookmarks">
          <nuxt-link to="/bookmarks">BookMarc'd</nuxt-link>
        </li>
        <li class="mainheader__sitenav__list__item mainheader__sitenav__list__item--photography">
          <nuxt-link to="/photography">Photography</nuxt-link>
        </li>
      </ul>
    </nav>
    <section class="mainheader__social">
      <ul class="mainheader__social__list">
        <li class="mainheader__social__list__item mainheader__social__list__item--linkedin">
          <a href="#" title="Marc's LinkedIn Profile">LinkedIn</a>
        </li>
        <li class="mainheader__social__list__item mainheader__social__list__item--github">
          <a href="#" title="Marc's GitHub Profile">GitHub</a>
        </li>
        <li class="mainheader__social__list__item mainheader__social__list__item--instagram">
          <a href="#" title="Marc's Instagram">Instagram</a>
        </li>
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
</style>