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
      { title: "Rebranding Corporativo", media: "/intecma2.png", description: "Rediseño completo de una marca para actualizar su identidad visual." },
      { title: "Logo de Marca", media: "/gargot2.png", description: "Creación de un logo profesional y sus variantes corporativas." },
      { title: "Manual de Marca", media: "/guia.png", description: "Creación del manual de marca de una tienda en línea." },
    ],
  },
  {
    title: "Animaciones Motion Graphics",
    bgColor: "bg-red-500",
    projects: [
      { title: "Logo Animado", media: "/CarLogo.mp4", description: "Animación de de logotipo para redes sociales con un enfoque dinámico." },
      { title: "Animación de marca", media: "/Promo_Logo.mp4", description: "Escena dinámica de animación para promoción de marca." },
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



