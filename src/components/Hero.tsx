import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Full-Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Innovation Driven',
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentRole.slice(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentRoleIndex]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/steffina2708', label: 'GitHub' },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/steffina-evangelin-5b3b02291',
      label: 'LinkedIn',
    },
    { icon: Mail, href: 'mailto:steffinaevangelin.27it@licet.ac.in', label: 'Email' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center space-y-8 animate-fadeIn">
          <div className="inline-block">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 p-1 animate-float">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                SE
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Steffina Evangelin S
            </span>
          </h1>

          <div className="h-12 flex items-center justify-center">
            <span className="text-xl md:text-2xl text-blue-400 font-mono">
              {typedText}
              <span className="inline-block w-0.5 h-6 bg-blue-400 ml-1 animate-pulse"></span>
            </span>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Building Scalable, Intelligent & Impactful Software Solutions
          </p>

          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            Passionate developer skilled in Python, MERN stack, and system design.
            Experienced in real-world projects, technical leadership, and mentoring.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-blue-400" />
              <span>Chennai, Tamil Nadu</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-blue-400" />
              <span>(+91) 7305975695</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center hover:border-blue-400 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="pt-8 flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <a
              href="/resume.pdf"
              download
              className="group relative px-8 py-3 bg-gray-800 border-2 border-blue-500 rounded-full text-blue-400 font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 hover:bg-blue-500/10"
            >
              <span className="relative z-10">Download Resume</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
          <div className="w-1.5 h-3 bg-blue-400 rounded-full mx-auto animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
