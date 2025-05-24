import React from 'react';
import { Zap } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2ecc71]">
      <Zap className="text-[#1a1a1a]" size={24} />
    </div>
  );
};

export default Logo;