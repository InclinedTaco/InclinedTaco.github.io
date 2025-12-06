// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-started-my-undergraduate-journey-at-nit-trichy",
          title: 'Started my undergraduate journey at NIT Trichy.',
          description: "",
          section: "News",},{id: "news-secured-1st-place-at-the-sangam-inter-nit-trichy-hardware-hackathon-for-developing-an-ar-glass-prototype-for-surgical-training",
          title: 'Secured 1st place at the SANGAM (inter-NIT Trichy) hardware hackathon for developing an...',
          description: "",
          section: "News",},{id: "news-joined-thryv-mobility-as-an-embedded-systems-intern",
          title: 'Joined Thryv Mobility as an Embedded Systems Intern.',
          description: "",
          section: "News",},{id: "news-started-working-as-a-remote-research-intern-at-marmot-lab-nus",
          title: 'Started working as a remote research intern at MARMoT Lab, NUS.',
          description: "",
          section: "News",},{id: "news-joined-dacas-lab-iisc-as-a-quadrotor-research-intern",
          title: 'Joined DACAS Lab, IISc as a Quadrotor Research Intern.',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
