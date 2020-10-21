<template>
  <main class="projects">
    <PageHeading :heading-text="heading" class="projects__header" />
    <ProjectCard
      v-for="(project, i) in content"
      :key="i"
      :project-content="project"
    />
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
      content: this.$t('projects.content')
    };
  },
  nuxtI18n: {
    paths: {
      en: '/projects',
      fr: '/projets'
    }
  }
};
</script>

<style lang="scss" scoped>
.projects {
  padding: 0 15px;
  @include breakpoint($tablet-width) {
    padding: 0 30px;
    @include breakpoint($desktop-width) {
      margin: 0 auto;
      max-width: 1280px;
      width: 100%;
    }
  }
  &__header {
    @include breakpoint($tablet-width) {
      width: 75%;
      @include breakpoint($desktop-width) {
        width: 50%;
      }
    }
  }
}
</style>
