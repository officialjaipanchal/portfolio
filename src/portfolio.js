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

// const greeting = {
//   username: "Jaykumar Suthar",
//   title: "Jay",
//   subTitle: emoji(
//     "Experienced Software Developer specializing in game and mobile app development, proficient in machine learning. Successfully contributed to impactful experiences on Android and iOS platforms. Diversified skill set includes AWS, Laravel Framework, and e-commerce development. Passionate about integrating innovation with security. Actively seeking dynamic opportunities in software engineering to leverage my multifaceted skills and expertise."
//   ),
//   resumeLink:
//     "https://drive.google.com/file/d/1aZJgfgz6aQOLdrdTWyNsx5v2iLlYeipd/view?usp=drive_link", // Set to empty to hide the button
//   displayGreeting: true // Set false to hide this section, defaults to true
// };

const greeting = {
  username: "Jaykumar Suthar",
  title: "Jaykumar",
  subTitle: "Enthusiastic learner eagerly seeking a dynamic summer internship opportunity to grow and contribute in a professional environment.",
  resumeLink: "https://drive.google.com/file/d/1Xdj8xx2vOqL9mt1n3OzC1_4l7YRyy1k8/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/officialjaipanchal",
  linkedin: "https://www.linkedin.com/in/whojaipanchal/",
  gmail: "whojaipanchal@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
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
    emoji("⚡ Craft exceptionally engaging user interfaces for web, mobile, and gaming applications that captivate and delight user"),
    emoji("⚡ Empower web application with unparalleled customizability, allowing you to tailor it precisely to the unique needs and preferences"),
    emoji("⚡ Effortlessly incorporate third-party services like Firebase to elevate the functionality and capabilities of your projects."),
    emoji("⚡ Enthusiastic about secure coding practices to ensure robust security measures in all development endeavors.")
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
      duration: "August 2023 -  May 2025",
      desc: "Relevant Coursework: Adv Info System Development, Adv DB Management System, Cloud Architecture Info. (AWS), Security Compliance, Adv Info System Security",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Ganpat University",
      logo: require("./assets/images/GNU_LOGO.png"),
      subHeader: "Master of Technology in Computer Engineering",
      duration: "September 2020 - June 2022",
      desc: "Relevant Coursework: Wireless Networks, Digital Image Processing, Big Data Analytics, Distributed Computing, Natural Language Processing, Cloud Computing, Public Key Infrastructure, Data Mining and Data Warehousing",
      // descBullets: ["CGPA : 8.36/10"]
    },
    {
      schoolName: "Ganpat University",
      logo: require("./assets/images/GNU_LOGO.png"),
      subHeader: "Bachelor of Technology in Computer Engineering",
      duration: "September 2017 - June 2020",
      desc: "Relevant Coursework: Database Management, Operating Systems, Application Development Tools, Design and Analysis of Algorithms, Computer Architecture, Web Technology, Information System Security, Machine Learning, Artificial Intelligence, Computer Networks, Object-Oriented Analysis and Design"
      // descBullets: ["CGPA : 7.52/10"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Game Development, Web Development, Database",
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
      Stack: "AWS, GIT, Google Suite, Micosoft Suite, IntelliJ, Unity",
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
      date: "Jan 2024 - Working",
      // desc: " ",
      descBullets: [
        "Manage assignments and labs, ensuring smooth operation",
        "Check assignment deadlines, guide students, and grade their work",
        "Contribute to the success and growth of students and the educational program",
      ]
    },
    {
      role: "Software Developer",
      company: "Srashtasoft",
      companylogo: require("./assets/images/ss.jpeg"),
      date: "July 2022 – June 2023",
      // desc: " ",
      descBullets: [
        "Developed Android and iOS games with Unity, resulting in positive user reviews",
        "Designed and implemented a mobile application with Flutter, enhancing user engagement and satisfaction",
        "Collaborated on Python-based machine learning projects, improving data analysis and prediction accuracy",
        
      ]
    },
    {
      role: "Teaching Assistant",
      company: "Ganpat University",
      companylogo: require("./assets/images/GNU_LOGO.png"),
      date: "October 2020 – January 2022",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Instructed technical labs focused on web technology and IT peripheral tools",
        "Created a conducive learning environment to enhance student learning experience",
      ]
    },
    {
      role: "Web Development Intern",
      company: "GoStepOn",
      companylogo: require("./assets/images/gostepon.png"),
      date: "January 2020 – April 2020",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Designed and developed a fully functional Cleaning Service Website using PHP and the Laravel Framework",
        "Crafted three essential modules - Admin, Client, and Worker - for seamless interactions and efficient management",
        "Improved user experiences for administrators, clients, and workers",
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
      projectName: "Designing and implementing a secure web application architecture using AWS",
      projectDesc: "Integrating AWS security services: encryption, access control, monitoring, and threat detection, Streamlining administration for data integrity, confidentiality, and availability, Leveraging AWS's cloud security for simplified compliance, Minimizing manual efforts, maximizing protection",
      // footerLink: [
      //   {
      //     name: "Website",
      //     url: "http://ift520project.edu.s3-website-us-east-1.amazonaws.com/"
      //   }, 
      // ]
    },
    {
      image: require("./assets/images/android_malware.png"),
      projectName: "Machine Learning Based Malware Evaluation For Android",
      projectDesc: "This project evaluates diverse machine learning models like SVM, KNN, and Decision Trees, utilizing static APK features. Its goal is to distinguish malware from benign Android apps, offering crucial insights to combat security threats in the Android ecosystem.",
      footerLink: [
        {
          name: "Research Paper",
          url: "https://drive.google.com/file/d/1f3blMrC1ca75mS3Mmh4ENm-WTmXwYuWA/view"
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
        // {
        //   name: "#Unity",
        //   fontAwesomeClassname: "fab fa-unity"
        // }
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
    {
      image: require("./assets/images/jetpack.png"),
      projectName: "Dog Adoption (Kotlin)",
      projectDesc: "For the Puppy Adoption App project, I developed a simple mobile application featuring an overview screen displaying a list of puppies available for adoption. Each puppy had its own details screen, including images and information sourced from BC SPCA. Additionally, I implemented an 'Adopt' button on the details screen that directly linked to the dog's details page on BC SPCA's website.",
      footerLink: [
        {
          name: "Dog Adoption",
          url: "https://github.com/officialjaipanchal/DogAdoption"
        },
        
        // You can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/image-processing.png"),
      projectName: "Digital Image Processing",
      projectDesc: "For the Digital Image Processing project, I implemented various arithmetic operations on images using OpenCV and matplotlib in Python. These operations included addition, subtraction, multiplication, bitwise AND, OR, XOR, and NOT. I loaded images, performed the operations, and displayed the results using matplotlib.",
      footerLink: [
        {
          name: "Digital Image Processing",
          url: "https://github.com/officialjaipanchal/Digital-Image-Processing"
        },
        
        // You can add extra buttons here.
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};






// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications "),
  // subtitle:"Achievements, Certifications Some Cool Stuff that I have done !",

  achievementsCards: [
    // {
    //   title: "Play It Safe: Manage Security Risks",
    //   subtitle:
    //     "Identify the primary threats, risks, and vulnerabilities to business operations, Define commonly used Security Information and Event Management (SIEM) tools",
    //   image: require("./assets/images/googlecyber.png"),
    //   imageAlt: "Certification Google Cyber Security",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://www.coursera.org/account/accomplishments/certificate/YSKDYGRV84LW"
    //     },
       
    //   ]
    // },
    {
      title: "Foundations of Cybersecurity",
      subtitle:
        "Identify how security attacks impact business operations, Identify common tools used by cybersecurity analysts",
      image: require("./assets/images/googlecyber.png"),
      imageAlt: "Certification Google Cyber Security",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/8GS23K2UFCQD"
        },
       
      ]
    },
    {
      title: "Data Analytics on AWS",
      subtitle:
        "Simple visualizations in AWS QuickSight to do descriptive analytics (using S3, Cloudtrail, Athena), Descriptive data analytics in the cloud with typical data sets",
      image: require("./assets/images/awsdataanalytics.png"),
      imageAlt: "Certification Robotics & ML",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/8GS23K2UFCQD"
        },
       
      ]
    },
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
    // {
    //   title: "AWS Certified Security-Specialty (2022)",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/cybrary_logo.jpeg"),
    //   imageAlt: "AWS Certification",
    //   footerLink: [
    //     {
    //       name: "Cybrary",
    //       url: "https://app.cybrary.it/courses/api/certificate/CC-748a7bb7-929a-423a-b8e3-8b94a3b20e3a/view"
    //     }
    //   ]
    // },
    {
      title: "Fundamentals of Digital Marketing",
      subtitle: "Completed Certifcation from Google for Digital Marking",
      image: require("./assets/images/google-logo-9808.png"),
      imageAlt: "Google Certification",
      footerLink: [
        {
          name: "Fundamentals of Digital Marketing",
          url: "https://learndigital.withgoogle.com/digitalunlocked/validate-certificate-code"
        }
      ]
    },
    // {
    //   title: "LinkedIn Learning Certificate of Completion",
    //   subtitle: "Completed Certifcation from Linkedin for Introduction to Career Skills in Data Analytics",
    //   image: require("./assets/images/linkedin.png"),
    //   imageAlt: "Linkedin Certificate",
    //   footerLink: [
    //     {
    //       name: "Data Analytics",
    //       url: "https://www.linkedin.com/learning/certificates/1112518e484f6a640fb06693ea94e538aaa41a7cfc55100ec464c53998c11727"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  // subtitle:  "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://dotbatcode.blogspot.com/",
      title: "Bat Files",
      description:
        "In this blog, I talk about BAT code, which is a kind of script for Windows. It's like a set of instructions that the computer follows one after another. I'll explain how to use this code and its practical applications in Windows."
    },
    
    {
      url: "https://alltoolhere.blogspot.com/",
      title: "All Tool Here",
      description:
        "In 2018, I started this blog out of necessity when I faced challenges finding software online easily. To solve the problem, I uploaded software and shared the links through this blog."
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



// Git Host all new data commands;
// git init
// git add .
// git commit -m "Updated"
// git push
// npm run deploy

// Jerry - 
// Updates 02/27/24

// Resume link
// Paper link
// added projects
