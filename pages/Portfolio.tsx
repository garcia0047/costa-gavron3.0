import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { Project } from '../types';

const allProjects: Project[] = [
  { 
    id: '1', 
    title: "Rebranding TechStart", 
    category: "Branding", 
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
    description: "Rebranding completo para uma startup de tecnologia financeira.",
    problem: "A marca antiga não transmitia a inovação da plataforma.",
    solution: "Criação de identidade visual futurista e vibrante.",
    result: "Aumento de 40% no reconhecimento de marca."
  },
  { id: '2', title: "E-commerce Luxe Store", category: "Web Design", imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Website imersivo para loja de luxo." },
  { id: '3', title: "Campanha Verde Vida", category: "Marketing Digital", imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Campanha de conscientização ambiental." },
  { id: '4', title: "Identidade Visual InnovateCo", category: "Branding", imageUrl: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=800&auto=format&fit=crop", description: "Identidade visual corporativa." },
  { id: '5', title: "Landing Page NextGen", category: "Web Design", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", description: "Página de alta conversão para SaaS." },
  { id: '6', title: "Social Media BrandMax", category: "Mídias Sociais", imageUrl: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Gestão estratégica de Instagram." },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["Todos", "Branding", "Web Design", "Mídias Sociais", "Marketing Digital"];
  
  const filteredProjects = filter === "Todos" 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Header Section */}
      <div className="bg-[#0A0A0A] text-white pt-32 pb-20 text-center relative overflow-hidden">
         <div className="container mx-auto px-6 relative z-10">
           <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
             Projetos que <br/>
             <span className="text-[#C9A962]">geram resultados</span>
           </h1>
           <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
             Conheça alguns dos projetos que desenvolvemos para nossos clientes. Cada trabalho é único e pensado estrategicamente para alcançar os objetivos do negócio.
           </p>
         </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                filter === cat 
                ? 'bg-[#D4B978] text-[#0A0A0A] shadow-lg transform scale-105' 
                : 'bg-white text-zinc-500 border border-zinc-200 hover:border-[#C9A962] hover:text-[#C9A962]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer relative rounded-[2.5rem] overflow-hidden h-[400px] shadow-lg hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedProject(project)}
            >
               {/* Image */}
               <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
               
               {/* Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 transition-opacity duration-300"></div>

               {/* Content */}
               <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                  <div className="inline-block bg-[#C9A962]/20 backdrop-blur-md border border-[#C9A962]/30 text-[#C9A962] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#C9A962] transition-colors">{project.title}</h3>
                  <p className="text-zinc-400 text-sm font-medium">{project.description}</p>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedProject(null)}></div>
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl animate-fade-in rounded-[2rem] overflow-hidden">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 bg-white/20 hover:bg-black/10 backdrop-blur-md p-2 rounded-full z-20 transition-colors"
            >
              <X size={24} className="text-[#0A0A0A]" />
            </button>
            
            <div className="grid md:grid-cols-2 h-full">
              <div className="h-64 md:h-auto">
                <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
                <span className="text-[#C9A962] text-xs font-bold uppercase tracking-widest mb-2">{selectedProject.category}</span>
                <h2 className="text-3xl font-bold text-[#0A0A0A] mb-6">{selectedProject.title}</h2>
                <p className="text-zinc-600 leading-relaxed mb-8">{selectedProject.description}</p>
                
                {selectedProject.problem && (
                  <div className="space-y-6 bg-zinc-50 p-6 rounded-2xl mb-8">
                    <div>
                      <h4 className="text-[#0A0A0A] font-bold text-sm mb-1">O Desafio</h4>
                      <p className="text-xs text-zinc-500">{selectedProject.problem}</p>
                    </div>
                     <div>
                      <h4 className="text-[#0A0A0A] font-bold text-sm mb-1">Resultado</h4>
                      <p className="text-xs text-zinc-500">{selectedProject.result}</p>
                    </div>
                  </div>
                )}

                <div className="mt-auto">
                  <Button className="w-full gold-gradient border-none !text-[#0A0A0A] font-bold">Agendar Consultoria Similar</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;