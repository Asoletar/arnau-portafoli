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
      {
        title: "Logo Animado",
        media: "/CarLogo.mp4",
        thumbnail: "/CarTech.png", // ✅ Miniatura manual per a mòbils
        description: "Animación de logotipo para redes sociales con un enfoque dinámico."
      },
      {
        title: "Animación de Marca",
        media: "/Promo_Logo.mp4",
        thumbnail: "/Promo_Logo.png", // ✅ Miniatura manual per a mòbils
        description: "Escena dinámica de animación para promoción de marca."
      },
      {
        title: "Títulos de Crédito",
        media: "/Moduls.mp4",
        thumbnail: "/Moduls.png", // ✅ Miniatura manual per a mòbils
        description: "Introducción de títulos de crédito del proyecto cinematográfico Moduls."
      },
    ],
  },
  {
    title: "Diseño Gráfico",
    bgColor: "bg-yellow-500",
    projects: [
      { title: "Diseño Indiustrial", media: "/CarbonCraft.png", description: "Diseño de displays de barco y la implementación en colaboración con un programador electrónico" },
      { title: "Carteles Publicitarios", media: "/Cartells.png", description: "Diseño de carteles con tipografía experimental y elementos gráficos innovadores." },
      { title: "Poster de Presentación", media: "/Hortmapp.png", description: "Póster informativo del proyecyo Hortmapp, una app de agricultura urbana optimizada" },
      { title: "Newsletters", media: "/Newsletters.png", description: "Diseño de Newsletters para la difusion publicitaria de una agencia de viajes" },
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



