
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Send, Mail, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent",
        description: "Thank you for your message. I'll respond as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className={cn(
            "inline-block py-1 px-3 rounded-full text-sm font-medium bg-blue-50 text-blue-700 mb-6 transition-all duration-500 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Get In Touch
          </span>
          
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 transition-all duration-500 delay-100 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Contact Me
          </h2>
          
          <p className={cn(
            "text-lg text-zinc-600 max-w-3xl mx-auto transition-all duration-500 delay-200 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Feel free to reach out if you have any questions, want to discuss a project, or just want to say hello.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className={cn(
            "lg:col-span-2 transition-all duration-500 delay-300 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-zinc-600 mb-8">
              I'm currently available for freelance work and job opportunities. 
              If you're interested in working together, please don't hesitate to contact me.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-blue-50">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-zinc-500 mb-1">Email</h4>
                  <a 
                    href="mailto:deepsanbhandari7@gmail.com" 
                    className="text-lg font-medium hover:text-blue-600 transition-colors duration-200"
                  >
                    deepsanbhandari7@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-blue-50">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-zinc-500 mb-1">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/username" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-lg font-medium hover:text-blue-600 transition-colors duration-200"
                  >
                    linkedin.com/in/deepsanbhandari
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "lg:col-span-3 transition-all duration-500 delay-400 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">
                      Your Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 mb-2">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5} 
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
