<template>
  <main>
    <h2>Photgraphy</h2>
    <p>{{ test }}</p>
    <p>{{ test2 }}</p>
  </main>
</template>

<script>
export default {
  data() {
    return {
      test: process.env.TEST_VARIABLE,
      test2: "text"
    };
  }
};
</script>

<style lang="scss" scoped>
main {
  height: 300vh;
}
</style>