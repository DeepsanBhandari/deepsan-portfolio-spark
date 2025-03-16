
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
        isScrolled 
          ? "glass border-b border-zinc-200/50 py-3 backdrop-blur-xl" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#home" className="text-xl font-bold tracking-tight">
              <span className="gradient-text">Deepsan Bhandari</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-zinc-700 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-full text-zinc-700 hover:bg-zinc-100 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-x-0 top-[73px] z-50 origin-top-right transform p-2 transition-all duration-300 md:hidden",
          mobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        <div className="glass rounded-lg shadow-lg">
          <div className="px-5 pt-4 pb-6">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-base font-medium text-zinc-700 hover:text-primary border-b border-zinc-100 last:border-b-0 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
