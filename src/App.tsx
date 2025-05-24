import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import Layout from './layouts/Layout';

// Pages
import HomePage from './pages/HomePage';
import EsquemaPage from './pages/EsquemaPage';
import ClienteArea from './pages/ClienteArea';
import LoginPage from './pages/LoginPage';
import CadastroPage from './pages/CadastroPage';
import RecuperarSenhaPage from './pages/RecuperarSenhaPage';
import SuportePage from './pages/SuportePage';
import FaqPage from './pages/FaqPage';
import TermosPage from './pages/TermosPage';
import PrivacidadePage from './pages/PrivacidadePage';
import ReembolsoPage from './pages/ReembolsoPage';
import CatalogoPage from './pages/CatalogoPage';
import AssinaturaPage from './pages/AssinaturaPage';
import CheckoutPage from './pages/CheckoutPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="esquema/:id" element={<EsquemaPage />} />
          <Route path="catalogo" element={<CatalogoPage />} />
          <Route path="assinatura" element={<AssinaturaPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="cliente" element={<ClienteArea />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="cadastro" element={<CadastroPage />} />
          <Route path="recuperar-senha" element={<RecuperarSenhaPage />} />
          <Route path="suporte" element={<SuportePage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="termos" element={<TermosPage />} />
          <Route path="privacidade" element={<PrivacidadePage />} />
          <Route path="reembolso" element={<ReembolsoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;