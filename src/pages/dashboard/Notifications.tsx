import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, CheckCircle, AlertCircle, Info, Trash2 } from 'lucide-react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
const Notifications = () => {
  const [notifications, setNotifications] = useState([{
    id: 1,
    type: 'success',
    title: 'Application Approved',
    message: 'Your scholarship application has been approved!',
    time: '2 hours ago',
    read: false
  }, {
    id: 2,
    type: 'info',
    title: 'New Opportunity',
    message: 'New scholarship opportunity available for STEM students',
    time: '1 day ago',
    read: true
  }, {
    id: 3,
    type: 'warning',
    title: 'Document Required',
    message: 'Please upload your latest transcript',
    time: '2 days ago',
    read: false
  }]);
  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => notif.id === id ? {
      ...notif,
      read: true
    } : notif));
  };
  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };
  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'warning':
        return <AlertCircle className="text-yellow-500" size={20} />;
      case 'info':
        return <Info className="text-blue-500" size={20} />;
      default:
        return <Bell className="text-gray-500" size={20} />;
    }
  };
  return <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#2B463C]">Notifications</h1>
          <button onClick={() => setNotifications([])} className="text-sm text-gray-600 hover:text-red-500">
            Clear All
          </button>
        </div>
        <div className="space-y-4">
          {notifications.length === 0 ? <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <Bell className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-500">No notifications yet</p>
            </div> : notifications.map(notification => <motion.div key={notification.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className={`p-4 bg-white rounded-lg shadow-sm ${!notification.read ? 'border-l-4 border-[#FFD700]' : ''}`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-gray-50 rounded-full">
                      {getIcon(notification.type)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {notification.title}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {notification.message}
                      </p>
                      <p className="text-sm text-gray-400 mt-2">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {!notification.read && <button onClick={() => markAsRead(notification.id)} className="text-sm text-blue-600 hover:text-blue-800">
                        Mark as read
                      </button>}
                    <button onClick={() => deleteNotification(notification.id)} className="text-gray-400 hover:text-red-500">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>)}
        </div>
      </div>
    </DashboardLayout>;
};
export default Notifications;