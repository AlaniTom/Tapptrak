import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import GuardTable from '../components/GuardTable';
import VisitorTable from '../components/VisitorTable';
import SystemAlerts from '../components/SystemAlerts';

const Admin = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 p-8 bg-[#f8fcfa]">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#0e1b13]">Admin Dashboard</h1>
          <div className="flex gap-4">
            <Link 
              to="/admin/reports" 
              className="px-4 py-2 bg-[#e7f3ec] text-[#0e1b13] rounded-lg font-medium"
            >
              Reports
            </Link>
            <Link
              to="/admin/settings"
              className="px-4 py-2 bg-[#e7f3ec] text-[#0e1b13] rounded-lg font-medium"
            >
              Settings
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-[#0e1b13]">Live Guard Activity</h2>
            <GuardTable />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-[#0e1b13]">Recent Alerts</h2>
            <SystemAlerts />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#0e1b13]">Visitor & Activity Logs</h2>
            <div className="flex gap-4">
              <button 
                onClick={() => navigate('/admin/visitors')}
                className="px-4 py-2 bg-[#e7f3ec] text-[#0e1b13] rounded-lg font-medium"
              >
                View All
              </button>
              <button 
                onClick={() => navigate('/admin/visitors/export')}
                className="px-4 py-2 bg-[#e7f3ec] text-[#0e1b13] rounded-lg font-medium"
              >
                Export Data
              </button>
            </div>
          </div>
          <VisitorTable />
        </div>

        {/* Download Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-[#0e1b13]">Download Data</h2>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 mb-4">
            <div className="flex flex-col min-w-40 flex-1">
              <label className="text-[#0e1b13] text-base font-medium leading-normal pb-2">
                Time Range
              </label>
              <select className="form-input w-full rounded-lg border border-[#d0e7d9] bg-[#f8fcfa] p-4 text-[#0e1b13] focus:border-[#4e976b] focus:outline-none">
                <option value="">Select time range</option>
                <option value="today">Today</option>
                <option value="week">Last 7 days</option>
                <option value="month">Last 30 days</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="px-6 py-2 bg-[#e7f3ec] text-[#0e1b13] rounded-lg font-bold">
              Download CSV
            </button>
            <button className="px-6 py-2 bg-[#e7f3ec] text-[#0e1b13] rounded-lg font-bold">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
