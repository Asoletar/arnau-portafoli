import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import HomeTitle from "./HomeTitle";
import SkillsSection from "./SkillsSection";
import Footer from "./Footer";
import AboutPage from "./AboutPage"; // Pàgina 'Sobre Mi'
import PortfolioPage from "./PortfolioPage"; // Pàgina 'Portafoli'
import ContactPage from "./ContactPage"; // Pàgina 'Contacte'
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen text-gray-900 dark:text-white dark:bg-[#12171F] bg-white">
        <Header />
        <main className="flex-grow pt-28 mb-20"> {/* Afegit pb-20 per evitar que el text quedi tapat */}
          <Routes>
            {/* Pàgina principal (Home) */}
            <Route path="/" element={
              <>
                <HomeTitle />
                <SkillsSection />
              </>
            } />

            {/* Altres pàgines del menú */}
            <Route path="/sobre-mi" element={<AboutPage />} />
            <Route path="/portafolio" element={<PortfolioPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;








