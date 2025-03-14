import React, { useEffect, useState } from 'react';
import { UsersIcon, GraduationCapIcon, DollarSignIcon, GlobeIcon, PlusIcon, TrashIcon, PencilIcon } from 'lucide-react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import StatCard from '../components/dashboard/StatCard';
const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [showAddCountry, setShowAddCountry] = useState(false);
  const [countries, setCountries] = useState([{
    id: 1,
    name: 'Nigeria',
    students: 450,
    donations: 45000,
    status: 'active'
  }, {
    id: 2,
    name: 'Kenya',
    students: 320,
    donations: 32000,
    status: 'active'
  }, {
    id: 3,
    name: 'Ghana',
    students: 280,
    donations: 28000,
    status: 'active'
  }]);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);
  const stats = [{
    title: 'Total Users',
    value: '2,543',
    icon: <UsersIcon size={24} />,
    change: 15
  }, {
    title: 'Active Countries',
    value: '20',
    icon: <GlobeIcon size={24} />,
    change: 5
  }, {
    title: 'Total Revenue',
    value: '$250,000',
    icon: <DollarSignIcon size={24} />,
    change: 25
  }, {
    title: 'Success Rate',
    value: '85%',
    icon: <GraduationCapIcon size={24} />,
    change: 3
  }];
  return <DashboardLayout isAdmin>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => <StatCard key={index} {...stat} loading={loading} />)}
        </div>
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-[#2B463C]">
                Country Hubs Management
              </h2>
              <button onClick={() => setShowAddCountry(true)} className="flex items-center px-4 py-2 bg-[#2B463C] text-white rounded-lg hover:bg-opacity-90 transition-colors">
                <PlusIcon size={20} className="mr-2" />
                Add Country
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Country
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Students
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Donations
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {countries.map(country => <tr key={country.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                            <GlobeIcon size={20} className="text-[#2B463C]" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {country.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {country.students}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        ${country.donations.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${country.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {country.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                        <PencilIcon size={16} />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <TrashIcon size={16} />
                      </button>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-[#2B463C] mb-4">
            System Logs
          </h2>
          <div className="space-y-4">
            {loading ? [...Array(5)].map((_, i) => <div key={i} className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-2 py-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>) : <div className="space-y-4">
                {[{
              action: 'User Login',
              details: 'Admin user logged in from 192.168.1.1',
              time: '2 minutes ago',
              type: 'info'
            }, {
              action: 'Country Added',
              details: 'New country hub: Tanzania was added to the system',
              time: '1 hour ago',
              type: 'success'
            }, {
              action: 'System Update',
              details: 'System maintenance completed successfully',
              time: '3 hours ago',
              type: 'info'
            }, {
              action: 'Failed Login',
              details: 'Multiple failed login attempts from 203.0.113.1',
              time: '5 hours ago',
              type: 'error'
            }].map((log, index) => <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{log.action}</p>
                      <p className="text-sm text-gray-500">{log.details}</p>
                    </div>
                    <span className="text-sm text-gray-400">{log.time}</span>
                  </div>)}
              </div>}
          </div>
        </div>
      </div>
    </DashboardLayout>;
};
export default AdminDashboard;