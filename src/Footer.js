import React from "react";

function Footer() {
  return (
    <footer className="w-full py-6 text-center text-sm transition-all duration-500 
  bg-[#181D26] text-[#B0B8C2] mt-12">
      <p className="text-lg font-semibold opacity-80 hover:opacity-100 transition-opacity duration-300">
        "Cada proyecto es una oportunidad para innovar y crear."
      </p>
      <p className="text-sm mt-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
        © {new Date().getFullYear()} Arnau Solé - Diseño y Desarrollo
      </p>

      {/* 🔹 Creative Commons License */}
      <div className="mt-4 opacity-70 hover:opacity-100 transition-opacity duration-300 text-xs">
        <p>
          Esta obra está licenciada bajo  
          <a 
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" 
            target="_blank" 
            rel="license noopener noreferrer" 
            className="underline ml-1"
          >
            CC BY-NC-SA 4.0
          </a>
        </p>
        <div className="flex justify-center mt-2 space-x-1">
          <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" className="h-5" alt="CC" />
          <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" className="h-5" alt="BY" />
          <img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" className="h-5" alt="NC" />
          <img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" className="h-5" alt="SA" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;


