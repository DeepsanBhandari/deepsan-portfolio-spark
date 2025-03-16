
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export const About = () => {
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
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-zinc-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <span className={cn(
            "inline-block py-1 px-3 rounded-full text-sm font-medium bg-blue-50 text-blue-700 mb-6 transition-all duration-500 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            About Me
          </span>
          
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 transition-all duration-500 delay-100 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Get to know me better
          </h2>
          
          <div className={cn(
            "prose prose-zinc lg:prose-lg mx-auto transition-all duration-500 delay-200 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <p className="text-lg text-zinc-600 mb-6">
              I am a passionate software developer currently pursuing engineering. At 20 years old, I've already developed a strong foundation in software development with a focus on backend technologies.
            </p>
            <p className="text-lg text-zinc-600 mb-6">
              I specialize in Java, Spring Boot, DSA, databases, and full-stack development. I have a strong interest in backend development and aim to work as an Associate Java Developer.
            </p>
            <p className="text-lg text-zinc-600">
              My journey in software development is driven by a desire to create efficient, scalable, and elegant solutions to complex problems. I'm continuously learning and improving my skills to stay at the forefront of technology.
            </p>
          </div>
          
          <div className={cn(
            "mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500 delay-300 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="p-6 rounded-xl glass card-hover">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-zinc-600">Engineering Student with focus on Computer Science</p>
            </div>
            
            <div className="p-6 rounded-xl glass card-hover">
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-zinc-600">Building projects and expanding knowledge in software development</p>
            </div>
            
            <div className="p-6 rounded-xl glass card-hover">
              <h3 className="text-xl font-semibold mb-2">Goal</h3>
              <p className="text-zinc-600">Become a proficient Associate Java Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
