// src/components/Header.jsx
import React from 'react';

const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)">
        <path d="M4 6H20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 18H20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)">
        <path d="M6 18L18 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

const Header = ({ onMenuToggle, isMenuOpen, onNavigate }) => {
    return (
        <header className="fixed w-full z-50">
            <div className="container mx-auto px-6 md:px-12 h-24 flex justify-between items-center">
                <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); onNavigate(0); }}
                    className="text-2xl font-bold tracking-wider z-50 text-white mix-blend-difference"
                >
                    REINETO <span className="text-violet-400">PROD</span>
                </a>
                <button onClick={onMenuToggle} className="z-50 h-12 w-12 flex flex-col justify-center items-center">
                    {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>
        </header>
    );
};

export default Header;