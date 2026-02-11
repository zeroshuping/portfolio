import React, { useState, useEffect } from 'react';
import { 
  Rocket, Navigation, Globe2, ChevronDown, 
  Users, Zap, CheckCircle2,
  Anchor, Compass, ShoppingCart, ChevronRight,
  ShieldCheck, BarChart3, Presentation, Heart,
  Flame, Target, Settings, BrainCircuit, Activity, Layers,
  Smile, Quote, MapPin, Award, Mail, Briefcase,
  Terminal, BarChart, Globe
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
      <h2 className={`text-5xl sm:text-6xl md:text-[8rem] font-black mb-6 tracking-tighter leading-none ${dark ? 'text-white' : 'text-zinc-900'}`}>{title}</h2>
    </div>
    {subtitle && <p className={`text-base md:text-xl max-w-3xl font-medium leading-relaxed opacity-80 ${dark ? 'text-zinc-300' : 'text-zinc-600'}`}>{subtitle}</p>}
  </div>
);

// --- Main App ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  const profileImage = "https://lh3.googleusercontent.com/d/1TreWDclrBf7VvV34QqsWKqCxEqBP3nF4";

  const careerData = [
    { 
      role: '船副 (Officer)', 
      org: 'LNG 天然氣船', 
      date: '2022 - PRESENT', 
      color: 'blue', 
      icon: <Anchor />,
      details: [
        '負責 10 萬多噸級 LNG 船之航行安全、貨物裝卸作業監控與風險控管。',
        '於跨文化與資源受限環境中，確保標準流程 (SOP)真正落地生根。',
        '具備國際海事法規、跨國溝通協作與高壓力環境決策能力。'
      ]
    },
    { 
      role: '電商部門經理', 
      org: 'Costco Taiwan', 
      date: '2017 - 2022', 
      color: 'emerald', 
      icon: <ShoppingCart />,
      details: [
        '負責官方網站整體營運，建立數位行銷、內容產出與營運標準化流程。',
        '管理商品生命週期與平台效能，顯著提升營運效率與轉換率。',
        '數位化績效追蹤體系，將繁雜的零售數據轉化為可執行之商業決策。'
      ]
    },
    { 
      role: '共同創辦人', 
      org: 'FunTime 旅遊比價平台', 
      date: '2008 - 2017', 
      color: 'amber', 
      icon: <Rocket />,
      details: [
        '從 0 到 1 打造全台領先的旅遊搜尋服務，橫跨產品規劃、技術研發與市場商務擴展。',
        '建立橫跨技術、產品與營運的溝通橋樑，落實使用者導向之數位轉型策略。'
      ]
    },
    { 
      role: '顧問', 
      org: '意藍科技 (Eland Tech)', 
      date: '2006 - 2008', 
      color: 'slate', 
      icon: <Briefcase />,
      details: [
        '協助市場開發、客製化系統規劃與編寫產品技術文件。'
      ]
    },
    { 
      role: '產品經理', 
      org: 'ezTravel (易遊網)', 
      date: '2002 - 2006', 
      color: 'blue', 
      icon: <Presentation />,
      details: [
        '負責旅遊產品線開發與銷售策略。',
        '導入 ERP 系統，優化團隊協作效能並提升產能。',
        '長期與政府共辦觀光活動，提供總經理產業分析與輿情。'
      ]
    }
  ];

  const impactProjects = [
    {
      country: 'Kyrgyzstan',
      title: '吉爾吉斯計畫',
      tagline: '將「標準化 × 以人為本 × 效率」轉化為在地服務的具體行動。',
      description: '我不只是去執行任務，更是去傳遞工具。透過「陪同實作」，將專業經驗轉化為在地團隊可持續操作的資產。',
      color: 'amber',
      icon: <Smile />,
      actions: [
        { title: '品牌敘事與數位資產', desc: '將在地特色轉化為具吸引力的品牌故事，建立行銷素材庫。' },
        { title: '數位優化與流程活化', desc: '協助文史數位化與品牌活化，建立在地內容產出流程。' },
        { title: '數位 SOP 與文化傳承', desc: '建立易於維護的數位指南，確保營運流程能持續運作。' }
      ]
    },
    {
      country: 'Belize',
      title: '貝里斯計畫',
      tagline: '將「需求轉譯 × 數據賦能 × 知識留存」轉化為減輕團隊負擔的後勤支援。',
      description: '擔任業務端與技術端的橋樑 (RA Support)，將模糊需求轉化為清晰的功能規格 (Functional Specs)，減少開發溝通成本。',
      color: 'emerald',
      icon: <Terminal />,
      actions: [
        { title: '需求轉譯 RA Support', desc: '將模糊需求轉化為清晰功能規格，極小化溝通與開發成本。' },
        { title: '數據賦能 Dashboard', desc: '協同建置自動化儀表板，將營運數據轉化為透明可視的決策工具。' },
        { title: '知識留存與 SOP', desc: '撰寫使用者手冊與 SOP，確保系統知識不因人員異動而斷層。' }
      ]
    },
    {
      country: 'Indonesia',
      title: '印尼計畫',
      tagline: '將「市場利基 × 文化敘事 × 商業落地」轉化為社區產業的實質成長動能。',
      description: '結合 Google Trends 數據洞察與田野訪談，協助社區挖掘產品的差異化優勢，建立可持續獲利的行銷模式。',
      color: 'blue',
      icon: <Globe />,
      actions: [
        { title: '市場洞察 Niche Market', desc: '結合數據與田野訪談，挖掘產品差異化優勢，鎖定高價值市場。' },
        { title: '文化敘事 Brand Assets', desc: '透過「故事採集」將在地文化轉化為具感染力的品牌資產。' },
        { title: '商業落地 Sustainability', desc: '導入跨國成功案例，建立可持續獲利的行銷與營運模式。' }
      ]
    }
  ];

  const pillarData = [
    {
      label: 'Shuping.',
      title: 'The Pioneer · 0→1 開創者',
      desc: '具備從零開始的開創精神。橫跨旅遊、商管與航海，善於運用數位工具與系統化方法，將繁瑣任務轉化為高效流程。',
      color: 'amber',
      letter: 'u'
    },
    {
      label: 'Shopping.',
      title: 'The Empowering Partner · 賦能型協作者',
      desc: '於大型零售電商建立可擴充的 SOP。我專注於「可複製的成功」，讓系統成為支撐組織穩定運作與知識傳承的根基。',
      color: 'emerald',
      letter: 'o'
    },
    {
      label: 'Shipping.',
      title: 'The Performer · 海上實踐者',
      desc: '於極限環境執行任務，重視紀律與精確度。在 10 萬多噸級 LNG 船上，清楚的架構是守護營運安全的唯一防線。',
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
              { id: 'blueprint', label: 'I can' }
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

            <div className="reveal-item space-y-6 md:space-y-8 max-w-xl mb-12 md:mb-16">
              <p className="text-xl md:text-3xl font-black text-zinc-800 leading-[1.2] tracking-tight">
                二十年跨界實踐，橫跨數位新創、大型零售與國際航運，<br className="hidden md:block"/>
                專注於將營運經驗轉化為在地可持續運作的制度與流程。
              </p>
              <p className="text-zinc-500 font-medium text-base md:text-lg leading-relaxed border-l-4 border-amber-500 pl-5 md:pl-6 py-1 md:py-2">
                我致力於透過系統化架構解決複雜問題。透過協作，協助組織進行數位優化與技術移轉，核心始終在於將「效率」轉化為穩定的「專業影響力」。
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
            subtitle="橫跨開創、營運與執行，將多維經驗整合為一套獨特的專業體系。"
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

                  <p className="text-base md:text-xl font-medium text-zinc-500 leading-relaxed pl-4 border-l-4 border-zinc-100 group-hover:border-zinc-200 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - I WORK */}
      <section id="timeline" className="py-24 md:py-40 px-6 md:px-8 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="I work" 
            subtitle="從數位新創、跨國零售到國際航運，始終如一的專業承諾。"
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

                  <div className="grid gap-4 md:gap-5">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-4 md:gap-5 p-5 md:p-8 bg-zinc-50/50 rounded-3xl group-hover:bg-white transition-all shadow-sm group-hover:shadow-md border border-zinc-100/50">
                        <CheckCircle2 size={24} className="text-amber-500 mt-1 shrink-0" />
                        <p className="text-zinc-800 font-bold leading-snug text-lg md:text-2xl tracking-tight">
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

      {/* Impact Section - I CAN */}
      <section id="blueprint" className="py-24 md:py-40 bg-zinc-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <SectionHeader 
            title="I can" 
            subtitle="將專業知識與營運經驗轉化為在地團隊可持續操作的資產。"
            dark
            annotation="Impact Strategy"
          />
          
          <div className="grid gap-20 md:gap-32">
            {impactProjects.map((project, idx) => (
              <div key={idx} className={`reveal-item ${
                project.color === 'amber' ? 'bg-amber-500' : 
                project.color === 'emerald' ? 'bg-emerald-500' : 'bg-blue-600'
              } rounded-[3rem] md:rounded-[5rem] px-6 py-12 md:p-24 text-zinc-900 overflow-hidden relative group shadow-2xl`}>
                <div className="absolute top-0 right-0 p-8 md:p-16 opacity-5 group-hover:rotate-12 transition-transform duration-1000">
                  {React.cloneElement(project.icon as React.ReactElement<any>, { className: "w-64 h-64 md:w-[400px] md:h-[400px]", strokeWidth: 1 })}
                </div>
                
                <div className="relative z-10">
                  <div className="max-w-5xl mb-12 md:mb-16">
                    <h3 className="text-4xl md:text-8xl font-black tracking-tighter leading-[1] mb-8 md:mb-12">
                      {project.title}
                    </h3>
                    <div className="space-y-6">
                      <p className="text-xl md:text-3xl font-black opacity-90 leading-tight">
                        {project.tagline}
                      </p>
                      <p className="text-lg md:text-2xl font-bold opacity-80 leading-relaxed italic border-l-4 border-zinc-900 pl-4 md:pl-6 py-1 md:py-2">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                    {project.actions.map((action, aIdx) => (
                      <div key={aIdx} className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] border border-white/40 shadow-xl hover:translate-y-[-5px] transition-all duration-700 group/card flex flex-col">
                        <h4 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 tracking-tight text-zinc-900 leading-tight">
                          {action.title}
                        </h4>
                        <p className="text-base md:text-lg font-medium leading-relaxed text-zinc-500 group-hover/card:text-zinc-800 transition-colors">
                          {action.desc}
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
