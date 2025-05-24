import React from 'react';

const TermosPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Termos de Uso
        </h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="prose max-w-none">
              <h2>1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e usar este site, você aceita e concorda em cumprir estes termos e condições de uso.
              </p>

              <h2>2. Uso do Serviço</h2>
              <p>
                O serviço deve ser usado de acordo com as leis aplicáveis e estas diretrizes.
              </p>

              <h2>3. Conta do Usuário</h2>
              <p>
                Você é responsável por manter a confidencialidade de sua conta e senha.
              </p>

              <h2>4. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo deste site é protegido por direitos autorais e outras leis de propriedade intelectual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermosPage;