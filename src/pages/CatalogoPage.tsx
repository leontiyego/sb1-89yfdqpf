import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Filter, SlidersHorizontal } from 'lucide-react';
import EsquemaCard from '../components/EsquemaCard';
import SearchForm from '../components/SearchForm';

// Dados mockados para exemplo
const esquemas = [
  {
    id: '1',
    title: 'Esquema Elétrico Completo - Toyota Corolla 2022',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    brand: 'Toyota',
    model: 'Corolla',
    year: '2022',
    price: 29.90,
    category: 'carros'
  },
  {
    id: '2',
    title: 'Sistema de Injeção Eletrônica - Honda Civic 2020',
    image: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    brand: 'Honda',
    model: 'Civic',
    year: '2020',
    price: 24.90,
    category: 'carros'
  },
  {
    id: '3',
    title: 'Esquema Painel e Iluminação - Ford Ranger 2021',
    image: 'https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    brand: 'Ford',
    model: 'Ranger',
    year: '2021',
    price: 27.90,
    category: 'caminhonetes'
  },
  {
    id: '4',
    title: 'Sistema Completo - Volkswagen Golf 2019',
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    brand: 'Volkswagen',
    model: 'Golf',
    year: '2019',
    price: 22.90,
    category: 'carros'
  },
  {
    id: '5',
    title: 'Diagrama Elétrico - Scania R450 2020',
    image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    brand: 'Scania',
    model: 'R450',
    year: '2020',
    price: 39.90,
    category: 'caminhoes'
  },
  {
    id: '6',
    title: 'Sistema de Partida - Mercedes-Benz Actros 2022',
    image: 'https://images.pexels.com/photos/2659939/pexels-photo-2659939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    brand: 'Mercedes-Benz',
    model: 'Actros',
    year: '2022',
    price: 34.90,
    category: 'caminhoes'
  },
  {
    id: '7',
    title: 'Esquema Completo - Chevrolet S10 2021',
    image: 'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    brand: 'Chevrolet',
    model: 'S10',
    year: '2021',
    price: 29.90,
    category: 'caminhonetes'
  },
  {
    id: '8',
    title: 'Sistema Elétrico - Fiat Toro 2022',
    image: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    brand: 'Fiat',
    model: 'Toro',
    year: '2022',
    price: 27.90,
    category: 'caminhonetes'
  }
];

const CatalogoPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredEsquemas, setFilteredEsquemas] = useState(esquemas);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    categoria: '',
    marca: '',
    modelo: '',
    ano: '',
    precoMin: '',
    precoMax: ''
  });
  
  // Parse query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    
    const newFilters = {
      categoria: params.get('categoria') || '',
      marca: params.get('marca') || '',
      modelo: params.get('modelo') || '',
      ano: params.get('ano') || '',
      precoMin: params.get('precoMin') || '',
      precoMax: params.get('precoMax') || ''
    };
    
    setFilters(newFilters);
    
    // Apply filters
    let result = [...esquemas];
    
    if (newFilters.categoria) {
      result = result.filter(item => item.category === newFilters.categoria);
    }
    
    if (newFilters.marca) {
      result = result.filter(item => item.brand.toLowerCase() === newFilters.marca.toLowerCase());
    }
    
    if (newFilters.modelo) {
      result = result.filter(item => item.model.toLowerCase().includes(newFilters.modelo.toLowerCase()));
    }
    
    if (newFilters.ano) {
      result = result.filter(item => item.year === newFilters.ano);
    }
    
    if (newFilters.precoMin) {
      result = result.filter(item => item.price >= parseFloat(newFilters.precoMin));
    }
    
    if (newFilters.precoMax) {
      result = result.filter(item => item.price <= parseFloat(newFilters.precoMax));
    }
    
    setFilteredEsquemas(result);
  }, [location.search]);
  
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  
  const applyFilters = () => {
    const params = new URLSearchParams();
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params.append(key, value);
      }
    });
    
    navigate(`/catalogo?${params.toString()}`);
    
    if (window.innerWidth < 768) {
      setIsFilterOpen(false);
    }
  };
  
  const clearFilters = () => {
    setFilters({
      categoria: '',
      marca: '',
      modelo: '',
      ano: '',
      precoMin: '',
      precoMax: ''
    });
    
    navigate('/catalogo');
    
    if (window.innerWidth < 768) {
      setIsFilterOpen(false);
    }
  };

  return (
    <div className="pt-24 pb-16 bg-[#1a1a1a] min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#f0f0f0] mb-4">Catálogo de Esquemas</h1>
          <p className="text-[#c0c0c0]">
            Encontre o esquema elétrico ideal para o seu veículo
          </p>
        </div>
        
        <div className="mb-8">
          <SearchForm className="mb-4" />
          
          <div className="md:hidden">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full flex items-center justify-center px-4 py-2 bg-[#2a2a2a] text-[#f0f0f0] rounded-md"
            >
              <Filter size={18} className="mr-2" />
              {isFilterOpen ? 'Ocultar Filtros' : 'Mostrar Filtros'}
            </button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar de Filtros */}
          <div className={`md:w-1/4 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
            <div className="bg-[#2a2a2a] rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#f0f0f0]">Filtros</h2>
                <SlidersHorizontal size={20} className="text-[#2ecc71]" />
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#c0c0c0] mb-2">
                    Categoria
                  </label>
                  <select
                    name="categoria"
                    value={filters.categoria}
                    onChange={handleFilterChange}
                    className="w-full bg-[#333] border border-[#444] rounded-md px-3 py-2 text-[#f0f0f0] focus:outline-none focus:ring-2 focus:ring-[#2ecc71] focus:border-transparent"
                  >
                    <option value="">Todas as Categorias</option>
                    <option value="carros">Carros</option>
                    <option value="caminhonetes">Caminhonetes</option>
                    <option value="caminhoes">Caminhões</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#c0c0c0] mb-2">
                    Marca
                  </label>
                  <select
                    name="marca"
                    value={filters.marca}
                    onChange={handleFilterChange}
                    className="w-full bg-[#333] border border-[#444] rounded-md px-3 py-2 text-[#f0f0f0] focus:outline-none focus:ring-2 focus:ring-[#2ecc71] focus:border-transparent"
                  >
                    <option value="">Todas as Marcas</option>
                    <option value="toyota">Toyota</option>
                    <option value="honda">Honda</option>
                    <option value="ford">Ford</option>
                    <option value="volkswagen">Volkswagen</option>
                    <option value="chevrolet">Chevrolet</option>
                    <option value="fiat">Fiat</option>
                    <option value="mercedes-benz">Mercedes-Benz</option>
                    <option value="scania">Scania</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#c0c0c0] mb-2">
                    Modelo
                  </label>
                  <input
                    type="text"
                    name="modelo"
                    value={filters.modelo}
                    onChange={handleFilterChange}
                    placeholder="Digite o modelo"
                    className="w-full bg-[#333] border border-[#444] rounded-md px-3 py-2 text-[#f0f0f0] placeholder-[#777] focus:outline-none focus:ring-2 focus:ring-[#2ecc71] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#c0c0c0] mb-2">
                    Ano
                  </label>
                  <select
                    name="ano"
                    value={filters.ano}
                    onChange={handleFilterChange}
                    className="w-full bg-[#333] border border-[#444] rounded-md px-3 py-2 text-[#f0f0f0] focus:outline-none focus:ring-2 focus:ring-[#2ecc71] focus:border-transparent"
                  >
                    <option value="">Todos os Anos</option>
                    {[...Array(25)].map((_, i) => {
                      const year = 2024 - i;
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#c0c0c0] mb-2">
                    Faixa de Preço
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      name="precoMin"
                      value={filters.precoMin}
                      onChange={handleFilterChange}
                      placeholder="Mín"
                      className="w-1/2 bg-[#333] border border-[#444] rounded-md px-3 py-2 text-[#f0f0f0] placeholder-[#777] focus:outline-none focus:ring-2 focus:ring-[#2ecc71] focus:border-transparent"
                    />
                    <span className="text-[#c0c0c0]">até</span>
                    <input
                      type="number"
                      name="precoMax"
                      value={filters.precoMax}
                      onChange={handleFilterChange}
                      placeholder="Máx"
                      className="w-1/2 bg-[#333] border border-[#444] rounded-md px-3 py-2 text-[#f0f0f0] placeholder-[#777] focus:outline-none focus:ring-2 focus:ring-[#2ecc71] focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 pt-4">
                  <button
                    onClick={applyFilters}
                    className="w-full px-4 py-2 bg-[#2ecc71] text-[#1a1a1a] font-medium rounded-md hover:bg-[#27ae60] transition-colors"
                  >
                    Aplicar Filtros
                  </button>
                  <button
                    onClick={clearFilters}
                    className="w-full px-4 py-2 bg-transparent border border-[#444] text-[#c0c0c0] rounded-md hover:bg-[#333] transition-colors"
                  >
                    Limpar Filtros
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Resultados */}
          <div className="md:w-3/4">
            <div className="bg-[#2a2a2a] rounded-lg p-6 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#f0f0f0]">
                    {filteredEsquemas.length} esquemas encontrados
                  </h3>
                  {Object.values(filters).some(v => v) && (
                    <p className="text-sm text-[#c0c0c0]">
                      Filtrando por: {Object.entries(filters).filter(([_, v]) => v).map(([k, v]) => `${k}: ${v}`).join(', ')}
                    </p>
                  )}
                </div>
                
                <div className="flex items-center">
                  <label className="text-sm text-[#c0c0c0] mr-2">Ordenar por:</label>
                  <select className="bg-[#333] border border-[#444] rounded-md px-3 py-2 text-[#f0f0f0] focus:outline-none focus:ring-2 focus:ring-[#2ecc71] focus:border-transparent">
                    <option value="relevancia">Relevância</option>
                    <option value="recentes">Mais Recentes</option>
                    <option value="preco_asc">Menor Preço</option>
                    <option value="preco_desc">Maior Preço</option>
                  </select>
                </div>
              </div>
            </div>
            
            {filteredEsquemas.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEsquemas.map((esquema) => (
                  <EsquemaCard
                    key={esquema.id}
                    id={esquema.id}
                    title={esquema.title}
                    image={esquema.image}
                    brand={esquema.brand}
                    model={esquema.model}
                    year={esquema.year}
                    price={esquema.price}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-[#2a2a2a] rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold text-[#f0f0f0] mb-2">
                  Nenhum esquema encontrado
                </h3>
                <p className="text-[#c0c0c0] mb-4">
                  Não encontramos esquemas que correspondam aos filtros selecionados.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 bg-[#2ecc71] text-[#1a1a1a] font-medium rounded-md hover:bg-[#27ae60] transition-colors"
                >
                  Limpar Filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogoPage;