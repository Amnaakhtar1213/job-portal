const jobs = [
  {
    id: 1,
    company: "Google",
    title: "Senior Frontend Developer",
    category: "Frontend Development",
    location: "San Francisco, USA",
    type: "Full Time",
    Experience: "2 Years",
    workType: "Remote",
    salary: "$90k–$120k",
    salaryMin: 90,
  salaryMax: 120,
    skills: ["React", "Tailwind", "TypeScript"],
    posted: "3 Days ago",
    deadline: "Aug 30",
     openPositions: 95,

    description:
      "We are looking for a Senior Frontend Developer to build modern, accessible, and high-performance web experiences. You will work closely with designers, backend engineers, and product teams to create products used by millions of users.",

    responsibilities: [
      "Build and maintain responsive web applications using React.",
      "Collaborate with designers and backend developers.",
      "Write clean, reusable, and maintainable code.",
      "Improve application performance and user experience.",
      "Participate in code reviews and technical discussions.",
    ],

    requirements: [
      "Strong knowledge of JavaScript and React.",
      "Experience with responsive web development.",
      "Good understanding of HTML, CSS, and Tailwind CSS.",
      "Experience working with REST APIs.",
      "Strong problem-solving and communication skills.",
    ],

    qualifications: [
      "Bachelor's degree in Computer Science or related field.",
      "3+ years of frontend development experience.",
      "Experience with TypeScript is preferred.",
    ],

    whyJoinUs:
      "Join a collaborative engineering team where you can work on meaningful products, learn from experienced developers, and contribute to innovative technology.",
  },

  {
    id: 2,
    company: "Microsoft",
    title: "Frontend Developer",
    category: "Frontend Development",
    location: "Seattle, USA",
    type: "Full Time",
    Experience: "3 Years",
    workType: "Hybrid",
    salary: "$85k–$110k",
    salaryMin: 85,
  salaryMax: 110,
    skills: ["React", "JavaScript", "CSS"],
    posted: "2 Days ago",
    deadline: "Sep 5",
     openPositions: 85,

    description:
      "Microsoft is looking for a Frontend Developer to create reliable and engaging web applications. You will work with cross-functional teams to transform ideas into intuitive digital experiences.",

    responsibilities: [
      "Develop responsive and accessible user interfaces.",
      "Work closely with designers and product managers.",
      "Build reusable React components.",
      "Debug and improve existing applications.",
      "Participate in code reviews.",
    ],

    requirements: [
      "Good knowledge of JavaScript and React.",
      "Strong understanding of HTML and CSS.",
      "Experience with responsive design.",
      "Basic knowledge of Git and REST APIs.",
    ],

    qualifications: [
      "Bachelor's degree in Computer Science or related field.",
      "2+ years of frontend development experience.",
    ],

    whyJoinUs:
      "Work with talented engineers on products that serve users around the world while developing your technical and professional skills.",
  },

  {
    id: 3,
    company: "Amazon",
    title: "Frontend Engineer",
    category: "Frontend Development",
    location: "New York, USA",
    type: "Part Time",
    Experience: "7 Years",
    workType: "On-site",
    salary: "$95k–$125k",
    salaryMin: 95,
  salaryMax: 125,
    skills: ["React", "TypeScript", "AWS"],
    posted: "5 Days ago",
    deadline: "Sep 10",
    openPositions: 70,

    description:
      "Amazon is seeking a Frontend Engineer to develop scalable and user-focused web experiences. The role involves solving complex problems and working with teams across the organization.",

    responsibilities: [
      "Develop scalable frontend applications.",
      "Build reusable UI components.",
      "Work with backend engineers to integrate APIs.",
      "Optimize applications for performance.",
      "Participate in technical design discussions.",
    ],

    requirements: [
      "Strong JavaScript and React skills.",
      "Experience with TypeScript.",
      "Understanding of frontend performance optimization.",
      "Experience working with APIs.",
    ],

    qualifications: [
      "Bachelor's degree in Computer Science or related field.",
      "2+ years of software development experience.",
    ],

    whyJoinUs:
      "Work on large-scale products while solving challenging engineering problems alongside experienced professionals.",
  },

  {
    id: 4,
    company: "Samsung",
    title: "Software Engineer",
    category: "Software Engineering",
    location: "Seoul, South Korea",
    type: "Full Time",
    Experience: "3+ Years",
    workType: "On-site",
    salary: "$80k–$115k",
    salaryMin: 80,
  salaryMax: 115,
    skills: ["JavaScript", "React", "Python"],
    posted: "1 Day ago",
    deadline: "Sep 15",
    openPositions: 90,

    description:
      "Samsung is looking for a Software Engineer to contribute to innovative software solutions and collaborate with multidisciplinary engineering teams.",

    responsibilities: [
      "Develop and maintain software applications.",
      "Collaborate with software and product teams.",
      "Write clean and maintainable code.",
      "Test and debug software applications.",
      "Contribute to technical improvements.",
    ],

    requirements: [
      "Knowledge of JavaScript or Python.",
      "Understanding of software development principles.",
      "Experience with React is a plus.",
      "Strong analytical and problem-solving skills.",
    ],

    qualifications: [
      "Degree in Computer Science, Software Engineering, or related field.",
      "Relevant software development experience.",
    ],

    whyJoinUs:
      "Be part of a global technology company and contribute to products that reach users around the world.",
  },

  {
    id: 5,
    company: "Naver",
    title: "UI Engineer",
    category: "UI/UX Design",
    location: "Seongnam, South Korea",
    type: "Full Time",
    Experience: "Fresh",
    workType: "Hybrid",
    salary: "$75k–$105k",
    salaryMin: 75,
  salaryMax: 105,
    skills: ["React", "TypeScript", "Tailwind"],
    posted: "4 Days ago",
    deadline: "Sep 8",
     openPositions: 75,

    description:
      "Naver is seeking a UI Engineer to create intuitive and engaging digital experiences. You will work with designers and engineers to turn product ideas into polished interfaces.",

    responsibilities: [
      "Build reusable UI components.",
      "Implement responsive web interfaces.",
      "Collaborate with UX and product teams.",
      "Improve accessibility and usability.",
      "Maintain frontend code quality.",
    ],

    requirements: [
      "Strong knowledge of React.",
      "Experience with TypeScript.",
      "Good understanding of responsive design.",
      "Knowledge of modern CSS frameworks.",
    ],

    qualifications: [
      "Degree in Computer Science or related field.",
      "Experience building modern web applications.",
    ],

    whyJoinUs:
      "Join a technology-focused environment where design, engineering, and innovation come together to create meaningful digital experiences.",
  },

  {
    id: 6,
    company: "Coupang",
    title: "Web Developer",
    category: "Full Stack Development",
    location: "Seoul, South Korea",
    type: "Part Time",
    Experience: "1 Years",
    workType: "Remote",
    salary: "$70k–$100k",
    salaryMin: 70,
  salaryMax: 100,
    skills: ["JavaScript", "React", "Node.js"],
    posted: "6 Days ago",
    deadline: "Sep 12",
    openPositions: 80,

    description:
      "Coupang is looking for a Web Developer to build reliable and user-friendly web experiences for its growing digital platform.",

    responsibilities: [
      "Develop responsive web applications.",
      "Create reusable frontend components.",
      "Integrate frontend applications with APIs.",
      "Debug and improve application performance.",
      "Collaborate with cross-functional teams.",
    ],

    requirements: [
      "Good knowledge of JavaScript.",
      "Experience with React.",
      "Understanding of REST APIs.",
      "Basic knowledge of Node.js is preferred.",
    ],

    qualifications: [
      "Degree in Computer Science or related field.",
      "Experience developing web applications.",
    ],

    whyJoinUs:
      "Work in a fast-paced technology environment and help create digital experiences for millions of users.",
  },
];


export default jobs;