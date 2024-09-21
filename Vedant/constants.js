export const METADATA = {
  author: "Vedant Domadiya",
  title: "Portfolio | Vedant Domadiya",
  description:
    "Vedant Domadiya is a B.Tech Computer Engineering Student and a Cloud Enthusiast. He is currently in his final year at Indus University, Ahmedabad. He is a Google Cloud Certified - Associate Cloud Engineer, AWS Certified - Cloud Practioner and a Google Cloud Arcade Facilitator 2024, mentoring over 750 students. He also serves as the Technical Head & Coding Club Lead at his campus and is the Postman Student Leader & AWS Student Club Lead. He is active in multiple tech communities across Ahmedabad and is pursuing additional cloud certifications. His passion lies in cloud technologies and community-driven learning, and he is committed to bridging the gap between academic knowledge and industry-ready skills.",
  siteUrl: "#",
  twitterHandle: "@VedantDomadiya",
  keywords: [
    "Vedant Domadiya",
    "Cloud Engineer",
    "DevOps Engineer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
    "B.Tech Computer Engineering Student",
    "Google Cloud Certified",
    "Associate Cloud Engineer",
    "Google Cloud Arcade Facilitator",
    "Technical Head",
    "Coding Club Lead",
    "Postman Student Leader",
    "AWS Student Club Lead",
    "Cloud Technologies",
    "Community-Driven Learning"
  ].join(", "),
  // image:
  //   "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Volunteering",
    ref: "volunteering",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "FY Computer Engineeer Student",
  "AWS and GCP Certified",
  "Passionate about Cloud and <br>DevOps Technologies",
  "Active Contributor to Multiple <br>Tech Communities and Local Groups",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: vedantdomadiya1809@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/VedantDomadiya/",
  },
  {
    name: "github",
    url: "https://github.com/VedantDomadiya",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/vedant_domadiya/",
  },
  {
    name: "twitter",
    url: "https://twitter.com/VedantDomadiya",
  },
];

export const SKILLS = {
  CloudProviders: ["AWS","GCP"],
  languagesAndTools: [
    "python",
    "Csharp",
    "C++",
    "java",
    "html",
    "css",
    "javascript",
    "nodejs",
    "vite",
  ],
  librariesAndFrameworks: [
    "asp.net",
    "react",
    "nextjs",
    "tailwindcss",
  ],
  OS: ["linux","windows"],
  databases: ["mysql", "mongodb" ,"sqlserver"],
  other: ["git", "github", "postman"],
};

export const PROJECTS = [
  {
    name: "Airbnb",
    image: "/projects/airbnb.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Airbnb UI clone using NextJS + Tailwind CSS 🛏️",
    gradient: ["#F14658", "#DC2537"],
    url: "https://shubh73-airbnb.vercel.app/",
    tech: ["react", "nextjs", "tailwindcss", "mapbox"],
  },
  {
    name: "Medium",
    image: "/projects/medium.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Medium UI clone using NextJS + Tailwind CSS ✍🏻",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://shubh73-medium.vercel.app/",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "sanity.io"],
  },
  {
    name: "Inshorts",
    image: "/projects/inshorts.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "Conversational Voice Controlled React News Application using Alan AI 🎙",
    gradient: ["#000066", "#6699FF"],
    url: "https://shubh73-inshorts.netlify.app/",
    tech: ["react", "chakra-ui", "alan"],
  },
  {
    name: "Tesla",
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "A Tesla React Native App 🏎️",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/shubh73/tesla",
    tech: ["react"],
  },
];

// export const WORK = [
//   {
//     id: 1,
//     company: "Dukaan",
//     title: "Frontend Developer",
//     location: "Bangalore, Karnataka",
//     range: "December - Current",
//     responsibilities: [
//       "Led creation of a captivating cross-platform e-commerce solution.",
//       "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
//       "The app boasts a DAU base of 32k and an extensive MAU count of 180k.",
//     ],
//     url: "https://mydukaan.io/",
//     video: "/work/dukaan.mp4",
//   },
//   {
//     id: 2,
//     company: "Aviate",
//     title: "Frontend Developer Intern",
//     location: "Goa",
//     range: "May - October 2022",
//     responsibilities: [
//       "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
//       "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
//       "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
//     ],
//     url: "https://www.aviate.jobs/",
//     video: "/work/aviate.mp4",
//   },
//   {
//     id: 3,
//     company: "Spacenos",
//     title: "Web Developer Intern",
//     location: "Bangalore, Karnataka",
//     range: "September - December 2021",
//     responsibilities: [
//       "Led the Full Stack revamp on the Admin Portal.",
//       "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
//       "Implemented CRUD features for all the services and providers.",
//     ],
//     url: "https://spacenos.com/",
//     video: "/work/spacenos.mp4",
//   },
// ];

export const WORK_CONTENTS = {
  FACILITATOR: [
    {
      title: "Google Cloud Arcade Facilitator 2024",
      description:
        "Google Cloud Community India",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Helping people grow thier cloud skills
        </div>
      ),
    },
    {
      title: "Shaping Future Cloud Leaders",
      description: [
      <div>
        <p>• Mentored 750+ students and professionals in building Google Cloud skills, guiding them through their cloud journey.</p>
        <p>• Enrolled participants in a structured program offering a 2-month Qwiklabs subscription for hands-on cloud computing experience.</p>
      </div>
      ],
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Leading individuals on a transformative cloud learning journey.
        </div>
      ),
    },
    {
      title: "Pioneering Cloud Skills",
      description:[
        <div>
          <p>• Designed and implemented gamified learning paths with interactive tasks, leaderboards, and milestones to encourage effective learning.</p>
          <p>• Facilitated weekly doubt-solving sessions, providing continuous support and motivation through a dedicated WhatsApp community.</p>
          <p>• Rewarded participants with Google Cloud merchandise upon achieving specific milestones, enhancing engagement and participation.</p>
        </div>
      ],
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Paving the way for future cloud experts through innovation and engagement.
        </div>
      ),
    },
  ],
  SHARVAYA: [
    {
      title: "Sharvaya Infotech",
      description:
        "Aviate is a preparation and mentorship platform for job-seekers that are seeking non-technical roles across top companies",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Finding the right job isn&apos;t fate, it&apos;s navigation
        </div>
      ),
    },
    {
      title: "Innovation",
      description:
        "I spearheaded the development of Q-Rate, their flagship product, a voice-based applicant screening platform. Moreover, I took initiatives to enhance user engagement and drive substantial increases in daily traffic. Additionally, I implemented an error-logging and bug reporting system, significantly diminishing user-reported bugs.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Developer Intern
        </div>
      ),
    },
  ],
  SPACENOS: [
    {
      title: "Spacenos",
      description:
        "A dynamic startup dedicated to creating innovative products that make the world a better place.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          We build apps that solve problems for the next billion people
        </div>
      ),
    },
    {
      title: "Trailblazing",
      description:
        "I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Web Developer Intern
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
