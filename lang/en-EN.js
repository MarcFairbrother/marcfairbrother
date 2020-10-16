export default {
  test: {
    welcome: 'Welcome'
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
    heading: {
      title: '<span>My name is</span> <br>Marc Fairbrother',
      description: 'I design and develop user-centric digital experiences.',
      cta: 'UX-plore'
    },
    skillset: {
      title: 'In a Nutshell',
      description:
        "I'm a web designer and front end developer with experience in project and team management.",
      categories: {
        design: {
          title: 'Web Design',
          bullets: {
            ux: 'Web & Mobile UX',
            visual: 'Visual Design',
            a11y: 'Accessibility Driven'
          }
        },
        development: {
          title: 'Development',
          bullets: {
            html: 'Advanced HTML & CSS',
            js: 'Strong JS Fundamentals',
            tools: 'Git Basics'
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
      slug: 'about'
    },
    heading: {
      title: 'My name is Marc Fairbrother',
      description: [
        "I'm a web designer and front end developer with a background in project management and retail.",
        'I believe in building accessible, inclusive, and enticing digital experiences.'
      ],
      resume: {
        label: 'Download my resume',
        url: '#'
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
            heading: '2014-2020: Technical Manager at Moving Scope',
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
              'Created the <a href="https://cinesthesies.fr" target="_blank" rel="noopener" style="text-decoration: underline;">Cinésthésies</a> blog in 2012 using WordPress and a custom theme developed from scratch, and wrote film reviews for <em>Métaluna</em> magazine in 2013.',
              "Passionate about repertory films, with a keen interest in American, French, and British classics, post war new wave movements in Europe and Japan, and 60's to late 80's exploitation cinema.",
              'Worked as an extra on professional shoots from 2003 to 2006.'
            ]
          },
          photography: {
            heading: 'Photography',
            bullets: [
              'I practiced film photography in the early 2000\'s and have recently gotten back into the hobby in its digital form. Feel free to check out my work on <a href="https://instagram.com/marc__fairbrother/" target="_blank" rel="noopener" style="text-decoration: underline;">Instagram</a>.'
            ]
          }
        }
      }
    },
    cta: "Let's Talk!"
  },
  projects: {
    meta: {
      slug: 'projects'
    },
    heading: {
      title: 'My Projects',
      description: 'Some text'
    }
  },
  contact: {
    meta: {
      slug: 'contact'
    },
    heading: {
      title: "Let's talk!",
      description: 'Some text'
    }
  },
  footer: {
    credits: 'Credits'
  }
};
