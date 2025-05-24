import React from 'react';

const PrivacidadePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Política de Privacidade
        </h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="prose max-w-none">
              <h2>1. Coleta de Dados</h2>
              <p>
                Explicação sobre quais dados pessoais coletamos e como são utilizados.
              </p>

              <h2>2. Uso das Informações</h2>
              <p>
                Detalhamento sobre como utilizamos as informações coletadas.
              </p>

              <h2>3. Proteção de Dados</h2>
              <p>
                Informações sobre as medidas de segurança implementadas para proteger os dados dos usuários.
              </p>

              <h2>4. Cookies</h2>
              <p>
                Explicação sobre o uso de cookies e tecnologias similares.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacidadePage;