import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type SearchFormProps = {
  className?: string;
};

const SearchForm: React.FC<SearchFormProps> = ({ className }) => {
  const navigate = useNavigate();
  const [marca, setMarca] = useState<string>('');
  const [modelo, setModelo] = useState<string>('');
  const [ano, setAno] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    if (marca) params.append('marca', marca);
    if (modelo) params.append('modelo', modelo);
    if (ano) params.append('ano', ano);
    
    navigate(`/catalogo?${params.toString()}`);
  };

  return (
    <div className={`bg-[#2a2a2a] p-6 rounded-lg shadow-lg ${className}`}>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="marca" className="block text-sm font-medium text-[#c0c0c0] mb-1">
              Marca
            </label>
            <select 
              id="marca"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              className="w-full bg-[#333] border border-[#444] rounded-md px-3 py-2 text-[#f0f0f0] focus:outline-none focus:ring-2 focus:ring-[#2ecc71] focus:border-transparent"
            >
              <option value="">Selecione a marca</option>
              <option value="toyota">Toyota</option>
              <option value="volkswagen">Volkswagen</option>
              <option value="ford">Ford</option>
              <option value="chevrolet">Chevrolet</option>
              <option value="honda">Honda</option>
              <option value="hyundai">Hyundai</option>
              <option value="fiat">Fiat</option>
              <option value="mercedes">Mercedes-Benz</option>
              <option value="bmw">BMW</option>
              <option value="audi">Audi</option>
              <option value="nissan">Nissan</option>
              <option value="renault">Renault</option>
              <option value="citroen">Citroën</option>
              <option value="peugeot">Peugeot</option>
              <option value="jeep">Jeep</option>
              <option value="mitsubishi">Mitsubishi</option>
              <option value="kia">Kia</option>
              <option value="volvo">Volvo</option>
              <option value="scania">Scania</option>
              <option value="man">MAN</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="modelo" className="block text-sm font-medium text-[#c0c0c0] mb-1">
              Modelo
            </label>
            <input 
              type="text" 
              id="modelo"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
              placeholder="Digite o modelo"
              className="w-full bg-[#333] border border-[#444] rounded-md px-3 py-2 text-[#f0f0f0] placeholder-[#777] focus:outline-none focus:ring-2 focus:ring-[#2ecc71] focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="ano" className="block text-sm font-medium text-[#c0c0c0] mb-1">
              Ano
            </label>
            <select 
              id="ano"
              value={ano}
              onChange={(e) => setAno(e.target.value)}
              className="w-full bg-[#333] border border-[#444] rounded-md px-3 py-2 text-[#f0f0f0] focus:outline-none focus:ring-2 focus:ring-[#2ecc71] focus:border-transparent"
            >
              <option value="">Selecione o ano</option>
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
        </div>
        
        <button 
          type="submit"
          className="w-full flex items-center justify-center px-4 py-3 bg-[#2ecc71] text-[#1a1a1a] font-medium rounded-md hover:bg-[#27ae60] transition-colors"
        >
          <Search className="mr-2" size={20} />
          Buscar Esquemas
        </button>
      </form>
    </div>
  );
};

export default SearchForm;