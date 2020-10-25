<template>
  <header class="header">
    <h2>{{ headingText.title }}</h2>
    <p
      v-for="(paragraph, i) in headingText.description"
      :key="i"
      v-html="paragraph"
    ></p>
    <p v-if="headingText.resume">
      <a :href="headingText.resume.url" target="_blank">
        {{ headingText.resume.label }}
      </a>
    </p>
  </header>
</template>

<script>
export default {
  props: ['headingText']
};
</script>

<style lang="scss" scoped>
.header {
  margin: 120px 0 0;
  @include breakpoint($tablet-width) {
    margin: 180px 0 0;
  }
  @include breakpoint($desktop-width) {
    margin: 180px 0 0;
  }
  & > h2 {
    margin-bottom: 15px;
    @include breakpoint($tablet-width) {
      margin-bottom: 30px;
    }
  }
  & > p {
    margin-bottom: 15px;
  }
  &.about__header > p:last-of-type {
    margin-top: 30px;
    & > a {
      align-items: center;
      display: flex;
      text-decoration: underline;
      &::before {
        background-image: var(--resume-light);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        content: '';
        display: inline-block;
        height: 25px;
        line-height: 1.45rem;
        margin-right: 15px;
        width: 20px;
        @media (prefers-color-scheme: light) {
          background-image: var(--resume-light);
        }
        html[data-theme='light'] & {
          background-image: var(--resume-light);
        }
        @media (prefers-color-scheme: dark) {
          background-image: var(--resume-dark);
        }
        html[data-theme='dark'] & {
          background-image: var(--resume-dark);
        }
      }
    }
  }
  @include breakpoint($desktop-width) {
    &.about__header > h2,
    &.about__header > p {
      grid-column: 1;
    }
  }
}
</style>
