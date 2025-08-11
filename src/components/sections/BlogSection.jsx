// src/components/sections/BlogSection.jsx
import React, { useState } from 'react';

const BlogSection = ({ onArticleSelect }) => {
    const [visibleCount, setVisibleCount] = useState(6);
    const articles = [
        { id: 1, title: "Quanto Custa um Vídeo Institucional em Sorocaba?", category: "DECISÃO DE COMPRA", image: "https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 2, title: "5 Dicas de Fotografia de Produto para Lojas de Sorocaba", category: "E-COMMERCE", image: "https://images.pexels.com/photos/5989933/pexels-photo-5989933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 3, title: "Filmagem com Drone em Sorocaba: Como Valorizar seu Imóvel", category: "ALTO VALOR", image: "https://images.pexels.com/photos/7772635/pexels-photo-7772635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 4, title: "Case de Sucesso: Engajamento com Vídeos para Redes Sociais", category: "RESULTADOS", image: "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 5, title: "7 Locais Incríveis para Filmagens Externas em Sorocaba", category: "PRODUÇÃO LOCAL", image: "https://images.pexels.com/photos/161284/piazza-grande-modena-italy-161284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 6, title: "Fotografia Corporativa: A Imagem da sua Equipe em Sorocaba", category: "IMAGEM DE MARCA", image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 7, title: "Guia Completo: Como Planejar seu Primeiro Vídeo Institucional", category: "PLANEJAMENTO", image: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 8, title: "Reels vs. TikTok: Onde Empresas de Sorocaba Devem Investir?", category: "MARKETING DIGITAL", image: "https://images.pexels.com/photos/7648332/pexels-photo-7648332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 9, title: "Vídeo Marketing para Indústrias em Sorocaba", category: "INDÚSTRIA B2B", image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 10, title: "Tendências de Videomarketing para 2025 em Sorocaba", category: "INOVAÇÃO", image: "https://images.pexels.com/photos/5439477/pexels-photo-5439477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 11, title: "Vídeos para Clínicas e Médicos em Sorocaba: Como Atrair Pacientes", category: "SAÚDE", image: "https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 12, title: "Bastidores da Produção: Como Criamos um Vídeo de Sucesso", category: "PROCESSO", image: "https://images.pexels.com/photos/853875/pexels-photo-853875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ];

    return (
        <section id="section-4" className="h-auto min-h-screen w-screen flex items-center justify-center px-6 py-24">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-16">Blog & Insights</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {articles.slice(0, visibleCount).map(article => (
                        <div key={article.id} className="block group text-left cursor-pointer" onClick={() => onArticleSelect(article.id)}>
                            <div className="overflow-hidden rounded-lg bg-zinc-900 aspect-video">
                                <img src={article.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                            </div>
                            <p className="text-sm text-violet-400 mt-4">{article.category}</p>
                            <h3 className="text-xl font-bold mt-1 group-hover:text-violet-400 transition-colors">{article.title}</h3>
                            <p className="font-semibold mt-2">Ler artigo</p>
                        </div>
                    ))}
                </div>
                {visibleCount < articles.length && (
                    <button 
                        onClick={() => setVisibleCount(articles.length)}
                        className="mt-16 bg-violet-600 text-white font-bold py-3 px-8 rounded-full hover:bg-violet-700 transition-all duration-300 transform hover:scale-105"
                    >
                        Ver mais artigos
                    </button>
                )}
                 {visibleCount === articles.length && (
                    <button 
                        onClick={() => setVisibleCount(6)}
                        className="mt-16 bg-gray-700 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
                    >
                        Recolher artigos
                    </button>
                )}
            </div>
        </section>
    );
};

export default BlogSection;