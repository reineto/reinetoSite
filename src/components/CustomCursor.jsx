// src/components/CustomCursor.jsx
import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const onMouseMove = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }
        };
        window.addEventListener('mousemove', onMouseMove);

        const onMouseEnter = () => setIsHovering(true);
        const onMouseLeave = () => setIsHovering(false);
        
        const setupHoverListeners = () => {
            const interactiveElements = document.querySelectorAll('a, button');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', onMouseEnter);
                el.addEventListener('mouseleave', onMouseLeave);
            });
        }
        
        setupHoverListeners();
        const observer = new MutationObserver(setupHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            const interactiveElements = document.querySelectorAll('a, button');
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
            observer.disconnect();
        };
    }, []);

    return (
        <div 
            ref={cursorRef} 
            className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        />
    );
};

export default CustomCursor;