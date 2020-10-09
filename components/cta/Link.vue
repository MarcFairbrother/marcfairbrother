<template>
  <nuxt-link :to="destination" class="cta" :class="`cta--${classModifier}`">
    <span class="cta__label">{{ text }}</span>
  </nuxt-link>
</template>

<script>
export default {
  props: ['destination', 'classModifier', 'text'],
};
</script>

<style lang="scss" scoped>
.cta {
  display: inline-block;
  position: relative;
  &__label {
    border: solid 2px;
    border-radius: 4px;
    display: inline-block;
    font-weight: 900;
    font-size: 1.2rem;
    line-height: 1.25;
    padding: 15px;
    position: relative;
    text-align: center;
    width: 100%;
    z-index: 5;
  }
  &::after {
    border-radius: 4px;
    bottom: -4px;
    content: '';
    display: inline-block;
    left: 4px;
    position: absolute;
    right: -4px;
    top: 4px;
    z-index: 0;
  }
  &--positive {
    & .cta__label {
      background: var(--mainBg);
      border-color: var(--mainTextColor);
      color: var(--mainTextColor);
    }
    &::after {
      background: var(--mainTextColor);
      box-shadow: 0 0 3px var(--mainBg);
    }
  }
  &--negative {
    & .cta__label {
      background: var(--altBg);
      border-color: var(--altTextColor);
      color: var(--altTextColor);
    }
    &::after {
      background: var(--altTextColor);
      box-shadow: 0 0 3px var(--altBg);
    }
  }
}
</style>