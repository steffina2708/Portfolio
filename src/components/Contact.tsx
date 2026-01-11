import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: '', text: '' });

    try {
      // EmailJS configuration
      const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
      const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
      const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

      // Template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'steffinaevangelin.27it@licet.ac.in',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setStatusMessage({ type: 'success', text: 'Message sent successfully! I\'ll get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatusMessage({ type: 'error', text: 'Failed to send message. Please try again or contact me directly via email.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'steffinaevangelin.27it@licet.ac.in',
      href: 'mailto:steffinaevangelin.27it@licet.ac.in',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(+91) 7305975695',
      href: 'tel:+917305975695',
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai, Tamil Nadu',
      href: null,
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/steffina2708',
      color: 'hover:text-blue-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/steffina-evangelin-5b3b02291',
      color: 'hover:text-violet-400',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Let's connect and discuss how we can work together on innovative projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const content = (
                      <div
                        className="group flex items-center gap-4 bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl p-5 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <Icon size={24} className="text-white" />
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                          <p className="text-white font-medium break-all">{info.value}</p>
                        </div>
                      </div>
                    );

                    return info.href ? (
                      <a key={info.label} href={info.href} className="block">
                        {content}
                      </a>
                    ) : (
                      <div key={info.label}>{content}</div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group w-16 h-16 bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl flex items-center justify-center hover:border-blue-500/50 transition-all duration-300 hover:scale-110 ${social.color}`}
                      >
                        <Icon size={28} className="text-gray-400 group-hover:scale-110 transition-transform" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/30 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Available For</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                    <span>Full-Stack Development Projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2"></div>
                    <span>AI/ML Solutions & Consulting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"></div>
                    <span>Technical Training & Mentorship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                    <span>Collaboration Opportunities</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                <div className="space-y-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white placeholder-gray-500"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white placeholder-gray-500"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white placeholder-gray-500 resize-none"
                      placeholder="Enter your message"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>

                  {statusMessage.text && (
                    <div className={`p-4 rounded-lg text-sm ${
                      statusMessage.type === 'success' 
                        ? 'bg-green-500/10 border border-green-500/30 text-green-400' 
                        : 'bg-red-500/10 border border-red-500/30 text-red-400'
                    }`}>
                      {statusMessage.text}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
