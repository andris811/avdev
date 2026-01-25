const projectsData = [
  {
    title: "Grivus - Habit Tracker",
    description:
      "A native iOS habit tracker with Apple Health integration. Features include customizable widgets, streak tracking, habit pause and archive functionality, and a clean SwiftUI interface for building and maintaining healthy habits.",
    images: [
      `${process.env.PUBLIC_URL}/images/grivus/grivus_1.png`,
      `${process.env.PUBLIC_URL}/images/grivus/grivus_2.png`,
      `${process.env.PUBLIC_URL}/images/grivus/grivus_3.png`,
      `${process.env.PUBLIC_URL}/images/grivus/grivus_4.png`,
    ],
    liveLink: "https://grivus.vercel.app",
    repoLink: "https://apps.apple.com/hu/app/grivus-habit-tracker/id6752882832",
    tech: ["Swift", "SwiftUI", "UIKit", "HealthKit", "iOS Widgets"],
  },
  {
    title: "OneThing Daily",
    description:
      "A minimalist iOS app that helps users focus on a single meaningful intention each day. It replaces habit streaks and productivity pressure with calm reminders, evening reflection, and simple journaling — designed to support intentional living, not optimization.",
    images: [
      `${process.env.PUBLIC_URL}/images/onething/onething1.png`,
      `${process.env.PUBLIC_URL}/images/onething/onething2.png`,
    ],
    liveLink: "https://onething-daily.vercel.app",
    repoLink: "https://apps.apple.com/hu/app/onething-daily/id6757373350",
    tech: ["Swift", "SwiftUI", "UIKit", "iOS Widgets"],
  },
  {
    title: "Between Days",
    description:
      "A minimal iOS app designed for people who live alone. With one daily tap, users can quietly signal that they’re okay. If check-ins stop for several days, the app automatically notifies a trusted contact — offering peace of mind without tracking, social pressure, or unnecessary notifications.",
    images: [
      `${process.env.PUBLIC_URL}/images/betweendays/betweendays_1.png`,
      `${process.env.PUBLIC_URL}/images/betweendays/betweendays_2.png`,
    ],
    liveLink: "https://www.betweendays.app",
    repoLink: "https://apps.apple.com/hu/app/between-days/id6757996962",
    tech: ["Swift", "SwiftUI", "UIKit", "SendGrid"],
  },
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
    title: "Szegedin Highflyer Breeding",
    description:
      "A responsive multi-language website for a Szegedi Keringő pigeon breeder, built with Astro. Features include image galleries, breed and breeder information, contact forms, available in Hungarian, English, German, Romanian, and Serbian.",
    images: [
      `${process.env.PUBLIC_URL}/images/szegedikeringo/szegedikeringo1.png`,
      `${process.env.PUBLIC_URL}/images/szegedikeringo/szegedikeringo2.png`,
      `${process.env.PUBLIC_URL}/images/szegedikeringo/szegedikeringo3.png`,
    ],
    liveLink: "https://szegedikeringo.vercel.app",
    repoLink: "https://github.com/andris811/szegedikeringo",
    tech: ["Astro", "TypeScript", "Tailwind CSS"],
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
