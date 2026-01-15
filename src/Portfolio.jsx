import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [config] = useState({
    initials: 'GN',
    name: 'Graham Neely',
    title: 'Aerospace Engineer & Systems Developer',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQE3PGuyeS6oIA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718905890640?e=1769644800&v=beta&t=I1m_Wbqe8fhw3o9KcNsnd6WbXRMQ6jeqPpuRbd8xUX0',
    github: 'https://github.com/graham-neely',
    linkedin: 'https://linkedin.com/in/graham-neely',
    email: 'graham_neely@brown.edu',
    bio: [
      "Aerospace engineer with expertise in propulsion systems, avionics integration, and mission-critical software development.",
      "Passionate about advancing humanity's capabilities in space exploration through innovative engineering solutions and cross-functional collaboration.",
      "Experienced in developing robust systems for extreme environments, with a focus on reliability, performance optimization, and safety-critical applications."
    ],
    projects: [
      {
        title: 'T-REX: Time Resolving Satellite Lab Co-Founder',
        description: 'Co-founded a research lab designing and building a small form factor, inexpensive next-generation LEO black hole observation satellite. Satellite will enable cutting-edge time resolution of celestial targets, along with extending existing VLBI baselines. • Accepted into final round of the NASA NIAC Innovative Technology Development Program for research funding. • Researched, Modeled, and Simulated Spacecraft Bus and Radio Antenna design • Designed laser data downlink scheme capable of 100 Gbps space-to-earth for high-volume VLBI observation. Presented to MIT Lincoln Lab and entered preliminary talks for the supply of TBIRD data downlink satellite derivative. • Simulated Radio Receiver thermal performance and requirements for 86-150 GHz Deep Space Radio Observation. Under NDA with supplier for 15 Kelvin capable cryocooler. Integrated cryocooler into T-REX’s OTS Blue Canyon Bus design. • Optimized radio antenna diameter and surface RMS error versus cost for minimum required integration time for black hole, AGN, and pulsar targets. Organized an independent study of antenna dynamics and construction this semester. • Coordinated Research with Academia and Industry • Developed quantum entangled data transfer schemes with researchers from the University of Australia. Drafted spacecraft design with researchers and engineers from Princeton and JPL. Planned black hole observation campaigns with StSci.',
        image: 'https://cdn.b12.io/client_media/PDpwHsnx/79f7f6a2-12a5-11f0-89b6-0242ac110002-origin.jpg',
        link: 'https://trexsat.org'
      },
      {
        title: 'Brown Space Engineering: R&D Leader',
        description: 'I lead the R&D team to design and implement a high-altitude balloon testbed for components on the BSE CubeSat PVDX. We research and develop future projects and satellite ideas for BSE, including a custom liquid-fueled engine. I teach new team members the basics of engineering, including CAD, Python, 3D printing, and laser cutting. We engage the local Providence community, including local middle and high Schools, with Brown aerospace design and projects.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTLBz-YM-SJxr8gpCZ3iS-SZ99AA-1SRZbg&s',
        link: 'https://brownspace.io'
      },
      {
        title: 'Brown Rocketry: Avionics Lead',
        description: 'Architected high-fidelity simulation environment for testing launch vehicle performance under various atmospheric and operational conditions.',
        image: 'https://drive.google.com/file/d/1r_7Ta_8P5nD_93Ax4z5SOu3VmamhM0Aj/view?usp=sharing',
        link: 'https://www.instagram.com/brownrocketry/'
      },
      {
        title: 'Jet Engine Design and Construction',
        description: 'I designed and built a functioning propane turbojet engine under the mentorship of my engineering teacher, completing the process from initial research and CAD design to manufacturing, assembly, and testing in six months.',
        image: 'https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_4/v1734472956/coloradoacademyorg/scstczer1qgzbb9lar13/DSC_0725-scaled.jpg',
        link: 'https://www.coloradoacademy.org/news/news-details/~board/ca-news/post/neely-24-spends-fire-summer-completing-jet-engine-at-ca'
      }
    ],
    newsTitle: 'Recent Achievement',
    newsHeading: 'Published Research',
    newsContent: "Recent publication on advanced propulsion methodologies in the Journal of Spacecraft and Rockets. The research explores novel approaches to reusable launch vehicle design and optimization.",
    newsLink: '#',
    news: [
      {
        title: 'Grant Applications',
        heading: 'NASA NIAC Final Round',
        content: "T-REX's Mission Proposal has been accepted into the final round of competition for funding from the NASA NIAC Program.",
        link: 'https://drive.google.com/file/d/1CAl5qbf2GhSu1fy4kFBsJHqadCGAUxUD/view?usp=sharing'
      },
      {
        title: 'Conference Presentation and Publication',
        heading: 'AAS 247th Conference Presentation and Publication',
        content: "Presented T-REX satellite mission concepts at the NASA Innovative Advanced Concepts symposium, showcasing novel approaches to time-resolved black hole observation.",
        link: 'https://submissions.mirasmart.com/AAS247/Itinerary/PresentationDetail.aspx?evdid=2480'
      },
      {
        title: 'Conference Presentation and Publication',
        heading: 'ION PNT Conference Presentation and Publication',
        content: "Invited to present T-REX satellite mission concepts at the ION PNT Conference, showcasing novel approaches to navigation.",
        link: 'https://www.ion.org/pnt/abstracts.cfm?paperID=16386'
      },
      {
        title: 'Publication',
        heading: '10th International VLBI Technology Workshop',
        content: "T-REX satellite mission concept published at the 10th International VLBI Technology Workshop.",
        link: 'https://indico.chalmers.se/event/295/contributions/844/'
      },
      {
        title: 'Conference',
        heading: 'IAU Symposium No. 405',
        content: "T-REX team invited to present the T-REX mission concept at the 405th IAU Symposium in the Czech Republic.",
        link: 'https://indico.chalmers.se/event/295/contributions/844/'
      }
    ],
    resumePdf: 'https://drive.google.com/file/d/1Q-5UVxQKiSIUYJN7HTOXqS4fhItR7m82/preview'
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [stars, setStars] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Generate stars
    const newStars = Array.from({ length: 150 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
    setStars(newStars);

    // Update favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%2300D9FF;stop-opacity:1" /><stop offset="100%" style="stop-color:%233B82F6;stop-opacity:1" /></linearGradient></defs><rect width="100" height="100" rx="20" fill="%230F172A"/><text x="50" y="70" font-family="Arial, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="url(%23grad)">GN</text></svg>';
    document.getElementsByTagName('head')[0].appendChild(link);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black relative overflow-hidden">
      {/* Animated Starfield Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`
            }}
          />
        ))}
        
        {/* Nebula effect */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-900/20 via-blue-900/10 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Shooting stars */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-shooting-star"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-shooting-star-delayed"></div>
      </div>

      {/* Header */}
      <header 
        className={`border-b backdrop-blur-2xl sticky top-0 z-50 transition-all duration-700 ${
          scrolled 
            ? 'bg-slate-950/95 shadow-2xl shadow-cyan-500/20 border-cyan-500/30' 
            : 'bg-slate-950/70 border-slate-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <a 
              href="/" 
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tight transform group-hover:scale-110 transition-transform duration-500">
                {config.initials}
              </div>
            </a>
            
            <nav className="hidden md:flex space-x-12">
              {['About', 'Projects', 'Publications', 'Resume'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="text-slate-300 hover:text-cyan-400 transition-all duration-500 font-semibold relative group tracking-wide text-lg cursor-pointer"
                >
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500 shadow-[0_0_8px_rgba(0,217,255,0.8)]"></span>
                </a>
              ))}
            </nav>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 text-slate-300 hover:text-cyan-400 transition-all duration-500 hover:rotate-90 transform"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden mt-8 pb-6 space-y-4 animate-slideDown">
              {['About', 'Projects', 'Publications', 'Resume'].map((item, idx) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    setMobileMenuOpen(false);
                  }}
                  className="block py-3 text-slate-300 hover:text-cyan-400 hover:translate-x-3 transition-all duration-500 text-lg font-semibold cursor-pointer"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {item}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-3 gap-20">
          {/* Profile Section */}
          <div className="md:col-span-1">
            <div className="sticky top-36 space-y-10">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-75 transition-opacity duration-1000 animate-pulse-glow"></div>
                <div className="relative">
                  <img
                    src={config.image}
                    alt={config.name}
                    className="relative w-full rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,217,255,0.3)] transform group-hover:scale-105 transition-all duration-700 border-4 border-cyan-500/30"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 animate-gradient tracking-tighter leading-tight">
                  {config.name}
                </h1>
                <p className="text-slate-400 text-xl tracking-wide font-light leading-relaxed">{config.title}</p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-5">
                {[
                  { href: config.linkedin, Icon: Linkedin },
                  { href: `mailto:${config.email}`, Icon: Mail }
                ].map(({ href, Icon }, idx) => (
                  <a 
                    key={idx}
                    href={href} 
                    target={href.startsWith('mailto:') ? undefined : "_blank"} 
                    rel="noopener noreferrer" 
                    className="group relative p-5 bg-slate-800/60 backdrop-blur-xl rounded-2xl hover:bg-slate-700/60 border-2 border-slate-700/50 hover:border-cyan-500/60 shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 hover:scale-110 hover:-translate-y-2"
                  >
                    <Icon size={26} className="text-slate-400 group-hover:text-cyan-400 transition-colors duration-500" />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="md:col-span-2 space-y-20" id="about">
            {/* About Me */}
            <section className="bg-slate-800/50 backdrop-blur-2xl rounded-3xl p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] hover:shadow-cyan-500/20 transition-all duration-700 border-2 border-slate-700/50 hover:border-cyan-500/30 transform hover:-translate-y-2">
              <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-10 tracking-tighter">
                About
              </h2>
              <div className="space-y-8 text-slate-300 leading-loose text-lg font-light">
                {config.bio.map((paragraph, index) => (
                  <p key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 150}ms` }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section id="projects" className="space-y-10">
              <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tighter">
                Projects
              </h2>

              <div className="grid gap-10">
                {config.projects.map((project, index) => (
                  <div 
                    key={index}
                    className="group bg-slate-800/50 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] hover:shadow-cyan-500/30 transition-all duration-700 border-2 border-slate-700/50 hover:border-cyan-500/40 transform hover:-translate-y-3"
                  >
                    <div className="md:flex">
                      <div className="md:w-2/5 relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-72 md:h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                      <div className="md:w-3/5 p-10">
                        <h3 className="text-3xl font-bold text-cyan-300 mb-6 group-hover:text-cyan-200 transition-colors duration-500">
                          {project.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed mb-8 text-lg font-light">
                          {project.description}
                        </p>
                        <a 
                          href={project.link}
                          className="inline-flex items-center gap-3 text-cyan-400 hover:text-cyan-300 font-semibold text-lg transition-colors duration-500 group/link"
                        >
                          View Project
                          <ExternalLink size={20} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-500" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Publications & Achievements */}
            <section id="publications" className="space-y-10">
              <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tighter">
                Publications & Achievements
              </h2>
              
              <div className="grid gap-8">
                {config.news.map((item, index) => (
                  <div 
                    key={index}
                    className="relative bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-2xl rounded-3xl p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] hover:shadow-cyan-500/30 transition-all duration-700 overflow-hidden border-2 border-slate-700/50 hover:border-cyan-500/40 transform hover:-translate-y-2"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full filter blur-3xl"></div>
                    <div className="relative z-10">
                      <p className="text-sm text-cyan-400 font-bold mb-4 uppercase tracking-widest">{item.title}</p>
                      <h3 className="text-3xl font-bold text-slate-200 mb-6">{item.heading}</h3>
                      <p className="text-slate-400 leading-relaxed mb-8 text-lg font-light">
                        {item.content}
                      </p>
                      <a 
                        href={item.link}
                        className="inline-flex items-center gap-3 text-cyan-400 hover:text-cyan-300 font-semibold text-lg transition-colors duration-500 group/link"
                      >
                        Learn More
                        <ExternalLink size={20} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-500" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Resume */}
            <section id="resume" className="relative bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-2xl rounded-3xl p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden border-2 border-cyan-500/30">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
              <div className="relative z-10">
                <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-10 tracking-tighter">
                  Resume
                </h2>
                <div className="bg-slate-900/70 backdrop-blur-xl rounded-2xl p-10 border-l-4 border-cyan-500 shadow-lg">
                  <p className="text-slate-400 leading-relaxed mb-8 text-lg font-light">
                    View or download my complete resume in PDF format.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={config.resumePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold text-lg rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-500 hover:scale-105"
                    >
                      View Resume
                      <ExternalLink size={20} />
                    </a>
                    <a 
                      href={config.resumePdf}
                      download
                      className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/80 border-2 border-cyan-500/50 text-cyan-400 font-semibold text-lg rounded-xl hover:bg-slate-700/80 hover:border-cyan-400 transition-all duration-500 hover:scale-105"
                    >
                      Download PDF
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                  <div className="mt-8 pt-8 border-t border-slate-700/50">
                    <iframe 
                      src={config.resumePdf}
                      className="w-full h-96 rounded-xl border-2 border-slate-700/50"
                      title="Resume Preview"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 mt-32 py-12 bg-slate-950/80 backdrop-blur-2xl relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-500">
          <p className="animate-fadeIn tracking-wide text-lg font-light">© 2026 {config.name}. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-30px, 30px) rotate(-120deg); }
          66% { transform: translate(20px, -20px) rotate(-240deg); }
        }

        @keyframes shooting-star {
          0% { transform: translate(0, 0); opacity: 1; }
          100% { transform: translate(-300px, 300px); opacity: 0; }
        }

        @keyframes shooting-star-delayed {
          0% { transform: translate(0, 0); opacity: 1; }
          100% { transform: translate(-400px, 400px); opacity: 0; }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.75; }
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        .animate-shooting-star {
          animation: shooting-star 3s ease-in infinite;
        }

        .animate-shooting-star-delayed {
          animation: shooting-star-delayed 4s ease-in infinite 2s;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 6s linear infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 0.4s ease-out forwards;
        }

        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}