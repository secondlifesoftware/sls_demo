import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

// Enhanced Dashboard with graphs, live ticker, and more features
const Dashboard = () => {
  const [tickerValue, setTickerValue] = useState(25);
  const [recentUsers] = useState([
    { id: 1, name: 'Sarah Johnson', email: 'sarah.j@example.com', avatar: 'SJ', status: 'online', joined: '2 min ago' },
    { id: 2, name: 'Michael Chen', email: 'mchen@example.com', avatar: 'MC', status: 'offline', joined: '5 min ago' },
    { id: 3, name: 'Emily Rodriguez', email: 'emily.r@example.com', avatar: 'ER', status: 'online', joined: '8 min ago' },
    { id: 4, name: 'David Thompson', email: 'dthompson@example.com', avatar: 'DT', status: 'online', joined: '12 min ago' },
    { id: 5, name: 'Lisa Wang', email: 'lisa.wang@example.com', avatar: 'LW', status: 'offline', joined: '15 min ago' },
    { id: 6, name: 'James Wilson', email: 'jwilson@example.com', avatar: 'JW', status: 'online', joined: '18 min ago' },
    { id: 7, name: 'Maria Garcia', email: 'mgarcia@example.com', avatar: 'MG', status: 'online', joined: '22 min ago' },
    { id: 8, name: 'Robert Lee', email: 'rlee@example.com', avatar: 'RL', status: 'offline', joined: '25 min ago' },
    { id: 9, name: 'Jennifer Brown', email: 'jbrown@example.com', avatar: 'JB', status: 'online', joined: '28 min ago' },
    { id: 10, name: 'Christopher Davis', email: 'cdavis@example.com', avatar: 'CD', status: 'online', joined: '32 min ago' }
  ]);

  // Live ticker effect
  useEffect(() => {
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 20) + 1;
      setTickerValue(prev => prev + increment);
    }, Math.random() * 240000 + 60000); // Random interval between 1-5 minutes

    return () => clearInterval(interval);
  }, []);

  // Sample data for graphs
  const chartData = {
    sales: [12, 19, 3, 5, 2, 3, 15, 8, 12, 9, 14, 7],
    users: [8, 12, 15, 9, 6, 11, 18, 14, 10, 13, 16, 12],
    revenue: [45, 52, 38, 61, 55, 48, 67, 59, 63, 58, 71, 65]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">SaaS Analytics Dashboard</p>
          <div className="mt-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2">
              Frontend: React + Tailwind
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Backend: FastAPI / Supabase
            </span>
          </div>
        </div>
        
        {/* Live Ticker */}
        <div className="mb-6 bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-600">Live Market Value</span>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">${tickerValue.toLocaleString()}</div>
              <div className="text-xs text-green-500">+{tickerValue - 25} from start</div>
            </div>
          </div>
        </div>
        
        {/* Hero Cards with Different Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Total Users</h3>
                <p className="text-3xl font-bold">1,234</p>
                <p className="text-blue-100 text-sm">+12% from last month</p>
              </div>
              <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Revenue</h3>
                <p className="text-3xl font-bold">$45,678</p>
                <p className="text-green-100 text-sm">+8% from last month</p>
              </div>
              <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Active Sessions</h3>
                <p className="text-3xl font-bold">892</p>
                <p className="text-purple-100 text-sm">+5% from last hour</p>
              </div>
              <div className="w-12 h-12 bg-purple-400 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Conversion Rate</h3>
                <p className="text-3xl font-bold">3.2%</p>
                <p className="text-orange-100 text-sm">+0.5% from last week</p>
              </div>
              <div className="w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Sales Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Sales</h3>
            <div className="flex items-end space-x-1 h-32">
              {chartData.sales.map((value, index) => (
                <div key={index} className="flex-1 bg-blue-500 rounded-t" style={{ height: `${(value / 20) * 100}%` }}>
                  <div className="text-xs text-center text-blue-600 mt-1">{value}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
            </div>
          </div>
          
          {/* Users Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth</h3>
            <div className="flex items-end space-x-1 h-32">
              {chartData.users.map((value, index) => (
                <div key={index} className="flex-1 bg-green-500 rounded-t" style={{ height: `${(value / 20) * 100}%` }}>
                  <div className="text-xs text-center text-green-600 mt-1">{value}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
            </div>
          </div>
        </div>
        
        {/* Revenue Chart */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3>
          <div className="flex items-end space-x-1 h-32">
            {chartData.revenue.map((value, index) => (
              <div key={index} className="flex-1 bg-purple-500 rounded-t" style={{ height: `${(value / 80) * 100}%` }}>
                <div className="text-xs text-center text-purple-600 mt-1">${value}k</div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Users */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recently Added Users</h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {recentUsers.map((user) => (
                <div key={user.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold ${
                    user.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                  }`}>
                    {user.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{user.name}</h4>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <div className="text-right">
                    <div className={`w-2 h-2 rounded-full ${user.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                    <p className="text-xs text-gray-400 mt-1">{user.joined}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-between">
                <span>Add New User</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
              <button className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-between">
                <span>Generate Report</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
              <button className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-between">
                <span>View Analytics</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </button>
              <button className="w-full bg-orange-600 text-white px-4 py-3 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-between">
                <span>Export Data</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Admin = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const usersPerPage = 10;

  const allUsers = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active', joinDate: '2024-01-15', lastLogin: '2024-01-20 14:30', avatar: 'JD', department: 'Engineering' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User', status: 'Active', joinDate: '2024-01-16', lastLogin: '2024-01-20 09:15', avatar: 'JS', department: 'Marketing' },
    { id: 3, name: 'Michael Johnson', email: 'michael.j@example.com', role: 'Moderator', status: 'Active', joinDate: '2024-01-17', lastLogin: '2024-01-20 16:45', avatar: 'MJ', department: 'Sales' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah.wilson@example.com', role: 'User', status: 'Inactive', joinDate: '2024-01-18', lastLogin: '2024-01-19 11:20', avatar: 'SW', department: 'HR' },
    { id: 5, name: 'David Brown', email: 'david.brown@example.com', role: 'User', status: 'Active', joinDate: '2024-01-19', lastLogin: '2024-01-20 13:10', avatar: 'DB', department: 'Finance' },
    { id: 6, name: 'Emily Davis', email: 'emily.davis@example.com', role: 'User', status: 'Active', joinDate: '2024-01-20', lastLogin: '2024-01-20 15:30', avatar: 'ED', department: 'Design' },
    { id: 7, name: 'Robert Miller', email: 'robert.miller@example.com', role: 'Admin', status: 'Active', joinDate: '2024-01-21', lastLogin: '2024-01-20 10:45', avatar: 'RM', department: 'Engineering' },
    { id: 8, name: 'Lisa Garcia', email: 'lisa.garcia@example.com', role: 'User', status: 'Pending', joinDate: '2024-01-22', lastLogin: 'Never', avatar: 'LG', department: 'Marketing' },
    { id: 9, name: 'James Rodriguez', email: 'james.rodriguez@example.com', role: 'User', status: 'Active', joinDate: '2024-01-23', lastLogin: '2024-01-20 12:00', avatar: 'JR', department: 'Sales' },
    { id: 10, name: 'Jennifer Martinez', email: 'jennifer.martinez@example.com', role: 'Moderator', status: 'Active', joinDate: '2024-01-24', lastLogin: '2024-01-20 14:20', avatar: 'JM', department: 'HR' },
    { id: 11, name: 'Christopher Anderson', email: 'chris.anderson@example.com', role: 'User', status: 'Inactive', joinDate: '2024-01-25', lastLogin: '2024-01-18 09:30', avatar: 'CA', department: 'Finance' },
    { id: 12, name: 'Amanda Taylor', email: 'amanda.taylor@example.com', role: 'User', status: 'Active', joinDate: '2024-01-26', lastLogin: '2024-01-20 16:15', avatar: 'AT', department: 'Design' },
    { id: 13, name: 'Daniel Thomas', email: 'daniel.thomas@example.com', role: 'User', status: 'Active', joinDate: '2024-01-27', lastLogin: '2024-01-20 11:45', avatar: 'DT', department: 'Engineering' },
    { id: 14, name: 'Michelle Jackson', email: 'michelle.jackson@example.com', role: 'User', status: 'Pending', joinDate: '2024-01-28', lastLogin: 'Never', avatar: 'MJ', department: 'Marketing' },
    { id: 15, name: 'Kevin White', email: 'kevin.white@example.com', role: 'User', status: 'Active', joinDate: '2024-01-29', lastLogin: '2024-01-20 13:55', avatar: 'KW', department: 'Sales' },
    { id: 16, name: 'Stephanie Harris', email: 'stephanie.harris@example.com', role: 'User', status: 'Active', joinDate: '2024-01-30', lastLogin: '2024-01-20 15:10', avatar: 'SH', department: 'HR' },
    { id: 17, name: 'Ryan Clark', email: 'ryan.clark@example.com', role: 'Moderator', status: 'Active', joinDate: '2024-02-01', lastLogin: '2024-01-20 10:30', avatar: 'RC', department: 'Finance' },
    { id: 18, name: 'Nicole Lewis', email: 'nicole.lewis@example.com', role: 'User', status: 'Inactive', joinDate: '2024-02-02', lastLogin: '2024-01-17 14:20', avatar: 'NL', department: 'Design' },
    { id: 19, name: 'Andrew Lee', email: 'andrew.lee@example.com', role: 'User', status: 'Active', joinDate: '2024-02-03', lastLogin: '2024-01-20 12:40', avatar: 'AL', department: 'Engineering' },
    { id: 20, name: 'Rebecca Walker', email: 'rebecca.walker@example.com', role: 'User', status: 'Active', joinDate: '2024-02-04', lastLogin: '2024-01-20 16:25', avatar: 'RW', department: 'Marketing' },
    { id: 21, name: 'Joshua Hall', email: 'joshua.hall@example.com', role: 'User', status: 'Active', joinDate: '2024-02-05', lastLogin: '2024-01-20 09:50', avatar: 'JH', department: 'Sales' },
    { id: 22, name: 'Lauren Allen', email: 'lauren.allen@example.com', role: 'User', status: 'Pending', joinDate: '2024-02-06', lastLogin: 'Never', avatar: 'LA', department: 'HR' },
    { id: 23, name: 'Brandon Young', email: 'brandon.young@example.com', role: 'User', status: 'Active', joinDate: '2024-02-07', lastLogin: '2024-01-20 14:05', avatar: 'BY', department: 'Finance' },
    { id: 24, name: 'Christine King', email: 'christine.king@example.com', role: 'User', status: 'Active', joinDate: '2024-02-08', lastLogin: '2024-01-20 11:35', avatar: 'CK', department: 'Design' },
    { id: 25, name: 'Steven Wright', email: 'steven.wright@example.com', role: 'User', status: 'Inactive', joinDate: '2024-02-09', lastLogin: '2024-01-16 13:15', avatar: 'SW', department: 'Engineering' },
    { id: 26, name: 'Rachel Lopez', email: 'rachel.lopez@example.com', role: 'User', status: 'Active', joinDate: '2024-02-10', lastLogin: '2024-01-20 15:50', avatar: 'RL', department: 'Marketing' },
    { id: 27, name: 'Jonathan Hill', email: 'jonathan.hill@example.com', role: 'User', status: 'Active', joinDate: '2024-02-11', lastLogin: '2024-01-20 10:20', avatar: 'JH', department: 'Sales' },
    { id: 28, name: 'Megan Scott', email: 'megan.scott@example.com', role: 'User', status: 'Active', joinDate: '2024-02-12', lastLogin: '2024-01-20 12:55', avatar: 'MS', department: 'HR' },
    { id: 29, name: 'Matthew Green', email: 'matthew.green@example.com', role: 'User', status: 'Pending', joinDate: '2024-02-13', lastLogin: 'Never', avatar: 'MG', department: 'Finance' },
    { id: 30, name: 'Ashley Adams', email: 'ashley.adams@example.com', role: 'User', status: 'Active', joinDate: '2024-02-14', lastLogin: '2024-01-20 16:40', avatar: 'AA', department: 'Design' },
    { id: 31, name: 'Nathan Baker', email: 'nathan.baker@example.com', role: 'User', status: 'Active', joinDate: '2024-02-15', lastLogin: '2024-01-20 09:25', avatar: 'NB', department: 'Engineering' },
    { id: 32, name: 'Amber Gonzalez', email: 'amber.gonzalez@example.com', role: 'User', status: 'Inactive', joinDate: '2024-02-16', lastLogin: '2024-01-15 14:10', avatar: 'AG', department: 'Marketing' },
    { id: 33, name: 'Tyler Nelson', email: 'tyler.nelson@example.com', role: 'User', status: 'Active', joinDate: '2024-02-17', lastLogin: '2024-01-20 13:30', avatar: 'TN', department: 'Sales' },
    { id: 34, name: 'Samantha Carter', email: 'samantha.carter@example.com', role: 'User', status: 'Active', joinDate: '2024-02-18', lastLogin: '2024-01-20 11:15', avatar: 'SC', department: 'HR' },
    { id: 35, name: 'Justin Mitchell', email: 'justin.mitchell@example.com', role: 'User', status: 'Active', joinDate: '2024-02-19', lastLogin: '2024-01-20 15:25', avatar: 'JM', department: 'Finance' },
    { id: 36, name: 'Brittany Perez', email: 'brittany.perez@example.com', role: 'User', status: 'Pending', joinDate: '2024-02-20', lastLogin: 'Never', avatar: 'BP', department: 'Design' },
    { id: 37, name: 'Gregory Roberts', email: 'gregory.roberts@example.com', role: 'User', status: 'Active', joinDate: '2024-02-21', lastLogin: '2024-01-20 10:45', avatar: 'GR', department: 'Engineering' },
    { id: 38, name: 'Victoria Turner', email: 'victoria.turner@example.com', role: 'User', status: 'Active', joinDate: '2024-02-22', lastLogin: '2024-01-20 12:30', avatar: 'VT', department: 'Marketing' },
    { id: 39, name: 'Sean Phillips', email: 'sean.phillips@example.com', role: 'User', status: 'Inactive', joinDate: '2024-02-23', lastLogin: '2024-01-14 16:20', avatar: 'SP', department: 'Sales' },
    { id: 40, name: 'Danielle Campbell', email: 'danielle.campbell@example.com', role: 'User', status: 'Active', joinDate: '2024-02-24', lastLogin: '2024-01-20 14:50', avatar: 'DC', department: 'HR' },
    { id: 41, name: 'Travis Parker', email: 'travis.parker@example.com', role: 'User', status: 'Active', joinDate: '2024-02-25', lastLogin: '2024-01-20 09:40', avatar: 'TP', department: 'Finance' },
    { id: 42, name: 'Heather Evans', email: 'heather.evans@example.com', role: 'User', status: 'Active', joinDate: '2024-02-26', lastLogin: '2024-01-20 11:55', avatar: 'HE', department: 'Design' },
    { id: 43, name: 'Corey Edwards', email: 'corey.edwards@example.com', role: 'User', status: 'Pending', joinDate: '2024-02-27', lastLogin: 'Never', avatar: 'CE', department: 'Engineering' },
    { id: 44, name: 'Melissa Collins', email: 'melissa.collins@example.com', role: 'User', status: 'Active', joinDate: '2024-02-28', lastLogin: '2024-01-20 13:20', avatar: 'MC', department: 'Marketing' },
    { id: 45, name: 'Derek Stewart', email: 'derek.stewart@example.com', role: 'User', status: 'Active', joinDate: '2024-02-29', lastLogin: '2024-01-20 15:35', avatar: 'DS', department: 'Sales' },
    { id: 46, name: 'Tiffany Morris', email: 'tiffany.morris@example.com', role: 'User', status: 'Inactive', joinDate: '2024-03-01', lastLogin: '2024-01-13 10:15', avatar: 'TM', department: 'HR' },
    { id: 47, name: 'Marcus Rogers', email: 'marcus.rogers@example.com', role: 'User', status: 'Active', joinDate: '2024-03-02', lastLogin: '2024-01-20 12:45', avatar: 'MR', department: 'Finance' },
    { id: 48, name: 'Crystal Reed', email: 'crystal.reed@example.com', role: 'User', status: 'Active', joinDate: '2024-03-03', lastLogin: '2024-01-20 16:10', avatar: 'CR', department: 'Design' },
    { id: 49, name: 'Adrian Cook', email: 'adrian.cook@example.com', role: 'User', status: 'Active', joinDate: '2024-03-04', lastLogin: '2024-01-20 09:55', avatar: 'AC', department: 'Engineering' },
    { id: 50, name: 'Monica Morgan', email: 'monica.morgan@example.com', role: 'User', status: 'Pending', joinDate: '2024-03-05', lastLogin: 'Never', avatar: 'MM', department: 'Marketing' }
  ];

  // Filter users based on search term
  const filteredUsers = allUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    if (selectedUsers.length === currentUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(currentUsers.map(user => user.id));
    }
  };

  const handleSelectUser = (userId: number) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-gradient-to-br from-blue-500 to-blue-600',
      'bg-gradient-to-br from-purple-500 to-purple-600',
      'bg-gradient-to-br from-green-500 to-green-600',
      'bg-gradient-to-br from-orange-500 to-orange-600',
      'bg-gradient-to-br from-pink-500 to-pink-600',
      'bg-gradient-to-br from-indigo-500 to-indigo-600',
      'bg-gradient-to-br from-teal-500 to-teal-600',
      'bg-gradient-to-br from-red-500 to-red-600'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Material Design elevation */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 transform transition-all duration-300 hover:shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
                Admin Panel
              </h1>
              <p className="text-gray-600 text-lg">User Management & System Administration</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 shadow-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  Frontend: Angular-style (Material UI)
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-red-100 to-red-200 text-red-800 shadow-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  Backend: Django / Laravel
                </span>
              </div>
            </div>
            <div className="mt-6 lg:mt-0">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-600">{filteredUsers.length}</div>
                  <div className="text-sm text-blue-600">Total Users</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
                  <div className="text-2xl font-bold text-green-600">
                    {filteredUsers.filter(u => u.status === 'Active').length}
                  </div>
                  <div className="text-sm text-green-600">Active</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4">
                  <div className="text-2xl font-bold text-yellow-600">
                    {filteredUsers.filter(u => u.status === 'Pending').length}
                  </div>
                  <div className="text-sm text-yellow-600">Pending</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Search and Filters with Material Design */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 transform transition-all duration-300 hover:shadow-xl">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search users by name, email, role, or department..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 text-lg"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl font-medium">
                <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add User
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl font-medium">
                <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export
              </button>
            </div>
          </div>
        </div>
        
        {/* Users Table with Modern Material Design */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
          <div className="px-8 py-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 sm:mb-0">
                Users ({filteredUsers.length})
              </h2>
              <div className="text-sm text-gray-500 bg-white px-4 py-2 rounded-lg shadow-sm">
                Showing {startIndex + 1}-{Math.min(endIndex, filteredUsers.length)} of {filteredUsers.length}
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-100">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  <th className="px-8 py-4 text-left">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedUsers.length === currentUsers.length && currentUsers.length > 0}
                        onChange={handleSelectAll}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </th>
                  <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">User</th>
                  <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Department</th>
                  <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Role</th>
                  <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                  <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Join Date</th>
                  <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Last Login</th>
                  <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-50">
                {currentUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 group">
                    <td className="px-8 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => handleSelectUser(user.id)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                    </td>
                    <td className="px-8 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg ${getAvatarColor(user.name)}`}>
                          {user.avatar}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {user.name}
                          </div>
                          <div className="text-sm text-gray-500 group-hover:text-blue-500 transition-colors">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {user.department}
                      </span>
                    </td>
                    <td className="px-8 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${
                        user.role === 'Admin' ? 'bg-gradient-to-r from-red-100 to-red-200 text-red-800' :
                        user.role === 'Moderator' ? 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800' :
                        'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-8 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${
                        user.status === 'Active' ? 'bg-gradient-to-r from-green-100 to-green-200 text-green-800' :
                        user.status === 'Inactive' ? 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800' :
                        'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800'
                      }`}>
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          user.status === 'Active' ? 'bg-green-500' :
                          user.status === 'Inactive' ? 'bg-gray-500' :
                          'bg-yellow-500'
                        }`}></div>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-8 py-4 whitespace-nowrap text-sm text-gray-600">
                      {user.joinDate}
                    </td>
                    <td className="px-8 py-4 whitespace-nowrap text-sm text-gray-600">
                      {user.lastLogin}
                    </td>
                    <td className="px-8 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-indigo-600 hover:text-indigo-900 transform hover:scale-110 transition-all duration-200 p-2 rounded-lg hover:bg-indigo-50">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button className="text-red-600 hover:text-red-900 transform hover:scale-110 transition-all duration-200 p-2 rounded-lg hover:bg-red-50">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Enhanced Pagination */}
          {totalPages > 1 && (
            <div className="px-8 py-6 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-gray-600 mb-4 sm:mb-0">
                  Page {currentPage} of {totalPages}
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 font-medium"
                  >
                    <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </button>
                  
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const page = i + 1;
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transform hover:scale-105 transition-all duration-200 ${
                          currentPage === page
                            ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                            : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                  
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 font-medium"
                  >
                    Next
                    <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Ecommerce = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      description: "Premium noise-canceling headphones with 30-hour battery life and crystal-clear sound quality.",
      price: 129.99,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 1247
    },
    {
      id: 2,
      name: "Organic Cotton T-Shirt",
      description: "Comfortable and sustainable cotton t-shirt available in multiple colors and sizes.",
      price: 24.99,
      category: "Clothing",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 892
    },
    {
      id: 3,
      name: "Smart Fitness Watch",
      description: "Advanced fitness tracking with heart rate monitoring, GPS, and 7-day battery life.",
      price: 199.99,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 2156
    },
    {
      id: 4,
      name: "Ceramic Coffee Mug Set",
      description: "Set of 4 beautiful ceramic mugs perfect for your morning coffee or tea.",
      price: 34.99,
      category: "Home & Kitchen",
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 567
    },
    {
      id: 5,
      name: "Leather Crossbody Bag",
      description: "Stylish and practical leather bag with adjustable strap and multiple compartments.",
      price: 89.99,
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=300&fit=crop",
      rating: 4.5,
      reviews: 743
    },
    {
      id: 6,
      name: "Wireless Charging Pad",
      description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
      price: 49.99,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=400&h=300&fit=crop",
      rating: 4.4,
      reviews: 432
    },
    {
      id: 7,
      name: "Stainless Steel Water Bottle",
      description: "Insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
      price: 29.99,
      category: "Sports & Outdoors",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 1567
    },
    {
      id: 8,
      name: "Yoga Mat Premium",
      description: "Non-slip yoga mat with alignment lines and carrying strap included.",
      price: 39.99,
      category: "Sports & Outdoors",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 892
    },
    {
      id: 9,
      name: "Smart LED Light Bulb",
      description: "WiFi-enabled smart bulb with 16 million colors and voice control compatibility.",
      price: 19.99,
      category: "Home & Kitchen",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop",
      rating: 4.3,
      reviews: 321
    },
    {
      id: 10,
      name: "Portable Bluetooth Speaker",
      description: "Waterproof portable speaker with 360-degree sound and 20-hour battery life.",
      price: 79.99,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 1098
    },
    {
      id: 11,
      name: "Organic Face Moisturizer",
      description: "Natural face cream with hyaluronic acid and vitamin E for all skin types.",
      price: 44.99,
      category: "Beauty & Health",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 2341
    },
    {
      id: 12,
      name: "Laptop Stand Adjustable",
      description: "Ergonomic aluminum laptop stand with adjustable height and cable management.",
      price: 59.99,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
      rating: 4.5,
      reviews: 654
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Ecommerce</h1>
          <p className="text-gray-600">Product Catalog & Shopping Experience</p>
          <div className="mt-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-2">
              Frontend: Vue-style Grid Layout
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Backend: Node.js / Laravel
            </span>
          </div>
        </div>
        
        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {['All', 'Electronics', 'Clothing', 'Home & Kitchen', 'Fashion', 'Sports & Outdoors', 'Beauty & Health'].map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-1 text-sm text-gray-600">({product.reviews})</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="mt-8 text-center">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors font-medium">
            Load More Products
          </button>
        </div>
      </div>
    </div>
  );
};

const Auth = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center p-8">
    <div className="max-w-md w-full">
      <div className="bg-white rounded-lg shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your account</p>
          <div className="mt-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mr-2">
              Frontend: Firebase UI
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
              Backend: Firebase / Django
            </span>
          </div>
        </div>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-purple-600 hover:text-purple-500">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="text-purple-600 hover:text-purple-500 font-medium">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Crm = () => (
  <div className="min-h-screen bg-gray-50 p-8">
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">CRM</h1>
        <p className="text-gray-600">Customer Relationship Management</p>
        <div className="mt-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800 mr-2">
            Frontend: Svelte-inspired
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Backend: FastAPI / Rails
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Contacts</h2>
            <div className="space-y-4">
              {[
                { name: 'Alice Johnson', email: 'alice@example.com', status: 'Active', lastContact: '2 days ago' },
                { name: 'Bob Wilson', email: 'bob@example.com', status: 'Inactive', lastContact: '1 week ago' },
                { name: 'Carol Davis', email: 'carol@example.com', status: 'Active', lastContact: '1 day ago' }
              ].map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                    <p className="text-sm text-gray-600">{contact.email}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      contact.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {contact.status}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">{contact.lastContact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">New contact added</p>
                <p className="text-xs text-gray-500">Alice Johnson</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">Follow-up scheduled</p>
                <p className="text-xs text-gray-500">Bob Wilson</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">Meeting completed</p>
                <p className="text-xs text-gray-500">Carol Davis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Chat = () => (
  <div className="min-h-screen bg-gray-50 p-8">
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Chat</h1>
        <p className="text-gray-600">Real-time Messaging Interface</p>
        <div className="mt-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2">
            Frontend: React + WebSocket
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Backend: Node.js / Firebase
          </span>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg h-96 flex flex-col">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">General Chat</h2>
          <p className="text-sm text-gray-500">3 participants online</p>
        </div>
        
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              J
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-900">John</span>
                <span className="text-xs text-gray-500">2:30 PM</span>
              </div>
              <p className="text-gray-700">Hey everyone! How's it going?</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              S
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-900">Sarah</span>
                <span className="text-xs text-gray-500">2:31 PM</span>
              </div>
              <p className="text-gray-700">Great! Working on the new features.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              M
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-900">Mike</span>
                <span className="text-xs text-gray-500">2:32 PM</span>
              </div>
              <p className="text-gray-700">Same here! The UI is looking really good.</p>
            </div>
          </div>
        </div>
        
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Form = () => (
  <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 p-8">
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Multi-Step Form</h1>
        <p className="text-gray-600">Complex Form with Validation</p>
        <div className="mt-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mr-2">
            Frontend: Laravel Look
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
            Backend: PHP / Rails
          </span>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-xl p-8">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
              <span className="font-medium text-gray-900">Personal Information</span>
            </div>
            <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold">2</div>
            <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold">3</div>
          </div>
        </div>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your address"
            ></textarea>
          </div>
          
          <div className="flex justify-between pt-6">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Previous
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const location = useLocation();
  const routes = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/admin', label: 'Admin' },
    { path: '/ecommerce', label: 'Ecommerce' },
    { path: '/auth', label: 'Auth' },
    { path: '/crm', label: 'CRM' },
    { path: '/chat', label: 'Chat' },
    { path: '/form', label: 'Form' },
  ];
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">Second Life Software</h1>
          </div>
          <div className="flex items-center space-x-1">
            {routes.map(r => (
              <Link
                key={r.path}
                to={r.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === r.path 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/crm" element={<Crm />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
