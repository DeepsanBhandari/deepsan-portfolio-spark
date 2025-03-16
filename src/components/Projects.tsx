
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Github, ExternalLink, Folder } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with product catalog, user authentication, and payment processing.",
    technologies: ["Java", "Spring Boot", "MySQL", "React"],
    github: "https://github.com/username/ecommerce-platform",
    demo: "#",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    title: "Task Management System",
    description: "A productivity application for managing tasks, projects, and deadlines with user collaboration features.",
    technologies: ["Java", "PostgreSQL", "Spring Boot", "React"],
    github: "https://github.com/username/task-management",
    demo: "#",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
  {
    title: "Personal Finance Tracker",
    description: "An application to help users track expenses, set budgets, and visualize spending patterns.",
    technologies: ["Java", "MySQL", "Spring Boot"],
    github: "https://github.com/username/finance-tracker",
    demo: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    title: "Community Forum",
    description: "A discussion platform where users can create posts, comment, and interact with content.",
    technologies: ["Java", "Spring Boot", "MySQL", "React"],
    github: "https://github.com/username/community-forum",
    demo: "#",
    image: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
  },
];

export const Projects = () => {
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
    <section id="projects" ref={sectionRef} className="py-20 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className={cn(
            "inline-block py-1 px-3 rounded-full text-sm font-medium bg-blue-50 text-blue-700 mb-6 transition-all duration-500 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            My Work
          </span>
          
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 transition-all duration-500 delay-100 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Projects & Applications
          </h2>
          
          <p className={cn(
            "text-lg text-zinc-600 max-w-3xl mx-auto transition-all duration-500 delay-200 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Here are some of the projects I've worked on. Each project represents different skills and technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={cn(
                "rounded-xl glass card-hover overflow-hidden transition-all duration-500 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Folder className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                
                <p className="text-zinc-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-xs font-medium bg-zinc-100 text-zinc-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-blue-600 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                  
                  <a 
                    href={project.demo} 
                    className="flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-blue-600 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={cn(
          "text-center mt-12 transition-all duration-500 delay-500 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <a 
            href="https://github.com/username" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View more projects on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
