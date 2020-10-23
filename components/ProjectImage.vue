<template>
  <picture>
    <source
      type="image/webp"
      media="(max-width: 767px)"
      :srcset="`/img/projects/webp/${imgUrl.mobile}.webp`"
    />
    <source
      type="image/png"
      media="(max-width: 767px)"
      :srcset="`/img/projects/png/${imgUrl.mobile}.png`"
    />
    <source
      type="image/webp"
      media="(min-width: 768px)"
      :srcset="`/img/projects/webp/${imgUrl.tablet}.webp`"
    />
    <source
      type="image/png"
      media="(min-width: 768px)"
      :srcset="`/img/projects/png/${imgUrl.tablet}.png`"
    />
    <source
      type="image/webp"
      media="(min-width: 1200px)"
      :srcset="`/img/projects/webp/${imgUrl.large}.webp`"
    />
    <source
      type="image/png"
      media="(min-width: 1200px)"
      :srcset="`/img/projects/png/${imgUrl.large}.png`"
    />
    <img
      :src="`/img/projects/png/${imgUrl.large}.png`"
      :alt="imgAlt"
      class="screenshot"
      loading="lazy"
    />
  </picture>
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
  @include breakpoint($tablet-width) {
    float: left;
    margin: -60px 30px 40px 0;
    width: 45%;
    @include breakpoint($desktop-width) {
      width: 100%;
      float: unset;
      margin: -60px 0 0;
      @include breakpoint($large-width) {
        margin: -90px 0 0;
      }
    }
  }
}
</style>
