
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, User, ArrowRight, Loader2, Code, ChevronLeft, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulated API Call
    setTimeout(() => {
      // Mock validation
      if (email && password) {
        onLogin(); // Set authenticated state in parent
        navigate('/launchpad'); // Land on App Selection Hub
      } else {
        setError('Please enter valid credentials.');
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4 relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-[50vh] bg-slate-900 clip-path-slant"></div>
      </div>
      
      {/* Top Controls */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
        <button 
          onClick={() => navigate('/')}
          className="text-white/80 hover:text-white flex items-center gap-2 text-sm font-bold"
        >
          <ChevronLeft size={16} /> {t.portfolio.back}
        </button>

        <button 
            onClick={toggleLanguage} 
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-black text-xs bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md uppercase tracking-widest"
        >
            <Globe size={14} />
            {language}
        </button>
      </div>

      <div className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-8 text-center text-white">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
            <Shield size={32} className="text-cyan-400" />
          </div>
          <h2 className="text-2xl font-black tracking-tight">{t.publicHome.nav.enterHub}</h2>
          <p className="text-slate-400 text-sm mt-1">Secure Access to DigiSols Ecosystem</p>
        </div>

        {/* Form */}
        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500">
                  <User size={18} />
                </div>
                <input 
                  type="email" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-slate-800 font-medium outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  placeholder="admin@vulcan.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500">
                  <Lock size={18} />
                </div>
                <input 
                  type="password" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-slate-800 font-medium outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-50 text-red-600 text-xs font-bold rounded-lg text-center animate-shake">
                {error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full py-3.5 rounded-xl text-white font-bold flex items-center justify-center gap-2 shadow-lg transition-all transform hover:-translate-y-0.5 ${isLoading ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30'}`}
            >
              {isLoading ? <Loader2 size={20} className="animate-spin" /> : <span className="flex items-center gap-2">{t.auth.login} <ArrowRight size={18}/></span>}
            </button>

          </form>
        </div>

        <div className="p-4 bg-slate-50 text-center border-t border-slate-100">
          <p className="text-xs text-slate-400 font-medium">
            Powered by <span className="text-slate-600 font-bold">DigiSols</span> Security
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
