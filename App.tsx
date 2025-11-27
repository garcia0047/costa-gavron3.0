import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { X } from 'lucide-react';
import Button from './components/Button';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('zSbkkYshdQuHBTiW3');

const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Show popup after 8 seconds
    const timer = setTimeout(() => {
      // Check if already dismissed in session (simple logic)
      if (!sessionStorage.getItem('newsletter_dismissed')) {
        setIsVisible(true);
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('newsletter_dismissed', 'true');
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Por favor, insira seu email');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      // Enviar email para você com notificação
      await emailjs.send('service_7n2xmhb', 'template_ey44ho9', {
        to_email: 'costagavron@gmail.com',
        subscriber_email: email,
        message: `Olá! Obrigado por se inscrever. Sua solicitação foi recebida com sucesso e já estamos acompanhando por aqui.\nSe precisar de algo, é só responder este e-mail. Estamos à disposição!`
      });

      setMessage('✓ Obrigado! Verifique seu email.');
      setEmail('');
      
      // Fechar popup após sucesso
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setMessage('Erro ao inscrever. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center p-4 md:p-0">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose}></div>
      <div className="bg-zinc-900 border border-brand-gold/30 p-8 rounded shadow-2xl relative max-w-lg w-full animate-fade-in-up">
        <button onClick={handleClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white">
          <X size={20} />
        </button>
        <h3 className="text-2xl font-serif text-white mb-2">Acesso Exclusivo</h3>
        <p className="text-zinc-400 mb-6 text-sm">
          Junte-se à nossa lista VIP e receba insights mensais sobre branding de luxo e tendências digitais.
        </p>
        <form onSubmit={handleSubscribe} className="flex gap-2 mb-3">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor e-mail" 
            className="flex-grow bg-brand-black border border-zinc-700 p-3 text-white text-sm focus:border-brand-gold outline-none rounded"
            disabled={isLoading}
          />
          <Button type="submit" className="!px-4" disabled={isLoading}>
            {isLoading ? 'Enviando...' : 'Inscrever'}
          </Button>
        </form>
        {message && (
          <p className={`text-xs ${message.includes('✓') ? 'text-green-400' : 'text-red-400'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <NewsletterPopup />
    </Router>
  );
}

export default App;