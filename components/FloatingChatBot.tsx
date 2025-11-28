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

  const OPENAI_API_KEY = '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';

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
      const systemMessage = `Você é um assistente de IA profissional da Costa Gavron, uma agência criativa especializada em Branding, Web Design e Marketing Digital em Curitiba, PR.

INFORMAÇÕES IMPORTANTES:
- Serviços: Branding & Identidade, Web Design & Desenvolvimento, Marketing Digital
- Email: costagavron@gmail.com
- WhatsApp: (41) 99895-1738
- Localização: Curitiba, PR
- Horário: Seg-Sex 9h às 18h

Instruções:
- Responda em português brasileiro, de forma amigável e profissional
- Seja conciso (máximo 150 palavras)
- Sempre que apropriado, sugira contato via WhatsApp ou formulário
- Ofereça soluções criativas e relate expertise em design e marketing`;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: systemMessage },
            ...messages.concat(userMessage).map(msg => ({
              role: msg.role === 'user' ? 'user' : 'assistant',
              content: msg.content
            }))
          ],
          temperature: 0.7,
          max_tokens: 256
        })
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMsg = data.error?.message || 'Erro na API';
        console.error('Erro OpenAI:', errorMsg, data);
        throw new Error(errorMsg);
      }

      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        throw new Error('Resposta inválida da API');
      }

      const assistantMessage = data.choices[0].message.content;
      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (err) {
      console.error('Erro completo:', err);
      const errorMsg = err instanceof Error ? err.message : 'Erro desconhecido';
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `Desculpe, tive um problema. Tente novamente ou entre em contato: WhatsApp (41) 99895-1738` 
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
                <p className="text-zinc-600 text-sm">👋 Olá! Sou seu assistente de IA.</p>
                <p className="text-zinc-500 text-xs mt-3">Pergunte-me sobre Branding, Web Design, Marketing Digital ou como nos contactar.</p>
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


