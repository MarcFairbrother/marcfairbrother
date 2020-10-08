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
      bio: this.content,
    };
  },
};
</script>

<style lang="scss" scoped>
.bio {
  padding: 60px 15px;
  &__header {
    margin-bottom: 45px;
    & > h3 {
      color: var(--mainBg);
      font-size: 2.5rem;
      letter-spacing: 1.5px;
      text-shadow: -1px -1px 0 var(--mainTextColor),
        1px -1px 0 var(--mainTextColor), -1px 1px 0 var(--mainTextColor),
        1px 1px 0 var(--mainTextColor);
    }
  }
  &__text {
    font-size: 1.2rem;
    line-height: 1.25;
    margin-right: 15px;
    margin-bottom: 15px;
    &:last-of-type {
      margin-bottom: 45px;
    }
  }
}
</style>