export const siteConfig = {
  name: "Leshi Li",
  title: "Computer Science Student @ ShanghaiTech University",
  description: "Portfolio of Leshi Li - Gameplay Programming & AI-driven 3D Generation",
  accentColor: "#6366f1",

  social: {
    email: "lilsh2023@shanghaitech.edu.cn",
    github: "https://github.com/LeslieTheMagicStone",
    bilibili: "https://space.bilibili.com/205225986",
    itch: "https://lesliethemagicstone.itch.io/",
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
        "Multiplayer spell-combat prototype developed in Unity. Designed a modular spell architecture separating Spell, Projectile, and Damage systems using an abstract SpellBase class and ScriptableObjects. Implemented reusable projectile logic, component-based combat interactions, and a mana resource system with a multiplayer prototype built using Unity Netcode for GameObjects.",
      link: "https://www.bilibili.com/video/BV16t8ceBEbo",
      skills: ["Unity", "C#", "Gameplay Systems", "Multiplayer"],
    },
    {
      name: "Rising Ground",
      description:
        "Physics-based platformer prototype featuring destructible terrain and bomb mechanics. Implemented a grid-based terrain system generating 1000+ cubes that can be dynamically destroyed by explosions. Developed explosion force simulation, two bomb mechanics (Standard Bomb and Shockwave Bomb), real-time projectile trajectory prediction, and camera occlusion handling.",
      link: "https://www.bilibili.com/video/BV1458ce7EHh",
      skills: ["Unity", "C#", "Physics Simulation", "Destructible Terrain"],
    },
    {
      name: "Exit Code: 1",
      description:
        "Game prototype developed during Global Game Jam 2026. Implemented a hybrid gameplay structure combining visual novel dialogue with hacking mini-games, including dialogue interaction systems, stealth-based surveillance mechanics, and puzzle progression logic. Responsible for gameplay systems and integration of prefab-based art assets and UI.",
      link: "https://globalgamejam.org/games/2026/exit-code1yichangtuichu-0",
      skills: ["Unity", "C#", "Gameplay Programming", "Game Jam"],
    },
    {
      name: "AI 3D Scene Generation",
      description:
        "Independent research project at MARS Lab exploring LLM-driven 3D scene generation. Designed an agent-based pipeline that generates scene layouts from text and integrates Unity, Blender, and Python workflows for automated asset generation and scene assembly.",
      skills: ["Unity", "3D Generation", "LLM", "Blender"],
    },
  ],

  // experience: [
  //   {
  //     company: "Multi-disciplinary Artificial Reality Studio (MARS)",
  //     title: "Independent Researcher",
  //     dateRange: "Sep 2024 - Apr 2025",
  //     bullets: [
  //       "Explored scene-level 3D generation driven by large language models",
  //       "Investigated structured scene synthesis and layout planning for virtual environments",
  //       "Prototyped research ideas for AI-assisted 3D content generation",
  //     ],
  //   },
  //   {
  //     company: "ShanghaiTech University 4DVLab",
  //     title: "Research Assistant",
  //     dateRange: "Feb 2024 - Aug 2024",
  //     bullets: [
  //       "Contributed to baseline implementation for human-centric point cloud understanding",
  //       "Participated in model training, evaluation, and experimental design",
  //       "Assisted in data preprocessing and model performance analysis",
  //     ],
  //   },
  // ],

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