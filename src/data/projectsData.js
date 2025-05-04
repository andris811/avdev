const projectsData = [
    {
      title: "Varga Photography",
      description: "A responsive gallery website built with vanilla JS. Features include multilingual support (English/Hungarian/Chinese), dark/light mode toggle, categorized galleries with lazy image loading, and a Formspree contact form.",
      images: [
        `${process.env.PUBLIC_URL}/images/vargaPhoto/varga-photo1.png`,
        `${process.env.PUBLIC_URL}/images/vargaPhoto/varga-photo2.png`,
        `${process.env.PUBLIC_URL}/images/vargaPhoto/varga-photo3.png`,
        `${process.env.PUBLIC_URL}/images/vargaPhoto/varga-photo4.png`
      ],
      liveLink: "https://andris811.github.io/vargaPhoto",
      repoLink: "https://github.com/andris811/vargaPhoto",
      tech: ["HTML", "CSS", "JavaScript", "Formspree", "JSON"],
    },
    {
        title: "Compas",
        description: "Compas is a responsive travel companion platform built with Ruby on Rails. Features include user profiles, travel plan sharing, and companion matching to help users connect with like-minded travelers.",
        images: [
          `${process.env.PUBLIC_URL}/images/compas/compas_1.png`,
          `${process.env.PUBLIC_URL}/images/compas/compas_2.png`,
          `${process.env.PUBLIC_URL}/images/compas/compas_3.png`,
          `${process.env.PUBLIC_URL}/images/compas/compas_4.png`,
          `${process.env.PUBLIC_URL}/images/compas/compas_5.png`
        ],
        liveLink: "",
        repoLink: "https://github.com/andris811/Compas",
        tech: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS", "Vite", "JavaScript (ES6+)", "Cloudinary"],
      },
    {
        title: "Quote Generator",
        description: "A full-stack app built with React and Node.js.",
        image: "",
        liveLink: "",
        repoLink: "",
        tech: ["React", "Node.js", "Express", "MongoDB"],
      },
    {
        title: "AI Went Crazy",
        description: "A full-stack app built with React and Node.js.",
        image: "",
        liveLink: "",
        repoLink: "",
        tech: ["React", "Node.js", "Express", "MongoDB"],
      },
  ];
  
  export default projectsData;
  