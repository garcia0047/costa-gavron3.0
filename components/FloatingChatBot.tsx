import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// FAQ responses - knowledge base
const faqDatabase = [
  {
    keywords: ['serviço', 'serviços', 'o que vocês fazem', 'qual é o escopo'],
    response: 'A Costa Gavron oferece três principais serviços:\n\n📌 Branding & Identidade: Criamos identidades visuais completas, logos, guidelines de marca e estratégia de posicionamento.\n\n📌 Web Design & Desenvolvimento: Desenvolvemos websites modernos e responsivos com foco em UX/UI e conversão.\n\n📌 Marketing Digital: Implementamos estratégias de marketing, SEO, social media e publicidade digital.\n\nQual serviço te interessa?'
  },
  {
    keywords: ['branding', 'identidade visual', 'logo', 'marca'],
    response: 'No serviço de Branding & Identidade, criamos:\n✓ Logos e identidade visual\n✓ Paleta de cores estratégica\n✓ Guidelines de marca\n✓ Design de materiais (cartão, envelope, etc.)\n\nTodo projeto é customizado para sua empresa. Quer saber mais detalhes ou o valor?'
  },
  {
    keywords: ['web', 'website', 'site', 'desenvolvimento', 'design web'],
    response: 'Nosso serviço de Web Design & Desenvolvimento inclui:\n✓ Websites responsivos (mobile, tablet, desktop)\n✓ Design moderno e intuitivo\n✓ Otimização para SEO\n✓ Integração com ferramentas (formulários, chat, etc.)\n✓ Hospedagem e manutenção\n\nOs sites são desenvolvidos com tecnologias atuais como React, TypeScript e Tailwind CSS. Interessado em criar seu site?'
  },
  {
    keywords: ['marketing', 'digital', 'seo', 'ads', 'publicidade', 'redes sociais', 'social'],
    response: 'Em Marketing Digital, oferecemos:\n✓ Estratégia de conteúdo e social media\n✓ Otimização SEO (Google)\n✓ Campanhas de publicidade (Google Ads, Meta Ads)\n✓ Análise de dados e relatórios\n✓ Email marketing\n\nAjudamos sua empresa a crescer online com resultados mensuráveis.'
  },
  {
    keywords: ['preço', 'valor', 'custo', 'quanto custa', 'tabela', 'orçamento'],
    response: 'Os valores variam conforme a complexidade do projeto:\n\n🎯 Branding básico: A partir de R$ 2.000\n🎯 Website simples: A partir de R$ 5.000\n🎯 Campanhas de marketing: A partir de R$ 1.500/mês\n\nCada projeto é único, então oferecemos uma proposta personalizada. Prefere agendar uma reunião? Entre em contato: (41) 99895-1738 ou pelo formulário de contato.'
  },
  {
    keywords: ['contato', 'agendar', 'reunião', 'conversar', 'falar'],
    response: 'Adoraríamos conversar com você! 📞\n\n📱 WhatsApp: (41) 99895-1738\n📧 Email: costagavron@gmail.com\n📍 Localização: Curitiba, PR\n🕒 Seg-Sex: 9h às 18h\n\nVocê pode:\n✓ Enviar uma mensagem pelo WhatsApp\n✓ Preencher o formulário de contato do site\n✓ Nos chamar por aqui mesmo!\n\nEstamos prontos para ouvir sua ideia!'
  },
  {
    keywords: ['prazo', 'quanto tempo', 'demora', 'entrega'],
    response: 'Os prazos dependem do escopo:\n\n⏱️ Logo/Branding: 2-4 semanas\n⏱️ Website simples: 4-8 semanas\n⏱️ Website complexo: 8-12 semanas\n⏱️ Campanha de marketing: inicia em 1 semana\n\nDefinimos prazos realistas na proposta para garantir qualidade. Qual projeto você tem em mente?'
  },
  {
    keywords: ['portfólio', 'casos', 'trabalhos', 'projetos'],
    response: 'Você pode ver nossos trabalhos na página Portfólio do site! 🎨\n\nLá estão alguns dos projetos que fizemos:\n✓ Branding completo para agências e startups\n✓ Websites de alto impacto visual\n✓ Campanhas digitais com ótimos resultados\n\nClique em "Portfólio" no menu para conferir!'
  },
  {
    keywords: ['onde fica', 'localização', 'endereço', 'curitiba'],
    response: 'Somos baseados em Curitiba, PR! 🏙️\n\n📍 Localização: Curitiba, State of Paraná\n\nTrabalhamos com clientes locais e remotos. Oferecemos:\n✓ Reuniões presenciais em Curitiba\n✓ Atendimento remoto via videochamada\n✓ Consultoria online\n\nQuer agendar uma conversa?'
  }
];

export const FloatingChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    for (const faq of faqDatabase) {
      for (const keyword of faq.keywords) {
        if (lowerInput.includes(keyword)) {
          return faq.response;
        }
      }
    }
    
    return 'Desculpe, não encontrei uma resposta específica para sua pergunta. 🤔\n\nPosso ajudar com informações sobre:\n• Nossos serviços (Branding, Web Design, Marketing Digital)\n• Preços e prazos\n• Como agendar uma reunião\n• Nosso portfólio\n\nOu prefere falar com alguém? WhatsApp: (41) 99895-1738';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate a small delay for better UX
    setTimeout(() => {
      const response = findResponse(input);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#C9A962] text-[#0A0A0A] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        title="Assistente de IA"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Janela de chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-zinc-200 overflow-hidden">
          {/* Header */}
          <div className="bg-[#C9A962] text-[#0A0A0A] p-4 font-bold text-center">
            Costa Gavron Assistant
          </div>

          {/* Mensagens */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50">
            {messages.length === 0 && (
              <div className="text-center">
                <p className="text-zinc-600 text-sm">👋 Olá! Bem-vindo à Costa Gavron!</p>
                <p className="text-zinc-500 text-xs mt-3">Posso ajudar com informações sobre nossos serviços, preços, prazos ou como agendar uma reunião.</p>
                <p className="text-zinc-400 text-xs mt-3 font-semibold">Pergunte-me sobre:</p>
                <div className="text-xs text-zinc-500 mt-2 space-y-1">
                  <p>• Serviços e portfólio</p>
                  <p>• Preços e prazos</p>
                  <p>• Como contactar</p>
                </div>
              </div>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-[#C9A962] text-[#0A0A0A] rounded-br-none'
                      : 'bg-zinc-200 text-zinc-900 rounded-bl-none'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-200 text-zinc-900 px-4 py-2 rounded-lg text-sm rounded-bl-none">
                  <span className="inline-block animate-pulse">Digitando...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-zinc-200 p-4 flex gap-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua pergunta..."
              className="flex-1 bg-zinc-100 border border-zinc-300 p-3 rounded-lg text-sm focus:outline-none focus:border-[#C9A962] transition-colors"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#C9A962] text-[#0A0A0A] p-3 rounded-lg hover:bg-[#B8935A] transition-colors disabled:opacity-50 font-bold"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default FloatingChatBot;

