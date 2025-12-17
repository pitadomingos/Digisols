
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Code, GraduationCap, Activity, Wallet, Wrench, CreditCard, 
  ChevronRight, Zap, ShieldCheck, Factory, Anchor, HardHat, Globe
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PortfolioPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  const products = [
    {
      id: 'cars',
      name: 'CARS (SaaS)',
      category: t.portfolio.items.cars.category,
      description: t.portfolio.items.cars.desc,
      icon: ShieldCheck,
      color: 'blue',
      gradient: 'from-blue-600 to-indigo-700',
      industries: ['Mining', 'Oil & Gas', 'Ports', 'Manufacturing']
    },
    {
      id: 'edudesk',
      name: 'EduDesk',
      category: t.portfolio.items.edudesk.category,
      description: t.portfolio.items.edudesk.desc,
      icon: GraduationCap,
      color: 'indigo',
      gradient: 'from-indigo-500 to-blue-500',
      industries: ['Education', 'Gov']
    },
    {
      id: 'h365',
      name: 'H365',
      category: t.portfolio.items.h365.category,
      description: t.portfolio.items.h365.desc,
      icon: Activity,
      color: 'rose',
      gradient: 'from-rose-500 to-pink-500',
      industries: ['Healthcare', 'Clinical']
    },
    {
      id: 'microfin',
      name: 'MicroFin',
      category: t.portfolio.items.microfin.category,
      description: t.portfolio.items.microfin.desc,
      icon: Wallet,
      color: 'amber',
      gradient: 'from-amber-500 to-orange-500',
      industries: ['Finance', 'Banking']
    },
    {
      id: 'jactrac',
      name: 'JacTrac Mini',
      category: t.portfolio.items.jactrac.category,
      description: t.portfolio.items.jactrac.desc,
      icon: Wrench,
      color: 'orange',
      gradient: 'from-orange-600 to-red-500',
      industries: ['Logistics', 'Industry']
    },
    {
      id: 'swiftpos',
      name: 'SwiftPOS',
      category: t.portfolio.items.swiftpos.category,
      description: t.portfolio.items.swiftpos.desc,
      icon: CreditCard,
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-500',
      industries: ['Retail', 'Security']
    }
  ];

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      
      {/* --- HEADER --- */}
      <header className="bg-slate-900 text-white pt-24 pb-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[100%] bg-blue-600 rounded-full blur-[150px] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav className="absolute top-[-60px] left-6 right-6 flex items-center justify-between">
             <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-bold text-sm bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
                <ArrowLeft size={16} /> {t.portfolio.back}
             </button>
             
             {/* Language Toggle */}
             <button onClick={toggleLanguage} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-black text-xs bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md uppercase tracking-widest">
                <Globe size={14} />
                {language}
             </button>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
              <Zap size={14} fill="currentColor" /> {t.portfolio.hero.badge}
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {t.portfolio.hero.title}
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t.portfolio.hero.desc}
            </p>
          </div>
        </div>
      </header>

      {/* --- PORTFOLIO GRID --- */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20 pb-24">
        <div className="grid grid-cols-1 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition-all duration-300 group animate-fade-in-up ${product.id === 'cars' ? 'ring-4 ring-blue-500/20' : ''}`}
              style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
            >
              {/* Icon / Image Section */}
              <div className={`md:w-1/3 bg-gradient-to-br ${product.gradient} p-10 flex flex-col justify-between text-white relative overflow-hidden`}>
                 <div className="absolute top-0 right-0 p-10 opacity-10 transform scale-150 group-hover:scale-125 transition-transform duration-700">
                    <product.icon size={140} />
                 </div>
                 <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                       <product.icon size={32} />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">{product.category}</div>
                    <h3 className="text-3xl font-black">{product.name}</h3>
                 </div>
                 <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                    {product.industries?.map(ind => (
                        <span key={ind} className="bg-black/20 text-[10px] px-2 py-1 rounded-full border border-white/20 font-bold uppercase">{ind}</span>
                    ))}
                 </div>
                 <div className="relative z-10 mt-8">
                    <button 
                      onClick={() => navigate(`/portfolio/${product.id}`)}
                      className="flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all"
                    >
                       {t.portfolio.btnCaseStudy} <ChevronRight size={16} />
                    </button>
                 </div>
              </div>

              {/* Content Section */}
              <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                 <h4 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    {product.name}
                    <span className={`text-xs px-3 py-1 rounded-full font-bold bg-${product.color}-100 text-${product.color}-700`}>
                        {product.id === 'cars' ? t.portfolio.labels.flagship : t.portfolio.labels.ready}
                    </span>
                 </h4>
                 <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {product.description}
                 </p>
                 
                 <div className="flex flex-wrap gap-4">
                    {(product.id === 'cars' ? ['IoT Ready', 'SaaS', 'High Security', 'Offline Capability'] : ['Scalable', 'Secure', 'Cloud-Based']).map(tag => (
                       <span key={tag} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-bold border border-slate-200">
                          {tag}
                       </span>
                    ))}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- FOOTER CTA --- */}
      <section className="bg-slate-900 py-24 text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Need a Custom Solution?</h2>
            <p className="text-slate-400 text-lg mb-8">
               We build tailored software for unique business challenges. Let's discuss your requirements.
            </p>
            <button 
              onClick={() => navigate('/')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-500/30"
            >
               Contact Us
            </button>
         </div>
      </section>

    </div>
  );
};

export default PortfolioPage;
