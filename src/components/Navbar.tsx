import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Healthcare BPO', path: '/healthcare-bpo' },
  { name: 'Branding', path: '/branding' },
  { name: 'IT Solutions', path: '/it-solutions' },
  { name: 'About', path: '/about' },
  { name: 'Compliance', path: '/compliance' },
  { name: 'Contact', path: '/contact' },
  { name: 'Blog', path: '/blog' },
];

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => handleNavClick('/')}
            className="text-2xl font-bold text-gray-900 hover:text-amber-600 transition-colors"
          >
            Devyora
          </button>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  currentPath === link.path
                    ? 'text-amber-600 bg-amber-50'
                    : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('/contact')}
              className="ml-4 px-6 py-2 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Started
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 bg-white border-t space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavClick(link.path)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                currentPath === link.path
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('/contact')}
            className="w-full px-4 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
