<template>
  <main class="bookmarked">
    <header class="bookmarked__header">
      <h2>~bookmarc'd</h2>
    </header>
    <article class="bookmarked__content">
      <ul class="bookmarked__content__list">
        <li
          class="bookmarked__content__list__item"
          v-for="bookmark in bookmarks"
          :key="bookmark.id"
        >
          <a
            :href="bookmark.url"
            target="_blank"
            class="bookmarked__content__link"
            title="bookmark.title"
          >
            <h3>{{ bookmark.title }}</h3>
          </a>
          <p v-if="bookmark.src">Source&nbsp;: {{ bookmark.src }}</p>
          <p>
            <em>{{ bookmark.description }}</em>
          </p>
          <p>Langue&nbsp;: {{bookmark.lang}}</p>
          <ul class="bookmarked__content__sublist">
            <li
              v-for="keyword in bookmark.keywords"
              :key="keyword[i]"
              class="bookmarked__content__sublist__item"
            >{{ keyword }}</li>
          </ul>
        </li>
      </ul>
    </article>
  </main>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: "%s | BookMarc'd",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Une liste de ressources autour de la culture et de l'actualité du web"
        }
      ]
    };
  },
  data() {
    return {
      bookmarks: [
        {
          id: 1,
          title: "Shop Talk Show",
          url: "https://shoptalkshow.com/",
          description:
            "Un podcast animé par Chris Coyer (CSS-Tricks, Code Pen) et Dave Ruppert (Paravel) axé sur le développement front-end avec de nombreux invités.",
          keywords: ["webdev", "podcasts", "front-end"],
          lang: "anglais"
        },
        {
          id: 2,
          title: "Syntax",
          url: "https://syntax.fm/",
          description:
            "Un podcast animé par les développeurs full-stack et auteurs de tutoriels Wes Bos et Scott Tolinski, axé sur le développement JavaScript, notamment React.",
          keywords: ["webdev", "podcasts", "front-end"],
          lang: "anglais"
        },
        {
          id: 3,
          title: "Front End Happy Hour",
          url: "https://frontendhappyhour.com/",
          description:
            "Un podcast animé par des ingérieurs front-end travaillant dans des entreprises majeures de la Silicon Valley (Netflix, Twitch, Atlassian) et abordant des thèmes allant du développement à la vie d'entreprise.",
          keywords: ["webdev", "podcasts", "front-end"],
          lang: "anglais"
        },
        {
          id: 4,
          title: "From URL to Interactive",
          url: "https://alistapart.com/article/from-url-to-interactive/",
          src: "A List Apart",
          description:
            "Une série d'articles détaillant le fonctionnement d'un navigateur, de la saisie d'une URL à l'affichage final d'une page web.",
          keywords: ["webtech", "browsers"],
          lang: "anglais"
        },
        {
          id: 5,
          title: "uiGradients",
          url: "https://uigradients.com/",
          keywords: ["webdev", "design", "tools"],
          description:
            "Un podcast animé par Chris Coyer (CSS-Tricks, Code Pen) et Dave Ruppert (Paravel) axé sur le développement front-end avec de nombreux invités.",
          lang: "anglais"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.bookmarked {
  min-height: 100vh;
  @include breakpoint($desktop-width) {
    border: solid var(--hlf-margin) var(--clr-4);
    border-top: none;
  }
  & header {
    @include breakpoint($desktop-width) {
      background: var(--light);
      border-top: solid var(--hlf-margin) var(--clr-4);
      padding-bottom: var(--hlf-margin);
      padding-top: var(--hlf-margin);
      position: sticky;
      top: 0;
    }
    @include breakpoint($large-width) {
      padding-top: var(--fll-margin);
    }
    & h2 {
      background: var(--clr-4);
      color: var(--light);
      font-size: 2.5rem;
      margin-bottom: var(--hlf-margin);
      padding: var(--hlf-margin);
      @include breakpoint($desktop-width) {
        margin: 0 var(--hlf-margin);
      }
      @include breakpoint($large-width) {
        font-size: 2rem;
        line-height: calc(2 * var(--fll-margin));
        margin: 0 var(--fll-margin) var(--hlf-margin);
      }
    }
  }
  &__content {
    padding: 0 var(--qtr-margin);
    @include breakpoint($large-width) {
      padding: 0 var(--fll-margin);
    }
    &__list {
      font-size: 1.5rem;
      padding: 0 var(--qtr-margin);
      @include breakpoint($desktop-width) {
        display: grid;
        grid-column-gap: var(--hlf-margin);
        grid-template-columns: 1fr 1fr;
      }
      @include breakpoint($large-width) {
        grid-column-gap: var(--fll-margin);
        padding: 0;
      }
      &__item {
        padding-bottom: var(--hlf-margin);
        & a {
          color: var(--dark);
          & h3 {
            display: inline-block;
            border-bottom: solid var(--qtr-margin) var(--clr-4);
            font-size: 2rem;
            margin-bottom: var(--qtr-margin);
            padding-bottom: var(--qtr-margin);
            @include breakpoint($desktop-width) {
              font-size: 1.5rem;
            }
            @include breakpoint($large-width) {
              font-size: 1.25rem;
            }
          }
        }
      }
    }
    &__sublist {
      display: flex;
      font-size: 1.5rem;
      @include breakpoint($desktop-width) {
        font-size: 1.1rem;
      }
      @include breakpoint($large-width) {
        font-size: 0.85rem;
      }
      &__item {
        margin-right: var(--qtr-margin);
        &::before {
          content: "#";
          color: var(--clr-4);
        }
      }
    }
    & p {
      font-size: 1.5rem;
      line-height: 1.45;
      margin-bottom: var(--qtr-margin);
      @include breakpoint($desktop-width) {
        font-size: 1.1rem;
        line-height: 1.4;
      }
      @include breakpoint($large-width) {
        font-size: 0.85rem;
      }
    }
  }
}
</style>