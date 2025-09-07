'use client'

import { motion } from 'framer-motion'
import { Calendar, CheckCircle, Circle, TrendingDown } from 'lucide-react'

interface Debt {
  id: string
  name: string
  balance: number
  apr: number
  minimumPayment: number
  type: string
}

interface PayoffTimelineProps {
  debts: Debt[]
}

export function PayoffTimeline({ debts }: PayoffTimelineProps) {
  // Generate timeline based on avalanche method (highest APR first)
  const sortedDebts = [...debts].sort((a, b) => b.apr - a.apr)
  
  let runningDate = new Date()
  const timeline = sortedDebts.map((debt, index) => {
    const monthsToPayoff = Math.ceil(debt.balance / (debt.minimumPayment * 2)) // Simplified
    runningDate.setMonth(runningDate.getMonth() + monthsToPayoff)
    
    return {
      debt: debt.name,
      payoffDate: new Date(runningDate),
      balance: debt.balance,
      savedInterest: debt.balance * debt.apr * 0.01 * monthsToPayoff / 12,
      milestone: index === 0 ? 'First Victory!' : index === sortedDebts.length - 1 ? 'Debt Freedom!' : null
    }
  })

  if (debts.length === 0) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Payoff Timeline</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Your journey to becoming debt-free
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

        {/* Timeline items */}
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="relative flex items-start space-x-4"
            >
              {/* Timeline dot */}
              <div className="relative z-10">
                {index === timeline.length - 1 ? (
                  <div className="w-8 h-8 bg-success-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                ) : (
                  <div className="w-8 h-8 bg-white dark:bg-gray-800 border-2 border-primary-500 rounded-full flex items-center justify-center">
                    <Circle className="w-4 h-4 text-primary-500" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-6">
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium">{item.debt}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.payoffDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </p>
                    </div>
                    {item.milestone && (
                      <span className="text-xs bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full">
                        {item.milestone}
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Balance:</span>
                      <span className="ml-2 font-medium">${item.balance.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Interest saved:</span>
                      <span className="ml-2 font-medium text-success-600 dark:text-success-400">
                        ${Math.round(item.savedInterest).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="mt-8 p-4 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Total Journey</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              From today to debt freedom
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold gradient-text">
              {Math.ceil(timeline[timeline.length - 1]?.payoffDate.getMonth() - new Date().getMonth() + 
                (timeline[timeline.length - 1]?.payoffDate.getFullYear() - new Date().getFullYear()) * 12)} months
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              ${Math.round(timeline.reduce((sum, item) => sum + item.savedInterest, 0)).toLocaleString()} saved
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}