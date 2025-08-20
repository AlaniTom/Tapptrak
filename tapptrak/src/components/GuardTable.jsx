import React from 'react';

const GuardTable = () => {
  return (
    <div className="px-4 py-3 @container">
      <div className="flex overflow-hidden rounded-lg border border-[#d0e7d9] bg-[#f8fcfa]">
        <table className="flex-1">
          <thead>
            <tr className="bg-[#f8fcfa]">
              <th className="px-4 py-3 text-left text-[#0e1b13] w-[400px] text-sm font-medium leading-normal">Name</th>
              <th className="px-4 py-3 text-left text-[#0e1b13] w-[400px] text-sm font-medium leading-normal">ID</th>
              <th className="px-4 py-3 text-left text-[#0e1b13] w-[400px] text-sm font-medium leading-normal">Shift Time</th>
              <th className="px-4 py-3 text-left text-[#0e1b13] w-60 text-sm font-medium leading-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-t-[#d0e7d9]">
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#0e1b13] text-sm font-normal leading-normal">Ethan Carter</td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#4e976b] text-sm font-normal leading-normal">12345</td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#4e976b] text-sm font-normal leading-normal">8 AM - 8 PM</td>
              <td className="h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e7f3ec] text-[#0e1b13] text-sm font-medium leading-normal w-full">
                  <span className="truncate">Active</span>
                </button>
              </td>
            </tr>
            <tr className="border-t border-t-[#d0e7d9]">
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#0e1b13] text-sm font-normal leading-normal">Olivia Bennett</td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#4e976b] text-sm font-normal leading-normal">67890</td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#4e976b] text-sm font-normal leading-normal">8 PM - 8 AM</td>
              <td className="h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e7f3ec] text-[#0e1b13] text-sm font-medium leading-normal w-full">
                  <span className="truncate">Allowing Entries</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GuardTable;
