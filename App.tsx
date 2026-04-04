import React, { useState, useEffect } from 'react';
import { 
  Rocket, ChevronDown, 
  CheckCircle2,
  Anchor, ShoppingCart, 
  Presentation, Mail
} from 'lucide-react';

// --- Sub-components ---

const SectionHeader: React.FC<{ title: string; subtitle?: string; dark?: boolean; annotation?: string }> = ({ title, subtitle, dark, annotation }) => (
  <div className="mb-10 md:mb-12">
    <div className={`flex items-center space-x-3 mb-4 ${dark ? 'opacity-100' : ''}`}>
      <div className={`h-[2px] w-8 md:w-10 ${dark ? 'bg-amber-400' : 'bg-amber-500'}`}></div>
      {annotation && (
        <span className={`${dark ? 'text-amber-400' : 'text-amber-600'} font-black tracking-[0.25em] uppercase text-[9px] md:text-[10px]`}>
          {annotation}
        </span>
      )}
    </div>
    <div className="relative inline-block">
      <h2 className={`text-5xl sm:text-6xl md:text-[8rem] font-black mb-8 tracking-tighter leading-none ${dark ? 'text-white' : 'text-zinc-900'}`}>{title}</h2>
    </div>
    {subtitle && <p className={`text-lg md:text-2xl max-w-4xl font-medium leading-relaxed text-pretty ${dark ? 'text-zinc-300' : 'text-zinc-500'}`}>{subtitle}</p>}
  </div>
);

