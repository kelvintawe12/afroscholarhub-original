import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Impact from './pages/Impact';
import Partnerships from './pages/Partnerships';
import Countries from './pages/Countries';
import Donate from './pages/Donate';
import Apply from './pages/Apply';
import Blog from './pages/Blog';
import Proposals from './pages/Proposals';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './pages/AdminDashboard';
import DashboardNotifications from './pages/dashboard/Notifications';
import DashboardSettings from './pages/dashboard/Settings';
import DashboardAnalytics from './pages/dashboard/Analytics';
import DashboardProfile from './pages/dashboard/Profile';
import AdminUsers from './pages/admin/Users';
import AdminCountries from './pages/admin/Countries';
import AdminSettings from './pages/admin/Settings';
import AdminAnalytics from './pages/admin/Analytics';
export function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="impact" element={<Impact />} />
          <Route path="partnerships" element={<Partnerships />} />
          <Route path="countries" element={<Countries />} />
          <Route path="donate" element={<Donate />} />
          <Route path="apply" element={<Apply />} />
          <Route path="blog" element={<Blog />} />
          <Route path="proposals" element={<Proposals />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>} />
          <Route path="dashboard/notifications" element={<ProtectedRoute>
                <DashboardNotifications />
              </ProtectedRoute>} />
          <Route path="dashboard/settings" element={<ProtectedRoute>
                <DashboardSettings />
              </ProtectedRoute>} />
          <Route path="dashboard/analytics" element={<ProtectedRoute>
                <DashboardAnalytics />
              </ProtectedRoute>} />
          <Route path="dashboard/profile" element={<ProtectedRoute>
                <DashboardProfile />
              </ProtectedRoute>} />
          <Route path="admin" element={<ProtectedRoute adminOnly>
                <AdminDashboard />
              </ProtectedRoute>} />
          <Route path="admin/users" element={<ProtectedRoute adminOnly>
                <AdminUsers />
              </ProtectedRoute>} />
          <Route path="admin/countries" element={<ProtectedRoute adminOnly>
                <AdminCountries />
              </ProtectedRoute>} />
          <Route path="admin/settings" element={<ProtectedRoute adminOnly>
                <AdminSettings />
              </ProtectedRoute>} />
          <Route path="admin/analytics" element={<ProtectedRoute adminOnly>
                <AdminAnalytics />
              </ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>;
}