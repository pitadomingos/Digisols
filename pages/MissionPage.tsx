import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Globe, Zap, Target, ShieldCheck, Cpu, 
  HardHat, Shield, Activity, Code
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const MissionPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

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
    <div className="font-sans text-slate-800 bg-white min-h-screen selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <header className="bg-slate-900 text-white pt-24 pb-48 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[100%] bg-blue-600 rounded-full blur-[150px] opacity-20 animate-pulse-slow"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav className="absolute top-[-60px] left-6 right-6 flex items-center justify-between">
             <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-bold text-sm bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
                <ArrowLeft size={16} /> {t.portfolio.back}
             </button>
             
             {/* Language Toggle */}
             <button onClick={toggleLanguage} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-black text-xs bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md uppercase tracking-widest text-center">
                <Globe size={14} />
                {language}
             </button>
          </nav>

          <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-5 py-2 text-blue-400 text-xs font-black uppercase tracking-widest mb-8 animate-fade-in-down">
              <Shield size={14} /> {t.publicMission.hero.badge}
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter animate-fade-in-up">
              CARS (RACS)
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: '0.1s' }}>
              {t.publicMission.hero.desc}
            </p>
          </div>
        </div>
      </header>

      {/* --- MANIFESTO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-32 relative z-20 pb-24">
         <div className="bg-slate-50 dark:bg-slate-900 rounded-[3rem] shadow-2xl p-10 md:p-20 border border-slate-200 dark:border-slate-800 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white mb-6 shadow-xl shadow-blue-500/20">
                        <HardHat size={40} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-4">
                        {t.publicMission.manifesto.title}
                    </h2>
                </div>
                <div className="lg:col-span-8">
                    <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-300 font-light leading-relaxed text-justify italic">
                        "{t.publicMission.manifesto.text}"
                    </p>
                </div>
            </div>
         </div>
      </section>

      {/* --- INDUSTRIAL PILLARS --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 mb-4">{t.publicMission.values.title}</h3>
                <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
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

      {/* --- PRODUCT INTEGRATION HIGHLIGHT --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                  <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
                      Intelligent <br/>
                      Machine Ecosystems.
                  </h3>
                  <div className="space-y-6">
                      <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                          <Zap className="text-yellow-400 shrink-0" size={24} />
                          <div>
                              <h4 className="font-bold text-lg">EOM Parameter Extraction</h4>
                              <p className="text-slate-400 text-sm">Real-time CAN-bus integration pulling critical temperature, pressure, and fuel data directly from the ECM.</p>
                          </div>
                      </div>
                      <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                          <Shield className="text-red-400 shrink-0" size={24} />
                          <div>
                              <h4 className="font-bold text-lg">Fire Suppression Systems</h4>
                              <p className="text-slate-400 text-sm">Automated health monitoring and trigger alerts for multi-million dollar asset protection.</p>
                          </div>
                      </div>
                      <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                          <Activity className="text-blue-400 shrink-0" size={24} />
                          <div>
                              <h4 className="font-bold text-lg">Lincoln AutoLub Monitoring</h4>
                              <p className="text-slate-400 text-sm">Predictive lubrication tracking to prevent premature component failure and downtime.</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="relative">
                  <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full animate-pulse-slow"></div>
                  <div className="relative bg-slate-800 border border-slate-700 p-8 rounded-3xl shadow-2xl">
                      <div className="flex items-center gap-4 mb-8">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <span className="text-xs font-mono text-slate-500">telemetry_daemon.v1</span>
                      </div>
                      <div className="space-y-4 font-mono text-sm">
                          <div className="text-blue-400"># Fetching ECM Parameters...</div>
                          <div className="text-slate-300">&gt; Engine Load: 78%</div>
                          <div className="text-slate-300">&gt; Oil Pressure: 62 PSI [OK]</div>
                          <div className="text-green-400">&gt; Fire Suppression: READY</div>
                          <div className="text-yellow-400">&gt; AutoLub Reservoir: 15% [LOW_ALERT]</div>
                          <div className="h-2 w-full bg-slate-700 rounded-full mt-8">
                              <div className="h-full bg-blue-500 w-3/4 animate-pulse"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <footer className="bg-white py-12 text-center text-slate-400 text-xs border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                  <Code size={16} />
                  <span className="font-bold text-slate-900 tracking-widest uppercase">DigiSols Enterprise</span>
              </div>
              <p>&copy; {new Date().getFullYear()} DigiSols. {t.common.rights}</p>
          </div>
      </footer>

    </div>
  );
};

export default MissionPage;