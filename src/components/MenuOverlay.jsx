// src/components/MenuOverlay.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuOverlay = ({ isOpen, onClose, onNavigate }) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black z-40 flex items-center justify-center">
            <nav className="text-center">
                {isHomePage ? (
                    // Menu para a página home com navegação por seções
                    <>
                        {["Início", "Soluções", "Cases", "Sobre", "Contato"].map((item, index) => (
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
                        <Link
                            to="/blog"
                            onClick={onClose}
                            className="block text-4xl md:text-5xl font-bold my-3 hover:text-violet-400 transition-colors duration-300"
                        >
                            Blog
                        </Link>
                    </>
                ) : (
                    // Menu para outras páginas
                    <>
                        <Link
                            to="/"
                            onClick={onClose}
                            className="block text-4xl md:text-5xl font-bold my-3 hover:text-violet-400 transition-colors duration-300"
                        >
                            Home
                        </Link>
                        <Link
                            to="/blog"
                            onClick={onClose}
                            className="block text-4xl md:text-5xl font-bold my-3 hover:text-violet-400 transition-colors duration-300"
                        >
                            Blog
                        </Link>
                    </>
                )}
            </nav>
        </div>
    );
};

export default MenuOverlay;