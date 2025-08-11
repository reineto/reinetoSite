// src/components/sections/CasesSection.jsx
import React from 'react';

const CasesSection = () => {
    const cases = [
        { title: "Cliente de Tecnologia", img: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { title: "E-commerce de Moda", img: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { title: "Indústria Metalúrgica", img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { title: "Startup de Inovação", img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ];
    return (
        <section id="section-2" className="w-screen bg-black relative flex flex-col justify-center py-20 md:py-0">
            <div className="cases-container w-full h-screen overflow-hidden">
                 <div className="cases-title-wrapper text-center w-full px-6 mb-12 md:mb-0 md:absolute md:top-1/4 md:left-1/2 md:-translate-x-1/2 z-10">
                    <h2 className="text-4xl md:text-6xl font-bold">Cases de Sucesso</h2>
                </div>
                <div className="cases-track flex items-center gap-8 h-full">
                    {cases.map((caseItem, index) => (
                        <div key={index} className="case-item w-[80vw] md:w-[40vw] flex-shrink-0 ml-8 first:ml-[10vw]">
                            <div className="group">
                                <div className="overflow-hidden rounded-lg bg-zinc-900 aspect-video"><img src={caseItem.img} alt={caseItem.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                                <h3 className="text-2xl font-bold mt-4">{caseItem.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default CasesSection;
