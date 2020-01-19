<template>
  <main class="photography">
    <header class="photography__header">
      <h2>[ ◎°] photography</h2>
    </header>
    <article class="photography__content">
      <ul v-if="photos.length > 0" class="photography__content__list">
        <li
          v-for="(photo, i) in photos"
          v-bind:data-target="i"
          :key="i"
          @click="showCarousel($event)"
          class="photography__content__list__item"
        >
          <img :src="cloudinarySrc(photo.public_id)" v-bind:data-target="i" alt />
        </li>
      </ul>
      <p v-else>Could not load photos</p>
    </article>
    <article v-show="carouselIsVisible && currentImgPublic" class="photography__carousel">
      <img :src="cloudinarySrc(currentImgPublic)" alt class="photography__carousel__image" />
      <p @click="showPrevious()" class="photography__carousel__previous">Previous</p>
      <p @click="showNext()" class="photography__carousel__next">Next</p>
      <p @click="carouselIsVisible = !carouselIsVisible" class="photography__carousel__close">Close</p>
    </article>
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
      photos: [],
      carouselIsVisible: false,
      currentImgPublic: "",
      currentImgId: 0
    };
  },
  methods: {
    cloudinarySrc: function(publicId) {
      return cloudinaryCore.url(publicId);
    },
    showCarousel: function(e) {
      this.carouselIsVisible = !this.carouselIsVisible;
      this.currentImgId = Number(e.target.getAttribute("data-target"));
      this.currentImgPublic = this.photos[this.currentImgId].public_id;
    },
    showPrevious: function() {
      if (this.currentImgId > 0) {
        this.currentImgId = this.currentImgId - 1;
      } else {
        this.currentImgId = this.photos.length - 1;
      }
      this.currentImgPublic = this.photos[this.currentImgId].public_id;
    },
    showNext: function() {
      if (this.currentImgId < this.photos.length - 1) {
        this.currentImgId = this.currentImgId + 1;
      } else {
        this.currentImgId = 0;
      }
      this.currentImgPublic = this.photos[this.currentImgId].public_id;
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
.photography {
  @include breakpoint($desktop-width) {
    border: solid var(--hlf-margin) var(--clr-5);
    border-top: none;
  }
  &__header {
    @include breakpoint($desktop-width) {
      background: var(--light);
      border-top: solid var(--hlf-margin) var(--clr-5);
      padding-bottom: var(--hlf-margin);
      padding-top: var(--hlf-margin);
      position: sticky;
      top: 0;
      z-index: 5;
    }
    @include breakpoint($large-width) {
      padding-top: var(--fll-margin);
    }
    & h2 {
      background: var(--clr-5);
      color: var(--light);
      font-size: 2.5rem;
      margin-bottom: var(--hlf-margin);
      padding: var(--hlf-margin);
      @include breakpoint($desktop-width) {
        margin: 0 var(--hlf-margin);
      }
      @include breakpoint($large-width) {
        font-size: 2rem;
        line-height: calc(2 * var(--fll-margin));
        margin: 0 var(--fll-margin) var(--hlf-margin);
      }
    }
  }
  &__content {
    padding: 0 var(--hlf-margin) var(--hlf-margin);
    @include breakpoint($large-width) {
      padding: 0 var(--fll-margin) var(--fll-margin);
    }
    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: var(--hlf-margin);
      @include breakpoint($desktop-width) {
        grid-template-columns: repeat(3, 1fr);
      }
      @include breakpoint($large-width) {
        grid-gap: var(--fll-margin);
      }
      &__item {
        display: block;
        padding-top: 100%;
        position: relative;
        width: 100%;
        & > img {
          height: 100%;
          left: 0;
          object-fit: cover;
          position: absolute;
          top: 0;
          width: 100%;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
  &__carousel {
    background: var(--dark);
    color: var(--light);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: min-content;
    height: 100vh;
    left: 0;
    padding: var(--hlf-margin);
    position: absolute;
    right: 0;
    top: 0;
    z-index: 10;
    &__image {
      background: #fff;
      grid-column: 1/4;
      grid-row: 1;
      max-height: 85vh;
      justify-self: center;
      padding: var(--qtr-margin);
      width: auto;
    }
    &__close {
      grid-column: 2/3;
      grid-row: 2;
      justify-self: center;
      padding: var(--hlf-margin) 0;
      &:hover {
        cursor: pointer;
      }
    }
    &__previous {
      grid-column: 1/2;
      grid-row: 2;
      padding: var(--hlf-margin) 0;
      &:hover {
        cursor: pointer;
      }
    }
    &__next {
      grid-column: 3/4;
      grid-row: 2;
      justify-self: end;
      padding: var(--hlf-margin) 0;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>