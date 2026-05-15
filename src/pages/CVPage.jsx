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
              Developer
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <span>Shanghai, China</span>
              <span>•</span>
              <span>+86 172 6950 0617</span>
              <span>•</span>
              <a href="mailto:avdev2024@gmail.com" className="hover:text-purple-600 dark:hover:text-purple-400">
                avdev2024@gmail.com
              </a>
              <span>•</span>
              <a href="https://andrasvarga.dev" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 dark:hover:text-purple-400">
                andrasvarga.dev
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
              Tech-savvy IT professional and web & iOS developer with hands-on experience in system support, troubleshooting, and building user-focused digital products. Skilled in web technologies, responsive design, and supporting multimedia-driven workflows. Experienced in IT support, Google Workspace administration, and assisting non-technical teams with digital tools and workflows. Passionate about improving digital systems, supporting creative work with reliable technology, and continuously learning modern development tools.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3 uppercase tracking-wide">
              Skills
            </h2>

            <div className="mb-4">
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Operating Systems & IT Support</h3>
              <p className="text-gray-700 dark:text-gray-300">Windows, macOS, Linux, troubleshooting, system configuration</p>
            </div>

            <div className="mb-4">
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Programming Languages</h3>
              <p className="text-gray-700 dark:text-gray-300">HTML, Tailwind CSS, JavaScript, React, Ruby on Rails, Python, Next.js, TypeScript, PostgreSQL, MongoDB, Swift</p>
            </div>

            <div className="mb-4">
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Digital Tools & Platforms</h3>
              <p className="text-gray-700 dark:text-gray-300">Microsoft 365, Google Workspace, remote collaboration tools</p>
            </div>

            <div className="mb-4">
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Networking & Security</h3>
              <p className="text-gray-700 dark:text-gray-300">Basic networking, VPN setup, cybersecurity awareness</p>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Localization & Digital Content</h3>
              <p className="text-gray-700 dark:text-gray-300">UI/UX localization testing, Trados, multilingual content QA</p>
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
                  <span>Developed, designed and maintained responsive websites and mobile applications in App Store, focusing on usability, performance, and clean interfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Handled full development cycles from implementation to deployment and ongoing maintenance, translating requirements into practical digital solutions</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  International Kindergarten – Sales & Marketing Officer
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">2023 – 2025</span>
              </div>
              <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Delivered photography and videography for marketing campaigns and internal events, producing edited content for social media, newsletters, and promotional materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Provided day-to-day IT support (devices, software, basic troubleshooting) while collaborating with internal teams and external partners to ensure smooth digital workflows and communication</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  CSOFT International Ltd – Localization & IT Support
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">2020 – 2025</span>
              </div>
              <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Performed localization testing and translation for consumer electronics, ensuring linguistic accuracy and UI consistency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Supported UI/UX testing and collaborated with international teams to improve localized software quality</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  Kovács Auto Car Parts – Sourcing & Supply Manager
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">2016 – 2020</span>
              </div>
              <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Managed sourcing operations and digital documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Translated technical product content and supported internal IT systems</span>
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
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  Training 360 Kft Budapest — Junior Java Developer Bootcamp
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">2017</span>
              </div>
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
                <span>English — Fluent, work language</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 dark:text-purple-400">•</span>
                <span>Chinese — Conversational (HSK 4-5)</span>
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