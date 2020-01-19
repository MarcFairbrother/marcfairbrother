<template>
  <main>
    <h2>Photgraphy</h2>
    <ul v-if="photos.length > 0">
      <li v-for="photo in photos" :key="photo.public_id">
        <img :src="cloudinarySrc(photo.public_id)" alt />
      </li>
    </ul>
    <p v-else>Could not load photos</p>
  </main>
</template>

<script>
import cloudinary from "cloudinary-core";
import axios from "axios";

const cloudinaryCore = new cloudinary.Cloudinary({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  secure: true
});

const photosRequest = cloudinaryCore.url("marc", {
  format: "json",
  type: "list"
});

export default {
  data() {
    return {
      photos: []
    };
  },
  methods: {
    cloudinarySrc: function(publicId) {
      return cloudinaryCore.url(publicId);
    }
  },
  mounted() {
    axios.get(photosRequest).then(response => {
      this.photos = response.data.resources;
    });
  }
};
</script>

<style lang="scss" scoped>
main {
  height: 300vh;
}
</style>