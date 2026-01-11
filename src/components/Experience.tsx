import { useEffect, useRef, useState } from 'react';
import { Briefcase, Award, GraduationCap, Users, Trophy } from 'lucide-react';

export default function Experience() {
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

  const experiences = [
    {
      title: 'Internship - AI & Python Development',
      company: 'Resulticks',
      period: 'July 2025 - September 2025',
      description: 'Built projects using Python and AI, gaining hands-on experience in real-time applications while strengthening problem-solving, debugging, and learning skills through dedicated work.',
      icon: Briefcase,
      color: 'from-blue-500 to-cyan-500',
      highlights: [
        'Developed AI-powered applications using Python',
        'Worked on real-time data processing systems',
        'Enhanced debugging and problem-solving skills',
        'Collaborated with development teams',
      ],
    },
    {
      title: 'Admin & Software Trainer',
      company: 'Computer Software College',
      period: '2023 - 2024',
      description: 'Trained students in Python, C, Java, MS Office, and spoken English. Handled admissions, marketing, documentation, and admin tasks while supporting skill development for learners of all ages.',
      icon: GraduationCap,
      color: 'from-violet-500 to-purple-500',
      highlights: [
        'Trained 100+ students in programming languages',
        'Developed comprehensive course materials',
        'Managed admissions and administrative operations',
        'Mentored students of diverse age groups',
      ],
    },
    {
      title: 'Internship - Image Processing',
      company: 'NSIC Technical Services Centre',
      period: 'August 2024',
      description: 'Completed intensive one-week internship focused on Image Processing using OpenCV, gaining practical experience in computer vision techniques and real-world applications.',
      icon: Briefcase,
      color: 'from-pink-500 to-rose-500',
      highlights: [
        'Learned advanced OpenCV techniques',
        'Implemented image processing algorithms',
        'Worked on computer vision projects',
        'Gained hands-on technical experience',
      ],
    },
  ];

  const achievements = [
    'Vice President of AICUF (2024): Led events and initiatives on social justice and student welfare; represented the organization publicly',
    'High Achiever & Subject Topper: Secured two subject toppers in 12th grade',
    'Won 3 academic awards for outstanding performance',
    'Recognized for achievements in college cultural events',
    'HR Coordinator, Pattarai Club: Managed team activities, coordination, and internal operations',
    'Treasurer, Symposium: Actively managed sponsorships and event coordination',
    'Participated in 2-Day Hackathon: Built innovative project showcasing problem-solving and creative development under pressure',
  ];

  const certifications = [
    'CompTIA+ Network: Ports and Protocols (Infosys)',
    'Foundation of Cybersecurity (Google)',
    'Enhance Reactive Applications with Advanced React (Infosys)',
    'Statistics Essentials with Python (Infosys)',
    'Introduction to Data Science (Cisco)',
  ];

  return (
    <section
      id="experience"
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
                Experience & Leadership
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full"></div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Briefcase className="text-blue-400" size={28} />
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <div
                    key={exp.title}
                    className="group relative bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon size={32} className="text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                          <div>
                            <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                            <p className="text-blue-400 font-medium">{exp.company}</p>
                          </div>
                          <span className="text-sm text-gray-400 whitespace-nowrap">{exp.period}</span>
                        </div>

                        <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                        <div className="grid md:grid-cols-2 gap-3">
                          {exp.highlights.map((highlight) => (
                            <div key={highlight} className="flex items-start gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}></div>
                              <span className="text-sm text-gray-400">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="text-cyan-400" size={28} />
              Achievements & Leadership
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement}
                  className="group flex items-start gap-3 bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl p-4 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Trophy size={20} className="text-cyan-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-violet-400" size={28} />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert}
                  className="group flex items-start gap-3 bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl p-4 hover:border-violet-500/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-2 h-2 rounded-full bg-violet-400 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
