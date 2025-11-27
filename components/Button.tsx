import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center transition-all duration-300 font-sans cursor-pointer active:scale-95";
  
  // Base variants
  const variants = {
    primary: "bg-[#0A0A0A] text-white hover:bg-zinc-800 px-8 py-3 rounded-full font-medium",
    outline: "border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white px-8 py-3 rounded-full font-medium",
    text: "text-[#C9A962] hover:text-[#D4B978] p-0 font-semibold"
  };

  // If a className is passed that contains specific background or text colors, it will append and potentially override thanks to CSS cascading if specific enough.
  // The layout passes 'gold-gradient' which is a class defined in Layout's style tag.
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;