import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Lock, Globe, Moon, Sun, ToggleLeft, Mail, Smartphone } from 'lucide-react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      sms: false
    },
    privacy: {
      profileVisibility: 'public',
      showDonations: true
    },
    appearance: {
      theme: 'light',
      fontSize: 'medium'
    }
  });
  const updateSetting = (category: string, setting: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value
      }
    }));
  };
  return <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-[#2B463C] mb-6">Settings</h1>
        <div className="space-y-6">
          {/* Notifications Settings */}
          <motion.section initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-[#2B463C] mb-4 flex items-center">
              <Bell className="mr-2" size={20} />
              Notification Preferences
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Mail size={18} />
                  <span>Email Notifications</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={settings.notifications.email} onChange={e => updateSetting('notifications', 'email', e.target.checked)} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2B463C]"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bell size={18} />
                  <span>Push Notifications</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={settings.notifications.push} onChange={e => updateSetting('notifications', 'push', e.target.checked)} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2B463C]"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Smartphone size={18} />
                  <span>SMS Notifications</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={settings.notifications.sms} onChange={e => updateSetting('notifications', 'sms', e.target.checked)} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2B463C]"></div>
                </label>
              </div>
            </div>
          </motion.section>
          {/* Privacy Settings */}
          <motion.section initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.1
        }} className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-[#2B463C] mb-4 flex items-center">
              <Lock className="mr-2" size={20} />
              Privacy Settings
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="font-medium text-gray-700">
                    Profile Visibility
                  </label>
                  <p className="text-sm text-gray-500">
                    Control who can see your profile
                  </p>
                </div>
                <select value={settings.privacy.profileVisibility} onChange={e => updateSetting('privacy', 'profileVisibility', e.target.value)} className="rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700]">
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                  <option value="friends">Friends Only</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="font-medium text-gray-700">
                    Show Donations
                  </label>
                  <p className="text-sm text-gray-500">
                    Display your donations on your profile
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={settings.privacy.showDonations} onChange={e => updateSetting('privacy', 'showDonations', e.target.checked)} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2B463C]"></div>
                </label>
              </div>
            </div>
          </motion.section>
          {/* Appearance Settings */}
          <motion.section initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-[#2B463C] mb-4 flex items-center">
              <Sun className="mr-2" size={20} />
              Appearance
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="font-medium text-gray-700">Theme</label>
                  <p className="text-sm text-gray-500">
                    Choose your preferred theme
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={() => updateSetting('appearance', 'theme', 'light')} className={`p-2 rounded-md ${settings.appearance.theme === 'light' ? 'bg-[#2B463C] text-white' : 'bg-gray-100'}`}>
                    <Sun size={20} />
                  </button>
                  <button onClick={() => updateSetting('appearance', 'theme', 'dark')} className={`p-2 rounded-md ${settings.appearance.theme === 'dark' ? 'bg-[#2B463C] text-white' : 'bg-gray-100'}`}>
                    <Moon size={20} />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="font-medium text-gray-700">Font Size</label>
                  <p className="text-sm text-gray-500">
                    Adjust the text size across the app
                  </p>
                </div>
                <select value={settings.appearance.fontSize} onChange={e => updateSetting('appearance', 'fontSize', e.target.value)} className="rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700]">
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </DashboardLayout>;
};
export default Settings;