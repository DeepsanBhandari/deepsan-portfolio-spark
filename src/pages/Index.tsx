
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
    
    // Handle anchor links for smoother scrolling with offset for navbar
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.getElementById(href.substring(1));
        
        if (element) {
          const navbarHeight = 80; // Approximate navbar height
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };
    
    // Add click event listeners to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick as EventListener);
    });
    
    // Clean up event listeners on component unmount
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick as EventListener);
      });
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
