import React from 'react';

const FaqPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Perguntas Frequentes
        </h1>
        <div className="space-y-6">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Como funciona o serviço?
              </h3>
              <div className="mt-2 text-sm text-gray-500">
                <p>
                  Explicação detalhada sobre o funcionamento do serviço...
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Qual é o prazo de entrega?
              </h3>
              <div className="mt-2 text-sm text-gray-500">
                <p>
                  Informações sobre prazos de entrega...
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Como posso entrar em contato?
              </h3>
              <div className="mt-2 text-sm text-gray-500">
                <p>
                  Detalhes sobre canais de contato...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;