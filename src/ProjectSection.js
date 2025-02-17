import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import VideoModal from "./VideoModal";

gsap.registerPlugin(Draggable);

function ProjectSection({ category }) {
  const [currentProject, setCurrentProject] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const projectContainerRef = useRef(null);
  const autoplay = true;
  const autoplayInterval = 6000;

  const transitionProject = useCallback((newIndex, direction) => {
    const projects = projectContainerRef.current.children;
    const directionMultiplier = direction === "right" ? 1 : -1;

    gsap.to(projects[currentProject], {
      x: `${-100 * directionMultiplier}%`,
      opacity: 0,
      duration: 1.3,
      ease: "power3.inOut",
    });

    gsap.fromTo(
      projects[newIndex],
      { x: `${100 * directionMultiplier}%`, opacity: 0 },
      { x: "0%", opacity: 1, duration: 1.3, ease: "power3.inOut" }
    );

    setTimeout(() => {
      setCurrentProject(newIndex);
    }, 650);
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
    let touchStartX = 0;
    let touchEndX = 0;
    let isDragging = false;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
      isDragging = true;
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      touchEndX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      const diff = touchEndX - touchStartX;

      if (diff < -50) nextProject();
      if (diff > 50) prevProject();
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [nextProject, prevProject]);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center text-white ${category.bgColor} py-16 relative overflow-hidden`}>
      <h2 className="text-5xl font-bold mb-8">{category.title}</h2>

      {/* Contenidor del carrusel */}
      <div ref={projectContainerRef} className="relative w-3/4 h-[500px] flex items-center justify-center overflow-hidden">
        {category.projects.map((project, index) => (
          <div
            key={index}
            className="absolute w-full h-full flex flex-col items-center justify-center text-center cursor-pointer"
            style={{
              visibility: index === currentProject ? "visible" : "hidden",
              opacity: index === currentProject ? 1 : 0,
            }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
              {project.media.endsWith(".mp4") ? (
                window.innerWidth < 768 ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-contain cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  />
                ) : (
                  <video src={project.media} autoPlay loop muted className="w-full h-full object-contain" />
                )
              ) : (
                <img src={project.media} alt={project.title} className="w-full h-full object-contain" />
              )}
            </div>

            <h3 className="text-3xl font-semibold mt-6">{project.title}</h3>
            <p className="text-lg mt-4 max-w-2xl">{project.description}</p>
          </div>
        ))}
      </div>

      {/* PUNTS DE NAVIGACIÓ INTERACTIUS */}
      <div className="flex space-x-2 mt-6">
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

      {/* BOTONS de navegació */}
      <div className="hidden md:flex items-center mt-6 space-x-6">
        <button onClick={prevProject} className="bg-black bg-opacity-50 text-white p-4 rounded-full hover:scale-110 transition duration-300 shadow-lg">
          <ChevronLeft size={30} />
        </button>
        <button onClick={nextProject} className="bg-black bg-opacity-50 text-white p-4 rounded-full hover:scale-110 transition duration-300 shadow-lg">
          <ChevronRight size={30} />
        </button>
      </div>

      {/* MODAL per mostrar el vídeo en gran */}
      {selectedProject && <VideoModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
}

export default ProjectSection;
























