<template>
  <main class="resume">
    <header class="resume__header">
      <h2>Git Log --cv</h2>
      <nav>
        <ul class="resume__menu">
          <li
            class="resume__menu__item resume__menu__item--button"
            data-target="overview"
          >
            <button @click="navScroll($event)">Profil</button>
          </li>
          <li
            class="resume__menu__item resume__menu__item--button"
            data-target="work"
          >
            <button @click="navScroll($event)">Expérience</button>
          </li>
          <li
            class="resume__menu__item resume__menu__item--button"
            data-target="studies"
          >
            <button @click="navScroll($event)">Formations</button>
          </li>
          <li
            class="resume__menu__item resume__menu__item--button"
            data-target="hobbies"
          >
            <button @click="navScroll($event)">Loisirs</button>
          </li>
          <li class="resume__menu__item resume__menu__item--link">
            <a
              href="https://www.linkedin.com/in/marcfairbrother"
              target="_blank"
              title="Marc's LinkedIn Profile"
              >Contact</a
            >
          </li>
        </ul>
      </nav>
    </header>
    <article class="resume__content">
      <section
        class="resume__content__section resume__content__section--overview"
        data-target="overview"
      >
        <h3>Profil</h3>
        <ul
          class="resume__content__section__list resume__content__section__list--overview"
        >
          <li>
            <h4>Gestion de projet</h4>
            <p>
              Je sais
              <strong>organiser le travail d'équipes pluridisciplinaires</strong
              >, composées d'ergonomes, de graphistes, de développeurs web et
              mobile, de chargés de communication et des administrateurs d'un
              service.
            </p>
            <p>
              Capable d'anlayser rapidement une situation et d'en cerner les
              principales difficultés, mon
              <strong>sens des priorités et de l'initiative</strong> me permet
              de faire avancer un projet dans la bonne direction.
            </p>
            <p>
              Je suis capable de prendre en compte de nombreux paramètres
              variables et donc d'avoir une
              <strong>vision d'ensemble sur des applications complexes</strong>.
            </p>
          </li>
          <li>
            <h4>Développement web</h4>
            <p>
              J'ai une
              <strong>excellente compréhension de l'environnement web</strong>,
              qui me passionne de par ses nombreuses possibilités, et une longue
              <strong>expérience des infrastructures de streaming</strong>
              vidéo.
            </p>
            <p>
              Mes
              <strong>connaissances avancées en HTML et CSS</strong>, acquises
              sur des projets personnels, m'ont permis de participer à
              l'intégration de maquettes et d'apporter des corrections sur des
              applications professionnelles ainsi qu'à créer des gabarits
              e-mails responsives.
            </p>
            <p>
              Je possède des
              <strong>bases solides en JavaScript</strong> et je m'intéresse de
              près à l'évolution du langage et de ses outils, ainsi qu'au
              framework Vue.js et à son écosystème.
            </p>
          </li>
          <li>
            <h4>Design et direction artistique</h4>
            <p>
              Une application doit être conçue en pensant, en premier lieu, à
              l'utilisateur final. Le design se doit de répondre, sur les plans
              technique, ergonomique et esthétique, à la question de savoir
              quelle est l'expéricence utilisateur souhaitée.
            </p>
            <p>
              La
              <strong
                >simplicité d'utilisation, de conception et de maintenance du
                code</strong
              >
              sont les garants de sa réussite.
            </p>
            <p>
              C'est en suivant ces principes que je travaille sur des
              wireframes, des prototypes, des
              <strong
                >maquettes graphiques et fonctionnelles ou sur une direction
                artistique</strong
              >.
            </p>
          </li>
          <li>
            <h4>Les petits plus</h4>
            <p>
              Né en angleterre, mais ayant vécu plus de 25 années en France, je
              suis
              <strong>parfaitement bilingue</strong>, maîtrisant l'anglais et le
              français à l'écrit comme à l'oral.
            </p>
            <p>
              Curieux de nature, et grâce notamment à mon passé en librairie, je
              possède une
              <strong>excellente culture générale</strong> et je reste
              profondément motivé par la <strong>soif d'apprendre</strong>.
            </p>
            <p>
              Ayant travaillé dans le commerce, j'ai l'habitude des relations
              avec les clients et le
              <strong>sens du service</strong>.
            </p>
          </li>
        </ul>
      </section>
      <section
        class="resume__content__section resume__content__section--work"
        data-target="work"
      >
        <h3>Expérience professionnelle</h3>
        <ul
          class="resume__content__section__list resume__content__section__list--work"
        >
          <li>
            <h4>Depuis 2014&nbsp;: Responsable technique chez Moving Scope</h4>
            <p>
              Gestion des projets Festival Scope, Festival Scope Pro (B2B) et
              ArteKino Festival (en partenariat avec Arte Cinéma), trois
              <strong>services de VOD</strong> disposant d'applications
              <strong>web et mobile</strong> et visant un public international.
            </p>
            <p>
              Organisation du travail de prestataires techniques et coordination
              des équipes internes mobilisées sur chaque projet.
            </p>
            <p>
              Supervision de la refonte graphique et technique de Festival Scope
              Pro.
            </p>
            <p>
              Suivi de Festival Scope et ArteKino Festival depuis leur
              conception jusqu'à leur lancement.
            </p>
            <p>
              <strong
                >Conception et intégration de newsletters responsives</strong
              >
              et compatibles avec les principaux clients e-mail pour les
              différents services.
            </p>
            <p>
              <strong>Intégration et corrections de bugs front-end</strong> pour
              pallier au manque de ressources techniques.
            </p>
            <p>
              Migration d'un important catalogue vidéo vers un workflow
              fournissant les protocoles (HLS et MPEG-DASH) et DRM (PlayReady,
              FairPlay et Widevine) nécessaires à une compatibilité
              <em>cross-platform</em>.
            </p>
          </li>
          <li>
            <h4>
              2010-2012&nbsp;: Libraire et webmaster à la librairie indépendente
              Village Voice
            </h4>
            <p>
              Reprise du site statique existant de la librairie et migration
              vers une nouvelle solution technique. Réflexion autour des
              solutions d’e-commerce pour produits physiques et numériques.
            </p>
            <p>
              Réalisation d’affiches et communication en ligne pour promouvoir
              les événements tenus à la librairie. Exploitation des archives
              vidéo des rencontres (numérisation et montage sur Premiere Pro,
              mise en ligne sur Youtube).
            </p>
            <p>
              Tâches habituelles du libraire (accueil et conseil de la
              clientèle, gestion de la caisse, de la boutique et du stock,
              politique d’assortiment, merchandising).
            </p>
          </li>
          <li>
            <h4>
              2007-2009&nbsp;: Conseiller de vente au rayon vidéo de la Fnac
              St-Lazare
            </h4>
            <p>
              Chargé de gérer des rayons, des catalogues et le stock, de
              conseiller la clientèle ainsi que d’organiser le travail d’une
              équipe de renforts pour la période de Noël.
            </p>
          </li>
        </ul>
      </section>
      <section
        class="resume__content__section resume__content__section--studies"
        data-target="studies"
      >
        <h3>Formations</h3>
        <ul
          class="resume__content__section__list resume__content__section__list--studies"
        >
          <li
            class="resume__content__section__list__item resume__content__section__list__item--internet"
          >
            <h4>
              License professionnelle&nbsp;: Création et Développement
              Numériques en Ligne
            </h4>
            <p>
              <strong>Université Paris 8</strong>
              <br />2013-2014
            </p>
          </li>
          <li
            class="resume__content__section__list__item resume__content__section__list__item--book"
          >
            <h4>DUT&nbsp;: Métiers du livre</h4>
            <p>
              <strong>Université Paris X - Nanterre</strong>
              <br />2009-2010
            </p>
          </li>
          <li
            class="resume__content__section__list__item resume__content__section__list__item--film"
          >
            <h4>License&nbsp;: Arts du spectacle</h4>
            <p>
              <strong>Université Paris X - Nanterre</strong>
              <br />2004-2007
            </p>
          </li>
          <li
            class="resume__content__section__list__item resume__content__section__list__item--general"
          >
            <h4>Baccalauréat ES&nbsp;: Option internationale</h4>
            <p>
              <strong>Lycée d'État de Sèvres</strong>
              <br />2003
            </p>
          </li>
        </ul>
      </section>
      <section
        class="resume__content__section resume__content__section--hobbies"
        data-target="hobbies"
      >
        <h3>Loisirs</h3>
        <ul
          class="resume__content__section__list resume__content__section__list--work"
        >
          <li>
            <h4>Cinéma</h4>
            <p>
              Figuration sur plusieurs
              <strong>tournages pour le cinéma</strong>&nbsp;:
              <em>L'Ex-femme de ma vie</em> (Josiane Balasko, 2004),
              <em>Le Temps qui reste</em> (François Ozon, 2005),
              <em>Jean-Philippe</em> (Laurent Tuel, 2006),
              <em>Mon meilleur ami</em> (Patrice Leconte, 2006), et pour la
              télévision&nbsp;: <em>PJ</em> (diffusion sur France 2 de 1997 à
              2009).
            </p>
            <p>
              <strong>Création du blog Cinésthésies en 2012</strong> (dernière
              refonte datant de 2014), un projet me permettant d'écrire sur un
              sujet qui me passionne et d'aprendre les bases du développement
              web (site créé avec Wordpress(.org) pour lequel j'ai développé un
              thème from scratch et plusieurs plugins pour gérer des custom post
              types). Je n'ai malheureusement pas eu le temps de continuer à
              alimenter ce site en contenus depuis quelques années.
            </p>
            <p>
              <strong>Rédacion d'articles et de critiques</strong> de films
              et/ou d'éditions vidéo parus dans la revue <em>Metaluna</em> entre
              avril et juin 2013.
            </p>
            <p>
              Je reste toujours aussi passionné par le cinéma, notamment le
              cinéma classique et d'exploitation, et je ne manque pas d'assister
              à L'Étrange festival et au PIFFF chaque année. J'ai également de
              <strong>nouveaux projets de sites</strong> sur lesquels je
              travaille activement pendant mon temps libre.
            </p>
          </li>
          <li>
            <h4>Photographie</h4>
            <p>
              Travail en argentique dans le cadre de stages universitaires
              (prise de vue, développement noir &amp; blanc, tirage).
            </p>
            <p>
              Je retrouve aujourd'hui de l'enthousiasme pour la photo numérique.
              Débutant, je travaille pour l'instant avec un Sony RX100 III et le
              logiciel open source RawTherapee dont j'ai une assez bonne
              connaissance.
            </p>
          </li>
          <li>
            <h4>Littérature</h4>
            <p>
              Je possède une excellente connaissance de la littérature classique
              française, britannique, européenne et nord-américaine.
              <em>Méridien de sang</em> de Cormac McCarthy,
              <em>L'Homme soleil</em> de John Gardner,
              <em>Le Loup des steppes</em> de Herman Hesse et
              <em>La Chance d'Omensetter</em> de William H. Gass figurent parmi
              mes romans préférés.
            </p>
            <p>
              J'aime énormément la littérature de genre aussi, particulièrement
              les premiers récits de William Gibson (<em>Gravé sur Chrome</em>,
              <em>Neuromancien</em>, <em>Comte Zéro</em> et
              <em>Mona Lisa s'éclate</em>), les nouvelles d'H.P. Lovecraft et le
              premier recueil de Nathan Ballingrud,
              <em>North American Lake Monsters</em>.
            </p>
          </li>
        </ul>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: "%s | Git Log --cv",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Merci de consulter mon CV en ligne et n'hésitez pas à me contacter via LinkedIn"
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "Marc Fairbrother | Git Log --cv"
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Merci de consulter mon CV en ligne et n'hésitez pas à me contacter via LinkedIn"
        }
      ]
    };
  },
  data() {
    return {
      observer: {},
      sections: []
    };
  },
  methods: {
    navScroll: function(e) {
      if (window.innerWidth >= 1400) {
        // identify target from click event
        const content = document.querySelector(".resume__content");
        const targetSection = content.querySelector(
          `[data-target="${e.target.parentNode.dataset.target}"]`
        );
        // kill intersection observer
        this.killObserver(this.sections, this.observer);
        // update active nav item
        this.updateNav(e.target.parentNode.dataset.target);
        // scroll to new active section
        this.scrollIt(targetSection, 350, "easeOutCubic", () => {
          // run observer once scroll animation is finished
          setTimeout(() => {
            this.startObserver(this.sections, this.observer);
          }, 350);
        });
      }
    },
    updateNav: function(newActive) {
      const resumeNav = document.querySelector(".resume__menu");
      let currentActiveSection;
      // find the current active section
      currentActiveSection = newActive;
      // remove active classe from all nav items
      resumeNav.querySelectorAll("li").forEach(el => {
        el.classList.remove("resume__menu__item--active");
      });
      // set nav item for current active section to active
      resumeNav
        .querySelector(`[data-target='${currentActiveSection}']`)
        .classList.add("resume__menu__item--active");
    },
    startObserver: function(sections, observer) {
      sections.forEach(section => {
        observer.observe(section);
      });
    },
    killObserver: function(sections, observer) {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    }
  },
  mounted() {
    this.sections = document.querySelectorAll(".resume__content__section");
    let isObserving;
    // create intersection observer
    const options = {
      root: null,
      rootMargin: "-1px",
      threshold: 0.01
    };
    // handle intersection events
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // when new target enters the viewport
        if (entry.isIntersecting && entry.intersectionRatio > 0.01) {
          // update active nav entry
          this.updateNav(entry.target.dataset.target);
        }
      });
    }, options);
    // run observer if on large screen
    if (window.innerWidth >= 1400) {
      this.startObserver(this.sections, this.observer);
      isObserving = true;
    } else if (window.innerWidth < 1400) {
      isObserving = false;
    }
    // run or remove observer depending on screen width
    window.onresize = () => {
      if (window.innerWidth >= 1400 && isObserving === false) {
        // observer is not set and should be started
        this.startObserver(this.sections, this.observer);
        isObserving = true;
      } else if (window.innerWidth >= 1400 && isObserving === true) {
        // observer is set and should continue to run
        return;
      } else if (window.innerWidth < 1400 && isObserving === true) {
        // observer should be unset
        this.killObserver(this.sections, this.observer);
        isObserving = false;
      } else {
        // observer should stay unset
        return;
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.resume {
  @include breakpoint($desktop-width) {
    border-left: solid var(--hlf-margin) var(--clr-3);
    border-right: solid var(--hlf-margin) var(--clr-3);
  }
  @include breakpoint($large-width) {
    display: grid;
    grid-template-columns: 1fr;
  }
  &__header {
    display: grid;
    grid-template-columns: max-content 1fr;
    @include mobile {
      margin-bottom: var(--hlf-margin);
    }
    @include breakpoint($desktop-width) {
      background: var(--light);
      border-top: solid var(--hlf-margin) var(--clr-3);
      display: grid;
      padding: var(--hlf-margin);
      position: sticky;
      top: 0;
    }
    @include breakpoint($large-width) {
      align-self: start;
      grid-column: 1;
      grid-row: 1;
      padding: var(--fll-margin);
    }
    & h2 {
      background: var(--clr-3);
      color: var(--light);
      display: inline-block;
      font-size: 2.5rem;
      padding: var(--hlf-margin);
      text-transform: lowercase;
      &::before {
        content: "$ ";
      }
      @include breakpoint($large-width) {
        line-height: calc(2 * var(--fll-margin));
        font-size: 2rem;
      }
    }
    & nav {
      background: var(--clr-3);
      color: var(--light);
      & .resume__menu {
        align-items: center;
        display: flex;
        height: 100%;
        justify-content: flex-end;
        &__item {
          font-size: 1.5rem;
          line-height: 2;
          margin-right: var(--hlf-margin);
          position: relative;
          @include breakpoint($large-width) {
            font-size: 1rem;
            margin-left: var(--hlf-margin);
            &:last-of-type {
              margin-right: var(--fll-margin);
            }
            &::before {
              background-color: var(--light);
              bottom: -3px;
              border-radius: 50%;
              content: "";
              display: block;
              height: 6px;
              left: calc(50% - 3px);
              opacity: 0;
              position: absolute;
              transition: opacity 0.25s ease-in-out;
              width: 6px;
            }
            &--active {
              &::before {
                opacity: 1;
              }
            }
          }
          &--button {
            display: none;
            @include breakpoint($large-width) {
              display: initial;
            }
          }
          &--link {
            & a {
              align-items: center;
              border-bottom: solid 2px var(--light);
              color: var(--light);
              display: flex;
              &::before {
                background-image: var(--linkedin-white);
                background-position: center;
                background-repeat: no-repeat;
                background-size: 15px;
                content: "";
                height: 20px;
                margin-right: var(--qtr-margin);
                margin-top: -2px;
                width: 20px;
              }
            }
          }
        }
      }
    }
  }
  &__content {
    @include breakpoint($large-width) {
      grid-column: 1;
      grid-row: 1;
    }
    &__section {
      padding: 0 var(--qtr-margin);
      @include breakpoint($desktop-width) {
        padding: 0 var(--hlf-margin);
      }
      @include breakpoint($large-width) {
        align-items: center;
        display: flex;
        min-height: 100vh;
        padding: calc(var(--fll-margin) * 6.5) var(--fll-margin) 0;
      }
      & h3 {
        align-items: center;
        background: var(--clr-3);
        color: var(--light);
        display: flex;
        font-size: 2rem;
        margin-bottom: var(--hlf-margin);
        padding: var(--hlf-margin) var(--qtr-margin);
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
        }
        @include breakpoint($desktop-width) {
          display: none;
        }
      }
      &--overview {
        & h3 {
          &::before {
            background-image: var(--bio);
          }
        }
      }
      &--work {
        & h3 {
          &::before {
            background-image: var(--work);
          }
        }
      }
      &--studies {
        & h3 {
          &::before {
            background-image: var(--studies);
          }
        }
      }
      &--hobbies {
        & h3 {
          &::before {
            background-image: var(--hobbies);
          }
        }
      }
      & h4 {
        color: var(--clr-3);
        font-size: 2rem;
        margin: 0 var(--qtr-margin) var(--hlf-margin);
        @include breakpoint($desktop-width) {
          font-size: 1.5rem;
          margin: 0 0 var(--hlf-margin);
        }
        @include breakpoint($large-width) {
          font-size: 1.25rem;
        }
      }
      & p {
        font-size: 1.5rem;
        line-height: 1.45;
        margin: 0 var(--qtr-margin) var(--hlf-margin);
        @include breakpoint($desktop-width) {
          font-size: 1.1rem;
          margin: 0 0 var(--hlf-margin);
        }
        @include breakpoint($large-width) {
          font-size: 0.85rem;
        }
      }
      &--overview {
        & ul {
          @include breakpoint($desktop-width) {
            border-bottom: solid 2px var(--clr-3);
            margin-bottom: var(--fll-margin);
            padding-bottom: var(--hlf-margin);
          }
          @include breakpoint($large-width) {
            border-bottom: none;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: var(--fll-margin);
            grid-row-gap: var(--hlf-margin);
          }
        }
      }
      &--work {
        & ul {
          @include breakpoint($desktop-width) {
            border-bottom: solid 2px var(--clr-3);
            margin-bottom: var(--fll-margin);
            padding-bottom: var(--hlf-margin);
          }
          @include breakpoint($large-width) {
            border-bottom: none;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: var(--fll-margin);
            grid-row-gap: var(--hlf-margin);
            & li {
              &:first-of-type {
                grid-column: 1;
                grid-row: 1/3;
              }
            }
          }
        }
      }
      &--studies {
        @include breakpoint($large-width) {
          display: flex;
          justify-content: center;
        }
        & ul {
          & li {
            margin-bottom: var(--hlf-margin);
            & h4 {
              margin-bottom: var(--qtr-margin);
            }
          }
          @include breakpoint($desktop-width) {
            border-bottom: solid 2px var(--clr-3);
            margin-bottom: var(--fll-margin);
            padding-bottom: var(--hlf-margin);
          }
          @include breakpoint($large-width) {
            border-bottom: none;
            & li {
              display: grid;
              grid-column-gap: var(--hlf-margin);
              grid-template-columns: auto 1fr;
              margin-bottom: var(--fll-margin);
              & h4 {
                margin-top: var(--qtr-margin);
              }
              &::before {
                background-color: var(--clr-3);
                background-position: center;
                background-repeat: no-repeat;
                background-size: var(--fll-margin);
                border-radius: 0 20px 0 20px;
                content: "";
                float: left;
                grid-column: 1;
                grid-row: 1/3;
                height: 100%;
                width: calc(var(--fll-margin) * 2);
              }
              &.resume__content__section__list__item--internet::before {
                background-image: var(--internet);
              }
              &.resume__content__section__list__item--book::before {
                background-image: var(--book);
              }
              &.resume__content__section__list__item--film::before {
                background-image: var(--film);
              }
              &.resume__content__section__list__item--general::before {
                background-image: var(--studies);
              }
            }
          }
        }
      }
      &--hobbies {
        & ul {
          @include breakpoint($desktop-width) {
            border-bottom: solid 2px var(--clr-3);
            margin-bottom: var(--fll-margin);
            padding-bottom: var(--hlf-margin);
          }
          @include breakpoint($large-width) {
            border-bottom: none;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: var(--fll-margin);
            grid-row-gap: var(--hlf-margin);
            & li {
              &:first-of-type {
                grid-column: 1;
                grid-row: 1/3;
              }
            }
          }
        }
      }
      @include breakpoint($desktop-width) {
        &:last-of-type {
          border-bottom: solid var(--hlf-margin) var(--clr-3);
        }
      }
    }
  }
}
</style>