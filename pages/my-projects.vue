<template>
  <h2>{{ $t('projects.heading.title') }}</h2>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/my-projects',
      fr: '/mes-projets',
    },
  },
};
</script>