<template>
  <main class="credits">
    <header class="credits__header">
      <h2>Credits</h2>
    </header>
    <article class="credits__content">
      <p>
        🙏 For their guidance, encouragements, friendship, or just for being
        inspiring human beings, many thanks to Wes Bos, CapyCec, Chris Coyier,
        Richard Déloge, Sarah Drasner, the Lutz bros, Dave Rupert, Scott
        Tolinski &amp; the SixRoz Gang!
      </p>
      <p>👷 Designed and developed by Marc Fairbrother</p>
      <p>
        ❤️ Built with
        <a href="https://nuxtjs.org/" target="_blank" rel="noopener">Nuxt</a>
        &amp; Luv (not a JS framework)
      </p>
      <p>
        🖼️ All images are licensed under a
        <a
          href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
          target="_blank"
          rel="noopener"
          >CC BY-NC-ND 4.0 International license</a
        >
      </p>
      <p>
        🏠 Source code hosted on
        <a
          href="https://github.com/MarcFairbrother/marcfairbrother"
          target="_blank"
          rel="noopener"
          >GitHub</a
        >
      </p>
      <p>
        🧙 Hosted and deployed with awesome
        <a href="https://www.netlify.com/" target="_blank" rel="noopener"
          >Netlify</a
        >
        wizardry
      </p>
      <section class="credits__content__legal">
        <p>Netlify, Inc.</p>
        <p>2325 3RD STREET,SUITE 215, SAN FRANCISCO, CA 94107 (USA)</p>
        <p>
          <a href="mailto:privacy@netlify.com">privacy@netlify.com</a>
        </p>
        <p>
          <a href="https://www.netlify.com/" target="_blank" rel="noopener"
            >www.netlify.com</a
          >
        </p>
        <p>+1 844-899-7312</p>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: "%s | Credits",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Shout outs and legal stuff"
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Marc Fairbrother | Credits"
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Shout outs and legal stuff"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.credits {
  min-height: 100vh;
  @include breakpoint($desktop-width) {
    border: solid var(--hlf-margin) var(--dark);
    border-top: none;
  }
  &__header {
    @include breakpoint($desktop-width) {
      background: var(--light);
      border-top: solid var(--hlf-margin) var(--dark);
      padding-bottom: var(--hlf-margin);
      padding-top: var(--hlf-margin);
      position: sticky;
      top: 0;
      z-index: 5;
    }
    @include breakpoint($large-width) {
      padding-top: var(--fll-margin);
    }
    & h2 {
      background: var(--dark);
      color: var(--light);
      font-size: 2.5rem;
      margin-bottom: var(--hlf-margin);
      padding: var(--hlf-margin);
      text-transform: lowercase;
      &::before {
        content: "\2605\0020";
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
    padding: 0 var(--hlf-margin) var(--hlf-margin);
    @include breakpoint($large-width) {
      padding: 0 var(--fll-margin) var(--fll-margin);
    }
    & > p {
      font-size: 1.5rem;
      line-height: 1.45;
      margin-bottom: var(--qtr-margin);
      @include breakpoint($large-width) {
        font-size: 1.25rem;
        line-height: 1.45;
      }
      &:last-of-type {
        margin-bottom: var(--hlf-margin);
      }
    }
    & a {
      color: var(--dark);
      text-decoration: underline;
    }
    &__legal {
      & > p {
        font-size: 1.25rem;
        line-height: 1.25;
        @include breakpoint($large-width) {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>