<template>
  <main class="photography">
    <header class="photography__header">
      <h2>Photography</h2>
    </header>
    <article class="photography__content">
      <ul v-if="photosInfo.length > 0" class="photography__content__list">
        <li
          v-for="(photo, i) in photosInfo"
          :key="photo.public_id"
          class="photography__content__list__item"
        >
          <button v-bind:data-target="i" @click="showCarousel($event)">
            <img
              :srcset="
                photo.locationSmall + ' 250w, ' + photo.locationMedium + ' 500w'
              "
              sizes="(max-width: 720px) 250px,
          500px"
              :src="photo.locationSrc"
              v-bind:data-target="i"
              :alt="'thumbnail for ' + photo.context.custom.alt"
            />
          </button>
        </li>
      </ul>
      <p v-else>Could not load photos</p>
    </article>
    <transition name="show-carousel">
      <article
        v-show="carouselIsVisible && currentImgPublic"
        class="photography__carousel"
      >
        <transition-group name="carousel">
          <img
            v-for="(photo, i) in photosInfo"
            :key="photo.public_id"
            :srcset="
              photo.locationMedium +
                ' 500w, ' +
                photo.locationNormal +
                ' 720w, ' +
                photo.locationSrc +
                ' 1028w'
            "
            sizes="(max-width: 720px) 500px, (min-width: 1028px) 1028px, 720px"
            :src="photo.locationSrc"
            v-show="currentImgId === i"
            :alt="photo.context.custom.alt"
            class="photography__carousel__image"
          />
        </transition-group>
        <button @click="showPrevious()" class="photography__carousel__previous">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 13.229166 13.229167"
          >
            <path
              d="M7.0514144.43683L.87366556 6.61457l6.17774884 6.17776"
              fill="none"
              stroke="#eee"
              stroke-width="1.23554981"
            />
          </svg>
        </button>
        <button @click="showNext()" class="photography__carousel__next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 13.229166 13.229167"
          >
            <path
              d="M6.1777623.43683l6.1777487 6.17774-6.1777487 6.17776"
              fill="none"
              stroke="#eee"
              stroke-width="1.23554981"
            />
          </svg>
        </button>
        <button @click="closeCarousel()" class="photography__carousel__close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 13.229166 13.229167"
          >
            <g fill="none" stroke="#eee" stroke-width="1.23555005">
              <path
                d="M.43683292 12.79233L12.792334.43683M.43683292.43683L12.792334 12.79233"
              />
            </g>
          </svg>
        </button>
      </article>
    </transition>
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
  head() {
    return {
      titleTemplate: "%s | Photography",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Photographe amateur, je m'intéresse particulièrement aux lignes, aux formes et aux silhouettes"
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "Marc Fairbrother | Photography"
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Photographe amateur, je m'intéresse particulièrement aux lignes, aux formes et aux silhouettes"
        }
      ]
    };
  },
  data() {
    return {
      photos: [],
      carouselIsVisible: false,
      currentImgPublic: "",
      currentImgId: ""
    };
  },
  computed: {
    photosInfo() {
      return this.photos.map(photo => {
        let photoUrl = this.cloudinarySrc(photo.public_id);
        return {
          ...photo,
          locationSrc: photoUrl,
          // cloudinary api transform options not working as expected on url method
          // transform requests built on the fly instead
          locationSmall: this.cloudinaryTransform(photoUrl, 250),
          locationMedium: this.cloudinaryTransform(photoUrl, 700),
          locationNormal: this.cloudinaryTransform(photoUrl, 1000)
        };
      });
    }
  },
  methods: {
    cloudinarySrc: function(publicId) {
      // returns url for source image from cloudinary
      return cloudinaryCore.url(publicId);
    },
    cloudinaryTransform: function(str, width) {
      // injects transformation request into url
      return str.replace(`upload/v1/`, `upload/c_scale,w_${width}/v1/`);
    },
    showCarousel: function(e) {
      // set carousel to visible
      this.carouselIsVisible = !this.carouselIsVisible;
      // get clicked image to display on opening carousel
      this.currentImgId = Number(e.target.getAttribute("data-target"));
      this.currentImgPublic = this.photosInfo[this.currentImgId].public_id;
    },
    showPrevious: function() {
      const photoCarousel = document.querySelector(".photography__carousel");
      // current image should exit right, new image should enter left
      photoCarousel.style.setProperty("--leaving", "translateX(100%)");
      photoCarousel.style.setProperty("--starting", "translateX(-100%)");
      // check if current image is first in the list
      if (this.currentImgId > 0) {
        // if current is not the first image go to the previous image
        this.currentImgId = this.currentImgId - 1;
      } else {
        // if current is the first image go to the last image
        this.currentImgId = this.photosInfo.length - 1;
      }
      // display new current image
      this.currentImgPublic = this.photosInfo[this.currentImgId].public_id;
    },
    showNext: function() {
      const photoCarousel = document.querySelector(".photography__carousel");
      // current image should exit left, new image should enter right
      photoCarousel.style.setProperty("--leaving", "translateX(-100%)");
      photoCarousel.style.setProperty("--starting", "translateX(100%)");
      // check if current image is last in the list
      if (this.currentImgId < this.photosInfo.length - 1) {
        // if current is not the last image go to the next image
        this.currentImgId = this.currentImgId + 1;
      } else {
        // if current is the last image go to the first image
        this.currentImgId = 0;
      }
      // display new current image
      this.currentImgPublic = this.photosInfo[this.currentImgId].public_id;
    },
    closeCarousel: function() {
      const photoCarousel = document.querySelector(".photography__carousel");
      // unset inline style properties to fall back on original css
      photoCarousel.style.setProperty("--leaving", "");
      photoCarousel.style.setProperty("--starting", "");
      // set carousel to hidden
      this.carouselIsVisible = !this.carouselIsVisible;
      // reset current image
      this.currentImgId = "";
    },
    checkKey: function(e) {
      e = e || window.event;
      if (e.keyCode == "37" && this.carouselIsVisible === true) {
        this.showPrevious();
      } else if (e.keyCode == "39" && this.carouselIsVisible === true) {
        this.showNext();
      } else if (e.keyCode == "27" && this.carouselIsVisible === true) {
        this.closeCarousel();
      }
    }
  },
  mounted() {
    // fetch images from cloudinary api
    axios.get(photosRequest).then(response => {
      this.photos = response.data.resources;
    });
    // listen for keydown event
    document.onkeydown = this.checkKey;
  }
};
</script>

