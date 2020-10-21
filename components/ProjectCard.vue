<template>
  <article class="project">
    <ProjectImage
      v-if="projectContent.screenshot"
      :img-url="projectContent.screenshot.src"
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
  margin: 0 15px 75px;
  padding: 0 15px 30px;
  &:last-of-type {
    margin-bottom: 60px;
  }
  @include breakpoint($tablet-width) {
    margin: 0 30px 75px;
    padding: 30px;
  }
  &__title {
    border-bottom: solid 4px var(--accentColor);
    display: inline-block;
    font-size: 1.5rem;
    margin-bottom: 30px;
    padding-bottom: 15px;
  }
  &__roles {
    font-size: 1rem;
    line-height: 1.45;
    margin-bottom: 30px;
    & > li {
      display: inline;
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
    font-size: 0.9rem;
    line-height: 1.45;
    margin-bottom: 15px;
    &:last-of-type {
      margin-bottom: 30px;
    }
  }
  &__tasks {
    margin-left: 15px;
    & > li {
      font-size: 0.9rem;
      line-height: 1.45;
      margin-bottom: 15px;
      position: relative;
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
      }
      @include breakpoint($tablet-width) {
        clear: left;
      }
    }
  }
  &__tools {
    margin-bottom: 30px;
    & > li {
      display: inline;
      font-size: 0.9rem;
      line-height: 1.45;
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
    & > p {
      font-size: 0.75rem;
      line-height: 1.5;
    }
  }
  &__link {
    align-items: center;
    border: solid 1px var(--altTextColor);
    border-radius: 4px;
    display: flex;
    font-size: 0.9rem;
    line-height: 1.45;
    margin-right: 15px;
    padding: 15px;
    &:last-of-type {
      margin-right: 0;
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
