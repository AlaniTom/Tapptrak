import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  
  const navItems = [
    { name: 'Guards', path: '/guardstat', icon: 'M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Z' },
    { name: 'Requests', path: '/request', icon: 'M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z' },
    { name: 'Alerts', path: '/alerts', icon: 'M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06Z' },
    { name: 'Visitors', path: '/visitor', icon: 'M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8Z' }
  ];

  return (
    <div className="w-64 min-h-screen bg-[#f8fcfa] border-r border-[#d0e7d9] p-4">
      <h1 className="text-[#0e1b13] text-lg font-bold mb-8">TappTrak</h1>
      
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#e7f3ec] text-[#0e1b13] transition-colors"
          >
            <div className="w-6 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                <path d={item.icon} />
              </svg>
            </div>
            <span className="text-sm font-medium">{item.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
