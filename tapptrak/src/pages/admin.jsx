import React from 'react';
import GuardTable from '../components/GuardTable';
import VisitorTable from '../components/VisitorTable';
import Sidebar from '../components/Sidebar';
import SystemAlerts from '../components/SystemAlerts';
import '../styles/tables.css';

const Admin = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8fcfa] group/design-root overflow-x-hidden"
         style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <Sidebar />
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#0e1b13] tracking-light text-[32px] font-bold leading-tight">Dashboard</p>
                <p className="text-[#4e976b] text-sm font-normal leading-normal">Securing Spaces, Ensuring Peace</p>
              </div>
            </div>

            <h3 className="text-[#0e1b13] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Live Guard Activity</h3>
            <GuardTable />

            <h3 className="text-[#0e1b13] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Visitor & Activity Logs</h3>
            <VisitorTable />

            <h3 className="text-[#0e1b13] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Manage Guards</h3>
            <div className="flex justify-stretch">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#14b856] text-[#0e1b13] text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Add Guard</span>
                </button>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7f3ec] text-[#0e1b13] text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Remove Guard</span>
                </button>
              </div>
            </div>

            <h3 className="text-[#0e1b13] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">System Alerts</h3>
            <SystemAlerts />

            <h3 className="text-[#0e1b13] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Approve Visitors / Maintenance Personnel</h3>
            <div className="flex justify-stretch">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#14b856] text-[#0e1b13] text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Approve Access</span>
                </button>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7f3ec] text-[#0e1b13] text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Temporary Pass</span>
                </button>
              </div>
            </div>

            <h3 className="text-[#0e1b13] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Download Data</h3>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0e1b13] text-base font-medium leading-normal pb-2">Time Range</p>
                <select className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b13] focus:outline-0 focus:ring-0 border border-[#d0e7d9] bg-[#f8fcfa] focus:border-[#d0e7d9] h-14 placeholder:text-[#4e976b] p-[15px] text-base font-normal leading-normal">
                  <option value="one">Last 48 Hours</option>
                  <option value="two">two</option>
                  <option value="three">three</option>
                </select>
              </label>
            </div>
            <div className="flex px-4 py-3 justify-start">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#14b856] text-[#0e1b13] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
