// src/components/sections/SolutionsSection.jsx
import React from 'react';

const SolutionsSection = () => (
    <section id="section-1" className="h-screen w-screen relative flex items-center justify-center text-center overflow-hidden">
        <div className="solution-background absolute inset-[-20%] bg-cover bg-center" style={{ backgroundImage: "url('[https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1](https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)')" }} />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-6">
            <h2 className="solution-title text-4xl md:text-6xl font-bold mb-16 opacity-0">Nossas Soluções</h2>
            <div className="solution-grid grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 max-w-4xl mx-auto text-white opacity-0">
                <div><h3 className="text-xl md:text-2xl font-bold">Vídeo Institucional</h3></div>
                <div><h3 className="text-xl md:text-2xl font-bold">Social Media</h3></div>
                <div><h3 className="text-xl md:text-2xl font-bold">Filmagem com Drone</h3></div>
                <div><h3 className="text-xl md:text-2xl font-bold">Foto de Produto</h3></div>
                <div><h3 className="text-xl md:text-2xl font-bold">Foto Corporativa</h3></div>
                <div><h3 className="text-xl md:text-2xl font-bold">Pós-Produção</h3></div>
            </div>
        </div>
    </section>
);

export default SolutionsSection;