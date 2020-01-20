<template>
  <main class="credits">
    <header class="credits__header">
      <h2>&#9733;crédits</h2>
    </header>
    <article class="credits__content">
      <p>👷 Designed and developed by Marc Fairbrother</p>
      <p>
        ❤️
        Built with
        <a href="https://nuxtjs.org/" target="_blank">Nuxt</a> &amp; Luv (not a JS framework)
      </p>
      <p>
        🖼️ All images are licensed under a
        <a
          href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
          target="_blank"
        >Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International license</a>
      </p>
      <p>
        🏠
        Source code hosted on
        <a
          href="https://github.com/MarcFairbrother/marcfairbrother"
          target="_blank"
        >GitHub</a>
      </p>
      <p>
        🧙
        Hosted and deployed with
        <a href="https://www.netlify.com/">Netlify</a> wizardry
      </p>
      <section class="credits__content__legal">
        <p>Netlify, Inc.</p>
        <p>2325 3RD STREET,SUITE 215, SAN FRANCISCO, CA 94107 (USA)</p>
        <p>
          <a href="mailto:privacy@netlify.com">privacy@netlify.com</a>
        </p>
        <p>
          <a href="www.netlify.com" target="_blank">www.netlify.com</a>
        </p>
        <p>+1 844-899-7312</p>
        <p>Add Creative Commons License</p>
      </section>
    </article>
  </main>
</template>

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