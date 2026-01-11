import { useEffect, useRef, useState } from 'react';
import {
  Code2,
  Database,
  Layers,
  Brain,
  Palette,
  Terminal,
  Server,
  FileJson,
} from 'lucide-react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateProgress(true), 300);
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'TypeScript'],
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-violet-500 to-purple-500',
      skills: ['Node.js', 'Express.js', 'Flask', 'REST APIs', 'WebSockets'],
    },
    {
      title: 'Data & AI',
      icon: Brain,
      color: 'from-pink-500 to-rose-500',
      skills: ['Python', 'OpenCV', 'NLP', 'Machine Learning', 'Data Processing'],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: ['MongoDB', 'SQL', 'Database Design', 'Query Optimization'],
    },
    {
      title: 'Programming Languages',
      icon: Terminal,
      color: 'from-orange-500 to-amber-500',
      skills: ['Python', 'JavaScript', 'Java', 'C Programming', 'TypeScript'],
    },
    {
      title: 'Design & Tools',
      icon: Palette,
      color: 'from-indigo-500 to-blue-500',
      skills: ['Figma', 'UI/UX Design', 'Canva', 'Git', 'VS Code'],
    },
  ];

  const techStack = [
    { name: 'React', icon: Layers },
    { name: 'Node.js', icon: Server },
    { name: 'Python', icon: Terminal },
    { name: 'MongoDB', icon: Database },
    { name: 'Express', icon: Code2 },
    { name: 'AI/ML', icon: Brain },
    { name: 'TypeScript', icon: FileJson },
    { name: 'Figma', icon: Palette },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-6 bg-gray-900/30"
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
                Technical Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Comprehensive expertise across full-stack development, AI, and modern technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-16">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Icon size={32} className="text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-xs text-center text-gray-400 group-hover:text-blue-400 transition-colors">
                    {tech.name}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="group bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                  style={{ animationDelay: `${categoryIndex * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-20 flex items-center justify-center`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 group"
                        style={{ animationDelay: `${categoryIndex * 100 + skillIndex * 50}ms` }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
