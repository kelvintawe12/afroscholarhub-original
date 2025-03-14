import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCardIcon, SmartphoneIcon, CheckCircleIcon, DollarSignIcon } from 'lucide-react';
const Donate = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [donationAmount, setDonationAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [donorName, setDonorName] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };
  const handleAmountSelect = amount => {
    setDonationAmount(amount);
    setCustomAmount('');
  };
  const handleCustomAmount = e => {
    setCustomAmount(e.target.value);
    setDonationAmount(0);
  };
  if (isSuccess) {
    return <DonationSuccess name={donorName} amount={customAmount || donationAmount} />;
  }
  return <div className="w-full min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2B463C] mb-4">
              Make a Difference Today
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your donation directly supports African students in need of
              educational opportunities.
            </p>
          </motion.div>
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              {isSubmitting ? <LoadingAnimation /> : <form onSubmit={handleSubmit}>
                  {/* Donation Amount Selection */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-[#2B463C] mb-4">
                      Select Donation Amount
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      {[50, 100, 250, 500].map(amount => <button key={amount} type="button" onClick={() => handleAmountSelect(amount)} className={`p-4 rounded-lg border-2 transition-all ${donationAmount === amount && !customAmount ? 'border-[#FFD700] bg-[#FFD700] bg-opacity-10 text-[#2B463C]' : 'border-gray-200 hover:border-[#FFD700]'}`}>
                          <span className="block text-2xl font-bold">
                            ${amount}
                          </span>
                          {amount === 50 && <span className="text-sm text-gray-500">
                              Funds 1 application
                            </span>}
                          {amount === 100 && <span className="text-sm text-gray-500">
                              Helps 2 students
                            </span>}
                          {amount === 250 && <span className="text-sm text-gray-500">
                              Supports 5 students
                            </span>}
                          {amount === 500 && <span className="text-sm text-gray-500">
                              Funds a scholarship
                            </span>}
                        </button>)}
                    </div>
                    <div className="mt-4">
                      <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-1">
                        Custom Amount
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <DollarSignIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input type="number" id="customAmount" value={customAmount} onChange={handleCustomAmount} placeholder="Enter amount" className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700] sm:text-sm p-3 border" min="1" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="inline-flex items-center">
                        <input type="checkbox" checked={isRecurring} onChange={() => setIsRecurring(!isRecurring)} className="rounded border-gray-300 text-[#2B463C] shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700]" />
                        <span className="ml-2 text-gray-700">
                          Make this a monthly donation
                        </span>
                      </label>
                    </div>
                  </div>
                  {/* Payment Method */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-[#2B463C] mb-4">
                      Payment Method
                    </h2>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <PaymentMethodButton icon={<CreditCardIcon className="h-6 w-6" />} label="Card Payment" value="card" selected={paymentMethod === 'card'} onClick={() => setPaymentMethod('card')} />
                      <PaymentMethodButton icon={<div className="h-6 w-6" />} label="Bank Transfer" value="bank" selected={paymentMethod === 'bank'} onClick={() => setPaymentMethod('bank')} />
                      <PaymentMethodButton icon={<SmartphoneIcon className="h-6 w-6" />} label="Mobile Money" value="mobile" selected={paymentMethod === 'mobile'} onClick={() => setPaymentMethod('mobile')} />
                    </div>
                    {/* Card Payment Form */}
                    {paymentMethod === 'card' && <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Cardholder Name
                          </label>
                          <input type="text" id="name" value={donorName} onChange={e => setDonorName(e.target.value)} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700] sm:text-sm p-3 border" required />
                        </div>
                        <div>
                          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                            Card Number
                          </label>
                          <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700] sm:text-sm p-3 border" required />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                              Expiry Date
                            </label>
                            <input type="text" id="expiry" placeholder="MM/YY" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700] sm:text-sm p-3 border" required />
                          </div>
                          <div>
                            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                              CVC
                            </label>
                            <input type="text" id="cvc" placeholder="123" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700] sm:text-sm p-3 border" required />
                          </div>
                        </div>
                      </div>}
                    {/* Bank Transfer Form */}
                    {paymentMethod === 'bank' && <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h3 className="font-semibold text-gray-700 mb-2">
                          Bank Transfer Details
                        </h3>
                        <div className="space-y-2">
                          <p>
                            <span className="font-medium">Account Name:</span>{' '}
                            AfroScholarHub Charity
                          </p>
                          <p>
                            <span className="font-medium">Account Number:</span>{' '}
                            1234567890
                          </p>
                          <p>
                            <span className="font-medium">Bank:</span> African
                            Development Bank
                          </p>
                          <p>
                            <span className="font-medium">SWIFT/BIC:</span>{' '}
                            AFDBXXXX
                          </p>
                          <p className="text-sm text-gray-500 mt-4">
                            Please include your name and "Donation" in the
                            transfer reference.
                          </p>
                        </div>
                        <div className="mt-4">
                          <label htmlFor="transferName" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Name
                          </label>
                          <input type="text" id="transferName" value={donorName} onChange={e => setDonorName(e.target.value)} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700] sm:text-sm p-3 border" required />
                        </div>
                      </div>}
                    {/* Mobile Money Form */}
                    {paymentMethod === 'mobile' && <div className="space-y-4">
                        <div>
                          <label htmlFor="mobileProvider" className="block text-sm font-medium text-gray-700 mb-1">
                            Mobile Money Provider
                          </label>
                          <select id="mobileProvider" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700] sm:text-sm p-3 border" required>
                            <option value="">Select Provider</option>
                            <option value="mtn">MTN Mobile Money</option>
                            <option value="airtel">Airtel Money</option>
                            <option value="mpesa">M-Pesa</option>
                            <option value="orange">Orange Money</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-1">
                            Mobile Number
                          </label>
                          <input type="tel" id="mobileNumber" placeholder="+234 800 000 0000" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700] sm:text-sm p-3 border" required />
                        </div>
                        <div>
                          <label htmlFor="mobileName" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Name
                          </label>
                          <input type="text" id="mobileName" value={donorName} onChange={e => setDonorName(e.target.value)} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700] sm:text-sm p-3 border" required />
                        </div>
                      </div>}
                  </div>
                  {/* Impact Information */}
                  <div className="mb-8 bg-[#2B463C] bg-opacity-5 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#2B463C] mb-2">
                      Your Impact
                    </h3>
                    <p className="text-gray-700">
                      Your donation of ${customAmount || donationAmount} will
                      help fund{' '}
                      {Math.floor((customAmount || donationAmount) / 50)}{' '}
                      scholarship applications for deserving students.
                    </p>
                  </div>
                  {/* Submit Button */}
                  <div className="mt-8">
                    <button type="submit" className="w-full py-4 px-4 bg-[#AF3034] text-white font-bold rounded-md hover:bg-opacity-90 transition-all text-lg">
                      Complete Donation
                    </button>
                    <p className="text-sm text-gray-500 mt-2 text-center">
                      Your donation is securely processed and tax-deductible.
                    </p>
                  </div>
                </form>}
            </div>
          </motion.div>
        </div>
      </div>
    </div>;
};
const PaymentMethodButton = ({
  icon,
  label,
  value,
  selected,
  onClick
}) => {
  return <button type="button" onClick={onClick} className={`flex items-center space-x-2 p-4 rounded-lg border-2 transition-all ${selected ? 'border-[#FFD700] bg-[#FFD700] bg-opacity-10 text-[#2B463C]' : 'border-gray-200 hover:border-[#FFD700]'}`}>
      <span className="text-[#2B463C]">{icon}</span>
      <span className="font-medium">{label}</span>
    </button>;
};
const LoadingAnimation = () => {
  return <div className="flex flex-col items-center justify-center py-12">
      <div className="flex space-x-2 mb-4">
        {['A', 'F', 'R', 'O'].map((letter, index) => <motion.span key={index} className="text-4xl font-bold text-[#2B463C]" animate={{
        rotate: [0, 360],
        scale: [1, 1.2, 1]
      }} transition={{
        duration: 1.5,
        repeat: Infinity,
        delay: index * 0.15
      }}>
            {letter}
          </motion.span>)}
      </div>
      <p className="text-[#FFD700] font-semibold">
        Processing your donation...
      </p>
    </div>;
};
const DonationSuccess = ({
  name,
  amount
}) => {
  return <div className="w-full min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 text-center">
            <motion.div initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20
          }} className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircleIcon className="w-12 h-12 text-green-600" />
            </motion.div>
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }} className="text-3xl font-bold text-[#2B463C] mb-4">
              Thank You, {name}!
            </motion.h1>
            <motion.p initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.5
          }} className="text-xl text-gray-700 mb-6">
              Your donation of ${amount} has been successfully processed.
            </motion.p>
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.7
          }} className="bg-[#2B463C] bg-opacity-5 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-[#2B463C] mb-2">Your Impact</h3>
              <p className="text-gray-700">
                Your generosity will help fund {Math.floor(amount / 50)}{' '}
                scholarship applications for deserving students across Africa.
                We'll send you updates on how your donation is making a
                difference.
              </p>
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="/dashboard" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="px-6 py-3 bg-[#2B463C] text-white font-semibold rounded-md hover:bg-opacity-90 transition-all text-center">
                Track Your Impact
              </motion.a>
              <motion.a href="/" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="px-6 py-3 bg-transparent border-2 border-[#2B463C] text-[#2B463C] font-semibold rounded-md hover:bg-[#2B463C] hover:text-white transition-all text-center">
                Return Home
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Donate;