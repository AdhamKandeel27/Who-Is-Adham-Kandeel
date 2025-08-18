export const projectsArray = [
  {
    id: "sylius-analytics-plugin",
    name: "Sylius Analytics Plugin",
    company: "3BRS",
    timeframe: "2024",
    area: "Backend",
    type: "E-commerce Plugin",
    description:
      "Logs shop requests and shows request stats in Sylius admin (last 7 days, per-product, filters).",
    techStack: ["PHP", "Symfony 6.4", "Sylius 2.0", "Messenger", "Doctrine", "Twig", "Bootstrap"],
    highlights: [
      "Asynchronous logging via Symfony Messenger",
      "Admin dashboard widgets & grids",
      "Custom resource/entity + repository"
    ],
    links: { github: "", demo: "" },
    image: ""
  },
  {
    id: "sylius-docs-plugin",
    name: "Sylius Documentation Plugin",
    company: "3BRS",
    timeframe: "2024",
    area: "Full-stack",
    type: "E-commerce Plugin",
    description:
      "Renders Markdown docs inside the Sylius admin with navigation and access protection.",
    techStack: ["PHP", "Symfony", "Sylius", "Twig", "league/commonmark", "Bootstrap"],
    highlights: [
      "Admin menu integration & routing",
      "Markdown → HTML pipeline",
      "Graceful 404/permissions handling"
    ],
    links: { github: "", demo: "" },
    image: ""
  },
  {
    id: "sylius-plugin-upgrades",
    name: "Sylius Plugin Upgrades",
    company: "3BRS",
    timeframe: "2024",
    area: "Backend",
    type: "Migration",
    description:
      "Upgraded multiple plugins from legacy to Sylius 1.14 and then 2.0 following modern Symfony practices.",
    techStack: ["PHP", "Symfony", "Sylius 1.14 → 2.0", "Doctrine", "Behat (tests)"],
    highlights: [
      "Resolved BC breaks & routing/config changes",
      "Updated services/autowiring & resources",
      "Maintained compatibility with Symfony 6.4/7+"
    ],
    links: { github: "", demo: "" },
    image: ""
  },
  {
    id: "react-ui-webapps",
    name: "React UI Web Apps",
    company: "Origin Technology Solutions",
    timeframe: "Mar 2024 – Present",
    area: "Frontend",
    type: "Product UI",
    description:
      "Built responsive interfaces and components in React for production web apps.",
    techStack: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"],
    highlights: [
      "Componentized UIs with reusable patterns",
      "Responsive layouts & accessibility basics",
      "API integration and state management"
    ],
    links: { github: "", demo: "" },
    image: ""
  },
  {
    id: "outsystems-modules",
    name: "OutSystems Modules & UI",
    company: "Origin Technology Solutions",
    timeframe: "Mar 2024 – Present",
    area: "Full-stack",
    type: "Low-code",
    description:
      "Designed UIs and implemented backend logic in OutSystems for seamless app experiences.",
    techStack: ["OutSystems", "REST integrations", "SQL (platform)", "UX patterns"],
    highlights: [
      "Rapid development & deployment",
      "Backend workflows and data models",
      "UI flows aligned with UX best practices"
    ],
    links: { github: "", demo: "" },
    image: ""
  },
  {
    id: "php-crud-api",
    name: "PHP CRUD API (Internship)",
    company: "VERO Advanced Solutions",
    timeframe: "Jul 2022 – Oct 2022",
    area: "Backend",
    type: "API",
    description:
      "Built RESTful CRUD endpoints with PHP and SQL; tested with Postman on Laragon/Apache.",
    techStack: ["PHP", "SQL", "Postman", "Laragon (Apache)"],
    highlights: [
      "Models, controllers, and DB schema",
      "API testing & bug fixes",
      "Clear separation of concerns"
    ],
    links: { github: "", demo: "" },
    image: ""
  },
   {
    id: "mssql-db-system",
    name: "Database System",
    company: "University Project",
    timeframe: "2021",
    area: "Full-stack",
    type: "Application",
    description:
      "Developed a full database system with frontend and backend integration.",
    techStack: ["MSSQL", "C#", "ASP.NET", "HTML", "CSS"],
    highlights: [
      "Designed relational schema & optimized queries",
      "Built ASP.NET backend for CRUD operations",
      "Frontend UI with HTML & CSS"
    ],
    links: { github: "", demo: "" },
    image: ""
  },
  {
    id: "mern-flight-reservation",
    name: "Flight Reservation Website",
    company: "University Project",
    timeframe: "2021",
    area: "Full-stack",
    type: "Web App",
    description:
      "Built a flight reservation system with a full MERN stack architecture.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    highlights: [
      "Authentication & booking system",
      "REST API with Express/Node",
      "React frontend with dynamic forms"
    ],
    links: { github: "", demo: "" },
    image: ""
  },
  {
    id: "data-visualization-uk-accidents",
    name: "UK Accidents Data Analysis",
    company: "University Project",
    timeframe: "2020",
    area: "Data Science",
    type: "Analysis & Visualization",
    description:
      "Performed visualization, cleaning, transformation, extraction, integration and analysis on the 2016 UK Accidents dataset.",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
    highlights: [
      "Cleaned and transformed large datasets",
      "Created insightful visualizations",
      "Identified key accident patterns"
    ],
    links: { github: "", demo: "" },
    image: ""
  },
  {
    id: "bachelor-thesis-thermal-vision",
    name: "Thermal Camera Object Detection",
    company: "Bachelor Thesis",
    timeframe: "2021",
    area: "AI / Computer Vision",
    type: "Research Project",
    description:
      "Implemented object detection and classification using thermal cameras for an autonomous vehicle.",
    techStack: ["Python", "TensorFlow / Keras", "OpenCV", "Deep Learning"],
    highlights: [
      "Trained CNN models on thermal images",
      "Real-time object classification pipeline",
      "Autonomous vehicle use-case research"
    ],
    links: { github: "", demo: "" },
    image: ""
  }
];
