'use client'

import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle, Info, TrendingDown } from 'lucide-react'

export function RecentActivity() {
  const activities = [
    {
      type: 'success',
      icon: CheckCircle,
      title: 'Payment Processed',
      description: 'Chase Credit Card - $250',
      time: '2 hours ago',
    },
    {
      type: 'info',
      icon: TrendingDown,
      title: 'Strategy Updated',
      description: 'Switched to Avalanche method',
      time: '1 day ago',
    },
    {
      type: 'warning',
      icon: AlertCircle,
      title: 'Payment Reminder',
      description: 'Auto Loan due in 3 days',
      time: '2 days ago',
    },
    {
      type: 'success',
      icon: CheckCircle,
      title: 'Milestone Reached',
      description: '25% of debt paid off!',
      time: '5 days ago',
    },
  ]

  const getIconColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'text-success-500'
      case 'warning':
        return 'text-warning-500'
      case 'error':
        return 'text-danger-500'
      default:
        return 'text-primary-500'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
    >
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            className="flex items-start space-x-3"
          >
            <activity.icon className={`w-5 h-5 ${getIconColor(activity.type)} mt-0.5`} />
            <div className="flex-1">
              <h4 className="text-sm font-medium">{activity.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{activity.description}</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}