// --- Main App ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.05 });

    const revealElements = document.querySelectorAll('section, .reveal-item');
    revealElements.forEach(el => {
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
      }
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  const profileImage = "https://lh3.googleusercontent.com/d/1TreWDclrBf7VvV34QqsWKqCxEqBP3nF4";

  const careerData = [
    { 
      role: 'Deck Officer', 
      org: 'LNG Vessel', 
      date: '2022 - PRESENT', 
      color: 'blue', 
      icon: <Anchor />,
      details: [
        'Managed navigation safety, cargo operations, and risk for 100,000-ton LNG vessels.',
        'Institutionalized sustainable workflows within multicultural, resource-limited environments.',
        'Expert in maritime law, global collaboration, and high-pressure decision-making.'
      ]
    },
    { 
      role: 'e-Commerce manager', 
      org: 'Costco Taiwan', 
      date: '2017 - 2022', 
      color: 'emerald', 
      icon: <ShoppingCart />,
      details: [
        'Standardized site operations, marketing, and content workflows.',
        'Optimized product lifecycles and platform performance to boost efficiency and conversion.',
        'Transformed complex retail data into actionable business decisions through digital tracking.'
      ]
    },
    { 
      role: 'Co-founder', 
      org: 'FunTime travel meta search site', 
      date: '2007 - 2017', 
      color: 'amber', 
      icon: <Rocket />,
      details: [
        'Built Taiwan’s leading travel search from 0→1, scaling product, tech, and market expansion.',
        'Bridged tech, product, and operations to drive user-centric digital transformation'
      ]
    },
    { 
      role: 'Product Manager', 
      org: 'EzTravel Online Travel Agent', 
      date: '2002 - 2006', 
      color: 'blue', 
      icon: <Presentation />,
      details: [
        'Led travel product development and sales strategy.',
        'Deployed ERP systems to streamline collaboration, boosting productivity by 60%.',
        'Partnered with government for tourism growth and provided executive industry insights.'
      ]
    }
  ];

  const pillarData = [
    {
      label: 'Shuping.',
      title: '0→1 Pioneer',
      desc: 'Bridging tourism, business, and seafaring. I streamline complex tasks into high-efficiency digital workflows',
      color: 'amber',
      letter: 'u'
    },
    {
      label: 'Shopping.',
      title: 'The Empowering Partner',
      desc: 'Established scalable retail workflows for repeatable success and institutional knowledge continuity.',
      color: 'emerald',
      letter: 'o'
    },
    {
      label: 'Shipping.',
      title: 'The Navigator',
      desc: 'Disciplined execution in extreme environments. On a 100,000-ton LNG ship, clear structure is the ultimate line of defense for safety.',
      color: 'blue',
      letter: 'i'
    }
  ];

  return (
    <div className="min-h-screen selection:bg-amber-100 selection:text-amber-900 bg-[#fafaf9]">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'glass-nav py-3 md:py-4 shadow-sm border-b border-zinc-200/50' : 'py-6 md:py-10'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="group font-black text-xl md:text-2xl tracking-tighter">
            <span className="text-amber-600">LIN</span> <span className="text-zinc-900">SHUPING</span>
          </button>
          <div className="hidden lg:flex items-center space-x-12 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400">
            {[
              { id: 'portfolio', label: 'I am' },
              { id: 'timeline', label: 'I work' },
              { id: 'mission', label: 'Mission' }
            ].map((item) => (
              <button key={item.id} onClick={() => scrollToId(item.id)} className="hover:text-amber-600 transition-colors relative group">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-500 transition-all group-hover:w-full"></span>
              </button>
            ))}
            <button onClick={() => scrollToId('contact')} className="bg-zinc-900 text-white px-8 py-3 rounded-full text-[10px] hover:bg-amber-600 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-zinc-200">
              CONNECT
            </button>
          </div>
          <button onClick={() => scrollToId('contact')} className="lg:hidden bg-zinc-900 text-white px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest">
            CONNECT
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-16 md:pb-20 px-6 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="z-10 order-2 lg:order-1">
            <div className="reveal-item mb-4 md:mb-6">
               <span className="personal-note text-xl md:text-2xl">The Multi-Dimensional Integrator —</span>
            </div>
            <h1 className="fluid-hero-text font-black text-zinc-900 flex flex-col mb-10 md:mb-12">
              <div className="reveal-item" style={{ transitionDelay: '0.1s' }}>
                Sh<span className="text-amber-500">u</span>ping.
              </div>
              <div className="reveal-item" style={{ transitionDelay: '0.2s' }}>
                Sh<span className="text-emerald-500">o</span>pping.
              </div>
              <div className="reveal-item" style={{ transitionDelay: '0.3s' }}>
                Sh<span className="text-blue-500">i</span>pping.
              </div>
            </h1>

            <div className="reveal-item space-y-6 md:space-y-8 max-w-2xl mb-12 md:mb-16">
              <p className="text-xl md:text-3xl font-bold text-zinc-700 leading-[1.3] tracking-tight text-pretty">
                The Navigator: 20+ years of operations leadership in digital tech and maritime shipping.<br /> 
                <span className="text-zinc-400 font-medium">I transform professional experience into sustainable, localized systems.</span>
              </p>
            </div>
            
            <button 
              onClick={() => scrollToId('portfolio')}
              className="reveal-item group flex items-center space-x-4 text-zinc-400 hover:text-amber-600 transition-all font-black text-[10px] md:text-xs uppercase tracking-[0.3em]"
            >
              <span>Explore My Identity</span>
              <ChevronDown className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          <div className="relative order-1 lg:order-2 reveal-item z-0 group pt-6 md:pt-10">
            <div className="absolute -top-12 -left-12 md:-top-24 md:-left-24 w-64 h-64 md:w-[30rem] md:h-[30rem] bg-amber-100/40 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[100px] opacity-40 animate-pulse"></div>
            
            <div className="relative aspect-[4/5] bg-white rounded-[3rem] md:rounded-[5rem] overflow-hidden paper-shadow border-[12px] md:border-[24px] border-white rotate-2 hover:rotate-0 transition-all duration-[1.2s] ease-out shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] flex items-center justify-center">
              {!imgError ? (
                <img 
                  src={profileImage} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[2s] ease-out contrast-[1.12] brightness-[1.06] saturate-[1.08]" 
                  alt="Lin Shuping" 
                  style={{ imageRendering: '-webkit-optimize-contrast' as any }}
                  loading="eager"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="text-zinc-400 font-black text-center p-8 md:p-12 uppercase tracking-widest text-xs leading-relaxed">
                  Portrait Fetching...<br/>
                  <span className="text-[10px] font-bold opacity-60 italic">Standardizing pixels</span>
                </div>
              )}
            </div>
            
            <div className="absolute -top-8 -right-8 md:-top-16 md:-right-16 bg-zinc-900 text-white px-6 py-6 md:px-10 md:py-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl rotate-12 flex flex-col items-center justify-center leading-none z-20 border-[4px] md:border-[6px] border-white group-hover:rotate-6 transition-transform duration-700">
               <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-1 md:mb-2 opacity-70">Experience</span>
               <span className="text-2xl md:text-4xl font-black tracking-tighter">20Y+</span>
            </div>
            <span className="personal-note absolute -bottom-12 md:-bottom-20 right-4 md:right-8 rotate-3 opacity-60 text-2xl md:text-3xl">Efficiency meets Impact.</span>
          </div>
        </div>
      </section>

      {/* Identity Pillars Section - I AM */}
      <section id="portfolio" className="py-24 md:py-40 px-6 md:px-8 bg-white border-y border-zinc-100 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="I am" 
            annotation="Identity"
          />
          
          <div className="grid grid-cols-1 gap-16 md:gap-32 mt-12 md:mt-20">
            {pillarData.map((item, idx) => (
              <div key={idx} className="reveal-item group flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-20 max-w-6xl relative">
                <div className="relative shrink-0">
                   <h3 className="text-5xl md:text-8xl font-black text-zinc-900 tracking-tighter leading-none relative z-10">
                    Sh<span className={
                      item.color === 'amber' ? 'text-amber-500' : 
                      item.color === 'emerald' ? 'text-emerald-500' : 'text-blue-500'
                    }>{item.letter}</span>{item.label.substring(item.label.indexOf(item.letter) + 1)}
                  </h3>
                </div>

                <div className="flex-1 space-y-4 md:space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`h-[2px] w-8 md:w-12 ${
                      item.color === 'amber' ? 'bg-amber-500' : 
                      item.color === 'emerald' ? 'bg-emerald-500' : 'bg-blue-500'
                    }`}></div>
                    <h4 className="text-xl md:text-3xl font-black text-zinc-900 tracking-tight">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-lg md:text-xl lg:text-2xl font-medium text-zinc-500 leading-relaxed pl-6 border-l-4 border-zinc-100 group-hover:border-zinc-200 transition-colors text-pretty">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - I WORK */}
      <section id="timeline" className="py-24 md:py-40 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="I work" 
            annotation="Experience"
          />
          <div className="grid gap-8 md:gap-10">
            {careerData.map((item, idx) => (
              <div key={idx} className="reveal-item bg-white px-7 py-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] paper-shadow border border-zinc-100 flex flex-col md:flex-row gap-6 md:gap-12 group hover:border-amber-400/30 transition-all duration-700">
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-10">
                    <div className="flex items-center gap-5 md:block">
                      <div className={`w-16 h-16 ${
                        item.color === 'blue' ? 'bg-blue-500' : 
                        item.color === 'emerald' ? 'bg-emerald-500' :
                        item.color === 'slate' ? 'bg-slate-500' : 'bg-amber-500'
                      } text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg border-4 border-white mb-0 md:mb-6`}>
                        {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-8 h-8", strokeWidth: 2.5 })}
                      </div>

                      <div className="max-w-md">
                        <h4 className="text-2xl md:text-3xl font-black text-zinc-900 group-hover:text-amber-600 transition-colors leading-tight mb-1 tracking-tight">
                          {item.role}
                        </h4>
                        <p className="text-zinc-400 font-bold text-lg md:text-xl uppercase tracking-widest leading-none">{item.org}</p>
                      </div>
                    </div>

                    <span className="text-[10px] md:text-xs font-black text-zinc-500 bg-zinc-100/80 px-4 py-2 md:px-6 md:py-3 rounded-full tracking-[0.2em] mt-5 md:mt-0 self-start border border-zinc-200/50">
                      {item.date}
                    </span>
                  </div>

                  <div className="grid gap-5 md:gap-6">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-5 md:gap-6 p-6 md:p-10 bg-zinc-50/50 rounded-[2rem] md:rounded-[3rem] group-hover:bg-white transition-all shadow-sm group-hover:shadow-md border border-zinc-100/50">
                        <CheckCircle2 size={24} className="text-amber-500 mt-1 shrink-0" />
                        <p className="text-zinc-700 font-semibold leading-relaxed text-lg md:text-xl lg:text-2xl tracking-tight text-pretty">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 md:py-40 px-6 md:px-8 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Mission" 
            annotation="Vision"
          />
          
          <div className="reveal-item max-w-5xl space-y-8 md:space-y-12">
            <div className="mb-8 md:mb-12">
               <h4 className="text-2xl md:text-3xl font-black text-zinc-900 leading-tight mb-1 tracking-tight">
                 Why IVF 2026
               </h4>
               <div className="h-1 w-12 bg-amber-500 mt-2"></div>
            </div>

            <p className="text-2xl md:text-4xl font-bold text-zinc-800 leading-[1.4] tracking-tight text-pretty">
              I am transitioning from digital leadership and maritime service toward purpose-driven contribution. 
              <span className="text-zinc-400"> Working in isolated, high-pressure environments has shaped my interest in Mental Health & Wellbeing.</span>
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              <div className="p-8 md:p-12 bg-white rounded-[2.5rem] md:rounded-[3.5rem] paper-shadow border border-zinc-100">
                <p className="text-lg md:text-xl lg:text-2xl font-medium text-zinc-600 leading-relaxed text-pretty">
                  I bring practical experience in simplifying processes and supporting teams with sustainable, low-maintenance solutions.
                </p>
              </div>
              
              <div className="p-8 md:p-12 bg-amber-50/50 rounded-[2.5rem] md:rounded-[3.5rem] border border-amber-100">
                <p className="text-lg md:text-xl lg:text-2xl font-medium text-amber-900/70 leading-relaxed text-pretty">
                  As I will already be in Budapest, I have arranged my own travel and accommodation. I hope this allows resources to support other participants, while I fully engage in the forum’s sessions, workshops, and exchange opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Contact Section */}
      <section id="contact" className="py-24 md:py-40 px-6 md:px-8 text-center bg-white relative overflow-hidden">
        <div className="reveal-item max-w-6xl mx-auto bg-zinc-50 p-10 md:p-24 rounded-[3.5rem] md:rounded-[6rem] paper-shadow border border-zinc-100 group relative">
          <div className="absolute top-0 right-0 p-8 md:p-12 opacity-[0.03] group-hover:rotate-6 transition-transform duration-1000">
             <Rocket className="w-48 h-48 md:w-[300px] md:h-[300px]" />
          </div>
          
          <div className="mb-10 md:mb-12">
            <div className="font-black text-zinc-900 text-4xl sm:text-5xl md:text-[7rem] tracking-tighter leading-[1] md:leading-[0.85] space-y-1">
              <div>Sh<span className="text-amber-500">u</span>ping.</div>
              <div>Sh<span className="text-emerald-500">o</span>pping.</div>
              <div>Sh<span className="text-blue-500">i</span>pping.</div>
            </div>
          </div>

          <div className="mb-12 md:mb-20">
            <h3 className="text-[10px] md:text-lg font-black text-zinc-400 uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-80 mb-8 md:mb-12">
              Ready for the Next Mission
            </h3>
            
            <div className="flex flex-col items-center">
              <a 
                href="mailto:zeroshuping@gmail.com" 
                className="group flex flex-col sm:flex-row items-center gap-4 md:gap-6 bg-white px-8 py-6 md:px-16 md:py-10 rounded-3xl md:rounded-full paper-shadow border border-zinc-100 hover:border-amber-400/50 hover:bg-zinc-900 hover:text-white transition-all duration-700 active:scale-95 w-full sm:w-auto"
              >
                <div className="bg-amber-100 p-3 md:p-4 rounded-full group-hover:bg-amber-500 transition-colors duration-500">
                  <Mail className="w-6 h-6 md:w-10 md:h-10 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <span className="text-lg md:text-5xl font-black tracking-tighter break-all sm:break-normal">
                  zeroshuping@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-20 px-6 md:px-8 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <p className="font-black text-lg md:text-xl tracking-tighter mb-2 md:mb-4">LIN SHUPING</p>
            <p className="text-zinc-400 text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">© 2024. ALL SYSTEMS READY.</p>
          </div>
          <div className="flex items-center space-x-6 md:space-x-8 text-center md:text-right text-[10px] md:text-xs font-black uppercase tracking-widest text-zinc-400">
             <span>Professional Folio v5.1</span>
             <span className="h-1 w-1 bg-amber-500 rounded-full"></span>
             <span>Taiwan Based</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
