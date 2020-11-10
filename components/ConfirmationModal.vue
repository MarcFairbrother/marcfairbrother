<template>
  <section class="container">
    <article class="modal">
      <button class="modal__close" @click="$emit('click-outside')">
        <span class="sr-only">{{ btnLabel }}</span>
      </button>
      <p v-html="textContent"></p>
    </article>
  </section>
</template>

<script>
export default {
  props: ['textContent', 'btnLabel'],
  methods: {
    closeModal(e) {
      if (e.target === e.currentTarget) {
        this.$emit('click-outside');
      }
    }
  },
  mounted() {
    const container = document.querySelector('.container');
    container.addEventListener('click', this.closeModal);
  }
};
</script>

<style lang="scss" scoped>
.container {
  align-items: center;
  background: rgba(0, 0, 0, 0.65);
  bottom: 0;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
}
.modal {
  background: var(--mainBg);
  border: solid 2px var(--mainTextColor);
  border-radius: 4px;
  margin: 0 30px;
  padding: 60px 50px 45px;
  text-align: center;
  position: relative;
  @include breakpoint($tablet-width) {
    padding: 90px 90px 75px;
  }
  &__close {
    background-image: var(--close-light);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 20px;
    height: 20px;
    position: absolute;
    right: 15px;
    top: 15px;
    width: 20px;
    @media (prefers-color-scheme: light) {
      background-image: var(--close-light);
    }
    html[data-theme='light'] & {
      background-image: var(--close-light);
    }
    @media (prefers-color-scheme: dark) {
      background-image: var(--close-dark);
    }
    html[data-theme='dark'] & {
      background-image: var(--close-dark);
    }
    @include breakpoint($tablet-width) {
      background-size: 30px;
      height: 30px;
      right: 30px;
      top: 30px;
      width: 30px;
    }
  }
}
</style>
