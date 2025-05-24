import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Car, Calendar, Tag, ShoppingCart, Download, ChevronLeft } from 'lucide-react';

// Dados mockados para exemplo
const esquemaData = {
  id: '1',
  title: 'Esquema Elétrico Completo - Toyota Corolla 2022',
  description: 'Diagrama elétrico completo do Toyota Corolla 2022, incluindo sistema de injeção, iluminação, painel, climatização, airbags e demais componentes elétricos. O esquema inclui todos os códigos de cores dos cabos, valores de resistência, tensões nominais e pinagens detalhadas de todos os conectores e módulos.',
  image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  previewImage: 'https://images.pexels.com/photos/3846022/pexels-photo-3846022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  brand: 'Toyota',
  model: 'Corolla',
  year: '2022',
  category: 'Carros',
  price: 29.90,
  features: [
    'Esquema completo em alta resolução',
    'Diagrama do sistema de injeção eletrônica',
    'Diagrama do sistema de iluminação',
    'Diagrama do sistema de climatização',
    'Diagrama do sistema de airbags',
    'Pinagem completa da ECU',
    'Códigos de cores dos cabos',
    'Valores de resistência e tensão'
  ],
  compatibleModels: [
    'Toyota Corolla 2020',
    'Toyota Corolla 2021',
    'Toyota Corolla 2022',
    'Toyota Corolla 2023'
  ],
  format: 'PDF',
  pages: 48,
  relatedEsquemas: [2, 3, 4]
};

const EsquemaPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const isUserSubscribed = false; // Simulação - Aqui viria da autenticação

  return (
    <div className="pt-24 pb-16 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link to="/catalogo" className="inline-flex items-center text-[#2ecc71] hover:underline">
            <ChevronLeft size={18} />
            <span>Voltar para o catálogo</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-[#2a2a2a] rounded-lg overflow-hidden mb-8">
              <div className="relative">
                <img 
                  src={esquemaData.image} 
                  alt={esquemaData.title} 
                  className="w-full h-auto"
                />
                <div className="absolute top-4 left-4 bg-[#2ecc71] text-[#1a1a1a] font-medium px-3 py-1 rounded">
                  {esquemaData.category}
                </div>
              </div>
              
              <div className="p-6">
                <h1 className="text-2xl md:text-3xl font-bold text-[#f0f0f0] mb-4">
                  {esquemaData.title}
                </h1>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-[#c0c0c0]">
                    <Car size={18} className="mr-2 text-[#2ecc71]" />
                    <span>{esquemaData.brand} {esquemaData.model}</span>
                  </div>
                  <div className="flex items-center text-[#c0c0c0]">
                    <Calendar size={18} className="mr-2 text-[#2ecc71]" />
                    <span>{esquemaData.year}</span>
                  </div>
                  <div className="flex items-center text-[#c0c0c0]">
                    <Tag size={18} className="mr-2 text-[#2ecc71]" />
                    <span>{esquemaData.format} • {esquemaData.pages} páginas</span>
                  </div>
                </div>
                
                <h2 className="text-xl font-semibold text-[#f0f0f0] mb-3">Descrição</h2>
                <p className="text-[#c0c0c0] mb-6">
                  {esquemaData.description}
                </p>
                
                <h2 className="text-xl font-semibold text-[#f0f0f0] mb-3">O que está incluído</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {esquemaData.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-[#2ecc71] mr-2">•</div>
                      <span className="text-[#c0c0c0]">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <h2 className="text-xl font-semibold text-[#f0f0f0] mb-3">Compatibilidade</h2>
                <div className="mb-6">
                  {esquemaData.compatibleModels.map((model, index) => (
                    <span 
                      key={index} 
                      className="inline-block bg-[#333] text-[#c0c0c0] px-3 py-1 rounded mr-2 mb-2"
                    >
                      {model}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-xl font-semibold text-[#f0f0f0] mb-3">Prévia</h2>
                <div className="bg-[#333] p-4 rounded-lg mb-6">
                  <img 
                    src={esquemaData.previewImage} 
                    alt={`Prévia - ${esquemaData.title}`} 
                    className="w-full h-auto rounded border border-[#444]"
                  />
                  <p className="text-sm text-[#a0a0a0] mt-2 text-center">
                    Imagem ilustrativa - Prévia em baixa resolução
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="sticky top-24">
              <div className="bg-[#2a2a2a] rounded-lg overflow-hidden p-6 mb-6">
                <div className="mb-4">
                  <div className="text-3xl font-bold text-[#2ecc71] mb-1">
                    R$ {esquemaData.price.toFixed(2).replace('.', ',')}
                  </div>
                  {isUserSubscribed && (
                    <div className="text-sm text-[#c0c0c0]">
                      Incluído na sua assinatura
                    </div>
                  )}
                </div>
                
                {isUserSubscribed ? (
                  <Link 
                    to={`/esquema/${id}/download`}
                    className="w-full flex items-center justify-center px-4 py-3 bg-[#2ecc71] text-[#1a1a1a] font-bold rounded-md hover:bg-[#27ae60] transition-colors mb-4"
                  >
                    <Download className="mr-2" size={20} />
                    Baixar Esquema
                  </Link>
                ) : (
                  <>
                    <Link 
                      to={`/checkout?esquema=${id}`}
                      className="w-full flex items-center justify-center px-4 py-3 bg-[#2ecc71] text-[#1a1a1a] font-bold rounded-md hover:bg-[#27ae60] transition-colors mb-4"
                    >
                      <ShoppingCart className="mr-2" size={20} />
                      Comprar Agora
                    </Link>
                    
                    <Link 
                      to="/assinatura"
                      className="w-full flex items-center justify-center px-4 py-3 bg-transparent border-2 border-[#2ecc71] text-[#2ecc71] font-bold rounded-md hover:bg-[#2ecc71]/10 transition-colors"
                    >
                      Assinar e Economizar
                    </Link>
                    
                    <div className="mt-4 text-sm text-[#c0c0c0] text-center">
                      Assine por R$ 49,90/mês e tenha acesso a todos os esquemas
                    </div>
                  </>
                )}
                
                <div className="mt-6">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-[#2ecc71] rounded-full mr-2"></div>
                    <span className="text-[#f0f0f0]">Acesso imediato após pagamento</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-[#2ecc71] rounded-full mr-2"></div>
                    <span className="text-[#f0f0f0]">Garantia de qualidade</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-[#2ecc71] rounded-full mr-2"></div>
                    <span className="text-[#f0f0f0]">Suporte técnico</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#2a2a2a] rounded-lg overflow-hidden p-6">
                <h3 className="text-lg font-semibold text-[#f0f0f0] mb-4">
                  Formas de Pagamento
                </h3>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="flex items-center justify-center p-2 bg-[#333] rounded">
                    <svg className="w-8 h-8 text-[#f0f0f0]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" />
                    </svg>
                  </div>
                  <div className="flex items-center justify-center p-2 bg-[#333] rounded">
                    <svg className="w-8 h-8 text-[#f0f0f0]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 4H6C3.79 4 2 5.79 2 8V16C2 18.21 3.79 20 6 20H18C20.21 20 22 18.21 22 16V8C22 5.79 20.21 4 18 4ZM18 16H6V12H18V16ZM18 10H6V8H18V10Z" />
                    </svg>
                  </div>
                  <div className="flex items-center justify-center p-2 bg-[#333] rounded">
                    <svg className="w-8 h-8 text-[#f0f0f0]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4ZM4 6V8H20V6H4ZM4 12V18H20V12H4Z" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-[#c0c0c0]">
                  Aceitamos pagamento via PIX, cartão de crédito (parcelamento em até 12x) e boleto bancário.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EsquemaPage;