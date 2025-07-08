/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 5000 // Increased from 2000 to 5000 to allow animation to complete
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jaykumar Suthar",
  title: "Jaykumar",
  subTitle:
    "Full-stack Software Engineer with expertise in AI/ML, cloud platforms (AWS & Azure), and mobile development. Proven track record in building scalable applications using React, Node.js, Python, and Unity. Passionate about creating innovative solutions that combine technical excellence with user-centric design.",
  resumeLink:
    "https://drive.google.com/file/d/1YNvQxZtixrL5ohis61oA3eA46OUTwWH5/view?usp=sharing", // Set to empty to hide the button
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
  title: "What I Do",
  subTitle:
    "Passionate about crafting innovative solutions that combine technical expertise with creative problem-solving to build impactful digital experiences.",
  skills: [
    emoji(
      "⚡ Develop responsive and intuitive user interfaces using modern frameworks like React, ensuring seamless user experiences across all platforms"
    ),
    emoji(
      "⚡ Architect scalable backend solutions with Node.js and cloud technologies, focusing on performance, security, and maintainability"
    ),
    emoji(
      "⚡ Create engaging mobile applications and games using Unity and Flutter, delivering immersive experiences to users worldwide"
    ),
    emoji(
      "⚡ Implement robust security measures and best practices to ensure data protection and system integrity in all development projects"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "iOS",
      fontAwesomeClassname: "fab fa-apple"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/ASU LOGO.png"),
      subHeader: "M.S. in Information Technology",
      duration: "Aug 2023 – May 2025 (Expected)",
      desc: "Focused on advanced software development, security, and cloud architecture.",
      descBullets: [
        "Relevant Coursework: Advanced Information Systems, Cloud Architecture on AWS, Advanced Database Management, System Security & Compliance"
      ]
    },
    {
      schoolName: "Ganpat University",
      logo: require("./assets/images/GNU_LOGO.png"),
      subHeader: "M.Tech in Computer Engineering",
      duration: "Sep 2020 – Jun 2022",
      desc: "Specialized in emerging technologies and large-scale distributed systems.",
      descBullets: [
        "Relevant Coursework: Wireless Networks, Big Data Analytics, NLP, Distributed Computing, Cloud Computing"
      ]
    },
    {
      schoolName: "Ganpat University",
      logo: require("./assets/images/GNU_LOGO.png"),
      subHeader: "B.Tech in Computer Engineering",
      duration: "Sep 2017 – Jun 2020",
      desc: "Strong foundation in software engineering, algorithms, and AI.",
      descBullets: [
        "Relevant Coursework: OS, DBMS, Machine Learning, Web Tech, Computer Networks, OOPs, System Security"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set to true to show Proficiency Section
  experience: [
    {
      Stack: "Web Development: React.js, Node.js, Express.js, HTML/CSS/JS",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend & Databases: MongoDB, MySQL, Firebase, REST APIs",
      progressPercentage: "85%"
    },
    {
      Stack: "Game Development: Unity, C++, Game Design",
      progressPercentage: "80%"
    },
    {
      Stack: "AI/ML & Data Analytics: Python, Pandas, Scikit-learn, Gemini",
      progressPercentage: "75%"
    },
    {
      Stack: "Cloud & Dev Tools: AWS, Git, GitHub, Postman, VS Code",
      progressPercentage: "85%"
    },
    {
      Stack: "Operating Systems: macOS, Linux, Windows",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: true // Set true to display CodersRank badges
};

// Work experience section

const workExperiences = {
  display: true, // Set to false to hide this section
  experience: [
    {
      role: "Teaching Assistant",
      company: "Arizona State University",
      companylogo: require("./assets/images/ASU LOGO.png"),
      date: "Jan 2024 – May 2025",
      descBullets: [
        "Managed labs and assignments, ensuring smooth academic operations",
        "Guided students, reviewed submissions, and provided constructive feedback",
        "Contributed to student success through mentoring and technical support"
      ]
    },
    {
      role: "Software Developer",
      company: "Srashtasoft",
      companylogo: require("./assets/images/ss.jpeg"),
      date: "Jul 2022 – Jun 2023",
      descBullets: [
        "Built cross-platform games using Unity, receiving positive user feedback",
        "Developed a Flutter-based mobile app that boosted user engagement",
        "Collaborated on Python + ML projects, enhancing data-driven insights"
      ]
    },
    {
      role: "Teaching Assistant",
      company: "Ganpat University",
      companylogo: require("./assets/images/GNU_LOGO.png"),
      date: "Oct 2020 – Jan 2022",
      descBullets: [
        "Conducted lab sessions on web technologies and IT tools",
        "Supported students by simplifying complex technical concepts"
      ]
    },
    {
      role: "Web Development Intern",
      company: "GoStepOn",
      companylogo: require("./assets/images/gostepon.png"),
      date: "Jan 2020 – Apr 2020",
      descBullets: [
        "Developed a Cleaning Service Website using PHP & Laravel",
        "Implemented Admin, Client, and Worker modules for efficient workflow",
        "Enhanced usability and system performance for all user roles"
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
// Grouped Projects by Category 🗂️

const bigProjects = {
  title: "Projects",
  subtitle: "Here are some of the Projects I've developed.",
  categories: [
    {
      category: "AI/ML Projects",
      projects: [
        {
          image: require("./assets/images/ComicSonic.png"),
          projectName: "ComicSonic – AI-Powered Comic Narration",
          projectDesc:
            "Transform comic book PDFs into immersive audio experiences using AI, making comics more accessible and engaging.",
          techStack: ["Python", "OpenAI GPT", "PyPDF2", "Text-to-Speech"],
          footerLink: [
            {
              name: "GitHub",
              url: "https://github.com/officialjaipanchal/ComicSonic"
            }
          ]
        },
        {
          image: require("./assets/images/PennyShare.png"),
          projectName: "PennyShare – AI-Driven Group Expense Manager",
          projectDesc:
            "Built with Node.js, MongoDB, and OpenAI, PennyShare is an intelligent group expense tracker offering financial insights, smart alerts, and collaborative budget handling.",
          techStack: ["Node.js", "MongoDB", "OpenAI", "React", "Express"],
          footerLink: [
            {
              name: "GitHub",
              url: "https://github.com/officialjaipanchal/PennyShare"
            }
          ]
        },
        {
          image: require("./assets/images/android_malware.png"),
          projectName: "ML-Based Malware Detection for Android",
          projectDesc:
            "Applied machine learning models like SVM, KNN, and Decision Trees to classify APKs based on static features, enhancing Android malware detection capabilities.",
          techStack: ["Python", "Scikit-learn", "SVM", "KNN", "Decision Trees"],
          footerLink: [
            {
              name: "Research Paper",
              url: "https://drive.google.com/file/d/1f3blMrC1ca75mS3Mmh4ENm-WTmXwYuWA/view"
            }
          ]
        }
      ]
    },
    {
      category: "Personal/Academic Projects",
      projects: [
        {
          image: require("./assets/images/Attendance.png"),
          projectName: "Student Attendance System with Proxy Prevention",
          projectDesc:
            "Offline-first attendance system that prevents proxy marking using IP tracking and local authentication.",
          techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
          footerLink: [
            {
              name: "GitHub",
              url: "https://github.com/officialjaipanchal/Student-Attendance-System"
            }
          ]
        },
        {
          image: require("./assets/images/Location.png"),
          projectName: "Real-Time GPS Tracker with Heatmap",
          projectDesc:
            "Location tracker that captures GPS coordinates and visualizes frequent spots via heatmaps.",
          techStack: ["Flutter", "Firebase", "Google Maps API", "Dart"],
          footerLink: [
            {
              name: "GitHub",
              url: "https://github.com/officialjaipanchal/Location-Tracker"
            }
          ]
        },
        {
          image: require("./assets/images/DB.png"),
          projectName: "Gaming Database in Azure SQL",
          projectDesc:
            "Designed a normalized gaming database schema in Azure SQL Edge with optimized querying.",
          techStack: ["Azure SQL", "SQL", "Database Design", "ERD"],
          footerLink: [
            {
              name: "GitHub",
              url: "https://github.com/officialjaipanchal/Gamming-Database"
            }
          ]
        },
        {
          image: require("./assets/images/shopping.png"),
          projectName: "Essential Ecommerce – Grocery Delivery",
          projectDesc:
            "Dual-module web app built for admins and users to facilitate grocery delivery during COVID-19.",
          techStack: ["PHP", "MySQL", "HTML/CSS", "JavaScript"]
        },
        {
          image: require("./assets/images/cleaning.png"),
          projectName: "NE Cleaning – Online Cleaning Service Platform",
          projectDesc:
            "Web platform enabling users to book cleaning services, with real-time scheduling and admin dashboard.",
          techStack: ["Laravel", "MySQL", "Bootstrap", "jQuery"]
        },
        {
          image: require("./assets/images/aws.png"),
          projectName: "Secure Web App Architecture on AWS",
          projectDesc:
            "Used AWS security tools to create a secure, compliant web application with encryption, IAM, and threat detection.",
          techStack: ["AWS", "IAM", "CloudWatch", "Security Groups"],
          footerLink: [
            {
              name: "GitHub",
              url: "https://github.com/officialjaipanchal/secure-web-application-architecture"
            }
          ]
        },
        {
          image: require("./assets/images/image-processing.png"),
          projectName: "Digital Image Processing",
          projectDesc:
            "Performed image filtering and transformation operations using OpenCV and Python.",
          techStack: ["Python", "OpenCV", "NumPy", "Matplotlib"],
          footerLink: [
            {
              name: "GitHub",
              url: "https://github.com/officialjaipanchal/Digital-Image-Processing"
            }
          ]
        },
        {
          image: require("./assets/images/jetpack.png"),
          projectName: "Dog Adoption App (Kotlin)",
          projectDesc:
            "Kotlin-based app listing adoptable dogs with links to BC SPCA's adoption pages.",
          techStack: ["Kotlin", "Android SDK", "REST APIs", "Material Design"],
          footerLink: [
            {
              name: "GitHub",
              url: "https://github.com/officialjaipanchal/DogAdoption"
            }
          ]
        }
      ]
    },
    {
      category: "Android/iOS Games",
      projects: [
        {
          image: require("./assets/images/mindshift.jpeg"),
          projectName: "Mindshift Motors – Dual Control Brain Puzzle",
          projectDesc:
            "Brain game where players control two cars at once, testing multitasking and focus.",
          techStack: ["Unity", "C#", "Game Design", "Mobile Development"],
          footerLink: [
            {
              name: "Play Store",
              url: "https://play.google.com/store/apps/details?id=com.apps.srashtasoft.mindshiftmotors"
            },
            {
              name: "App Store",
              url: "https://apps.apple.com/us/app/mindshift-motors/id6449936547"
            }
          ]
        },
        {
          image: require("./assets/images/2048.webp"),
          projectName: "2048 Infinite – Puzzle Evolution",
          projectDesc:
            "An infinite 5x5 version of the classic 2048 puzzle game.",
          techStack: ["Unity", "C#", "Game Design", "Mobile Development"],
          footerLink: [
            {
              name: "Play Store",
              url: "https://play.google.com/store/apps/details?id=com.apps.srashtasoft.infinite2048&hl=en_US&gl=US"
            },
            {
              name: "App Store",
              url: "https://apps.apple.com/us/app/2048-infinite/id6448166018"
            }
          ]
        },
        {
          image: require("./assets/images/candycarnical.jpeg"),
          projectName: "Candy Carnival – Sweet Puzzle Adventure",
          projectDesc:
            "Colorful candy-matching game with power-ups and level progression.",
          techStack: ["Unity", "C#", "Game Design", "Mobile Development"],
          footerLink: [
            {
              name: "Play Store",
              url: "https://play.google.com/store/apps/details?id=com.apps.srashtasoft.candycarnival"
            },
            {
              name: "App Store",
              url: "https://apps.apple.com/us/app/candy-carnival-pro/id6450598163"
            }
          ]
        },
        {
          image: require("./assets/images/climbtop.webp"),
          projectName: "Climb Top – Vertical Challenge Game",
          projectDesc:
            "Fast-paced climbing game with traps and obstacles that test your reflexes.",
          techStack: ["Unity", "C#", "Game Design", "Mobile Development"],
          footerLink: [
            {
              name: "Play Store",
              url: "https://play.google.com/store/apps/details?id=com.apps.srashtasoft.climbtop"
            },
            {
              name: "App Store",
              url: "https://apps.apple.com/us/app/climb-top-pro/id6452011490"
            }
          ]
        },
        {
          image: require("./assets/images/Ltfk.jpeg"),
          projectName: "Letter Tracing for Kids",
          projectDesc:
            "Ad-free educational app helping children learn letter and number formation interactively.",
          techStack: ["Unity", "C#", "Game Design", "Mobile Development"],
          footerLink: [
            {
              name: "Play Store",
              url: "https://play.google.com/store/apps/details?id=com.apps.srashtasoft.lettertracingforkid"
            },
            {
              name: "App Store",
              url: "https://apps.apple.com/us/app/letter-tracing-for-kids/id6448166018"
            }
          ]
        },
        {
          image: require("./assets/images/bounce.webp"),
          projectName: "Bounce Fusion – Color Match Game",
          projectDesc:
            "Bounce through matching rings in a fast, reflex-based color game.",
          techStack: ["Unity", "C#", "Game Design", "Mobile Development"],
          footerLink: [
            {
              name: "Play Store",
              url: "https://play.google.com/store/apps/details?id=com.apps.srashtasoft.bouncefusion"
            },
            {
              name: "App Store",
              url: "https://apps.apple.com/us/app/bounce-fusion/id6451445807"
            }
          ]
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications "),
  // subtitle:"Achievements, Certifications Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "The OWASP API Security Top 10: An Overview",
      subtitle:
        "Understand the critical security vulnerabilities in APIs with insights from the OWASP API Security Top 10, covering key security risks and their mitigations.",
      image: require("./assets/images/owasp-logo.png"),
      imageAlt:
        "Certification Linkedin The OWASP API Security Top 10: An Overview",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/learning/certificates/b633de991f008a7d12b1f460b7d566878defda0e464ba0f59d857968e7be2361?u=70944002"
        }
      ]
    },
    {
      title: "AWS Academy Cloud Security Foundations",
      subtitle:
        "Understand cloud security principles, implement secure cloud architectures, and mitigate security risks using AWS tools and best practices.",
      image: require("./assets/images/aws.png"),
      imageAlt: "Certification Credly AWS Academy Cloud Security Foundations",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/e84d26ae-d5c3-4290-8d51-7644cde16b01/linked_in_profile"
        }
      ]
    },
    {
      title: "Python for Data Science",
      subtitle:
        "Gain hands-on experience with Python scripting, data analysis, and using IBM's Jupyter-based lab environment to perform basic data analysis tasks.",
      image: require("./assets/images/Python.png"),
      imageAlt: "Certification Credly Python for Data Science",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/e84d26ae-d5c3-4290-8d51-7644cde16b01/linked_in_profile"
        }
      ]
    },

    {
      title: "AWS Academy Cloud Architecting",
      subtitle:
        "Design scalable cloud solutions, implement AWS best practices, and build secure, reliable infrastructure on AWS.",
      image: require("./assets/images/aws.png"),
      imageAlt: "Certification Credly AWS Graduate Cloud Architecting",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/e84d26ae-d5c3-4290-8d51-7644cde16b01/linked_in_profile"
        }
      ]
    },
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
        }
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
        }
      ]
    },
    {
      title:
        "AZNext Introduction to Robotics in Microelectronics Manufacturing Training Program",
      subtitle:
        "Earned Competencies: Cleanroom Robotics, Design Attributes of Atmospheric Robots, Design of Vacuum Robots, Kinematics of Industrial Robots, Dynamics and Control of Industrial Robots, Test and Characterization,        ",
      image: require("./assets/images/Azrobot.png"),
      imageAlt: "Certification Robotics & ML",
      footerLink: [
        {
          name: "Certification",
          url: "https://badgr.com/public/assertions/piDsMdl2Td2Mpk_qjfy_Zw"
        }
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
    }
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
  podcast: [""],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me "),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
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
// npm run build
// npm run deploy

// Jerry -
// Update MAY 10, 2025
