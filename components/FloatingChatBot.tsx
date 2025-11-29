import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const FloatingChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const GEMINI_API_KEY = 'AIzaSyBTA2KF-5DtPi_QD3eVF3_Ij5PYdbDnFoA';

  // Sistema de FAQ local como fallback
  const getFallbackResponse = (question: string): string => {
    const q = question.toLowerCase();
    
    if (q.includes('preço') || q.includes('valor') || q.includes('quanto custa') || q.includes('plano')) {
      return `💰 **Nossos Planos:**\n\n📦 **Start Social** - R$ 600 a R$ 900/mês\n• 8 posts + 12 stories mensais\n• Ideal para quem está começando\n\n🚀 **Growth Performance** - R$ 1.200/mês\n• Tudo do Start + Gestão de Meta Ads\n• Até 2 campanhas mensais\n\n⭐ **Authority Max** - R$ 1.800 a R$ 2.500/mês\n• 12-16 posts + 20 stories\n• Landing Page + Copywriting\n• Suporte prioritário\n\n📱 Para um orçamento personalizado: (41) 99895-1738`;
    }
    
    if (q.includes('serviço') || q.includes('o que faz') || q.includes('trabalha')) {
      return `🎨 **Nossos Serviços:**\n\n• Branding & Identidade Visual\n• Web Design & Desenvolvimento\n• Gestão de Mídias Sociais\n• Marketing Digital Estratégico\n• Tráfego Pago (Meta Ads)\n• Landing Pages\n\n💬 Quer saber mais sobre algum serviço específico? Me pergunte ou fale direto no WhatsApp: (41) 99895-1738`;
    }
    
    if (q.includes('contato') || q.includes('whatsapp') || q.includes('falar') || q.includes('telefone')) {
      return `📱 **Entre em contato:**\n\nWhatsApp: (41) 99895-1738\n🌐 Site: costa-gavron.com\n\nEstamos prontos para atender você! 🚀`;
    }
    
    if (q.includes('oi') || q.includes('olá') || q.includes('hello') || q.includes('hi')) {
      return `👋 Olá! Bem-vindo à Costa Gavron!\n\nSomos uma agência especializada em marketing digital e branding. Como posso ajudar você hoje?\n\n💡 Posso falar sobre:\n• Nossos serviços\n• Planos e preços\n• Como podemos ajudar seu negócio\n\nOu se preferir, fale direto no WhatsApp: (41) 99895-1738`;
    }
    
    return `Obrigado pela sua mensagem! 😊\n\nPara melhor atendê-lo, entre em contato:\n\n📱 WhatsApp: (41) 99895-1738\n🌐 Site: costa-gavron.com\n\nOu me pergunte sobre:\n• Serviços\n• Planos e preços\n• Branding e Marketing Digital`;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Contexto da Costa Gavron
      const context = `Você é um assistente virtual da Costa Gavron, uma agência de marketing digital e branding premium. 

SOBRE A COSTA GAVRON:
- Especializada em Branding, Web Design, Gestão de Mídias Sociais e Marketing Digital
- Foco em construir marcas memoráveis e gerar resultados reais
- Atendimento premium e personalizado

SERVIÇOS PRINCIPAIS:
1. Branding & Identidade Visual (logos, manual de marca, posicionamento)
2. Web Design & Desenvolvimento (landing pages, sites institucionais, e-commerce)
3. Gestão de Mídias Sociais (conteúdo estratégico, design de posts e stories)
4. Marketing Digital (SEO, Google Ads, Facebook/Instagram Ads, funis de conversão)

PLANOS:
- Start Social: R$ 600-900/mês (8 posts + 12 stories)
- Growth Performance: R$ 1.200/mês (inclui gestão de Meta Ads)
- Authority Max: R$ 1.800-2.500/mês (12-16 posts + 20 stories + landing page)

CONTATO:
- WhatsApp: (41) 99895-1738
- Site: costa-gavron.com

Responda de forma amigável, profissional e objetiva. Se perguntarem sobre preços, mencione os planos. Incentive o contato via WhatsApp para orçamentos personalizados.

PERGUNTA DO CLIENTE: ${input}`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: context }]
            }],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 500,
            },
            safetySettings: [
              {
                category: "HARM_CATEGORY_HARASSMENT",
                threshold: "BLOCK_NONE"
              },
              {
                category: "HARM_CATEGORY_HATE_SPEECH",
                threshold: "BLOCK_NONE"
              },
              {
                category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                threshold: "BLOCK_NONE"
              },
              {
                category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                threshold: "BLOCK_NONE"
              }
            ]
          })
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        throw new Error(errorData.error?.message || `HTTP ${response.status}`);
      }

      const data = await response.json();
      console.log('Gemini response:', data);

      if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
        const assistantMessage = data.candidates[0].content.parts[0].text;
        setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
      } else {
        throw new Error('Resposta inválida da API');
      }
    } catch (err: any) {
      console.error('Erro Gemini:', err);
      
      // Usa fallback local em caso de erro
      const fallbackResponse = getFallbackResponse(input);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: fallbackResponse
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#C9A962] text-[#0A0A0A] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        title="Assistente Gemini"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Janela de chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-zinc-200 overflow-hidden">
          {/* Header */}
          <div className="bg-[#C9A962] text-[#0A0A0A] p-4 font-bold text-center">
            🤖 Assistente Costa Gavron
          </div>

          {/* Mensagens */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <p className="text-zinc-600 text-sm font-semibold mb-2">✨ Olá! Sou o assistente virtual da Costa Gavron</p>
                <p className="text-zinc-500 text-xs mt-3 leading-relaxed">
                  Posso ajudar com informações sobre:<br/>
                  • Nossos serviços<br/>
                  • Planos e preços<br/>
                  • Como podemos ajudar seu negócio
                </p>
                <p className="text-zinc-400 text-xs mt-4">💬 Faça sua pergunta abaixo!</p>
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
                  <span className="inline-block animate-pulse">⏳ Pensando...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="border-t border-zinc-200 p-4 flex gap-2 bg-white">
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




