import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GuardQR = () => {
  const navigate = useNavigate();
  const [flatNumber, setFlatNumber] = useState('');
  const [purpose, setPurpose] = useState('');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('30');
  const [seconds, setSeconds] = useState('00');

  const handleConfirmEntry = () => {
    // Add your entry confirmation logic here
    navigate('/guard');
  };

  return (
    <div 
      className="relative flex min-h-screen flex-col bg-[#f8fcfa] overflow-x-hidden" 
      style={{ 
        fontFamily: 'Inter, Noto Sans, sans-serif',
        '--select-button-svg': `url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(78,151,107)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')`
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
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
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#0e1b13] tracking-light text-[32px] font-bold leading-tight min-w-72">Scan Result</p>
            </div>
            <div className="flex p-4 @container">
              <div className="flex w-full flex-col gap-4 items-center">
                <div className="flex gap-4 flex-col items-center">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-2 border-[#d0e7d9]"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCf1El0JxZZI0KG5JD1WBoOo8iRZrJw_3EFJlNnC8zHzS0w7LYJyAWIvG8FQFofmRYCqtPcVf2xoblrmBtKQLUmTgaOQmXE6B3RCXG_V6TUMlC6LP340QhUrJt0vQ7O8vGL01uMMNswWgoyL62sP6928gx8LB3M5uGoZiHueG_EvEoSbVY7vb05htHmGMyvyOJUi_8BtjhYrJaCdy1I51UPMWOACZZjBuOtUAtE9nuTZcncJZ9cJQUGUTOL4R_OpAa_NmdwMEhSTi37")`
                    }}
                  />
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-[#0e1b13] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">Sophia Clark</p>
                    <p className="text-[#4e976b] text-base font-normal leading-normal text-center">+1-555-123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0e1b13] text-base font-medium leading-normal pb-2">Flat Number</p>
                <input
                  placeholder="Enter flat number"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b13] focus:outline-0 focus:ring-0 border border-[#d0e7d9] bg-[#f8fcfa] focus:border-[#14b856] h-14 placeholder:text-[#4e976b] p-[15px] text-base font-normal leading-normal transition-colors"
                  value={flatNumber}
                  onChange={(e) => setFlatNumber(e.target.value)}
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0e1b13] text-base font-medium leading-normal pb-2">Purpose of Visit</p>
                <select
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b13] focus:outline-0 focus:ring-0 border border-[#d0e7d9] bg-[#f8fcfa] focus:border-[#14b856] h-14 bg-[image:var(--select-button-svg)] placeholder:text-[#4e976b] p-[15px] text-base font-normal leading-normal appearance-none bg-no-repeat bg-right-1 transition-colors"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                >
                  <option value="">Select purpose</option>
                  <option value="delivery">Delivery</option>
                  <option value="repair">Repair</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="guest">Guest</option>
                </select>
              </label>
            </div>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7f3ec] hover:bg-[#d0e7d9] px-4 transition-colors">
                <p className="text-[#0e1b13] text-sm font-medium leading-normal">Delivery</p>
              </button>
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7f3ec] hover:bg-[#d0e7d9] px-4 transition-colors">
                <p className="text-[#0e1b13] text-sm font-medium leading-normal">Repair</p>
              </button>
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7f3ec] hover:bg-[#d0e7d9] px-4 transition-colors">
                <p className="text-[#0e1b13] text-sm font-medium leading-normal">Maintenance</p>
              </button>
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7f3ec] hover:bg-[#d0e7d9] px-4 transition-colors">
                <p className="text-[#0e1b13] text-sm font-medium leading-normal">Guest</p>
              </button>
            </div>
            <h3 className="text-[#0e1b13] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Access Duration</h3>
            <div className="flex gap-4 py-6 px-4">
              <div className="flex grow basis-0 flex-col items-stretch gap-4">
                <input
                  type="text"
                  className="flex h-14 grow items-center justify-center rounded-lg px-3 bg-[#e7f3ec] text-[#0e1b13] text-lg font-bold leading-tight tracking-[-0.015em] text-center focus:outline-none focus:ring-1 focus:ring-[#14b856]"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                />
                <div className="flex items-center justify-center">
                  <p className="text-[#0e1b13] text-sm font-normal leading-normal">Hours</p>
                </div>
              </div>
              <div className="flex grow basis-0 flex-col items-stretch gap-4">
                <input
                  type="text"
                  className="flex h-14 grow items-center justify-center rounded-lg px-3 bg-[#e7f3ec] text-[#0e1b13] text-lg font-bold leading-tight tracking-[-0.015em] text-center focus:outline-none focus:ring-1 focus:ring-[#14b856]"
                  value={minutes}
                  onChange={(e) => setMinutes(e.target.value)}
                />
                <div className="flex items-center justify-center">
                  <p className="text-[#0e1b13] text-sm font-normal leading-normal">Minutes</p>
                </div>
              </div>
              <div className="flex grow basis-0 flex-col items-stretch gap-4">
                <input
                  type="text"
                  className="flex h-14 grow items-center justify-center rounded-lg px-3 bg-[#e7f3ec] text-[#0e1b13] text-lg font-bold leading-tight tracking-[-0.015em] text-center focus:outline-none focus:ring-1 focus:ring-[#14b856]"
                  value={seconds}
                  onChange={(e) => setSeconds(e.target.value)}
                />
                <div className="flex items-center justify-center">
                  <p className="text-[#0e1b13] text-sm font-normal leading-normal">Seconds</p>
                </div>
              </div>
            </div>
            <div className="flex px-4 py-3">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#14b856] hover:bg-[#119548] text-[#0e1b13] text-sm font-bold leading-normal tracking-[0.015em] transition-colors"
                onClick={handleConfirmEntry}
              >
                <span className="truncate">Confirm Entry</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuardQR;
