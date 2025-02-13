import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CheckCircle } from "lucide-react"; // Icona per als punts de la llista

function AboutPage() {
  const textRef = useRef(null);
  const sectionsRef = useRef([]);
  const imgRef = useRef(null);
  const [filter, setFilter] = useState(""); // Estat per gestionar l'efecte visual

  useEffect(() => {
    // Animació d'entrada suau de la imatge
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 2, ease: "power2.out" }
    );

    // Animació del text inicial
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );

    // Animació progressiva de les seccions
    sectionsRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: index * 0.2, ease: "power3.out" }
      );
    });
  }, []);

  // Funció per aplicar un efecte aleatori quan es passa el ratolí per sobre
  const applyRandomEffect = () => {
    const effects = [
      "invert(1)", // Negatiu
      "grayscale(1)", // Escala de grisos
      "contrast(2) saturate(1.5)", // Augment de contrast i saturació
      "sepia(1)", // Efecete sèpia
      "hue-rotate(180deg)", // Canvi de tonalitat
    ];
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];
    setFilter(randomEffect);
  };

  // Funció per eliminar l'efecte quan es deixa de passar el ratolí
  const removeEffect = () => {
    setFilter("");
  };

  return (
    <section className="w-full mx-auto text-center relative">
      {/* Imatge amb aparició suau */}
      <div className="relative w-full h-[65vh] overflow-hidden">
        <img
          ref={imgRef}
          src="/Arnau.png"
          alt="Arnau Solé"
          className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-500"
          style={{ filter }}
          onMouseEnter={applyRandomEffect}
          onMouseLeave={removeEffect}
        />
      </div>

      {/* Introducció */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 ref={textRef} className="text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          Soy <span className="text-indigo-500 dark:text-indigo-300">Arnau Solé</span>
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-6 leading-relaxed">
          Diseñador multimedia graduado en <strong>Técnicas de Interacción Digital y Multimedia</strong>,
          apasionado por combinar creatividad y tecnología para dar vida a ideas y proyectos visuales.
        </p>
      </div>

      {/* Seccions amb animació */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-left space-y-12">
        {[
          {
            title: "Mis inicios",
            content:
              "Mis primeros pasos profesionales comenzaron con mi formación en fotografía en el IEFC (Instituto de Estudios Fotográficos de Cataluña), donde aprendí a contar historias visuales a través de la luz, el color y la composición. Este interés por la fotografía me llevó a completar un Grado Superior en Gráfica Publicitaria, que me permitió profundizar en la creación de marcas y materiales visuales de impacto.",
          },
          {
            title: "Experiencia profesional",
            content: (
              <>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Con el tiempo, he consolidado mis habilidades en diseño y multimedia trabajando en:
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Creación de identidades visuales coherentes y memorables.",
                    "Diseño web centrado en la experiencia del usuario.",
                    "Animaciones digitales para campañas publicitarias y contenido audiovisual.",
                    "Fotografía digital y analógica, aplicada a proyectos personales y profesionales.",
                    "Producción de materiales publicitarios, adaptados a diferentes formatos: impresos, digitales y audiovisuales."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-indigo-500 dark:text-indigo-300 w-5 h-5 flex-shrink-0" />
                      <span className="text-lg text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            ),
          },
          {
            title: "Mi enfoque",
            content:
              "Cada proyecto que llevo a cabo es una oportunidad para contar historias y generar impacto. Creo firmemente que un buen diseño no solo debe ser visualmente atractivo, sino también funcional, significativo y capaz de conectar con las personas.",
          },
          {
            title: "Curiosidades sobre mí",
            content:
              "Cuando no estoy diseñando, me apasiona explorar nuevas formas de creatividad, como experimentar con fotografía analógica, probar herramientas de inteligencia artificial o disfrutar de momentos en familia. Además, estoy en constante aprendizaje para mantenerme actualizado con las últimas tecnologías y tendencias del sector.",
          },
          {
            title: "¿Quieres saber más?",
            content:
              "Te invito a explorar mis proyectos y, si tienes una idea o proyecto en mente, ¡no dudes en contactarme!",
          },
        ].map((section, index) => (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="mb-12"
          >
            {/* Títol amb decoració */}
            <h2 className="text-3xl font-bold text-indigo-500 dark:text-indigo-300 relative">
              {section.title}
              <span className="absolute left-0 -bottom-2 w-12 h-[2px] bg-indigo-500 dark:bg-indigo-300"></span>
            </h2>
            <div className="text-lg text-gray-700 dark:text-gray-300 mt-4 whitespace-pre-line">
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutPage;







