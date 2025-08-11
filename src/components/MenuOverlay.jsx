// src/components/MenuOverlay.jsx
import React from 'react';

const MenuOverlay = ({ isOpen, onClose, onNavigate }) => {
    const menuItems = ["Início", "Soluções", "Cases", "Sobre", "Blog", "Contato"];
    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black z-40 flex items-center justify-center">
            <nav className="text-center">
                {menuItems.map((item, index) => (
                    <a
                        key={item}
                        href={`#section-${index}`}
                        onClick={(e) => {
                            e.preventDefault();
                            onNavigate(index);
                            onClose();
                        }}
                        className="block text-4xl md:text-5xl font-bold my-3 hover:text-violet-400 transition-colors duration-300"
                    >
                        {item}
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default MenuOverlay;