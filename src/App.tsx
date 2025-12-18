import React, { useState, useMemo, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import PublicHome from './pages/PublicHome';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import EnterpriseDashboard from './pages/EnterpriseDashboard';
import SiteGovernancePage from './pages/SiteGovernancePage';
import DatabasePage from './pages/DatabasePage';
import ReportsPage from './pages/ReportsPage';
import BookingForm from './pages/BookingForm';
import TrainerInputPage from './pages/TrainerInputPage';
import ResultsPage from './pages/ResultsPage';
import UserManagement from './pages/UserManagement';
import ScheduleTraining from './pages/ScheduleTraining';
import SettingsPage from './pages/SettingsPage';
import RequestCardsPage from './pages/RequestCardsPage';
import CardsPage from './pages/CardsPage';
import VerificationPage from './pages/VerificationPage';
import UserManualsPage from './pages/UserManualsPage';
import AdminManualPage from './pages/AdminManualPage';
import LogsPage from './pages/LogsPage';
import ProjectProposal from './pages/ProjectProposal';
import PresentationPage from './pages/PresentationPage';
import AlcoholIntegration from './pages/AlcoholIntegration';
import TechnicalDocs from './pages/TechnicalDocs';
import FeedbackAdminPage from './pages/FeedbackAdminPage';
import MessageLogPage from './pages/MessageLogPage';
import PortfolioPage from './pages/PortfolioPage';
import CaseStudyPage from './pages/CaseStudyPage';
import LaunchpadPage from './pages/LaunchpadPage';
import CarsLoginPage from './pages/CarsLoginPage';
import GeminiAdvisor from './components/GeminiAdvisor';
import FeedbackModal from './components/FeedbackModal';
import { AdvisorProvider } from './contexts/AdvisorContext';
import { MessageProvider } from './contexts/MessageContext';
import { UserRole, Booking, EmployeeRequirement, TrainingSession, RacDef, Room, Trainer, Site, Company, User, SystemNotification, Employee, Feedback, FeedbackType, BookingStatus } from './types';
import { MOCK_SESSIONS, INITIAL_RAC_DEFINITIONS, MOCK_BOOKINGS, MOCK_REQUIREMENTS, MOCK_FEEDBACK, RAW_HR_SOURCE, RAW_CONTRACTOR_SOURCE } from './constants';
import { v4 as uuidv4 } from 'uuid';
import { MessageSquarePlus } from 'lucide-react';

const ProtectedRoute = ({ children, isAuthenticated }: { children?: React.ReactNode, isAuthenticated: boolean }) => {
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

const CarsProtectedRoute: React.FC<React.PropsWithChildren<{ isCarsAuthenticated: boolean }>> = ({ children, isCarsAuthenticated }) => {
  if (!isCarsAuthenticated) return <Navigate to="/cars-login" replace />;
  return <>{children}</>;
};

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCarsAuthenticated, setIsCarsAuthenticated] = useState(() => localStorage.getItem('cars_auth_token') === 'demo-session-active');
  const [userRole, setUserRole] = useState<UserRole>(UserRole.SYSTEM_ADMIN);
  const [simulatedJobTitle, setSimulatedJobTitle] = useState('HSE Manager');
  const [simulatedDept, setSimulatedDept] = useState('HSE');
  const [notifications, setNotifications] = useState<SystemNotification[]>([]);
  const [currentSiteId, setCurrentSiteId] = useState<string>('all');

  const handleCarsLogin = () => { setIsCarsAuthenticated(true); localStorage.setItem('cars_auth_token', 'demo-session-active'); };
  const handleCarsLogout = () => { setIsCarsAuthenticated(false); localStorage.removeItem('cars_auth_token'); };

  const [bookings, setBookings] = useState<Booking[]>(() => JSON.parse(localStorage.getItem('cars_bookings') || '[]') || MOCK_BOOKINGS);
  const [requirements, setRequirements] = useState<EmployeeRequirement[]>(() => JSON.parse(localStorage.getItem('cars_requirements') || '[]') || MOCK_REQUIREMENTS);
  const [sessions, setSessions] = useState<TrainingSession[]>(() => JSON.parse(localStorage.getItem('cars_sessions') || '[]') || MOCK_SESSIONS);
  const [racDefinitions, setRacDefinitions] = useState<RacDef[]>(() => JSON.parse(localStorage.getItem('cars_rac_defs') || '[]') || INITIAL_RAC_DEFINITIONS);
  const [rooms, setRooms] = useState<Room[]>(() => JSON.parse(localStorage.getItem('cars_rooms') || '[]') || [{ id: 'r1', name: 'Room A', capacity: 20 }]);
  const [trainers, setTrainers] = useState<Trainer[]>(() => JSON.parse(localStorage.getItem('cars_trainers') || '[]') || [{ id: 't1', name: 'John Doe', racs: ['RAC01'] }]);
  const [sites, setSites] = useState<Site[]>(() => JSON.parse(localStorage.getItem('cars_sites') || '[]') || [{ id: 's1', companyId: 'c1', name: 'Moatize Mine', location: 'Tete' }]);
  const [companies, setCompanies] = useState<Company[]>(() => JSON.parse(localStorage.getItem('cars_companies') || '[]') || [{ id: 'c1', name: 'Vulcan Mining', status: 'Active', defaultLanguage: 'pt', features: { alcohol: true } }]);
  const [users, setUsers] = useState<User[]>([{ id: 1, name: 'System Admin', email: 'pita.domingos@zd044.onmicrosoft.com', role: UserRole.SYSTEM_ADMIN, status: 'Active', company: 'Vulcan Mining' }]);
  const [feedbackList, setFeedbackList] = useState<Feedback[]>(MOCK_FEEDBACK);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [feedbackConfig] = useState({ mode: 'always', expiry: null });

  useEffect(() => { localStorage.setItem('cars_bookings', JSON.stringify(bookings)); }, [bookings]);
  useEffect(() => { localStorage.setItem('cars_requirements', JSON.stringify(requirements)); }, [requirements]);
  useEffect(() => { localStorage.setItem('cars_sessions', JSON.stringify(sessions)); }, [sessions]);
  useEffect(() => { localStorage.setItem('cars_rac_defs', JSON.stringify(racDefinitions)); }, [racDefinitions]);

  const addNotification = (notif: SystemNotification) => setNotifications(prev => [notif, ...prev]);

  return (
    <AdvisorProvider>
      <MessageProvider>
        <Router>
          <Routes>
            {/* PUBLIC ROUTES */}
            <Route path="/" element={<PublicHome />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:id" element={<CaseStudyPage />} />
            <Route path="/verify/:recordId" element={<VerificationPage bookings={bookings} requirements={requirements} racDefinitions={racDefinitions} sessions={sessions} />} />
            <Route path="/presentation" element={<PresentationPage />} />
            <Route path="/login" element={<LoginPage onLogin={() => setIsAuthenticated(true)} />} />
            <Route path="/cars-login" element={<CarsLoginPage onLogin={handleCarsLogin} />} />
            
            {/* HUB - OPEN ACCESS */}
            <Route path="/launchpad" element={<LaunchpadPage userRole={userRole} userName={users[0].name} />} />

            {/* PROTECTED MODULES */}
            <Route path="*" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <CarsProtectedRoute isCarsAuthenticated={isCarsAuthenticated}>
                  <Layout 
                    userRole={userRole} setUserRole={setUserRole} notifications={notifications} 
                    clearNotifications={() => setNotifications([])} sites={sites} currentSiteId={currentSiteId} 
                    setCurrentSiteId={setCurrentSiteId} simulatedJobTitle={simulatedJobTitle} 
                    setSimulatedJobTitle={setSimulatedJobTitle} simulatedDept={simulatedDept} 
                    setSimulatedDept={setSimulatedDept} companies={companies} onLogout={handleCarsLogout}
                  >
                    <Routes>
                      <Route path="/dashboard" element={<Dashboard bookings={bookings} requirements={requirements} sessions={sessions} userRole={userRole} racDefinitions={racDefinitions} currentSiteId={currentSiteId} />} />
                      <Route path="/enterprise-dashboard" element={<EnterpriseDashboard sites={sites} bookings={bookings} requirements={requirements} userRole={userRole} />} />
                      <Route path="/site-governance" element={<SiteGovernancePage sites={sites} setSites={setSites} racDefinitions={racDefinitions} bookings={bookings} requirements={requirements} updateRequirements={(r) => setRequirements(prev => prev.map(old => old.employeeId === r.employeeId ? r : old))} />} />
                      <Route path="/database" element={<DatabasePage bookings={bookings} requirements={requirements} updateRequirements={(r) => setRequirements(prev => prev.map(old => old.employeeId === r.employeeId ? r : old))} sessions={sessions} onUpdateEmployee={() => {}} onDeleteEmployee={() => {}} racDefinitions={racDefinitions} addNotification={addNotification} currentSiteId={currentSiteId} />} />
                      <Route path="/reports" element={<ReportsPage bookings={bookings} sessions={sessions} currentSiteId={currentSiteId} />} />
                      <Route path="/booking" element={<BookingForm addBookings={(b) => setBookings(prev => [...prev, ...b])} sessions={sessions} userRole={userRole} existingBookings={bookings} addNotification={addNotification} racDefinitions={racDefinitions} />} />
                      <Route path="/trainer-input" element={<TrainerInputPage bookings={bookings} updateBookings={(u) => setBookings(prev => prev.map(b => u.find(x => x.id === b.id) || b))} sessions={sessions} racDefinitions={racDefinitions} />} />
                      <Route path="/results" element={<ResultsPage bookings={bookings} updateBookingStatus={() => {}} userRole={userRole} sessions={sessions} racDefinitions={racDefinitions} addNotification={addNotification} currentSiteId={currentSiteId} />} />
                      <Route path="/users" element={<UserManagement users={users} setUsers={setUsers} addNotification={addNotification} sites={sites} currentSiteId={currentSiteId} />} />
                      <Route path="/schedule" element={<ScheduleTraining sessions={sessions} setSessions={setSessions} rooms={rooms} trainers={trainers} racDefinitions={racDefinitions} addNotification={addNotification} currentSiteId={currentSiteId} />} />
                      <Route path="/settings" element={<SettingsPage racDefinitions={racDefinitions} onUpdateRacs={setRacDefinitions} rooms={rooms} onUpdateRooms={setRooms} trainers={trainers} onUpdateTrainers={setTrainers} sites={sites} onUpdateSites={setSites} companies={companies} onUpdateCompanies={setCompanies} addNotification={addNotification} />} />
                      <Route path="/request-cards" element={<RequestCardsPage bookings={bookings} requirements={requirements} racDefinitions={racDefinitions} sessions={sessions} userRole={userRole} currentSiteId={currentSiteId} />} />
                      <Route path="/print-cards" element={<CardsPage bookings={bookings} requirements={requirements} racDefinitions={racDefinitions} sessions={sessions} userRole={userRole} />} />
                      <Route path="/manuals" element={<UserManualsPage userRole={userRole} />} />
                      <Route path="/admin-manual" element={<AdminManualPage />} />
                      <Route path="/tech-docs" element={<TechnicalDocs />} />
                      <Route path="/logs" element={<LogsPage />} />
                      <Route path="/feedback-admin" element={<FeedbackAdminPage feedbackList={feedbackList} onUpdateFeedback={(id, upd) => setFeedbackList(p => p.map(f => f.id === id ? {...f, ...upd} : f))} onDeleteFeedback={(id) => setFeedbackList(p => p.filter(f => f.id !== id))} />} />
                      <Route path="/messages" element={<MessageLogPage />} />
                      <Route path="/alcohol-control" element={<AlcoholIntegration addNotification={addNotification} />} />
                      <Route path="/proposal" element={<ProjectProposal />} />
                      <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    </Routes>
                    <GeminiAdvisor />
                    <FeedbackModal isOpen={isFeedbackModalOpen} onClose={() => setIsFeedbackModalOpen(false)} onSubmit={() => {}} />
                  </Layout>
                </CarsProtectedRoute>
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </MessageProvider>
    </AdvisorProvider>
  );
};

export default App;