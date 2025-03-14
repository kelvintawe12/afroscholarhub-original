import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserIcon, LockIcon, EyeIcon, EyeOffIcon } from 'lucide-react';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';
  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    // Simulate authentication
    setTimeout(() => {
      if (email === 'admin@afro.com' && password === 'afroadmin') {
        // Store user info (in a real app, you'd store a token)
        localStorage.setItem('mockUser', JSON.stringify({
          email,
          isAdmin: true
        }));
        navigate('/admin');
      } else if (email && password) {
        // Regular user login
        localStorage.setItem('mockUser', JSON.stringify({
          email,
          isAdmin: false
        }));
        navigate(from);
      } else {
        setError('Invalid email or password');
      }
      setIsLoading(false);
    }, 1500);
  };
  return <div className="w-full min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-[#2B463C]">
                  Welcome Back
                </h1>
                <p className="text-gray-600 mt-2">
                  Sign in to access your AfroScholarHub dashboard
                </p>
              </div>
              {error && <motion.div initial={{
              opacity: 0,
              y: -10
            }} animate={{
              opacity: 1,
              y: 0
            }} className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                  {error}
                </motion.div>}
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <UserIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700] sm:text-sm p-3 border" placeholder="you@example.com" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <LockIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <input id="password" type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} className="pl-10 pr-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700] sm:text-sm p-3 border" placeholder="••••••••" required />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 flex items-center pr-3">
                        {showPassword ? <EyeOffIcon className="h-5 w-5 text-gray-400" /> : <EyeIcon className="h-5 w-5 text-gray-400" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-[#2B463C] focus:ring-[#FFD700]" />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <Link to="/forgot-password" className="font-medium text-[#2B463C] hover:text-[#FFD700]">
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                  <div>
                    <button type="submit" disabled={isLoading} className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#2B463C] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFD700] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}>
                      {isLoading ? <div className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Signing in...
                        </div> : 'Sign in'}
                    </button>
                  </div>
                </div>
              </form>
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  Don\'t have an account?{' '}
                  <Link to="/signup" className="font-medium text-[#2B463C] hover:text-[#FFD700]">
                    Sign up
                  </Link>
                </p>
              </div>
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Demo Access
                    </span>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <button type="button" onClick={() => {
                  setEmail('admin@afro.com');
                  setPassword('afroadmin');
                }} className="py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFD700]">
                    Admin Login
                  </button>
                  <button type="button" onClick={() => {
                  setEmail('user@example.com');
                  setPassword('password');
                }} className="py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFD700]">
                    User Login
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>;
};
export default Login;