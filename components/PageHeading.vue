<template>
  <header class="header">
    <h2>{{ headingText.title }}</h2>
    <p v-for="(paragraph, i) in headingText.description" :key="i">
      {{ paragraph }}
    </p>
  </header>
</template>

<script>
export default {
  props: ['headingText']
};
</script>

<style lang="scss" scoped>
.header {
  padding: 120px 15px 45px;
  @include breakpoint($tablet-width) {
    padding: 180px 30px 90px;
  }
  & > h2 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    @include breakpoint($tablet-width) {
      font-size: 2rem;
      margin-bottom: 30px;
    }
  }
  & > p {
    font-size: 1rem;
    line-height: 1.45;
    margin-bottom: 15px;
    @include breakpoint($tablet-width) {
      font-size: 1.4rem;
    }
  }
}
</style>
