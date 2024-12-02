import Navigation from "@/components/shared/Navbar";
import StatsCard from "@/components/StatsCard";
import { ArrowRightLeft, Clock, DollarSign, Wallet } from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Value Locked"
            value="$1,234,567"
            icon={DollarSign}
          />
          <StatsCard title="Active Loans" value="12" icon={ArrowRightLeft} />
          <StatsCard title="Your Deposits" value="$50,000" icon={Wallet} />
          <StatsCard
            title="Time Until Next Payment"
            value="15 days"
            icon={Clock}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Your Active Loans
            </h2>
            <div className="space-y-4">
              {/* Sample loan item */}
              <div className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Loan #1234</p>
                    <p className="text-sm text-gray-500">10 WBTC @ 5% APR</p>
                  </div>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                    Pay Installment
                  </button>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-600">
                    Next payment: 0.1 WBTC in 15 days
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Your Deposits
            </h2>
            <div className="space-y-4">
              {/* Sample deposit item */}
              <div className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">USDC Pool</p>
                    <p className="text-sm text-gray-500">
                      50,000 USDC @ 5% APR
                    </p>
                  </div>
                  <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50">
                    Withdraw
                  </button>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-600">Earned: 125 USDC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
