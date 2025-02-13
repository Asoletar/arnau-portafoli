import React from "react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

function HomeTitle() {
  const [darkMode, setDarkMode] = useState(document.documentElement.classList.contains("dark"));
  const titleRef = useRef(null);

  useEffect(() => {
    // Detectar canvis en el mode fosc en temps real
    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, { attributes: true });

    // Efecte de traç dibuixant-se amb GSAP
    gsap.fromTo(titleRef.current, 
      { opacity: 0, strokeDasharray: "400", strokeDashoffset: "400" }, 
      { opacity: 1, strokeDashoffset: "0", duration: 2, ease: "power2.out" }
    );

    // Efecte glitch en passar el cursor
    const handleHover = () => {
      gsap.fromTo(titleRef.current, 
        { x: -2, y: -2, opacity: 0.8 }, 
        { x: 2, y: 2, opacity: 1, duration: 0.1, repeat: 3, yoyo: true, ease: "power1.inOut" }
      );
    };

    const title = titleRef.current;
    title.addEventListener("mouseenter", handleHover);

    return () => {
      title.removeEventListener("mouseenter", handleHover);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex justify-center items-center mt-10">
      <svg ref={titleRef} className="w-auto h-36 md:h-48 lg:h-56" viewBox="0 0 500 150">
        <image href={darkMode ? "/TitolW.svg" : "/TitolB.svg"} width="100%" height="100%" />
      </svg>
    </div>
  );
}

export default HomeTitle;