<style lang="scss" scoped>
.photography {
  &.loading {
    overflow: hidden;
  }
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
      text-transform: lowercase;
      &::before {
        content: "[ ◎°] ";
      }
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
        & button,
        & img {
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
        & img {
          transform-origin: center;
          transition: transform 0.35s ease-in-out;
        }
        & button {
          overflow: hidden;
          &:focus,
          &:hover {
            & img {
              transform: scale(1.25);
            }
          }
        }
      }
    }
  }
  &__carousel {
    --leaving: translateY(-100%);
    --starting: translateY(-100%);
    background: var(--dark);
    color: var(--light);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 75vh 25vh;
    height: 100vh;
    left: 0;
    padding: var(--hlf-margin);
    position: fixed;
    right: 0;
    top: 0;
    z-index: 10;
    @include breakpoint($desktop-width) {
      --leaving: translateY(100%);
      --starting: translateY(100%);
      grid-template-columns: max-content 1fr max-content;
      grid-template-rows: var(--hlf-margin) calc(100vh - var(--fll-margin));
      padding: 0 var(--hlf-margin) var(--hlf-margin);
    }
    & > span {
      align-self: stretch;
      display: grid;
      grid-column: 1/4;
      grid-row: 1;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      height: 100%;
      width: 100%;
      @include breakpoint($desktop-width) {
        grid-column: 2;
        grid-row: 2;
      }
    }
    &__image {
      align-self: center;
      background: #fff;
      grid-column: 1;
      grid-row: 1;
      justify-self: center;
      max-height: 100%;
      padding: var(--qtr-margin);
      width: auto;
      @include breakpoint($desktop-width) {
        padding: var(--hlf-margin);
      }
    }
    & svg {
      height: var(--hlf-margin);
      width: var(--hlf-margin);
    }
    &__close {
      grid-column: 2/3;
      grid-row: 2;
      justify-self: center;
      padding: var(--hlf-margin) 0;
      @include breakpoint($desktop-width) {
        align-self: start;
        grid-column: 3;
        justify-self: end;
        padding: 0;
      }
      &:hover {
        cursor: pointer;
      }
    }
    &__previous {
      grid-column: 1/2;
      grid-row: 2;
      justify-self: start;
      padding: var(--hlf-margin) 0;
      @include breakpoint($desktop-width) {
        align-self: center;
        grid-column: 1;
        grid-row: 2;
        & svg {
          height: var(--fll-margin);
          width: var(--fll-margin);
        }
      }
      &:hover {
        cursor: pointer;
      }
    }
    &__next {
      grid-column: 3/4;
      grid-row: 2;
      justify-self: end;
      padding: var(--hlf-margin) 0;
      @include breakpoint($desktop-width) {
        align-self: center;
        grid-column: 3;
        grid-row: 2;
        & svg {
          height: var(--fll-margin);
          width: var(--fll-margin);
        }
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
}
// fade carousel into view
.show-carousel-enter-active,
.show-carousel-leave-active {
  transition: opacity 0.25s;
}
.show-carousel-leave-active {
  transition-delay: 0.4s;
}
.show-carousel-enter,
.show-carousel-leave-to {
  opacity: 0;
}
// animate transition between photos
.carousel-enter-active,
.carousel-leave-active {
  transition: transform 0.5s, opacity 0.45s;
}
.carousel-enter {
  opacity: 0.25;
  transform: var(--starting) scale(0.8);
  z-index: -5;
}
.carousel-leave-to {
  opacity: 0;
  transform: var(--leaving) scale(0.8);
  z-index: -5;
}
</style>