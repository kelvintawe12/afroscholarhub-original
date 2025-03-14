import React from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
const Countries = () => {
  return <DashboardLayout isAdmin>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
          <h1 className="text-2xl font-bold text-[#2B463C] mb-6">
            Countries Management
          </h1>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-gray-600">
              Placeholder content for the Admin Countries page.
            </p>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>;
};
export default Countries;