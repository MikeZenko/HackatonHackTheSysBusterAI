'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Calculator,
  Plus,
  TrendingDown,
  Target,
  Brain,
  AlertCircle,
  CheckCircle,
  Info,
  DollarSign,
  Percent,
  Calendar,
  BarChart3
} from 'lucide-react'
import { DebtInputForm } from '@/components/debt-analyzer/DebtInputForm'
import { StrategyComparison } from '@/components/debt-analyzer/StrategyComparison'
import { DebtList } from '@/components/debt-analyzer/DebtList'
import { PayoffTimeline } from '@/components/debt-analyzer/PayoffTimeline'
import { SavingsCalculator } from '@/components/debt-analyzer/SavingsCalculator'

export default function DebtAnalyzerPage() {
  const [debts, setDebts] = useState([
    {
      id: '1',
      name: 'Student Loan - Federal',
      balance: 35000,
      apr: 4.5,
      minimumPayment: 423,
      type: 'student',
    },
    {
      id: '2',
      name: 'Credit Card - Chase',
      balance: 8500,
      apr: 22.9,
      minimumPayment: 250,
      type: 'credit_card',
    },
    {
      id: '3',
      name: 'Auto Loan',
      balance: 15000,
      apr: 5.2,
      minimumPayment: 389,
      type: 'auto',
    },
  ])

  const [showAddDebt, setShowAddDebt] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Debt Analyzer</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Add your debts and discover the fastest way to become debt-free
          </p>
        </motion.div>

        {/* AI Insights Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-6 text-white"
        >
          <div className="flex items-start space-x-4">
            <Brain className="w-8 h-8 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-2">AI-Powered Analysis</h2>
              <p className="text-white/90">
                Our intelligent algorithm analyzes your unique debt situation and recommends the optimal
                payoff strategy. We'll show you exactly how much time and money you can save.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Debt List */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Your Debts</h2>
                  <button
                    onClick={() => setShowAddDebt(!showAddDebt)}
                    className="inline-flex items-center px-3 py-1.5 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-900/30 transition-colors"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add
                  </button>
                </div>
                
                {showAddDebt && (
                  <div className="mb-4">
                    <DebtInputForm 
                      onAdd={(debt) => {
                        setDebts([...debts, { ...debt, id: Date.now().toString() }])
                        setShowAddDebt(false)
                      }}
                      onCancel={() => setShowAddDebt(false)}
                    />
                  </div>
                )}

                <DebtList 
                  debts={debts}
                  onUpdate={(id, updates) => {
                    setDebts(debts.map(d => d.id === id ? { ...d, ...updates } : d))
                  }}
                  onDelete={(id) => {
                    setDebts(debts.filter(d => d.id !== id))
                  }}
                />

                {/* Summary Stats */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Total Debt</span>
                    <span className="font-semibold">
                      ${debts.reduce((sum, d) => sum + d.balance, 0).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Monthly Minimum</span>
                    <span className="font-semibold">
                      ${debts.reduce((sum, d) => sum + d.minimumPayment, 0).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Average APR</span>
                    <span className="font-semibold">
                      {debts.length > 0 
                        ? (debts.reduce((sum, d) => sum + d.apr, 0) / debts.length).toFixed(1)
                        : 0}%
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Analysis */}
          <div className="lg:col-span-2 space-y-6">
            <StrategyComparison debts={debts} />
            <PayoffTimeline debts={debts} />
            <SavingsCalculator debts={debts} />
          </div>
        </div>
      </div>
    </div>
  )
}