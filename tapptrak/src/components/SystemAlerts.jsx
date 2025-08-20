import React from 'react';

const SystemAlerts = () => {
  const alerts = [
    { id: '98765', title: 'Intrusion Detected' },
    { id: '54321', title: 'Visitor Overstayed' },
    { id: '11223', title: 'Failed Exit Detection' },
    { id: '33445', title: 'Unapproved Entry' }
  ];

  return (
    <div className="space-y-2">
      {alerts.map((alert) => (
        <div key={alert.id} className="flex items-center gap-4 bg-[#f8fcfa] hover:bg-white px-4 min-h-[72px] py-2 rounded-lg border border-[#d0e7d9] cursor-pointer transition-colors">
          <div className="text-[#0e1b13] flex items-center justify-center rounded-lg bg-[#e7f3ec] shrink-0 w-12 h-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#0e1b13] text-base font-medium leading-normal line-clamp-1">{alert.title}</p>
            <p className="text-[#4e976b] text-sm font-normal leading-normal line-clamp-2">Alert ID: {alert.id}</p>
          </div>
          <button className="ml-auto px-4 py-2 text-[#0e1b13] text-sm font-medium hover:bg-[#e7f3ec] rounded-lg transition-colors">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default SystemAlerts;
