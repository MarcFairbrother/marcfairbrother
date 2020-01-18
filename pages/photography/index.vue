<template>
  <main>
    <h2>Photgraphy</h2>
    <p>{{ test }}</p>
    <p>{{ test2 }}</p>
    <img :src="cloudinarySrc" alt />
    <p>{{ cloudinaryTst }}</p>
  </main>
</template>

<script>
import cloudinary from "cloudinary-core";

const cloudinaryCore = new cloudinary.Cloudinary({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  secure: true
});

export default {
  data() {
    return {
      test: process.env.TEST_VARIABLE,
      test2: "text"
    };
  },
  computed: {
    cloudinarySrc() {
      return cloudinaryCore.url("sample");
    },
    cloudinaryTst() {
      return cloudinaryCore.url("marc", {
        format: "json",
        type: "list"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  height: 300vh;
}
</style>