import { TypeAnimation } from "react-type-animation";

const CodeSnippet = () => {
  const codeLines = [
    `const andras = {`,
    `  origin: "Hungary 🇭🇺",`,
    `  location: "Shanghai",`,
    `  coffeeLover: true,`,
    `  availableForWork: true,`,
    `  skills: ["React", "Node.js", "Tailwind"],`,
    `  hobbies: ["photography", "gaming"],`,
    `};`,
    ``,
    `while (true) {`,
    `  andras.learn();`,
    `}`,
  ];

  return (
    <div className="relative rounded-md shadow-lg font-mono text-sm max-w-2xl mx-auto mb-8 overflow-hidden">
      {/* Window controls */}
      <div className="absolute top-0 left-0 w-full flex space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-t-md z-10">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

      {/* Code area */}
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-green-300 pt-10 pb-4 pl-12 pr-4 rounded-md relative">
        {/* Line numbers */}
        <div className="absolute top-10 left-2 text-gray-400 dark:text-gray-600 text-xs font-mono leading-6 select-none z-0">
          {codeLines.map((_, idx) => (
            <div key={idx}>{idx + 1}</div>
          ))}
        </div>

        {/* Animated code */}
        <pre className="whitespace-pre-wrap text-left overflow-hidden">
          <TypeAnimation
            sequence={[codeLines.join("\n"), 4000]}
            wrapper="code"
            speed={50}
            repeat={Infinity}
            cursor={true}
          />
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
