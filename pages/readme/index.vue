<template>
  <main class="readme">
    <h2>Read.me</h2>
    <article class="readme__content">
      <section class="readme__content__section readme__content__section--bio">
        <h3>En bref</h3>
        <p>
          Né outre-Manche (nul n'est parfait) j'ai débarqué dans l'hexagone à
          l'age de 10 ans. Après des études de cinéma et un passage dans le
          commerce, à la Fnac puis en librairie indé, je me suis formé aux
          métiers du web, secteur dans lequel je travaille depuis 2014.
        </p>
        <p>
          L'accessibilité et la performance sont deux des questions actuelles du
          web qui me tiennent à coeur et sur lesquelles je souhaite approfondir
          mes connaissances afin d'élaborer de meilleures applications.
        </p>
      </section>
      <section
        class="readme__content__section readme__content__section--interests"
      >
        <h3>Intérêts</h3>
        <p>
          Passionné de cinéma, j'ai consacré de (trop&nbsp;?) nombreuses heures
          à sa découverte avec une prédilection pour les classiques
          hollywoodiens, européens et japonais, le cinéma d'exploitation sans
          compromis et les bizarreries qu'on ne trouve qu'au bout de fouilles
          acharnées.
        </p>
        <p>
          Ancien libraire, la littérature m'intéresse également dans sa
          foisannante diversité, de ces indécrottables classiques qui ont
          tourmenté plus d'un lycéen aux mauvais genres qui auront su davantage
          titiller leur imaginaire.
        </p>
      </section>
      <section
        class="readme__content__section readme__content__section--creativity"
      >
        <h3>Créativité</h3>
        <p>
          Ayant pratiqué la photographie argentique au début des années 2000,
          l'avénement du numérique avait quelque peu calmé mes ardeurs. Je
          retrouve aujourd'hui de l'enthousiasme pour ce loisir auquel j'espère
          consacrer un temps plus important afin d'en maîtriser les subtilités.
        </p>
        <p>
          J'affectionne aussi le design comme moyen d'expression, sur des
          projets personnels mais également professionels avec notamment la
          réalisation d'affiches publicitaires et d'interfaces numériques,
          statiques ou interactives.
        </p>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: "%s | Read.me",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Avant la France et en dehors du web, quelques mots pour présenter mon parcours"
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Marc Fairbrother | Read.me"
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Avant la France et en dehors du web, quelques mots pour présenter mon parcours"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.readme {
  @include breakpoint($desktop-width) {
    align-items: start;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
    padding: var(--hlf-margin) 0;
  }
  @include breakpoint($large-width) {
    grid-template-columns: repeat(3, 1fr);
    padding: var(--fll-margin) 0;
  }
  @include mobile {
    &.main-enter-active > h2 {
      transition: transform 0.25s ease-in-out;
    }
    &.main-enter > h2 {
      transform: translateX(100%);
    }
  }
  & h2 {
    background: var(--clr-2);
    color: var(--light);
    font-size: 2.5rem;
    margin-bottom: var(--hlf-margin);
    padding: var(--hlf-margin);
    text-transform: lowercase;
    &::before {
      content: "/";
    }
    @include breakpoint($desktop-width) {
      margin: 0 var(--hlf-margin) var(--hlf-margin);
    }
    @include breakpoint($large-width) {
      font-size: 2rem;
      grid-column: 1/4;
      line-height: calc(2 * var(--fll-margin));
      margin: 0 var(--fll-margin) var(--fll-margin);
    }
  }
  &__content {
    width: 100%;
    @include breakpoint($large-width) {
      display: grid;
      grid-column: 1/4;
      grid-template-columns: repeat(3, 1fr);
    }
    &__section {
      padding: 0 var(--qtr-margin);
      @include breakpoint($desktop-width) {
        padding: 0 var(--hlf-margin);
      }
      @include breakpoint($large-width) {
        border-right: solid 2px var(--clr-2);
        height: auto;
        padding: 0 var(--fll-margin);
        &:last-of-type {
          border-right: none;
        }
      }
      & h3 {
        align-items: center;
        background: var(--clr-2);
        color: var(--light);
        display: flex;
        font-size: 2rem;
        margin-bottom: var(--hlf-margin);
        padding: var(--hlf-margin) var(--qtr-margin);
        @include breakpoint($large-width) {
          padding: var(--hlf-margin);
          font-size: 1.5rem;
        }
        &::before {
          background-position: center;
          background-repeat: no-repeat;
          background-size: 16px 16px;
          border: var(--rnd-border) var(--light);
          border-radius: 50%;
          content: "";
          display: block;
          height: 34px;
          margin-right: var(--qtr-margin);
          width: 34px;
          @include breakpoint($tablet-width) {
            background-size: 20px 20px;
            height: 50px;
            width: 50px;
          }
          @include breakpoint($desktop-width) {
            margin-right: var(--hlf-margin);
          }
        }
      }
      &--bio {
        & h3 {
          &::before {
            background-image: var(--bio);
          }
        }
      }
      &--interests {
        & h3 {
          &::before {
            background-image: var(--interests);
          }
        }
      }
      &--creativity {
        & h3 {
          &::before {
            background-image: var(--creativity);
          }
        }
      }
      & p {
        font-size: 1.5rem;
        line-height: 1.45;
        margin: 0 var(--qtr-margin) var(--hlf-margin);
        @include breakpoint($desktop-width) {
          font-size: 1.1rem;
          line-height: 1.4;
          margin: 0 0 var(--hlf-margin);
        }
        @include breakpoint($large-width) {
          font-size: 0.85rem;
          margin: 0 0 var(--hlf-margin);
        }
      }
    }
  }
  @include breakpoint($desktop-width) {
    border: solid var(--hlf-margin) var(--clr-2);
  }
}
</style>