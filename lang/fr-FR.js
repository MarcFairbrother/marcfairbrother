export default {
  test: {
    welcome: 'Bienvenue'
  },
  nav: {
    home: 'Accueil',
    about: 'Parcours',
    projects: 'Projets',
    contact: 'Contact',
    settings: 'Options'
  },
  socials: {
    linkedin: 'Mon profil LinkedIn',
    github: 'Mon profil GitHub',
    codepen: 'Mon profil CodePen'
  },
  theme: {
    toLight: 'Activer le mode jour',
    toDark: 'Activer le mode nuit'
  },
  index: {
    heading: {
      title: "<span>Je m'appelle</span> <br>Marc Fairbrother",
      description:
        "Je conçois et développe des applications numériques centrées sur l'expérience utilisateur.",
      cta: 'UX-plore'
    },
    skillset: {
      title: "L'Essentiel",
      description:
        "Je suis un web designer et développeur front end avec de l'expérience en gestion d'équipe et de projet.",
      categories: {
        design: {
          title: 'Design',
          bullets: {
            ux: 'Ergonomie web & mobile',
            visual: 'Conception visuelle',
            a11y: "Passionné d'accessibilité"
          }
        },
        development: {
          title: 'Développement',
          bullets: {
            html: 'HTML & CSS avancé',
            js: 'JS intermédiaire',
            tools: 'Usage basique de Git'
          }
        },
        management: {
          title: 'Management',
          bullets: {
            organisation: 'Organisation de projets',
            prioritisation: 'Sens des priorités',
            enablement: "Coaching d'équipe"
          }
        }
      },
      cta: 'Mon Parcours'
    },
    bio: {
      title: 'Culture Web',
      text: [
        "Après avoir travaillé en tant que webmaster et libraire pour une librairie anglophone située à Paris, j'ai rejoint en 2014 une start-up éditrice de plusieurs services de VOD.",
        "Avec l'aide des développeurs, j'ai géré les choix technologiques et je me suis assuré que les projets avançaient constamment, participant au travail de design et de développement tout en supervisant le lancement de plusieurs nouveaux services et applications.",
        "J'aime développer des projets personnels sur mon temps libre pour apprendre de nouveaux outils et concepts, et pour le simple plaisir de coder."
      ],
      cta: 'Mes Projets'
    }
  },
  about: {
    meta: {
      slug: 'presentation'
    },
    heading: {
      title: "Je m'appelle Marc Fairbrother",
      description: [
        "Je suis un web designer et développeur front end avec de l'expérience en gestion de projet et dans le commerce.",
        "J'aime créer des applications numériques accessibles, inclusives et originales."
      ]
    },
    content: {
      pro: {
        heading: 'Expérience professionnelle',
        icon: {
          dark: 'var(--pro-dark)',
          light: 'var(--pro-light)'
        },
        entries: {
          movingScope: {
            heading: '2014-2020: Responsable technique chez Moving Scope',
            bullets: [
              'Gestion des projets de VOD <a href="https://festivalscope.com" target="_blank" rel="noopener"  style="text-decoration: underline;">Festival Scope</a>, <a href="https://pro.festivalscope.com" target="_blank" rel="noopener" style="text-decoration: underline;">Festival Scope Pro</a>, et <a href="https://artekinofestival.com" target="_blank" rel="noopener" style="text-decoration: underline;">ArteKino Festival</a>, de la rédaction de cahiers des charges au lancement des services, leur maintenance, and l\'implémentation de nouvelles fonctionnalités.',
              "Conception et développement d'interfaces web, de newsletters responsives et correction de bugs front end.",
              'Recherche de solutions visant à améliorer le workflow vidéo et la qualité de streaming et gestion de leur implémentation.'
            ]
          },
          villageVoice: {
            heading:
              '2010-2012: Webmaster et libraire chez The Village Voice Bookshop',
            bullets: [
              'Mises à jour du site de la librairie et création de supports de communication (marque-pages, affiches, newsletters, signalétique).',
              "Design et suivi du développement d'un nouveau site basé sur un CMS.",
              'Accueil et conseil de la clientèle, gestion de stock et de la caisse.'
            ]
          },
          fnac: {
            heading: '2007-2009: Conseiller de vente au rayon vidéo de la Fnac',
            bullets: [
              "Accueil des clients et gestion d'une équipe chargé des offres promotionnelles."
            ]
          }
        }
      },
      education: {
        heading: 'Formations',
        icon: {
          dark: 'var(--education-dark)',
          light: 'var(--education-light)'
        },
        entries: {
          cdnl: {
            heading:
              'Licence Pro: Création et développement numériques en ligne',
            details: '2013-2014 | <em>Université Paris 8</em>'
          },
          livre: {
            heading: 'DUT: Métiers du livre (section librairie)',
            details: '2009-2010 | <em>Université Paris X</em>'
          },
          cinema: {
            heading: 'Licence: Arts du spectacle (section cinéma)',
            details: '2004-2007 | <em>Université Paris X</em>'
          },
          bac: {
            heading: 'Baccalauréat ES (option internationale anglais)',
            details: "2003 | <em>Lycée d'État de Sèvres</em>"
          }
        }
      },
      hobbies: {
        heading: 'Loisirs',
        icon: {
          dark: 'var(--hobbies-dark)',
          light: 'var(--hobbies-light)'
        },
        entries: {
          film: {
            heading: 'Cinéma',
            bullets: [
              'Création du blog <a href="https://cinesthesies.fr" target="_blank" rel="noopener" style="text-decoration: underline;">Cinésthésies</a> en 2012 avec WordPress et un thème que j\'ai développé.',
              'Rédaction de critiques de films pour la revue <em>Métaluna</em> en 2013.',
              "Passionné par le cinéma, avec un intérêt particulier pour les classiques américains, français et britanniques, pour les nouvelles vagues européennes et japonaises d'après-guerre, et pour le cinéma d'exploitation des années 60 aux années 80.",
              "Figuration sur plusieurs tournages pour le cinéma : <em>L'Ex-femme de ma vie</em> (Josiane Balasko, 2004), <em>Le Temps qui reste</em> (François Ozon, 2005), <em>Jean-Philippe</em> (Laurent Tuel, 2006), <em>Mon meilleur ami</em> (Patrice Leconte, 2006), et pour la télévision : <em>PJ</em> (diffusion sur France 2 de 1997 à 2009)."
            ]
          },
          photography: {
            heading: 'Photo',
            bullets: [
              'J\'ai pratiqué la photo argentique au début des années 2000 et je retrouve aujourd\'hui de l\'enthousiasme pour la photo numérique. N\'hésitez pas à découvrir mes photos sur <a href="https://instagram.com/marc__fairbrother/" target="_blank" rel="noopener" style="text-decoration: underline;">Instagram</a>.'
            ]
          }
        }
      }
    },
    cta: 'Discutons!'
  },
  projects: {
    meta: {
      slug: 'mes-projets'
    },
    heading: {
      title: 'Mes Projets',
      description: 'Du texte'
    }
  },
  contact: {
    meta: {
      slug: 'contactez-moi'
    },
    heading: {
      title: 'Discutons!',
      description: 'Du texte'
    }
  },
  footer: {
    credits: 'Crédits'
  }
};
