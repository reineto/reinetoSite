// src/components/sections/AboutSection.jsx
import React from 'react';

const AboutSection = () => (
    <section id="section-3" className="h-screen w-screen flex items-center justify-center bg-zinc-900/50 px-6">
        <div className="container mx-auto"><div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto"><div className="flex justify-center md:justify-end"><img src="[https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1](https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" alt="Foto de Rei Neto" className="rounded-lg shadow-2xl w-full max-w-xs md:max-w-sm h-auto object-cover aspect-[4/5]"/></div><div><h2 className="text-3xl md:text-5xl font-bold mb-6">Somos um parceiro criativo e estratégico.</h2><p className="text-gray-300 text-lg max-w-md">Nossa missão é ir além da produção. É entender a fundo os desafios de cada cliente para criar soluções audiovisuais que não apenas encantam, mas geram resultados mensuráveis.</p></div></div></div>
    </section>
);

export default AboutSection;