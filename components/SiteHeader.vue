<template>
  <header>
    <div>
      <h1>
        <nuxt-link to="/">Marc Fairbrother</nuxt-link>
      </h1>
      <logo />
    </div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/readme">Read.me</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/resume">Git Log --cv</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/bookmarks">BookMarc'd</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/photography">Photography</nuxt-link>
        </li>
      </ul>
    </nav>
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