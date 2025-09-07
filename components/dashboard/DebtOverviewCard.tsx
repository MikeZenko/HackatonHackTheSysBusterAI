'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface DebtOverviewCardProps {
  title: string
  value: string
  change?: string
  subtitle?: string
  icon: LucideIcon
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  delay?: number
}

const colorClasses = {
  primary: 'from-primary-500 to-primary-600',
  secondary: 'from-secondary-500 to-secondary-600',
  success: 'from-success-500 to-success-600',
  warning: 'from-warning-500 to-warning-600',
  danger: 'from-danger-500 to-danger-600',
}

export function DebtOverviewCard({ title, value, change, subtitle, icon: Icon, color, delay = 0 }: DebtOverviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[color]} rounded-xl flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {change && (
          <span className={`text-sm font-medium ${change.startsWith('-') ? 'text-success-600' : 'text-danger-600'}`}>
            {change}
          </span>
        )}
      </div>
      <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
      {subtitle && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>
      )}
    </motion.div>
  )
}