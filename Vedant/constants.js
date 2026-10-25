export const METADATA = {
  author: "Vedant Domadiya",
  title: "Portfolio | Vedant Domadiya",
  description:
    "Vedant Domadiya is a DevOps & Platform Engineer at Techlusion.io, based in Ahmedabad, India. He builds and runs cloud infrastructure on AWS, Google Cloud and Azure with Kubernetes, Terraform and CI/CD, and focuses on making deploys boring and cloud bills smaller. He holds the Google Cloud Professional Cloud Architect and Associate Cloud Engineer, AWS Solutions Architect Associate and Cloud Practitioner, KCNA and Azure Fundamentals certifications. Outside work he helps run tech communities across Ahmedabad: he is a Google Cloud Arcade facilitator who has mentored 4,000+ learners and a Community Manager at Muse.",
  siteUrl: "https://vedantdomadiya.vercel.app",
  twitterHandle: "@VedantDomadiya",
  keywords: [
    "Vedant Domadiya",
    "DevOps Engineer",
    "Platform Engineer",
    "Cloud Engineer",
    "Techlusion",
    "Ahmedabad",
    "Kubernetes",
    "Terraform",
    "AWS",
    "Google Cloud",
    "Azure",
    "CI/CD",
    "Observability",
    "Professional Cloud Architect",
    "AWS Solutions Architect",
    "KCNA",
    "Google Cloud Arcade Facilitator",
    "Muse Community",
    "Portfolio",
  ].join(", "),
  image: "https://vedantdomadiya.vercel.app/og-image.png",
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
    name: "Certifications",
    ref: "certifications",
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
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "DevOps and Platform Engineer <br>@ Techlusion.io",
  "I make deploys boring <br>and cloud bills smaller",
  "2x Google Cloud, 2x AWS, <br>Azure and KCNA certified",
  "Google Cloud Arcade Facilitator, <br>4,000+ learners mentored",
];

export const RESUME_URL =
  "https://drive.google.com/file/d/1SOtjPTKlCWqwT-Lpw7Y-vlWeTnXoZ9gm/view?usp=sharing";

export const BOOKING_URL = "https://topmate.io/vedant_domadiya";

// Hero terminal, same voice as the link hub at vedantdomadiya.com/linkhub
export const TERMINAL_LINES = [
  { command: "whoami", output: "devops & platform engineer @ techlusion.io" },
  {
    command: "kubectl get certs -n vedant",
    output: "6 certifications Ready: gcp-pca, aws-saa, kcna, az-900, gcp-ace, aws-ccp",
  },
  { command: "terraform plan", output: "No changes. Let's build something." },
  { command: "git blame prod.yaml", output: "it was me. it's always me." },
  { command: "uptime", output: "load average: coffee, coffee, coffee" },
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:vedantdomadiya1809@gmail.com",
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
    url: "https://x.com/VedantDomadiya",
  },
];

