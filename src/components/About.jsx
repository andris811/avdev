const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="relative max-w-6xl w-full p-8 rounded-lg shadow-md bg-white dark:bg-gray-900 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column – about text & soft skills */}
          <div>
            <h2 className="text-3xl font-bold mb-6">ABOUT ME</h2>
            <p className="mb-4">
              I'm Andras from Hungary, a full-stack developer based in Shanghai with a background in education and environmental science.
              I transitioned into tech after years of working in international settings and managing teams.
              I enjoy blending logic and creativity to build beautiful, functional web apps.
            </p>
            <p className="mb-4">
              I'm highly adaptable, love working across cultures, and always eager to learn new technologies.
              Outside of coding, I’m passionate about photography, gaming, and exploring the world with my fiancée.
              I also have basic experience with mobile app development using Swift and indie game development using Godot.
            </p>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">STRENGTHS</h3>
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
            <h3 className="text-xl font-semibold mb-4">TECH STACK</h3>

            <div className="space-y-4 text-sm">
              {[
                ["Frontend", ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"]],
                ["Backend", ["Node.js", "Express", "NestJS", "MongoDB", "PostgreSQL"]],
                ["Languages", ["Python", "Java", "Ruby", "Swift"]],
                ["Frameworks", ["Flask", "Django", "FastAPI", "Spring Boot", "Ruby on Rails"]],
                ["Tools", ["Git", "GitHub", "VS Code", "Vite", "npm"]],
                ["Creative Tools", ["Photoshop", "Blender", "DaVinci Resolve", "Figma", "Lightroom", "Capture One"]],
                ["Game & Mobile", ["Godot", "Xcode"]],
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
                <li>✔️ Angela Yu’s Full-Stack Development Bootcamp</li>
                <li>✔️ Java Programming – Training360 Hungary</li>
                <li>✔️ Harvard CS50x (in progress)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Glow effect to match contact */}
        <div
          className="absolute -inset-2 z-0 rounded-xl bg-gradient-to-br from-purple-400/10 to-blue-400/10 blur-xl pointer-events-none"
          aria-hidden="true"
        ></div>
      </div>
    </section>
  );
};

export default About;
