<template>
  <nuxt-link :to="destination" class="cta" :class="`cta--${classModifier}`">
    <span class="cta__label">{{ text }}</span>
  </nuxt-link>
</template>

<script>
export default {
  props: ['destination', 'classModifier', 'text']
};
</script>

<style lang="scss" scoped>
.cta {
  display: inline-block;
  position: relative;
  &:focus {
    outline: none;
  }
  &__label {
    align-items: center;
    border: solid 2px;
    border-radius: 4px;
    display: flex;
    font-weight: 900;
    font-size: 1rem;
    line-height: 1.45;
    padding: 15px 30px;
    position: relative;
    text-align: center;
    width: 100%;
    transition: border 0.25s ease-in-out;
    z-index: 5;
    @include breakpoint($desktop-width) {
      padding: 15px 30px;
    }
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
    transition: background-color 0.25s ease-in-out;
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
    &:hover,
    &:focus {
      & .cta__label {
        border-color: var(--accentColor);
      }
      &::after {
        background: var(--accentColor);
      }
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
    &:hover,
    &:focus {
      & .cta__label {
        border-color: var(--accentColor);
      }
      &::after {
        background: var(--accentColor);
      }
    }
  }
}
</style>
