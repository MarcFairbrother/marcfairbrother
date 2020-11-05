<template>
  <section class="container">
    <article class="modal">
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
        this.$emit('clickOutside');
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
  background: var(--altBg);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
  & > .modal {
    background: var(--mainBg);
    margin: 0 30px;
    padding: 60px 30px;
  }
}
</style>
