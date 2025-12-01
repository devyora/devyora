import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HealthcareBPO from './pages/HealthcareBPO';
import Branding from './pages/Branding';
import ITSolutions from './pages/ITSolutions';
import About from './pages/About';
import Compliance from './pages/Compliance';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
  const [currentPath, setCurrentPath] = useState('/');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentPath(path);
  }, []);

  const handleNavigate = (path: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPath(path);
      window.history.pushState({}, '', path);
      setIsLoading(false);
    }, 150);
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home onNavigate={handleNavigate} />;
      case '/healthcare-bpo':
        return <HealthcareBPO onNavigate={handleNavigate} />;
      case '/branding':
        return <Branding onNavigate={handleNavigate} />;
      case '/it-solutions':
        return <ITSolutions onNavigate={handleNavigate} />;
      case '/about':
        return <About />;
      case '/compliance':
        return <Compliance onNavigate={handleNavigate} />;
      case '/contact':
        return <Contact />;
      case '/blog':
        return <Blog />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  useEffect(() => {
    const titleMap: { [key: string]: string } = {
      '/': 'Devyora — Healthcare BPO, Branding & IT Solutions',
      '/healthcare-bpo': 'Healthcare BPO India | Pet Insurance BPO | Claims Outsourcing — Devyora',
      '/branding': 'Branding Agency Vijayawada | Social Media Marketing — Devyora',
      '/it-solutions': 'Website Development India | IT Solutions & Software Development — Devyora',
      '/about': 'About Devyora – Outsourcing, Branding & IT Solutions',
      '/compliance': 'Compliance & Data Protection — HIPAA, GDPR & Security – Devyora',
      '/contact': 'Contact Devyora – Outsourcing, Branding & IT Solutions',
      '/blog': 'Devyora Blog – Healthcare BPO, Branding & IT Insights',
    };
    document.title = titleMap[currentPath] || 'Devyora';
  }, [currentPath]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />
      <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {renderPage()}
      </div>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
