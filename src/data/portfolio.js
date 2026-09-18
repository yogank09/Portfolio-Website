export const links = {
  github: "https://github.com/yogank09",
  linkedin: "https://linkedin.com/in/yogank-sharma-99a443307",
  leetcode: "https://leetcode.com/u/yogank/",
  gfg: "https://geeksforgeeks.org/profile/syug5cy3q",
  email: "mailto:yogank2005@gmail.com",
  phone: "tel:+919565387743",
};
export const skills = [
  ["Programming", ["Java", "JavaScript", "C", "SQL"]],
  ["Frontend", ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Vite"]],
  ["Backend", ["Spring Boot", "REST APIs", "Node.js"]],
  ["Database", ["MySQL"]],
  ["Tools", ["Git", "GitHub", "VS Code", "IntelliJ IDEA"]],
];
export const projects = [
  {
    id: "notify",
    title: "Notify",
    subtitle: "Multi-Category Notification Platform",
    category: "Java / Backend",
    technologies: ["Java", "Spring Boot", "REST APIs", "MySQL"],
    description:
      "A notification-focused application designed to organize updates across categories such as stock market trends, social media news, and vlogging content.",
    features: [
      "Organizes updates across multiple categories",
      "REST API endpoints and category-based data flow",
      "Structured storage with MySQL",
      "Backend integration between application components and database services",
    ],
    contribution:
      "Developed the backend flow using Java, Spring Boot, REST APIs, and MySQL.",
    github: "https://github.com/yogank09/notify-webapp",
  },
  {
    id: "memory",
    title: "MemorySaver",
    subtitle: "Social Memory-Sharing Platform",
    category: "Full Stack",
    technologies: ["React.js", "JavaScript", "Appwrite", "Tailwind CSS"],
    description: "A social platform for sharing and preserving memories.",
    features: [
      "User authentication and profiles",
      "Image-based posts, likes, comments, and bookmarks",
      "User search, follow system, and privacy controls",
      "Guest browsing mode and responsive UI",
    ],
    contribution:
      "Built the user-facing experience with React.js, Appwrite, and Tailwind CSS.",
    live: "https://memory-saver-mu.vercel.app/",
  },
  {
    id: "shop",
    title: "ShopHub",
    subtitle: "E-Commerce Web Application",
    category: "Frontend",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    description:
      "A vanilla JavaScript e-commerce web application with the core flows of an online store.",
    features: [
      "Product listing, search, and details",
      "Shopping cart and checkout",
      "Login and registration UI",
      "User dashboard and responsive design",
    ],
    contribution:
      "Built the application using HTML5, CSS3, and vanilla JavaScript.",
    live: "https://yogank09.github.io/ShopHub/",
  },
  {
    id: "finder",
    title: "GitHub Profile Finder",
    subtitle: "Developer Lookup Tool",
    category: "Frontend",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "GitHub API"],
    description:
      "A React-based tool for looking up GitHub users and their public profile information.",
    features: [
      "Search GitHub users by username",
      "Profile, avatar, repositories, followers, and following",
      "GitHub REST API integration",
      "Invalid username handling and responsive interface",
    ],
    contribution:
      "Created the responsive React interface and integrated the GitHub REST API.",
    live: "https://yogank09.github.io/Portfolio-Website/projects/github-profile-finder/",
  },
];
const certificatePath = (file) =>
  `${import.meta.env.BASE_URL}certificates/${file}`;
export const certifications = [
  {
    name: "Generative AI: Introduction and Applications",
    organization: "IBM / Coursera",
    date: "March 2026",
    file: certificatePath("generative-ai-certificate.pdf"),
  },
  {
    name: "Getting Started with Front-End and Web Development",
    organization: "IBM / Coursera",
    date: "March 2026",
    file: certificatePath("frontend-certificate.pdf"),
  },
  {
    name: "Learn Node.js",
    organization: "Scrimba / Coursera",
    date: "March 2026",
    file: certificatePath("coursera-nodejs-certificate.pdf"),
  },
];
