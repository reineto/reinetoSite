// src/pages/HomePage.jsx
import React, { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "../components/Header";
import MenuOverlay from "../components/MenuOverlay";
import CustomCursor from "../components/CustomCursor";

import HeroSection from "../components/sections/HeroSection";
import SolutionsSection from "../components/sections/SolutionsSection";
import CasesSection from "../components/sections/CasesSection";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mainContainerRef = useRef(null);

  useLayoutEffect(() => {
    const mainContainer = mainContainerRef.current;
    let ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
          const heroTl = gsap.timeline({
            scrollTrigger: {
              trigger: "#section-0",
              start: "top top",
              end: "+=100%",
              scrub: 1,
              pin: true,
            },
          });
          heroTl
            .to(".hero-text-panel", { xPercent: -100, opacity: 0 })
            .to(".hero-video-panel", { width: "100vw" }, 0);

          const solutionsTl = gsap.timeline({
            scrollTrigger: {
              trigger: "#section-1",
              start: "top top",
              end: "+=150%",
              scrub: 1,
              pin: true,
            },
          });
          solutionsTl
            .fromTo(".solution-background", { scale: 1 }, { scale: 1.2 })
            .to(".solution-title", { opacity: 1, y: 0 }, "<25%")
            .to(".solution-grid", { opacity: 1, y: 0 }, "<50%");

          const casesTrack = document.querySelector(".cases-track");
          const caseItems = document.querySelectorAll(".case-item");

          // Calcula o scroll necessário para mostrar todas as imagens
          const scrollWidth = casesTrack.scrollWidth - window.innerWidth;

          // Inicialmente esconde as seções About e Contact
          gsap.set(["#section-3", "#section-5"], { opacity: 0, y: 100 });

          // Animação principal do carrossel horizontal
          let scrollTween = gsap.to(casesTrack, {
            x: -scrollWidth,
            ease: "none",
            scrollTrigger: {
              trigger: "#section-2",
              pin: ".cases-container",
              scrub: 0.1,
              end: "+=1000", // Mais espaço para completar
              invalidateOnRefresh: true,
            },
          });

          // ScrollTrigger para detectar quando chegamos na última imagem
          ScrollTrigger.create({
            trigger: caseItems[caseItems.length - 1], // Última imagem
            containerAnimation: scrollTween,
            start: "left 60%",
            onEnter: () => {
              // Mostra as seções quando chegamos na última imagem
              gsap.to(["#section-3", "#section-5"], {
                opacity: 1,
                y: 0,
                duration: 1.8,
                stagger: 0.2,
                ease: "power2.out",
              });
            },
          });

          // Esconde o título do carrossel
          gsap.to(".cases-title-wrapper", {
            opacity: 0,
            scrollTrigger: {
              trigger: "#section-2",
              start: "top top",
              end: "top -30%",
              scrub: true,
            },
          });
        },
        "(max-width: 767px)": function () {},
      });
    }, mainContainer);

    return () => {
      if (ctx) ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigate = (index) => {
    const target = document.querySelector(`#section-${index}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <CustomCursor />
      <Header
        onMenuToggle={handleMenuToggle}
        isMenuOpen={isMenuOpen}
        onNavigate={handleNavigate}
      />
      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={handleMenuToggle}
        onNavigate={handleNavigate}
      />

      <div ref={mainContainerRef}>
        <HeroSection />
        <SolutionsSection />
        <CasesSection />
        <AboutSection />
        <ContactSection />
      </div>
    </>
  );
};

export default HomePage;
