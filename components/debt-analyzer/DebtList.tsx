'use client'

import { CreditCard, GraduationCap, Car, User, Home, DollarSign, Trash2 } from 'lucide-react'

interface Debt {
  id: string
  name: string
  balance: number
  apr: number
  minimumPayment: number
  type: string
}

interface DebtListProps {
  debts: Debt[]
  onUpdate: (id: string, updates: Partial<Debt>) => void
  onDelete: (id: string) => void
}

export function DebtList({ debts, onUpdate, onDelete }: DebtListProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'credit_card':
        return <CreditCard className="w-5 h-5" />
      case 'student':
        return <GraduationCap className="w-5 h-5" />
      case 'auto':
        return <Car className="w-5 h-5" />
      case 'personal':
        return <User className="w-5 h-5" />
      case 'mortgage':
        return <Home className="w-5 h-5" />
      default:
        return <DollarSign className="w-5 h-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'credit_card':
        return 'text-secondary-600 bg-secondary-100'
      case 'student':
        return 'text-primary-600 bg-primary-100'
      case 'auto':
        return 'text-success-600 bg-success-100'
      case 'personal':
        return 'text-warning-600 bg-warning-100'
      case 'mortgage':
        return 'text-purple-600 bg-purple-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  if (debts.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        <DollarSign className="w-12 h-12 mx-auto mb-2 opacity-50" />
        <p>No debts added yet</p>
        <p className="text-sm">Click "Add" to get started</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {debts.map((debt) => (
        <div
          key={debt.id}
          className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg ${getTypeColor(debt.type)}`}>
                {getIcon(debt.type)}
              </div>
              <div>
                <h4 className="font-medium">{debt.name}</h4>
                <div className="mt-1 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <p>Balance: ${debt.balance.toLocaleString()}</p>
                  <p>APR: {debt.apr}% • Min: ${debt.minimumPayment}</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => onDelete(debt.id)}
              className="text-gray-400 hover:text-danger-600 dark:hover:text-danger-400 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}