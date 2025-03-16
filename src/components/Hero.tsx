
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16">
      <div className="hero-blur"></div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div 
            className={`transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-blue-50 text-blue-700 mb-6 animate-fade-in">
              Software Developer
            </span>
          </div>
          
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 transition-all duration-1000 delay-100 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Hi, I'm <span className="gradient-text">Deepsan Bhandari</span>
          </h1>
          
          <p 
            className={`text-xl text-zinc-600 max-w-3xl mx-auto mb-10 transition-all duration-1000 delay-200 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            A passionate software developer specializing in Java, Spring Boot, and full-stack development. 
            Building robust and elegant solutions is what drives me.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a 
              href="#projects" 
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white text-zinc-800 font-medium rounded-lg shadow-md border border-zinc-200 hover:bg-zinc-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md">
            <ArrowDown size={20} className="text-zinc-600" />
          </a>
        </div>
      </div>
    </section>
  );
};
