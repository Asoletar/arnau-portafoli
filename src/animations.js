import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateHero = (heroRef) => {
  const tl = gsap.timeline();

  tl.from(heroRef.current.querySelector("h1"), {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: "power3.out",
  })
  .from(heroRef.current.querySelector("p"), {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power3.out",
  }, "-=1");

  // Parallax effect on scroll
  gsap.to(".bg-cover", {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
      trigger: ".bg-cover",
      start: "top bottom",
      scrub: 1,
    }
  });
};
