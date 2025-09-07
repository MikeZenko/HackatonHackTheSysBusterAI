'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, X, Shield, Info } from 'lucide-react'
import { useState } from 'react'

interface Loan {
  id: string
  name: string
  principal: number
  apr: number
  termMonths: number
  fees: number
  type: string
  isPredatory: boolean
}

interface PredatoryLoanWarningProps {
  loans: Loan[]
}

export function PredatoryLoanWarning({ loans }: PredatoryLoanWarningProps) {
  const [dismissed, setDismissed] = useState(false)
  
  const predatoryLoans = loans.filter(loan => loan.isPredatory)
  
  if (predatoryLoans.length === 0 || dismissed) {
    return null
  }

  const warnings = predatoryLoans.map(loan => {
    const issues = []
    
    if (loan.apr > 36) {
      issues.push(`APR of ${loan.apr}% exceeds 36% legal limit in many states`)
    }
    
    if (loan.fees / loan.principal > 0.05) {
      issues.push(`Fees are ${((loan.fees / loan.principal) * 100).toFixed(1)}% of principal (high)`)
    }
    
    if (loan.type === 'payday') {
      issues.push('Payday loans trap borrowers in cycles of debt')
    }
    
    if (loan.termMonths < 3 && loan.apr > 100) {
      issues.push('Short term with extreme interest rate')
    }
    
    return { loan, issues }
  })

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-danger-50 dark:bg-danger-900/20 border border-danger-200 dark:border-danger-800 rounded-2xl p-6 mb-6"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-danger-100 dark:bg-danger-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-danger-600 dark:text-danger-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-danger-900 dark:text-danger-100">
                Predatory Loan Warning
              </h3>
              <p className="text-sm text-danger-700 dark:text-danger-300 mt-1">
                We've detected potentially harmful loan terms
              </p>
            </div>
          </div>
          <button
            onClick={() => setDismissed(true)}
            className="text-danger-400 hover:text-danger-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          {warnings.map(({ loan, issues }) => (
            <div key={loan.id} className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h4 className="font-medium text-danger-900 dark:text-danger-100 mb-2">
                {loan.name}
              </h4>
              <ul className="space-y-1">
                {issues.map((issue, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm text-danger-700 dark:text-danger-300">
                    <span className="text-danger-500 mt-1">•</span>
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-danger-100 dark:bg-danger-900/30 rounded-lg">
          <div className="flex items-start space-x-3">
            <Shield className="w-5 h-5 text-danger-600 dark:text-danger-400 mt-0.5" />
            <div>
              <h4 className="font-medium text-danger-900 dark:text-danger-100">
                Protect Yourself
              </h4>
              <p className="text-sm text-danger-700 dark:text-danger-300 mt-1">
                Consider alternatives like credit union loans, payment plans with providers, 
                or nonprofit credit counseling before accepting predatory terms.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}