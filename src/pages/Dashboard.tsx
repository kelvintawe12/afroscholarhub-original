import React, { useEffect, useState } from 'react';
import { UsersIcon, GraduationCapIcon, DollarSignIcon, ActivityIcon } from 'lucide-react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import StatCard from '../components/dashboard/StatCard';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate data loading
    setTimeout(() => setLoading(false), 1500);
  }, []);
  const stats = [{
    title: 'Total Applications',
    value: '1,234',
    icon: <UsersIcon size={24} />,
    change: 12
  }, {
    title: 'Successful Placements',
    value: '856',
    icon: <GraduationCapIcon size={24} />,
    change: 8
  }, {
    title: 'Total Donations',
    value: '$125,000',
    icon: <DollarSignIcon size={24} />,
    change: 23
  }, {
    title: 'Active Countries',
    value: '15',
    icon: <ActivityIcon size={24} />,
    change: 4
  }];
  const chartData = [{
    month: 'Jan',
    applications: 65,
    placements: 45
  }, {
    month: 'Feb',
    applications: 78,
    placements: 52
  }, {
    month: 'Mar',
    applications: 90,
    placements: 63
  }, {
    month: 'Apr',
    applications: 105,
    placements: 70
  }, {
    month: 'May',
    applications: 125,
    placements: 85
  }, {
    month: 'Jun',
    applications: 150,
    placements: 98
  }];
  return <DashboardLayout>
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => <StatCard key={index} {...stat} loading={loading} />)}
        </div>
        {/* Charts */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-[#2B463C] mb-4">
            Applications & Placements
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="applications" stackId="1" stroke="#2B463C" fill="#2B463C" fillOpacity={0.3} name="Applications" />
                <Area type="monotone" dataKey="placements" stackId="2" stroke="#FFD700" fill="#FFD700" fillOpacity={0.3} name="Placements" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-[#2B463C] mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {loading ?
          // Loading skeleton
          [...Array(5)].map((_, i) => <div key={i} className="animate-pulse flex space-x-4">
                  <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                  <div className="flex-1 space-y-2 py-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>) :
          // Actual activity items
          <div className="space-y-4">
                <ActivityItem type="application" message="New scholarship application received from John Doe" time="2 hours ago" />
                <ActivityItem type="donation" message="$500 donation received from Anonymous donor" time="5 hours ago" />
                <ActivityItem type="placement" message="Sarah Johnson accepted to Oxford University" time="1 day ago" />
                <ActivityItem type="country" message="New country hub launched in Ghana" time="2 days ago" />
                <ActivityItem type="application" message="Application status updated for 15 students" time="3 days ago" />
              </div>}
          </div>
        </div>
      </div>
    </DashboardLayout>;
};
const ActivityItem = ({
  type,
  message,
  time
}) => {
  const getIcon = () => {
    switch (type) {
      case 'application':
        return <UsersIcon className="text-blue-500" size={20} />;
      case 'donation':
        return <DollarSignIcon className="text-green-500" size={20} />;
      case 'placement':
        return <GraduationCapIcon className="text-purple-500" size={20} />;
      case 'country':
        return <ActivityIcon className="text-orange-500" size={20} />;
      default:
        return <ActivityIcon className="text-gray-500" size={20} />;
    }
  };
  return <div className="flex items-start space-x-4">
      <div className="p-2 bg-gray-100 rounded-full">{getIcon()}</div>
      <div className="flex-1">
        <p className="text-gray-600">{message}</p>
        <p className="text-sm text-gray-400">{time}</p>
      </div>
    </div>;
};
export default Dashboard;