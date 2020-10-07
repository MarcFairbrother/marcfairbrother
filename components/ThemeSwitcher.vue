<template>
  <div class="jsToggleTheme themes">
    <button data-theme="light" key="light" v-if="userPrefersDarkTheme">
      <span class="sr-only">{{ $t('theme.toLight') }}</span>
    </button>
    <button data-theme="dark" key="dark" v-else>
      <span class="sr-only">{{ $t('theme.toDark') }}</span>
    </button>
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
  & > button {
    display: block;
    background-position: 50% 50%;
    background-repeat: no-repeat;
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
    padding: 5px 15px;
    & > button {
      background-size: 20px;
      height: 25px;
      width: 25px;
    }
  }
  @include breakpoint($desktop-width) {
    & > button {
      background-size: 16px;
      height: 16px;
      width: 16px;
      @include breakpoint($very-large) {
        background-size: 18px;
        height: 18px;
        width: 18px;
      }
    }
  }
}
</style>