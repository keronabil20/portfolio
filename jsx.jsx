// src/App.js
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaLaptopCode, FaUtensils, FaDumbbell, FaMicrophone, FaQrcode, FaEnvelope, FaPhone, FaLinkedinIn, FaGithub, FaBehance, FaUserTie } from 'react-icons/fa';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'work', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate skill bars when in view
  useEffect(() => {
    const animateSkills = () => {
      const skills = document.querySelectorAll('.skill-progress');
      const screenPosition = window.innerHeight / 1.3;
      
      skills.forEach(skill => {
        const skillPosition = skill.getBoundingClientRect().top;
        if (skillPosition < screenPosition) {
          skill.style.width = skill.getAttribute('data-width');
        }
      });
    };

    window.addEventListener('scroll', animateSkills);
    return () => window.removeEventListener('scroll', animateSkills);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="font-raleway bg-light text-primary overflow-x-hidden">
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 bg-light/95 backdrop-blur-md py-4 transition-all duration-300 ${isScrolled ? 'py-3 shadow-md' : 'py-4 shadow-sm'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <a href="#" className="flex items-center text-xl md:text-2xl font-bold">
            <div className="bg-primary text-light w-10 h-10 rounded-full flex items-center justify-center mr-2">K</div>
            Kyrillos<span className="text-accent">Zakhary</span>
          </a>
          
          <button 
            className="md:hidden text-2xl z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          <nav className={`md:flex ${isMenuOpen ? 'fixed inset-0 bg-light flex flex-col items-center justify-center z-40' : 'hidden'}`}>
            <ul className={`flex ${isMenuOpen ? 'flex-col space-y-8 text-2xl' : 'space-x-8'}`}>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`capitalize font-medium transition-colors duration-300 hover:text-accent relative py-1 ${activeSection === item ? 'text-accent' : ''}`}
                  >
                    {item}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${activeSection === item ? 'w-full' : 'w-0'}`}></span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-24 pb-12 md:pt-32 flex items-center relative bg-gradient-to-br from-light to-indigo-50">
        <div className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 10% 20%, rgba(44, 135, 244, 0.1) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(180, 68, 255, 0.1) 0%, transparent 20%)`
          }}
        ></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Kyrillos <span className="text-accent relative">Zakhary
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/20 -z-10"></span>
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-secondary mb-6">
                Flutter Developer & Mobile Solutions Expert
              </h2>
              <div className="bg-white/80 p-6 rounded-xl shadow-lg border-l-4 border-accent mb-8">
                <p className="text-lg">
                  Creating high-performance mobile applications with elegant interfaces and seamless user experiences. 
                  Specializing in Flutter development with a focus on innovation and technical excellence.
                </p>
              </div>
              <button 
                onClick={() => scrollToSection('work')}
                className="bg-gradient-to-r from-secondary to-accent text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                View My Work
              </button>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-gradient-to-br from-secondary to-accent rounded-2xl shadow-2xl w-full aspect-square flex items-center justify-center text-white animate-float">
                  <FaLaptopCode className="text-8xl md:text-9xl opacity-90" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-br from-secondary to-accent rounded-2xl -z-10 opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 md:py-24 bg-primary text-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '25%', label: 'Development Efficiency' },
              { value: '20%', label: 'User Engagement' },
              { value: '15%', label: 'Crash Reduction' },
              { value: '95%', label: 'ML Accuracy' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm text-center transition-all duration-300 hover:bg-white/10 hover:border-accent hover:-translate-y-2">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-light">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-16 relative pb-4">
            About Me
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-secondary to-accent rounded-full"></span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Driven Flutter Developer</h3>
              <div className="space-y-4 text-lg">
                <p>
                  I specialize in developing high-quality mobile applications using Flutter, with a proven track 
                  record of improving development efficiency by 25% through advanced application maintenance techniques.
                </p>
                <p>
                  My collaborative approach with UI/UX designers has resulted in a 20% increase in user engagement 
                  across projects. I excel at integrating RESTful APIs and implementing robust solutions that reduce 
                  app crash rates by 15%.
                </p>
                <p>
                  With a strong foundation in computer science and ongoing education in cutting-edge technologies, 
                  I deliver user-focused mobile solutions that exceed expectations.
                </p>
              </div>
              <div className="mt-8 text-right relative pr-10">
                <div className="text-2xl font-bold inline-block">Kyrillos Zakhary</div>
                <div className="absolute right-0 top-1/2 w-24 h-0.5 bg-accent transform -translate-y-1/2"></div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-secondary to-accent rounded-2xl shadow-2xl w-full max-w-md aspect-square flex items-center justify-center text-white">
                <FaUserTie className="text-7xl md:text-8xl opacity-90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-16 md:py-24 bg-gradient-to-b from-light to-indigo-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title text-3xl md:text-4xl font-bold mb-4 relative pb-4">
              Featured Work
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-secondary to-accent rounded-full"></span>
            </h2>
            <p className="text-xl text-secondary">
              Explore my portfolio of mobile applications built with Flutter that showcase my technical skills and creative problem-solving abilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: 'Restaurant Reviews App', 
                icon: <FaUtensils />,
                description: 'Cross-platform app using Flutter with Google Gemini, Firebase, Google Maps, and custom ML model achieving 95% accuracy in personalized recommendations. Ranked top 5 among 30+ final-year projects.',
                tags: ['Flutter', 'Firebase', 'ML']
              },
              { 
                title: 'Fitness Application', 
                icon: <FaDumbbell />,
                description: 'Fitness tracking app with real-time data visualization and goal tracking. Achieved 30% increase in daily user engagement during testing with focus groups.',
                tags: ['Flutter', 'Data Viz', 'Tracking']
              },
              { 
                title: 'Voice Recorder App', 
                icon: <FaMicrophone />,
                description: 'Lightweight and user-friendly voice recording application with playback and file organization features. Achieved 100+ downloads within the first month.',
                tags: ['Flutter', 'Audio', 'UI/UX']
              },
              { 
                title: 'Attendance App', 
                icon: <FaQrcode />,
                description: 'Smart QR code-based attendance system using SQLite that reduced manual tracking time by 70%. Successfully tested in a class of 50+ students.',
                tags: ['Flutter', 'SQLite', 'QR']
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="bg-gradient-to-r from-secondary to-accent h-48 flex items-center justify-center text-white text-6xl">
                  {project.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex justify-between border-t border-gray-100 pt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-accent font-semibold text-sm uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 bg-primary text-light">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-16 relative pb-4">
            Technical Expertise
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-secondary to-accent rounded-full"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 relative pb-2">
                Development Skills
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-accent rounded-full"></span>
              </h3>
              
              <div className="space-y-6">
                {[
                  { name: 'Flutter Development', percent: 95 },
                  { name: 'Firebase', percent: 90 },
                  { name: 'RESTful APIs', percent: 92 },
                  { name: 'State Management', percent: 88 },
                  { name: 'UI/UX Design', percent: 85 }
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span className="text-gold">{skill.percent}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="skill-progress h-full bg-gradient-to-r from-secondary to-accent rounded-full"
                        data-width={`${skill.percent}%`}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 relative pb-2">
                Tools & Technologies
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-accent rounded-full"></span>
              </h3>
              
              <div className="space-y-6">
                {[
                  { name: 'Git & GitHub', percent: 90 },
                  { name: 'Android Studio', percent: 88 },
                  { name: 'VS Code', percent: 92 },
                  { name: 'Figma', percent: 87 },
                  { name: 'SQL Databases', percent: 85 }
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span className="text-gold">{skill.percent}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="skill-progress h-full bg-gradient-to-r from-secondary to-accent rounded-full"
                        data-width={`${skill.percent}%`}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 relative pb-2">
                Education & Courses
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-accent rounded-full"></span>
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-2">Bachelor's in Computer Science</h4>
                  <p className="opacity-80">Shorouk Academy | Graduation: 2025</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-3">Relevant Courses</h4>
                  <ul className="space-y-2 opacity-80">
                    <li>Flutter Development (Udemy)</li>
                    <li>Advanced AI Integration</li>
                    <li>Machine Learning Fundamentals</li>
                    <li>English Language</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-light">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-16 relative pb-4">
            Get In Touch
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-secondary to-accent rounded-full"></span>
          </h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-secondary to-accent"></div>
            
            <div className="ml-2 py-10 px-6 md:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="flex flex-col items-center text-center p-6 bg-indigo-50 rounded-xl transition-all duration-300 hover:bg-indigo-100 hover:-translate-y-1">
                  <div className="bg-gradient-to-br from-secondary to-accent w-16 h-16 rounded-full flex items-center justify-center text-white text-xl mb-4">
                    <FaEnvelope />
                  </div>
                  <h3 className="font-bold uppercase text-sm tracking-wider mb-2">Email</h3>
                  <a href="mailto:kyrillosnabil21@gmail.com" className="text-accent hover:text-secondary transition-colors">
                    kyrillosnabil21@gmail.com
                  </a>
                </div>
                
                <div className="flex flex-col items-center text-center p-6 bg-indigo-50 rounded-xl transition-all duration-300 hover:bg-indigo-100 hover:-translate-y-1">
                  <div className="bg-gradient-to-br from-secondary to-accent w-16 h-16 rounded-full flex items-center justify-center text-white text-xl mb-4">
                    <FaPhone />
                  </div>
                  <h3 className="font-bold uppercase text-sm tracking-wider mb-2">Phone</h3>
                  <a href="https://wa.me/201200971781" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-secondary transition-colors">
                    +201200971781
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center space-x-6">
                <a href="https://www.linkedin.com/in/kyrillos-zakhary" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-secondary to-accent w-14 h-14 rounded-full flex items-center justify-center text-white text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <FaLinkedinIn />
                </a>
                <a href="https://github.com/keronabil20" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-secondary to-accent w-14 h-14 rounded-full flex items-center justify-center text-white text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <FaGithub />
                </a>
                <a href="https://www.behance.net/keronabil4" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-secondary to-accent w-14 h-14 rounded-full flex items-center justify-center text-white text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <FaBehance />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-light/70">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className="text-2xl font-bold mb-4">
            Kyrillos<span className="text-accent">Zakhary</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Kyrillos Zakhary. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;