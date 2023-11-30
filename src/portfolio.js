/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jaykumar Suthar",
  title: "JayKumar",
  subTitle: emoji(
    "Experienced software developer specializing in game and mobile app development and machine learning, with a solid dedication to driving results through innovation. A proven track record of success in both Android and iOS platforms. I seek career opportunities in a dynamic and collaborative software engineering or development position."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1OiN5QZxZtGxYO2OVCton0IYvsqFFIwXd/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/officialjaipanchal",
  linkedin: "https://www.linkedin.com/in/whojaipanchal/",
  gmail: "whojaipanchal@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@whojaipanchal",
  stackoverflow: "https://stackoverflow.com/users/14535789/whojaipanchal",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "In the ever-evolving world of technology, those who embrace the art of learning programming languages are the architects of tomorrow.",
  skills: [
    emoji(
      "⚡ Craft exceptionally engaging user interfaces for web, mobile, and gaming applications that captivate and delight user"
    ),
    emoji("⚡ Empower web application with unparalleled customizability, allowing you to tailor it precisely to the unique needs and preferences"),
    emoji(
      "⚡ Effortlessly incorporate third-party services like Firebase to elevate the functionality and capabilities of your projects."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/ASU LOGO.png"),
      subHeader: "Master of Science in Information Technology",
      duration: "August 2023 - Expected May 2025",
      desc: "Currently Pursuing Masters in Security Major.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Ganpat University",
      logo: require("./assets/images/GNU_LOGO.png"),
      subHeader: "Master of Technology in Computer Engineering",
      duration: "September 2020 - June 2022",
      desc: "I have wrriten a research paper on Machine Learning Based Malware Evaluation for Android, Got Second Ranked in the University",
      descBullets: ["CGPA : 8.36/10"]
    },
    {
      schoolName: "Ganpat University",
      logo: require("./assets/images/GNU_LOGO.png"),
      subHeader: "Bachelor of Technology in Computer Engineering",
      duration: "September 2017 - June 2020",
      desc: "I have wrriten a research paper on Machine Learning Based Malware Evaluation for Android, Got Second Ranked in the University",
      descBullets: ["CGPA : 7.52/10"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Game Development", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Web Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "70%"
    },
    {
      Stack: "Machine Learning / Artificial Intelligence",
      progressPercentage: "66%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Srashtasoft",
      companylogo: require("./assets/images/ss.jpeg"),
      date: "July 2022 – June 2023",
      // desc: " ",
      descBullets: [
        "Developed Android and iOS games with Unity, resulting in positive user reviews.",
        "Created a mobile application using Flutter, enhancing user engagement and satisfaction.",
        "Collaborated on Python-based machine learning projects, improving data analysis and prediction accuracy.",
      ]
    },
    {
      role: "Teaching Assistant",
      company: "Ganpat University",
      companylogo: require("./assets/images/GNU_LOGO.png"),
      date: "October 2020 – January 2022",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Assisted in teaching technical labs on web technology and IT peripheral tools to improve students' understanding and skills.",
        "Facilitated a conducive learning environment, contributing to enhanced comprehension and performance among B.Tech 1st-year students.",
      ]
    },
    {
      role: "Web Development Intern",
      company: "GoStepOn",
      companylogo: require("./assets/images/gostepon.png"),
      date: "January 2020 – April 2020",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Developed a Cleaning Service Website with full functionality utilizing PHP and the Laravel Framework.",
        "Designed and implemented three essential modules: Admin, Client, and Worker.",
        "The website offers seamless interactions and efficient management for administrators, clients, and workers, enhancing the overall user experience.",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Game Projects",
  subtitle: "Here are some of the games I've developed during my tenure at Srashtasoft Company.",
  projects: [
    {
      image: require("./assets/images/2048.webp"),
      
      projectName: "2048 Infinite",
      projectDesc: "Crafted a captivating puzzle game for my portfolio, featuring a unique gameplay mechanic where identical number blocks are merged through addition, creating an endless challenge until the entire 5x5 grid is filled with distinct numbers.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.apps.srashtasoft.infinite2048&hl=en_US&gl=US"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/2048-infinite/id6448166018"
        }
        // You can add extra buttons here.
        
      ]
      
    },
    {
      image: require("./assets/images/Ltfk.jpeg"),
      projectName: "Letter Tracing For Kids",
      projectDesc: "This application is thoughtfully designed for children, offering an ad-free experience. It features a combination of letters, numbers, and the entire alphabet. The primary goal is to encourage learning through creative play/.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.apps.srashtasoft.lettertracingforkid"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/2048-infinite/id6448166018"
        }
        // You can add extra buttons here.
      ]
      
    },
    {
      image: require("./assets/images/candycarnical.jpeg"),
      projectName: "Candy Carnival",
      projectDesc: "Candy Carnival is a delightful sugar candy-themed game where players engage in color-matching challenges to create explosive candy combinations.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.apps.srashtasoft.candycarnival"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/candy-carnival-pro/id6450598163"
        }
        // You can add extra buttons here.
      ]
      
    },
    {
      image: require("./assets/images/mindshift.jpeg"),
      projectName: "Mindshift Motors",
      projectDesc: "Crafted an engaging brain puzzle game that puts players in control of two cars simultaneously, challenging their multitasking abilities as they skillfully maneuver the vehicles to avoid obstacles and prevent any collisions.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.apps.srashtasoft.mindshiftmotors"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/mindshift-motors/id6449936547"
        }
        // You can add extra buttons here.
      ]
      
    },
    {
      image: require("./assets/images/climbtop.webp"),
      projectName: "Climb Top",
      projectDesc: "Climb Top is an exhilarating adventure that will take you to new heights of excitement. Prepare to test your skills and reflexes as you conquer challenging obstacles and navigate through thrilling challenges that will push your limits.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.apps.srashtasoft.climbtop"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/climb-top-pro/id6452011490"
        }
        // You can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/bounce.webp"),
      projectName: "Bounce Fusion",
      projectDesc: "This game demands unwavering concentration as the ball dynamically changes colors, and players must skillfully guide it through rings that match its current hue.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.apps.srashtasoft.bouncefusion"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/bounce-fusion/id6451445807"
        }
        // You can add extra buttons here.
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};






// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "#",
      title: "Title",
      description:
        "Description"
    },
    {
      url: "#",
      title: "title",
      description:
        "Description"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  // subtitle:"Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "whojaipanchal@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "jaipanchaltweet", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
