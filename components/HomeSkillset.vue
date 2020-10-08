<template>
  <article class="skillset">
    <header class="skillset__header">
      <h3>{{ skillset.title }}</h3>
    </header>
    <ul class="skillset__categories">
      <li v-for="(category, i) in skillset.categories" :key="i">
        <section class="skillset__category">
          <h4>{{ category.title }}</h4>
          <ul class="skillset__bullets">
            <li v-for="(bullet, i) in category.bullets" :key="i">
              {{ bullet }}
            </li>
          </ul>
        </section>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  props: ['content'],
  data() {
    return {
      skillset: this.content,
    };
  },
};
</script>

<style lang="scss" scoped>
.skillset {
  background: var(--altBg);
  color: var(--altTextColor);
  padding: 60px 15px;
  &__header {
    margin-bottom: 45px;
    & > h3 {
      color: var(--altBg);
      font-size: 2.5rem;
      letter-spacing: 1.5px;
      text-shadow: -1px -1px 0 var(--altTextColor),
        1px -1px 0 var(--altTextColor), -1px 1px 0 var(--altTextColor),
        1px 1px 0 var(--altTextColor);
    }
  }
  &__categories {
    & > li {
      margin-bottom: 45px;
    }
  }
  &__category {
    & > h4 {
      border-bottom: solid 4px var(--accentColor);
      display: inline-block;
      font-size: 1.5rem;
      margin-bottom: 30px;
      padding-bottom: 15px;
    }
  }
  &__bullets {
    & > li {
      align-items: center;
      display: flex;
      font-size: 1.2rem;
      margin-bottom: 15px;
      &::before {
        background: var(--accentColor);
        border-radius: 50%;
        content: '';
        display: inline-block;
        height: 8px;
        margin-right: 7px;
        width: 8px;
      }
    }
  }
}
</style>