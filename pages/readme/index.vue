<template>
  <main class="readme">
    <h2>/Read.me</h2>
    <article>
      <section class="readme__bio">
        <h3>En bref</h3>
        <p>Né outre-Manche (nul n'est parfait) je suis arrivé en France à l'age de 10 ans. Après des études de cinéma et un passage dans le commerce (à la Fnac puis en librairie indé), je me suis formé aux métiers du web, secteur dans lequel je travaille depuis 6 ans.</p>
        <p>L'accessibilité et la performance sont parmi les questions actuelles du web qui me tiennent particulièrement à coeur, l'utilisateur devant tenir une place centrale dans l'élaboration de toute application afin d'en assurer la réussite.</p>
      </section>
      <section class="readme__interests">
        <h3>Intérêts</h3>
        <p>Passionné de cinéma, j'ai consacré de nombreuses heures à sa découverte avec une prédilection pour les classiques (hollywoodiens, européens et japonais), le cinéma d'exploitation sans copromis et les bizarreries qu'on ne trouve qu'au bout de fouilles acharnées.</p>
        <p>Ancien libraire, la littérature m'intéresse également dans sa foisannante diversité, de ces indécrottables classiques qui ont tourmenté plus d'un lycéen aux mauvais genres qui auront su davantage titiller leur imaginaire.</p>
      </section>
      <section class="readme__hobbies">
        <h3>Activités</h3>
        <p>Ayant pratiqué l'argentique au début des années 2000, l'avénement du numérique avait quelque peu calmé mes ardeurs. Je redécouvre aujourd'hui la photographie à laquelle j'espère consacrer un temps plus important pour en apprendre les subtilités.</p>
        <p>Le design et le graphisme représentent un autre exutoire, pour des projets personnels mais aussi sur le plan professionel avec notamment la réalisation d'affiches publicitaires et d'interfaces numériques, statiques ou interactives.</p>
      </section>
    </article>
  </main>
</template>

<style lang="scss" scoped>
.readme {
  @include breakpoint($desktop-width) {
    align-items: start;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: min-content;
    padding: var(--hlf-margin) 0;
  }
  @include breakpoint($large-width) {
    padding: var(--fll-margin) 0;
  }
  & h2 {
    background: var(--clr-2);
    color: var(--light);
    font-size: 2.5rem;
    margin-bottom: var(--hlf-margin);
    padding: var(--hlf-margin);
    @include breakpoint($desktop-width) {
      grid-column: 1/4;
      margin: 0 var(--hlf-margin) var(--hlf-margin);
    }
    @include breakpoint($large-width) {
      font-size: 2rem;
      margin: 0 var(--fll-margin) var(--fll-margin);
    }
  }
  & article {
    @include breakpoint($desktop-width) {
      display: grid;
      grid-column: 1/4;
      grid-template-columns: repeat(3, 1fr);
    }
    & section {
      padding: 0 var(--qtr-margin);
      @include breakpoint($desktop-width) {
        border-right: solid 2px var(--clr-2);
        height: auto;
        padding: 0 var(--hlf-margin);
        &:last-of-type {
          border-right: none;
        }
      }
      @include breakpoint($large-width) {
        padding: 0 var(--fll-margin);
      }
      & h3 {
        background: var(--clr-2);
        color: var(--light);
        font-size: 2rem;
        margin-bottom: var(--hlf-margin);
        padding: var(--hlf-margin) var(--qtr-margin);
        @include breakpoint($desktop-width) {
          padding: var(--hlf-margin);
        }
        @include breakpoint($large-width) {
          font-size: 1.5rem;
        }
      }
      & p {
        font-size: 1.5rem;
        line-height: 1.25;
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