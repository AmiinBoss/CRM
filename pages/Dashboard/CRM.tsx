import React from 'react';
import StatCard from '../../components/StatCard';
import PaymentsOverview from '../../components/PaymentsOverview';
import UsedDevices from '../../components/UsedDevices';
import LeadsReport from '../../components/LeadsReport';

const CRM: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">This Week’s Overview</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Short by:</span>
          <select className="border border-gray-300 dark:border-gray-700 rounded-lg text-sm p-2">
            <option>Current Week</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 mb-6">
        <StatCard
          title="Clients Added"
          value="197"
          percentage="+2.5%"
          isPositive={true}
          progressValue={75} // Example progress value
        />
        <StatCard
          title="Contracts Signed"
          value="745"
          percentage="+1.5%"
          isPositive={true}
          progressValue={60} // Example progress value
        />
        <StatCard
          title="Invoice Sent"
          value="512"
          percentage="+0.5%"
          isPositive={true}
          progressValue={45} // Example progress value
        />
      </div>

      {/* Payment Overview and Used Devices Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
        {/* PaymentsOverview takes up 70% of the grid width */}
        <div className="md:col-span-2">
          <PaymentsOverview />
        </div>
        {/* UsedDevices takes up 30% of the grid width */}
        <div className="md:col-span-1">
          <UsedDevices />
        </div>
      </div>

      {/* LeadsReport Section */}
      <div className="mb-6">
        <LeadsReport />
      </div>
    </div>
  );
};

export default CRM;
