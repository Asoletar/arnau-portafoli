import React from "react";
import ProjectSection from "./ProjectSection";

const categories = [
  {
    title: "Diseño Web Interactivo",
    bgColor: "bg-indigo-500",
    projects: [
      { title: "Página web corporativa", media: "/intecma.png", description: "Una página web moderna con animaciones avanzadas y transiciones suaves." },
      { title: "Portafolio Dinámico", media: "/web_arnau.png", description: "Portafolio interactivo que responde a la interacción del usuario." },
      { title: "E-commerce Moderno", media: "/gargot.png", description: "Una tienda en línea con efectos de microinteracción para mejorar la UX." },
    ],
  },
  {
    title: "Branding e Identidad Visual",
    bgColor: "bg-green-500",
    projects: [
      { title: "Rebranding Corporativo", media: "/branding1.jpg", description: "Rediseño completo de una marca para actualizar su identidad visual." },
      { title: "Logo y Manual de Marca", media: "/branding2.jpg", description: "Creación de un logo profesional y su correspondiente manual de marca." },
    ],
  },
  {
    title: "Animaciones Motion Graphics",
    bgColor: "bg-red-500",
    projects: [
      { title: "Spot Publicitario", media: "/motion1.mp4", description: "Animación de 30 segundos para redes sociales con un enfoque dinámico." },
      { title: "Animación 3D", media: "/motion2.mp4", description: "Escena 3D renderizada con efectos de iluminación avanzada." },
    ],
  },
  {
    title: "Diseño Gráfico",
    bgColor: "bg-yellow-500",
    projects: [
      { title: "Cartel Publicitario", media: "/design1.jpg", description: "Diseño de un cartel con tipografía experimental y elementos gráficos innovadores." },
      { title: "Infografía Interactiva", media: "/design2.jpg", description: "Infografía digital con animaciones que explican visualmente datos complejos." },
    ],
  },
];

function PortfolioPage() {
  return (
    <section className="w-full">
      {categories.map((category, index) => (
        <ProjectSection key={index} category={category} />
      ))}
    </section>
  );
}

export default PortfolioPage;



