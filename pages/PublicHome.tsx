import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Code, Globe, Target, Eye, Mail, MapPin, Phone, 
  Menu, X, Server, Shield, Cpu, ArrowRight, CheckCircle2, Zap, 
  Smartphone, ShieldCheck, HardHat, Activity, ExternalLink,
  GraduationCap, Wallet, Monitor
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PublicHome: React.FC = () => {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Typing simulation state
  const [typedCode, setTypedCode] = useState('');
  const [showSyncActive, setShowSyncActive] = useState(false);
  
  const codeSnippet = useMemo(() => `async function syncMiddleware() {
  const source = await HR_Database.fetch();
  const normalized = source.map(emp => ({
    ...emp,
    id: \`VUL-\${emp.id}\`,
    compliance: checkRAC01(emp)
  }));
  await EnterpriseVault.push(normalized);
}`, []);

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < codeSnippet.length) {
        setTypedCode(codeSnippet.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowSyncActive(true), 1000);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, [codeSnippet]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  const navItems = ['about', 'vision', 'mission', 'partners', 'contact'];

  const values = [
    { 
      icon: Cpu, 
      title: t.publicMission.values.precision.title, 
      desc: t.publicMission.values.precision.desc,
      color: 'blue'
    },
    { 
      icon: ShieldCheck, 
      title: t.publicMission.values.safety.title, 
      desc: t.publicMission.values.safety.desc,
      color: 'emerald'
    },
    { 
      icon: Target, 
      title: t.publicMission.values.integrity.title, 
      desc: t.publicMission.values.integrity.desc,
      color: 'indigo'
    }
  ];

  return (
    <div className="font-sans text-slate-800 bg-[#020617] selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#020617]/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="bg-gradient-to-tr from-blue-600 to-cyan-500 p-2 rounded-lg text-white">
              <Code size={24} strokeWidth={3} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">
              DigiSols
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-bold uppercase tracking-wider text-slate-300 hover:text-blue-400 transition-colors"
              >
                {t.publicHome.nav[item as keyof typeof t.publicHome.nav]}
              </button>
            ))}
            
            <button 
              onClick={() => navigate('/portfolio')}
              className="text-sm font-bold uppercase tracking-wider text-slate-300 hover:text-blue-400 transition-colors"
            >
              Portfolio
            </button>

            <div className="h-6 w-px bg-slate-700 mx-2"></div>

            <button onClick={toggleLanguage} className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all text-xs font-black uppercase">
                <Globe size={14} />
                {language}
            </button>

            <button 
              onClick={() => navigate('/launchpad')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              {t.publicHome.nav.enterHub}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button className="text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#020617] shadow-xl border-t border-slate-800 p-6 flex flex-col gap-4 md:hidden">
            {navItems.map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-left font-bold text-slate-300 py-2 border-b border-slate-800"
              >
                {t.publicHome.nav[item as keyof typeof t.publicHome.nav]}
              </button>
            ))}
            <button onClick={() => navigate('/portfolio')} className="text-left font-bold text-slate-300 py-2 border-b border-slate-800">Portfolio</button>
            <button onClick={() => navigate('/launchpad')} className="bg-blue-600 text-white py-3 rounded-lg font-bold">{t.publicHome.nav.enterHub}</button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative bg-[#020617] min-h-screen flex items-center justify-center overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-[0.08]" 
             style={{ 
               backgroundImage: `radial-gradient(circle, #4f46e5 1px, transparent 1px)`,
               backgroundSize: '30px 30px' 
             }}>
        </div>
        
        {/* Glow Effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24">
            {/* Left Content */}
            <div className="text-center lg:text-left">
                {/* Hero Badge */}
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 text-cyan-400 text-xs font-black uppercase tracking-[0.2em] mb-12 animate-fade-in-down shadow-xl">
                  <Zap size={14} fill="currentColor" /> {t.publicHome.hero.badge.toUpperCase()}
                </div>

                {/* Main Title */}
                <h1 className="text-6xl md:text-[5.5rem] font-black text-white leading-[1.05] mb-8 tracking-tight animate-fade-in-up">
                  {t.publicHome.hero.title1} <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{t.publicHome.hero.title2}</span> <br/>
                  <span className="text-slate-300">{t.publicHome.hero.title3}</span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl leading-relaxed animate-fade-in-up font-medium" style={{ animationDelay: '0.1s' }}>
                  {t.publicHome.hero.desc}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <button onClick={() => navigate('/portfolio')} className="bg-white text-slate-900 px-10 py-4 rounded-full font-black hover:bg-cyan-50 transition-all flex items-center justify-center gap-2 group shadow-2xl hover:scale-105 active:scale-95">
                    {t.publicHome.hero.btnExplore} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                  </button>
                  <button onClick={() => navigate('/launchpad')} className="bg-transparent border-2 border-slate-800 text-white px-10 py-4 rounded-full font-black hover:bg-white/5 transition-all hover:border-slate-600 active:scale-95">
                    {t.publicHome.hero.btnEnter}
                  </button>
                </div>
            </div>

            {/* Right Side: Live Typing Code Simulation (macOS Style) */}
            <div className="hidden lg:block relative animate-float">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/50 to-cyan-500/50 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-[#0a0f1e]/80 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden min-h-[380px]">
                    {/* Mac OS Window Header */}
                    <div className="bg-[#1e293b]/50 px-5 py-3 flex items-center justify-between border-b border-white/5">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/20"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/20"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/20"></div>
                        </div>
                        <div className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">middleware.node</div>
                    </div>
                    
                    {/* Code Content */}
                    <div className="p-8 font-mono text-sm leading-relaxed overflow-hidden">
                        <div className="flex gap-4 items-start mb-6">
                            <div className="flex flex-col text-slate-600 text-xs select-none pr-4 border-r border-white/5">
                                <span>01</span>
                                <span>02</span>
                                <span>03</span>
                                <span>04</span>
                                <span>05</span>
                                <span>06</span>
                                <span>07</span>
                                <span>08</span>
                                <span>09</span>
                            </div>
                            <pre className="text-blue-400 flex-1 whitespace-pre-wrap min-h-[160px]">
                                {typedCode}
                                <span className="w-2 h-4 bg-blue-500 inline-block align-middle ml-1 animate-pulse"></span>
                            </pre>
                        </div>
                        
                        {/* Terminal Success Message */}
                        {showSyncActive && (
                            <div className="mt-8 pt-6 border-t border-white/5 animate-fade-in flex items-center justify-center">
                                <div className="px-6 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                                    <span className="text-blue-400 font-bold tracking-widest text-xs uppercase">[ System: Sync Active ]</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
      </header>

      {/* --- ABOUT US --- */}
      <section id="about" className="min-h-screen py-24 bg-white flex flex-col justify-center scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">{t.publicHome.about.title}</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              {t.publicHome.about.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
             {[
               { icon: ShieldCheck, title: 'CARS', desc: t.publicHome.about.cards.cars },
               { icon: GraduationCap, title: 'EduDesk', desc: t.publicHome.about.cards.edudesk },
               { icon: Activity, title: 'H365', desc: t.publicHome.about.cards.h365 },
               { icon: Wallet, title: 'MicroFin', desc: t.publicHome.about.cards.microfin },
               { icon: Monitor, title: 'SMB Web', desc: t.publicHome.about.cards.websites }
             ].map((feature, i) => (
               <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all group">
                 <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                   <feature.icon size={24} />
                 </div>
                 <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                 <p className="text-slate-600 leading-relaxed text-xs">{feature.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- MISSION SECTION --- */}
      <section id="mission" className="min-h-screen py-24 bg-slate-50 flex flex-col justify-center scroll-mt-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
             <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 rounded-full px-4 py-1 text-xs font-black uppercase tracking-widest mb-4">
                <Target size={14} /> {t.publicMission.hero.badge.toUpperCase()}
             </div>
             <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">Our Mission</h2>
             <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-[3rem] shadow-2xl p-10 md:p-16 border border-slate-100 relative overflow-hidden group mb-20">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white mb-6 shadow-xl shadow-blue-500/20">
                        <HardHat size={40} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none mb-4">
                        {t.publicMission.manifesto.title}
                    </h2>
                </div>
                <div className="lg:col-span-8">
                    <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed text-justify italic">
                        "{t.publicMission.manifesto.text}"
                    </p>
                </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
                <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                    <div className={`w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors`}>
                        <v.icon size={32} />
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{v.title}</h4>
                    <p className="text-slate-500 leading-relaxed font-medium">
                        {v.desc}
                    </p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VISION --- */}
      <section id="vision" className="min-h-screen py-24 bg-[#020617] text-white relative overflow-hidden flex flex-col justify-center scroll-mt-20">
        <div className="absolute inset-0 bg-blue-900/10" style={{ backgroundImage: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 100%)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
               <div className="flex items-center gap-3 text-cyan-400 mb-4">
                 <Eye size={24} />
                 <span className="font-bold uppercase tracking-widest">{t.publicHome.vision.title}</span>
               </div>
               <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                 {t.publicHome.vision.headline}
               </h3>
               <p className="text-slate-400 text-lg leading-relaxed font-medium">
                 {t.publicHome.vision.desc}
               </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
               <div className="flex items-center gap-3 text-yellow-400 mb-4">
                 <Target size={24} />
                 <span className="font-bold uppercase tracking-widest">{t.publicHome.vision.mission}</span>
               </div>
               <h3 className="text-2xl font-bold mb-6">{t.publicHome.vision.missionHeadline}</h3>
               <ul className="space-y-4">
                 {t.publicHome.vision.goals.map((item, i) => (
                   <li key={i} className="flex gap-4 items-start">
                     <CheckCircle2 className="text-green-400 shrink-0 mt-1" size={20} />
                     <span className="text-slate-300 text-lg">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- PARTNERS --- */}
      <section id="partners" className="min-h-[70vh] py-24 bg-slate-50 flex flex-col justify-center scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-4">{t.publicHome.partners.title}</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-12"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
             {[
               { name: 'Vulcan Mining', industry: 'Mining & Resources' },
               { name: 'Global Logistics', industry: 'Supply Chain' },
               { name: 'Safety First', industry: 'Consulting' },
               { name: 'Mota-Engil', industry: 'Construction' },
               { name: 'Amtecheng Engineering', industry: 'Engineering' }
             ].map((partner, i) => (
               <div 
                 key={i} 
                 className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col items-center justify-center gap-4 cursor-default group hover:shadow-2xl hover:-translate-y-2 hover:border-blue-500 transition-all duration-500"
               >
                 <div className="relative">
                    <div className={`text-xl font-black text-center ${partner.name === 'Vulcan Mining' ? 'text-blue-900' : 'text-slate-700'} group-hover:scale-110 transition-transform`}>
                        {partner.name}
                    </div>
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-400 transition-colors">
                    {partner.industry}
                 </span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="min-h-screen py-24 bg-white relative flex flex-col justify-center scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#020617] rounded-[2.5rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden border border-slate-800">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-10"></div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
               <div>
                 <h2 className="text-4xl font-black mb-6">{t.publicHome.contact.title}</h2>
                 <p className="text-slate-400 mb-8 leading-relaxed font-medium">
                   {t.publicHome.contact.desc}
                 </p>
                 <div className="space-y-6">
                   <div className="flex items-center gap-4 group">
                     <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all border border-white/10"><Mail size={20} /></div>
                     <div><div className="text-xs text-slate-500 uppercase font-bold">{t.publicHome.contact.emailLabel}</div><div className="font-medium text-sm md:text-base">pita.domingos@zd044.onmicrosoft.com</div></div>
                   </div>
                   <div className="flex items-center gap-4 group">
                     <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all border border-white/10"><Phone size={20} /></div>
                     <div><div className="text-xs text-slate-500 uppercase font-bold">{t.publicHome.contact.callLabel}</div><div className="font-medium">+258 84 547 9481</div></div>
                   </div>
                 </div>
               </div>
               <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-inner border border-slate-800">
                 <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                   <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm font-bold focus:ring-2 focus:ring-blue-500 outline-none text-white transition-all" placeholder={t.publicHome.contact.form.name} />
                   <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm font-bold focus:ring-2 focus:ring-blue-500 outline-none text-white transition-all" placeholder={t.publicHome.contact.form.email} />
                   <textarea className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm h-32 resize-none font-bold focus:ring-2 focus:ring-blue-500 outline-none text-white transition-all" placeholder={t.publicHome.contact.form.details}></textarea>
                   <button className="w-full bg-blue-600 text-white font-black py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 uppercase tracking-wider">{t.publicHome.contact.form.btn}</button>
                 </form>
               </div>
             </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#020617] text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2"><Code size={20} /><span className="text-lg font-bold text-white">DigiSols</span></div>
          <div className="text-sm font-medium">&copy; {new Date().getFullYear()} DigiSols Enterprise. {t.common.rights}</div>
          <div className="flex gap-6 text-sm font-medium">
            <a href="https://github.com/digisols" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                GitHub <ExternalLink size={12} />
            </a>
            <a href="#" className="hover:text-white transition-colors">{t.common.legal}</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicHome;