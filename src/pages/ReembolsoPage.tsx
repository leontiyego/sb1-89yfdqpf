import React from 'react';

const ReembolsoPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Política de Reembolso
        </h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="prose max-w-none">
              <h2>Prazo para Solicitação</h2>
              <p>
                Informações sobre o prazo para solicitar reembolso após a compra.
              </p>

              <h2>Condições para Reembolso</h2>
              <p>
                Detalhamento das situações em que o reembolso é aplicável.
              </p>

              <h2>Processo de Solicitação</h2>
              <p>
                Passo a passo sobre como solicitar um reembolso.
              </p>

              <h2>Prazo de Processamento</h2>
              <p>
                Informações sobre o tempo de processamento do reembolso após a solicitação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReembolsoPage;