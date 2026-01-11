import { useEffect, useRef, useState } from 'react';
import { Award, BookOpen, Briefcase, Users } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
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

  const highlights = [
    {
      icon: Briefcase,
      title: 'Experience',
      description: 'Software Trainer & Developer with hands-on industry projects',
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'Vice President AICUF, HR Coordinator, Team Management',
    },
    {
      icon: Award,
      title: 'Recognition',
      description: '3 Academic Awards, Subject Topper, Cultural Achievements',
    },
    {
      icon: BookOpen,
      title: 'Education',
      description: 'B.Tech IT, CGPA 8.5/10, HSC 93.6%, Multiple Certifications',
    },
  ];

  return (
    <section
      id="about"
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
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Tech Enthusiast & Educator</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a passionate Full-Stack Developer and AI Engineer with expertise in building scalable,
                  intelligent solutions. My journey combines strong technical skills in the MERN stack, Python,
                  and AI with a dedication to teaching and mentoring others.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  With experience in software training, technical leadership, and real-world project development,
                  I bring both technical depth and the ability to communicate complex concepts effectively.
                  I thrive on solving challenging problems and creating impactful software that makes a difference.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/30 rounded-xl p-6 text-center hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-blue-400 mb-2">8.5</div>
                  <div className="text-sm text-gray-400">CGPA</div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border border-violet-500/30 rounded-xl p-6 text-center hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-violet-400 mb-2">6+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6 text-center hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
                  <div className="text-sm text-gray-400">Certifications</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={24} className="text-blue-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
