<template>
  <div class="jsToggleTheme">
    <button data-theme="light" v-if="userPrefersDarkTheme">Light</button>
    <button data-theme="dark" v-else>Dark</button>
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