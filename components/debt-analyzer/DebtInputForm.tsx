'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface DebtInputFormProps {
  onAdd: (debt: {
    name: string
    balance: number
    apr: number
    minimumPayment: number
    type: string
  }) => void
  onCancel: () => void
}

export function DebtInputForm({ onAdd, onCancel }: DebtInputFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    balance: '',
    apr: '',
    minimumPayment: '',
    type: 'credit_card'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAdd({
      name: formData.name,
      balance: parseFloat(formData.balance),
      apr: parseFloat(formData.apr),
      minimumPayment: parseFloat(formData.minimumPayment),
      type: formData.type
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium">Add New Debt</h3>
        <button
          type="button"
          onClick={onCancel}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Debt Name</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="e.g., Chase Credit Card"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium mb-1">Balance</label>
          <input
            type="number"
            required
            step="0.01"
            value={formData.balance}
            onChange={(e) => setFormData({ ...formData, balance: e.target.value })}
            className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="5000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">APR %</label>
          <input
            type="number"
            required
            step="0.1"
            value={formData.apr}
            onChange={(e) => setFormData({ ...formData, apr: e.target.value })}
            className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="18.5"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium mb-1">Min Payment</label>
          <input
            type="number"
            required
            step="0.01"
            value={formData.minimumPayment}
            onChange={(e) => setFormData({ ...formData, minimumPayment: e.target.value })}
            className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="150"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Type</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="credit_card">Credit Card</option>
            <option value="student">Student Loan</option>
            <option value="auto">Auto Loan</option>
            <option value="personal">Personal Loan</option>
            <option value="mortgage">Mortgage</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          Add Debt
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}