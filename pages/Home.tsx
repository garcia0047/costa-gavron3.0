import React, { useState, useEffect } from 'react';
import { ArrowRight, Palette, Globe, Share2, TrendingUp, Check, Play, MessageSquare, Lightbulb, PenTool, Rocket, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#FAFAFA] overflow-hidden pt-20">
      {/* Background Concentric Circles Pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-[0.03] pointer-events-none z-0">
        <svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="500" cy="500" r="150" stroke="#0A0A0A" strokeWidth="2" />
          <circle cx="500" cy="500" r="250" stroke="#0A0A0A" strokeWidth="2" />
          <circle cx="500" cy="500" r="350" stroke="#0A0A0A" strokeWidth="2" />
          <circle cx="500" cy="500" r="450" stroke="#0A0A0A" strokeWidth="2" />
        </svg>
      </div>
      
      {/* Gradient Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#C9A962]/10 to-transparent rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full relative z-10">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A0A] text-white mb-8 shadow-lg">
             <span className="w-2 h-2 rounded-full bg-[#C9A962]"></span>
             <span className="text-xs font-bold uppercase tracking-wider">Agência de Design & Marketing</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0A0A0A] mb-6 leading-[1.05] tracking-tight">
            Marcas que <br />
            <span className="relative inline-block text-[#C9A962]">
              conquistam
              {/* Gold Underline SVG */}
              <svg className="absolute w-full h-3 -bottom-1 left-0" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00025 6.99997C45.5003 3.49997 99.0003 -1.50003 198.001 3.49996" stroke="#C9A962" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span> <br />
            resultados.
          </h1>
          
          <p className="text-zinc-500 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Transformamos a identidade visual do seu negócio em uma máquina de atração e conversão de clientes. Design estratégico que vende.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
             <Link to="/contact">
              <Button className="gold-gradient !text-[#0A0A0A] border-none font-bold px-8 py-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">Solicitar Orçamento Gratuito <ArrowRight size={18} className="ml-2 inline" /></Button>
            </Link>
            <Link to="/portfolio">
              <button className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#0A0A0A] text-[#0A0A0A] font-bold hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 group bg-white">
                <Play size={16} fill="currentColor" className="group-hover:text-white" />
                Ver Portfólio
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Visual Content - Tablet Mockup Style */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-12 md:mt-0"
        >
          {/* Main Tablet Mockup */}
          <div className="relative z-10 bg-[#0A0A0A] p-2 md:p-4 rounded-[2.5rem] shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700">
            <div className="rounded-[2rem] overflow-hidden relative aspect-[4/3] bg-zinc-900">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Design Strategy" 
                className="w-full h-full object-cover opacity-90"
              />
              {/* Overlay Gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Floating Stats Card (Top Right) */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-6 -right-4 z-20 bg-white p-4 pr-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-zinc-100 hidden md:flex items-center gap-4"
          >
             <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-sm">
               <Check size={20} strokeWidth={3} />
             </div>
             <div>
               <p className="text-2xl font-bold text-[#0A0A0A]">+340%</p>
               <p className="text-xs text-zinc-400 font-semibold uppercase tracking-wide">Engajamento</p>
             </div>
          </motion.div>

          {/* Floating Project Card (Bottom Left) */}
          <div className="absolute -bottom-8 -left-8 z-30 bg-[#0A0A0A] p-5 rounded-2xl shadow-2xl max-w-[240px] hidden md:block border border-zinc-800">
             <p className="text-[#C9A962] text-[10px] font-bold uppercase tracking-widest mb-2">Projeto em Destaque</p>
             <p className="text-white font-bold text-lg leading-tight mb-3">Rebranding TechStart</p>
             <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-[#0A0A0A]">
               <ArrowRight size={14} />
             </div>
          </div>
          
           {/* Floating Clients Pill (Bottom Center) */}
           <motion.div 
             animate={{ y: [0, 10, 0] }}
             transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
             className="absolute bottom-10 -right-8 z-20 bg-white px-4 py-3 rounded-full shadow-xl border border-zinc-100 flex items-center gap-3"
           >
             <div className="flex -space-x-2">
               {[1,2,3].map(i => (
                 <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center text-[10px] font-bold text-zinc-600 bg-cover bg-center`} 
                      style={{ backgroundImage: i === 1 ? 'url(https://randomuser.me/api/portraits/men/32.jpg)' : i === 2 ? 'url(https://randomuser.me/api/portraits/women/44.jpg)' : '' }}
                 >
                   {i === 3 && '50+'}
                 </div>
               ))}
             </div>
             <div>
               <p className="text-sm font-bold text-[#0A0A0A]">50+ Clientes</p>
             </div>
           </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

const StatsBar = () => (
  <div className="bg-white border-y border-zinc-100 py-12 relative z-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
        <div className="text-center px-4">
           <h3 className="text-4xl font-bold text-[#0A0A0A] mb-2">150+</h3>
           <p className="text-zinc-500 text-sm uppercase tracking-wide">Projetos Entregues</p>
        </div>
        <div className="text-center px-4">
           <h3 className="text-4xl font-bold text-[#0A0A0A] mb-2">98%</h3>
           <p className="text-zinc-500 text-sm uppercase tracking-wide">Clientes Satisfeitos</p>
        </div>
        <div className="text-center px-4">
           <h3 className="text-4xl font-bold text-[#0A0A0A] mb-2">7+</h3>
           <p className="text-zinc-500 text-sm uppercase tracking-wide">Anos de Experiência</p>
        </div>
      </div>
    </div>
  </div>
);

const LogosSection = () => (
  <div className="bg-[#FAFAFA] py-16">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <p className="text-zinc-400 text-xs font-bold uppercase tracking-[0.2em] mb-10">Empresas que confiam em nosso trabalho</p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
        {['TechStart', 'Luxe Living', 'Velvet', 'Iconique', 'BrandMax', 'NextGen'].map((logo, i) => (
           <div key={i} className={`h-16 w-auto px-6 bg-white border border-zinc-100 rounded flex items-center justify-center text-zinc-400 font-bold text-lg md:text-xl hover:scale-105 transition-transform cursor-default ${i % 2 === 0 ? 'font-serif' : 'font-sans'}`}>
             {logo}
           </div>
        ))}
      </div>
    </div>
  </div>
);

const ServicesPreview = () => {
  const services = [
    {
      icon: <Palette className="w-6 h-6 text-[#0A0A0A]" />,
      title: "Branding & Identidade",
      desc: "Criamos identidades visuais memoráveis que comunicam a essência da sua marca e conquistam seu público.",
      features: ["Logo & Manual de Marca", "Papelaria Corporativa", "Estratégia de Posicionamento"]
    },
    {
      icon: <Globe className="w-6 h-6 text-[#0A0A0A]" />,
      title: "Web Design",
      desc: "Sites modernos e responsivos que convertem visitantes em clientes, com foco em experiência do usuário.",
      features: ["Landing Pages", "Sites Institucionais", "E-commerce"]
    },
    {
      icon: <Share2 className="w-6 h-6 text-[#0A0A0A]" />,
      title: "Mídias Sociais",
      desc: "Gestão completa de redes sociais com conteúdo estratégico que engaja e gera resultados.",
      features: ["Criação de Conteúdo", "Design para Redes", "Calendário Editorial"]
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#0A0A0A]" />,
      title: "Marketing Digital",
      desc: "Estratégias de marketing que aumentam sua visibilidade e geram leads qualificados para seu negócio.",
      features: ["SEO & Performance", "Campanhas Ads", "Email Marketing"]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="bg-[#F3F0E7] text-[#C9A962] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide inline-block mb-6">Nossos Serviços</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6">Soluções criativas para <br /> <span className="text-[#C9A962]">acelerar seu crescimento</span></h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">Oferecemos um conjunto completo de serviços de design e marketing para transformar sua marca e impulsionar seus resultados.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className="bg-[#FAFAFA] p-8 rounded-[2rem] hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#D4B978] rounded-2xl flex items-center justify-center mb-6 text-[#0A0A0A] shadow-sm group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A0A0A] mb-4">{s.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 min-h-[80px]">
                {s.desc}
              </p>

              <ul className="space-y-3 mb-8">
                {s.features.map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-zinc-600">
                     <span className="w-1.5 h-1.5 rounded-full bg-[#C9A962] mr-3"></span>
                     {item}
                  </li>
                ))}
              </ul>

              <Link to="/services" className="text-[#D4B978] font-bold text-sm flex items-center hover:gap-2 transition-all">
                Saiba mais <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  const projects = [
    { title: "Rebranding TechStart", cat: "Branding", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "E-commerce Luxe Store", cat: "Web Design", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Campanha Verde Vida", cat: "Marketing Digital", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C9A962]/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <div>
             <span className="bg-[#2A2A2A] text-[#C9A962] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide inline-block mb-6">Portfólio</span>
             <h2 className="text-4xl md:text-5xl font-bold text-white">Projetos que <br/> transformam marcas</h2>
           </div>
           <Link to="/portfolio" className="mt-6 md:mt-0">
             <button className="px-6 py-3 rounded-full bg-white text-[#0A0A0A] font-bold hover:bg-zinc-200 transition-all flex items-center group">
               Ver Portfólio Completo <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
             </button>
           </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group cursor-pointer relative rounded-[2.5rem] overflow-hidden h-[500px]">
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                 <p className="text-[#C9A962] text-sm font-bold uppercase tracking-wide mb-2">{p.cat}</p>
                 <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-[#C9A962] transition-colors">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { num: "01", title: "Descoberta", desc: "Entendemos seu negócio, objetivos e público-alvo através de uma consultoria estratégica.", icon: <MessageSquare size={32} /> },
    { num: "02", title: "Estratégia", desc: "Desenvolvemos um plano personalizado alinhado às suas metas de crescimento.", icon: <Lightbulb size={32} /> },
    { num: "03", title: "Criação", desc: "Materializamos a estratégia em design de alta qualidade e impacto visual.", icon: <PenTool size={32} /> },
    { num: "04", title: "Lançamento", desc: "Implementamos e acompanhamos os resultados para garantir o sucesso.", icon: <Rocket size={32} /> },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
         <div className="text-center mb-20">
            <span className="bg-[#F3F0E7] text-[#C9A962] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide inline-block mb-6">Nosso Processo</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6">Da visão à <br/> <span className="text-[#C9A962]">realidade em 4 passos</span></h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-lg">Um processo simples e eficiente que transforma sua visão em resultados concretos.</p>
         </div>
         
         {/* Connector Line - Background */}
         <div className="relative">
             <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-[#C9A962]/20 z-0"></div>
             
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group relative z-10">
                    <div className="relative mb-8">
                        {/* Number Circle (Behind/Offset) */}
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#D4B978] rounded-full flex items-center justify-center text-sm font-bold text-[#0A0A0A] z-0 shadow-sm">
                            {step.num}
                        </div>
                        
                        {/* Icon Box (Front) */}
                        <div className="relative z-10 bg-white w-24 h-24 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#C9A962] border border-zinc-50 group-hover:-translate-y-2 transition-transform duration-300">
                            {step.icon}
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">{step.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed max-w-[220px]">{step.desc}</p>
                  </div>
                ))}
             </div>
         </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "A Costa & Gavron transformou completamente nossa marca. O resultado superou todas as expectativas e nosso engajamento aumentou 340% em apenas 3 meses. Profissionais excepcionais!",
      name: "Carlos Mendes",
      role: "CEO • TechStart",
      avatar: "C"
    },
    {
      text: "O novo e-commerce desenvolvido pela equipe triplicou nossas vendas no primeiro mês. A experiência do usuário é fantástica e o design transmite exatamente o luxo que vendemos.",
      name: "Ana Paula Silva",
      role: "Diretora de Marketing • Luxe Store",
      avatar: "A"
    },
    {
      text: "Trabalhar com a Costa & Gavron foi a melhor decisão para o nosso rebranding. Eles entenderam a alma do negócio e traduziram isso visualmente de forma impecável.",
      name: "Roberto Almeida",
      role: "Fundador • Verde Vida",
      avatar: "R"
    }
  ];

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="bg-[#F3F0E7] text-[#C9A962] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide inline-block mb-6">Depoimentos</span>
        <h2 className="text-3xl md:text-5xl font-bold text-[#0A0A0A] mb-16">O que nossos clientes <br/> <span className="text-[#C9A962]">dizem sobre nós</span></h2>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-12 md:p-16 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-zinc-50 relative mx-auto max-w-4xl"
            >
              {/* Large Outline Quote Icon */}
              <div className="absolute top-10 left-10 text-[#C9A962]/20">
                <Quote size={80} fill="transparent" strokeWidth={1} />
              </div>
              
              <div className="flex justify-center gap-1.5 mb-8 relative z-10">
                {[1,2,3,4,5].map(i => <span key={i} className="text-[#C9A962] text-xl">★</span>)}
              </div>
              
              <p className="text-xl md:text-2xl text-[#0A0A0A] font-medium leading-relaxed mb-10 relative z-10 max-w-3xl mx-auto">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex flex-col items-center justify-center gap-3 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-[#D4B978] flex items-center justify-center text-xl font-bold text-[#0A0A0A] mb-2 shadow-md">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-[#0A0A0A] text-lg">{testimonials[currentIndex].name}</p>
                    <p className="text-zinc-500 text-sm font-medium">{testimonials[currentIndex].role}</p>
                  </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:border-[#C9A962] hover:text-[#C9A962] transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-3">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-[#C9A962]' : 'bg-zinc-200 hover:bg-[#C9A962]/50'}`}
                ></button>
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:border-[#C9A962] hover:text-[#C9A962] transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] text-center relative overflow-hidden">
      {/* Background glow similar to hero but subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A962]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
         <span className="bg-[#1A1A1A] text-[#C9A962] border border-[#C9A962]/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-8 inline-block">Pronto para crescer?</span>
         
         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
           Vamos transformar sua marca <br/> 
           <span className="text-[#C9A962]">em uma máquina de vendas?</span>
         </h2>
         
         <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
           Agende uma consulta estratégica gratuita e descubra como podemos elevar 
           o nível da sua presença digital e multiplicar seus resultados.
         </p>
         
         {/* Action Area */}
         <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
           <Link to="/contact">
             <Button className="gold-gradient !text-[#0A0A0A] font-bold text-base px-8 py-4 hover:scale-105 transition-transform border-none rounded-full min-w-[260px]">
               Solicitar Orçamento Gratuito <ArrowRight className="ml-2 w-5 h-5" />
             </Button>
           </Link>
           
           {/* The white input box shown in the image */}
           <div className="bg-white rounded-full p-1.5 w-full md:w-[300px] flex items-center h-[56px]">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="w-full h-full bg-transparent px-6 text-[#0A0A0A] outline-none placeholder:text-zinc-400 text-sm"
              />
           </div>
         </div>
         
         {/* Social Proof */}
         <div className="flex items-center justify-center gap-4 text-zinc-400 text-sm">
           <div className="flex -space-x-3">
             {['A','B','C','D'].map((letter, i) => (
               <div key={i} className="w-10 h-10 rounded-full bg-[#D4B978] border-[3px] border-[#0A0A0A] flex items-center justify-center text-xs text-[#0A0A0A] font-bold">
                 {letter}
               </div>
             ))}
           </div>
           <div className="text-left">
             <p className="text-white font-bold text-sm leading-tight">+50 empresas atendidas</p>
             <p className="text-zinc-500 text-xs">Junte-se a elas</p>
           </div>
         </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <StatsBar />
      <LogosSection />
      <ServicesPreview />
      <PortfolioSection />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;