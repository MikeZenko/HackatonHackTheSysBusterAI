'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingDown, 
  DollarSign, 
  Calendar, 
  Target,
  AlertCircle,
  CheckCircle,
  Clock,
  PieChart,
  BarChart3,
  LineChart,
  Plus,
  Filter,
  Download
} from 'lucide-react'
import { DebtOverviewCard } from '@/components/dashboard/DebtOverviewCard'
import { DebtProgressChart } from '@/components/dashboard/DebtProgressChart'
import { PaymentSchedule } from '@/components/dashboard/PaymentSchedule'
import { QuickActions } from '@/components/dashboard/QuickActions'
import { RecentActivity } from '@/components/dashboard/RecentActivity'
import { DebtBreakdown } from '@/components/dashboard/DebtBreakdown'

export default function DashboardPage() {
  const [selectedStrategy, setSelectedStrategy] = useState<'snowball' | 'avalanche'>('avalanche')

  const debtSummary = {
    totalDebt: 68450,
    monthlyPayment: 1245,
    projectedPayoff: '4 years 3 months',
    interestSaved: 12340,
    debtsCount: 5,
    paidOff: 2,
  }

  const upcomingPayments = [
    { name: 'Student Loan - Federal', amount: 423, dueDate: '2025-02-01', status: 'upcoming' },
    { name: 'Credit Card - Chase', amount: 250, dueDate: '2025-02-05', status: 'upcoming' },
    { name: 'Auto Loan', amount: 389, dueDate: '2025-02-10', status: 'upcoming' },
    { name: 'Personal Loan', amount: 183, dueDate: '2025-02-15', status: 'upcoming' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, Alex!</h1>
              <p className="text-gray-600 dark:text-gray-400">
                You're on track to be debt-free by March 2029
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex gap-3">
              <button className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </button>
              <button className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
              <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-md hover:shadow-lg">
                <Plus className="w-4 h-4 mr-2" />
                Add Debt
              </button>
            </div>
          </motion.div>
        </div>

        {/* Strategy Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-1">Active Strategy</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedStrategy === 'snowball' 
                    ? 'Pay smallest debts first for quick wins' 
                    : 'Pay highest interest rates first to save money'}
                </p>
              </div>
              <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setSelectedStrategy('snowball')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    selectedStrategy === 'snowball'
                      ? 'bg-white dark:bg-gray-600 text-primary-600 dark:text-primary-400 shadow-sm'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  Snowball
                </button>
                <button
                  onClick={() => setSelectedStrategy('avalanche')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    selectedStrategy === 'avalanche'
                      ? 'bg-white dark:bg-gray-600 text-primary-600 dark:text-primary-400 shadow-sm'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  Avalanche
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DebtOverviewCard
            title="Total Debt"
            value={`$${debtSummary.totalDebt.toLocaleString()}`}
            change="-12.5%"
            icon={DollarSign}
            color="primary"
            delay={0.1}
          />
          <DebtOverviewCard
            title="Monthly Payment"
            value={`$${debtSummary.monthlyPayment.toLocaleString()}`}
            subtitle="Next due: Feb 1"
            icon={Calendar}
            color="secondary"
            delay={0.2}
          />
          <DebtOverviewCard
            title="Projected Payoff"
            value={debtSummary.projectedPayoff}
            subtitle="March 2029"
            icon={Target}
            color="success"
            delay={0.3}
          />
          <DebtOverviewCard
            title="Interest Saved"
            value={`$${debtSummary.interestSaved.toLocaleString()}`}
            subtitle="vs minimum payments"
            icon={TrendingDown}
            color="warning"
            delay={0.4}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - 2 cols */}
          <div className="lg:col-span-2 space-y-8">
            <DebtProgressChart />
            <PaymentSchedule payments={upcomingPayments} />
            <DebtBreakdown />
          </div>

          {/* Right Column - 1 col */}
          <div className="space-y-8">
            <QuickActions />
            <RecentActivity />
            
            {/* Motivational Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-6 text-white"
            >
              <h3 className="text-xl font-semibold mb-2">You're doing great!</h3>
              <p className="text-white/90 mb-4">
                You've paid off $23,450 so far. That's 25.5% of your original debt!
              </p>
              <div className="bg-white/20 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Progress to debt freedom</span>
                  <span className="text-sm font-semibold">25.5%</span>
                </div>
                <div className="w-full bg-white/30 rounded-full h-2">
                  <div className="bg-white rounded-full h-2 w-1/4 transition-all duration-500"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}