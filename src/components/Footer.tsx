
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold tracking-tight">
              <span className="gradient-text">Deepsan Bhandari</span>
            </a>
            <p className="mt-2 text-zinc-600">
              Software Developer specializing in Java & Spring Boot
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/username" 
                className="p-2 rounded-full text-zinc-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              
              <a 
                href="https://linkedin.com/in/username" 
                className="p-2 rounded-full text-zinc-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              
              <a 
                href="mailto:deepsanbhandari7@gmail.com" 
                className="p-2 rounded-full text-zinc-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <p className="text-sm text-zinc-500">
              © {currentYear} Deepsan Bhandari. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
