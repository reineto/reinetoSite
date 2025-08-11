// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
            </Routes>
        </Router>
    );
}