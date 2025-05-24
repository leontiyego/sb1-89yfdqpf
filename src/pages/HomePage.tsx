import React from 'react';
import { Link } from 'react-router-dom';
import { Search, FileText, Download, CreditCard, Lock, CheckCircle, Car, Truck, Award } from 'lucide-react';
import SearchForm from '../components/SearchForm';
import EsquemaCard from '../components/EsquemaCard';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3846022/pexels-photo-3846022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#f0f0f0] leading-tight">
              <span className="text-[#2ecc71]">Esquemas Elétricos</span> Automotivos Profissionais
            </h1>
            <p className="text-xl text-[#c0c0c0] mb-8">
              Acesse milhares de diagramas elétricos para carros, caminhonetes e caminhões. Solucione problemas com precisão e eficiência.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                to="/assinatura" 
                className="px-8 py-3 rounded-md bg-[#2ecc71] text-[#1a1a1a] font-bold text-lg hover:bg-[#27ae60] transition-all transform hover:-translate-y-1 shadow-lg"
              >
                Assinar Agora
              </Link>
              <Link 
                to="/catalogo" 
                className="px-8 py-3 rounded-md bg-transparent border-2 border-[#2ecc71] text-[#2ecc71] font-bold text-lg hover:bg-[#2ecc71]/10 transition-all transform hover:-translate-y-1"
              >
                Comprar Avulso
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-4 md:gap-8">
              <div className="flex items-center">
                <CheckCircle className="text-[#2ecc71] mr-2" size={20} />
                <span className="text-[#f0f0f0]">Diagramas detalhados</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-[#2ecc71] mr-2" size={20} />
                <span className="text-[#f0f0f0]">Download ilimitado</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-[#2ecc71] mr-2" size={20} />
                <span className="text-[#f0f0f0]">Acesso imediato</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <div className="w-10 h-10 rounded-full border-2 border-[#2ecc71] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#2ecc71]"></div>
          </div>
        </div>
      </section>
      
      {/* Search Section */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-[#f0f0f0]">
                Encontre o Esquema Que Você Precisa
              </h2>
              <p className="text-[#c0c0c0]">
                Busque por marca, modelo ou ano do veículo e tenha acesso imediato aos esquemas elétricos
              </p>
            </div>
            
            <SearchForm />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-[#252525]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#f0f0f0]">
              Por Que Escolher a <span className="text-[#2ecc71]">EsquemaTec</span>
            </h2>
            <p className="text-[#c0c0c0] max-w-2xl mx-auto">
              Oferecemos a solução mais completa e acessível para profissionais e entusiastas da área automotiva
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-[#2a2a2a] rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-[#2ecc71]/20 rounded-full flex items-center justify-center mb-4">
                <FileText className="text-[#2ecc71]" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#f0f0f0]">Esquemas Detalhados</h3>
              <p className="text-[#c0c0c0]">
                Diagramas completos e de alta qualidade, com todos os detalhes necessários para identificar e resolver problemas elétricos.
              </p>
            </div>
            
            <div className="p-6 bg-[#2a2a2a] rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-[#2ecc71]/20 rounded-full flex items-center justify-center mb-4">
                <Download className="text-[#2ecc71]" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#f0f0f0]">Download Ilimitado</h3>
              <p className="text-[#c0c0c0]">
                Com nossa assinatura, você tem acesso ilimitado a todos os esquemas, podendo baixá-los quando e onde precisar.
              </p>
            </div>
            
            <div className="p-6 bg-[#2a2a2a] rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-[#2ecc71]/20 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="text-[#2ecc71]" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#f0f0f0]">Formas de Pagamento</h3>
              <p className="text-[#c0c0c0]">
                Diversas opções de pagamento seguras e práticas, incluindo cartão de crédito, boleto e Pix.
              </p>
            </div>
            
            <div className="p-6 bg-[#2a2a2a] rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-[#2ecc71]/20 rounded-full flex items-center justify-center mb-4">
                <Lock className="text-[#2ecc71]" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#f0f0f0]">Segurança Garantida</h3>
              <p className="text-[#c0c0c0]">
                Seus dados e informações de pagamento são protegidos com os mais altos padrões de segurança.
              </p>
            </div>
            
            <div className="p-6 bg-[#2a2a2a] rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-[#2ecc71]/20 rounded-full flex items-center justify-center mb-4">
                <Search className="text-[#2ecc71]" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#f0f0f0]">Busca Avançada</h3>
              <p className="text-[#c0c0c0]">
                Encontre facilmente o esquema que precisa com nosso sistema de busca por marca, modelo e ano.
              </p>
            </div>
            
            <div className="p-6 bg-[#2a2a2a] rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-[#2ecc71]/20 rounded-full flex items-center justify-center mb-4">
                <Award className="text-[#2ecc71]" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#f0f0f0]">Qualidade Premium</h3>
              <p className="text-[#c0c0c0]">
                Diagramas verificados e validados por especialistas, garantindo máxima precisão e confiabilidade.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#f0f0f0]">
              Esquemas por Categorias
            </h2>
            <p className="text-[#c0c0c0] max-w-2xl mx-auto">
              Explore nossa biblioteca de esquemas elétricos organizados por categorias
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
              <div className="relative p-6 h-64 flex flex-col justify-end">
                <div className="mb-4">
                  <Car className="text-[#2ecc71]" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-[#f0f0f0]">Carros</h3>
                <p className="text-[#c0c0c0] mb-4">
                  Esquemas elétricos para carros de passeio de todas as marcas e modelos
                </p>
                <Link 
                  to="/catalogo?categoria=carros" 
                  className="inline-flex items-center text-[#2ecc71] font-medium group-hover:underline"
                >
                  Ver Esquemas <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/14865302/pexels-photo-14865302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
              <div className="relative p-6 h-64 flex flex-col justify-end">
                <div className="mb-4">
                  <Car className="text-[#2ecc71]" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-[#f0f0f0]">Caminhonetes</h3>
                <p className="text-[#c0c0c0] mb-4">
                  Diagramas completos para caminhonetes e utilitários
                </p>
                <Link 
                  to="/catalogo?categoria=caminhonetes" 
                  className="inline-flex items-center text-[#2ecc71] font-medium group-hover:underline"
                >
                  Ver Esquemas <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
              <div className="relative p-6 h-64 flex flex-col justify-end">
                <div className="mb-4">
                  <Truck className="text-[#2ecc71]" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-[#f0f0f0]">Caminhões</h3>
                <p className="text-[#c0c0c0] mb-4">
                  Esquemas elétricos especializados para caminhões e veículos pesados
                </p>
                <Link 
                  to="/catalogo?categoria=caminhoes" 
                  className="inline-flex items-center text-[#2ecc71] font-medium group-hover:underline"
                >
                  Ver Esquemas <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent Schematics Section */}
      <section className="py-16 bg-[#252525]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-[#f0f0f0]">
                Esquemas Recentes
              </h2>
              <p className="text-[#c0c0c0]">
                Confira os esquemas mais recentes adicionados ao nosso catálogo
              </p>
            </div>
            <Link 
              to="/catalogo" 
              className="px-5 py-2 rounded-md bg-[#2ecc71] text-[#1a1a1a] font-medium hover:bg-[#27ae60] transition-colors hidden md:inline-block"
            >
              Ver Todos
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <EsquemaCard 
              id="1"
              title="Esquema Elétrico Completo - Toyota Corolla 2022"
              image="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              brand="Toyota"
              model="Corolla"
              year="2022"
              price={29.90}
            />
            
            <EsquemaCard 
              id="2"
              title="Sistema de Injeção Eletrônica - Honda Civic 2020"
              image="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              brand="Honda"
              model="Civic"
              year="2020"
              price={24.90}
            />
            
            <EsquemaCard 
              id="3"
              title="Esquema Painel e Iluminação - Ford Ranger 2021"
              image="https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              brand="Ford"
              model="Ranger"
              year="2021"
              price={27.90}
            />
            
            <EsquemaCard 
              id="4"
              title="Sistema Completo - Volkswagen Golf 2019"
              image="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              brand="Volkswagen"
              model="Golf"
              year="2019"
              price={22.90}
            />
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link 
              to="/catalogo" 
              className="px-5 py-2 rounded-md bg-[#2ecc71] text-[#1a1a1a] font-medium hover:bg-[#27ae60] transition-colors inline-block"
            >
              Ver Todos
            </Link>
          </div>
        </div>
      </section>
      
      {/* Subscription Section */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#f0f0f0]">
                Planos de Assinatura
              </h2>
              <p className="text-[#c0c0c0] max-w-2xl mx-auto">
                Escolha o plano que melhor atende às suas necessidades e tenha acesso ilimitado aos esquemas elétricos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-[#2a2a2a] rounded-lg border-2 border-transparent hover:border-[#2ecc71] transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-[#f0f0f0]">Mensal</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-4xl font-bold text-[#2ecc71]">R$ 49,90</span>
                    <span className="text-[#c0c0c0] ml-2">/mês</span>
                  </div>
                  <p className="text-[#c0c0c0]">
                    Acesso completo a todos os esquemas elétricos por 30 dias
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="text-[#2ecc71] mr-3" size={20} />
                    <span className="text-[#f0f0f0]">Acesso ilimitado</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[#2ecc71] mr-3" size={20} />
                    <span className="text-[#f0f0f0]">Downloads ilimitados</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[#2ecc71] mr-3" size={20} />
                    <span className="text-[#f0f0f0]">Atualizações de esquemas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[#2ecc71] mr-3" size={20} />
                    <span className="text-[#f0f0f0]">Suporte por e-mail</span>
                  </li>
                </ul>
                
                <Link 
                  to="/assinatura?plano=mensal" 
                  className="block w-full py-3 rounded-md bg-[#2ecc71] text-[#1a1a1a] font-bold text-center hover:bg-[#27ae60] transition-colors"
                >
                  Assinar Agora
                </Link>
              </div>
              
              <div className="p-8 bg-[#2a2a2a] rounded-lg border-2 border-[#2ecc71] relative transform hover:scale-105 transition-all duration-300">
                <div className="absolute -top-4 right-4 bg-[#2ecc71] text-[#1a1a1a] font-bold px-4 py-1 rounded">
                  Mais Popular
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-[#f0f0f0]">Anual</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-4xl font-bold text-[#2ecc71]">R$ 399,90</span>
                    <span className="text-[#c0c0c0] ml-2">/ano</span>
                  </div>
                  <p className="text-[#c0c0c0]">
                    Acesso completo a todos os esquemas por 12 meses, com economia de 33%
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="text-[#2ecc71] mr-3" size={20} />
                    <span className="text-[#f0f0f0]">Acesso ilimitado</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[#2ecc71] mr-3" size={20} />
                    <span className="text-[#f0f0f0]">Downloads ilimitados</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[#2ecc71] mr-3" size={20} />
                    <span className="text-[#f0f0f0]">Atualizações de esquemas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[#2ecc71] mr-3" size={20} />
                    <span className="text-[#f0f0f0]">Suporte prioritário</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[#2ecc71] mr-3" size={20} />
                    <span className="text-[#f0f0f0]">Esquemas exclusivos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[#2ecc71] mr-3" size={20} />
                    <span className="text-[#f0f0f0]">Economia de 33%</span>
                  </li>
                </ul>
                
                <Link 
                  to="/assinatura?plano=anual" 
                  className="block w-full py-3 rounded-md bg-[#2ecc71] text-[#1a1a1a] font-bold text-center hover:bg-[#27ae60] transition-colors"
                >
                  Assinar Agora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-[#252525]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#f0f0f0]">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-[#c0c0c0] max-w-2xl mx-auto">
              Veja o que os profissionais da área automotiva estão dizendo sobre nossos esquemas elétricos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-[#2a2a2a] rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#2ecc71]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              
              <p className="text-[#c0c0c0] italic mb-6">
                "Os esquemas elétricos da EsquemaTec são extremamente detalhados e precisos. Eles me ajudaram a resolver problemas complexos em veículos que outros mecânicos não conseguiam identificar."
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#3a3a3a] rounded-full flex items-center justify-center mr-3">
                  <span className="text-[#2ecc71] font-bold">RM</span>
                </div>
                <div>
                  <p className="font-bold text-[#f0f0f0]">Roberto Mendes</p>
                  <p className="text-sm text-[#c0c0c0]">Mecânico Automotivo</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-[#2a2a2a] rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#2ecc71]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              
              <p className="text-[#c0c0c0] italic mb-6">
                "A assinatura anual vale cada centavo. Acesso a milhares de esquemas com alta qualidade e facilidade de uso. O sistema de busca é excelente e encontro rapidamente o que preciso."
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#3a3a3a] rounded-full flex items-center justify-center mr-3">
                  <span className="text-[#2ecc71] font-bold">CS</span>
                </div>
                <div>
                  <p className="font-bold text-[#f0f0f0]">Carlos Silva</p>
                  <p className="text-sm text-[#c0c0c0]">Eletricista Automotivo</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-[#2a2a2a] rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#2ecc71]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              
              <p className="text-[#c0c0c0] italic mb-6">
                "Como proprietário de uma oficina especializada, a EsquemaTec se tornou uma ferramenta essencial para nossa equipe. Os diagramas são claros e completos, o que agiliza nosso trabalho de diagnóstico."
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#3a3a3a] rounded-full flex items-center justify-center mr-3">
                  <span className="text-[#2ecc71] font-bold">AF</span>
                </div>
                <div>
                  <p className="font-bold text-[#f0f0f0]">Anderson Ferreira</p>
                  <p className="text-sm text-[#c0c0c0]">Proprietário de Oficina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-[#1a1a1a] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#f0f0f0]">
              Pronto para Elevar seu Trabalho com Esquemas Elétricos Precisos?
            </h2>
            <p className="text-xl text-[#c0c0c0] mb-8">
              Junte-se a milhares de profissionais que já confiam em nossos diagramas para diagnósticos rápidos e precisos
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/assinatura" 
                className="px-8 py-3 rounded-md bg-[#2ecc71] text-[#1a1a1a] font-bold text-lg hover:bg-[#27ae60] transition-all transform hover:-translate-y-1 shadow-lg"
              >
                Assinar Agora
              </Link>
              <Link 
                to="/catalogo" 
                className="px-8 py-3 rounded-md bg-transparent border-2 border-[#2ecc71] text-[#2ecc71] font-bold text-lg hover:bg-[#2ecc71]/10 transition-all transform hover:-translate-y-1"
              >
                Explorar Catálogo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;