
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CalendarPlus, 
  ClipboardList, 
  Mail, 
  Menu, 
  X, 
  ShieldCheck,
  UserCog,
  PenTool,
  Users,
  CalendarDays,
  Database,
  FileBarChart,
  Settings,
  Bell,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  ArrowLeft,
  ArrowRight,
  ScrollText,
  Globe,
  Wine,
  Sun,
  Moon,
  Monitor,
  Maximize,
  Minimize,
  Presentation,
  FileCode,
  Shield,
  Map,
  Building2,
  BarChart,
  GanttChart,
  FileText,
  Briefcase,
  MessageSquare,
  Send,
  LayoutGrid,
  LogOut,
  GitBranch
} from 'lucide-react';
import { UserRole, SystemNotification, Site, Company } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  notifications?: SystemNotification[];
  clearNotifications?: () => void;
  sites?: Site[];
  currentSiteId?: string;
  setCurrentSiteId?: (id: string) => void;
  simulatedJobTitle?: string;
  setSimulatedJobTitle?: (title: string) => void;
  simulatedDept?: string;
  setSimulatedDept?: (dept: string) => void;
  companies?: Company[];
  onLogout?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  userRole, 
  setUserRole, 
  notifications = [], 
  clearNotifications,
  sites = [],
  currentSiteId = 'all',
  setCurrentSiteId,
  simulatedJobTitle = 'General User',
  setSimulatedJobTitle = (_t: string) => {},
  simulatedDept = 'Operations',
  setSimulatedDept = (_d: string) => {},
  companies = [],
  onLogout
}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isNotifOpen, setNotifOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const currentCompany = companies.find(c => c.name === 'Vulcan Mining') || companies[0];

  const canViewAlcoholDashboard = (): boolean => {
      if (!currentCompany?.features?.alcohol) return false;
      if (userRole === UserRole.USER) return false;
      if (userRole === UserRole.RAC_TRAINER) return false;
      if (userRole === UserRole.SYSTEM_ADMIN || userRole === UserRole.ENTERPRISE_ADMIN) return true;
      const allowedTitles = ['Manager', 'Supervisor', 'Superintendent', 'Director', 'Head'];
      const allowedDepts = ['HSE', 'Operations', 'Security', 'Medical'];
      const safeTitle = simulatedJobTitle || '';
      const safeDept = simulatedDept || '';
      return allowedTitles.some(t => safeTitle.includes(t)) && allowedDepts.some(d => safeDept.includes(d));
  };

  const showAlcoholLink = canViewAlcoholDashboard();

  useEffect(() => {
    const handleFullScreenChange = () => {
        setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullScreenChange);
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((e) => {
             console.error(`Error attempting to enable full-screen mode: ${e.message} (${e.name})`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
  };

  const toggleLanguage = () => {
      setLanguage(language === 'en' ? 'pt' : 'en');
  };

  const cycleTheme = () => {
      if (theme === 'light') setTheme('dark');
      else if (theme === 'dark') setTheme('system');
      else setTheme('light');
  };

  const getThemeIcon = () => {
      switch(theme) {
          case 'light': return <Sun size={18} />;
          case 'dark': return <Moon size={18} />;
          case 'system': return <Monitor size={18} />;
      }
  };

  const handleAppLogout = () => {
      if (onLogout) onLogout();
      navigate('/launchpad');
  };

  const allNavItems = [
    { path: '/dashboard', label: t.nav.dashboard, icon: LayoutDashboard, visible: userRole !== UserRole.USER && userRole !== UserRole.ENTERPRISE_ADMIN },
    { path: '/booking', label: t.nav.booking, icon: CalendarPlus, visible: userRole !== UserRole.RAC_TRAINER && userRole !== UserRole.ENTERPRISE_ADMIN && userRole !== UserRole.SITE_ADMIN },
    { path: '/results', label: t.nav.records, icon: ClipboardList, visible: userRole !== UserRole.RAC_TRAINER && userRole !== UserRole.ENTERPRISE_ADMIN },
    { path: '/database', label: t.nav.database, icon: Database, visible: userRole !== UserRole.USER && userRole !== UserRole.RAC_TRAINER },
    { path: '/reports', label: t.nav.reports, icon: FileBarChart, visible: [UserRole.SYSTEM_ADMIN, UserRole.ENTERPRISE_ADMIN, UserRole.SITE_ADMIN].includes(userRole) },
    { path: '/enterprise-dashboard', label: t.nav.enterpriseDashboard, icon: BarChart, visible: [UserRole.SYSTEM_ADMIN, UserRole.ENTERPRISE_ADMIN].includes(userRole) },
    { path: '/alcohol-control', label: t.nav.alcohol, icon: Wine, visible: showAlcoholLink },
    { path: '/request-cards', label: t.nav.requestCards, icon: Mail, visible: userRole !== UserRole.ENTERPRISE_ADMIN && userRole !== UserRole.RAC_TRAINER },
    { path: '/messages', label: t.nav.communications, icon: Send, visible: userRole === UserRole.SYSTEM_ADMIN },
    { path: '/schedule', label: t.nav.schedule, icon: CalendarDays, visible: [UserRole.SYSTEM_ADMIN, UserRole.SITE_ADMIN].includes(userRole) },
    { path: '/site-governance', label: t.nav.siteGovernance, icon: GanttChart, visible: [UserRole.SYSTEM_ADMIN, UserRole.ENTERPRISE_ADMIN].includes(userRole) },
    { path: '/trainer-input', label: t.nav.trainerInput, icon: PenTool, visible: [UserRole.SYSTEM_ADMIN, UserRole.RAC_TRAINER].includes(userRole) },
    { path: '/users', label: t.nav.users, icon: Users, visible: userRole === UserRole.SYSTEM_ADMIN },
    { path: '/settings', label: t.nav.settings, icon: Settings, visible: [UserRole.SYSTEM_ADMIN, UserRole.ENTERPRISE_ADMIN, UserRole.SITE_ADMIN].includes(userRole) },
    { path: '/logs', label: t.nav.logs, icon: ScrollText, visible: [UserRole.SYSTEM_ADMIN, UserRole.ENTERPRISE_ADMIN].includes(userRole) },
    { path: '/manuals', label: t.nav.manuals, icon: BookOpen, visible: true },
    { path: '/feedback-admin', label: t.nav.feedbackAdmin, icon: MessageSquare, visible: [UserRole.SYSTEM_ADMIN, UserRole.ENTERPRISE_ADMIN].includes(userRole) },
    { path: '/admin-manual', label: t.nav.adminGuide, icon: Shield, visible: userRole === UserRole.SYSTEM_ADMIN },
    { path: '/tech-docs', label: 'Technical Docs', icon: FileCode, visible: userRole === UserRole.SYSTEM_ADMIN },
    { path: '/presentation', label: t.nav.presentation, icon: Presentation, visible: userRole === UserRole.SYSTEM_ADMIN },
    { path: '/proposal', label: t.nav.proposal, icon: FileText, visible: userRole === UserRole.SYSTEM_ADMIN },
  ];

  const navItems = allNavItems.filter(item => item.visible);

  const currentNavItem = navItems.find(i => i.path === location.pathname);
  let pageTitle = String(t.common.vulcan);
  if (currentNavItem && currentNavItem.label) {
    pageTitle = String(currentNavItem.label);
  } else if (location.pathname === '/proposal') {
    pageTitle = String(t.nav.proposal);
  } else if (location.pathname === '/presentation') {
    pageTitle = String(t.nav.presentation);
  } else if (location.pathname === '/tech-docs') {
    pageTitle = 'Technical Documentation';
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden transition-colors duration-200">
      <aside 
        className={`
          no-print fixed inset-y-0 left-0 z-50 bg-slate-900 dark:bg-slate-950 text-white transform transition-all duration-300 ease-in-out flex flex-col
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0
          ${isCollapsed ? 'w-20' : 'w-64'}
          border-r border-slate-700 dark:border-slate-800
        `}
      >
        <div className={`flex items-center h-16 border-b border-slate-700 dark:border-slate-800 ${isCollapsed ? 'justify-center p-0' : 'justify-between p-4'}`}>
          <div className="flex items-center space-x-2">
            <ShieldCheck className={`${isCollapsed ? 'w-8 h-8' : 'w-8 h-8'} text-yellow-500`} />
            {!isCollapsed && <span className="text-xl font-bold tracking-wider">{t.common.vulcan}</span>}
          </div>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden text-gray-400 hover:text-white">
            <X size={24} />
          </button>
          <button 
             onClick={() => setIsCollapsed(!isCollapsed)}
             className="hidden md:flex bg-slate-800 dark:bg-slate-900 text-gray-400 hover:text-white rounded p-1"
          >
             {isCollapsed ? <ChevronRight size={16}/> : <ChevronLeft size={16}/>}
          </button>
        </div>

        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <Link
                to="/launchpad"
                onClick={() => setSidebarOpen(false)}
                className={`
                  flex items-center rounded-lg transition-colors mb-4 border border-slate-700 hover:bg-white/10
                  ${isCollapsed ? 'justify-center p-3' : 'space-x-3 px-4 py-3'}
                `}
              >
                <LayoutGrid size={20} className="text-blue-400" />
                {!isCollapsed && <span className="truncate font-bold text-blue-400">Switch Application</span>}
          </Link>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            const isEnterprise = item.path === '/enterprise-dashboard' || item.path === '/site-governance';
            const isProposal = item.path === '/proposal';
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`
                  flex items-center rounded-lg transition-colors
                  ${isActive 
                    ? (isEnterprise || isProposal ? 'bg-indigo-600 text-white font-medium shadow-lg shadow-indigo-500/30' : 'bg-yellow-500 text-slate-900 font-medium') 
                    : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                  }
                  ${isCollapsed ? 'justify-center p-3' : 'space-x-3 px-4 py-3'}
                `}
              >
                <Icon size={20} className="flex-shrink-0" />
                {!isCollapsed && <span className="truncate">{String(item.label)}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="w-full border-t border-slate-700 dark:border-slate-800 bg-slate-900 dark:bg-slate-950">
          <button 
            onClick={handleAppLogout}
            className={`w-full flex items-center hover:bg-red-500/10 text-red-400 transition-colors py-4 ${isCollapsed ? 'justify-center' : 'px-8 space-x-3'}`}
          >
              <LogOut size={20} />
              {!isCollapsed && <span className="font-bold text-sm uppercase tracking-widest">Exit Vault</span>}
          </button>

          <div className="p-4 border-t border-slate-800">
            {!isCollapsed && (
              <div className="text-[10px] text-gray-500 mb-2 uppercase font-black tracking-widest">
                 {t.common.simulateRole}:
              </div>
            )}
            
            {isCollapsed ? (
               <div className="flex justify-center" title={`${t.common.role}: ${userRole}`}>
                   <UserCog size={20} className="text-gray-400" />
               </div>
            ) : (
                <select 
                    value={userRole}
                    onChange={(e) => setUserRole(e.target.value as UserRole)}
                    className="w-full bg-slate-800 dark:bg-slate-900 text-white text-[10px] font-bold p-2 rounded border border-slate-600 dark:border-slate-700 focus:border-yellow-500 outline-none"
                >
                    <option value={UserRole.SYSTEM_ADMIN}>System Admin</option>
                    <option value={UserRole.ENTERPRISE_ADMIN}>Enterprise Admin</option>
                    <option value={UserRole.SITE_ADMIN}>Site Admin</option>
                    <option value={UserRole.RAC_TRAINER}>RAC Trainer</option>
                    <option value={UserRole.USER}>User</option>
                </select>
            )}
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col h-full w-full overflow-hidden">
        <header className="no-print h-16 bg-white dark:bg-slate-800 shadow-sm flex items-center justify-between px-4 md:px-6 z-10 relative border-b border-gray-200 dark:border-slate-700 transition-colors duration-200">
          <div className="flex items-center gap-4">
             <button onClick={() => setSidebarOpen(true)} className="md:hidden text-slate-600 dark:text-slate-300">
                <Menu size={24} />
             </button>
             <h1 className="text-xl font-bold text-slate-800 dark:text-white truncate">{pageTitle}</h1>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <button onClick={() => toggleLanguage()} className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-slate-600 flex items-center gap-1">
                <Globe size={18} />
                <span className="text-xs font-bold uppercase">{language}</span>
            </button>
            <button onClick={() => cycleTheme()} className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
                {getThemeIcon()}
            </button>
            <button onClick={() => toggleFullScreen()} className="hidden md:block p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
                {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
            </button>
            <div className="relative">
              <button onClick={() => setNotifOpen(!isNotifOpen)} className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors relative">
                <Bell size={20} />
                {unreadCount > 0 && <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-50 rounded-full border border-white dark:border-slate-800"></span>}
              </button>
            </div>
            
            <div className="flex items-center space-x-2 border-l border-gray-200 dark:border-slate-700 pl-4">
               <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold shadow-md">
                  {userRole.charAt(0)}
               </div>
               <div className="hidden lg:block text-right">
                  <div className="text-xs font-bold text-slate-800 dark:text-white">{userRole}</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400">{simulatedJobTitle}</div>
               </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-100 dark:bg-gray-900 relative scroll-smooth">
           {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
