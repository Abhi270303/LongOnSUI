"use client";

import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation"; // Changed from 'next/router' to 'next/navigation'
import { Home } from "lucide-react";

const Navigation = () => {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <nav className="bg-indigo-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Home className="w-6 h-6" />
          <span className="text-xl font-bold">DeFi Lending</span>
        </div>
        <div className="flex space-x-6">
          {isAuthenticated ? (
            <>
              <button
                onClick={() => handleNavigation("/dashboard")}
                className="hover:text-indigo-200"
              >
                Dashboard
              </button>
              <button
                onClick={() => handleNavigation("/lend")}
                className="hover:text-indigo-200"
              >
                Lend
              </button>
              <button
                onClick={() => handleNavigation("/borrow")}
                className="hover:text-indigo-200"
              >
                Borrow
              </button>
              <button onClick={logout} className="hover:text-indigo-200">
                Logout
              </button>
            </>
          ) : (
            <button
              className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700"
              onClick={() => handleNavigation("/login")}
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 
