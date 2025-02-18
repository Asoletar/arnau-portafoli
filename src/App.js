import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Header";
import HomeTitle from "./HomeTitle";
import SkillsSection from "./SkillsSection";
import Footer from "./Footer";
import AboutPage from "./AboutPage";
import PortfolioPage from "./PortfolioPage";
import ContactPage from "./ContactPage";
import PrivacyPolicy from "./PrivacyPolicy";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomeTitle /><SkillsSection /></PageTransition>} />
        <Route path="/sobre-mi" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/portafolio" element={<PageTransition><PortfolioPage /></PageTransition>} />
        <Route path="/contacto" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/politica-privacidad" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

// 🔥 **Component de transició suau**
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen text-gray-900 dark:text-white dark:bg-[#12171F] bg-white">
        <Header />
        <main className="flex-grow pt-28 mb-20">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;









