const companies = [
  {
    id: 1,
    name: "Google",
    rating: 4.9,
    openPositions: 95,
     logo: "https://logo.clearbit.com/google.com",
    location: "Mountain View, California",
    industry: "Technology",
    companySize: "180,000+",
    founded: 1998,
    website: "https://www.google.com",
    description:
      "Google is a global technology company known for its search engine, cloud services, artificial intelligence, and digital products.",
    about:
      "Google builds products and services that help billions of people access information, communicate, work, and solve everyday problems. The company continues to invest heavily in artificial intelligence, cloud computing, and emerging technologies.",
    benefits: [
      "Health and wellness benefits",
      "Flexible work options",
      "Learning and development programs",
      "Paid parental leave",
      "Employee wellness programs"
    ],
    workCulture:
      "Google promotes innovation, collaboration, creativity, and continuous learning while encouraging employees to work on challenging technology problems."
  },

  {
    id: 2,
    name: "Microsoft",
    rating: 4.7,
    openPositions: 85,
     logo: "https://logo.clearbit.com/microsoft.com",
    location: "Redmond, Washington",
    industry: "Software & Technology",
    companySize: "220,000+ ",
    founded: 1975,
    website: "https://www.microsoft.com",
    description:
      "Microsoft develops software, cloud platforms, productivity tools, operating systems, and AI-powered technologies.",
    about:
      "Microsoft is one of the world's largest technology companies, creating products such as Windows, Microsoft 365, Azure, and developer tools. Its mission focuses on empowering people and organizations through technology.",
    benefits: [
      "Health insurance",
      "Flexible working arrangements",
      "Professional development",
      "Paid parental leave",
      "Employee assistance programs"
    ],
    workCulture:
      "Microsoft emphasizes collaboration, growth mindset, inclusion, and continuous innovation across its global teams."
  },

  {
    id: 3,
    name: "Amazon",
    rating: 4.8,
    openPositions: 120,
     logo: "https://logo.clearbit.com/amazon.com",
    location: "Seattle, Washington",
    industry: "E-Commerce & Technology",
    companySize: "1,500,000+",
    founded: 1994,
    website: "https://www.amazon.com",
    description:
      "Amazon is a global technology and e-commerce company providing online retail, cloud computing, logistics, streaming, and digital services.",
    about:
      "Amazon started as an online bookstore and grew into a global technology company. Its businesses include Amazon Web Services, online retail, entertainment, logistics, and artificial intelligence.",
    benefits: [
      "Health and medical benefits",
      "Career development programs",
      "Employee discounts",
      "Parental support",
      "Retirement benefits"
    ],
    workCulture:
      "Amazon is known for customer-focused teams, ownership, experimentation, and solving complex problems at large scale."
  },

  {
    id: 4,
    name: "Samsung",
    logo: "https://logo.clearbit.com/samsung.com",
    rating: 4.8,
    openPositions: 90,
    location: "Suwon, South Korea",
    industry: "Electronics & Technology",
    companySize: "260,000+",
    founded: 1938,
    website: "https://www.samsung.com",
    description:
      "Samsung is a global technology company developing smartphones, electronics, semiconductors, displays, and innovative digital products.",
    about:
      "Samsung Electronics is one of the world's leading technology companies. It operates across consumer electronics, mobile technology, semiconductors, displays, and connected devices.",
    benefits: [
      "Health and wellness programs",
      "Employee development",
      "Training opportunities",
      "Flexible benefits",
      "Employee welfare programs"
    ],
    workCulture:
      "Samsung encourages technological innovation, teamwork, research, and continuous improvement across its international workforce."
  },

  {
    id: 5,
    name: "Naver",
    logo: "https://logo.clearbit.com/naver.com",
    rating: 4.8,
    openPositions: 60,
    location: "Seongnam, South Korea",
    industry: "Internet & Technology",
    companySize: "4,000+",
    founded: 1999,
    website: "https://www.naver.com",
    description:
      "Naver is a leading South Korean technology company operating search, online services, content platforms, AI, and digital products.",
    about:
      "Naver provides a wide range of internet services used by millions of people. The company invests in artificial intelligence, cloud computing, search technology, digital content, and innovative online platforms.",
    benefits: [
      "Flexible working environment",
      "Learning opportunities",
      "Health benefits",
      "Employee welfare programs",
      "Professional development"
    ],
    workCulture:
      "Naver encourages creativity, autonomy, technological experimentation, and collaboration in a fast-moving digital environment."
  },

  {
    id: 6,
    name: "Coupang",
    rating: 4.5,
    logo: "https://logo.clearbit.com/coupang.com",
    openPositions: 90,
    location: "Seoul, South Korea",
    industry: "E-Commerce & Technology",
    companySize: "100,000+",
    founded: 2010,
    website: "https://www.coupang.com",
    description:
      "Coupang is a major South Korean e-commerce company known for its fast delivery services, technology platforms, and digital commerce ecosystem.",
    about:
      "Coupang combines technology, logistics, and e-commerce to provide convenient shopping experiences. The company develops software and infrastructure that support large-scale commerce and delivery operations.",
    benefits: [
      "Health benefits",
      "Professional training",
      "Employee support programs",
      "Career development",
      "Flexible benefits"
    ],
    workCulture:
      "Coupang focuses on customer experience, fast execution, innovation, and solving complex logistical and technological challenges."
  },

  {
    id: 7,
    name: "Meta",
    logo: "https://logo.clearbit.com/meta.com",
    rating: 4.7,
    openPositions: 75,
    location: "Menlo Park, California",
    industry: "Social Media & Technology",
    companySize: "70,000+",
    founded: 2004,
    website: "https://www.meta.com",
    description:
      "Meta develops social networking platforms, virtual and augmented reality technologies, artificial intelligence, and digital communication products.",
    about:
      "Meta builds technologies that connect people and create digital communities. Its products include Facebook, Instagram, WhatsApp, and technologies focused on AI, virtual reality, and augmented reality.",
    benefits: [
      "Health and wellness benefits",
      "Learning programs",
      "Employee support",
      "Parental benefits",
      "Flexible work options"
    ],
    workCulture:
      "Meta encourages ambitious projects, rapid experimentation, collaboration, and innovation in social and emerging technologies."
  },

  {
    id: 8,
    name: "Apple",
    logo: "https://logo.clearbit.com/apple.com",
    rating: 4.9,
    openPositions: 80,
    location: "Cupertino, California",
    industry: "Consumer Technology",
    companySize: "160,000+",
    founded: 1976,
    website: "https://www.apple.com",
    description:
      "Apple designs consumer electronics, software, services, and digital experiences with a strong focus on design and innovation.",
    about:
      "Apple creates products and services including the iPhone, Mac, iPad, Apple Watch, and various digital services. The company combines hardware, software, and services to create integrated user experiences.",
    benefits: [
      "Health benefits",
      "Employee discounts",
      "Professional development",
      "Wellness programs",
      "Parental benefits"
    ],
    workCulture:
      "Apple emphasizes creativity, attention to detail, collaboration, product quality, and building technologies that provide strong user experiences."
  },

  {
    id: 9,
    name: "Netflix",
    rating: 4.6,
     logo: "https://logo.clearbit.com/netflix.com",
    openPositions: 70,
    location: "Los Gatos, California",
    industry: "Entertainment & Technology",
    companySize: "14,000+",
    founded: 1997,
    website: "https://www.netflix.com",
    description:
      "Netflix is a global entertainment technology company providing streaming services, original content, and digital entertainment.",
    about:
      "Netflix delivers entertainment to audiences around the world through its streaming platform. The company combines technology, data, content production, and creative talent to build personalized entertainment experiences.",
    benefits: [
      "Health benefits",
      "Flexible working environment",
      "Professional development",
      "Parental support",
      "Employee wellness programs"
    ],
    workCulture:
      "Netflix emphasizes freedom, responsibility, creativity, innovation, and strong individual ownership."
  },

  {
    id: 10,
    name: "Tesla",
    logo: "https://logo.clearbit.com/tesla.com",
    rating: 4.7,
    openPositions: 65,
    location: "Austin, Texas",
    industry: "Automotive & Technology",
    companySize: "125,000+",
    founded: 2003,
    website: "https://www.tesla.com",
    description:
      "Tesla develops electric vehicles, energy storage systems, charging technology, and software-driven automotive products.",
    about:
      "Tesla focuses on accelerating the transition to sustainable energy through electric vehicles, renewable energy products, battery technology, and intelligent software systems.",
    benefits: [
      "Health insurance",
      "Employee development",
      "Wellness programs",
      "Career opportunities",
      "Employee support programs"
    ],
    workCulture:
      "Tesla promotes engineering-driven innovation, rapid problem solving, ambitious goals, and the development of sustainable technologies."
  },

  {
    id: 11,
    name: "Spotify",
    logo: "https://logo.clearbit.com/spotify.com",
    rating: 4.7,
    openPositions: 50,
    location: "Stockholm, Sweden",
    industry: "Music & Technology",
    companySize: "9,000+ ",
    founded: 2006,
    website: "https://www.spotify.com",
    description:
      "Spotify is a global audio streaming platform offering music, podcasts, and other digital audio experiences.",
    about:
      "Spotify uses technology and data to connect listeners with music, podcasts, and creators around the world. Its platform focuses on personalized discovery and digital audio experiences.",
    benefits: [
      "Flexible work options",
      "Health benefits",
      "Learning opportunities",
      "Parental benefits",
      "Employee wellness programs"
    ],
    workCulture:
      "Spotify promotes autonomy, creativity, collaboration, experimentation, and flexible ways of working."
  },

  {
    id: 12,
    name: "LinkedIn",
    logo: "https://logo.clearbit.com/linkedin.com",
    rating: 4.8,
    openPositions: 40,
    location: "Sunnyvale, California",
    industry: "Professional Networking & Technology",
    companySize: "20,000+",
    founded: 2003,
    website: "https://www.linkedin.com",
    description:
      "LinkedIn is a professional networking platform that connects professionals, companies, recruiters, and job seekers around the world.",
    about:
      "LinkedIn helps professionals build networks, discover career opportunities, share knowledge, and develop their careers. The platform also provides recruiting, learning, and business solutions.",
    benefits: [
      "Health and wellness benefits",
      "Professional learning",
      "Flexible work options",
      "Parental benefits",
      "Career development programs"
    ],
    workCulture:
      "LinkedIn focuses on collaboration, inclusion, professional growth, learning, and creating meaningful connections between professionals."
  }
]

export default companies