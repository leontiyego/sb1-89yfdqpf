import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, CreditCard, Landmark, QrCode } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#252525] pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Logo />
              <span className="ml-2 text-xl font-bold text-[#f0f0f0]">EsquemaTec</span>
            </div>
            <p className="text-[#c0c0c0] mb-4">
              Sua fonte confiável de esquemas elétricos automotivos para profissionais e entusiastas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#2ecc71] hover:text-[#27ae60] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#2ecc71] hover:text-[#27ae60] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[#2ecc71] hover:text-[#27ae60] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-[#f0f0f0] font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalogo" className="text-[#c0c0c0] hover:text-[#2ecc71] transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link to="/assinatura" className="text-[#c0c0c0] hover:text-[#2ecc71] transition-colors">
                  Planos de Assinatura
                </Link>
              </li>
              <li>
                <Link to="/cliente" className="text-[#c0c0c0] hover:text-[#2ecc71] transition-colors">
                  Área do Cliente
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-[#c0c0c0] hover:text-[#2ecc71] transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link to="/suporte" className="text-[#c0c0c0] hover:text-[#2ecc71] transition-colors">
                  Suporte
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[#f0f0f0] font-bold text-lg mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalogo?categoria=carros" className="text-[#c0c0c0] hover:text-[#2ecc71] transition-colors">
                  Carros
                </Link>
              </li>
              <li>
                <Link to="/catalogo?categoria=caminhonetes" className="text-[#c0c0c0] hover:text-[#2ecc71] transition-colors">
                  Caminhonetes
                </Link>
              </li>
              <li>
                <Link to="/catalogo?categoria=caminhoes" className="text-[#c0c0c0] hover:text-[#2ecc71] transition-colors">
                  Caminhões
                </Link>
              </li>
            </ul>
            
            <h3 className="text-[#f0f0f0] font-bold text-lg mt-6 mb-4">Formas de Pagamento</h3>
            <div className="flex flex-wrap gap-2">
              <div className="p-2 bg-[#333] rounded">
                <CreditCard size={20} className="text-[#2ecc71]" />
              </div>
              <div className="p-2 bg-[#333] rounded">
                <Landmark size={20} className="text-[#2ecc71]" />
              </div>
              <div className="p-2 bg-[#333] rounded">
                <QrCode size={20} className="text-[#2ecc71]" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-[#f0f0f0] font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="text-[#2ecc71] mr-2 mt-0.5" size={18} />
                <span className="text-[#c0c0c0]">contato@esquematec.com.br</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-[#2ecc71] mr-2 mt-0.5" size={18} />
                <span className="text-[#c0c0c0]">(11) 9999-9999</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-[#2ecc71] mr-2 mt-0.5" size={18} />
                <span className="text-[#c0c0c0]">São Paulo, SP - Brasil</span>
              </li>
            </ul>
            
            <h3 className="text-[#f0f0f0] font-bold text-lg mt-6 mb-4">Informações Legais</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/termos" className="text-[#c0c0c0] hover:text-[#2ecc71] transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-[#c0c0c0] hover:text-[#2ecc71] transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/reembolso" className="text-[#c0c0c0] hover:text-[#2ecc71] transition-colors">
                  Política de Reembolso
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#444] mt-8 pt-6 text-center text-[#888]">
          <p>&copy; {new Date().getFullYear()} EsquemaTec. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;