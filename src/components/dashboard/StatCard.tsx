import React from 'react';
import { motion } from 'framer-motion';
interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: number;
  loading?: boolean;
}
const StatCard = ({
  title,
  value,
  icon,
  change,
  loading = false
}: StatCardProps) => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} className="bg-white p-6 rounded-lg shadow-sm">
      {loading ? <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
        </div> : <>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
            <div className="text-[#2B463C]">{icon}</div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-2xl font-bold text-[#2B463C]">{value}</p>
              {change !== undefined && <p className={`text-sm mt-1 ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
                </p>}
            </div>
          </div>
        </>}
    </motion.div>;
};
export default StatCard;