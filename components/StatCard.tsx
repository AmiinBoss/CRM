// src/components/StatCard.tsx
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface StatCardProps {
  title: string;
  value: string;
  percentage: string;
  isPositive: boolean;
  progressValue: number;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  percentage,
  isPositive,
  progressValue,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-6 flex items-center justify-between">
      <div>
        <div className="text-4xl font-bold text-gray-900 dark:text-white">{value}</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm font-medium mt-1">{title}</div>
        <div className="mt-2 flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
          <div
            className={`mr-2 px-2 py-1 rounded-full text-sm font-semibold ${
              isPositive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
            }`}
          >
            {isPositive ? '↗' : '↘'} {percentage}
          </div>
          <span>Since last week</span>
        </div>
      </div>
      <div className="w-14 h-14">
        <CircularProgressbar
          value={progressValue}
          strokeWidth={10}
          styles={buildStyles({
            pathColor: `#3B82F6`,
            trailColor: '#E5E7EB',
            strokeLinecap: 'round',
          })}
        />
      </div>
    </div>
  );
};

export default StatCard;
