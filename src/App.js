import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import HomePage from "./pages/HomePage";
import AllProjectsPage from "./pages/AllProjectsPage";

function App() {
  return (
    <Router basename="/avdev">
      <div className="App font-sans text-gray-900 scroll-smooth">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjectsPage />} />
        </Routes>
        <Footer />
        <ThemeToggle />
      </div>
    </Router>
  );
}

export default App;
