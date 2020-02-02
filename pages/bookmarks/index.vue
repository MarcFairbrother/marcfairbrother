<template>
  <main class="bookmarked">
    <header class="bookmarked__header">
      <h2>BookMarc'd</h2>
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
            rel="noopener"
            class="bookmarked__content__link"
            title="bookmark.title"
          >
            <h3>{{ bookmark.title }}</h3>
          </a>
          <p v-if="bookmark.src">Source&nbsp;: {{ bookmark.src }}</p>
          <p>
            <em>{{ bookmark.description }}</em>
          </p>
          <p>Langue&nbsp;: {{ bookmark.lang }}</p>
          <ul class="bookmarked__content__sublist">
            <li
              v-for="keyword in bookmark.keywords"
              :key="keyword[i]"
              class="bookmarked__content__sublist__item"
              v-html="keyword"
            ></li>
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
            "Des articles, podcasts et conférences autour de la culture et de l'actualité du web"
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "Marc Fairbrother | BookMarc'd"
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Des articles, podcasts et conférences autour de la culture et de l'actualité du web"
        }
      ]
    };
  },
  data() {
    return {
      bookmarks: [
        {
          id: 1,
          title: "From URL to Interactive",
          url: "https://alistapart.com/article/from-url-to-interactive/",
          src: "A List Apart",
          description:
            "Une série d'articles détaillant le fonctionnement d'un navigateur, de la saisie d'une URL à l'affichage final d'une page web.",
          keywords: ["webtech", "browsers"],
          lang: "anglais"
        },
        {
          id: 2,
          title: "Shop Talk Show",
          url: "https://shoptalkshow.com/",
          description:
            "Un podcast animé par Chris Coyer (CSS-Tricks, Code Pen) et Dave Rupert (Paravel) axé sur le développement front-end avec de nombreux invités et beaucoup d'humour.",
          keywords: ["webdev", "podcasts", "front-end"],
          lang: "anglais"
        },
        {
          id: 3,
          title: "Syntax",
          url: "https://syntax.fm/",
          description:
            "Animé par les développeurs full-stack et auteurs de tutoriels Wes Bos et Scott Tolinski, Syntax est un podcast axé sur le développement JavaScript, notamment React.",
          keywords: ["webdev", "podcasts", "front-end"],
          lang: "anglais"
        },
        {
          id: 4,
          title: "Front End Happy Hour",
          url: "https://frontendhappyhour.com/",
          description:
            "Des ingénieurs front-end travaillant dans des entreprises majeures de la Silicon Valley (Netflix, Twitch, Atlassian) abordent des thèmes allant du développement à la vie d'entreprise.",
          keywords: ["webdev", "podcasts", "front-end"],
          lang: "anglais"
        },
        {
          id: 5,
          title: "Netflix UI Engineering (YouTube)",
          url: "https://www.youtube.com/channel/UCGGRRqAjPm6sL3-WGBDnKJA",
          keywords: ["webdev", "UI", "conferences"],
          description:
            "Les conférences Netflix abordent des thèmes aussi variés que le streaming, la performance ou des problématiques concernant des frameworks spécifiques.",
          lang: "anglais"
        },
        {
          id: 6,
          title: "uiGradients",
          url: "https://uigradients.com/",
          keywords: ["webdev", "design", "tools"],
          description: "Collection et outil de création de dégradés CSS.",
          lang: "anglais"
        },
        {
          id: 7,
          title: "The Great Divide",
          url: "https://css-tricks.com/the-great-divide/",
          src: "CSS-Tricks (Chris Coyier)",
          keywords: ["webdev", "front-end", "musings"],
          description:
            "Une rélfexion sur le développement front-end actuel et sur son éclatement entre gestion des données, lisibilité du document et présentation de l'interface.",
          lang: "anglais"
        },
        {
          id: 8,
          title: "SVGOMG",
          url: "https://jakearchibald.github.io/svgomg/",
          src: "GitHub (Jake Archibald)",
          keywords: ["webdev", "design", "tools"],
          description: "Outil d'optimisation de fichiers SVG",
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
      text-transform: lowercase;
      &::before {
        content: "~ ";
      }
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
        grid-template-columns: 1fr 1fr;
        grid-column-gap: var(--hlf-margin);
      }
      @include breakpoint($large-width) {
        grid-column-gap: var(--fll-margin);
        padding: 0;
      }
      &__item {
        padding-bottom: var(--hlf-margin);
        @include breakpoint($desktop-width) {
          padding-bottom: var(--fll-margin);
        }
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