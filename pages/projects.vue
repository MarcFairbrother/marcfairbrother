<template>
  <main class="projects">
    <PageHeading :heading-text="heading" class="projects__header" />
    <CtaButton
      button-type="button"
      :class="{ 'cta--close': showFilters }"
      class-modifier="positive"
      @click.native="showFilters = !showFilters"
      :text="filters.buttonLabel"
    />
    <transition name="fade">
      <form class="projects__filters" v-show="showFilters">
        <div>
          <input
            type="checkbox"
            id="pro"
            value="pro"
            v-model="filters.selected"
          /><label for="pro">{{ filters.labels.pro }}</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="perso"
            value="perso"
            v-model="filters.selected"
          /><label for="perso">{{ filters.labels.perso }}</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="dev"
            value="dev"
            v-model="filters.selected"
          /><label for="dev">{{ filters.labels.dev }}</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="design"
            value="design"
            v-model="filters.selected"
          /><label for="design">{{ filters.labels.design }}</label>
        </div>
      </form>
    </transition>
    <section class="projects__contents">
      <ProjectCard
        v-for="(project, i) in filteredProjects"
        :key="i"
        :project-content="project"
      />
    </section>
    <p v-if="!filteredProjects.length" class="projects__empty">
      {{ noProjects }}
    </p>
  </main>
</template>

<script>
export default {
  async asyncData({ store }) {
    // update current route in state when navigating to page
    await store.dispatch('i18n/setRouteParams', {
      en: { slug: 'projects' },
      fr: { slug: 'projets' }
    });
  },
  data() {
    return {
      heading: this.$t('projects.heading'),
      noProjects: this.$t('projects.noProjects'),
      filters: {
        labels: {
          pro: this.$t('projects.filters.labels.pro'),
          perso: this.$t('projects.filters.labels.perso'),
          dev: this.$t('projects.filters.labels.dev'),
          design: this.$t('projects.filters.labels.design')
        },
        buttonLabel: this.$t('projects.filters.buttonLabel'),
        selected: []
      },
      showFilters: false
    };
  },
  computed: {
    filteredProjects() {
      // returns all the projects corresponding to the selected categories
      const projects = [];
      this.$t('projects.content').forEach(item => {
        this.categoriesAreSelected(item) ? projects.push(item) : null;
      });
      return projects;
    }
  },
  nuxtI18n: {
    paths: {
      en: '/projects',
      fr: '/projets'
    }
  },
  methods: {
    categoriesAreSelected(project) {
      // returns true if every selected filter is included in the project's categories
      return this.filters.selected.every(filter =>
        project.categories.includes(filter)
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.projects {
  padding: 0 15px;
  @include breakpoint($tablet-width) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    padding: 0 30px;
    @include breakpoint($desktop-width) {
      grid-template-columns: 1fr 1fr;
      margin: 0 auto;
      max-width: 1280px;
      width: 100%;
    }
  }
  &__header {
    @include breakpoint($tablet-width) {
      grid-column: 1;
    }
  }
  & > .cta {
    margin: 15px 0 30px;
    @include breakpoint($tablet-width) {
      align-self: end;
      grid-column: 2;
      justify-self: end;
      margin: 0 0 15px;
    }
  }
  &__filters {
    margin: 30px 0 60px;
    @include breakpoint($tablet-width) {
      display: flex;
      justify-content: space-evenly;
      margin: 75px 0 0;
      grid-column: 1/3;
      @include breakpoint($large-width) {
        margin: 105px 0 0;
      }
    }
    & > div {
      align-items: center;
      display: flex;
      height: 30px;
      font-size: 1rem;
      margin-bottom: 15px;
      position: relative;
    }
    input[type='checkbox'] {
      opacity: 0;
      position: absolute;
    }
    label {
      padding-left: 35px;
    }
    label::before,
    label::after {
      content: '';
      display: inline-block;
      position: absolute;
    }
    label::before {
      border: 1px solid var(--mainTextColor);
      height: 20px;
      left: 0;
      top: 5px;
      width: 20px;
    }
    label::after {
      background-color: var(--mainTextColor);
      content: '';
      height: 14px;
      left: 3px;
      top: 8px;
      transition: opacity 0.25s;
      width: 14px;
    }
    input[type='checkbox'] + label::after {
      opacity: 0;
    }
    input[type='checkbox']:checked + label::after {
      opacity: 1;
    }
    input[type='checkbox']:focus + label {
      outline: var(--mainTextColor) solid 1px;
      outline-offset: 3px;
    }
  }
  &__contents {
    margin-top: 30px;
    padding-top: 30px;
    @include breakpoint($tablet-width) {
      margin-top: 75px;
      grid-column: 1/3;
    }
    @include breakpoint($large-width) {
      margin-top: 105px;
      padding-top: 45px;
    }
  }
  &__empty {
    font-size: 1rem;
    line-height: 1.45;
    margin-bottom: 90px;
    @include breakpoint($tablet-width) {
      font-size: 1.2rem;
      grid-column: 1/3;
      margin-bottom: 120px;
      text-align: center;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
