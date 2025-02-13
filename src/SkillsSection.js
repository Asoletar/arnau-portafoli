import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function AboutMe() {
  const textRefs = useRef([]);

  useEffect(() => {
    // Animació de revelació per línies
    textRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20, filter: "blur(5px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          delay: index * 0.2, // Cada línia apareix amb retard progressiu
        }
      );
    });
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-20 text-center relative">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
        ¡Hola, soy <span className="text-indigo-500 dark:text-indigo-300">Arnau!</span>
      </h2>
      
      <p ref={(el) => (textRefs.current[0] = el)} className="text-lg text-gray-700 dark:text-gray-300 mt-6 leading-relaxed">
        Soy diseñador multimedia especializado en 
        <span className="text-blue-500 dark:text-blue-300"> diseño gráfico</span>, 
        <span className="text-pink-500 dark:text-pink-300"> web</span> y 
        <span className="text-green-500 dark:text-green-300"> animación digital</span>. 
        Me apasiona dar vida a las ideas combinando 
        <span className="text-yellow-500 dark:text-yellow-300"> creatividad</span> y 
        <span className="text-teal-500 dark:text-teal-300"> tecnología</span>, 
        desarrollando soluciones visuales que conecten con las personas y se adapten a cualquier plataforma.
      </p>

      <p ref={(el) => (textRefs.current[1] = el)} className="text-lg text-gray-700 dark:text-gray-300 mt-6 leading-relaxed">
        Aquí encontrarás una selección de proyectos en los que fusiono 
        <span className="text-orange-500 dark:text-orange-300"> creatividad</span>, 
        <span className="text-purple-500 dark:text-purple-300"> funcionalidad</span> e 
        <span className="text-red-500 dark:text-red-300"> innovación</span>. 
        Si tienes un proyecto en mente, ¡estaré encantado de colaborar!
      </p>
    </section>
  );
}

export default AboutMe;





