import React from 'react';

const VisitorTable = () => {
  return (
    <div className="px-4 py-3 @container">
      <div className="flex overflow-hidden rounded-lg border border-[#d0e7d9] bg-[#f8fcfa]">
        <table className="flex-1">
          <thead>
            <tr className="bg-[#f8fcfa]">
              <th className="px-4 py-3 text-left text-[#0e1b13] w-[400px] text-sm font-medium leading-normal">Visitor Name</th>
              <th className="px-4 py-3 text-left text-[#0e1b13] w-[400px] text-sm font-medium leading-normal">Phone</th>
              <th className="px-4 py-3 text-left text-[#0e1b13] w-14 text-sm font-medium leading-normal">Photo</th>
              <th className="px-4 py-3 text-left text-[#0e1b13] w-[400px] text-sm font-medium leading-normal">Flat No.</th>
              <th className="px-4 py-3 text-left text-[#0e1b13] w-[400px] text-sm font-medium leading-normal">Entry Time</th>
              <th className="px-4 py-3 text-left text-[#0e1b13] w-[400px] text-sm font-medium leading-normal">Exit Time</th>
              <th className="px-4 py-3 text-left text-[#0e1b13] w-[400px] text-sm font-medium leading-normal">Purpose</th>
              <th className="px-4 py-3 text-left text-[#0e1b13] w-60 text-sm font-medium leading-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-t-[#d0e7d9]">
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#0e1b13] text-sm font-normal leading-normal">Liam Harper</td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#4e976b] text-sm font-normal leading-normal">555-1234</td>
              <td className="h-[72px] px-4 py-2 w-14 text-sm font-normal leading-normal">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuArmuFR9wHCCrlTLq49TfeTsGZkURZfXo48424NRraWumXTm0XZ7u9Y4NeOBG2VdAp2zqBtS95qxtmd2NlE0HysXXv9bjR7iNG3vrtz_PRDqnYUNiIw-a0qKfH_w7-u0RYs9OxFrd4lnXVr_5Eqt-D5KAi56qOsft5ZOotvBDcl7F2fwnxPFa9y-vLsqj3e8j3NP-S90mQty0DKdqrPtOJVAd-Q4HwoSCi5OdqSuFnR131G6GK_KQC4SrK1RIHqhIFvyom3GH9iExnc")' }}></div>
              </td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#4e976b] text-sm font-normal leading-normal">101</td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#4e976b] text-sm font-normal leading-normal">10:00 AM</td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#4e976b] text-sm font-normal leading-normal">11:00 AM</td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#4e976b] text-sm font-normal leading-normal">Delivery</td>
              <td className="h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e7f3ec] text-[#0e1b13] text-sm font-medium leading-normal w-full">
                  <span className="truncate">Exited</span>
                </button>
              </td>
            </tr>
            <tr className="border-t border-t-[#d0e7d9]">
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#0e1b13] text-sm font-normal leading-normal">Sophia Clark</td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#4e976b] text-sm font-normal leading-normal">555-5678</td>
              <td className="h-[72px] px-4 py-2 w-14 text-sm font-normal leading-normal">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDI2b1XpsbCgVsn7u2JuTAZXRrfjD9eqp-lZW51edcp_27QnoroDbu9yzHoH8fB254k9JGUD2EbXZMwKI_0cCN8bZDjylZVUABPid0wLm24Z2P1Dt1cNCz6OvivC5n9f1Z-dxmIN0tX8835HUTkJ-j9bnWgyrVCaGwXE0aZ89lsB953z3r1itkBVVA2APdMPi0VDJyTzjUVhEkcnfip5RfbIgYiq7DTM3kEHlscw-ERw9vc9-kMiQyGWTDjhx40sP9kD0gcx34j-FZu")' }}></div>
              </td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#4e976b] text-sm font-normal leading-normal">202</td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#4e976b] text-sm font-normal leading-normal">11:30 AM</td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#4e976b] text-sm font-normal leading-normal">12:30 PM</td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#4e976b] text-sm font-normal leading-normal">Meeting</td>
              <td className="h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e7f3ec] text-[#0e1b13] text-sm font-medium leading-normal w-full">
                  <span className="truncate">Exited</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VisitorTable;
