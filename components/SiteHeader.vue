<template>
  <header class="header">
    <h1>
      <nuxt-link :to="localePath('/')">
        <SvgLogo class="header__logo" />
        <span class="sr-only">Marc Fairbrother</span>
      </nuxt-link>
    </h1>
    <SiteNavigation />
    <section class="header__settings">
      <LanguageSwitcher /><ThemeSwitcher />
    </section>
    <SocialLinks />
  </header>
</template>

<script>
export default {
  mounted() {
    const settings = document.querySelector('.header__settings');
    settings.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        const header = document.querySelector('.header');
        header.classList.remove('header--opensettings');
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  &__logo {
    fill: var(--mainTextColor);
    height: 25px;
    margin: 15px 0 0 15px;
    transition: opacity 0.25s;
  }
  &__settings {
    bottom: 0;
    color: var(--mainTextColor);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 105px;
    position: fixed;
    top: 0;
    transform: translateY(50vh);
    transition: transform 0.5s ease-in;
    width: 100%;
    z-index: 5;
  }
  &--opensettings {
    .header__settings {
      transform: translateY(0);
      transition: transform 0.5s ease-out;
    }
    .header__logo {
      opacity: 0.5;
    }
  }
}
</style>