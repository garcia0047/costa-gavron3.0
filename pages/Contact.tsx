import React, { useState } from 'react';
import Button from '../components/Button';
import { MapPin, Phone, Mail, Send, Clock, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Por favor, preencha nome, e-mail e mensagem.');
      return;
    }

    setIsLoading(true);
    setStatusMessage('');

    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_7n2xmhb',
          template_id: 'template_ey44ho9',
          user_id: 'zSbkkYshdQuHBTiW3',
          template_params: {
            to_email: 'costagavron@gmail.com',
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
          }
        })
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Erro no envio');
      }

      setStatusMessage('✓ Mensagem enviada! Verifique seu e-mail em breve.');
      setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
    } catch (err) {
      console.error('Erro ao enviar formulário de contato:', err);
      setStatusMessage('Erro ao enviar. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Header */}
      <div className="bg-[#0A0A0A] text-white pt-48 pb-24 md:pt-60 md:pb-32 text-center relative">
         <div className="container mx-auto px-6 relative z-10">
           <span className="bg-[#2A2A2A] text-[#C9A962] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide inline-block mb-6">Contato</span>
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Vamos conversar sobre <br/> <span className="text-[#C9A962]">seu projeto?</span></h1>
           <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
             Estamos prontos para entender suas necessidades e criar soluções que impulsionem o crescimento do seu negócio.
           </p>
         </div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          
          {/* LEFT COLUMN: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl">
               <h3 className="text-3xl font-bold text-[#0A0A0A] mb-8">Informações de Contato</h3>
               <p className="text-zinc-500 mb-10 leading-relaxed text-sm">
                 Preencha o formulário ao lado ou entre em contato através de um dos canais abaixo. Retornamos todas as mensagens em até 24 horas úteis.
               </p>
               
               <div className="space-y-8">
                 {/* Item 1 */}
                 <div className="flex items-start">
                   <div className="bg-[#0A0A0A] w-12 h-12 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 text-[#C9A962]">
                     <Mail size={22} />
                   </div>
                   <div>
                     <h4 className="text-[#0A0A0A] font-bold mb-1">E-mail</h4>
                     <p className="text-zinc-500 text-sm">costagavron@gmail.com</p>
                   </div>
                 </div>

                 {/* Item 2 */}
                 <div className="flex items-start">
                   <div className="bg-[#0A0A0A] w-12 h-12 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 text-[#C9A962]">
                     <Phone size={22} />
                   </div>
                   <div>
                     <h4 className="text-[#0A0A0A] font-bold mb-1">Telefone</h4>
                     <p className="text-zinc-500 text-sm">(41) 99895-1738</p>
                   </div>
                 </div>

                 {/* Item 3 */}
                 <div className="flex items-start">
                   <div className="bg-[#0A0A0A] w-12 h-12 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 text-[#C9A962]">
                     <MapPin size={22} />
                   </div>
                   <div>
                     <h4 className="text-[#0A0A0A] font-bold mb-1">Localização</h4>
                     <p className="text-zinc-500 text-sm">Curitiba, PR</p>
                   </div>
                 </div>

                 {/* Item 4 */}
                 <div className="flex items-start">
                   <div className="bg-[#0A0A0A] w-12 h-12 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 text-[#C9A962]">
                     <Clock size={22} />
                   </div>
                   <div>
                     <h4 className="text-[#0A0A0A] font-bold mb-1">Horário</h4>
                     <p className="text-zinc-500 text-sm">Seg - Sex: 9h às 18h</p>
                   </div>
                 </div>
               </div>

               <div className="mt-12 pt-8 border-t border-zinc-100">
                  <h4 className="text-[#0A0A0A] font-bold mb-4 text-sm">Siga-nos nas redes</h4>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 bg-[#0A0A0A] rounded-lg flex items-center justify-center text-white hover:text-[#C9A962] transition-colors"><Instagram size={18} /></a>
                    <a href="#" className="w-10 h-10 bg-[#0A0A0A] rounded-lg flex items-center justify-center text-white hover:text-[#C9A962] transition-colors"><Linkedin size={18} /></a>
                    <a href="#" className="w-10 h-10 bg-[#0A0A0A] rounded-lg flex items-center justify-center text-white hover:text-[#C9A962] transition-colors"><MessageCircle size={18} /></a>
                  </div>
               </div>
            </div>

            {/* Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.5203169898166!2d-49.26422632346948!3d-25.420605335697343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcf8c3f1c8c8c1%3A0x0!2sCuritiba%2C%20State%20of%20Paran%C3%A1!5e0!3m2!1sen!2sbr!4v1701086400000" 
              width="100%" 
              height="256" 
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-[2.5rem] shadow-lg"
            />

          </div>

          {/* RIGHT COLUMN: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl h-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#0A0A0A] mb-2">Nome Completo *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-zinc-200 p-4 rounded-xl text-[#0A0A0A] focus:border-[#C9A962] outline-none transition-colors text-sm placeholder:text-zinc-300"
                      placeholder="Seu nome"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0A0A0A] mb-2">E-mail *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-zinc-200 p-4 rounded-xl text-[#0A0A0A] focus:border-[#C9A962] outline-none transition-colors text-sm placeholder:text-zinc-300"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#0A0A0A] mb-2">Empresa</label>
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-white border border-zinc-200 p-4 rounded-xl text-[#0A0A0A] focus:border-[#C9A962] outline-none transition-colors text-sm placeholder:text-zinc-300"
                      placeholder="Nome da empresa" 
                    />
                  </div>
                   <div>
                    <label className="block text-xs font-bold text-[#0A0A0A] mb-2">Telefone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white border border-zinc-200 p-4 rounded-xl text-[#0A0A0A] focus:border-[#C9A962] outline-none transition-colors text-sm placeholder:text-zinc-300"
                      placeholder="(00) 00000-0000" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A0A0A] mb-2">Serviço de Interesse</label>
                  <div className="relative">
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white border border-zinc-200 p-4 rounded-xl text-[#0A0A0A] focus:border-[#C9A962] outline-none transition-colors text-sm appearance-none text-zinc-500"
                    >
                      <option value="" disabled>Selecione um serviço</option>
                      <option value="Branding">Branding & Identidade</option>
                      <option value="Web Design">Web Design & Desenvolvimento</option>
                      <option value="Marketing">Marketing Digital</option>
                      <option value="Consultoria">Outro / Consultoria</option>
                    </select>
                    <div className="absolute right-4 top-4.5 pointer-events-none text-zinc-400">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16L6 10H18L12 16Z"/></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A0A0A] mb-2">Mensagem</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white border border-zinc-200 p-4 rounded-xl text-[#0A0A0A] focus:border-[#C9A962] outline-none transition-colors h-40 text-sm resize-none placeholder:text-zinc-300"
                    placeholder="Conte-nos sobre seu projeto..."
                    required
                  ></textarea>
                </div>

                <Button type="submit" className="w-full gold-gradient !text-[#0A0A0A] font-bold border-none py-4 text-base rounded-full hover:scale-[1.01] shadow-lg" disabled={isLoading}>
                  {isLoading ? 'Enviando...' : 'Enviar Mensagem'} <Send size={18} className="ml-2" />
                </Button>
                {statusMessage && (
                  <p className={`text-center text-xs mt-4 ${statusMessage.includes('✓') ? 'text-green-400' : 'text-red-400'}`}>{statusMessage}</p>
                )}
                <p className="text-center text-xs text-zinc-400 mt-4">Ao enviar, você concorda com nossa política de privacidade.</p>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-4xl mx-auto">
           <h3 className="text-3xl font-bold text-[#0A0A0A] text-center mb-12">Perguntas Frequentes</h3>
           <div className="grid gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                 <h4 className="font-bold text-[#0A0A0A] text-lg mb-3">Qual o prazo médio para um projeto de branding?</h4>
                 <p className="text-zinc-500 leading-relaxed">Um projeto completo de branding leva em média de 3 a 6 semanas, dependendo da complexidade e das necessidades específicas.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                 <h4 className="font-bold text-[#0A0A0A] text-lg mb-3">Vocês trabalham com empresas de qualquer tamanho?</h4>
                 <p className="text-zinc-500 leading-relaxed">Sim! Atendemos desde startups e pequenas empresas até médias empresas que buscam elevar sua presença digital.</p>
              </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                 <h4 className="font-bold text-[#0A0A0A] text-lg mb-3">Como funciona o processo de orçamento?</h4>
                 <p className="text-zinc-500 leading-relaxed">Após o contato inicial, agendamos uma reunião para entender seu projeto e enviamos uma proposta personalizada em até 48 horas.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;