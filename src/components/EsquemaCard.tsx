import React from 'react';
import { Link } from 'react-router-dom';
import { Car, ShoppingCart, Download } from 'lucide-react';

interface EsquemaCardProps {
  id: string;
  title: string;
  image: string;
  brand: string;
  model: string;
  year: string;
  price: number;
  isUserSubscribed?: boolean;
}

const EsquemaCard: React.FC<EsquemaCardProps> = ({
  id,
  title,
  image,
  brand,
  model,
  year,
  price,
  isUserSubscribed = false
}) => {
  return (
    <div className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-0 left-0 bg-[#2ecc71] text-[#1a1a1a] font-medium text-xs px-2 py-1 rounded-br-md">
          {brand}
        </div>
      </div>
      
      <div className="p-4">
        <Link to={`/esquema/${id}`} className="block">
          <h3 className="text-lg font-semibold text-[#f0f0f0] mb-2 line-clamp-2 hover:text-[#2ecc71] transition-colors">
            {title}
          </h3>
        </Link>
        
        <div className="flex items-center text-sm text-[#c0c0c0] mb-3">
          <Car size={16} className="mr-1" />
          <span>{model} • {year}</span>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-[#2ecc71]">
            R$ {price.toFixed(2).replace('.', ',')}
          </span>
          
          {isUserSubscribed ? (
            <span className="text-xs text-[#c0c0c0]">Incluído na assinatura</span>
          ) : null}
        </div>
        
        <div className="flex gap-2">
          {isUserSubscribed ? (
            <Link 
              to={`/esquema/${id}/download`}
              className="flex-1 flex items-center justify-center px-3 py-2 bg-[#2ecc71] text-[#1a1a1a] font-medium rounded hover:bg-[#27ae60] transition-colors"
            >
              <Download size={18} className="mr-1" />
              Baixar
            </Link>
          ) : (
            <>
              <Link 
                to={`/esquema/${id}`}
                className="flex-1 flex items-center justify-center px-3 py-2 bg-[#333] text-[#f0f0f0] font-medium rounded hover:bg-[#444] transition-colors"
              >
                Detalhes
              </Link>
              <Link 
                to={`/checkout?esquema=${id}`}
                className="flex-1 flex items-center justify-center px-3 py-2 bg-[#2ecc71] text-[#1a1a1a] font-medium rounded hover:bg-[#27ae60] transition-colors"
              >
                <ShoppingCart size={18} className="mr-1" />
                Comprar
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EsquemaCard;