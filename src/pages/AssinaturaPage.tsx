import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Info, ChevronDown, ChevronUp } from 'lucide-react';

const AssinaturaPage: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const planoSelecionado = params.get('plano') || 'anual';
  
  const [faqOpen, setFaqOpen] = useState<{ [key: number]: boolean }>({
    0: true
  });
  
  const toggleFaq = (index: number) => {
    setFaqOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  const faqs = [
    {
      pergunta: 'O que está incluído na assinatura?',
      resposta: 'A assinatura inclui acesso ilimitado a todos os esquemas elétricos em nossa biblioteca, atualizações constantes de novos diagramas, possibilidade de download sem limites e suporte técnico.'
    },
    {
      pergunta: 'Posso cancelar minha assinatura a qualquer momento?',
      resposta: 'Sim, você pode cancelar sua assinatura a qualquer momento através da sua área de cliente. Após o cancelamento, você terá acesso até o final do período pago.'
    },
    {
      pergunta: 'Como posso acessar os esquemas após a compra?',
      resposta: 'Após a confirmação do pagamento, os esquemas ficarão disponíveis imediatamente na sua área de cliente para visualização e download.'
    },
    {
      pergunta: 'Quais formatos de arquivo são disponibilizados?',
      resposta: 'Todos os esquemas elétricos são disponibilizados em formato PDF de alta resolução, permitindo zoom detalhado sem perda de qualidade.'
    },
    {
      pergunta: 'Vocês têm esquemas para todos os modelos de veículos?',
      resposta: 'Nossa biblioteca é bastante extensa e cobre a maioria dos modelos populares no Brasil. Estamos constantemente atualizando e adicionando novos esquemas. Se você não encontrar um modelo específico, entre em contato conosco.'
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-[#1a1a1a] min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#f0f0f0]">
              Planos de Assinatura
            </h1>
            <p className="text-xl text-[#c0c0c0]">
              Escolha o plano ideal e tenha acesso a milhares de esquemas elétricos automotivos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className={`p-8 bg-[#2a2a2a] rounded-lg border-2 ${planoSelecionado === 'mensal' ? 'border-[#2ecc71]' : 'border-transparent'} hover:border-[#2ecc71] transition-all duration-300`}>
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
                  <span className="text-[#f0f0f0]">Acesso ilimitado a todos os esquemas</span>
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
                <li className="flex items-center">
                  <CheckCircle className="text-[#2ecc71] mr-3" size={20} />
                  <span className="text-[#f0f0f0]">Cancele quando quiser</span>
                </li>
              </ul>
              
              <Link 
                to="/checkout?plano=mensal" 
                className={`block w-full py-3 rounded-md ${planoSelecionado === 'mensal' ? 'bg-[#2ecc71] text-[#1a1a1a]' : 'bg-[#333] text-[#f0f0f0]'} font-bold text-center hover:bg-[#27ae60] hover:text-[#1a1a1a] transition-colors`}
              >
                {planoSelecionado === 'mensal' ? 'Assinar Agora' : 'Selecionar Plano'}
              </Link>
            </div>
            
            <div className={`p-8 bg-[#2a2a2a] rounded-lg border-2 ${planoSelecionado === 'anual' ? 'border-[#2ecc71]' : 'border-transparent'} hover:border-[#2ecc71] transition-all duration-300 relative`}>
              <div className="absolute -top-4 right-4 bg-[#2ecc71] text-[#1a1a1a] font-bold px-4 py-1 rounded">
                Mais Popular
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-[#f0f0f0]">Anual</h3>
                <div className="flex items-end mb-2">
                  <span className="text-4xl font-bold text-[#2ecc71]">R$ 399,90</span>
                  <span className="text-[#c0c0c0] ml-2">/ano</span>
                </div>
                <p className="text-[#2ecc71] font-medium mb-2">
                  Economia de 33% em relação ao plano mensal
                </p>
                <p className="text-[#c0c0c0]">
                  Acesso completo a todos os esquemas por 12 meses
                </p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-[#2ecc71] mr-3" size={20} />
                  <span className="text-[#f0f0f0]">Acesso ilimitado a todos os esquemas</span>
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
                to="/checkout?plano=anual" 
                className={`block w-full py-3 rounded-md ${planoSelecionado === 'anual' ? 'bg-[#2ecc71] text-[#1a1a1a]' : 'bg-[#333] text-[#f0f0f0]'} font-bold text-center hover:bg-[#27ae60] hover:text-[#1a1a1a] transition-colors`}
              >
                {planoSelecionado === 'anual' ? 'Assinar Agora' : 'Selecionar Plano'}
              </Link>
            </div>
          </div>
          
          <div className="bg-[#2a2a2a] rounded-lg p-6 mb-16">
            <div className="flex items-start">
              <Info className="text-[#2ecc71] mr-3 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-[#f0f0f0] mb-2">
                  Por que assinar a EsquemaTec?
                </h3>
                <p className="text-[#c0c0c0]">
                  Nossa biblioteca contém milhares de esquemas elétricos automotivos detalhados e precisos, cobrindo carros, caminhonetes e caminhões das principais marcas. Com uma assinatura, você tem acesso ilimitado a todos eles, com a possibilidade de baixá-los sempre que precisar. Além disso, nossa equipe está constantemente atualizando e adicionando novos esquemas para garantir que você tenha sempre as informações mais recentes.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#f0f0f0] mb-6 text-center">
              Perguntas Frequentes
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-[#2a2a2a] rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full text-left p-4 flex items-center justify-between focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-lg font-medium text-[#f0f0f0]">{faq.pergunta}</h3>
                    {faqOpen[index] ? (
                      <ChevronUp className="text-[#2ecc71]" size={20} />
                    ) : (
                      <ChevronDown className="text-[#2ecc71]" size={20} />
                    )}
                  </button>
                  
                  {faqOpen[index] && (
                    <div className="p-4 pt-0 text-[#c0c0c0] border-t border-[#3a3a3a]">
                      {faq.resposta}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-[#2a2a2a] rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-[#f0f0f0] mb-4">
              Pronto para começar?
            </h2>
            <p className="text-[#c0c0c0] mb-6 max-w-2xl mx-auto">
              Escolha o plano que melhor atende às suas necessidades e tenha acesso imediato a milhares de esquemas elétricos automotivos de alta qualidade
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/checkout?plano=mensal" 
                className="px-6 py-3 rounded-md bg-[#333] text-[#f0f0f0] font-medium hover:bg-[#444] transition-colors"
              >
                Assinar Plano Mensal
              </Link>
              <Link 
                to="/checkout?plano=anual" 
                className="px-6 py-3 rounded-md bg-[#2ecc71] text-[#1a1a1a] font-bold hover:bg-[#27ae60] transition-colors"
              >
                Assinar Plano Anual
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssinaturaPage;