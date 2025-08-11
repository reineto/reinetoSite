// src/components/sections/ContactSection.jsx
import React from 'react';

const ContactSection = () => (
    <section id="section-5" className="h-screen w-screen flex items-center justify-center bg-zinc-900/50 px-6">
        <div className="container mx-auto text-center"><h2 className="text-3xl md:text-6xl font-bold">Vamos dar vida ao seu próximo projeto?</h2><p className="text-lg text-gray-400 mt-4 mb-10">Envie sua ideia. O café é por nossa conta.</p><a href="mailto:contato@reinetoproducoes.com.br" className="text-2xl md:text-5xl font-bold text-violet-400 hover:underline break-all">contato@reinetoproducoes.com.br</a><div className="mt-20 flex justify-center space-x-8"><a href="[https://instagram.com/reineto.prod](https://instagram.com/reineto.prod)" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-2xl"><i className="fab fa-instagram"></i></a><a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl"><i className="fab fa-youtube"></i></a><a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl"><i className="fab fa-linkedin-in"></i></a></div></div>
    </section>
);

export default ContactSection;