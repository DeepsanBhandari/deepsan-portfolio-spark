
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Code, 
  Database, 
  Server, 
  Monitor, 
  Layers, 
  GitBranch 
} from 'lucide-react';

const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "C"],
    icon: <Code className="w-6 h-6 text-blue-600" />,
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Java"],
    icon: <Server className="w-6 h-6 text-blue-600" />,
  },
  {
    category: "Frontend",
    items: ["React", "HTML", "CSS"],
    icon: <Monitor className="w-6 h-6 text-blue-600" />,
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL"],
    icon: <Database className="w-6 h-6 text-blue-600" />,
  },
  {
    category: "Other",
    items: ["DSA", "Full-Stack Development"],
    icon: <Layers className="w-6 h-6 text-blue-600" />,
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub"],
    icon: <GitBranch className="w-6 h-6 text-blue-600" />,
  },
];

export const Skills = () => {
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
    <section id="skills" ref={sectionRef} className="py-20 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className={cn(
            "inline-block py-1 px-3 rounded-full text-sm font-medium bg-blue-50 text-blue-700 mb-6 transition-all duration-500 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            My Skills
          </span>
          
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 transition-all duration-500 delay-100 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Technologies & Expertise
          </h2>
          
          <p className={cn(
            "text-lg text-zinc-600 max-w-3xl mx-auto transition-all duration-500 delay-200 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            I've worked with a variety of technologies and tools throughout my journey as a developer.
            Here are some of the key skills I've developed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.category}
              className={cn(
                "p-6 rounded-xl glass card-hover transition-all duration-500 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-blue-50">
                  {skill.icon}
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skill.items.map((item) => (
                      <span 
                        key={item} 
                        className="px-3 py-1 text-sm font-medium bg-zinc-100 text-zinc-800 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
