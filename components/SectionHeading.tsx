import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, align = 'center' }) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  
  return (
    <div className={`mb-16 max-w-3xl ${alignClass}`}>
      <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
        {title}
      </h2>
      <div className={`h-[1px] w-24 bg-brand-gold/30 mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;