import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import HomePage from "./pages/HomePage";
import AllProjectsPage from "./pages/AllProjectsPage";
import CVPage from "./pages/CVPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";

function App() {
  return (
    <Router>
      <div className="App font-sans text-gray-900 scroll-smooth">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjectsPage />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
        </Routes>
        <Footer />
        <ThemeToggle />
      </div>
    </Router>
  );
}

export default App;
