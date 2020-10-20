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
  &__header {
    @include breakpoint($tablet-width) {
      width: 75%;
    }
  }
}
</style>
