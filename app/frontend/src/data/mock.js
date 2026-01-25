// Mock data for Nandkishor Kumbhar's Portfolio

export const personalInfo = {
  name: "Nandkishor Kumbhar",
  title: "Software Engineer",
  subtitle: "Electronics & Telecommunication Engineering Graduate",
  tagline: "Building innovative solutions with modern technologies",
  email: "nkumbhar1404@gmail.com",
  phone: "+91 8956345230",
  location: "Pune, Maharashtra, India",
  github: "https://github.com/Nkumbhar1404",
  linkedin: "https://www.linkedin.com/in/nandkishorkumbhar",
  resumeUrl: "#"
};

export const about = {
  description: "I'm a passionate Software Engineer with a B.E. in Electronics & Telecommunication from North Maharashtra University. With a strong foundation in full-stack development, AI integration, and embedded systems, I thrive on creating innovative solutions that bridge hardware and software. My journey includes building CRUD applications, AI-powered robots, and gaining hands-on industrial experience.",
  education: {
    degree: "B.E. Electronics & Telecommunication",
    college: "SSBT's College of Engineering & Technology",
    university: "North Maharashtra University",
    cgpa: "7.91",
    duration: "Dec 2021 – Jun 2025",
    location: "Jalgaon, Maharashtra"
  }
};

export const skills = {
  languages: [
    { name: "Java", level: "Intermediate" },
    { name: "C#", level: "Intermediate" },
    { name: "SQL", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "HTML5", level: "Advanced" },
    { name: "CSS3", level: "Advanced" }
  ],
  frameworks: [
    { name: ".NET Core", level: "Intermediate" },
    { name: "ASP.NET MVC", level: "Intermediate" },
    { name: "Entity Framework", level: "Intermediate" },
    { name: "JDBC", level: "Basic" }
  ],
  databases: [
    { name: "MySQL", level: "Intermediate" },
    { name: "SQL Server", level: "Intermediate" }
  ],
  tools: [
    { name: "Git/GitHub", level: "Intermediate" },
    { name: "Visual Studio", level: "Advanced" },
    { name: "VS Code", level: "Advanced" },
    { name: "Eclipse", level: "Intermediate" },
    { name: "Raspberry Pi", level: "Intermediate" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Student Portal - CRUD Application",
    description: "Developed a comprehensive Student Portal web application using ASP.NET Core MVC and Entity Framework Core. Implemented full CRUD operations for managing student data with SQL Server backend. Followed MVC architecture, applied dependency injection for DbContext management, and handled database schema changes using EF Core migrations.",
    techStack: ["ASP.NET Core MVC", "Entity Framework Core", "SQL Server", "C#"],
    features: [
      "Complete CRUD operations for student management",
      "MVC architecture with clean separation of concerns",
      "Dependency injection for database context",
      "Database migrations with EF Core",
      "Responsive UI design"
    ],
    date: "Nov 2024",
    githubUrl: "https://github.com/Nkumbhar1404",
    liveUrl: null,
    category: "Web Development"
  },
  {
    id: 2,
    title: "AI-Based Interactive Reception Robot",
    description: "Industry-sponsored project by Electrosoft System Jalgaon. Developed an AI-driven reception robot using Raspberry Pi 4B with face recognition and voice assistance capabilities. Integrated camera for visual input, microphone and speaker for audio interaction, and servo motors for movement. Enabled autonomous navigation and real-time visitor engagement.",
    techStack: ["Raspberry Pi 4B", "Python", "AI/ML", "Face Recognition", "Voice Assistant", "IoT"],
    features: [
      "Real-time face recognition for visitor identification",
      "Voice command processing and response",
      "Autonomous navigation with servo motors",
      "Interactive audio-visual communication",
      "Embedded systems integration"
    ],
    date: "Jan 2025",
    githubUrl: "https://github.com/Nkumbhar1404",
    liveUrl: null,
    category: "AI & Robotics"
  }
];

export const experience = [
  {
    id: 1,
    company: "Hitachi Astemo",
    role: "Industrial Automation Intern",
    duration: "Oct 2024 – Nov 2024",
    location: "Jalgaon, Maharashtra",
    description: "Gained practical knowledge of industrial automation, control systems, and real-time production monitoring. Worked in the Braking System manufacturing division focusing on PLCs for monitoring and controlling production processes.",
    responsibilities: [
      "Worked with PLC systems for production monitoring",
      "Learned industrial automation workflows",
      "Studied real-time control systems",
      "Gained insights into braking system manufacturing"
    ],
    type: "Internship"
  },
  {
    id: 2,
    company: "Friends Union for Energising Lives (FUEL)",
    role: "Core Java Training",
    duration: "Dec 2023 – Feb 2024",
    location: "Pune, Maharashtra",
    description: "Completed comprehensive Core Java programming training with certification. Gained hands-on experience in Object-Oriented Programming concepts, Collections Framework, and JDBC for database connectivity.",
    responsibilities: [
      "Mastered OOP concepts and principles",
      "Worked extensively with Java Collections Framework",
      "Implemented JDBC for database operations",
      "Built practical Java applications"
    ],
    type: "Training"
  }
];

export const certifications = [
  {
    id: 1,
    name: "Core Java",
    issuer: "FUEL (Friends Union for Energising Lives)",
    date: "2024",
    credentialUrl: "#"
  },
  {
    id: 2,
    name: "Learning Java 11",
    issuer: "LinkedIn Learning",
    date: "2024",
    credentialUrl: "#"
  },
  {
    id: 3,
    name: "C# Programming",
    issuer: "FreeCodeCamp",
    date: "2024",
    credentialUrl: "#"
  },
  {
    id: 4,
    name: "SQL Programming",
    issuer: "LinkedIn Learning",
    date: "2024",
    credentialUrl: "#"
  }
];

export const achievements = [
  {
    id: 1,
    title: "Smart India Hackathon Certification",
    description: "Earned certification in Smart India Hackathon held at SSBT's College of Engineering & Technology",
    date: "2024"
  }
];