// Each icon is /public/skills/<icon>.svg
export const SKILLS = [
  {
    title: "Cloud",
    items: [
      { icon: "AWS", name: "AWS" },
      { icon: "GCP", name: "Google Cloud" },
      { icon: "azure", name: "Azure" },
    ],
  },
  {
    title: "Containers and Orchestration",
    items: [
      { icon: "docker", name: "Docker" },
      { icon: "kubernetes", name: "Kubernetes" },
      { icon: "openshift", name: "OpenShift" },
    ],
  },
  {
    title: "Infrastructure as Code",
    items: [
      { icon: "terraform", name: "Terraform" },
      { icon: "ansible", name: "Ansible" },
      { icon: "packer", name: "Packer" },
    ],
  },
  {
    title: "CI/CD and GitOps",
    items: [
      { icon: "githubactions", name: "GitHub Actions" },
      { icon: "jenkins", name: "Jenkins" },
      { icon: "argocd", name: "Argo CD" },
    ],
  },
  {
    title: "Observability",
    items: [
      { icon: "prometheus", name: "Prometheus" },
      { icon: "grafana", name: "Grafana" },
    ],
  },
  {
    title: "Web Servers and Messaging",
    items: [
      { icon: "nginx", name: "Nginx" },
      { icon: "apache", name: "Apache" },
      { icon: "tomcat", name: "Tomcat" },
      { icon: "rabbitmq", name: "RabbitMQ" },
    ],
  },
  {
    title: "Operating Systems",
    items: [
      { icon: "linux", name: "Linux" },
      { icon: "redhat", name: "RHEL" },
      { icon: "windows", name: "Windows" },
    ],
  },
  {
    title: "Languages and Scripting",
    items: [
      { icon: "bash", name: "Bash" },
      { icon: "python", name: "Python" },
      { icon: "go", name: "Go" },
      { icon: "javascript", name: "JavaScript" },
      { icon: "Csharp", name: "C#" },
      { icon: "java", name: "Java" },
    ],
  },
  {
    title: "Databases",
    items: [
      { icon: "mysql", name: "MySQL" },
      { icon: "mariadb", name: "MariaDB" },
      { icon: "mongodb", name: "MongoDB" },
      { icon: "sqlserver", name: "SQL Server" },
      { icon: "dynamodb", name: "DynamoDB" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { icon: "nodejs", name: "Node.js" },
      { icon: "nextjs", name: "Next.js" },
      { icon: "react", name: "React" },
      { icon: "asp.net", name: "ASP.NET" },
    ],
  },
  {
    title: "Tools",
    items: [
      { icon: "git", name: "Git" },
      { icon: "github", name: "GitHub" },
      { icon: "bitbucket", name: "Bitbucket" },
      { icon: "maven", name: "Maven" },
      { icon: "postman", name: "Postman" },
    ],
  },
];

export const CERTIFICATIONS = [
  {
    name: "Professional Cloud Architect",
    issuer: "Google Cloud",
    year: 2026,
    badge: "/Certifications/badges/gcp-pca.png",
    url: "https://www.credly.com/badges/5eaba38a-9de5-458f-a16a-2d22b7320379",
  },
  {
    name: "Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    year: 2026,
    badge: "/Certifications/badges/aws-saa.png",
    url: "https://www.credly.com/badges/c7f5c9b9-c6ec-4659-b131-d1598ee3d09e",
  },
  {
    name: "Kubernetes and Cloud Native Associate (KCNA)",
    issuer: "The Linux Foundation",
    year: 2026,
    badge: "/Certifications/badges/kcna.png",
    url: "https://www.credly.com/badges/a31fe20c-fa0e-47cc-9c75-e1fa2bdefc4c",
  },
  {
    name: "Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: 2025,
    badge: "/Certifications/badges/az-900.svg",
    url: "https://learn.microsoft.com/en-us/users/vedantdomadiya-6787/credentials/39d0da008a53893c",
  },
  {
    name: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    year: 2024,
    badge: "/Certifications/badges/gcp-ace.png",
    url: "https://www.credly.com/badges/8e0354b4-7b2f-40f7-85fc-71c5b93b663e",
  },
  {
    name: "Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: 2024,
    badge: "/Certifications/badges/aws-ccp.png",
    url: "https://www.credly.com/badges/ca94304e-f26e-4bb7-9357-56c69d6a35f0",
  },
];

export const OTHER_CERTIFICATIONS = [
  {
    name: "AWS Academy Cloud Foundations",
    url: "https://www.credly.com/badges/5b62426f-a81c-46dd-863d-2fd819bd38db",
  },
  {
    name: "GeeksforGeeks Cloud Bootcamp",
    url: "https://drive.google.com/file/d/180K8jA9kwl0W7zIyfhi9DPrKbzP2dU9t/view?usp=drivesdk",
  },
  {
    name: "Postman API Fundamentals Student Expert",
    url: "https://badgr.com/public/assertions/D42MSCEPRKuephVG5MMC1Q",
  },
];

export const PROJECTS = [
  {
    name: "Sajag",
    description:
      "Voice AI scam shield. Listens to a phone call in Gujarati, Hindi or English and warns out loud, in the listener's language, the moment it sounds like a digital-arrest, fake-KYC or courier scam.",
    tech: ["Gemini", "Python", "Cloud Run"],
    github: "https://github.com/VedantDomadiya/sajag",
  },
  {
    name: "Auto-Healing Monitoring System",
    description:
      "Self-healing observability stack (MAPE-K). Prometheus detects the fault, Alertmanager routes it and a Python webhook fixes it through the Docker or Kubernetes API: about a minute from failure to recovery, no human in the loop.",
    tech: ["Prometheus", "Grafana", "Python", "Kubernetes"],
    github:
      "https://github.com/VedantDomadiya/cloud-native-auto-healing-monitoring-system",
  },
  {
    name: "EKS Landing Zone",
    description:
      "Production-grade AWS EKS cluster provisioned entirely with Terraform and deployed by GitHub Actions, with networking, autoscaling, persistent storage and add-ons.",
    tech: ["Terraform", "EKS", "GitHub Actions"],
    github: "https://github.com/VedantDomadiya/eks-terraform-manifests",
  },
  {
    name: "Multi-State Server Monitoring",
    description:
      "Prometheus and Grafana rolled out to air-gapped state deployments of 7–9 Linux and Windows servers each, with offline installers for node, Windows, RabbitMQ, Kafka and MySQL exporters.",
    tech: ["Prometheus", "Grafana", "Air-gapped"],
    github:
      "https://github.com/VedantDomadiya/Multi-State-Server-Monitoring-Implementation-Guide",
  },
  {
    name: "Google Cloud Arcade Calculator",
    description:
      "Points and swag-tier calculator for Arcade participants, with an admin console and SEO guides. Built with a volunteer contributor; I run and host it.",
    tech: ["Next.js", "Cloudflare Pages", "KV"],
    live: "https://arcadecalculator.vedantdomadiya.com",
  },
  {
    name: "Hardened AMI Pipeline",
    description:
      "CIS-benchmark hardened AWS AMI built with Packer and Ansible, ready to be consumed by Terraform.",
    tech: ["Packer", "Ansible", "Terraform"],
    github: "https://github.com/VedantDomadiya/Packer-Ansible-Terraform",
  },
  {
    name: "Krishna AI",
    description:
      "Chatbot that answers with guidance from verses of the Bhagavad Gita, containerised with Docker Compose.",
    tech: ["AI", "Docker Compose"],
    github: "https://github.com/VedantDomadiya/Krishna_AI",
  },
  {
    name: "vedantdomadiya.com",
    description:
      "Link hub, parody cloud status page and a terminal business card (try curl vedantdomadiya.com), served from Cloudflare Pages with a Pages Function.",
    tech: ["Cloudflare Pages", "Edge Functions"],
    live: "https://vedantdomadiya.com/linkhub/",
  },
];



export const WORK_CONTENTS = {
  TECHLUSION: [
    {
      title: "DevOps and Platform Engineer",
      description: "Techlusion.io, Ahmedabad. Making deploys boring and cloud bills smaller: shipping faster, scaling smoother, spending less.",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-center text-white px-4">
          <p className="text-xl font-semibold">Techlusion.io</p>
          <p className="mt-2 opacity-80">Oct 2026 – Present</p>
        </div>
      ),
    },
  ],
  // Electromech: roles and dates from LinkedIn, highlights from the Sep 2026 resume
  // (the resume lists them for the whole Dec 2024 - Jul 2026 stint, so they are grouped by theme).
  ELECTROMECH: [
    {
      title: "Electromech Cloudtech",
      description: "Ahmedabad. Grew from Linux / Cloud Intern (Dec 2024) to DevOps Intern (Mar 2025) to DevOps Engineer (Jun 2025 – Jul 2026).",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-center text-white px-4">
          <p className="text-xl font-semibold">DevOps Engineer</p>
          <p className="mt-2 opacity-80">Dec 2024 – Jul 2026</p>
        </div>
      ),
    },
    {
      title: "AWS and Kubernetes",
      description: [
        <div key="bullets">
          <p>• Designed and deployed multi-tier AWS architectures with EC2, VPC, ALB, NAT and RDS.</p>
          <p>• Deployed EKS clusters with Cluster Autoscaler, HPA and network policies for workload isolation.</p>
          <p>• Secured applications with AWS WAF IP allow-lists and rate-limiting rules.</p>
        </div>,
      ],
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-center text-white px-4">
          <p className="text-xl font-semibold">AWS · EKS · WAF</p>
        </div>
      ),
    },
    {
      title: "Automation and CI/CD",
      description: [
        <div key="bullets">
          <p>• Built reusable Terraform modules with an S3 and DynamoDB remote backend for state locking.</p>
          <p>• Implemented CI/CD with Jenkins and GitHub Actions for Docker image builds and ECS deployments.</p>
          <p>• Automated deployments with Docker and Docker Compose for LAMP, LEMP and Node.js stacks.</p>
        </div>,
      ],
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-center text-white px-4">
          <p className="text-xl font-semibold">Terraform · Jenkins · GitHub Actions</p>
        </div>
      ),
    },
    {
      title: "Observability and Messaging",
      description: [
        <div key="bullets">
          <p>• Implemented Prometheus and Grafana monitoring for system health, RabbitMQ and application metrics.</p>
          <p>• Administered RabbitMQ and Kafka brokers: throughput, consumer lag and broker health.</p>
        </div>,
      ],
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-center text-white px-4">
          <p className="text-xl font-semibold">Prometheus · Grafana · RabbitMQ · Kafka</p>
        </div>
      ),
    },
  ],
  FACILITATOR: [
    {
      title: "Google Cloud Arcade Facilitator",
      description: "Google Cloud Community India. Facilitator for the 2024, 2025 and 2026 cohorts.",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-center text-white px-4">
          <p className="text-xl font-semibold">Facilitator</p>
          <p className="mt-2 opacity-80">Jul 2024 – Present</p>
        </div>
      ),
    },
    {
      title: "Shaping Future Cloud Leaders",
      description: [
        <div key="bullets">
          <p>• Mentored 4,000+ students and professionals in building Google Cloud skills, guiding them through their cloud journey.</p>
          <p>• Enrolled participants in a structured program with a 2-month Qwiklabs subscription for hands-on cloud experience.</p>
        </div>,
      ],
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-center text-white px-4">
          4,000+ learners mentored
        </div>
      ),
    },
    {
      title: "Pioneering Cloud Skills",
      description: [
        <div key="bullets">
          <p>• Designed gamified learning paths with interactive tasks, leaderboards and milestones.</p>
          <p>• Ran weekly doubt-solving sessions and a dedicated WhatsApp community for continuous support.</p>
          <p>• Rewarded participants with Google Cloud merchandise on reaching milestones.</p>
        </div>,
      ],
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-center text-white px-4">
          Gamified learning paths and weekly doubt-solving sessions
        </div>
      ),
    },
  ],
  COMMUNITY: [
    {
      title: "Ahmedabad tech communities",
      description: "Core team member of CNCF Ahmedabad, Docker Ahmedabad, AWS User Group Ahmedabad and WordPress Ahmedabad: organising meetups, workshops and conferences.",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-center text-white px-4">
          Core team
        </div>
      ),
    },
    {
      title: "Muse Community",
      description: "Community Manager.",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-center text-white px-4">
          Community Manager
        </div>
      ),
    },
    {
      title: "Campus leadership",
      description: "Technical Head, Postman Student Leader and AWS Students Club Lead at IITE, Indus University.",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-center text-white px-4">
          IITE, Indus University
        </div>
      ),
    },
  ],
  EARLIER: [
    {
      title: "Full-stack Developer Intern",
      description: "YesbhautikX.",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-center text-white px-4">
          <p className="text-xl font-semibold">YesbhautikX</p>
          <p className="mt-2 opacity-80">Dec 2023 – Feb 2024</p>
        </div>
      ),
    },
    {
      title: "Open source contributor",
      description: "GirlScript Summer of Code and Social Summer of Code (Hack2skill).",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-center text-white px-4">
          <p className="text-xl font-semibold">GSSoC and SSOC</p>
          <p className="mt-2 opacity-80">May 2023 – Jul 2023</p>
        </div>
      ),
    },
    {
      title: ".NET / Database Developer",
      description: [
        <div key="bullets">
          <p>• Sharvaya Infotech. Built ERP backend services in ASP.NET C# with MySQL: tables, stored procedures and Entity, DAL and BAL layers.</p>
          <p>• Optimised SQL queries, improving data retrieval performance by 25%.</p>
          <p>• Automated document generation for job cards, quotations and sales bills, cutting manual work by 40%.</p>
        </div>,
      ],
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-center text-white px-4">
          <p className="text-xl font-semibold">Sharvaya Infotech</p>
          <p className="mt-2 opacity-80">Dec 2022 – Aug 2023</p>
        </div>
      ),
    },
  ],
};

// The template this site started from shipped its author's GA4 ID here, so visits were
// reported to someone else's Analytics. Set your own measurement ID (or leave empty to disable).
export const GTAG = process.env.NEXT_PUBLIC_GA_ID || "";
