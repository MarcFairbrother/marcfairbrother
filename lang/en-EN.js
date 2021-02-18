export default {
  meta: {
    ogImg: 'https://marcfairbrother.com/img/marc_fairbrother_og-en.png'
  },
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
    settings: 'Settings'
  },
  socials: {
    linkedin: 'My LinkedIn profile',
    github: 'My GitHub profile',
    codepen: 'My CodePen profile'
  },
  theme: {
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme'
  },
  index: {
    meta: {
      title: 'UX-plorer',
      description: 'I design and develop user-centric digital experiences.'
    },
    heading: {
      title: '<span>My name is</span> <br>Marc Fairbrother',
      description: 'I design and develop user-centric digital experiences.',
      cta: 'UX-plore'
    },
    skillset: {
      title: 'In a Nutshell',
      description:
        "I'm a web designer and front-end developer with experience in project and team management.",
      categories: {
        design: {
          title: 'Web Design',
          bullets: {
            ux: 'Web & Mobile UX',
            visual: 'Visual Design',
            a11y: 'Accessibility-Oriented'
          }
        },
        development: {
          title: 'Development',
          bullets: {
            html: 'HTML, CSS, JavaScript',
            tools: 'Git, Docker, NPM',
            method: 'Test-Driven Development'
          }
        },
        management: {
          title: 'Management',
          bullets: {
            organisation: 'Project Organisation',
            prioritisation: 'Sense of Priorities',
            enablement: 'Team Enabler'
          }
        }
      },
      cta: 'Learn More About Me'
    },
    bio: {
      title: 'Web Worker',
      text: [
        'In 2014, after working as webmaster and bookseller for an English-language bookshop in Paris, I joined a start-up which runs multiple VOD services.',
        'With the help of the development team I managed technological decisions, made sure that projects were moving in the right direction, and helped with design and development work while overseeing the launch of several new applications and services.',
        'In my free time I enjoy firing up personal projects to learn new tools and concepts, and for the fun of writing code.'
      ],
      cta: 'Check Out My Projects'
    }
  },
  about: {
    meta: {
      slug: 'about',
      title: 'About Me',
      description:
        "I'm a web designer and front-end developer with a strong belief in building accessible, inclusive, and stand-out digital experiences."
    },
    heading: {
      title: 'My name is Marc Fairbrother',
      description: [
        "I'm a web designer and front-end developer with a background in project management and retail.",
        'I believe in building accessible, inclusive, and stand-out digital experiences.'
      ],
      resume: {
        label: 'Download my resume',
        url: '/docs/marc_fairbrother_resume.pdf'
      }
    },
    content: {
      pro: {
        heading: 'Professional Experience',
        icon: {
          dark: 'var(--pro-dark)',
          light: 'var(--pro-light)'
        },
        entries: {
          movingScope: {
            heading:
              '2014-2020: Director of Development and Design at Moving Scope',
            bullets: [
              'Managed the VOD projects <a href="https://festivalscope.com" target="_blank" rel="noopener" style="text-decoration: underline;">Festival Scope</a>, <a href="https://pro.festivalscope.com" target="_blank" rel="noopener" style="text-decoration: underline;">Festival Scope Pro</a>, and <a href="https://artekinofestival.com" target="_blank" rel="noopener" style="text-decoration: underline;">ArteKino Festival</a>, from writing specifications to release, maintenance, and further upgrades.',
              'Designed and developed web interfaces and responsive newsletters, and corrected front-end issues.',
              'Researched and supervised the implementation of solutions to improve the video workflow and streaming quality.'
            ]
          },
          villageVoice: {
            heading:
              '2010-2012: Webmaster and Bookseller at The Village Voice Bookshop',
            bullets: [
              'Updated the website and created various communication materials (bookmarks, posters, e-mail campaigns, signage).',
              'Redesigned and supervised the development of a new CMS-based website.',
              'Advised customers, managed stock and handled the cash register.'
            ]
          },
          fnac: {
            heading:
              '2007-2009: Shop Assistant in the Video Department at Fnac',
            bullets: [
              'Helped customers and supervised a team in charge of special offers.'
            ]
          }
        }
      },
      education: {
        heading: 'Education',
        icon: {
          dark: 'var(--education-dark)',
          light: 'var(--education-light)'
        },
        entries: {
          cdnl: {
            heading: 'BSC Degree in Digital Product Design and Development',
            details: '2013-2014 | <em>Université Paris 8</em>'
          },
          livre: {
            heading: "Associate's Degree in Bookselling",
            details: '2009-2010 | <em>Université Paris X</em>'
          },
          cinema: {
            heading: 'BA Degree in Film Studies',
            details: '2004-2007 | <em>Université Paris X</em>'
          },
          bac: {
            heading: 'French Baccalaureate (International Option)',
            details: "2003 | <em>Lycée d'État de Sèvres</em>"
          }
        }
      },
      hobbies: {
        heading: 'Hobbies',
        icon: {
          dark: 'var(--hobbies-dark)',
          light: 'var(--hobbies-light)'
        },
        entries: {
          film: {
            heading: 'Film',
            bullets: [
              'Created the <a href="https://cinesthesies.fr" target="_blank" rel="noopener" style="text-decoration: underline;">Cinésthésies</a> blog in 2012 using WordPress and a custom theme developed from scratch, and wrote film reviews for <em>Metaluna</em> magazine in 2013.',
              "Passionate about repertory films, with a keen interest in American, French, and British classics, post war new wave movements in Europe and Japan, and 60's to late 80's exploitation cinema.",
              'Worked as an extra on professional shoots from 2003 to 2006.'
            ]
          },
          photography: {
            heading: 'Photography',
            bullets: [
              'I practiced film photography in the early 2000\'s and have recently got back into the hobby in its digital form. Feel free to check out my work on <a href="https://instagram.com/marc__fairbrother/" target="_blank" rel="noopener" style="text-decoration: underline;">Instagram</a>.'
            ]
          }
        }
      }
    },
    cta: "Let's Talk!"
  },
  projects: {
    meta: {
      slug: 'projects',
      title: 'My Projects',
      description:
        "A collection of professional and side projects I've worked on as designer, developer, and/or project manager."
    },
    heading: {
      title: 'Selected Projects',
      description: [
        "A collection of professional and side projects I've worked on as designer, developer, and/or project manager."
      ]
    },
    noProjects: 'There are no projects corresponding to the selected filters.',
    filters: {
      labels: {
        pro: 'Professional',
        perso: 'Personal',
        dev: 'Development',
        design: 'Design'
      },
      buttonLabel: 'Filters'
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
        roles: ['Project Manager', 'UX & UI Designer', 'Front-End Developer'],
        presentation: [
          'Festival Scope Pro is a VOD service used by over 10,000 film professionals yearly.',
          'Selected titles in search of visibility and distribution opportunities are made available for online screening in partnership with over 100 international film festivals and organizations.'
        ],
        tasks: [
          'Took over management of the legacy application in 2014 and supervised the implementation of new features.',
          "Supervised a rewrite of the code-base to enable synergies with the company's other projects starting in 2016.",
          'Coordinated a team of designers and developers to launch new versions of the web and iOS applications in 2019.',
          'Designed and developed parts of the new user interface and a responsive newsletter template.',
          'Handled bug reporting, triage, and quality assurance while fixing front-end issues.',
          'Researched and supervised the implementation of services to improve the streaming quality and the video workflow.'
        ],
        tools: {
          title: 'Tools & Tech:',
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
          label: 'Visit Website'
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
        roles: ['Project Manager', 'UX & UI Designer', 'Front-End Developer'],
        presentation: [
          'Launched in 2016 by Arte France Cinéma and Festival Scope, the ArteKino Festival is a yearly online film festival showcasing ten recent feature films, available to watch for 50,000 viewers living in the European Union.',
          "At the end of each of the festival's editions, one film receives an audience award based on votes submitted online by audience members."
        ],
        tasks: [
          'Worked with the principal stakeholders to write the specifications of the first version of the application and additional features.',
          'Supervised the design and development teams in charge of creating the web, iOS, and Android applications.',
          'Designed and developed parts of the user interface and created functionnal prototypes to test user journeys and experience.',
          'Handled bug reporting, triage, and quality assurance.',
          'Trained junior project managers to supervise the project from the 2019 edition onwards.'
        ],
        tools: {
          title: 'Tools & Tech:',
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
          label: 'Visit Website'
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
        roles: ['Project Manager', 'UX & UI Designer'],
        presentation: [
          'Festival Scope is a VOD platform showing selected titles from international film festivals, giving a worldwide audience the chance to attend these events virtually and affording extra visibility to films with limited distribution opportunities.'
        ],
        tasks: [
          'Worked with the product owners to establish and write specifications for the platform.',
          'Supervised a team of designers and developers to deliver a first version of the web application in 2016 and to work on further iterations.',
          'Created wireframes and mock ups for a mobile application and supervised its development.',
          "Collaborated with the lead developer to research possible synergies with the company's other applications built on the same code-base.",
          'Designed and developed responsive newsletter templates and trained the staff members in charge of sending them.',
          'Handled bug reporting, triage, and quality assurance.'
        ],
        tools: {
          title: 'Tools & Tech:',
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
          'This project has been moved to a new technical solution since I last worked on it in 2020.'
      },
      {
        title: 'Vanilla JS Memory',
        categories: ['perso', 'dev', 'design'],
        screenshot: {
          mobile: 'memory-mobile',
          tablet: 'memory-tablet',
          large: 'memory-large'
        },
        roles: ['Developer', 'UX & UI Designer'],
        presentation: [
          'A classic game of Memory in which a human and a computer player take turns to discover the highest number of pairs.',
          'If either player discovers a pair, they get to play another turn. The game ends when all the pairs have been discovered.'
        ],
        tasks: [
          'Implemented a turn based system to let either the human or computer play.',
          'Created a knowledge base so that the computer player could keep track of which cards had been revealed and which cards had been removed from play after a pair is discovered.',
          'Scripted a strategy for the computer player which would check revealed cards for matching pairs at the beginning of each turn and either flip those if a match was found or flip an unknown card and check again for a matching revealed card.',
          'Developed JS and CSS animations when flipping cards and when shuffling the cards for a new game.',
          'Used ES modules and SCSS to organize the code in smaller, more manageable files.',
          'Plan to add tests to the project, and possibly develop a version for two remote human players.'
        ],
        tools: {
          title: 'Tools & Tech:',
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
          label: 'Visit Website'
        },
        srcCode: {
          url: 'https://github.com/MarcFairbrother/memory',
          label: 'View Code'
        }
      },
      {
        title: 'Vanilla JS Metronome',
        categories: ['perso', 'dev', 'design'],
        screenshot: {
          mobile: 'metronome-mobile',
          tablet: 'metronome-tablet',
          large: 'metronome-large'
        },
        roles: ['Developer', 'UX & UI Designer'],
        presentation: [
          'A JavaScript metronome with accessible controls for the tempo, number of beats and to toggle the offbeat on or off.',
          'The Web Audio API is used to produce metronome clicks at different frequencies to mark the first beat of a cycle, normal beats and offbeats.'
        ],
        tasks: [
          'Used asynchronous functions and recursion to build the basic metronome logic, allowing the tempo to be updated without clearing an interval or restarting the metronome.',
          'Used JS prototypes to create oscillators with different frequencies which can be played and muted by using built-in methods.',
          'Built UI animations and accessible custom form inputs.'
        ],
        tools: {
          title: 'Tools & Tech:',
          items: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'Netlify']
        },
        website: {
          url: 'https://metronome.marcfairbrother.com/',
          label: 'Visit Website'
        },
        srcCode: {
          url: 'https://github.com/MarcFairbrother/metronome',
          label: 'View Code'
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
        roles: ['Developer', 'UX & UI Designer'],
        presentation: [
          "A Vue.js data visualisation project exploring Jess Franco's colossal filmography.",
          'My goal was to learn the basics of the Vue.js framework and SVG animation.'
        ],
        tasks: [
          "Inspired by lobby card layout, and vintage book jackets and poster graphic design elements to capture the feel of Franco's best known films.",
          'Built a chart using SVG and JavaScript animations with data stored as a JavaScript object.',
          'Developed a filter system which updates the chart when new filter options are selected.',
          'Available options for each filter are updated depending on previously selected options to avoid returning no results.',
          'Plan to revisit and optimise the code now that I have a better understanding of JavaScript.',
          'Plan to improve the design for the list of films and add a map to chart recurring shooting locations, and possibly move the data to a server using GraphQL to load it on the client.'
        ],
        tools: {
          title: 'Tools & Tech:',
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
          label: 'Visit Website'
        },
        srcCode: {
          url: 'https://github.com/MarcFairbrother/into-the-francoverse',
          label: 'View Code'
        }
      }
    ]
  },
  contact: {
    meta: {
      slug: 'contact',
      title: 'Contact Me',
      description: 'Please feel free to send me a message!'
    },
    heading: {
      title: "Let's talk!",
      description: [
        "I'm currently looking for a position in UX and UI design or front-end development, so please feel free to get in touch."
      ]
    },
    formTexts: {
      name: {
        label: 'Name:',
        error: 'Please enter your name'
      },
      email: {
        label: 'E-mail:',
        error: 'Please enter a valid e-mail address'
      },
      subject: {
        label: 'Subject:',
        error: 'Please enter a subject'
      },
      message: {
        label: 'Message:',
        error: 'Please enter a message'
      },
      send: 'Send',
      confirmation: "Thanks for contacting me! I'll get back to you soon.",
      error:
        'It looks like there was a problem. Please try again later or contact me on <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/marcfairbrother/">LinkedIn</a>.'
    },
    btnLabel: 'Close'
  },
  footer: {
    credits: 'Credits'
  },
  credits: {
    meta: {
      slug: 'credits',
      title: 'Credits'
    },
    heading: 'Credits',
    content: [
      '🙏 Huge thanks to my friends and the web dev community for their guidance and encouragements',
      '👷 Designed and developed by Marc Fairbrother',
      '❤️ Built with <a href="https://https://nuxtjs.org/" target="_blank" rel="noopener" style="text-decoration: underline;">Nuxt</a> & Luv (not a JS framework)',
      '🏠 Source code hosted on <a href="https://github.com/MarcFairbrother/marcfairbrother" target="_blank" rel="noopener" style="text-decoration: underline;">GitHub</a>',
      '🧙 Hosted and deployed with awesome <a href="https://netlify.com" target="_blank" rel="noopener" style="text-decoration: underline;">Netlify</a> wizardry'
    ]
  },
  error: {
    notFound: 'Sorry, I must have misplaced this page!',
    other: 'Sorry, looks like there was an error!',
    cta:
      'Feel free to <a href="/contact" style="text-decoration: underline;" >get in touch</a> if you think there\'s a problem!'
  }
};
