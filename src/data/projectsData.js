const projectsData = [
  {
    title: "Varga Photography",
    description:
      "A responsive gallery website built with vanilla JS. Features include multilingual support (English/Hungarian/Chinese), dark/light mode toggle, categorized galleries with lazy image loading, and a Formspree contact form.",
    images: [
      `${process.env.PUBLIC_URL}/images/vargaPhoto/varga-photo1.png`,
      `${process.env.PUBLIC_URL}/images/vargaPhoto/varga-photo2.png`,
      `${process.env.PUBLIC_URL}/images/vargaPhoto/varga-photo3.png`,
      `${process.env.PUBLIC_URL}/images/vargaPhoto/varga-photo4.png`,
    ],
    liveLink: "https://andris811.github.io/vargaPhoto",
    repoLink: "https://github.com/andris811/vargaPhoto",
    tech: ["HTML", "CSS", "JavaScript", "Formspree", "JSON"],
  },
  {
    title: "Compas",
    description:
      "Compas is a responsive travel companion platform built with Ruby on Rails. Features include user profiles, travel plan sharing, and companion matching to help users connect with like-minded travelers.",
    images: [
      `${process.env.PUBLIC_URL}/images/compas/compas_1.png`,
      `${process.env.PUBLIC_URL}/images/compas/compas_2.png`,
      `${process.env.PUBLIC_URL}/images/compas/compas_3.png`,
      `${process.env.PUBLIC_URL}/images/compas/compas_4.png`,
      `${process.env.PUBLIC_URL}/images/compas/compas_5.png`,
    ],
    liveLink: "",
    repoLink: "https://github.com/andris811/Compas",
    tech: [
      "Ruby on Rails",
      "PostgreSQL",
      "Tailwind CSS",
      "Vite",
      "JavaScript (ES6+)",
      "Cloudinary",
    ],
  },
  {
    title: "QuoteLift",
    description:
      "QuoteLift is a full-stack web app that displays inspirational quotes and lets users save, pin, and share their favorites. It features a React frontend and an Express + MongoDB backend for persistent quote storage.",
    images: [
      `${process.env.PUBLIC_URL}/images/quoteGenerator/quoteLift_1.png`,
      `${process.env.PUBLIC_URL}/images/quoteGenerator/quoteLift_2.png`,
    ],
    liveLink: "https://quote-generator-lovat-xi.vercel.app/",
    repoLink: "https://github.com/andris811/quote-generator",
    tech: ["React", "TypeScript", "Tailwind CSS", "Express", "MongoDB"],
  },
  {
    title: "AI Went Crazy",
    description:
      "A retro-styled web app that delivers glitchy quotes, chaotic advice, mood scans, and ridiculous truth-or-dare prompts—showcasing what happens when AI goes hilariously off-script.",
    images: [
      `${process.env.PUBLIC_URL}/images/ai-went-crazy/ai_went_crazy_1.png`,
      `${process.env.PUBLIC_URL}/images/ai-went-crazy/ai_went_crazy_2.png`,
    ],
    liveLink: "https://andris811.github.io/ai-went-crazy/",
    repoLink: "https://github.com/andris811/ai-went-crazy",
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Flashly - Flashcard App",
    description: "A sleek and interactive flashcard app that helps users review and memorize information through animated card flipping and custom categories.",
    images: [
      `${process.env.PUBLIC_URL}/images/flashly/flashly_1.png`,
      `${process.env.PUBLIC_URL}/images/flashly/flashly_2.png`,
      `${process.env.PUBLIC_URL}/images/flashly/flashly_3.png`,
      `${process.env.PUBLIC_URL}/images/flashly/flashly_4.png`,
      `${process.env.PUBLIC_URL}/images/flashly/flashly_5.png`,
    ],
    liveLink: "https://flashly-iota.vercel.app",
    repoLink: "https://github.com/andris811/flashly",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Pomodoro Timer",
    description: "A clean and responsive Pomodoro timer built with React and Tailwind CSS. It features focus and break sessions, automatic transitions, a countdown prompt, session tracking, and smooth UI feedback to help users stay productive.",
    images: [
      `${process.env.PUBLIC_URL}/images/pomodoro/pomodoro_1.png`,
      `${process.env.PUBLIC_URL}/images/pomodoro/pomodoro_2.png`,
      `${process.env.PUBLIC_URL}/images/pomodoro/pomodoro_3.png`,
    ],
    liveLink: "https://andris811.github.io/pomodoroTimer/",
    repoLink: "https://github.com/andris811/pomodoroTimer",
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "HAZE Weather",
    description: "API integration, Tailwind UI",
    images: [
      `${process.env.PUBLIC_URL}/images/haze_weather/haze_1.png`,
      `${process.env.PUBLIC_URL}/images/haze_weather/haze_2.png`,
      `${process.env.PUBLIC_URL}/images/haze_weather/haze_3.png`,
      `${process.env.PUBLIC_URL}/images/haze_weather/haze_4.png`,
    ],
    liveLink: "https://haze-weather.vercel.app/",
    repoLink: "https://github.com/andris811/Haze-Weather",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Mood Tracker",
    description: "local storage, conditional styling",
    image: "",
    liveLink: "",
    repoLink: "",
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
];

export default projectsData;
