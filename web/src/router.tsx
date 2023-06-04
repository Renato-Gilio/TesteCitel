import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { NotFound } from './pages/NotFound';
import { Produtos } from './pages/Produtos';
import { Categorias } from './pages/Categorias';

const Router = () => {
    return (
        <Routes>
            <Route path="*" element={<NotFound />} />

            <Route path="/" element={<Produtos />} />
            <Route path="/categorias" element={<Categorias />} />
        </Routes>
    );
};

export { Router };
