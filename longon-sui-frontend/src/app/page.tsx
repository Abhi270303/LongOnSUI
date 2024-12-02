"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Changed from next/router
import { Home, DollarSign, ArrowRightLeft } from "lucide-react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return {
    isAuthenticated,
    login: () => setIsAuthenticated(true),
    logout: () => setIsAuthenticated(false),
  };
};

// Navigation component
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

export default function HomePage() {
  // Renamed from App to HomePage
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Undercollateralized Lending Platform
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Borrow WBTC with just 10% collateral or earn interest by lending
            USDC
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <DollarSign className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Lend</h2>
              <p className="text-gray-600 mb-6">
                Earn 5% APR by lending your USDC to the platform
              </p>
              <button
                onClick={() => handleNavigation("/lend")}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
              >
                Start Lending
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ArrowRightLeft className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Borrow</h2>
              <p className="text-gray-600 mb-6">
                Borrow WBTC with just 10% collateral, repay in 10 monthly
                installments
              </p>
              <button
                onClick={() => handleNavigation("/borrow")}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
              >
                Start Borrowing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
