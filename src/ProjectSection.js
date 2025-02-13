import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";

function ProjectSection({ category }) {
  const [currentProject, setCurrentProject] = useState(0);
  const projectContainerRef = useRef(null);
  const autoplay = true;
  const autoplayInterval = 6000; // 🔹 Temps entre canvis

  // 🔥 Transició totalment suau, sense brusquedats
  const transitionProject = useCallback((newIndex, direction) => {
    const projects = projectContainerRef.current.children;
    const directionMultiplier = direction === "right" ? 1 : -1;

    // 🔹 Assegurar que l'opacitat sigui 1 abans de la transició
    gsap.set(projects[currentProject], { opacity: 1 });

    gsap.to(projects[currentProject], {
      x: `${-100 * directionMultiplier}%`,
      opacity: 0, // 🔹 Ara desapareix correctament
      duration: 1.2,
      ease: "power3.inOut",
    });

    gsap.fromTo(
      projects[newIndex],
      { x: `${100 * directionMultiplier}%`, opacity: 0 },
      { x: "0%", opacity: 1, duration: 1.2, ease: "power3.inOut" }
    );

    setTimeout(() => {
      setCurrentProject(newIndex);
    }, 500);
  }, [currentProject]);

  const nextProject = useCallback(() => {
    transitionProject((currentProject + 1) % category.projects.length, "right");
  }, [currentProject, category.projects.length, transitionProject]);

  const prevProject = useCallback(() => {
    transitionProject((currentProject - 1 + category.projects.length) % category.projects.length, "left");
  }, [currentProject, category.projects.length, transitionProject]);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        nextProject();
      }, autoplayInterval);
      return () => clearInterval(interval);
    }
  }, [currentProject, autoplay, nextProject]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") nextProject();
      if (event.key === "ArrowLeft") prevProject();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextProject, prevProject]);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center text-white ${category.bgColor} py-16 relative overflow-hidden`}>
      <h2 className="text-5xl font-bold mb-8">{category.title}</h2>

      {/* Contenidor del carrusel */}
      <div ref={projectContainerRef} className="relative w-3/4 h-[500px] flex items-center justify-center overflow-hidden">
        {category.projects.map((project, index) => (
          <div
            key={index}
            className="absolute w-full h-full flex flex-col items-center justify-center text-center"
            style={{ 
              visibility: index === currentProject ? "visible" : "hidden",
              opacity: index === currentProject ? 1 : 0, // 🔹 Ara l'opacitat es gestiona correctament
            }}
          >
            {/* 🔥 Imatge/Vídeo amb mida ajustada automàticament */}
            <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
              {project.media.endsWith(".mp4") ? (
                <video
                  src={project.media}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={project.media}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            <h3 className="text-3xl font-semibold mt-6">{project.title}</h3>
            <p className="text-lg mt-4 max-w-2xl">{project.description}</p>
          </div>
        ))}
      </div>

      {/* Botons de navegació */}
      <div className="flex items-center mt-6 space-x-6">
        <button
          onClick={prevProject}
          className="bg-black bg-opacity-50 text-white p-4 rounded-full hover:scale-110 transition duration-300 shadow-lg"
        >
          <ChevronLeft size={30} />
        </button>

        <button
          onClick={nextProject}
          className="bg-black bg-opacity-50 text-white p-4 rounded-full hover:scale-110 transition duration-300 shadow-lg"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      {/* Punts de navegació */}
      <div className="flex space-x-3 mt-6">
        {category.projects.map((_, index) => (
          <button
            key={index}
            onClick={() => transitionProject(index, index > currentProject ? "right" : "left")}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentProject ? "bg-white scale-125 shadow-md" : "bg-gray-400 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;

















