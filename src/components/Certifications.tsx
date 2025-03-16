
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: "Meta Web Development",
    issuer: "Meta",
    date: "2023",
    description: "Comprehensive web development program covering front-end and back-end technologies.",
    link: "#",
  },
  {
    name: "IBM Software Development",
    issuer: "IBM",
    date: "2023",
    description: "Professional certification in software development methodologies and practices.",
    link: "#",
  },
  {
    name: "C Programming",
    issuer: "Purwanchal Campus",
    date: "2022",
    description: "Specialized course in C programming fundamentals and application development.",
    link: "#",
  },
  {
    name: "HackerRank Software Engineer Intern",
    issuer: "HackerRank",
    date: "2023",
    description: "Recognition of problem-solving skills and technical proficiency for internship roles.",
    link: "#",
  },
];

export const Certifications = () => {
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
    <section id="certifications" ref={sectionRef} className="py-20 md:py-32 bg-zinc-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className={cn(
            "inline-block py-1 px-3 rounded-full text-sm font-medium bg-blue-50 text-blue-700 mb-6 transition-all duration-500 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            My Credentials
          </span>
          
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 transition-all duration-500 delay-100 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Certifications & Achievements
          </h2>
          
          <p className={cn(
            "text-lg text-zinc-600 max-w-3xl mx-auto transition-all duration-500 delay-200 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            I've earned several industry-recognized certifications that validate my skills and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.name}
              className={cn(
                "p-6 rounded-xl glass card-hover transition-all duration-500 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-blue-50">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">{cert.name}</h3>
                    <a 
                      href={cert.link} 
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                      aria-label={`View ${cert.name} certification`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  
                  <div className="flex items-center text-sm text-zinc-500 mt-1 mb-3">
                    <span>{cert.issuer}</span>
                    <span className="mx-2">•</span>
                    <span>{cert.date}</span>
                  </div>
                  
                  <p className="text-zinc-600">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
