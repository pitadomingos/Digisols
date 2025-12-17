
import React, { useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, CheckCircle2, Layout, Zap, Users, BarChart3, 
  Target, Globe, ShieldCheck, Smartphone, GraduationCap, 
  Activity, Wallet, Wrench, CreditCard, ChevronRight, Rocket,
  Server, Shield, Box, Database, TrendingUp, Search, Lock
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface CaseStudyPageProps {
    isAuthenticated?: boolean;
}

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ isAuthenticated }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  const studiesData = useMemo(() => {
    const labels = t.caseStudies.labels;
    
    return {
      cars: {
        title: 'CARS (SaaS)',
        subtitle: t.caseStudies.cars.subtitle,
        challenge: t.caseStudies.cars.challenge,
        solution: t.caseStudies.cars.solution,
        features: t.caseStudies.cars.features,
        impact: [
          { label: t.caseStudies.cars.impact[0].label, value: '98%', desc: t.caseStudies.cars.impact[0].desc },
          { label: t.caseStudies.cars.impact[1].label, value: '0%', desc: t.caseStudies.cars.impact[1].desc },
          { label: t.caseStudies.cars.impact[2].label, value: '-60%', desc: t.caseStudies.cars.impact[2].desc }
        ],
        stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'MQTT'],
        color: 'blue',
        icon: ShieldCheck,
        gradient: 'from-blue-600 to-indigo-700',
        appPath: '/cars-login',
        isAvailable: true
      },
      edudesk: {
        title: 'EduDesk',
        subtitle: t.caseStudies.edudesk.subtitle,
        challenge: t.caseStudies.edudesk.challenge,
        solution: t.caseStudies.edudesk.solution,
        features: t.caseStudies.edudesk.features,
        impact: [
          { label: t.caseStudies.edudesk.impact[0].label, value: '+22%', desc: t.caseStudies.edudesk.impact[0].desc },
          { label: t.caseStudies.edudesk.impact[1].label, value: '85%', desc: t.caseStudies.edudesk.impact[1].desc },
          { label: t.caseStudies.edudesk.impact[2].label, value: '-35%', desc: t.caseStudies.edudesk.impact[2].desc }
        ],
        stack: ['Next.js', 'Tailwind', 'PostgreSQL', 'Twilio API', 'NFC Sync'],
        color: 'indigo',
        icon: GraduationCap,
        gradient: 'from-indigo-50 to-blue-500',
        appPath: '#',
        isAvailable: false
      },
      h365: {
        title: 'H365',
        subtitle: t.caseStudies.h365.subtitle,
        challenge: t.caseStudies.h365.challenge,
        solution: t.caseStudies.h365.solution,
        features: t.caseStudies.h365.features,
        impact: [
          { label: t.caseStudies.h365.impact[0].label, value: '-42%', desc: t.caseStudies.h365.impact[0].desc },
          { label: t.caseStudies.h365.impact[1].label, value: '-88%', desc: t.caseStudies.h365.impact[1].desc },
          { label: t.caseStudies.h365.impact[2].label, value: 'Inst.', desc: t.caseStudies.h365.impact[2].desc }
        ],
        stack: ['React', 'Python (AI)', 'Redis Cache', 'MongoDB', 'WebRTC'],
        color: 'rose',
        icon: Activity,
        gradient: 'from-rose-500 to-pink-500',
        appPath: '#',
        isAvailable: false
      },
      microfin: {
          title: 'MicroFin',
          subtitle: t.caseStudies.microfin.subtitle,
          challenge: t.caseStudies.microfin.challenge,
          solution: t.caseStudies.microfin.solution,
          features: t.caseStudies.microfin.features,
          impact: [
            { label: t.caseStudies.microfin.impact[0].label, value: '28%', desc: t.caseStudies.microfin.impact[0].desc },
            { label: t.caseStudies.microfin.impact[1].label, value: '4min', desc: t.caseStudies.microfin.impact[1].desc },
            { label: t.caseStudies.microfin.impact[2].label, value: '3x', desc: t.caseStudies.microfin.impact[2].desc }
          ],
          stack: ['TypeScript', 'Node.js', 'AWS Lambda', 'DynamoDB', 'OAuth2'],
          color: 'amber',
          icon: Wallet,
          gradient: 'from-amber-500 to-orange-500',
          appPath: '#',
          isAvailable: false
      },
      jactrac: {
          title: 'JacTrac Mini',
          subtitle: t.caseStudies.jactrac.subtitle,
          challenge: t.caseStudies.jactrac.challenge,
          solution: t.caseStudies.jactrac.solution,
          features: t.caseStudies.jactrac.features,
          impact: [
            { label: t.caseStudies.jactrac.impact[0].label, value: '-31%', desc: t.caseStudies.jactrac.impact[0].desc },
            { label: t.caseStudies.jactrac.impact[1].label, value: '+20%', desc: t.caseStudies.jactrac.impact[1].desc },
            { label: t.caseStudies.jactrac.impact[2].label, value: '-15%', desc: t.caseStudies.jactrac.impact[2].desc }
          ],
          stack: ['React Native', 'SQLite', 'IoT Gateway (MQTT)', 'Azure IoT Hub'],
          color: 'orange',
          icon: Wrench,
          gradient: 'from-orange-600 to-red-500',
          appPath: '#',
          isAvailable: false
      },
      swiftpos: {
          title: 'SwiftPOS',
          subtitle: t.caseStudies.swiftpos.subtitle,
          challenge: t.caseStudies.swiftpos.challenge,
          solution: t.caseStudies.swiftpos.solution,
          features: t.caseStudies.swiftpos.features,
          impact: [
            { label: t.caseStudies.swiftpos.impact[0].label, value: '-55%', desc: t.caseStudies.swiftpos.impact[0].desc },
            { label: t.caseStudies.swiftpos.impact[1].label, value: '99.9%', desc: t.caseStudies.swiftpos.impact[1].desc },
            { label: t.caseStudies.swiftpos.impact[2].label, value: '-90%', desc: t.caseStudies.swiftpos.impact[2].desc }
          ],
          stack: ['C# .NET', 'Electron', 'SQL Server', 'Onvif API', 'OpenCV'],
          color: 'emerald',
          icon: CreditCard,
          gradient: 'from-emerald-500 to-teal-500',
          appPath: '#',
          isAvailable: false
      }
    };
  }, [t]);

  const currentStudy = useMemo(() => studiesData[id as keyof typeof studiesData] || studiesData.cars, [id, studiesData]);
  const ProductIcon = currentStudy.icon;
  const canLaunch = currentStudy.isAvailable;
  const labels = t.caseStudies.labels;

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <header className={`relative bg-slate-900 text-white pt-24 pb-48 overflow-hidden`}>
          <div className="absolute inset-0 opacity-20">
              <div className={`absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-${currentStudy.color}-600 rounded-full blur-[150px]`}></div>
              <div className={`absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-${currentStudy.color}-50 rounded-full blur-[150px]`}></div>
          </div>
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.05 }}></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
             <div className="absolute top-[-60px] left-6 right-6 flex items-center justify-between">
                <button onClick={() => navigate('/portfolio')} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-bold text-sm bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
                    <ArrowLeft size={16} /> {t.portfolio.back}
                </button>
                
                {/* Language Toggle */}
                <button onClick={toggleLanguage} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-black text-xs bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md uppercase tracking-widest text-center">
                    <Globe size={14} />
                    {language}
                </button>
             </div>
             
             <div className={`w-20 h-20 bg-gradient-to-br ${currentStudy.gradient} rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-black/50 transform animate-float`}>
                <ProductIcon size={40} className="text-white" />
             </div>

             <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter animate-fade-in-up">
               {currentStudy.title}
             </h1>
             <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                {currentStudy.subtitle}
             </p>
          </div>
      </header>

      {/* --- CONTENT GRID --- */}
      <div className="max-w-7xl mx-auto px-6 -mt-32 relative z-20 pb-24">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {currentStudy.impact.map((stat, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center group hover:scale-105 transition-transform">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">{stat.label}</span>
                    <div className={`text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br ${currentStudy.gradient} mb-3`}>{stat.value}</div>
                    <p className="text-sm text-slate-500 font-medium">{stat.desc}</p>
                </div>
            ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className={`p-2 bg-${currentStudy.color}-50 rounded-lg text-${currentStudy.color}-600`}>
                            <Target size={24} />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight">{labels.challenge}</h2>
                    </div>
                    <p className="text-xl text-slate-600 leading-relaxed font-light text-justify">
                        {currentStudy.challenge}
                    </p>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className={`p-2 bg-${currentStudy.color}-50 rounded-lg text-${currentStudy.color}-600`}>
                            <Zap size={24} />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight">{labels.solution}</h2>
                    </div>
                    <p className="text-xl text-slate-600 leading-relaxed font-light text-justify">
                        {currentStudy.solution}
                    </p>
                </section>

                <section className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                        <CheckCircle2 className="text-green-500" /> {labels.techFeatures}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {currentStudy.features.map((feature, i) => (
                            <div key={i} className="flex gap-4 items-start p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                                <div className={`w-2 h-2 rounded-full bg-${currentStudy.color}-500 mt-2 shrink-0`}></div>
                                <p className="text-slate-700 font-medium leading-relaxed">{feature}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <div className="lg:col-span-4 space-y-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-${currentStudy.color}-500 rounded-full blur-[80px] opacity-20`}></div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 border-b border-white/10 pb-4">{labels.stack}</h3>
                    <div className="flex flex-wrap gap-3">
                        {currentStudy.stack.map(tech => (
                            <span key={tech} className="px-4 py-2 bg-white/10 rounded-xl text-sm font-bold border border-white/10 backdrop-blur-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">{labels.buildLaunch}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8">
                        {canLaunch ? labels.standardsDesc : labels.stagingDesc}
                    </p>
                    {canLaunch ? (
                        <Link to={currentStudy.appPath} className={`w-full py-4 rounded-2xl bg-gradient-to-r ${currentStudy.gradient} text-white font-black shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2`}>
                            <Rocket size={18} /> {t.launchpad.btnLaunch}
                        </Link>
                    ) : (
                        <div className="w-full py-4 rounded-2xl bg-slate-100 text-slate-400 font-black flex items-center justify-center gap-2 border border-slate-200 cursor-not-allowed opacity-60">
                            <Lock size={18} /> {t.launchpad.btnLaunch}
                        </div>
                    )}
                    {!isAuthenticated && canLaunch && (
                        <p className="text-[10px] text-slate-400 mt-3 text-center uppercase tracking-widest">{labels.sandboxAccess}</p>
                    )}
                </div>
            </div>
        </div>
      </div>

      <footer className="bg-slate-50 py-24 text-center border-t border-slate-100">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-black text-slate-900 mb-6">{labels.ready}</h2>
            <p className="text-slate-500 text-lg mb-8">
               {labels.readyDesc}
            </p>
            <button onClick={() => navigate('/')} className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold transition-all hover:bg-slate-800">
               {labels.contact}
            </button>
         </div>
      </footer>
    </div>
  );
};

export default CaseStudyPage;
