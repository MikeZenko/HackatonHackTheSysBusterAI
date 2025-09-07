'use client'

import { motion } from 'framer-motion'
import { Calendar, DollarSign, Clock, CheckCircle, AlertCircle } from 'lucide-react'

interface Payment {
  name: string
  amount: number
  dueDate: string
  status: string
}

interface PaymentScheduleProps {
  payments: Payment[]
}

export function PaymentSchedule({ payments }: PaymentScheduleProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid':
        return <CheckCircle className="w-5 h-5 text-success-500" />
      case 'overdue':
        return <AlertCircle className="w-5 h-5 text-danger-500" />
      default:
        return <Clock className="w-5 h-5 text-warning-500" />
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const today = new Date()
    const diffTime = date.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Tomorrow'
    if (diffDays > 0 && diffDays <= 7) return `In ${diffDays} days`
    
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
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
          <h2 className="text-xl font-semibold mb-1">Upcoming Payments</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Stay on track with your payment schedule
          </p>
        </div>
        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
          View all
        </button>
      </div>

      <div className="space-y-4">
        {payments.map((payment, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="flex items-center space-x-4">
              {getStatusIcon(payment.status)}
              <div>
                <h4 className="font-medium">{payment.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Due {formatDate(payment.dueDate)}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">${payment.amount}</p>
              <button className="text-xs text-primary-600 hover:text-primary-700 font-medium">
                Pay now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
        <div className="flex items-start space-x-3">
          <Calendar className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5" />
          <div>
            <h4 className="font-medium text-primary-900 dark:text-primary-100">Auto-pay enabled</h4>
            <p className="text-sm text-primary-700 dark:text-primary-300 mt-1">
              Your payments are automatically processed 2 days before the due date
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}