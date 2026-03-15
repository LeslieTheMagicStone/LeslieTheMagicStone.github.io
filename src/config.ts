export const siteConfig = {
  name: "Leshi Li",
  title: "Computer Science Student @ ShanghaiTech University",
  description: "Portfolio of Leshi Li – Gameplay Programming & AI-driven 3D Generation",
  accentColor: "#1d4ed8",

  social: {
    email: "lilsh2023@shanghaitech.edu.cn",
    github: "https://github.com/LeslieTheMagicStone",
    bilibili: "https://space.bilibili.com/205225986",
  },

  aboutMe:
    "I am a Computer Science undergraduate at ShanghaiTech University interested in gameplay programming, multiplayer systems, and AI-driven 3D generation. I enjoy building interactive systems that combine technical depth with creative design, especially in games and virtual environments.",

  skills: [
    "C++",
    "C#",
    "C",
    "Python",
    "Unity",
    "Gameplay Programming",
    "Multiplayer Systems",
    "Git",
    "Blender"
  ],

  projects: [
    {
      name: "Mana Mingle",
      description:
        "Multiplayer spell-combat prototype developed in Unity. Designed a modular spell architecture using an abstract SpellBase system and ScriptableObjects, enabling rapid extension of new spells. Implemented projectile mechanics, combat interactions, and multiplayer gameplay prototyping.",
      link: "https://github.com/LeslieTheMagicStone",
      skills: ["Unity", "C#", "Gameplay Programming", "Multiplayer"],
    },
    {
      name: "AI 3D Scene Generation",
      description:
        "Independent research project at MARS Lab exploring scene-level 3D generation guided by large language models. Extended object-level generation models toward structured scene synthesis and layout generation.",
      link: "https://github.com/LeslieTheMagicStone",
      skills: ["Python", "PyTorch", "3D Generation", "LLM"],
    },
  ],

  experience: [
    {
      company: "Multi-disciplinary Artificial Reality Studio (MARS)",
      title: "Independent Researcher",
      dateRange: "Sep 2024 - Apr 2025",
      bullets: [
        "Explored scene-level 3D generation driven by large language models",
        "Investigated structured scene synthesis and layout planning for virtual environments",
        "Prototyped research ideas for AI-assisted 3D content generation",
      ],
    },
    {
      company: "ShanghaiTech University 4DVLab",
      title: "Research Assistant",
      dateRange: "Feb 2024 - Aug 2024",
      bullets: [
        "Contributed to baseline implementation for human-centric point cloud understanding",
        "Participated in model training, evaluation, and experimental design",
        "Assisted in data preprocessing and model performance analysis",
      ],
    },
  ],

  education: [
    {
      school: "ShanghaiTech University",
      degree: "B.Eng. in Computer Science",
      dateRange: "Sep 2023 - Jun 2027 (Expected)",
      achievements: [
        "School of Information Science and Technology",
        "Relevant Coursework: Data Structures, Operating Systems, Computer Architecture, Parallel Computing, Unity Game Development",
      ],
    },
    {
      school: "University of California, Berkeley",
      degree: "Visiting Student",
      dateRange: "Fall 2025",
      achievements: [
        "Coursework: Computer Security, Introduction to Artificial Intelligence, Programming Languages & Compilers, Computer Vision & Computational Photography",
      ],
    },
  ],
};