<template>
  <article class="bio">
    <header class="bio__header">
      <h3>{{ bio.title }}</h3>
    </header>
    <p v-for="(p, i) in bio.text" :key="i" class="bio__text">{{ p }}</p>
    <CtaLink
      :destination="localePath(`/${$t('projects.meta.slug')}`)"
      :text="bio.cta"
      class-modifier="positive"
    />
  </article>
</template>

<script>
export default {
  props: ['content'],
  data() {
    return {
      bio: this.content
    };
  }
};
</script>

<style lang="scss" scoped>
.bio {
  padding: 60px 15px;
  @include breakpoint($tablet-width) {
    padding: 60px 30px;
  }
  @include breakpoint($desktop-width) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px;
  }
  @include breakpoint($large-width) {
    padding: 90px 60px;
  }
  &__header {
    margin-bottom: 45px;
    & > h3 {
      color: var(--mainBg);
      font-size: 2.5rem;
      letter-spacing: 1.5px;
      text-shadow: -1px -1px 0 var(--mainTextColor),
        1px -1px 0 var(--mainTextColor), -1px 1px 0 var(--mainTextColor),
        1px 1px 0 var(--mainTextColor);
      @include breakpoint($tablet-width) {
        font-size: 3rem;
      }
      @include breakpoint($desktop-width) {
        font-size: 2.5rem;
        text-align: center;
      }
      @include breakpoint($large-width) {
        font-size: 3rem;
      }
    }
  }
  &__text {
    font-size: 1.2rem;
    line-height: 1.25;
    margin-right: 15px;
    margin-bottom: 15px;
    @include breakpoint($tablet-width) {
      font-size: 1.4rem;
      line-height: 1.5;
      margin-bottom: 30px;
    }
    @include breakpoint($desktop-width) {
      font-size: 1.2rem;
      margin: 0 auto 15px;
      max-width: 500px;
      text-align: center;
    }
    @include breakpoint($large-width) {
      font-size: 1.4rem;
      max-width: 600px;
      margin-bottom: 30px;
    }
    &:last-of-type {
      margin-bottom: 45px;
    }
  }
  @include breakpoint($desktop-width) {
    & > .cta {
      align-self: center;
    }
  }
}
</style>
