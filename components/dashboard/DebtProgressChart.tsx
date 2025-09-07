'use client'

import { motion } from 'framer-motion'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { TrendingDown, TrendingUp, Calendar } from 'lucide-react'

export function DebtProgressChart() {
  const data = [
    { month: 'Jan', actual: 92000, projected: 92000 },
    { month: 'Feb', actual: 90500, projected: 90000 },
    { month: 'Mar', actual: 88700, projected: 88000 },
    { month: 'Apr', actual: 86200, projected: 86000 },
    { month: 'May', actual: 83500, projected: 84000 },
    { month: 'Jun', actual: 80100, projected: 82000 },
    { month: 'Jul', actual: 76800, projected: 80000 },
    { month: 'Aug', actual: 73200, projected: 78000 },
    { month: 'Sep', actual: 70100, projected: 76000 },
    { month: 'Oct', actual: 68450, projected: 74000 },
    { month: 'Nov', actual: null, projected: 72000 },
    { month: 'Dec', actual: null, projected: 70000 },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold mb-1">Debt Progress</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Track your journey to financial freedom
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Actual</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Projected</span>
          </div>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#94A3B8" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#94A3B8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis 
              dataKey="month" 
              stroke="#6B7280"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="#6B7280"
              style={{ fontSize: '12px' }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              formatter={(value: any) => [`$${value?.toLocaleString() || 'N/A'}`, '']}
            />
            <Area
              type="monotone"
              dataKey="projected"
              stroke="#94A3B8"
              fillOpacity={1}
              fill="url(#colorProjected)"
              strokeWidth={2}
              strokeDasharray="5 5"
            />
            <Area
              type="monotone"
              dataKey="actual"
              stroke="#0EA5E9"
              fillOpacity={1}
              fill="url(#colorActual)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1 text-success-600 mb-1">
            <TrendingDown className="w-4 h-4" />
            <span className="text-sm font-medium">$23,550</span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400">Paid this year</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1 text-primary-600 mb-1">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">10 months</span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400">Ahead of schedule</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1 text-warning-600 mb-1">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">18.5%</span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400">APR saved</p>
        </div>
      </div>
    </motion.div>
  )
}