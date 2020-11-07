<template>
  <main class="error">
    <header class="error__header">
      <h2 v-if="error.statusCode === 404" v-html="content.notFound"></h2>
      <h2 v-else v-html="content.other"></h2>
    </header>
    <p v-html="content.cta"></p>
  </main>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error-layout',
  head() {
    return {
      title: this.error.statusCode,
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    };
  },
  data() {
    return {
      content: this.$t('error')
    };
  }
};
</script>

<style lang="scss">
.error {
  height: calc(100vh - 190px);
  padding: 0 15px;
  @include breakpoint($tablet-width) {
    padding: 0 30px;
    height: calc(100vh - 230px);
  }
  @include breakpoint($desktop-width) {
    height: calc(100vh - 240px);
    margin: 0 auto;
    max-width: 1280px;
    padding: 0 60px;
    width: 100%;
  }
  @include breakpoint($large-width) {
    height: calc(100vh - 450px);
  }
  &__header {
    margin: 120px 0 60px;
    @include breakpoint($tablet-width) {
      margin: 180px 0 120px;
    }
  }
}
</style>
