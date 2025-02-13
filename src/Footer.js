import React from "react";

function Footer() {
  return (
    <footer className="w-full py-6 text-center text-sm transition-all duration-500 
  bg-[#181D26] text-[#B0B8C2] mt-12">
      <p className="text-lg font-semibold opacity-80 hover:opacity-100 transition-opacity duration-300">
        "Cada proyecto és una oportunidad para innovar y crear."
      </p>
      <p className="text-sm mt-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
        © {new Date().getFullYear()} Arnau Solé - Diseño y Desarrollo
      </p>
    </footer>
  );
}

export default Footer;

