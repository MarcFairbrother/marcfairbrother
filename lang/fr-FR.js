export default {
  meta: {
    ogImg: 'https://marcfairbrother.com/img/marc_fairbrother_og-fr.png'
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
    meta: {
      title: 'UX-plorer',
      description:
        "Je conçois et développe des applications numériques centrées sur l'expérience utilisateur."
    },
    heading: {
      title: "<span>Je m'appelle</span> <br>Marc Fairbrother",
      description:
        "Je conçois et développe des applications numériques centrées sur l'expérience utilisateur.",
      cta: 'Découvrir'
    },
    skillset: {
      title: "L'Essentiel",
      description:
        "Je suis un web designer et développeur front-end avec de l'expérience en gestion d'équipe et de projet.",
      categories: {
        design: {
          title: 'Web Design',
          bullets: {
            ux: 'Ergonomie web & mobile',
            visual: 'Conception visuelle',
            a11y: 'Orienté accessibilité'
          }
        },
        development: {
          title: 'Développement',
          bullets: {
            html: 'HTML, CSS, JavaScript',
            tools: 'Git, Docker, NPM',
            method: 'Test-driven development'
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
      slug: 'parcours',
      title: 'Mon Parcours',
      description:
        "Je suis un web designer et développeur front-end passionné par la création d'applications numériques accessibles, inclusives et originales."
    },
    heading: {
      title: "Je m'appelle Marc Fairbrother",
      description: [
        "Je suis un web designer et développeur front-end avec de l'expérience en gestion de projet et dans le commerce.",
        "J'aime créer des applications numériques accessibles, inclusives et originales."
      ],
      resume: {
        label: 'Téléchargez mon CV',
        url: '/docs/marc_fairbrother_cv.pdf'
      }
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
            heading:
              '2014-2020: Responsable du développement et du design numériques chez Moving Scope',
            bullets: [
              'Gestion des projets de VOD <a href="https://festivalscope.com" target="_blank" rel="noopener"  style="text-decoration: underline;">Festival Scope</a>, <a href="https://pro.festivalscope.com" target="_blank" rel="noopener" style="text-decoration: underline;">Festival Scope Pro</a>, et <a href="https://artekinofestival.com" target="_blank" rel="noopener" style="text-decoration: underline;">ArteKino Festival</a>, de la rédaction de cahiers des charges au lancement des services, leur maintenance, et l\'implémentation de nouvelles fonctionnalités.',
              "Conception et développement d'interfaces web, de newsletters responsives et correction de bugs front-end.",
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
              "Accueil des clients et gestion d'une équipe chargée des offres promotionnelles."
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
              'Licence Pro : Création et développement numériques en ligne',
            details: '2013-2014 | <em>Université Paris 8</em>'
          },
          livre: {
            heading: 'DUT : Métiers du livre (section librairie)',
            details: '2009-2010 | <em>Université Paris X</em>'
          },
          cinema: {
            heading: 'Licence : Arts du spectacle (section cinéma)',
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
              'Rédaction de critiques de films pour la revue <em>Metaluna</em> en 2013.',
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
      slug: 'projets',
      title: 'Mes Projets',
      description:
        'Une sélection de projets professionnels et personnels sur lesquels je suis intervenu en tant que designer, développeur ou chef de projet.'
    },
    heading: {
      title: 'Mes Projets',
      description: [
        'Une sélection de projets professionnels et personnels sur lesquels je suis intervenu en tant que designer, développeur ou chef de projet.'
      ]
    },
    noProjects:
      "Il n'y a pas de projets correspondant aux filtres sélectionnés.",
    filters: {
      labels: {
        pro: 'Professionnel',
        perso: 'Personnel',
        dev: 'Développement',
        design: 'Design'
      },
      buttonLabel: 'Filtrer'
    },
    content: [
      {
        title: 'Festival Scope Pro',
        categories: ['pro', 'dev', 'design'],
        screenshot: {
          mobile: 'fspro-mobile',
          tablet: 'fspro-tablet',
          large: 'fspro-large'
        },
        roles: ['Chef de projet', 'Designer UX & UI', 'Développeur front-end'],
        presentation: [
          "Festival Scope Pro est un service de VOD utilisé par plus de 10&nbsp;000 professionnels travaillant dans l'industrie du cinéma chaque année.",
          "Une sélection de titres à la recherche d'opportunités de diffusion et de visibilité supplémentaire sont rendus disponibles en ligne en partenariat avec plus de 100 festivals de cinéma et d'institutions du monde entier."
        ],
        tasks: [
          "Prise en charge de la gestion d'une application legacy à partir de 2014 et suivi de l'implémentation de nouvelles fonctionnalités.",
          'Supervision de la réécriture du code-base à partir de 2016 afin de permettre des synergies avec les autres projets de la société.',
          "Coordination d'une équipe de designers et de développeurs pour lancer de nouvelles versions des applications web et iOS en 2019.",
          "Conception et développement de parties de l'interface utilisateur et d'un gabarit de newsletter responsive.",
          'Suivi des bugs, triage et recettage, et correction de problèmes front-end.',
          "Recherche et supervision de l'implémentation de services permettant l'amélioration de la qualité de streaming et l'optimisation du workflow vidéo."
        ],
        tools: {
          title: 'Outils & technos&nbsp;:',
          items: [
            'Figma',
            'Twig',
            'SCSS',
            'JavaScript',
            'Git',
            'GitLab',
            'Trello',
            'Email Octopus'
          ]
        },
        website: {
          url: 'https://pro.festivalscope.com',
          label: 'Visiter le site'
        }
      },
      {
        title: 'ArteKino Festival',
        categories: ['pro', 'dev', 'design'],
        screenshot: {
          mobile: 'akf-mobile',
          tablet: 'akf-tablet',
          large: 'akf-large'
        },
        roles: ['Chef de projet', 'Designer UX & UI', 'Développeur front-end'],
        presentation: [
          "Lancé par Arte France Cinéma et Festival Scope en 2016, ArteKino Festival est un festival de cinéma en ligne réunissant chaque année dix long-métrages récents disponibles au visionnage pour 50&nbsp;000 spectateurs de l'Union Européenne",
          "À la fin de chaque édition du festival, un film est récompensé d'un prix du public discerné selon les votes effectués en ligne par les spectateurs."
        ],
        tasks: [
          'Collaboration avec les principaux porteurs du projet pour établir un cahier des charges initial et définir de nouvelles fonctionnalités à chaque nouvelle édition.',
          'Gestion des équipes de design et de développement chargées de la création des applications web, iOS et Android.',
          "Conception et développement de parties de l'interface et création de protoypes fonctionnels permettant de valider les parcours et l'expérience utilisateur.",
          'Suivi de bugs, triage et recettage.',
          "Formation de chefs de projet junior pour leur déléguer la gestion du service à partir de l'édition 2019 du festival."
        ],
        tools: {
          title: 'Outils & technos&nbsp;:',
          items: [
            'Figma',
            'HTML',
            'CSS',
            'JavaScript',
            'GitLab',
            'Trello',
            'Mailchimp'
          ]
        },
        website: {
          url: 'https://artekinofestival.com',
          label: 'Visiter le site'
        }
      },
      {
        title: 'Festival Scope',
        categories: ['pro', 'design'],
        screenshot: {
          mobile: 'fspub-mobile',
          tablet: 'fspub-tablet',
          large: 'fspub-large'
        },
        roles: ['Chef de projet', 'Designer UX & UI'],
        presentation: [
          'Festival Scope est un service de VOD diffusant des films sélectionnés dans des festivals de cinéma internationaux, permettant aux spectateurs du monde entier de participer virtuellement aux événements et offrant une visibilité supplémentaire à des films aux opportunités de distribution limitées.'
        ],
        tasks: [
          'Collaboration avec les porteurs du projet pour rédiger un cahier des charges.',
          "Supervision d'une équipe de designers et de développeurs pour livraison d'une première version de l'application en 2016 et de nouvelles versions au fil des mois.",
          'Création de wireframes et de maquettes pour une application mobile et suivi de son développement.',
          'Recherche de synergies possibles entre les différentes applications de la société utilisant un même code-base.',
          'Conception et développement de gabarits de newsletters responsives et formation du personnel chargé de leur envoi.',
          'Suivi de bugs, triage et recettage.'
        ],
        tools: {
          title: 'Outils & technos&nbsp;:',
          items: [
            'Gimp',
            'Inkscape',
            'HTML',
            'CSS',
            'GitLab',
            'Trello',
            'Mailchimp'
          ]
        },
        message:
          'Ce projet a été migré vers une nouvelle solution technique depuis ma dernière participation en 2020.'
      },
      {
        title: 'Memory Vanilla JS',
        categories: ['perso', 'dev', 'design'],
        screenshot: {
          mobile: 'memory-mobile',
          tablet: 'memory-tablet',
          large: 'memory-large'
        },
        roles: ['Développeur', 'Designer UX & UI'],
        presentation: [
          'Un jeu de Memory traditionnel dans lequel un joueur humain et un joueur ordinateur essaient tour par tour de retrouver le plus grand nombre de paires.',
          'Si un joueur découvre une paire, il joue de nouveau. La partie se termine une fois que toutes les paires ont été découvertes.'
        ],
        tasks: [
          "Implémentation d'un système par tour pour permettre à l'humain ou à l'ordinateur de jouer.",
          "Création d'une base de connaissances pour permettre à l'ordinateur de savoir quelles cartes ont été révélées et quelles cartes sont hors jeu car la paire a été découverte.",
          "Implémentation d'une stratégie pour l'ordinateur qui commence son tour en cherchant une paire parmi les cartes révélées. Si une paire existe, l'ordinateur retourne ces cartes, sinon il retourne une carte inconnue et vérifie de nouveau si une carte correspondante a déjà été révélée.",
          "Développement d'animations JS et CSS pour accompagner les interactions de retournement de carte et de mélange en début de partie.",
          "Utilisation de modules ES et de SCSS pour organiser le code de l'application en des fichiers plus concis et faciles à gérer.",
          "L'ajout de tests au projet et le développement d'une version pour deux joueurs en ligne sont prévus."
        ],
        tools: {
          title: 'Outils & technos&nbsp;:',
          items: [
            'Figma',
            'HTML',
            'SCSS',
            'JavaScript',
            'ES Modules',
            'Parcel',
            'Git',
            'GitHub',
            'Netlify'
          ]
        },
        website: {
          url: 'https://memory.marcfairbrother.com/',
          label: 'Visiter le site'
        },
        srcCode: {
          url: 'https://github.com/MarcFairbrother/memory',
          label: 'Voir le code'
        }
      },
      {
        title: 'Metronome Vanilla JS',
        categories: ['perso', 'dev', 'design'],
        screenshot: {
          mobile: 'metronome-mobile',
          tablet: 'metronome-tablet',
          large: 'metronome-large'
        },
        roles: ['Développeur', 'Designer UX & UI'],
        presentation: [
          'Un métronome JavaScript avec contrôles accessibles pour modifier le tempo, le nombre de pulsations et pour activer ou désactiver les contre-temps.',
          "L'API Web Audio a été utilisée pour générer les clics du métronome avec différentes fréquences pour marquer la première pulsation d'un cycle, les pulsations normales et les contre-temps."
        ],
        tasks: [
          'Utilisation de fonctions asynchrones et de récursion pour construire la logique basique du métronome et permettre la modification du tempo sans devoir annuler un intervalle ou redémarrer le métronome.',
          'Utilisation de prototypes JS pour créer des oscillateurs à différentes fréquences et pouvant être démarrées ou éteintes via des méthodes attachées.',
          "Développement d'animations et de contrôles de formulaire accessibles."
        ],
        tools: {
          title: 'Outils & technos&nbsp;:',
          items: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'Netlify']
        },
        website: {
          url: 'https://metronome.marcfairbrother.com/',
          label: 'Visiter le site'
        },
        srcCode: {
          url: 'https://github.com/MarcFairbrother/metronome',
          label: 'Voir le code'
        }
      },
      {
        title: 'Into the FrancoVerse',
        categories: ['perso', 'dev', 'design'],
        screenshot: {
          mobile: 'francoverse-mobile',
          tablet: 'francoverse-tablet',
          large: 'francoverse-large'
        },
        roles: ['Développeur', 'Designer UX & UI'],
        presentation: [
          'Un projet de data visualisation explorant la filmographie colossale de Jess Franco.',
          "Mon objectif était d'apprendre les bases du framework Vue.js et à animer des SVG."
        ],
        tasks: [
          "Design inspiré de la mise en page de vieux <em>lobby cards</em> et d'éléments graphiques d'affiches et livres vintage pour retrouver l'ambiance des films les plus connus de Franco.",
          "Développement d'un graphique en utilisant un SVG et des animations JavaScript avec des données conservées dans un object JavaScript.",
          "Développement d'un système de filtres pour mettre à jour le graphique selon les options sélectionnées.",
          'Les options disponibles pour chaque filtre sont mises à jour selon les autres options sélectionnées pour éviter de retourner aucun résultat.',
          "Il est prévu de revoir et optimiser le code avec l'expérience acquise en programmation.",
          "Il est prévu de revoir le design de la liste de films et ajouter une carte pour visualiser les lieux de tournage récurrents, ainsi que d'héberger les données sur un serveur et utiliser GraphQl pour charger les données nécessaires sur le client."
        ],
        tools: {
          title: 'Outils & technos&nbsp;:',
          items: [
            'Vue.js',
            'SCSS',
            'JavaScript',
            'HTML',
            'Git',
            'GitHub',
            'Netlify'
          ]
        },
        website: {
          url: 'https://intothefrancoverse.marcfairbrother.com/',
          label: 'Visiter le site'
        },
        srcCode: {
          url: 'https://github.com/MarcFairbrother/into-the-francoverse',
          label: 'Voir le code'
        }
      }
    ]
  },
  contact: {
    meta: {
      slug: 'contact',
      title: 'Contactez moi',
      description:
        "N'hésitez pas à m'envoyer un message si vous avez des questions."
    },
    heading: {
      title: 'Contactez moi!',
      description: [
        "Je suis actuellement à la recherche d'un poste en design UX et UI ou en développement front-end. N'hésitez pas à me contacter."
      ]
    },
    formTexts: {
      name: {
        label: 'Nom&nbsp;:',
        error: 'Veuillez entrer votre nom'
      },
      email: {
        label: 'E-mail&nbsp;:',
        error: 'Veuillez entrer une adresse e-mail valide'
      },
      subject: {
        label: 'Sujet&nbsp;:',
        error: 'Veuillez entrer un sujet'
      },
      message: {
        label: 'Message&nbsp;:',
        error: 'Veuillez entrer un message'
      },
      send: 'Envoyer',
      confirmation:
        'Merci de votre message! Je reviendrai rapidement vers vous.',
      error:
        'Il semble qu\'il y a eu un problème. Merci de réessayer ou de me contacter sur <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/marcfairbrother/">LinkedIn</a>.'
    },
    btnLabel: 'Fermer'
  },
  footer: {
    credits: 'Crédits'
  },
  credits: {
    meta: {
      slug: 'credits',
      title: 'Crédits'
    },
    heading: 'Crédits',
    content: [
      '🙏 Un grand merci à mes amis et la communauté du développement web pour leurs encouragements et leurs conseils',
      '👷 Conçu et développé par Marc Fairbrother',
      '❤️ Développé avec <a href="https://https://nuxtjs.org/" target="_blank" rel="noopener" style="text-decoration: underline;">Nuxt</a> & Amour (ce n\'est pas un framework JS)',
      '🏠 Code source hébergé sur <a href="https://github.com/MarcFairbrother/marcfairbrother" target="_blank" rel="noopener" style="text-decoration: underline;">GitHub</a>',
      '🧙 Hébergé et déployé par la magie <a href="https://netlify.com" target="_blank" rel="noopener" style="text-decoration: underline;">Netlify</a>'
    ]
  },
  error: {
    notFound: "Désolé, il semble que j'ai égaré cette page&nbsp;!",
    other: "Désolé, une erreur semble s'être produite&nbsp;!",
    cta:
      'N\'hésitez pas à <a href="/fr/contact" style="text-decoration: underline;" >me contacter</a> pour me signaler un problème'
  }
};
