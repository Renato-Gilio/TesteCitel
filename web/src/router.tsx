import React from "react";
import { Routes, Route } from "react-router-dom";

import { NotFound } from "./pages/NotFound";
import { Produtos } from "./pages/Produtos";

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />

      <Route path="/" element={<Produtos />} />
    </Routes>
  );
};

export { Router };
