import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Importem Link per la navegació
import gsap from "gsap";
import { Sun, Moon, Menu, X } from "lucide-react"; // Icones mode clar/fosc i menú mòbil

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Detecta la pàgina actual

  useEffect(() => {
    // Animació inicial del logotip
    gsap.from(".logo img", { opacity: 0, duration: 1, ease: "power3.out" });

    // Aplicar mode clar/fosc inicialment
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Alternar mode clar/fosc
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Alternar menú mòbil
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 h-24 transition-all duration-500 ${
      darkMode ? "bg-[#181D26] shadow-lg text-white" : "bg-gray-100 shadow-md text-gray-800"
    } z-50`}>
      
      {/* 🔹 Logotip amb enllaç a la Home */}
      <Link to="/" className="logo flex-shrink-0 flex items-center justify-center h-full">
        <img 
          src={darkMode ? "/LogoN.png" : "/Logo.png"} 
          alt="Arnau Logo" 
          className="h-16 hover:scale-110 transition-transform duration-300"
          style={{ opacity: "1", objectFit: "contain", paddingTop: "4px", paddingBottom: "4px" }}
        />
      </Link>

      {/* 🔹 Menú Desktop */}
      <nav className="hidden md:flex flex-1 justify-center">
        <ul className={`flex gap-12 text-lg font-semibold tracking-wide transition-colors duration-300 ${
          darkMode ? "text-gray-200" : "text-gray-800"
        }`}>
          {[
            { name: "Inicio", path: "/" },
            { name: "Proyectos", path: "/portafolio" },
            { name: "Sobre mí", path: "/sobre-mi" },
            { name: "Contacto", path: "/contacto" },
          ].map((item, index) => (
            <li key={index} className="relative group">
              <Link 
                to={item.path} 
                className={`relative z-10 transition-all duration-300 group-hover:scale-105 ${
                  location.pathname === item.path ? "text-primary" : ""
                }`}
              >
                {item.name}
              </Link>
              {/* 🔹 Subratllat progressiu */}
              <span className={`absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-500 group-hover:w-full ${
                darkMode ? "bg-gray-200" : "bg-gray-800"
              }`}></span>
            </li>
          ))}
        </ul>
      </nav>

      {/* 🔹 Botó Mode Clar/Fosc i Menú Hamburguesa */}
      <div className="flex items-center gap-4">
        <button onClick={toggleDarkMode} className="transition-all duration-300 hover:scale-110">
          {darkMode ? <Sun size={24} className="text-gray-200" /> : <Moon size={24} className="text-gray-800" />}
        </button>

        {/* 🔹 Icona menú mòbil */}
        <button onClick={toggleMenu} className="md:hidden transition-all duration-300 hover:scale-110">
          {menuOpen ? <X size={28} className={`${darkMode ? "text-gray-200" : "text-gray-800"}`} /> : <Menu size={28} className={`${darkMode ? "text-gray-200" : "text-gray-800"}`} />}
        </button>
      </div>

      {/* 🔹 Menú Mòbil */}
      {menuOpen && (
        <div className={`absolute top-full left-0 w-full shadow-lg flex flex-col items-center py-5 space-y-4 md:hidden transition-all duration-500 ${
          darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
        }`}>
          {[
            { name: "Inicio", path: "/" },
            { name: "Proyectos", path: "/portafolio" },
            { name: "Sobre mí", path: "/sobre-mi" },
            { name: "Contacto", path: "/contacto" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-lg font-semibold transition-all duration-300 hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;

















