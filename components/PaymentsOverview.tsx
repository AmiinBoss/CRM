import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

// Register the required components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

const PaymentsOverview: React.FC = () => {
  const data = {
    labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Received Amount',
        data: [10, 20, 15, 25, 20, 30, 25, 35, 30, 40, 35, 45],
        borderColor: '#1E3A8A',
        fill: true,
        backgroundColor: 'rgba(30, 58, 138, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Due Amount',
        data: [5, 15, 10, 20, 15, 25, 20, 30, 25, 35, 30, 40],
        borderColor: '#64748B',
        fill: true,
        backgroundColor: 'rgba(100, 116, 139, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-lg font-semibold">Payments Overview</h5>
        <select className="border rounded px-2 py-1 text-sm">
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Yearly</option>
        </select>
      </div>
      <Line data={data} options={options} />
      <div className="mt-4 flex justify-between">
        <div className="text-center">
          <h6 className="text-md font-medium">Received Amount</h6>
          <p className="text-xl font-bold">$45,070.00</p>
        </div>
        <div className="text-center">
          <h6 className="text-md font-medium">Due Amount</h6>
          <p className="text-xl font-bold">$32,400.00</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentsOverview;
