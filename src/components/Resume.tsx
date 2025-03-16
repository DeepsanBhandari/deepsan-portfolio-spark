
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Download, FileText } from 'lucide-react';

export const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="resume" ref={sectionRef} className="py-20 md:py-32 bg-zinc-50">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className={cn(
              "inline-block py-1 px-3 rounded-full text-sm font-medium bg-blue-50 text-blue-700 mb-6 transition-all duration-500 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              My Resume
            </span>
            
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-6 transition-all duration-500 delay-100 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              Download My Resume
            </h2>
            
            <p className={cn(
              "text-lg text-zinc-600 max-w-3xl mx-auto transition-all duration-500 delay-200 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              For a comprehensive overview of my skills, experience, and education, download my detailed resume.
            </p>
          </div>
          
          <div className={cn(
            "flex flex-col items-center text-center transition-all duration-500 delay-300 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="mb-8">
              <div className="p-3 rounded-full bg-blue-50 inline-block mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">
                Deepsan Bhandari - Resume.pdf
              </h3>
              
              <p className="text-zinc-600 mb-6">
                Last updated: July 2023
              </p>
              
              <a 
                href="/resume.pdf" 
                download 
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>
            
            <div className="glass rounded-xl overflow-hidden max-w-2xl w-full shadow-lg">
              <div className="p-4 bg-blue-600 text-white flex items-center justify-between">
                <span className="font-medium">Resume Preview</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Resume preview" 
                  className="w-full rounded-md shadow border border-zinc-200"
                  style={{ height: '400px', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
