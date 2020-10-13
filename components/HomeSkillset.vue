<template>
  <article class="skillset">
    <header class="skillset__header">
      <h3>{{ skillset.title }}</h3>
      <p>{{ skillset.description }}</p>
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
    <CtaLink
      :destination="localePath(`/${$t('about.meta.slug')}`)"
      :text="skillset.cta"
      class-modifier="negative"
    />
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
  @include breakpoint($tablet-width) {
    padding: 60px 30px;
    @include breakpoint($desktop-width) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 100vh;
      @include breakpoint($large-width) {
        padding: 90px 30px;
      }
    }
  }
  &__header {
    margin-bottom: 45px;
    & > h3 {
      color: var(--altBg);
      font-size: 2.5rem;
      letter-spacing: 1.5px;
      margin-bottom: 30px;
      text-shadow: -1px -1px 0 var(--altTextColor),
        1px -1px 0 var(--altTextColor), -1px 1px 0 var(--altTextColor),
        1px 1px 0 var(--altTextColor);
      @include breakpoint($tablet-width) {
        font-size: 3rem;
      }
      @include breakpoint($desktop-width) {
        font-size: 2.5rem;
        text-align: center;
        @include breakpoint($large-width) {
          font-size: 3rem;
        }
      }
    }
    & > p {
      font-size: 1.2rem;
      line-height: 1.25;
      margin-right: 30px;
      @include breakpoint($tablet-width) {
        font-size: 1.4rem;
        line-height: 1.5;
        margin-right: 0;
        max-width: 66%;
      @include breakpoint($desktop-width) {
        font-size: 1.2rem;
        margin: 0 auto 15px;
        max-width: 500px;
        text-align: center;
        @include breakpoint($large-width) {
          font-size: 1.4rem;
          max-width: 600px;
        }
      }
      }
    }
  }
  &__categories {
    @include breakpoint($desktop-width) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
      margin: 0 auto;
      max-width: 1280px;
      width: 100%;
    }
    & > li {
      margin-bottom: 45px;
      @include breakpoint($desktop-width) {
        width: max-content;
      }
    }
  }
  &__category {
    & > h4 {
      border-bottom: solid 4px var(--accentColor);
      display: inline-block;
      font-size: 1.5rem;
      margin-bottom: 30px;
      padding-bottom: 15px;
      @include breakpoint($tablet-width) {
        font-size: 2rem;
        @include breakpoint($desktop-width) {
          font-size: 1.5rem;
          @include breakpoint($large-width) {
            font-size: 2rem;
          }
        }
      }
    }
  }
  &__bullets {
    & > li {
      align-items: center;
      display: flex;
      font-size: 1.2rem;
      margin-bottom: 15px;
      @include breakpoint($tablet-width) {
        font-size: 1.4rem;
        @include breakpoint($desktop-width) {
          font-size: 1.2rem;
          @include breakpoint($large-width) {
            font-size: 1.4rem;
          }
        }
      }
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

  @include breakpoint($desktop-width) {
    & > .cta {
      align-self: center;
    }
  }
}
</style>