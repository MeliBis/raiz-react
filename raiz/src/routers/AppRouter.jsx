import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import FormularioPage from "../pages/FormularioPage";
import ProyectosPage from "../pages/ProyectosPage";
import BlogPage from "../pages/BlogPage";
import ListaTareasPage from "../pages/ListaTareasPage";
import TestimoniosPage from "../pages/TestimoniosPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/formulario" element={<FormularioPage />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
        <Route path="/listaTareas" element={<ListaTareasPage />} />
        <Route path="/testimonios" element={<TestimoniosPage />} />



        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
