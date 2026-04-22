import { useEffect } from "react";

const CVPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const downloadPDF = () => window.print();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 pt-24 pb-12 px-4 md:px-8 print:bg-white print:text-black print:pt-0">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={downloadPDF}
          className="print:hidden fixed bottom-4 right-4 md:bottom-auto md:top-20 md:right-8 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-sm font-medium z-50"
        >
          Download PDF
        </button>

        <div className="mt-8 md:mt-0">
          <header className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Andras Varga
            </h1>
            <p className="text-xl text-purple-600 dark:text-purple-400 font-medium mb-4">
              Digital Product Specialist | iOS & Web Developer
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <span>Shanghai, China</span>
              <span>•</span>
              <span>+86 172 6950 0617</span>
              <span>•</span>
              <a href="mailto:vargan89@gmail.com" className="hover:text-purple-600 dark:hover:text-purple-400">
                vargan89@gmail.com
              </a>
              <span>•</span>
              <a href="https://andris811.github.io/avdev/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 dark:hover:text-purple-400">
                andris811.github.io/avdev/
              </a>
              <span>•</span>
              <span>WeChat: vargan89</span>
            </div>
          </header>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3 uppercase tracking-wide">
              Profile
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Digital product-focused developer with hands-on experience designing and delivering web and iOS applications from concept to deployment. Strong ability to connect user needs, business goals, and technical execution, with a focus on usability, scalability, and continuous product improvement.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
              Experienced in international and cross-functional environments, supporting digital products through localization, UI/UX testing, and collaboration with global teams. Combines fluent English, native Hungarian, and conversational Chinese (HSK 4–5) to operate effectively in multicultural settings.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
              Currently transitioning toward a Digital Product Manager role, bringing a technical foundation, product mindset, and strong user-centric approach to digital solution development.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3 uppercase tracking-wide">
              Product & Business Skills
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 dark:text-purple-400">•</span>
                <span>User journey mapping & UX thinking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 dark:text-purple-400">•</span>
                <span>Feature definition & prioritization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 dark:text-purple-400">•</span>
                <span>Agile & iterative development approach</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 dark:text-purple-400">•</span>
                <span>Cross-functional collaboration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 dark:text-purple-400">•</span>
                <span>Localization & internationalization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 dark:text-purple-400">•</span>
                <span>Stakeholder communication</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 dark:text-purple-400">•</span>
                <span>Product lifecycle understanding (concept → release → iteration)</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3 uppercase tracking-wide">
              Technical Skills
            </h2>

            <div className="mb-4">
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Languages & Frameworks</h3>
              <p className="text-gray-700 dark:text-gray-300">
                HTML, CSS (Tailwind), JavaScript, React, Next.js, TypeScript, Ruby on Rails, Python, Swift
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Databases</h3>
              <p className="text-gray-700 dark:text-gray-300">PostgreSQL, MongoDB</p>
            </div>

            <div className="mb-4">
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Tools</h3>
              <p className="text-gray-700 dark:text-gray-300">Git, Microsoft 365, Google Workspace</p>
            </div>

            <div className="mb-4">
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Systems</h3>
              <p className="text-gray-700 dark:text-gray-300">Windows, macOS, Linux</p>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Other</h3>
              <p className="text-gray-700 dark:text-gray-300">Basic networking, VPN setup, cybersecurity awareness</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-4 uppercase tracking-wide">
              Work Experience
            </h2>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  Freelancer – Web & iOS Developer
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">2023 – Pres</span>
              </div>
              <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Designed and developed digital products (web & iOS) from concept to release, defining features, user flows, and core functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Translated user needs and requirements into product decisions, improving usability and performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Managed full product lifecycle including planning, development, testing, deployment, and iteration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Continuously enhanced products based on user feedback and usage insights</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  International Kindergarten – Sales & Marketing Officer
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">2023</span>
              </div>
              <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Managed communication with international clients and partners, supporting enrollment and marketing initiatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Acted as a bridge between Chinese and international stakeholders, ensuring clear communication and smooth operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Contributed to improving customer experience and engagement through targeted communication strategies</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  CSOFT International Ltd – Localization & IT Support
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">2021 – 2023</span>
              </div>
              <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Conducted UI/UX localization testing to ensure consistency and usability across international markets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Collaborated with cross-functional teams (developers, designers, linguists) to improve product quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Identified usability and localization issues and contributed to product improvements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Supported multilingual digital content and software QA processes</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  Kovács Auto Car Parts – Sourcing & Supply Manager
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">2015 – 2021</span>
              </div>
              <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Managed sourcing operations and supplier coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Maintained digital documentation and supported internal systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Translated technical product information and facilitated international communication</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-4 uppercase tracking-wide">
              Education
            </h2>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  Le Wagon Shanghai — Web Development Bootcamp
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">2022 – 2023</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Training</p>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  Training 360 Budapest — Junior Java Developer Bootcamp
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">2017</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Training</p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  University of Szeged — BSc Environmental Science
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">2008 – 2012</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Bachelor of Science</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3 uppercase tracking-wide">
              Languages
            </h2>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 dark:text-purple-400">•</span>
                <span>Hungarian — Native</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 dark:text-purple-400">•</span>
                <span>English — Fluent (professional)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 dark:text-purple-400">•</span>
                <span>Chinese — Conversational (HSK 4–5, actively improving)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 dark:text-purple-400">•</span>
                <span>German — Basic conversational</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CVPage;