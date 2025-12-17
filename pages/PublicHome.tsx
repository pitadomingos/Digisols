
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Code, Globe, Target, Eye, ChevronRight, Mail, MapPin, Phone, 
  Menu, X, Server, Shield, Cpu, ArrowRight, CheckCircle2, Zap, Smartphone, Briefcase, LayoutGrid, ShieldCheck,
  GraduationCap, Activity, Wallet, ExternalLink
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PublicHome: React.FC = () => {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      const offset = 80; // Account for fixed header
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

  const navItems = ['about', 'vision', 'partners', 'contact'];

  const handlePartnerClick = (name: string) => {
      window.open('https://google.com/search?q=' + encodeURIComponent(name), '_blank');
  };

  return (
    <div className="font-sans text-slate-800 bg-white selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      
      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="bg-gradient-to-tr from-blue-600 to-cyan-500 p-2 rounded-lg text-white">
              <Code size={24} strokeWidth={3} />
            </div>
            <span className={`text-2xl font-black tracking-tighter transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
              DigiSols
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => navigate('/portfolio')}
              className={`text-sm font-bold uppercase tracking-wider hover:text-blue-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-300'}`}
            >
              {t.publicHome.nav.portfolio}
            </button>
            
            {navItems.map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-bold uppercase tracking-wider hover:text-blue-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-300'}`}
              >
                {t.publicHome.nav[item as keyof typeof t.publicHome.nav]}
              </button>
            ))}
            
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>

            {/* Language Toggle */}
            <button onClick={toggleLanguage} className={`flex items-center gap-2 px-3 py-1 rounded-full border transition-all text-xs font-black uppercase ${isScrolled ? 'border-slate-200 text-slate-600 hover:bg-slate-50' : 'border-white/20 text-white hover:bg-white/10'}`}>
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
            <button onClick={toggleLanguage} className="text-slate-800 font-bold uppercase text-xs border border-slate-200 px-2 py-1 rounded">{language}</button>
            <button className="text-slate-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col gap-4 md:hidden">
            <button 
              onClick={() => { navigate('/portfolio'); setMobileMenuOpen(false); }}
              className="text-left font-bold text-slate-700 py-2 border-b border-slate-100"
            >
              {t.publicHome.nav.portfolio}
            </button>
            {navItems.map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-left font-bold text-slate-700 py-2 border-b border-slate-100"
              >
                {t.publicHome.nav[item as keyof typeof t.publicHome.nav]}
              </button>
            ))}
            <button onClick={() => navigate('/launchpad')} className="bg-blue-600 text-white py-3 rounded-lg font-bold">{t.publicHome.nav.enterHub}</button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative bg-slate-900 h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600 rounded-full blur-[150px]"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-cyan-500 rounded-full blur-[150px]"></div>
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.05 }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
              <Zap size={14} fill="currentColor" /> {t.publicHome.hero.badge}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {t.publicHome.hero.title1} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{t.publicHome.hero.title2}</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t.publicHome.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <button onClick={() => navigate('/portfolio')} className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-cyan-50 transition-colors flex items-center justify-center gap-2 group shadow-xl">
                {t.publicHome.hero.btnExplore} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </button>
              <button onClick={() => navigate('/launchpad')} className="bg-transparent border border-slate-600 text-white px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-colors">
                {t.publicHome.hero.btnEnter}
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block relative animate-float">
             <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute -top-4 -right-4 bg-cyan-500 w-20 h-20 rounded-full blur-2xl opacity-50"></div>
                <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-4">
                   <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                   </div>
                   <div className="text-xs text-slate-500 font-mono">middleware.node</div>
                </div>
                <div className="space-y-3">
                   <div className="h-4 bg-slate-700 rounded w-3/4 animate-pulse"></div>
                   <div className="h-4 bg-slate-700 rounded w-1/2 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                   <div className="h-32 bg-slate-800/50 rounded border border-slate-700/50 mt-4 flex items-center justify-center text-slate-600 font-mono text-sm">
                      [ System: Sync Active ]
                   </div>
                </div>
             </div>
          </div>
        </div>
      </header>

      {/* --- ABOUT US --- */}
      <section id="about" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">{t.publicHome.about.title}</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.publicHome.about.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: ShieldCheck, title: 'CARS', desc: t.publicHome.about.cards.cars },
               { icon: GraduationCap, title: 'EduDesk', desc: t.publicHome.about.cards.edudesk },
               { icon: Activity, title: 'H365', desc: t.publicHome.about.cards.h365 },
               { icon: Wallet, title: 'MicroFin', desc: t.publicHome.about.cards.microfin }
             ].map((feature, i) => (
               <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all group">
                 <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                   <feature.icon size={28} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                 <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- VISION --- */}
      <section id="vision" className="py-24 bg-slate-900 text-white relative overflow-hidden scroll-mt-20">
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
               <p className="text-slate-400 text-lg leading-relaxed">
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
      <section id="partners" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Trusted by Industry Leaders</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-12"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { name: 'Vulcan Mining', industry: 'Mining & Resources' },
               { name: 'Global Logistics', industry: 'Supply Chain' },
               { name: 'Safety First', industry: 'Consulting' },
               { name: 'Mota-Engil', industry: 'Construction' }
             ].map((partner, i) => (
               <div 
                 key={i} 
                 onClick={() => handlePartnerClick(partner.name)}
                 className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 flex flex-col items-center justify-center gap-4 cursor-pointer group hover:shadow-2xl hover:-translate-y-2 hover:border-blue-500 transition-all duration-500"
               >
                 <div className="relative">
                    <div className={`text-2xl font-black ${partner.name === 'Vulcan Mining' ? 'text-blue-900' : 'text-slate-700'} group-hover:scale-110 transition-transform`}>
                        {partner.name}
                    </div>
                    <div className="absolute -top-1 -right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink size={12} className="text-blue-500" />
                    </div>
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-400 transition-colors">
                    {partner.industry}
                 </span>
               </div>
             ))}
          </div>
          
          <div className="mt-16 p-8 bg-blue-50 dark:bg-blue-900/10 rounded-[2.5rem] border border-blue-100 dark:border-blue-800 inline-flex flex-col md:flex-row items-center gap-6 text-blue-900 dark:text-blue-300">
             <div className="flex items-center gap-3">
                <ShieldCheck size={24} className="text-blue-600" />
                <span className="font-bold">Over 12,000+ Safety Records Managed</span>
             </div>
             <div className="hidden md:block h-6 w-px bg-blue-200"></div>
             <div className="flex items-center gap-3">
                <Activity size={24} className="text-blue-600" />
                <span className="font-bold">99.9% Operational Reliability</span>
             </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-24 bg-white relative scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 rounded-full blur-[100px] opacity-20"></div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
               <div>
                 <h2 className="text-4xl font-black mb-6">{t.publicHome.contact.title}</h2>
                 <p className="text-slate-400 mb-8 leading-relaxed">
                   {t.publicHome.contact.desc}
                 </p>
                 <div className="space-y-6">
                   <div className="flex items-center gap-4 group">
                     <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all"><Mail size={20} /></div>
                     <div><div className="text-xs text-slate-500 uppercase font-bold">{t.publicHome.contact.emailLabel}</div><div className="font-medium text-sm md:text-base">pita.domingos@zd044.onmicrosoft.com</div></div>
                   </div>
                   <div className="flex items-center gap-4 group">
                     <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all"><Phone size={20} /></div>
                     <div><div className="text-xs text-slate-500 uppercase font-bold">{t.publicHome.contact.callLabel}</div><div className="font-medium">+258 84 547 9481</div></div>
                   </div>
                 </div>
               </div>
               <div className="bg-white text-slate-900 p-8 rounded-3xl shadow-inner">
                 <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                   <input type="text" className="w-full bg-slate-100 border-none rounded-lg p-3 text-sm font-bold focus:ring-2 focus:ring-blue-500 outline-none" placeholder={t.publicHome.contact.form.name} />
                   <input type="email" className="w-full bg-slate-100 border-none rounded-lg p-3 text-sm font-bold focus:ring-2 focus:ring-blue-500 outline-none" placeholder={t.publicHome.contact.form.email} />
                   <textarea className="w-full bg-slate-100 border-none rounded-lg p-3 text-sm h-32 resize-none font-bold focus:ring-2 focus:ring-blue-500 outline-none" placeholder={t.publicHome.contact.form.details}></textarea>
                   <button className="w-full bg-blue-600 text-white font-black py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 uppercase tracking-wider">{t.publicHome.contact.form.btn}</button>
                 </form>
               </div>
             </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2" onClick={() => scrollToSection('top')}><Code size={20} /><span className="text-lg font-bold text-white">DigiSols</span></div>
          <div className="text-sm">&copy; {new Date().getFullYear()} DigiSols Enterprise. All rights reserved.</div>
          <div className="flex gap-6 text-sm font-medium">
            <a href="https://github.com/digisols" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                GitHub <ExternalLink size={12} />
            </a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <button onClick={() => scrollToSection('partners')} className="hover:text-white transition-colors">{t.publicHome.nav.partners}</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicHome;
