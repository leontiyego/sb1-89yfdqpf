import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, CircleUser, Search, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1a1a1a] shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo />
            <span className="ml-2 text-xl font-bold">EsquemaTec</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-[#f0f0f0] hover:text-[#2ecc71] transition-colors">
                <span>Categorias</span>
                <ChevronDown size={18} />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#2a2a2a] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  <Link to="/catalogo?categoria=carros" className="block px-4 py-2 text-sm hover:bg-[#3a3a3a] hover:text-[#2ecc71]">
                    Carros
                  </Link>
                  <Link to="/catalogo?categoria=caminhonetes" className="block px-4 py-2 text-sm hover:bg-[#3a3a3a] hover:text-[#2ecc71]">
                    Caminhonetes
                  </Link>
                  <Link to="/catalogo?categoria=caminhoes" className="block px-4 py-2 text-sm hover:bg-[#3a3a3a] hover:text-[#2ecc71]">
                    Caminhões
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/catalogo" className="text-[#f0f0f0] hover:text-[#2ecc71] transition-colors">
              Catálogo
            </Link>
            <Link to="/assinatura" className="text-[#f0f0f0] hover:text-[#2ecc71] transition-colors">
              Assinatura
            </Link>
            <Link to="/suporte" className="text-[#f0f0f0] hover:text-[#2ecc71] transition-colors">
              Suporte
            </Link>
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-[#f0f0f0] hover:text-[#2ecc71] transition-colors"
            >
              <Search size={20} />
            </button>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="flex items-center text-[#f0f0f0] hover:text-[#2ecc71] transition-colors"
            >
              <CircleUser className="mr-1" size={20} />
              <span>Área do Cliente</span>
            </Link>
            <Link 
              to="/assinatura" 
              className="px-5 py-2 rounded-md bg-[#2ecc71] text-[#1a1a1a] font-medium hover:bg-[#27ae60] transition-colors"
            >
              Assinar Agora
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-[#f0f0f0] hover:text-[#2ecc71] transition-colors"
            >
              <Search size={20} />
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#f0f0f0] hover:text-[#2ecc71] transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 py-3 px-4 bg-[#2a2a2a] rounded-md">
            <form className="flex items-center">
              <input 
                type="text" 
                placeholder="Pesquisar por marca, modelo ou ano..." 
                className="w-full bg-transparent border-b border-[#4a4a4a] text-[#f0f0f0] placeholder-[#8a8a8a] px-2 py-1 outline-none focus:border-[#2ecc71]"
              />
              <button 
                type="submit" 
                className="ml-2 text-[#2ecc71]"
              >
                <Search size={20} />
              </button>
            </form>
          </div>
        )}
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#2a2a2a] shadow-lg mt-3">
          <div className="py-3 space-y-1">
            <Link 
              to="/catalogo?categoria=carros" 
              className="block px-4 py-2 text-[#f0f0f0] hover:bg-[#3a3a3a] hover:text-[#2ecc71]"
            >
              Carros
            </Link>
            <Link 
              to="/catalogo?categoria=caminhonetes" 
              className="block px-4 py-2 text-[#f0f0f0] hover:bg-[#3a3a3a] hover:text-[#2ecc71]"
            >
              Caminhonetes
            </Link>
            <Link 
              to="/catalogo?categoria=caminhoes" 
              className="block px-4 py-2 text-[#f0f0f0] hover:bg-[#3a3a3a] hover:text-[#2ecc71]"
            >
              Caminhões
            </Link>
            <div className="border-t border-[#4a4a4a] my-2"></div>
            <Link 
              to="/catalogo" 
              className="block px-4 py-2 text-[#f0f0f0] hover:bg-[#3a3a3a] hover:text-[#2ecc71]"
            >
              Catálogo
            </Link>
            <Link 
              to="/assinatura" 
              className="block px-4 py-2 text-[#f0f0f0] hover:bg-[#3a3a3a] hover:text-[#2ecc71]"
            >
              Assinatura
            </Link>
            <Link 
              to="/suporte" 
              className="block px-4 py-2 text-[#f0f0f0] hover:bg-[#3a3a3a] hover:text-[#2ecc71]"
            >
              Suporte
            </Link>
            <div className="border-t border-[#4a4a4a] my-2"></div>
            <Link 
              to="/login" 
              className="block px-4 py-2 text-[#f0f0f0] hover:bg-[#3a3a3a] hover:text-[#2ecc71]"
            >
              Área do Cliente
            </Link>
            <div className="px-4 py-2">
              <Link 
                to="/assinatura" 
                className="block w-full text-center px-5 py-2 rounded-md bg-[#2ecc71] text-[#1a1a1a] font-medium hover:bg-[#27ae60] transition-colors"
              >
                Assinar Agora
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;