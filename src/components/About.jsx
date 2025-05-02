const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-start">
        {/* Left column – about text & soft skills */}
        <div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="mb-4">
            I'm Andras, a full-stack developer based in Shanghai with a background in education and environmental science.
            I transitioned into tech after years of working in international settings and managing teams.
            I enjoy blending logic and creativity to build beautiful, functional web apps.
          </p>
          <p className="mb-4">
            I'm highly adaptable, love working across cultures, and always eager to learn new technologies.
            Outside of coding, I’m passionate about photography, gaming, and exploring the world with my fiancée.
          </p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Strengths</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Cross-cultural communication & teamwork</li>
              <li>Fast learner and detail-oriented</li>
              <li>Creative problem solving</li>
              <li>Strong foundation in both frontend & backend development</li>
            </ul>
          </div>
        </div>

        {/* Right column – tech stack & certifications */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>

          <div className="space-y-4 text-sm">
            {[
              ["Frontend", ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"]],
              ["Backend", ["Node.js", "Express", "NestJS", "MongoDB", "PostgreSQL"]],
              ["Languages", ["Python", "Java", "Ruby"]],
              ["Frameworks", ["Flask", "Django", "FastAPI", "Spring Boot", "Ruby on Rails"]],
              ["Tools", ["Git", "GitHub", "VS Code", "Vite", "npm"]],
              ["Creative Tools", ["Photoshop", "Blender", "DaVinci Resolve", "Figma", "Lightroom", "Capture One"]],
            ].map(([label, items]) => (
              <div key={label}>
                <p className="font-semibold mb-1">{label}</p>
                <div className="flex flex-wrap gap-3 text-gray-700 dark:text-gray-300 text-sm font-semibold">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Certificates</h3>
            <ul className="text-sm space-y-2">
              <li>✔️ Web Development Bootcamp – Le Wagon Shanghai</li>
              <li>✔️ Java Programming – Training360 Hungary</li>
              <li>✔️ Angela Yu’s React, Node & Python courses (in progress)</li>
              <li>✔️ Harvard CS50x (in progress)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
