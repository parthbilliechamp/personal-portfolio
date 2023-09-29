// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Parth's Portfolio",
  description:
    "A Tech enthusiast, blending four years of hands-on industry expertise with a passion for solving real-world big data challenges, backed by a powerhouse of skills in Cloud Computing, Data Engineering, and Java technology.",
  og: {
    title: "Parth Champaneria Portfolio",
    type: "website",
    url: "http://parthchampaneria.me/",
  },
};

//Home Page
const greeting = {
  title: "Parth\nChampaneria",
  logo_name: "Parth Champaneria",
  nickname: "Parth Champaneria",
  subTitle:
    "A Tech enthusiast, blending four years of hands-on industry expertise with a passion for solving real-world big data challenges, backed by a powerhouse of skills in Cloud Computing, Data Engineering, and Java technology.",
  resumeLink:
    "https://parthchampaneria-portfolio.s3.amazonaws.com/Parth_Champaneria_Resume.pdf",
  portfolio_repository:
    "https://github.com/parthbilliechamp/personal-portfolio",
  githubProfile: "https://github.com/parthbilliechamp/",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/parthbilliechamp/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/parth-champaneria/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:parthchamp169@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/BillieParth",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/parth_billie_champ/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Cloud Computing",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms like AWS, GCP, Azure, and more.",
        "⚡ AWS Certified Solutions Architect Associate, AWS Certified Cloud Practitioner, and Microsoft Certified Azure Fundamentals",
        "⚡ Deploying applications on various cloud platforms with Docker containers.",
        "⚡ Automating the provisioning of AWS resources with Cloudformation and serverless framework.",
        "⚡ Configuring CI/CD pipelines on GCP with GCP Cloud Build, Cloud Artifact Registry, and Cloud Run.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Data Engineering",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Designing and implementing end-to-end data pipelines using Spark, Hive, and Hadoop to process and transform large datasets, resulting in efficient data processing and improved insights.",
        "⚡ Experience of working with Hadoop and its ecosystem.",
        "⚡ Migrating Spark jobs from on-premise CDP cluster to AWS using services like EMR, S3, and Athena.",
        "⚡ Experienced in writing efficient Spark jobs with Python, and Scala programming languages.",
      ],
      softwareSkills: [
        {
          skillName: "Hadoop",
          fontAwesomeClassname: "logos:hadoop",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Spark",
          fontAwesomeClassname: "devicon:apachespark-wordmark",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Scala",
          fontAwesomeClassname: "logos:scala",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
        },
      ],
    },
    {
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creating robust and reliable Java backend systems utilizing various Design Patterns and following Test Driven Development.",
        "⚡ Creating new enhanced features for the product using efficient Data Structures and Algorithm.",
        "⚡ Creating low-level designs for Java applications to achieve low coupling and high modularity of the applications.",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
        },
        {
          skillName: "Spring-Boot",
          fontAwesomeClassname: "simple-icons:springboot",
        },
        {
          skillName: "Gitlab",
          fontAwesomeClassname: "logos:gitlab",
        },
      ],
    },

    {
      title: "Fullstack Development",
      fileName: "DesignImg",
      skills: [
        "⚡ Building Web applications using MongoDB, Express JS, React JS, Node JS.",
        "⚡ Creating the flow of application functionalities to optimize the user experience.",
        "⚡ Writing code following security best practices and following design patterns.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/parthchamp169/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/parthchamp169",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/robot1996",
    },
    {
      siteName: "GeeksForGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#1d6124",
      },
      profileLink: "https://auth.geeksforgeeks.org/user/champparth/practice/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dalhousie University",
      subtitle: "Master of Applied Computer Science",
      logo_path: "dal_logo.png",
      alt_name: "Dalhousie University",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ Took various courses related to Cloud Computing like Advanced Cloud Computing, Advanced Cloud Architecture, Serverless Technologies, and more.",
        "⚡ During my master's program, I have also worked as a Research Assistant at DeepSense, an AI research company funded by Dalhousie, where I worked on developing various Maching Learning models and deploying them on AWS platform. ",
        "⚡ In addition, I was also the Teaching Assistant and Marker for Data Managment Warehouse, and Advanced Cloud Architecture courses where I collaborated with the Professor to create assignments.",
        "⚡ Conducted weekly lab sessions where I demonstrated hands-on lab activities to the students related to Big-data tools and AWS services.",
      ],
      website_link: "https://www.dal.ca/",
    },
    {
      title: "Dharmsinh Desai University",
      subtitle: "B.Tech. in Information Technology",
      logo_path: "ddit.png",
      alt_name: "DDIT Nadiad",
      duration: "2014 - 2018",
      descriptions: [
        "⚡ Enrolled in Software Engineering courses like Advanced Java Technology, Advanced Data Structures and Algorithm, OS, DBMS, Distributed Processing, and more.",
        "⚡ Part of the technical team where I developed web application for several cultural and technical events for the university.",
        "⚡ Developed several academic projects like People Search Engine with Java as backend System, Smart Door Lock with IOT devices, as part of the curriculum.",
      ],
      website_link: "https://www.ddu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Solutions Architect Associate",
      subtitle: "- AWS",
      logo_path: "AWS-SAA.png",
      certificate_link:
        "https://www.credly.com/badges/fcbc4c9a-b8c9-469b-8de8-47de8cd93606/public_url",
      alt_name: "AWS SAA",
      color_code: "#99ddff",
    },
    {
      title: "Azure Fundamentals",
      subtitle: "- Microsoft",
      logo_path: "azure_fundamentals_logo.png",
      certificate_link:
        "https://www.credly.com/badges/8d07dcbc-04d3-4663-8aba-37c9dcd8f462/linked_in?t=re8b8l",
      alt_name: "Azure Fundamentals",
      color_code: "#99ddff",
    },
    {
      title: "Big Data Engineer",
      subtitle: "- Trendytech Institute",
      logo_path: "hadoop.png",
      certificate_link:
        "https://drive.google.com/file/d/15K-zUbadMpteGnsgQ4rmBU7qiehnwQ2Q/view?usp=sharing",
      alt_name: "Big Data Master's course by Trendytech Institute",
      color_code: "#99ddff",
    },
    {
      title: "MuleSoft Certified Developer",
      subtitle: "- MCD Integrations and API Associate",
      logo_path: "Mulesoft.png",
      certificate_link:
        "https://drive.google.com/file/d/15K-zUbadMpteGnsgQ4rmBU7qiehnwQ2Q/view?usp=sharing",
      alt_name: "MCD Integrations and API Associate",
      color_code: "#99ddff",
    },
    {
      title: "Big Data Analysis",
      subtitle: "- Big Data Analysis with Spark and Scala",
      logo_path: "spark.png",
      certificate_link:
        "https://drive.google.com/file/d/1IQfte5x_yjZ7xxKoOYsUz6V3aO_uD2Ce/view",
      alt_name: "Coursera",
      color_code: "#99ddff",
    },
    {
      title: "Java Engineer",
      subtitle: "- Java In-Depth: Complete Java Engineer",
      logo_path: "java.png",
      certificate_link:
        "https://drive.google.com/file/d/11eFGfqYAge4669kDqQY5LzN8KJjP0doe/view?usp=sharing",
      alt_name: "Udemy",
      color_code: "#99ddff",
    },
    {
      title: "Scala and Functional Programming",
      subtitle: "- Rock the JVM online course",
      logo_path: "scala.png",
      certificate_link:
        "https://udemy-certificate.s3.amazonaws.com/pdf/UC-95RG1Z7D.pdf",
      alt_name: "Udemy",
      color_code: "#99ddff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Experienced Software Developer with a background of working in MNCs and product based startups. Highly skilled in Backend development, Cloud Engineering, and Data Engineering.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Member of Technical Staff",
          company: "Datametica Solutions Pvt. Ltd.",
          company_url: "https://www.datametica.com/",
          logo_path: "dm_logo.png",
          duration: "August 2019 - June 2022",
          location: "Pune, Maharashtra",
          description:
            "Crafted numerous software products from the ground up using Java Technologies and Big Data frameworks. Followed rigorous software design principles to engineer dependable and robust systems. Proficient in optimizing Java-based applications for performance, employing JVM tuning and monitoring tools. Adept in handling Big Data technologies, including Hadoop, Spark, Hive, Databricks, and more.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "Infosys Pvt. Ltd.",
          company_url: "https://www.infosys.com/",
          logo_path: "infosys3.png",
          duration: "September 2018 - July 2019",
          location: "Pune, Maharashtra",
          description:
            "Developed and deployed RESTful web services for middleware layer using Java, which was hosted on Pivotal Cloud Foundry (PCF) for seamless accessibility by downstream systems. Developed data processing logic using complex Data Structures and advanced algorithms like Recursion and Dynamic Programming for optimizing data processing workflows.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Teaching Assistant and Marker",
          company: "Dalhousie University",
          company_url: "https://www.dal.ca/",
          logo_path: "dal_logo.png",
          duration: "January 2023 - Present",
          location: "Halifax, Nova Scotia, Canada",
          description:
            "Conducted weekly lab sessions for a cohort of 50+ students, administering hands-on experiments on Big-Data tools like Spark, Hive, MongoDB and Cloud services like Cloud Functions, AWS EMR, and more. Demonstrated my strong Software Development and communication skills to help students learn and apply on their projects.",
          color: "#ee3c26",
        },
        {
          title: "ML and Cloud Engineer Intern",
          company: "DeepSense",
          company_url: "https://deepsense.ca/",
          logo_path: "deepsense.jpeg",
          duration: "October 2022 - April 2023",
          location: "Halifax, Nova Scotia, Canada",
          description:
            "I used my expertise in AWS cloud services and Python for data processing. Orchestrated the creation of data lakes using AWS S3. With AWS Sagemaker, I developed and deployed machine learning algorithms, to predict ocean conditions like wind speed for safe navigation of oceanic vessels. In addition, I architected a dynamic data storage solution with DynamoDB and S3, to store all the archive and prediction data for the application.",
          color: "#000000",
        },
        {
          title: "Systems Engineer Intern",
          company: "Infosys Pvt. Ltd.",
          company_url: "https://www.infosys.com/",
          logo_path: "infosys3.png",
          duration: "February 2018 - June 2018",
          location: "Mysore, Karnataka, India",
          description:
            "Completed stream training in technologies like Core Java, Database Systems, and Python. Created a capstone project People Search Engine as part of industry training program. ",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Dharmsinh Desai University felicific event Website",
          company: "Dharmsinh Desai University",
          company_url: "https://www.ddu.ac.in/",
          logo_path: "ddit.png",
          duration: "February 2017 - April 2017",
          location: "Nadiad, Gujarat, India",
          description:
            "I actively contributed to the development of the Felicific event website as a member of the technical team. This platform effectively showcased a comprehensive lineup of events scheduled for the occasion and successfully engaged a substantial user base. ",
          color: "#4285F4",
        },
        {
          title: "Trendytech Big-data Academic Project",
          company: "Trendytech",
          company_url: "https://trendytech.in/",
          logo_path: "tt.png",
          duration: "March 2022 - May 2022",
          location: "Bangalore, Karnataka, India",
          description:
            "Designed robust data pipeline using Apache Airflow and Python for seamless ETL operations. Developed PySpark Spark jobs on GCP DataProc, utilizing GCP BigQuery and Looker Studio for insightful reports. Automated project deployment via Docker Containers, establishing efficient CI/CD pipeline using GCP Artifact Registry, Cloud Build, and Cloud Run.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Technical Papers",
  description:
    "During my master's course, I have explored many IEEE research papers and  wrote several graduate research papers and technical papers related to research work in Cloud Technologies, Blockchain, Machine Learning etc. ",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "On-chain Resumes",
      createdAt: "2023-06-19T16:26:54Z",
      description:
        "Research on how resumes can be uploaded and validated using block chain technology.",
      url:
        "https://parthchampaneria-portfolio.s3.amazonaws.com/On-Chain-Resume.pdf",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Mitigating cold start delay problems in Serverless functions",
      createdAt: "2023-07-25T16:26:54Z",
      description:
        "Mitigating cold start delay problems in Serverless functions.",
      url:
        "https://parthchampaneria-portfolio.s3.amazonaws.com/Mitigating-Cold-Start-Problems-in-Serverless.pdf",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Docker Swarm in multi cloud environment",
      createdAt: "2023-07-12T16:26:54Z",
      description:
        "Performance evaluation of distributed systems in multiple clouds using Docker Swarm",
      url:
        "https://parthchampaneria-portfolio.s3.amazonaws.com/Docker-Swarm-Multi-Cloud.pdf",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_parth.png",
    description:
      "Feel free to connect with me through various channels to discuss collaborations, projects, or simply to have a conversation. You can find me on several social media platforms, where I share insights and updates related to my work. Feel free to reach out to me via email or phone as well. I look forward to connecting with you and exploring potential opportunities together.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Brunswick Street, Halifax, B3K 2Z1, Nova Scotia, Canada.",
    locality: "Halifax",
    country: "Canada",
    region: "Nova Scotia",
    postalCode: "B3K 2Z1",
    streetAddress: "Brunswick Street",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/7xQfqsEAuqJ44aL4A",
  },
  phoneSection: {
    title: "Contact: ",
    subtitle: "+1-782-882-0163",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
