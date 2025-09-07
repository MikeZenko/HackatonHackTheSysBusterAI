'use client'

import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { DollarSign, TrendingDown, AlertCircle } from 'lucide-react'

export function DebtBreakdown() {
  const data = [
    { name: 'Student Loans', value: 35000, percentage: 51.1, apr: 4.5 },
    { name: 'Credit Cards', value: 12500, percentage: 18.3, apr: 22.9 },
    { name: 'Auto Loan', value: 15000, percentage: 21.9, apr: 5.2 },
    { name: 'Personal Loan', value: 5950, percentage: 8.7, apr: 12.5 },
  ]

  const COLORS = ['#0EA5E9', '#EC4899', '#10B981', '#F59E0B']

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="font-medium">{payload[0].name}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            ${payload[0].value.toLocaleString()} ({payload[0].payload.percentage}%)
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            APR: {payload[0].payload.apr}%
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold mb-1">Debt Breakdown</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Visualize your debt composition
          </p>
        </div>
        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
          Details
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: COLORS[index] }}
                />
                <div>
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">APR: {item.apr}%</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-sm">${item.value.toLocaleString()}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{item.percentage}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 bg-warning-50 dark:bg-warning-900/20 rounded-xl">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-warning-600 dark:text-warning-400 mt-0.5" />
          <div>
            <h4 className="font-medium text-warning-900 dark:text-warning-100">High Interest Alert</h4>
            <p className="text-sm text-warning-700 dark:text-warning-300 mt-1">
              Your credit cards have the highest APR. Consider prioritizing these with the avalanche method.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}