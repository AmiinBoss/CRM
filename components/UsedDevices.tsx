import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const UsedDevices: React.FC = () => {
  const data = {
    labels: ['Mobile', 'Tablet', 'Desktop'],
    datasets: [
      {
        data: [10, 20, 70],
        backgroundColor: ['#1E3A8A', '#60A5FA', '#06B6D4'],
        hoverBackgroundColor: ['#1E40AF', '#3B82F6', '#0891B2'],
      },
    ],
  };

  return (
    <div className="rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-lg font-semibold">Used Devices</h5>
        <select className="border rounded px-2 py-1 text-sm">
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Yearly</option>
        </select>
      </div>
      <Doughnut data={data} />
      <div className="mt-4">
        <ul>
          <li className="flex items-center mb-2">
            <span className="inline-block w-3 h-3 rounded-full bg-blue-600 mr-2"></span> Mobile
            <span className="ml-auto font-semibold">10%</span>
          </li>
          <li className="flex items-center mb-2">
            <span className="inline-block w-3 h-3 rounded-full bg-blue-300 mr-2"></span> Tablet
            <span className="ml-auto font-semibold">20%</span>
          </li>
          <li className="flex items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-cyan-600 mr-2"></span> Desktop
            <span className="ml-auto font-semibold">70%</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UsedDevices;
