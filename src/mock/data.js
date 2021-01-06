import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Xinxin Wei | Software Engineer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: "Welcome to XWei's portfolio", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Xinxin Wei',
  subtitle: "I'm a Software Engineer.",
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'photo.jpg',
  paragraphOne:
    'Hi, I am looking for an opportunity as a “Software Engineer”. I just graduated from the Business Information Technology program of Red River College(RRC) in December 2020.',
  paragraphTwo:
    "Before coming to Canada, I received my Bachelor's degree in Computer Science in China. I worked on Mobile Application (iOS) and Visual Reality (C# on Unity) Software development for several years in two firms.",
  paragraphThree:
    'While living in Winnipeg, I worked on a "Multi-angle Camera System" project as a Researcher Assistant of RRC. And I had a part-time job at ioAirFlow Inc. on a Django based web development project in 2019. From January 2020, I began a Co-op placement at Priceline.com. I used Go, Php, React.js, Git, and Docker to achieve the duties\' requirements.',
  resume: 'https://www.linkedin.com/in/xinxin-wei/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project_android.png',
    title: 'Android App: Weather Forecast',
    info: 'Lorem ipsum dolor sit, /n',
    info2: '',
    url: 'https://youtu.be/7ocbZrPZ_3I',
    repo: 'https://github.com/wxx0136/XWeather_V2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_u3d.png',
    title: 'Unity3d Game: Flappy Bird',
    info:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.',
    info2: '',
    url: 'https://wxx0136.github.io/FlappyBird/',
    repo: 'https://github.com/wxx0136/FlappyBird', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_python.png',
    title: 'Python Scraper: Weather Plotter',
    info:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.',
    info2: '',
    url: 'https://repl.it/@wxx0136/weatherscraper#README.md',
    repo: 'https://github.com/wxx0136/weather_scraper', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me?',
  btn: 'Email me',
  email: 'wxx0136@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/xinxin-wei',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/wxx0136',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
