import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// Knowledge base with FAQ responses
const knowledgeBase = [
  {
    keywords: ['serviço', 'serviços', 'o que vocês fazem', 'qual é o escopo', 'oferece'],
    response: 'A Costa Gavron oferece três principais serviços:\n\n📌 **Branding & Identidade**: Criamos identidades visuais completas, logos, guidelines de marca e estratégia de posicionamento.\n\n📌 **Web Design & Desenvolvimento**: Desenvolvemos websites modernos, responsivos e otimizados com foco em conversão.\n\n📌 **Marketing Digital**: Implementamos estratégias de marketing, SEO, social media e publicidade digital.\n\nQual serviço te interessa?'
  },
  {
    keywords: ['branding', 'identidade visual', 'logo', 'marca'],
    response: 'No **Branding & Identidade** criamos:\n✓ Logos profissionais\n✓ Paleta de cores estratégica\n✓ Guidelines e manual de marca\n✓ Design de materiais (cartão, envelope, papel timbrado)\n✓ Estratégia de posicionamento\n\nCada projeto é customizado. Quer agendar uma reunião? WhatsApp: (41) 99895-1738'
  },
  {
    keywords: ['web', 'website', 'site', 'desenvolvimento', 'design web', 'página'],
    response: 'No **Web Design & Desenvolvimento** oferecemos:\n✓ Websites responsivos (mobile, tablet, desktop)\n✓ Design moderno e intuitivo\n✓ Otimização para SEO\n✓ Integração com ferramentas\n✓ Hospedagem e manutenção\n\nUsamos tecnologias atuais: React, TypeScript, Tailwind CSS. Pronto para criar seu site?'
  },
  {
    keywords: ['marketing', 'digital', 'seo', 'ads', 'publicidade', 'redes sociais', 'social', 'conteúdo'],
    response: 'Em **Marketing Digital** oferecemos:\n✓ Estratégia de conteúdo e social media\n✓ SEO otimização para Google\n✓ Campanhas de publicidade (Google Ads, Meta Ads)\n✓ Análise de dados e relatórios\n✓ Email marketing\n\nAjudamos sua empresa crescer online com resultados mensuráveis.'
  },
  {
    keywords: ['preço', 'valor', 'custo', 'quanto custa', 'tabela', 'orçamento'],
    response: 'Os valores variam conforme a complexidade:\n\n🎯 **Branding básico**: A partir de R$ 2.000\n🎯 **Website simples**: A partir de R$ 5.000\n🎯 **Marketing Digital**: A partir de R$ 1.500/mês\n\nCada projeto é único! Oferecemos proposta personalizada. Entre em contato: (41) 99895-1738'
  },
  {
    keywords: ['contato', 'agendar', 'reunião', 'conversar', 'falar', 'como falar', 'telefone', 'email'],
    response: 'Adoraríamos conversar com você! 📞\n\n📱 **WhatsApp**: (41) 99895-1738\n📧 **Email**: costagavron@gmail.com\n📍 **Localização**: Curitiba, PR\n🕒 **Horário**: Seg-Sex 9h às 18h\n\nVocê pode:\n✓ Enviar mensagem pelo WhatsApp\n✓ Preencher o formulário de contato do site\n✓ Chamar por aqui mesmo!\n\nEstamos prontos para ouvir sua ideia!'
  },
  {
    keywords: ['prazo', 'quanto tempo', 'demora', 'entrega', 'quanto demora'],
    response: 'Os prazos dependem do escopo:\n\n⏱️ **Logo/Branding**: 2-4 semanas\n⏱️ **Website simples**: 4-8 semanas\n⏱️ **Website complexo**: 8-12 semanas\n⏱️ **Campanha marketing**: inicia em 1 semana\n\nDefinimos prazos realistas para garantir qualidade. Qual projeto você tem em mente?'
  },
  {
    keywords: ['portfólio', 'casos', 'trabalhos', 'projetos', 'exemplos', 'portfolio'],
    response: 'Confira nossos trabalhos na página **Portfólio** do site! 🎨\n\nLá você encontra:\n✓ Branding completo para agências e startups\n✓ Websites de alto impacto visual\n✓ Campanhas digitais com ótimos resultados\n\nClique em "Portfólio" no menu para ver nossos projetos!'
  },
  {
    keywords: ['onde fica', 'localização', 'endereço', 'curitiba', 'local'],
    response: 'Somos baseados em **Curitiba, PR**! 🏙️\n\n📍 **Localização**: Curitiba, Paraná, Brasil\n\nTrabalhamos com clientes locais e remotos:\n✓ Reuniões presenciais em Curitiba\n✓ Atendimento remoto via videochamada\n✓ Consultoria online\n\nQuer agendar uma conversa?'
  },
  {
    keywords: ['processo', 'como funciona', 'etapas', 'fluxo', 'metodologia'],
    response: 'Nosso processo é simples e eficiente:\n\n1️⃣ **Briefing**: Entendemos suas necessidades\n2️⃣ **Proposta**: Apresentamos timeline e investimento\n3️⃣ **Execução**: Desenvolvemos com qualidade\n4️⃣ **Revisões**: Ajustes conforme feedback\n5️⃣ **Entrega**: Projeto finalizado e pronto!\n\nQuero começar! WhatsApp: (41) 99895-1738'
  },
  {
    keywords: ['tecnologia', 'ferramentas', 'stack', 'linguagem'],
    response: 'Usamos as melhores tecnologias atuais:\n\n💻 **Frontend**: React, TypeScript, Tailwind CSS, Next.js\n⚙️ **Backend**: Node.js, Python, Firebase\n📱 **Mobile**: React Native (quando necessário)\n🎨 **Design**: Figma, Adobe Creative Suite\n🔧 **DevOps**: GitHub, Vercel, AWS\n\nSempre buscamos as melhores soluções para cada projeto!'
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

  const findAnswer = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();

    for (const item of knowledgeBase) {
      for (const keyword of item.keywords) {
        if (lowerInput.includes(keyword)) {
          return item.response;
        }
      }
    }

    return 'Ótima pergunta! 🤔\n\nNão tenho uma resposta exata para isso, mas posso ajudar com:\n• Serviços (Branding, Web Design, Marketing)\n• Preços e prazos\n• Como agendar reunião\n• Nosso portfólio\n• Tecnologias que usamos\n\nOu prefere falar com alguém? WhatsApp: (41) 99895-1738';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simular pequeno delay para melhor UX
    setTimeout(() => {
      const response = findAnswer(input);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 300);
  };

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#C9A962] text-[#0A0A0A] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        title="Assistente da Costa Gavron"
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
                <p className="text-zinc-600 text-sm font-semibold">👋 Olá! Bem-vindo!</p>
                <p className="text-zinc-500 text-xs mt-3">Sou assistente da Costa Gavron. Posso responder suas dúvidas sobre:</p>
                <div className="text-xs text-zinc-500 mt-3 space-y-1 text-left">
                  <p>✓ Serviços de Branding, Web Design e Marketing</p>
                  <p>✓ Preços e prazos</p>
                  <p>✓ Como agendar uma reunião</p>
                  <p>✓ Nosso portfólio e tecnologias</p>
                </div>
                <p className="text-zinc-400 text-xs mt-4">Digite sua pergunta abaixo!</p>
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
                      ? 'bg-[#C9A962] text-[#0A0A0A] rounded-br-none font-medium'
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



