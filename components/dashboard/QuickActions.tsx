'use client'

import { motion } from 'framer-motion'
import { Calculator, FileText, TrendingUp, CreditCard, Plus, Settings } from 'lucide-react'

export function QuickActions() {
  const actions = [
    { icon: Calculator, label: 'Calculate Payoff', color: 'bg-primary-100 text-primary-600' },
    { icon: FileText, label: 'View Reports', color: 'bg-secondary-100 text-secondary-600' },
    { icon: TrendingUp, label: 'Optimize Strategy', color: 'bg-success-100 text-success-600' },
    { icon: CreditCard, label: 'Add Payment', color: 'bg-warning-100 text-warning-600' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
    >
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${action.color} dark:bg-gray-700 dark:text-gray-300 p-4 rounded-xl flex flex-col items-center justify-center space-y-2 hover:shadow-md transition-all`}
          >
            <action.icon className="w-6 h-6" />
            <span className="text-sm font-medium">{action.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}