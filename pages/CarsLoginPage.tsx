
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, User, ArrowRight, Loader2, ChevronLeft, AlertCircle, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface CarsLoginPageProps {
  onLogin: () => void;
}

const CarsLoginPage: React.FC<CarsLoginPageProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (username === 'demo' && password === 'demo') {
        setIsLoading(true);
        setTimeout(() => {
            onLogin();
            navigate('/dashboard');
        }, 1200);
    } else {
        setError('Invalid CARS credentials. Hint: use demo/demo');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-4 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-600 rounded-full blur-[120px]"></div>
      </div>
      
      {/* Top Controls */}
      <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-20">
        <button 
          onClick={() => navigate('/launchpad')}
          className="text-slate-400 hover:text-white flex items-center gap-2 text-sm font-bold bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md transition-all"
        >
          <ChevronLeft size={16} /> {t.portfolio.back}
        </button>

        <button 
            onClick={toggleLanguage} 
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-black text-xs bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md uppercase tracking-widest"
        >
            <Globe size={14} />
            {language}
        </button>
      </div>

      <div className="relative z-10 w-full max-w-md bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-800 flex flex-col animate-fade-in-up">
        
        {/* Header */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 text-center text-white border-b border-slate-800">
          <div className="w-20 h-20 bg-blue-600/20 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-blue-500/30 shadow-2xl shadow-blue-500/20 transform rotate-3">
            <Shield size={40} className="text-blue-400" />
          </div>
          <h2 className="text-3xl font-black tracking-tight mb-2">CARS Manager</h2>
          <p className="text-slate-400 text-sm font-medium tracking-wide">Critical Activity Requirements System</p>
        </div>

        {/* Form */}
        <div className="p-10">
          <form onSubmit={handleLogin} className="space-y-6">
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Identity (Username)</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-500 transition-colors">
                  <User size={18} />
                </div>
                <input 
                  type="text" 
                  autoFocus
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl py-4 pl-12 pr-4 text-white font-bold placeholder-slate-600 outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  placeholder="demo"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Access Key (Password)</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-500 transition-colors">
                  <Lock size={18} />
                </div>
                <input 
                  type="password" 
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl py-4 pl-12 pr-4 text-white font-bold placeholder-slate-600 outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold rounded-xl flex items-center gap-3 animate-shake">
                <AlertCircle size={16} />
                {error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full py-4 rounded-2xl text-white font-black text-lg flex items-center justify-center gap-3 shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 ${isLoading ? 'bg-slate-700 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-blue-500/30'}`}
            >
              {isLoading ? (
                <Loader2 size={24} className="animate-spin" />
              ) : (
                <>Sign In to Vault <ArrowRight size={20}/></>
              )}
            </button>

          </form>

          <div className="mt-8 flex items-center gap-4 p-4 bg-slate-800/30 rounded-2xl border border-slate-700">
              <div className="p-2 bg-slate-800 rounded-lg text-slate-500">
                  <Lock size={16} />
              </div>
              <p className="text-[10px] text-slate-500 font-medium leading-relaxed uppercase tracking-wider">
                  Access is logged and audited. <br/>Authorized personnel only.
              </p>
          </div>
        </div>

        <div className="p-6 bg-black/20 text-center border-t border-slate-800/50">
          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">
            Safety Compliance Ecosystem
          </p>
        </div>
      </div>
      
      {/* Visual Indicator of Creds for Demo */}
      <div className="mt-8 text-slate-600 text-[10px] font-mono uppercase tracking-widest animate-pulse">
          Public Evaluation Mode Enabled
      </div>
    </div>
  );
};

export default CarsLoginPage;
