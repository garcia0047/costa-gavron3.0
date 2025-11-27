import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { Check, CheckCircle2, ArrowRight, Share2, Globe, TrendingUp } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      title: "Branding & Identidade Visual",
      popular: true,
      description: "Construímos marcas memoráveis que comunicam a essência do seu negócio e geram autoridade no mercado.",
      features: [
        "Logo & Manual de Marca",
        "Papelaria Corporativa",
        "Estratégia de Posicionamento",
        "Naming & Tagline",
        "Aplicações de Marca"
      ],
      icon: "🎨" // Using emoji as placeholder logic, but rendered with Lucide below for others or specific styling
    },
    {
      title: "Web Design & Desenvolvimento",
      popular: false,
      description: "Sites modernos, responsivos e otimizados para conversão que transformam visitantes em clientes.",
      features: [
        "Landing Pages de Alta Conversão",
        "Sites Institucionais",
        "E-commerce Completo",
        "Design Responsivo (Mobile-first)",
        "Otimização SEO On-page",
        "Integração com Analytics"
      ],
      icon: <Globe className="w-8 h-8 text-[#0A0A0A]" strokeWidth={1.5} />
    },
    {
      title: "Gestão de Mídias Sociais",
      popular: false,
      description: "Estratégia completa de conteúdo e gerenciamento de redes sociais que engaja e gera resultados.",
      features: [
        "Planejamento de Conteúdo Mensal",
        "Design de Posts e Stories",
        "Calendário Editorial",
        "Gestão de Comunidade",
        "Relatórios de Performance",
        "Estratégia de Hashtags"
      ],
      icon: <Share2 className="w-8 h-8 text-[#0A0A0A]" strokeWidth={1.5} />
    },
    {
      title: "Marketing Digital Estratégico",
      popular: false,
      description: "Campanhas digitais que aumentam sua visibilidade e geram leads qualificados para seu negócio.",
      features: [
        "Estratégia de SEO Completa",
        "Campanhas Google Ads",
        "Facebook & Instagram Ads",
        "Email Marketing Automatizado",
        "Funis de Conversão",
        "Análise de ROI"
      ],
      icon: <TrendingUp className="w-8 h-8 text-[#0A0A0A]" strokeWidth={1.5} />
    }
  ];

  const plans = [
    {
      name: "Starter",
      description: "Ideal para quem está começando",
      features: [
        "Logo + Manual Básico",
        "3 Posts Sociais/Semana",
        "Landing Page Simples"
      ],
      highlight: false
    },
    {
      name: "Professional",
      description: "Para negócios em crescimento",
      features: [
        "Branding Completo",
        "Site Institucional",
        "Gestão Social Completa",
        "SEO Básico"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      description: "Solução completa para escalar",
      features: [
        "Tudo do Professional",
        "Marketing Digital",
        "Campanhas Ads",
        "Consultoria Mensal"
      ],
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
        {/* Services List Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-32">
          {servicesList.map((service, idx) => (
            <div key={idx} className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-lg flex flex-col border border-zinc-100 hover:shadow-2xl transition-all duration-300">
              
              <div className="mb-8">
                 {/* Gold Icon Box */}
                 <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-[#D4B978] shadow-md">
                   {/* Handle explicit icon vs placeholder */}
                   {typeof service.icon === 'string' ? (
                      <span className="text-2xl">{service.icon}</span>
                   ) : (
                      service.icon
                   )}
                 </div>
                 
                 <h3 className="text-3xl font-bold text-[#0A0A0A] mb-4">{service.title}</h3>
                 <p className="text-zinc-500 text-lg leading-relaxed">
                   {service.description}
                 </p>
              </div>
              
              <div className="flex-grow">
                 <div className="grid md:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start text-zinc-600 text-sm list-none">
                      <Check size={18} className="text-[#C9A962] mr-3 mt-0.5 flex-shrink-0" strokeWidth={3} />
                      {feature}
                    </li>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
                     ? 'bg-[#0A0A0A] text-white shadow-2xl scale-105 z-10 border border-zinc-800' 
                     : 'bg-white text-[#0A0A0A] shadow-xl border border-zinc-100 hover:shadow-2xl'
                 }`}
               >
                 {plan.highlight && (
                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4B978] text-[#0A0A0A] text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg whitespace-nowrap">
                     <span>★</span> Mais Popular
                   </div>
                 )}

                 <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
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

                <a href="https://wa.me/5541998951738" target="_blank" rel="noopener noreferrer">
                   <button 
                     className={`w-full py-4 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                       plan.highlight 
                         ? 'gold-gradient text-[#0A0A0A] hover:opacity-90' 
                         : 'bg-transparent border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white'
                     }`}
                   >
                     Solicitar Orçamento <ArrowRight size={16} />
                   </button>
                 </a>
               </div>
             ))}
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