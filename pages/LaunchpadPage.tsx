import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, GraduationCap, Activity, Wallet, Wrench, CreditCard, 
  User, Bell, LayoutGrid, ArrowRight, Star, ChevronLeft, Home, Globe, Lock
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LaunchpadPageProps {
    userRole: string;
    userName: string;
    isPreview?: boolean;
}

const LaunchpadPage: React.FC<LaunchpadPageProps> = ({ userRole, userName, isPreview = false }) => {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  const applications = [
    {
      id: 'cars',
      name: 'CARS (SaaS)',
      desc: t.portfolio?.items?.cars?.category || 'Compliance Management',
      icon: ShieldCheck,
      color: 'blue',
      gradient: 'from-blue-600 to-indigo-700',
      status: t.launchpad?.status?.active || 'Active',
      path: '/cars-login',
      isAvailable: true
    },
    {
      id: 'edudesk',
      name: 'EduDesk',
      desc: t.portfolio?.items?.edudesk?.category || 'Education Management',
      icon: GraduationCap,
      color: 'indigo',
      gradient: 'from-indigo-500 to-blue-500',
      status: t.launchpad?.status?.access || 'Request Access',
      path: '/portfolio/edudesk',
      isAvailable: false
    },
    {
      id: 'h365',
      name: 'H365',
      desc: t.portfolio?.items?.h365?.category || 'Healthcare Dashboard',
      icon: Activity,
      color: 'rose',
      gradient: 'from-rose-500 to-pink-500',
      status: t.launchpad?.status?.access || 'Request Access',
      path: '/portfolio/h365',
      isAvailable: false
    },
    {
      id: 'microfin',
      name: 'MicroFin',
      desc: t.portfolio?.items?.microfin?.category || 'Financial Controls',
      icon: Wallet,
      color: 'amber',
      gradient: 'from-amber-500 to-orange-500',
      status: t.launchpad?.status?.trial || 'Beta',
      path: '/portfolio/microfin',
      isAvailable: false
    },
    {
      id: 'jactrac',
      name: 'JacTrac Mini',
      desc: t.portfolio?.items?.jactrac?.category || 'Asset Tracking',
      icon: Wrench,
      color: 'orange',
      gradient: 'from-orange-600 to-red-500',
      status: t.launchpad?.status?.active || 'Active',
      path: '/portfolio/jactrac',
      isAvailable: false
    },
    {
      id: 'swiftpos',
      name: 'SwiftPOS',
      desc: t.portfolio?.items?.swiftpos?.category || 'Inventory Control',
      icon: CreditCard,
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-500',
      status: t.launchpad?.status?.access || 'Request Access',
      path: '/portfolio/swiftpos',
      isAvailable: false
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6 flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
              <button onClick={() => navigate('/')} className="p-2 mr-2 text-slate-400 hover:text-white transition-colors bg-white/5 rounded-lg border border-white/10" title="Back to Website">
                  <Home size={20} />
              </button>
              <div className="bg-gradient-to-tr from-blue-600 to-cyan-500 p-2 rounded-lg text-white">
                  <LayoutGrid size={24} />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">DigiSols <span className="text-slate-500 font-light">Hub</span></span>
          </div>
          
          <div className="flex items-center gap-4">
              {/* Language Selector */}
              <button onClick={toggleLanguage} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-black text-xs bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md uppercase tracking-widest">
                  <Globe size={14} />
                  {language}
              </button>

              <button className="text-slate-400 hover:text-white transition-colors relative p-2 bg-white/5 rounded-full border border-white/10">
                  <Bell size={20} />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full"></span>
              </button>
              <div className="h-8 w-px bg-slate-800"></div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                      {userName.charAt(0)}
                  </div>
                  <div className="hidden md:block text-left">
                      <div className="text-xs font-bold text-white leading-none">{userName}</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">{userRole}</div>
                  </div>
              </div>
          </div>
      </nav>

      {/* Main Grid */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          
          <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">{t.launchpad?.title || 'Launchpad'}</h1>
              <p className="text-slate-400 text-lg">{t.launchpad?.welcome?.replace('{name}', userName.split(' ')[0]) || `Welcome, ${userName}`}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((app, i) => {
                  const Icon = app.icon;
                  const isActive = app.status === (t.launchpad?.status?.active || 'Active');
                  const isTrial = app.status === (t.launchpad?.status?.trial || 'Beta');
                  const canLaunch = app.isAvailable;

                  return (
                      <div 
                        key={app.id}
                        onClick={() => canLaunch && navigate(app.path)}
                        className={`group relative bg-slate-900/50 border border-slate-800 rounded-[2.5rem] p-8 cursor-pointer overflow-hidden transition-all duration-500 ${canLaunch ? 'hover:border-slate-700 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2' : 'opacity-40 grayscale cursor-not-allowed'}`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                          {/* Hover Gradient Overlay */}
                          {canLaunch && <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>}
                          
                          <div className="relative z-10 flex flex-col h-full">
                              <div className="flex justify-between items-start mb-10">
                                  <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${canLaunch ? app.gradient : 'from-slate-700 to-slate-800'} flex items-center justify-center text-white shadow-2xl shadow-black/50 transform ${canLaunch ? 'group-hover:scale-110' : ''} transition-transform duration-500`}>
                                      {canLaunch ? <Icon size={32} /> : <Lock size={32} className="text-slate-500" />}
                                  </div>
                                  <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                                      isActive && canLaunch ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                                      isTrial && canLaunch ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                                      'bg-slate-800 text-slate-500 border-slate-700'
                                  }`}>
                                      {canLaunch ? app.status : 'Pending Setup'}
                                  </div>
                              </div>

                              <div className="flex-1">
                                  <h3 className={`text-2xl font-black text-white mb-2 tracking-tight ${canLaunch ? 'group-hover:text-blue-400' : ''} transition-colors`}>{app.name}</h3>
                                  <p className="text-slate-500 text-sm leading-relaxed">{app.desc}</p>
                              </div>

                              <div className="mt-10 flex items-center justify-between">
                                  <span className={`text-xs font-bold uppercase tracking-widest ${canLaunch ? (isActive || isTrial ? (t.launchpad?.btnLaunch || 'Launch') : (t.launchpad?.btnExplore || 'View')) : 'Locked'}`}>
                                      {isActive || isTrial ? t.launchpad?.btnLaunch || 'Launch' : t.launchpad?.btnExplore || 'View'}
                                  </span>
                                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${canLaunch ? 'bg-blue-600 border-blue-500 text-white' : 'bg-transparent border-slate-800 text-slate-800'}`}>
                                      <ArrowRight size={18} className={canLaunch ? "group-hover:translate-x-1 transition-transform" : ""} />
                                  </div>
                              </div>
                          </div>
                      </div>
                  );
              })}
          </div>

          {/* SaaS Support Footer */}
          <div className="mt-20 p-10 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-[3rem] border border-white/5 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-white/10 transition-all duration-500">
              <div className="flex gap-6 items-center">
                  <div className="p-4 bg-yellow-500/20 rounded-2xl text-yellow-500 group-hover:scale-110 transition-transform duration-500">
                      <Star size={32} fill="currentColor" />
                  </div>
                  <div className="text-left">
                      <h4 className="text-xl font-bold text-white">{t.launchpad?.footer?.title || 'Unified Support'}</h4>
                      <p className="text-slate-400 text-sm">{t.launchpad?.footer?.desc || 'Contact DigiSols for custom architecture.'}</p>
                  </div>
              </div>
              <button 
                onClick={() => navigate('/')}
                className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-slate-200 transition-all shadow-xl hover:scale-105 active:scale-95"
              >
                  {t.launchpad?.footer?.btn || 'Contact Us'}
              </button>
          </div>
      </main>

      {/* Floating Status Bar */}
      <footer className="fixed bottom-6 right-6 z-50">
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 px-4 py-2 rounded-full shadow-2xl flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{t.launchpad?.globalStatus || 'Online'}</span>
          </div>
      </footer>
    </div>
  );
};

export default LaunchpadPage;