<template>
  <article class="project">
    <ProjectImage
      v-if="projectContent.screenshot"
      :img-url="projectContent.screenshot"
      :img-alt="projectContent.title"
    />
    <section class="project__details">
      <h3 class="project__title">{{ projectContent.title }}</h3>
      <ul class="project__roles">
        <li
          v-for="(role, i) in projectContent.roles"
          :key="i"
          v-html="role"
        ></li>
      </ul>
      <p
        v-for="(paragraph, i) in projectContent.presentation"
        :key="i"
        v-html="paragraph"
        class="project__presentation"
      ></p>
      <ul class="project__tasks">
        <li
          v-for="(task, i) in projectContent.tasks"
          :key="i"
          v-html="task"
        ></li>
      </ul>
      <ul class="project__tools">
        <li v-html="projectContent.tools.title"></li>
        <li
          v-for="(tool, i) in projectContent.tools.items"
          :key="i"
          v-html="tool"
        ></li>
      </ul>
    </section>
    <section class="project__links">
      <a
        :href="projectContent.website.url"
        v-if="projectContent.website"
        v-html="projectContent.website.label"
        target="_blank"
        rel="noopener"
        class="project__link project__link--website"
      ></a>
      <a
        :href="projectContent.srcCode.url"
        v-if="projectContent.srcCode"
        v-html="projectContent.srcCode.label"
        target="_blank"
        rel="noopener"
        class="project__link project__link--code"
      ></a>
      <p v-if="projectContent.message" v-html="projectContent.message"></p>
    </section>
  </article>
</template>

<script>
export default {
  props: ['projectContent']
};
</script>

<style lang="scss" scoped>
.project {
  background: var(--altBg);
  border-radius: 4px;
  color: var(--altTextColor);
  margin-bottom: 120px;
  padding: 0 15px 30px;
  &:last-of-type {
    margin-bottom: 60px;
  }
  @include breakpoint($tablet-width) {
    padding: 30px;
    @include breakpoint($desktop-width) {
      display: grid;
      grid-template-rows: min-content 1fr;
      grid-gap: 30px;
      &:nth-child(even) {
        grid-template-columns: 1fr 1.25fr;
      }
      &:nth-child(odd) {
        grid-template-columns: 1.25fr 1fr;
      }
      @include breakpoint($large-width) {
        grid-gap: 45px;
        padding: 45px;
        margin-bottom: 180px;
      }
    }
  }
  @include breakpoint($desktop-width) {
    &__details {
      grid-row: 1/3;
    }
    &:nth-child(even) &__details {
      grid-column: 2;
    }
    &:nth-child(odd) &__details {
      grid-column: 1;
    }
  }
  &__title {
    border-bottom: solid 4px var(--accentColor);
    display: inline-block;
    margin-bottom: 30px;
    padding-bottom: 15px;
  }
  &__roles {
    margin-bottom: 30px;
    & > li {
      display: inline;
      font-weight: 700;
      @include breakpoint($tablet-width) {
        font-size: 1rem;
      }
      &::after {
        content: ', ';
      }
      &:last-of-type {
        &::after {
          content: '';
        }
      }
    }
  }
  &__presentation {
    margin-bottom: 15px;
    &:last-of-type {
      margin-bottom: 30px;
    }
    @include breakpoint($tablet-width) {
      font-size: 1rem;
    }
  }
  &__tasks {
    margin-left: 15px;
    & > li {
      margin-bottom: 15px;
      position: relative;
      @include breakpoint($tablet-width) {
        clear: left;
        font-size: 1rem;
      }
      &:last-of-type {
        margin-bottom: 30px;
      }
      &::before {
        background: var(--accentColor);
        border-radius: 50%;
        content: '';
        display: inline-block;
        height: 8px;
        left: -15px;
        position: absolute;
        top: 6px;
        width: 8px;
        @include breakpoint($large-width) {
          top: 8px;
        }
      }
    }
  }
  &__tools {
    margin-bottom: 30px;
    & > li {
      display: inline;
      @include breakpoint($desktop-width) {
        font-size: 1rem;
      }
      &::after {
        content: ', ';
      }
      &:first-of-type {
        border-bottom: solid 2px var(--accentColor);
      }
      &:first-of-type,
      &:last-of-type {
        &::after {
          content: '';
        }
      }
    }
  }
  &__links {
    display: flex;
    @include breakpoint($tablet-width) {
      font-size: 1rem;
    }
    @include breakpoint($desktop-width) {
      align-self: start;
      justify-content: center;
    }
    & > p {
      font-size: 0.75rem;
      line-height: 1.5;
      @include breakpoint($desktop-width) {
        text-align: center;
        margin: 0 45px;
        @include breakpoint($large-width) {
          font-size: 0.9rem;
        }
      }
    }
  }
  &__link {
    align-items: center;
    border: solid 1px var(--altTextColor);
    border-radius: 4px;
    display: flex;
    margin-right: 15px;
    padding: 15px;
    &:last-of-type {
      margin-right: 0;
    }
    @include breakpoint($large-width) {
      margin-right: 30px;
    }
    &::before {
      background-position: center;
      background-repeat: no-repeat;
      background-size: 15px;
      content: '';
      display: inline-block;
      height: 15px;
      margin-right: 10px;
      width: 15px;
      @include breakpoint($large-width) {
        background-size: 18px;
        height: 18px;
        margin-right: 15px;
        width: 18px;
      }
    }
    &--website {
      &::before {
        background-image: var(--link-light);
        @media (prefers-color-scheme: light) {
          background-image: var(--link-light);
        }
        html[data-theme='light'] & {
          background-image: var(--link-light);
        }
        @media (prefers-color-scheme: dark) {
          background-image: var(--link-dark);
        }
        html[data-theme='dark'] & {
          background-image: var(--link-dark);
        }
      }
    }
    &--code {
      &::before {
        background-image: var(--srcCode-light);
        @media (prefers-color-scheme: light) {
          background-image: var(--srcCode-light);
        }
        html[data-theme='light'] & {
          background-image: var(--srcCode-light);
        }
        @media (prefers-color-scheme: dark) {
          background-image: var(--srcCode-dark);
        }
        html[data-theme='dark'] & {
          background-image: var(--srcCode-dark);
        }
      }
    }
  }
}
</style>
