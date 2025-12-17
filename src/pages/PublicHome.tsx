import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Code, Globe, Target, Eye, ChevronRight, Mail, MapPin, Phone, 
  Menu, X, Server, Shield, Cpu, ArrowRight, CheckCircle2, Zap, Smartphone
} from 'lucide-react';

const PublicHome: React.FC = () => {
  const navigate = useNavigate();
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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-white">
      
      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-blue-600 to-cyan-500 p-2 rounded-lg text-white">
              <Code size={24} strokeWidth={3} />
            </div>
            <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
              DigiSols
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Vision', 'Partners', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-bold uppercase tracking-wider hover:text-cyan-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-300'}`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => navigate('/login')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              Client Login
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col gap-4 md:hidden">
            {['About', 'Vision', 'Partners', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left font-bold text-slate-700 py-2 border-b border-slate-100"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => navigate('/login')}
              className="bg-blue-600 text-white py-3 rounded-lg font-bold mt-2"
            >
              Client Login
            </button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative bg-slate-900 h-screen flex items-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600 rounded-full blur-[150px]"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-cyan-500 rounded-full blur-[150px]"></div>
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.05 }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
              <Zap size={14} fill="currentColor" /> Innovating Tomorrow
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              We Build <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Digital Solutions</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              DigiSols is a premier software development house tailored to enterprise needs. We transform complex requirements into elegant, high-performance software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <button onClick={() => scrollToSection('contact')} className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-cyan-50 transition-colors flex items-center justify-center gap-2 group">
                Start a Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </button>
              <button onClick={() => scrollToSection('about')} className="bg-transparent border border-slate-600 text-white px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-colors">
                Learn More
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
                   <div className="text-xs text-slate-500 font-mono">dashboard.tsx</div>
                </div>
                <div className="space-y-3">
                   <div className="h-4 bg-slate-700 rounded w-3/4 animate-pulse"></div>
                   <div className="h-4 bg-slate-700 rounded w-1/2 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                   <div className="h-32 bg-slate-800/50 rounded border border-slate-700/50 mt-4 flex items-center justify-center text-slate-600 font-mono text-sm">
                      &lt;SystemArchitecture /&gt;
                   </div>
                </div>
             </div>
          </div>
        </div>
      </header>

      {/* --- ABOUT US --- */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Who We Are</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              <span className="font-bold text-blue-600">DigiSols</span> is short for Digital Solutions. We are a team of passionate engineers, designers, and strategists dedicated to solving business challenges through technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { icon: Server, title: 'Enterprise Software', desc: 'Scalable backend systems designed for high availability and security.' },
               { icon: Globe, title: 'Web Applications', desc: 'Responsive, modern front-end experiences using React and Next.js.' },
               { icon: Smartphone, title: 'Mobile Solutions', desc: 'Native and cross-platform apps that keep your workforce connected.' }
             ].map((feature, i) => (
               <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all group">
                 <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                   <feature.icon size={28} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                 <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- VISION & MISSION --- */}
      <section id="vision" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10" style={{ backgroundImage: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 100%)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Vision */}
            <div className="flex flex-col justify-center">
               <div className="flex items-center gap-3 text-cyan-400 mb-4">
                 <Eye size={24} />
                 <span className="font-bold uppercase tracking-widest">Our Vision</span>
               </div>
               <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                 To be the catalyst for <span className="text-blue-400">global digital transformation</span>.
               </h3>
               <p className="text-slate-400 text-lg leading-relaxed">
                 We envision a world where technology empowers every business to reach its full potential. By bridging the gap between complex problems and digital solutions, we aim to create a smarter, more connected future.
               </p>
            </div>

            {/* Mission */}
            <div className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
               <div className="flex items-center gap-3 text-yellow-400 mb-4">
                 <Target size={24} />
                 <span className="font-bold uppercase tracking-widest">Our Mission</span>
               </div>
               <h3 className="text-2xl font-bold mb-6">Delivering Excellence</h3>
               <ul className="space-y-4">
                 {[
                   'Develop software that meets specific customer requirements.',
                   'Ensure reliability, security, and scalability in every line of code.',
                   'Provide continuous support and adaptation to market changes.'
                 ].map((item, i) => (
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
      <section id="partners" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-12">Trusted by Industry Leaders</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             {[
               { name: 'Vulcan Mining', color: 'bg-blue-900' },
               { name: 'Global Logistics', color: 'bg-orange-600' },
               { name: 'Safety First', color: 'bg-green-700' },
               { name: 'Mota-Engil', color: 'bg-slate-800' }
             ].map((partner, i) => (
               <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex items-center justify-center h-32 group hover:shadow-lg transition-shadow">
                 {/* Placeholder for Logos */}
                 <div className={`text-xl font-black ${partner.name === 'Vulcan Mining' ? 'text-blue-900' : 'text-slate-700'} group-hover:scale-110 transition-transform`}>
                    {partner.name}
                 </div>
               </div>
             ))}
          </div>
          
          <div className="mt-12 p-6 bg-blue-100 rounded-2xl inline-flex items-center gap-4 text-blue-900">
             <span className="font-bold">Over 12,000+ Safety Records Managed</span>
             <div className="h-4 w-px bg-blue-300"></div>
             <span className="font-bold">99.9% Uptime</span>
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 rounded-full blur-[100px] opacity-20"></div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
               <div>
                 <h2 className="text-4xl font-black mb-6">Let's Build Something Great</h2>
                 <p className="text-slate-400 mb-8">
                   Ready to transform your business? Contact our team for a consultation.
                 </p>
                 
                 <div className="space-y-6">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-cyan-400">
                       <Mail size={20} />
                     </div>
                     <div>
                       <div className="text-xs text-slate-500 uppercase font-bold">Email Us</div>
                       <div className="font-medium">contact@digisols.com</div>
                     </div>
                   </div>
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-cyan-400">
                       <Phone size={20} />
                     </div>
                     <div>
                       <div className="text-xs text-slate-500 uppercase font-bold">Call Us</div>
                       <div className="font-medium">+258 84 123 4567</div>
                     </div>
                   </div>
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-cyan-400">
                       <MapPin size={20} />
                     </div>
                     <div>
                       <div className="text-xs text-slate-500 uppercase font-bold">Visit Us</div>
                       <div className="font-medium">Maputo, Mozambique</div>
                     </div>
                   </div>
                 </div>
               </div>

               <div className="bg-white text-slate-900 p-8 rounded-3xl">
                 <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                   <div>
                     <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Name</label>
                     <input type="text" className="w-full bg-slate-100 border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Your Name" />
                   </div>
                   <div>
                     <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Email</label>
                     <input type="email" className="w-full bg-slate-100 border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="john@company.com" />
                   </div>
                   <div>
                     <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Message</label>
                     <textarea className="w-full bg-slate-100 border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none h-32 resize-none" placeholder="Tell us about your project..."></textarea>
                   </div>
                   <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
                     Send Message
                   </button>
                 </form>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Code size={20} />
            <span className="text-lg font-bold text-white">DigiSols</span>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} DigiSols. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicHome;