<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" class="arrow">
    <path
      d="M5 5 50 45 95 5"
      fill="none"
      stroke-linejoin="round"
      stroke-linecap="round"
    />
  </svg>
</template>

<style lang="scss" scoped>
.arrow {
  stroke: var(--mainTextColor);
  stroke-width: 8px;
  transition: transform 0.25s;
  width: 30px;
  @include breakpoint($large-width) {
    width: 45px;
  }
  .home__cta .cta:hover ~ & {
    transform: translateY(10px) scale(1.2);
  }
}
</style>
