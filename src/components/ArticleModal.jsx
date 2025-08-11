// src/components/ArticleModal.jsx
import React from 'react';

const ArticleModal = ({ article, onClose }) => {
    if (!article) return null;

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-zinc-900 rounded-lg w-full max-w-3xl max-h-[85vh] overflow-y-auto p-8 md:p-12 relative" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-white">&times;</button>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-violet-400">{article.title}</h2>
                <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }}></div>
            </div>
        </div>
    );
};

export default ArticleModal;
