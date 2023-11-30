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
      // descBullets: ["CGPA : 8.36/10"]
    },
    {
      schoolName: "Ganpat University",
      logo: require("./assets/images/GNU_LOGO.png"),
      subHeader: "Bachelor of Technology in Computer Engineering",
      duration: "September 2017 - June 2020",
      desc: "I have wrriten a research paper on Machine Learning Based Malware Evaluation for Android, Got Second Ranked in the University",
      // descBullets: ["CGPA : 7.52/10"]
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
      Stack: "Web Development, Database",
      progressPercentage: "90%"
    },
    {
      Stack: "Machine Learning, Artificial Intelligence, Data Analytics",
      progressPercentage: "76%"
    },
    {
      Stack: "Operating Systems: MacOS, Windows, Linux",
      progressPercentage: "95%"
    },
    {
      Stack: "GIT, Google Suite, Micosoft Suite, IntelliJ, Unity",
      progressPercentage: "82%"
    }

  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Teaching Assistant",
      company: "Arizona State University",
      companylogo: require("./assets/images/ASU LOGO.png"),
      date: "Dec 2023 - Working",
      // desc: " ",
      descBullets: [
        "Supporting the professor in assignment creation, practical documentation.",
        "Grading Student Submission",
      ]
    },
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
  title: "Projects",
  subtitle: "Here are some of the Project I've developed.",
  projects: [
    {
      image: require("./assets/images/aws.png"),
      projectName: "Secure Static Web Application",
      projectDesc: "Secured website using AWS suite: EC2, Load Balancer, CloudWatch, KMS, IAM, and VPN for robust protection",
      footerLink: [
        {
          name: "Website",
          url: "http://ift520project.edu.s3-website-us-east-1.amazonaws.com/"
        }, 
      ]
    },
    {
      image: require("./assets/images/android_malware.png"),
      projectName: "Machine Learning Based Malware Evaluation For Android",
      projectDesc: "This project evaluates diverse machine learning models like SVM, KNN, and Decision Trees, utilizing static APK features. Its goal is to distinguish malware from benign Android apps, offering crucial insights to combat security threats in the Android ecosystem.",
      footerLink: [
        {
          name: "Research Paper",
          url: "https://drive.google.com/file/d/11qfqP6qBCc8urk1pP26YhTkL67ePnTgi/view?usp=sharing"
        }, 
      ]
    },
    {
      image: require("./assets/images/shopping.png"),
      projectName: "Ecommerce Shopping ",
      projectDesc: "Amid the COVID-19 lockdown, my friend and I developed a website to help people order essential groceries conveniently. The platform consisted of two modules: Admin and Users. Users could place orders for daily products, and our system ensured doorstep delivery for their convenience",
    },
    {
      image: require("./assets/images/cleaning.png"),
      projectName: "Ecommerce Cleaning",
      projectDesc: "During my internship, I developed NE Cleaning, a website with three modules: Admin, Client, and Worker. Clients could easily visit the site and book cleaning services for their homes. The system operated on a first-come, first-served basis, where nearby workers could accept service requests and complete the cleaning. The admin module handled order management, payments, and user administration.",
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
      
    },{
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
        },
        // You can add extra buttons here.
        {
          name: "#Unity",
          fontAwesomeClassname: "fab fa-unity"
        }
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
    "Achievements, Certifications Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AZNext Introduction to Robotics in Microelectronics Manufacturing Training Program",
      subtitle:
        "Earned Competencies: Cleanroom Robotics, Design Attributes of Atmospheric Robots, Design of Vacuum Robots, Kinematics of Industrial Robots, Dynamics and Control of Industrial Robots, Test and Characterization,        ",
      image: require("./assets/images/Azrobot.png"),
      imageAlt: "Certification Robotics & ML",
      footerLink: [
        {
          name: "Certification",
          url: "https://badgr.com/public/assertions/piDsMdl2Td2Mpk_qjfy_Zw"
        },
       
      ]
    },
    {
      title: "AWS Certified Security-Specialty (2022)",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/cybrary_logo.jpeg"),
      imageAlt: "AWS Certification",
      footerLink: [
        {
          name: "Cybrary",
          url: "https://app.cybrary.it/courses/api/certificate/CC-748a7bb7-929a-423a-b8e3-8b94a3b20e3a/view"
        }
      ]
    },
    {
      title: "Fundamentals of Digital Marketing",
      subtitle: "Completed Certifcation from Google for Digital Marking, Credential Id: 3ME 7S7 CXJ",
      image: require("./assets/images/google.jpeg"),
      imageAlt: "Google Certification",
      footerLink: [
        {
          name: "Fundamentals of Digital Marketing",
          url: "https://learndigital.withgoogle.com/digitalunlocked/validate-certificate-code"
        }
      ]
    },
    {
      title: "LinkedIn Learning Certificate of Completion",
      subtitle: "Completed Certifcation from Linkedin for Introduction to Career Skills in Data Analytics",
      image: require("./assets/images/linkedin.png"),
      imageAlt: "Linkedin Certificate",
      footerLink: [
        {
          name: "Data Analytics",
          url: "https://www.linkedin.com/learning/certificates/1112518e484f6a640fb06693ea94e538aaa41a7cfc55100ec464c53998c11727"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://dotbatcode.blogspot.com/",
      title: "Bat Files",
      description:
        "In this blog, I discuss BAT code—an executable script in Windows that stores commands to be executed sequentially"
    },
    {
      url: "https://alltoolhere.blogspot.com/",
      title: "All Tool Here",
      description:
        "In 2018, I created this blog out of necessity as I encountered difficulties finding software easily on the internet. To address this, I uploaded software to links and shared them through this blog."
    }
  ],
  display: true // Set false to hide this section, defaults to true
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

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
