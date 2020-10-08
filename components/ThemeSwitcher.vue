<template>
  <div class="jsToggleTheme themes" mode="out-in">
    <transition name="fade">
      <button data-theme="light" key="light" v-if="userPrefersDarkTheme">
        <span class="sr-only">{{ $t('theme.toLight') }}</span>
      </button>
      <button data-theme="dark" key="dark" v-else>
        <span class="sr-only">{{ $t('theme.toDark') }}</span>
      </button>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userPrefersDarkTheme: null,
      overrideDevicePreferences: false,
    };
  },
  methods: {
    checkUserSavedThemePreferences() {
      const savedTheme = localStorage.getItem('theme');
      savedTheme ? this.toggleTheme(savedTheme) : null;
    },
    checkDeviceThemePreferences() {
      this.userPrefersDarkTheme = matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
    },
    toggleTheme(theme) {
      document.querySelector('html').setAttribute('data-theme', theme);
      this.overrideDevicePreferences = true;
      this.saveThemePreferences(theme);
      this.userPrefersDarkTheme = theme === 'dark' ? true : false;
    },
    saveThemePreferences(theme) {
      localStorage.setItem('theme', theme);
    },
  },
  mounted() {
    // check if user has previously saved theme preferences
    this.checkUserSavedThemePreferences();
    // listen for clicks on preference buttons
    const toggleButtons = document.querySelector('.jsToggleTheme');
    toggleButtons.addEventListener('click', (e) => {
      this.toggleTheme(e.target.dataset.theme);
    });
    // if user doesn't have previously saved theme preferences
    if (!this.overrideDevicePreferences) {
      // set device's theme preference on mounted
      this.checkDeviceThemePreferences();
      // listen for changes on device settings for theme preference
      matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
        this.userPrefersDarkTheme = e.matches;
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.themes {
  background-color: var(--mainBg);
  position: relative;
  & > button {
    display: block;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    &.fade-enter-active,
    &.fade-leave-active {
      transition: all 0.65s;
    }
    &.fade-enter,
    &.fade-leave-to {
      background-position: 50% 100%;
    }
    &.fade-enter {
      opacity: 0;
    }
    &.fade-enter-active {
      transition-delay: 0.25s;
    }
    &[data-theme='light'] {
      background-image: var(--light-theme);
    }
    &[data-theme='dark'] {
      background-image: var(--dark-theme);
    }
  }
  @include maxBreakpoint(1023px) {
    border: solid 1px var(--mainTextColor);
    border-radius: 0 15px 15px 0;
    border-left: none;
    height: 37px;
    width: 56px;
    & > button {
      background-size: 20px;
    }
  }
  @include breakpoint($desktop-width) {
    height: 38px;
    width: 18px;
    & > button {
      background-size: 16px;
      bottom: 6px;
      top: 6px;
      @include breakpoint($very-large) {
        background-size: 18px;
        bottom: 5px;
        top: 5px;
      }
    }
  }
}
</style>