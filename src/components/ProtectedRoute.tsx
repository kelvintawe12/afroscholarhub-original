import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// Mock authentication - in a real app, this would come from context/state management
const ProtectedRoute = ({
  children,
  adminOnly = false
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    // Simulate checking auth status
    setTimeout(() => {
      // This would be replaced with actual auth check
      const mockUser = localStorage.getItem('mockUser');
      if (mockUser) {
        const user = JSON.parse(mockUser);
        setIsAuthenticated(true);
        setIsAdmin(user.email === 'admin@afro.com');
      }
      setIsLoading(false);
    }, 500);
  }, []);
  if (isLoading) {
    return <div className="w-full min-h-screen flex items-center justify-center">
        <div className="flex space-x-2">
          {['A', 'F', 'R', 'O'].map((letter, index) => <span key={index} className="text-4xl font-bold text-[#2B463C] animate-bounce" style={{
          animationDelay: `${index * 0.15}s`
        }}>
              {letter}
            </span>)}
        </div>
      </div>;
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{
      from: location
    }} replace />;
  }
  if (adminOnly && !isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};
export default ProtectedRoute;