import { useState, useEffect } from 'react';
import profilePhoto from './assets/Photo.jpeg'; // ✅ Import your photo

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const experiences = [
    {
      role: "AI Developer Protégé",
      company: "Credence",
      date: "July 2026 – Present",
      icon: "🤖",
      desc: "Presented and demonstrated digital products to customers. Developed reusable website templates using VS Code and Tailwind CSS. Applied AI tools to improve functionality and user experience. Implemented reusable UI components and used GitHub for version control."
    },
    {
      role: "Technical Support Executive",
      company: "Green Packet | Protege Program",
      date: "July 2025 – Oct 2025",
      icon: "💼",
      desc: "Managed 30–50 support tickets weekly via Zendesk with 95% quality compliance. Performed API testing using Postman. Executed manual eKYC verification with 100% compliance. Supported Selangkah digital system for government services."
    },
    {
      role: "Cloud Engineering Intern",
      company: "DXC Technology",
      date: "Oct 2024 – Feb 2025",
      icon: "☁️",
      desc: "Supported cloud engineering team operations. Completed cloud-related courses. Prepared project documentation and delivered structured presentations to team members."
    }
  ];

  const accomplishments = [
    {
      icon: "🏆",
      title: "2nd Place FYP Winner",
      desc: "Website Galaxy Explorer - Designed and developed an educational web application using HTML, CSS, JavaScript, PHP, and MySQL with creative UI/UX and efficient database management."
    },
    {
      icon: "🎓",
      title: "First Class Honours",
      desc: "Graduated with CGPA 3.79 from City University Malaysia, receiving Dean's List Awards in October 2022 and April 2024 for academic excellence."
    },
    {
      icon: "🔐",
      title: "100% eKYC Compliance",
      desc: "Executed manual eKYC verification processes at Green Packet, ensuring 100% compliance with regulatory and internal verification standards."
    }
  ];

  const techStack = [
    "HTML", "CSS", "JavaScript", "React", "Tailwind CSS",
    "PHP", "C++", "GitHub", "Postman", "Zendesk",
    "JIRA", "Figma", "Canva", "MySQL", "XAMPP"
  ];

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full bg-[#0a0e27]/90 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            <span className="text-[#ff4757]">Nurul</span> Fatimah
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('bio')} className="nav-link">Bio</button>
            <button onClick={() => scrollToSection('expertise')} className="nav-link">Skills</button>
            <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
            <button onClick={() => scrollToSection('accomplishments')} className="nav-link">Key Accomplishments</button>
            
            {/* ✅ NAV DOWNLOAD BUTTON */}
            <a 
              href="/RESUME_NURUL%20FATIMAH.pdf" 
              download 
              className="btn-red px-6 py-2 text-sm inline-flex items-center justify-center"
            >
              Download Resume
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white text-2xl">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* ✅ MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0e27] border-t border-white/10 px-6 py-4 space-y-3">
            <button onClick={() => scrollToSection('bio')} className="block w-full text-left py-2 capitalize nav-link">Bio</button>
            <button onClick={() => scrollToSection('expertise')} className="block w-full text-left py-2 capitalize nav-link">Skills</button>
            <button onClick={() => scrollToSection('experience')} className="block w-full text-left py-2 capitalize nav-link">Experience</button>
            <button onClick={() => scrollToSection('accomplishments')} className="block w-full text-left py-2 capitalize nav-link">Key Accomplishments</button>
            <a href="/RESUME_NURUL%20FATIMAH.pdf" download className="block w-full text-left py-2 text-[#ff4757] font-semibold">
              Download Resume
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              I'm <span className="text-[#ff4757]">Nurul</span> Fatimah
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
              IT Graduate with First Class Honours (CGPA 3.79) and AI Developer Protégé passionate about UI/UX design, web development, and creating intuitive digital experiences.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="social-icon">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" className="social-icon">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
          
          {/* ✅ YOUR PHOTO */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img 
              src={profilePhoto} 
              alt="Nurul Fatimah" 
              className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-[#ff4757] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* BIOGRAPHY SECTION */}
      <section id="bio" className="py-20 px-6 bg-[#0d1230]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="w-full h-96 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] rounded-lg flex items-center justify-center border border-white/10 shadow-2xl">
              <span className="text-9xl">‍💻</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-[#ff4757]"></div>
              <span className="text-[#ff4757] font-semibold">Biography</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Motivated and detail-oriented Information Technology graduate with First Class Honours (CGPA 3.79) and multiple academic accolades, including the Dean's List Award. Currently working as an AI Developer Protégé at Credence, gaining hands-on experience in web application development, GitHub, and the creation of reusable digital and website templates.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Passionate about UI/UX design, with a strong interest in creating intuitive, user-friendly, and visually engaging digital experiences. Previously gained professional experience through internships at DXC Technology and Green Packet, with exposure to technical support, API testing, and eKYC systems.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-[#ff4757] font-semibold mb-1">Email:</p>
                <p className="text-gray-400 text-sm">nurfathi02@gmail.com</p>
              </div>
              <div>
                <p className="text-[#ff4757] font-semibold mb-1">Phone:</p>
                <p className="text-gray-400 text-sm">014-606 3786</p>
              </div>
              <div>
                <p className="text-[#ff4757] font-semibold mb-1">Location:</p>
                <p className="text-gray-400 text-sm">Petaling Jaya, Selangor</p>
              </div>
              <div>
                <p className="text-[#ff4757] font-semibold mb-1">Education:</p>
                <p className="text-gray-400 text-sm">Bachelor of Information Technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arrow Divider */}
      <div className="section-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff4757" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>

      {/* EXPERTISE SECTION */}
      <section id="expertise" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-[#ff4757]"></div>
            <span className="text-[#ff4757] font-semibold">Skills</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Full Stack Development & UI/UX</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16">
            Combining technical knowledge, creativity, problem-solving skills, and an understanding of user needs to develop effective digital solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-badge">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-20 px-6 bg-[#0d1230]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
          {/* Left Side - Big Number */}
          <div className="md:w-1/3">
            <div className="border border-white/10 rounded-lg p-8 text-center">
              <div className="text-8xl font-bold mb-2">1+</div>
              <div className="w-12 h-12 bg-[#ff4757] rounded-full mx-auto mb-4"></div>
              <div className="text-2xl font-semibold">Years</div>
              <div className="text-xl text-gray-400">Professional</div>
              <div className="text-xl text-gray-400">Experience</div>
            </div>
          </div>

          {/* Right Side - Timeline */}
          <div className="md:w-2/3">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-[#ff4757]"></div>
              <span className="text-[#ff4757] font-semibold">Experience</span>
            </div>
            <h2 className="text-4xl font-bold mb-12">Professional Journey</h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="exp-icon-box">{exp.icon}</div>
                    <div>
                      <p className="text-[#ff4757] text-sm font-semibold mb-1">{exp.date}</p>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed ml-16">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KEY ACCOMPLISHMENTS */}
      <section id="accomplishments" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-[#ff4757]"></div>
            <span className="text-[#ff4757] font-semibold">Key Accomplishments</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Key Accomplishments</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16">
            Highlights of my academic and professional achievements that demonstrate my skills and dedication.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accomplishments.map((acc, index) => (
              <div key={index} className="accomplishment-card text-left">
                <div className="text-4xl mb-4">{acc.icon}</div>
                <h3 className="text-xl font-bold mb-3">{acc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{acc.desc}</p>
                <button className="text-[#ff4757] text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Read More <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arrow Divider */}
      <div className="section-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff4757" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>

      {/* ✅ CHANGED: DOWNLOAD RESUME SECTION (Replaces Contact Form) */}
      <section id="contact" className="py-20 px-6 bg-[#0d1230]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-[#ff4757]"></div>
            <span className="text-[#ff4757] font-semibold">Get My Resume</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Download Resume</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Open to opportunities in UI/UX design, digital product development, and AI-driven tech projects. 
            Feel free to download my resume to learn more about my skills and experiences!
          </p>

          {/* ✅ BIG DOWNLOAD BUTTON */}
          <a 
            href="/RESUME_NURUL%20FATIMAH.pdf" 
            download 
            className="inline-flex items-center gap-3 btn-red px-10 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Download Resume
          </a>

          <p className="text-gray-500 text-sm mt-6">
            PDF Format • Updated 2026
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-[#ff4757]">Nurul</span> Fatimah
          </h3>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6">
            IT Graduate with First Class Honours passionate about UI/UX design, web development, and creating intuitive digital experiences.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <a href="#" className="social-icon">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="#" className="social-icon">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-4">
            <button onClick={() => scrollToSection('bio')} className="hover:text-white transition">Bio</button>
            <button onClick={() => scrollToSection('expertise')} className="hover:text-white transition">Skills</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-white transition">Experience</button>
            <button onClick={() => scrollToSection('accomplishments')} className="hover:text-white transition">Key Accomplishments</button>
          </div>
          <p className="text-gray-500 text-xs">
            © 2026 Nurul Fatimah Binti Mutalib. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;