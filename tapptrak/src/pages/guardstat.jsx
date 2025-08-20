import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/tables.css';

const GuardStat = () => {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  // Sample data - replace with actual data from your backend
  const guardStats = [
    {
      id: 1,
      name: 'John Smith',
      shift: 'Morning',
      visitors: 45,
      entries: 38,
      denials: 7,
      status: 'Active',
      lastActive: '2 mins ago'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      shift: 'Evening',
      visitors: 32,
      entries: 30,
      denials: 2,
      status: 'Active',
      lastActive: '5 mins ago'
    },
    {
      id: 3,
      name: 'Michael Brown',
      shift: 'Night',
      visitors: 15,
      entries: 12,
      denials: 3,
      status: 'Offline',
      lastActive: '3 hours ago'
    }
  ];

  const renderStatusBadge = (status) => {
    const baseClasses = "px-2.5 py-0.5 rounded-full text-xs font-medium";
    if (status === 'Active') {
      return (
        <span className={`${baseClasses} bg-[#e7f3ec] text-[#14b856]`}>
          Active
        </span>
      );
    }
    return (
      <span className={`${baseClasses} bg-[#f3e7ec] text-[#b81456]`}>
        Offline
      </span>
    );
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-[#f8fcfa]">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7f3ec] px-10 py-3">
        <div className="flex items-center gap-4 text-[#0e1b13]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_543)">
                <path
                  d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_543">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-[#0e1b13] text-lg font-bold leading-tight tracking-[-0.015em]">TappTrak</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <button className="text-[#0e1b13] text-sm font-medium leading-normal hover:text-[#4e976b] transition-colors" onClick={() => navigate('/admin')}>Dashboard</button>
            <button className="text-[#0e1b13] text-sm font-medium leading-normal hover:text-[#4e976b] transition-colors" onClick={() => navigate('/visitors')}>Visitors</button>
            <button className="text-[#0e1b13] text-sm font-medium leading-normal hover:text-[#4e976b] transition-colors" onClick={() => navigate('/residents')}>Residents</button>
            <button className="text-[#0e1b13] text-sm font-medium leading-normal hover:text-[#4e976b] transition-colors" onClick={() => navigate('/access')}>Access</button>
            <button className="text-[#0e1b13] text-sm font-medium leading-normal hover:text-[#4e976b] transition-colors" onClick={() => navigate('/devices')}>Devices</button>
            <button className="text-[#0e1b13] text-sm font-medium leading-normal hover:text-[#4e976b] transition-colors" onClick={() => navigate('/integrations')}>Integrations</button>
          </div>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer hover:opacity-90 transition-opacity"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCV4x6TL7de6AnV9xPhfXi0awBQztmyPWiaYGxUiAnHrWZQqq_Nn7Tj_SeS7EOKbwYtr_d2rhmesY_nawxBL4mLb2opJbBPMt4YN8AUzsQh27-rUqjiwCeGiQpHwsxdzp4uxSwGjR8o0aiVvhHyZwFyYFzzdvOE5el862Ywztw5bjjFoJS-OGU_c39V_R7nT8iYye_dLY5xxunktAcpKBpvLppxAlgrGLPTVrkj4VuwcCXqEH20nnv7e0xDPu313awxpmcLmMAEdvV5")`
            }}
            onClick={() => navigate('/profile')}
          />
        </div>
      </header>

      <main className="flex-1 p-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-[#0e1b13] text-2xl font-bold">Guard Statistics</h1>
          <div className="flex gap-4">
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                selectedPeriod === 'today' ? 'bg-[#14b856] text-white' : 'bg-[#e7f3ec] text-[#0e1b13]'
              }`}
              onClick={() => setSelectedPeriod('today')}
            >
              Today
            </button>
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                selectedPeriod === 'week' ? 'bg-[#14b856] text-white' : 'bg-[#e7f3ec] text-[#0e1b13]'
              }`}
              onClick={() => setSelectedPeriod('week')}
            >
              This Week
            </button>
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                selectedPeriod === 'month' ? 'bg-[#14b856] text-white' : 'bg-[#e7f3ec] text-[#0e1b13]'
              }`}
              onClick={() => setSelectedPeriod('month')}
            >
              This Month
            </button>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-[#4e976b] text-sm font-medium mb-2">Total Active Guards</h3>
            <p className="text-[#0e1b13] text-2xl font-bold">2</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-[#4e976b] text-sm font-medium mb-2">Total Visitors Today</h3>
            <p className="text-[#0e1b13] text-2xl font-bold">92</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-[#4e976b] text-sm font-medium mb-2">Total Entries</h3>
            <p className="text-[#0e1b13] text-2xl font-bold">80</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-[#4e976b] text-sm font-medium mb-2">Total Denials</h3>
            <p className="text-[#0e1b13] text-2xl font-bold">12</p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg bg-white shadow-sm">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-[#e7f3ec] bg-[#f8fcfa]">
                <th className="py-3 px-4 text-left text-sm font-medium text-[#4e976b]">Guard Name</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-[#4e976b]">Shift</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-[#4e976b]">Visitors</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-[#4e976b]">Entries</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-[#4e976b]">Denials</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-[#4e976b]">Status</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-[#4e976b]">Last Active</th>
              </tr>
            </thead>
            <tbody>
              {guardStats.map((guard) => (
                <tr key={guard.id} className="border-b border-[#e7f3ec] hover:bg-[#f8fcfa]">
                  <td className="py-4 px-4 text-sm text-[#0e1b13]">{guard.name}</td>
                  <td className="py-4 px-4 text-sm text-[#0e1b13]">{guard.shift}</td>
                  <td className="py-4 px-4 text-sm text-[#0e1b13]">{guard.visitors}</td>
                  <td className="py-4 px-4 text-sm text-[#0e1b13]">{guard.entries}</td>
                  <td className="py-4 px-4 text-sm text-[#0e1b13]">{guard.denials}</td>
                  <td className="py-4 px-4">{renderStatusBadge(guard.status)}</td>
                  <td className="py-4 px-4 text-sm text-[#4e976b]">{guard.lastActive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default GuardStat;
