import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { Check, CheckCircle2, ArrowRight, Share2, Globe, TrendingUp, Palette, Play } from 'lucide-react';

const Services = () => {
  // Serviços Avulsos (agrupados + microdescrições)
  const avulsoSections = [
    {
      group: 'Identidade & Branding',
      icon: <Palette className="w-5 h-5 text-[#0A0A0A]" />,
      items: [
        {
          title: 'Identidade Visual',
          desc: 'Sua marca com logo profissional.',
          price: 'R$ 150 a R$ 350',
          icon: <Palette className="w-6 h-6 text-[#0A0A0A]" />
        }
      ]
    },
    {
      group: 'Construção de Ativos Digitais',
      icon: <Globe className="w-5 h-5 text-[#0A0A0A]" />,
      items: [
        {
          title: 'Landing Page',
          desc: 'Página otimizada para conversão.',
          price: 'R$ 300 a R$ 600',
          icon: <Globe className="w-6 h-6 text-[#0A0A0A]" />
        }
      ]
    },
    {
      group: 'Performance & Conteúdo',
      icon: <TrendingUp className="w-5 h-5 text-[#0A0A0A]" />,
      items: [
        {
          title: 'Criativos p/ Anúncios',
          desc: 'Artes otimizadas para performance.',
          price: 'R$ 40 a R$ 90',
          icon: <TrendingUp className="w-6 h-6 text-[#0A0A0A]" />
        },
        {
          title: 'Reels Editado',
          desc: 'Vídeos curtos que viralizam.',
          price: 'R$ 50 a R$ 120',
          icon: <Play className="w-6 h-6 text-[#0A0A0A]" />
        }
      ]
    }
  ];

  const plans = [
    {
      name: "Start Social",
      price: "R$ 600 a R$ 900/mês",
      description: "Para quem está começando e precisa da primeira presença profissional no digital.",
      features: [
        "8 posts mensais estratégicos",
        "12 stories engajadores",
        "Design + copy + hashtags otimizados",
        "Calendário estratégico personalizado",
        "Relatório simples de performance",
        "Suporte via WhatsApp",
        "Prazo: 5 a 7 dias úteis"
      ],
      ideal: "Ideal para: pequenos negócios, MEIs e iniciantes que querem construir presença digital sólida.",
      highlight: false
    },
    {
      name: "Growth Performance",
      price: "R$ 1.200 fixo",
      altPrice: "Opção: R$ 800 + 20% da verba de anúncios",
      description: "Para quem quer visibilidade real e resultados consistentes.",
      features: [
        "Tudo do Plano Start",
        "Gestão de Meta Ads",
        "Até 2 campanhas mensais",
        "4 criativos para anúncios",
        "Otimizações semanais",
        "Relatório avançado",
        "Prazo: 7 a 10 dias úteis"
      ],
      ideal: "Ideal para: empresas que querem atrair clientes todos os meses",
      highlight: true
    },
    {
      name: "Authority Max",
      price: "R$ 1.800 a R$ 2.500",
      description: "Para quem quer transformar seu negócio em uma máquina de vendas.",
      features: [
        "12–16 posts",
        "20 stories",
        "Gestão completa de Meta Ads",
        "6 criativos profissionais",
        "Landing Page otimizada",
        "Copywriting completo da página",
        "Relatório premium",
        "Suporte prioritário",
        "Prazo: 10 a 14 dias úteis"
      ],
      ideal: "Ideal para: negócios que querem escala rápida com conteúdo + tráfego + conversão.",
      highlight: false
    }
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Header Section */}
      <div className="bg-[#0A0A0A] text-white pt-48 pb-24 md:pt-60 md:pb-32 text-center relative">
         <div className="container mx-auto px-6 relative z-10">
           <span className="bg-[#2A2A2A] text-[#C9A962] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide inline-block mb-6">Nossos Serviços</span>
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Soluções completas para <br/> <span className="text-[#C9A962]">transformar seu negócio</span></h1>
           <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
             Do branding ao marketing digital, oferecemos tudo que sua empresa precisa para construir uma presença digital poderosa e gerar resultados.
           </p>
         </div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-20">
        {/* Serviços Avulsos */}
        <div className="text-center mb-10">
          <span className="bg-[#F5F5F0] text-[#C9A962] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide inline-block">Serviços Avulsos</span>
          <p className="text-zinc-500 max-w-2xl mx-auto mt-4">Escolha exatamente o que precisa — rápido, profissional e sob medida.</p>
        </div>

        <div className="space-y-10 max-w-6xl mx-auto mb-24">
          {avulsoSections.map((section, sIdx) => (
            <div key={sIdx}>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-xl bg-[#D4B978] flex items-center justify-center">
                  {section.icon}
                </div>
                <h4 className="text-base font-bold text-[#0A0A0A]">{section.group}</h4>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {section.items.map((item, idx) => (
                  <div key={idx} className="bg-white p-9 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-zinc-100 hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-300 flex items-center justify-between">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#D4B978]/90">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-[1.25rem] leading-tight font-semibold text-[#0A0A0A]">{item.title}</h3>
                        <p className="text-zinc-500 text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                    <div>
                      <span className="inline-block bg-[#F5F5F0] text-[#C9A962] font-bold text-xs px-4 py-2 rounded-full whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-32">
          <p className="text-zinc-500 text-sm mb-4">Quer um orçamento rápido?</p>
          <a href="https://wa.me/5541998951738" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#C9A962] text-[#0A0A0A] font-bold hover:bg-[#C9A962] hover:text-[#0A0A0A] transition-colors">
            Falar com a Costa & Gavron <ArrowRight size={16} />
          </a>
        </div>

        {/* Pricing Grid Section */}
        <div className="max-w-7xl mx-auto mb-32">
           <div className="text-center mb-16">
              <span className="bg-[#F5F5F0] text-[#C9A962] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide inline-block mb-6">Pacotes</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A]">
                Escolha o plano <br/>
                <span className="text-[#C9A962]">ideal para você</span>
              </h2>
           </div>

           <div className="grid md:grid-cols-3 gap-8 items-center">
             {plans.map((plan, idx) => (
               <div 
                 key={idx} 
                 className={`relative rounded-[2rem] p-10 transition-all duration-300 h-full flex flex-col ${
                   plan.highlight 
                     ? 'bg-[#0A0A0A] text-white shadow-2xl scale-105 z-10 border border-zinc-800 ring-1 ring-[#D4B978]/40' 
                     : 'bg-white text-[#0A0A0A] shadow-xl border border-zinc-100 hover:shadow-2xl hover:-translate-y-1 ring-1 ring-transparent hover:ring-[#D4B978]/40'
                 }`}
               >
                 {plan.highlight && (
                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4B978] text-[#0A0A0A] text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg whitespace-nowrap">
                     <span>★</span> Mais Popular
                   </div>
                 )}

                 <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                {plan.price && (
                  <p className={`text-lg font-semibold mb-1 ${plan.highlight ? 'text-[#C9A962]' : 'text-[#C9A962]'}`}>
                    {plan.price}
                  </p>
                )}
                {plan.altPrice && (
                  <p className={`text-xs mb-4 ${plan.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {plan.altPrice}
                  </p>
                )}
                 <p className={`text-sm mb-10 ${plan.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>
                   {plan.description}
                 </p>

                 <ul className="space-y-5 mb-10 flex-grow">
                   {plan.features.map((feature, fIdx) => (
                     <li key={fIdx} className="flex items-start text-sm">
                       <Check size={18} className={`mr-3 mt-0.5 ${plan.highlight ? 'text-[#C9A962]' : 'text-[#C9A962]'}`} />
                       <span className={plan.highlight ? 'text-zinc-200' : 'text-zinc-600'}>{feature}</span>
                     </li>
                   ))}
                 </ul>

                 {plan.ideal && (
                   <p className={`text-xs mb-6 italic ${plan.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>
                     {plan.ideal}
                   </p>
                 )}

                <a href="https://wa.me/5541998951738" target="_blank" rel="noopener noreferrer">
                   <button 
                     className={`w-full py-4 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                       plan.highlight 
                         ? 'gold-gradient text-[#0A0A0A] hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(201,169,98,0.35)]' 
                         : 'bg-transparent border border-[#C9A962] text-[#0A0A0A] hover:bg-[#C9A962] hover:text-[#0A0A0A] hover:-translate-y-0.5'
                     }`}
                   >
                     Contratar Agora <ArrowRight size={16} />
                   </button>
                 </a>
               </div>
             ))}
           </div>
        </div>

        {/* Serviços Avulsos - Bloco Resumido */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl border border-zinc-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-3">Serviços Avulsos</h3>
              <p className="text-zinc-500 text-sm">Contrate apenas o que você precisa, sem compromisso de longo prazo.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center justify-between p-5 rounded-2xl bg-[#FAFAFA] border border-zinc-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#D4B978] flex items-center justify-center">
                    <Palette size={20} className="text-[#0A0A0A]" />
                  </div>
                  <span className="font-semibold text-[#0A0A0A]">Identidade Visual</span>
                </div>
                <span className="text-[#C9A962] font-bold text-sm whitespace-nowrap">R$ 150–350</span>
              </div>

              <div className="flex items-center justify-between p-5 rounded-2xl bg-[#FAFAFA] border border-zinc-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#D4B978] flex items-center justify-center">
                    <Globe size={20} className="text-[#0A0A0A]" />
                  </div>
                  <span className="font-semibold text-[#0A0A0A]">Landing Page</span>
                </div>
                <span className="text-[#C9A962] font-bold text-sm whitespace-nowrap">R$ 300–600</span>
              </div>

              <div className="flex items-center justify-between p-5 rounded-2xl bg-[#FAFAFA] border border-zinc-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#D4B978] flex items-center justify-center">
                    <TrendingUp size={20} className="text-[#0A0A0A]" />
                  </div>
                  <span className="font-semibold text-[#0A0A0A]">Criativos p/ Anúncios</span>
                </div>
                <span className="text-[#C9A962] font-bold text-sm whitespace-nowrap">R$ 40–90</span>
              </div>

              <div className="flex items-center justify-between p-5 rounded-2xl bg-[#FAFAFA] border border-zinc-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#D4B978] flex items-center justify-center">
                    <Play size={20} className="text-[#0A0A0A]" />
                  </div>
                  <span className="font-semibold text-[#0A0A0A]">Reels Editado</span>
                </div>
                <span className="text-[#C9A962] font-bold text-sm whitespace-nowrap">R$ 50–120</span>
              </div>
            </div>

            <div className="text-center mt-8">
              <a href="https://wa.me/5541998951738" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#C9A962] text-[#0A0A0A] font-bold hover:bg-[#C9A962] transition-all">
                  Solicitar Serviço Avulso <ArrowRight size={16} />
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Not Found / CTA Section */}
        <div className="bg-[#0A0A0A] rounded-[3rem] p-12 md:p-20 text-center max-w-5xl mx-auto relative overflow-hidden shadow-2xl">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A962]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Não encontrou o que procura?</h3>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
              Entre em contato conosco para um orçamento personalizado. Criamos soluções sob medida para as necessidades específicas do seu negócio.
            </p>
            <Link to="/contact">
              <Button className="gold-gradient !text-[#0A0A0A] border-none font-bold px-10 py-4 text-base hover:scale-105 rounded-full">
                Fale com um especialista <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;