import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24 bg-[#1a1a1a]">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <span className="text-[#2ecc71] text-8xl font-bold">404</span>
        </div>
        <h1 className="text-3xl font-bold text-[#f0f0f0] mb-4">
          Página não encontrada
        </h1>
        <p className="text-[#c0c0c0] mb-8">
          A página que você está procurando pode ter sido removida, teve seu nome alterado ou está temporariamente indisponível.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 rounded-md bg-[#2ecc71] text-[#1a1a1a] font-medium hover:bg-[#27ae60] transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;