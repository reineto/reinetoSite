// src/components/sections/HeroSection.jsx
import React from 'react';

const HeroSection = () => (
    <section id="section-0" className="h-screen w-screen relative overflow-hidden">
        <div className="hero-container h-full w-full flex flex-col md:flex-row">
            <div className="hero-text-panel w-full md:w-1/2 h-1/2 md:h-full bg-black flex items-center justify-center">
                <div className="container mx-auto px-6 relative z-10 text-left max-w-xl">
                    <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6">
                        Conteúdo audiovisual <br /> que gera <span className="text-violet-400">valor.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300">
                       Criamos vídeos e fotografias que conectam marcas a pessoas.
                    </p>
                </div>
            </div>
            <div className="hero-video-panel w-full md:w-1/2 h-1/2 md:h-full relative">
                <div className="absolute inset-0 bg-black overflow-hidden">
                    <video autoPlay loop muted playsInline className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover">
                        <source src="https://videos.pexels.com/video-files/853875/853875-hd.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    </section>
);
export default HeroSection;
