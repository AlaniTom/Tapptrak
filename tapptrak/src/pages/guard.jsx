import React from 'react';
import { useNavigate } from 'react-router-dom';

const Guard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fcfa]">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7f3ec] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0e1b13]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_6_543)">
                  <path
                    d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_543"><rect width="48" height="48" fill="white"></rect></clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-[#0e1b13] text-lg font-bold leading-tight tracking-[-0.015em]">TappTrak</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#e7f3ec] hover:bg-[#d0e7d9] text-[#0e1b13] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 transition-colors"
              onClick={() => navigate('/alerts')}
            >
              <div className="text-[#0e1b13]" data-icon="Bell" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
                  ></path>
                </svg>
              </div>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer hover:opacity-90 transition-opacity"
              style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTdwOIGGJYs_AJMSgulhfjWIpvcnT5odulIY9ffYek0hj0g-nOrqGe3hzYYAwJSV6Bxe1m-BkiDJVU55n0A2XP3jC60a1iByIwY9-CgHf7yjDywCj2wXLo1n2Vg-ddUEVbqJH8NT3aTpcSYqZuCTjh7BDd7I4jQvLswqzUX7X9azl-j0MZm4zZx9SvIQlqCUmzHjYuGyYNNMYbqRRvWFh0C5Cj2GAvccUlIuXItFDs5PYEa8upH4M8l5vD6FmIcEuyw16vt4s70rzo")`}}
              onClick={() => navigate('/profile')}
            ></div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h2 className="text-[#0e1b13] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Security Guard Dashboard</h2>
            <div className="flex px-4 py-3 justify-center">
              <button
                onClick={() => navigate('/guardqr')}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#14b856] hover:bg-[#119548] text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors"
              >
                <span className="truncate">Scan QR Code</span>
              </button>
            </div>
            <h2 className="text-[#0e1b13] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Live Entries</h2>
            <div className="flex items-center gap-4 bg-[#f8fcfa] hover:bg-white px-4 min-h-[72px] py-2 rounded-lg border border-[#d0e7d9] transition-colors">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit border-2 border-[#e7f3ec]"
                style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-1ebEoh12jMioI0Bi6FZFyDqFf3PrK_PIlPy3Tph6iQH-D0Da5L1nyxSJgCRz9Tzrn22cdpE-gIjj3t8-hrRV1solnwUQtoQrJTukxMdS9GBmMIP6t-50lT89n1sAwmVCoK0tiglPf3vFq5dr45ZLnIjX0UfdrSiaUCPmKr3nQuYalTXCEivMTHG-xhyevB_TsIkuBvMQazS1jnEfm6mXNOzdyoNc-zAoTBnsvMcHdbHFnG7i7K0vgHZ6y5fSpqKVxQ1LJl-aIGKz")`}}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#0e1b13] text-base font-medium leading-normal line-clamp-1">Ethan Carter</p>
                <p className="text-[#4e976b] text-sm font-normal leading-normal line-clamp-2">Active</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#f8fcfa] hover:bg-white px-4 min-h-[72px] py-2 rounded-lg border border-[#d0e7d9] transition-colors mt-2">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit border-2 border-[#e7f3ec]"
                style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-JcOrcTFIXcZGvkvcSC7uiVPffYNb5zz9Ic696EmdAGlNWd9g2dI0v5GKF74OR0y3I2JqQb7gf83XQvhU1tMungdwjD7GqlDuXfhlSRe7LGz4vLDtrjtxCmY9RkB554QFWrd8vxNVvacyeVBZQVt1Bqx-1PNV_-XF9HUYao1QfDr9kMOEIWNX8amBPY9ae0sMMi5r-pqfw7ZPgcQBdpWKAoKc5YhKW6-IJ-R2Tzf3Y2_WmM0i8RoRHlpAWpk5QZOUlyg44IbVZPPO")`}}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#0e1b13] text-base font-medium leading-normal line-clamp-1">Olivia Bennett</p>
                <p className="text-[#4e976b] text-sm font-normal leading-normal line-clamp-2">Active</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#f8fcfa] hover:bg-white px-4 min-h-[72px] py-2 rounded-lg border border-[#d0e7d9] transition-colors mt-2">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit border-2 border-[#e7f3ec]"
                style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWwPZAQisPj5OMlm8Np5Hrn9fU5bfLBt1Opsn7TTQ27EUAtkHFQ4iqWVsZ9j-4v3nSLFLtVbyN_yzWL338bcHCnqj1FNSDRVubM819kxd4z6UVSfBGW8HQT04aGs0t9LtWVYKPEG5NJTzpndOdqWBLQMMndSCdPV_fr3pz49Ed55dMRxxy12J94wc53W3v3GylgoCCFWJmd3jVpBDqnAfUe81wlFVigRnmipUbZILLDeKZE4Uami2dNTooDOS8oYGcnqZzprgDoo_u")`}}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#0e1b13] text-base font-medium leading-normal line-clamp-1">Noah Thompson</p>
                <p className="text-[#4e976b] text-sm font-normal leading-normal line-clamp-2">Exited</p>
              </div>
            </div>
            <h2 className="text-[#0e1b13] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Alerts</h2>
            <div className="flex items-center gap-4 bg-[#f8fcfa] hover:bg-white px-4 min-h-[72px] py-2 rounded-lg border border-[#d0e7d9] transition-colors">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit border-2 border-[#e7f3ec]"
                style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFzaLGPG0MpYseNpPfQB-MawZNzj2SDddCChy9P3YNrkIg3f_yauIawZnMGDZyuZkC4sc-wmIW9WiWvWSfVuy4ePg_lQBQdDrRoS0ogvma-7OHfmZbLl5Y9uiYaq4M6sofNdHa9Tncdx0RrGcSYNnj8Fb0xIDYcJdO3kUMFVinlUjPaM83ZHc5ek3cpbUQcl9BnXllu54MHMVl3_rq_l3GPXegXe5g6u4Cvaoi83BsJjBasht807z4g4V_pUntqwrDPAwb83SYObKX")`}}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#0e1b13] text-base font-medium leading-normal line-clamp-1">Visitor: Sophia Clark</p>
                <p className="text-[#4e976b] text-sm font-normal leading-normal line-clamp-2">Time exceeded</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#f8fcfa] hover:bg-white px-4 min-h-[72px] py-2 rounded-lg border border-[#d0e7d9] transition-colors mt-2">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit border-2 border-[#e7f3ec]"
                style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCBa8Ba3AmQsLGlRrusYiRjq6smxSFEZOFcaQLBWGU_1coCk1lz53eMfVDmOL4LdMR2UDoVFE3bK83ke9ht_YzAZf4b24OR9sXubo5K6-dSMzBE8lZyxpgd8kYfOmrn9zh5Rfx0ybFn5Bkhla8tftRHh9DM51jAL9ciSMKRdbsZfdD4GbnsJCvLB8hMHOGoQOKSidsrMoJcHGPuZfrtJJBgRaiZGz0gHwRAcM5dX5dOcQTMYsDeIB9w1p9jERvvuBiS9-5Ym4uYBOVa")`}}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#0e1b13] text-base font-medium leading-normal line-clamp-1">Visitor: Liam Davis</p>
                <p className="text-[#4e976b] text-sm font-normal leading-normal line-clamp-2">Failed exit tracking</p>
              </div>
            </div>
            <div class="flex px-4 py-3 justify-center">
              <button
                onClick={() => {
                  sessionStorage.removeItem('userRole');
                  sessionStorage.removeItem('username');
                  navigate('/login');
                }}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7f3ec] hover:bg-[#d0e7d9] text-[#0e1b13] text-sm font-bold leading-normal tracking-[0.015em] transition-colors"
              >
                <span className="truncate">End Shift</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guard;
