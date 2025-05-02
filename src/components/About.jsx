const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left column – about text & soft skills */}
        <div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="mb-4">
            I'm Andras, a full-stack developer based in Shanghai with a
            background in education and environmental science. I transitioned
            into tech after years of working in international settings and
            managing teams. I enjoy blending logic and creativity to build
            beautiful, functional web apps.
          </p>
          <p className="mb-4">
            I'm highly adaptable, love working across cultures, and always eager
            to learn new technologies. Outside of coding, I’m passionate about
            photography, gaming, and exploring the world with my fiancée.
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
            <div>
              <p className="font-semibold mb-1">Frontend</p>
              <div className="flex flex-wrap gap-3 text-gray-700 dark:text-gray-300 text-sm font-semibold">
                {[
                  "React",
                  "Next.js",
                  "JavaScript",
                  "TypeScript",
                  "Tailwind CSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold mb-1">Backend</p>
              <div className="flex flex-wrap gap-3 text-gray-700 dark:text-gray-300 text-sm font-semibold">
                {["Node.js", "Express", "NestJS", "MongoDB", "PostgreSQL"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div>
              <p className="font-semibold mb-1">Languages</p>
              <div className="flex flex-wrap gap-3 text-gray-700 dark:text-gray-300 text-sm font-semibold">
                {["Python", "Java", "Ruby"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold mb-1">Frameworks</p>
              <div className="flex flex-wrap gap-3 text-gray-700 dark:text-gray-300 text-sm font-semibold">
                {[
                  "Flask",
                  "Django",
                  "FastAPI",
                  "Spring Boot",
                  "Ruby on Rails",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold mb-1">Tools</p>
              <div className="flex flex-wrap gap-3 text-gray-700 dark:text-gray-300 text-sm font-semibold">
                {["Git", "GitHub", "VS Code", "Vite", "npm"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold mb-1">Creative Tools</p>
              <div className="flex flex-wrap gap-3 text-gray-700 dark:text-gray-300 text-sm font-semibold">
                {[
                  "Photoshop",
                  "Blender",
                  "DaVinci Resolve",
                  "Figma",
                  "Lightroom",
                  "Capture One",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
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
