<template>
  <h2>{{ $t('about.heading.title') }}</h2>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/about-me',
      fr: '/presentation',
    },
  },
};
</script>