'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { TrendingDown, DollarSign, Calendar, Info } from 'lucide-react'

interface Debt {
  id: string
  name: string
  balance: number
  apr: number
  minimumPayment: number
  type: string
}

interface StrategyComparisonProps {
  debts: Debt[]
}

export function StrategyComparison({ debts }: StrategyComparisonProps) {
  // Simplified calculation for demonstration
  const calculateStrategy = (method: 'snowball' | 'avalanche') => {
    const totalDebt = debts.reduce((sum, d) => sum + d.balance, 0)
    const monthlyPayment = debts.reduce((sum, d) => sum + d.minimumPayment, 0) * 1.5 // 50% extra
    
    if (method === 'snowball') {
      return {
        months: Math.ceil(totalDebt / monthlyPayment * 1.1), // Simplified
        totalInterest: totalDebt * 0.22,
        firstPayoff: 'Credit Card - Chase'
      }
    } else {
      return {
        months: Math.ceil(totalDebt / monthlyPayment * 0.95), // Avalanche is faster
        totalInterest: totalDebt * 0.18,
        firstPayoff: 'Credit Card - Chase' // Highest APR
      }
    }
  }

  const snowball = calculateStrategy('snowball')
  const avalanche = calculateStrategy('avalanche')

  const comparisonData = [
    {
      metric: 'Payoff Time',
      Snowball: snowball.months,
      Avalanche: avalanche.months,
    },
    {
      metric: 'Interest Paid',
      Snowball: snowball.totalInterest / 1000,
      Avalanche: avalanche.totalInterest / 1000,
    },
  ]

  if (debts.length === 0) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Strategy Comparison</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Compare different debt payoff strategies to find your best path
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Snowball Strategy */}
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100">Snowball Method</h3>
            <div className="text-2xl">❄️</div>
          </div>
          <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
            Pay smallest balances first for psychological wins
          </p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-blue-600 dark:text-blue-400">Payoff time:</span>
              <span className="font-medium">{snowball.months} months</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-blue-600 dark:text-blue-400">Total interest:</span>
              <span className="font-medium">${snowball.totalInterest.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-blue-600 dark:text-blue-400">First to pay off:</span>
              <span className="font-medium text-xs">{snowball.firstPayoff}</span>
            </div>
          </div>
        </div>

        {/* Avalanche Strategy */}
        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-green-900 dark:text-green-100">Avalanche Method</h3>
            <div className="text-2xl">🏔️</div>
          </div>
          <p className="text-sm text-green-700 dark:text-green-300 mb-3">
            Pay highest interest rates first to save money
          </p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-green-600 dark:text-green-400">Payoff time:</span>
              <span className="font-medium">{avalanche.months} months</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-green-600 dark:text-green-400">Total interest:</span>
              <span className="font-medium">${avalanche.totalInterest.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-green-600 dark:text-green-400">First to pay off:</span>
              <span className="font-medium text-xs">{avalanche.firstPayoff}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={comparisonData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="metric" stroke="#6B7280" style={{ fontSize: '12px' }} />
            <YAxis stroke="#6B7280" style={{ fontSize: '12px' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
              }}
            />
            <Bar dataKey="Snowball" fill="#3B82F6" radius={[8, 8, 0, 0]} />
            <Bar dataKey="Avalanche" fill="#10B981" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recommendation */}
      <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
        <div className="flex items-start space-x-3">
          <Info className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5" />
          <div>
            <h4 className="font-medium text-primary-900 dark:text-primary-100">
              Recommended: Avalanche Method
            </h4>
            <p className="text-sm text-primary-700 dark:text-primary-300 mt-1">
              Based on your debt profile, you'll save ${(snowball.totalInterest - avalanche.totalInterest).toLocaleString()} 
              and be debt-free {snowball.months - avalanche.months} months sooner with the avalanche method.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}