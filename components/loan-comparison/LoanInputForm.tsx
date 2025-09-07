'use client'

import { useState } from 'react'
import { Plus, Info } from 'lucide-react'

interface LoanInputFormProps {
  onAdd: (loan: {
    name: string
    principal: number
    apr: number
    termMonths: number
    fees: number
    type: string
    isPredatory: boolean
  }) => void
}

export function LoanInputForm({ onAdd }: LoanInputFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    principal: '',
    apr: '',
    termMonths: '',
    fees: '',
    type: 'personal'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const apr = parseFloat(formData.apr)
    const principal = parseFloat(formData.principal)
    const fees = parseFloat(formData.fees) || 0
    
    // Simple predatory loan detection
    const isPredatory = apr > 36 || (fees / principal) > 0.05
    
    onAdd({
      name: formData.name,
      principal,
      apr,
      termMonths: parseInt(formData.termMonths),
      fees,
      type: formData.type,
      isPredatory
    })
    
    // Reset form
    setFormData({
      name: '',
      principal: '',
      apr: '',
      termMonths: '',
      fees: '',
      type: 'personal'
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Loan Name</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="e.g., Bank ABC Auto Loan"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium mb-1">Principal ($)</label>
          <input
            type="number"
            required
            step="100"
            value={formData.principal}
            onChange={(e) => setFormData({ ...formData, principal: e.target.value })}
            className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="25000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            APR (%)
            <button
              type="button"
              className="ml-1 text-gray-400 hover:text-gray-600"
              title="Annual Percentage Rate - the true yearly cost of your loan including fees"
            >
              <Info className="w-3 h-3 inline" />
            </button>
          </label>
          <input
            type="number"
            required
            step="0.01"
            value={formData.apr}
            onChange={(e) => setFormData({ ...formData, apr: e.target.value })}
            className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="5.99"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium mb-1">Term (months)</label>
          <input
            type="number"
            required
            value={formData.termMonths}
            onChange={(e) => setFormData({ ...formData, termMonths: e.target.value })}
            className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="60"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Fees ($)</label>
          <input
            type="number"
            step="0.01"
            value={formData.fees}
            onChange={(e) => setFormData({ ...formData, fees: e.target.value })}
            className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="0"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Loan Type</label>
        <select
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="personal">Personal Loan</option>
          <option value="auto">Auto Loan</option>
          <option value="student">Student Loan</option>
          <option value="mortgage">Mortgage</option>
          <option value="credit_card">Credit Card</option>
          <option value="payday">Payday Loan</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Loan
      </button>
    </form>
  )
}