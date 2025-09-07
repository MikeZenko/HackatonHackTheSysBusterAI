'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, DollarSign, TrendingUp, Info } from 'lucide-react'

interface Debt {
  id: string
  name: string
  balance: number
  apr: number
  minimumPayment: number
  type: string
}

interface SavingsCalculatorProps {
  debts: Debt[]
}

export function SavingsCalculator({ debts }: SavingsCalculatorProps) {
  const totalMinimum = debts.reduce((sum, d) => sum + d.minimumPayment, 0)
  const [extraPayment, setExtraPayment] = useState(totalMinimum * 0.5)

  const calculateSavings = (extra: number) => {
    const totalDebt = debts.reduce((sum, d) => sum + d.balance, 0)
    const avgAPR = debts.reduce((sum, d) => sum + d.apr, 0) / (debts.length || 1)
    
    // Simplified calculations
    const baseMonths = totalDebt / totalMinimum
    const acceleratedMonths = totalDebt / (totalMinimum + extra)
    const monthsSaved = baseMonths - acceleratedMonths
    
    const baseInterest = totalDebt * (avgAPR / 100) * (baseMonths / 12)
    const acceleratedInterest = totalDebt * (avgAPR / 100) * (acceleratedMonths / 12)
    const interestSaved = baseInterest - acceleratedInterest

    return {
      monthsSaved: Math.round(monthsSaved),
      interestSaved: Math.round(interestSaved),
      newPayoffTime: Math.ceil(acceleratedMonths),
      totalPayment: totalMinimum + extra
    }
  }

  const savings = calculateSavings(extraPayment)

  if (debts.length === 0) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Extra Payment Calculator</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          See how extra payments accelerate your debt freedom
        </p>
      </div>

      <div className="space-y-6">
        {/* Payment Slider */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium">Extra Monthly Payment</label>
            <span className="text-2xl font-bold text-primary-600">${Math.round(extraPayment)}</span>
          </div>
          <input
            type="range"
            min="0"
            max={totalMinimum * 2}
            step="10"
            value={extraPayment}
            onChange={(e) => setExtraPayment(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #0EA5E9 0%, #0EA5E9 ${(extraPayment / (totalMinimum * 2)) * 100}%, #E5E7EB ${(extraPayment / (totalMinimum * 2)) * 100}%, #E5E7EB 100%)`
            }}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>$0</span>
            <span>${totalMinimum} (current min)</span>
            <span>${totalMinimum * 2}</span>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-success-50 dark:bg-success-900/20 rounded-xl">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-5 h-5 text-success-600 dark:text-success-400" />
              <h4 className="font-medium text-success-900 dark:text-success-100">Time Saved</h4>
            </div>
            <p className="text-2xl font-bold text-success-700 dark:text-success-300">
              {savings.monthsSaved} months
            </p>
            <p className="text-sm text-success-600 dark:text-success-400 mt-1">
              Paid off in {savings.newPayoffTime} months
            </p>
          </div>

          <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <h4 className="font-medium text-primary-900 dark:text-primary-100">Interest Saved</h4>
            </div>
            <p className="text-2xl font-bold text-primary-700 dark:text-primary-300">
              ${savings.interestSaved.toLocaleString()}
            </p>
            <p className="text-sm text-primary-600 dark:text-primary-400 mt-1">
              vs minimum payments
            </p>
          </div>
        </div>

        {/* Monthly Payment Breakdown */}
        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
          <h4 className="font-medium mb-3">Your Monthly Payment Plan</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Minimum payments</span>
              <span>${totalMinimum}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Extra payment</span>
              <span className="text-primary-600 dark:text-primary-400">+${Math.round(extraPayment)}</span>
            </div>
            <div className="pt-2 border-t border-gray-200 dark:border-gray-600">
              <div className="flex justify-between font-semibold">
                <span>Total monthly payment</span>
                <span className="text-lg">${savings.totalPayment}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tip */}
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
          <div className="flex items-start space-x-3">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900 dark:text-blue-100">Pro Tip</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                Even an extra ${Math.round(totalMinimum * 0.2)} per month (20% more) would save you 
                {' '}{calculateSavings(totalMinimum * 0.2).monthsSaved} months and 
                ${calculateSavings(totalMinimum * 0.2).interestSaved.toLocaleString()} in interest!
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}