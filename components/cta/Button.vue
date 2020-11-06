<template>
  <button class="cta" :class="`cta--${classModifier}`" :type="buttonType">
    <span class="cta__label">{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: ['buttonType', 'classModifier', 'text', 'clickMethod']
};
</script>

<style lang="scss" scoped>
.cta {
  display: inline-block;
  position: relative;
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
  .projects & {
    &__label::before {
      background: var(--filters-light);
      background-position: center;
      background-repeat: no-repeat;
      background-size: 20px;
      content: '';
      display: inline-block;
      height: 20px;
      margin-right: 15px;
      width: 20px;
      @media (prefers-color-scheme: light) {
        background-image: var(--filters-light);
      }
      html[data-theme='light'] & {
        background-image: var(--filters-light);
      }
      @media (prefers-color-scheme: dark) {
        background-image: var(--filters-dark);
      }
      html[data-theme='dark'] & {
        background-image: var(--filters-dark);
      }
    }
    &--close {
      & .cta__label::before {
        background: var(--close-light);
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
      }
    }
  }
  .contact & {
    margin-bottom: 60px;
    @include breakpoint($desktop-width) {
      align-self: start;
      grid-column: 2;
      justify-self: start;
    }
    &:disabled {
      opacity: 0.5;
    }
  }
}
</style>
