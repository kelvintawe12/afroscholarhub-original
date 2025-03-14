import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HomeIcon, UsersIcon, GlobeIcon, SettingsIcon, BellIcon, MenuIcon, XIcon, LogOutIcon, UserIcon } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
interface DashboardLayoutProps {
  children: React.ReactNode;
  isAdmin?: boolean;
}
const DashboardLayout = ({
  children,
  isAdmin = false
}: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('mockUser');
    navigate('/login');
  };
  const menuItems = [{
    title: 'Overview',
    icon: <HomeIcon size={20} />,
    path: isAdmin ? '/admin' : '/dashboard'
  }, {
    title: 'Users',
    icon: <UsersIcon size={20} />,
    path: '/admin/users',
    adminOnly: true
  }, {
    title: 'Countries',
    icon: <GlobeIcon size={20} />,
    path: '/admin/countries',
    adminOnly: true
  }, {
    title: 'Analytics',
    icon: <div size={20} />,
    path: isAdmin ? '/admin/analytics' : '/dashboard/analytics'
  }, {
    title: 'Settings',
    icon: <SettingsIcon size={20} />,
    path: isAdmin ? '/admin/settings' : '/dashboard/settings'
  }];
  return <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="flex flex-col h-full w-64 bg-[#2B463C] text-white">
          {/* Logo */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#ffffff20]">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold">
                <span className="text-[#FFD700]">Afro</span>ScholarHub
              </span>
            </Link>
          </div>
          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {menuItems.filter(item => !item.adminOnly || isAdmin).map(item => <Link key={item.path} to={item.path} className={`flex items-center px-4 py-3 rounded-lg transition-colors ${location.pathname === item.path ? 'bg-[#FFD700] text-[#2B463C]' : 'hover:bg-[#ffffff20]'}`}>
                  {item.icon}
                  <span className="ml-3">{item.title}</span>
                </Link>)}
          </nav>
          {/* User Profile */}
          <div className="p-4 border-t border-[#ffffff20]">
            <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center w-full px-4 py-3 rounded-lg hover:bg-[#ffffff20] transition-colors">
              <div className="w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center text-[#2B463C]">
                <UserIcon size={20} />
              </div>
              <div className="ml-3 text-left">
                <p className="text-sm font-medium">
                  {isAdmin ? 'Administrator' : 'User Account'}
                </p>
                <p className="text-xs text-gray-300">
                  {isAdmin ? 'admin@afro.com' : 'user@example.com'}
                </p>
              </div>
            </button>
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <div className={`transition-margin ${isSidebarOpen ? 'md:ml-64' : ''} min-h-screen`}>
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
              {isSidebarOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100 relative">
                <BellIcon className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button onClick={handleLogout} className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <LogOutIcon size={16} className="mr-2" />
                Logout
              </button>
            </div>
          </div>
        </header>
        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
      {/* Profile Dropdown */}
      <AnimatePresence>
        {isProfileOpen && <motion.div initial={{
        opacity: 0,
        y: -10
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -10
      }} className="fixed bottom-20 left-4 w-56 bg-white rounded-lg shadow-lg z-50">
            <div className="p-2">
              <Link to={isAdmin ? '/admin/settings' : '/dashboard/settings'} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
                <SettingsIcon size={16} className="mr-2" />
                Settings
              </Link>
              <button onClick={handleLogout} className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg">
                <LogOutIcon size={16} className="mr-2" />
                Logout
              </button>
            </div>
          </motion.div>}
      </AnimatePresence>
    </div>;
};
export default DashboardLayout;