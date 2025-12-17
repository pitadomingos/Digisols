
import React, { useState, useMemo } from 'react';
import { 
  GitBranch, GitCommit, GitPullRequest, GitMerge, 
  Terminal, CheckCircle2, AlertTriangle, RefreshCw, 
  FileCode, Database, Settings, Shield, HardHat,
  ChevronRight, ArrowUpRight, Search, History,
  Zap, Bot, Cpu, Power
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SourceControlPage: React.FC = () => {
  const { t } = useLanguage();
  const [isCommitting, setIsCommitting] = useState(false);
  const [commitMessage, setCommitMessage] = useState('');
  const [syncStatus, setSyncStatus] = useState<'clean' | 'dirty' | 'pushing' | 'synced'>('dirty');
  const [logs, setLogs] = useState<string[]>([]);
  const [lastCommit, setLastCommit] = useState({
      hash: '7a2f91b',
      author: 'Pita Domingos',
      date: '2024-05-21 14:30',
      msg: 'feat: integrated RAC 11 mine traffic validation logic'
  });

  // Simulated "Changed Files"
  const pendingChanges = [
    { name: 'constants.ts', status: 'Modified', icon: FileCode, lines: '+12 -4' },
    { name: 'rac_definitions.json', status: 'Modified', icon: Database, lines: '+1 -1' },
    { name: 'middleware_config.yaml', status: 'Modified', icon: Settings, lines: '+5 -0' },
  ];

  const handleCommit = () => {
    if (!commitMessage.trim()) return;
    
    setIsCommitting(true);
    setSyncStatus('pushing');
    setLogs(["$ git add .", "Staging 3 files...", "Building dependency graph..."]);

    const steps = [
        "Running pre-commit hooks...",
        "Validating RAC Logic Schema...",
        "Compressing State Blobs...",
        "Writing tree object...",
        "$ git commit -m \"" + commitMessage + "\"",
        "Commit " + Math.random().toString(16).slice(2, 9) + " created.",
        "$ git push origin main",
        "Uploading to DigiSols Cloud...",
        "Delta compression used up to 8 threads.",
        "Total 3 (delta 1), reused 0 (delta 0)",
        "To https://git.digisols.com/cars-manager.git",
        "   7a2f91b..9bc4e21  main -> main"
    ];

    let i = 0;
    const interval = setInterval(() => {
        if (i < steps.length) {
            setLogs(prev => [...prev, steps[i]]);
            i++;
        } else {
            clearInterval(interval);
            setIsCommitting(false);
            setSyncStatus('synced');
            setLastCommit({
                hash: Math.random().toString(16).slice(2, 9),
                author: 'System Admin',
                date: new Date().toLocaleString(),
                msg: commitMessage
            });
            setCommitMessage('');
            
            // Re-dirty after a while for simulation
            setTimeout(() => setSyncStatus('clean'), 3000);
        }
    }, 400);
  };

  return (
    <div className="space-y-6 pb-24 animate-fade-in-up">
      {/* Header */}
      <div className="bg-slate-900 rounded-3xl shadow-xl p-8 text-white relative overflow-hidden border border-slate-700">
         <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
            <GitBranch size={400} />
         </div>
         <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
               <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-indigo-500/20 rounded-xl border border-indigo-500/30 backdrop-blur-sm">
                    <GitBranch size={28} className="text-indigo-400" />
                  </div>
                  <h2 className="text-3xl font-black tracking-tight text-white">Source Control</h2>
               </div>
               <p className="text-slate-400 text-sm max-w-xl font-medium ml-1">
                  Commit and push system configuration changes to the DigiSols Enterprise Vault.
               </p>
            </div>
            <div className="flex items-center gap-4">
                <div className="text-right">
                    <div className="text-[10px] uppercase font-bold text-slate-500">Active Branch</div>
                    <div className="flex items-center gap-2 text-indigo-400 font-mono font-bold">
                        <GitBranch size={14} /> main
                    </div>
                </div>
                <div className="h-10 w-px bg-slate-700"></div>
                <div className="bg-black/30 px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${syncStatus === 'dirty' ? 'bg-amber-500 animate-pulse' : 'bg-green-500'}`}></div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
                        {syncStatus === 'dirty' ? 'Changes Pending' : syncStatus === 'pushing' ? 'Syncing...' : 'Synced'}
                    </span>
                </div>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[calc(100vh-320px)]">
        
        {/* Left: Staging Area */}
        <div className="lg:col-span-4 flex flex-col gap-6 h-full">
            <div className="flex-1 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50 dark:bg-slate-900/20">
                    <h3 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                        <GitCommit size={18} className="text-slate-400" /> Changes
                    </h3>
                    <span className="text-[10px] font-black bg-slate-200 dark:bg-slate-700 text-slate-500 px-2 py-0.5 rounded-full">
                        {syncStatus === 'dirty' ? pendingChanges.length : 0} FILES
                    </span>
                </div>
                
                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                    {syncStatus === 'dirty' ? (
                        pendingChanges.map((file, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-600 group hover:border-indigo-300 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white dark:bg-slate-800 rounded-lg text-slate-400 group-hover:text-indigo-500 transition-colors">
                                        <file.icon size={16} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-800 dark:text-white">{file.name}</div>
                                        <div className="text-[10px] text-slate-400 uppercase font-bold">{file.status}</div>
                                    </div>
                                </div>
                                <div className="text-[10px] font-mono font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded">
                                    {file.lines}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-slate-400 opacity-50">
                            <CheckCircle2 size={48} className="mb-4 text-green-500" />
                            <p className="text-sm font-bold">Nothing to commit</p>
                            <p className="text-[10px]">Working directory is clean</p>
                        </div>
                    )}
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-700">
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Commit Message</label>
                    <textarea 
                        value={commitMessage}
                        onChange={(e) => setCommitMessage(e.target.value)}
                        placeholder="Describe the changes..."
                        className="w-full h-24 p-4 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-2xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none resize-none transition-all dark:text-white"
                        disabled={syncStatus !== 'dirty' || isCommitting}
                    />
                    <button 
                        onClick={handleCommit}
                        disabled={!commitMessage.trim() || isCommitting || syncStatus !== 'dirty'}
                        className={`w-full mt-4 py-4 rounded-2xl font-black text-white shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2
                            ${!commitMessage.trim() || isCommitting || syncStatus !== 'dirty'
                                ? 'bg-slate-300 dark:bg-slate-700 text-slate-500 cursor-not-allowed shadow-none' 
                                : 'bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 hover:shadow-indigo-500/30'}
                        `}
                    >
                        {isCommitting ? <RefreshCw size={18} className="animate-spin" /> : <GitCommit size={18} />}
                        {isCommitting ? 'Committing...' : 'Commit to DigiSols Cloud'}
                    </button>
                </div>
            </div>
        </div>

        {/* Right: Terminal & History */}
        <div className="lg:col-span-8 flex flex-col gap-6 h-full">
            {/* Terminal Output */}
            <div className="flex-1 bg-black rounded-3xl shadow-2xl overflow-hidden border border-slate-800 font-mono relative group">
                <div className="bg-slate-900 px-6 py-3 flex items-center justify-between border-b border-slate-800">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs text-slate-500">git-console@cars-manager:~</span>
                    <button className="text-slate-500 hover:text-white transition-colors" title="Clear Console" onClick={() => setLogs([])}>
                        <RefreshCw size={12} />
                    </button>
                </div>
                <div className="p-6 overflow-y-auto h-[calc(100%-48px)] scrollbar-hide">
                    {logs.length === 0 && (
                        <div className="h-full flex flex-col items-center justify-center text-slate-700 opacity-50">
                            <Terminal size={48} className="mb-4" />
                            <p>Git Output Standby</p>
                        </div>
                    )}
                    {logs.map((log, i) => (
                        <div key={i} className="text-xs mb-1">
                            <span className="text-green-500 mr-2">$</span>
                            <span className={log.startsWith('Commit') || log.includes('synced') ? 'text-indigo-400 font-bold' : 'text-slate-300'}>
                                {log}
                            </span>
                        </div>
                    ))}
                    {isCommitting && <div className="text-indigo-400 animate-pulse mt-1">&gt; Process ongoing...</div>}
                </div>
            </div>

            {/* Commit History Summary */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xl border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-500">
                        <History size={18} />
                    </div>
                    <h3 className="font-bold text-slate-800 dark:text-white">Recent Repository History</h3>
                </div>
                <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 shrink-0">
                            <GitCommit size={16} />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-mono font-bold text-indigo-500 uppercase">{lastCommit.hash}</span>
                                <span className="text-[10px] text-slate-400 font-medium">{lastCommit.date}</span>
                            </div>
                            <p className="text-sm font-bold text-slate-800 dark:text-white mt-1">"{lastCommit.msg}"</p>
                            <div className="flex items-center gap-1.5 mt-2">
                                <div className="w-4 h-4 rounded-full bg-slate-300 flex items-center justify-center text-[8px] font-bold text-slate-600">
                                    {lastCommit.author.charAt(0)}
                                </div>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{lastCommit.author}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <a 
                        href="https://github.com/digisols/cars-manager" 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-xs font-bold text-indigo-500 hover:text-indigo-600 flex items-center justify-center gap-1 transition-all"
                    >
                        View Full History on GitHub <ArrowUpRight size={14} />
                    </a>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default SourceControlPage;
