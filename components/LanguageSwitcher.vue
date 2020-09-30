<template>
  <ul>
    <li><nuxt-link :to="enRoute">EN</nuxt-link></li>
    <li><nuxt-link :to="frRoute">FR</nuxt-link></li>
  </ul>
</template>


<script>
const correspondances = new Map();
correspondances.set('index___en', '/fr');
correspondances.set('about-me___en', '/fr/presentation');
correspondances.set('my-projects___en', '/fr/mes-projets');
correspondances.set('contact-me___en', '/fr/contactez-moi');
correspondances.set('index___fr', '/');
correspondances.set('about-me___fr', '/about-me');
correspondances.set('my-projects___fr', '/my-projects');
correspondances.set('contact-me___fr', '/contact-me');

export default {
  data() {
    return {
      routeCorrespondances: correspondances,
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    currentTranslatedRoute() {
      return this.routeCorrespondances.get(this.currentRouteName);
    },
    enRoute() {
      return this.getRoute('en');
    },
    frRoute() {
      return this.getRoute('fr');
    },
  },
  methods: {
    getRoute(lang) {
      if (this.$i18n.locale === lang) {
        return this.$route.path;
      }
      return this.currentTranslatedRoute;
    },
  },
};
</script>