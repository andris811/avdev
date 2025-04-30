const Introduction = () => {
    return (
      <section
        id="intro"
        className="h-screen flex flex-col justify-center items-center text-center px-4 bg-white dark:bg-gray-900"
      >
        <img
          src={`${process.env.PUBLIC_URL}/logo.png`}
          alt="AV logo"
          className="w-64 md:w-72 mb-6 drop-shadow-md"
        />
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Hello, I'm Andras
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-xl">
          A passionate frontend developer with experience in React, JavaScript, and creative design. Welcome to my portfolio!
        </p>
      </section>
    );
  };
  
  export default Introduction;