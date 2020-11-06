<template>
  <section class="container">
    <article class="modal">
      <button class="modal__close" @click="$emit('click-outside')"></button>
      <p v-html="textContent"></p>
    </article>
  </section>
</template>

<script>
export default {
  props: ['textContent'],
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
  margin: 0 -15px;
  position: sticky;
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
  &__close {
    background-image: var(--close-light);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 20px;
    height: 35px;
    position: absolute;
    right: 0;
    top: 0;
    width: 35px;
  }
}
</style>
