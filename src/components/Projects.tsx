import { useEffect, useRef, useState } from 'react';
import { ExternalLink, X, Code2, Database, Brain, Cpu, Shield, Activity } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  icon: typeof Brain;
  gradient: string;
  highlights: string[];
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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

  const projects: Project[] = [
    {
      title: 'AI Domain Intelligence Analyzer',
      description: 'AI-powered web intelligence tool that crawls websites and generates automated insights',
      fullDescription: 'An advanced AI tool that performs comprehensive website analysis by crawling web pages and generating automated insights on content quality, site structure, SEO optimization, and security vulnerabilities. Built with Flask API for seamless integration and uses NLP and AI models for intelligent analysis.',
      techStack: ['Python', 'Flask', 'Web Crawling', 'NLP', 'AI Models', 'REST API'],
      icon: Brain,
      gradient: 'from-blue-500 to-cyan-500',
      highlights: [
        'Automated website content analysis using NLP',
        'SEO optimization recommendations',
        'Security vulnerability detection',
        'RESTful API for integration',
        'Real-time crawling and analysis',
      ],
    },
    {
      title: 'Health Connect',
      description: 'Digital healthcare platform for doctor booking, real-time chat, and emergency blood matching',
      fullDescription: 'A comprehensive healthcare platform that revolutionizes patient care by enabling seamless doctor appointments, real-time communication through WebSocket-powered chat, medical history management, and an emergency blood donor-recipient matching system. Built with the MERN stack for optimal performance.',
      techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'WebSockets', 'REST API'],
      icon: Activity,
      gradient: 'from-violet-500 to-purple-500',
      highlights: [
        'Real-time chat using WebSockets',
        'Doctor booking and scheduling system',
        'Medical history management',
        'Emergency blood donor matching',
        'Secure patient data handling',
      ],
    },
    {
      title: 'Automatic License Plate Recognition',
      description: 'Computer vision system for detecting and recognizing vehicle license plates',
      fullDescription: 'An intelligent computer vision system that leverages OpenCV and OCR technology to accurately detect, extract, and recognize vehicle license plates from images and video streams. Useful for automated parking systems, traffic monitoring, and security applications.',
      techStack: ['Python', 'OpenCV', 'OCR', 'Image Processing', 'Computer Vision'],
      icon: Shield,
      gradient: 'from-pink-500 to-rose-500',
      highlights: [
        'Real-time license plate detection',
        'High accuracy OCR recognition',
        'Support for multiple plate formats',
        'Image preprocessing and enhancement',
        'Batch processing capability',
      ],
    },
    {
      title: 'Traffic Signal Controller',
      description: 'Intelligent traffic signal simulation and control system',
      fullDescription: 'A sophisticated program that simulates and controls traffic signals using advanced timing algorithms and logic design. The system optimizes traffic flow, reduces congestion, and adapts to varying traffic conditions through intelligent scheduling.',
      techStack: ['C', 'Logic Design', 'Algorithms', 'System Programming'],
      icon: Cpu,
      gradient: 'from-green-500 to-emerald-500',
      highlights: [
        'Intelligent signal timing optimization',
        'Multiple intersection support',
        'Traffic flow simulation',
        'Adaptive timing based on conditions',
        'Efficient C implementation',
      ],
    },
    {
      title: 'Customized ID Card Generator',
      description: 'Professional ID card generation application with photo upload and customization',
      fullDescription: 'A user-friendly JavaFX application that streamlines the process of creating professional ID cards. Users can upload photos, enter personal and organizational details, choose from templates, and instantly generate high-quality ID cards ready for printing.',
      techStack: ['Java', 'JavaFX', 'UI Design', 'File Handling'],
      icon: Code2,
      gradient: 'from-orange-500 to-amber-500',
      highlights: [
        'Drag-and-drop photo upload',
        'Multiple card templates',
        'Real-time preview',
        'High-quality PDF export',
        'Customizable fields and layouts',
      ],
    },
    {
      title: 'Password Generator',
      description: 'Secure password generation tool with customizable options',
      fullDescription: 'A JavaFX-based security tool that generates strong, cryptographically secure passwords with customizable parameters including length, character types, and complexity requirements. Features password strength indicators and clipboard integration for easy use.',
      techStack: ['Java', 'JavaFX', 'Cryptography', 'Security'],
      icon: Database,
      gradient: 'from-indigo-500 to-blue-500',
      highlights: [
        'Cryptographically secure generation',
        'Customizable password parameters',
        'Password strength indicator',
        'One-click clipboard copy',
        'Support for multiple character sets',
      ],
    },
  ];

  return (
    <section
      id="projects"
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
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Real-world applications showcasing innovation in AI, full-stack development, and system design
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="group relative bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  <div className="relative p-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon size={28} className="text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 bg-gray-700/50 text-blue-400 rounded-full border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-xs px-3 py-1 bg-gray-700/50 text-gray-400 rounded-full border border-gray-600">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    <button className="flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:gap-3 transition-all">
                      View Details
                      <ExternalLink size={16} className="group-hover:rotate-12 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-gray-900 border border-gray-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="sticky top-4 float-right m-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors z-10"
            >
              <X size={24} className="text-gray-400" />
            </button>

            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center flex-shrink-0`}>
                  <selectedProject.icon size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400">{selectedProject.description}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-3">About This Project</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.fullDescription}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gray-800 text-blue-400 rounded-lg border border-gray-700 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
