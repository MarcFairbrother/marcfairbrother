<template>
  <img :src="imgUrl" :alt="imgAlt" class="screenshot" />
</template>

<script>
export default {
  props: ['imgUrl', 'imgAlt']
};
</script>

<style lang="scss" scoped>
.screenshot {
  border: solid 1px var(--altBg);
  border-radius: 4px;
  display: inline-block;
  height: auto;
  margin: -30px 0 30px;
  width: 100%;
}
</style>
