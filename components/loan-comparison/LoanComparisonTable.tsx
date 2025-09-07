'use client'

import { motion } from 'framer-motion'
import { Trash2, AlertTriangle, CheckCircle, DollarSign } from 'lucide-react'

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

interface LoanComparisonTableProps {
  loans: Loan[]
  onRemove: (id: string) => void
}

export function LoanComparisonTable({ loans, onRemove }: LoanComparisonTableProps) {
  const calculateLoanDetails = (loan: Loan) => {
    const monthlyRate = loan.apr / 100 / 12
    const numPayments = loan.termMonths
    
    // Calculate monthly payment using loan formula
    const monthlyPayment = loan.principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)
    
    const totalPayments = monthlyPayment * numPayments
    const totalInterest = totalPayments - loan.principal
    const totalCost = totalPayments + loan.fees
    
    return {
      monthlyPayment: isNaN(monthlyPayment) ? 0 : monthlyPayment,
      totalInterest,
      totalCost,
      effectiveAPR: ((totalCost - loan.principal) / loan.principal / (loan.termMonths / 12)) * 100
    }
  }

  if (loans.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-sm text-center"
      >
        <DollarSign className="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
        <h3 className="text-lg font-medium mb-2">No Loans to Compare</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Add loans using the form to see a side-by-side comparison
        </p>
      </motion.div>
    )
  }

  const loansWithDetails = loans.map(loan => ({
    ...loan,
    ...calculateLoanDetails(loan)
  }))

  // Find best and worst options
  const bestLoan = loansWithDetails.reduce((best, loan) => 
    loan.totalCost < best.totalCost ? loan : best
  )
  const worstLoan = loansWithDetails.reduce((worst, loan) => 
    loan.totalCost > worst.totalCost ? loan : worst
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden"
    >
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold">Loan Comparison</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700/50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Loan Details
              </th>
              {loansWithDetails.map(loan => (
                <th key={loan.id} className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  <div className="flex items-center justify-center space-x-2">
                    <span>{loan.name}</span>
                    {loan.id === bestLoan.id && (
                      <span className="px-2 py-1 bg-success-100 dark:bg-success-900/20 text-success-700 dark:text-success-300 text-xs rounded-full">
                        Best
                      </span>
                    )}
                    {loan.isPredatory && (
                      <AlertTriangle className="w-4 h-4 text-danger-500" />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                Principal Amount
              </td>
              {loansWithDetails.map(loan => (
                <td key={loan.id} className="px-6 py-4 text-sm text-center">
                  ${loan.principal.toLocaleString()}
                </td>
              ))}
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-700/30">
              <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                APR
              </td>
              {loansWithDetails.map(loan => (
                <td key={loan.id} className="px-6 py-4 text-sm text-center">
                  <span className={loan.apr > 36 ? 'text-danger-600 font-semibold' : ''}>
                    {loan.apr}%
                  </span>
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                Term
              </td>
              {loansWithDetails.map(loan => (
                <td key={loan.id} className="px-6 py-4 text-sm text-center">
                  {loan.termMonths} months
                </td>
              ))}
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-700/30">
              <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                Fees
              </td>
              {loansWithDetails.map(loan => (
                <td key={loan.id} className="px-6 py-4 text-sm text-center">
                  <span className={loan.fees > 0 ? 'text-warning-600' : ''}>
                    ${loan.fees.toLocaleString()}
                  </span>
                </td>
              ))}
            </tr>
            <tr className="border-t-2 border-gray-300 dark:border-gray-600">
              <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                Monthly Payment
              </td>
              {loansWithDetails.map(loan => (
                <td key={loan.id} className="px-6 py-4 text-sm text-center font-semibold">
                  ${Math.round(loan.monthlyPayment).toLocaleString()}
                </td>
              ))}
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-700/30">
              <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                Total Interest
              </td>
              {loansWithDetails.map(loan => (
                <td key={loan.id} className="px-6 py-4 text-sm text-center">
                  <span className="text-danger-600">
                    ${Math.round(loan.totalInterest).toLocaleString()}
                  </span>
                </td>
              ))}
            </tr>
            <tr className="bg-primary-50 dark:bg-primary-900/20">
              <td className="px-6 py-4 text-sm font-bold text-primary-900 dark:text-primary-100">
                Total Cost
              </td>
              {loansWithDetails.map(loan => (
                <td key={loan.id} className="px-6 py-4 text-center">
                  <div className={`text-lg font-bold ${
                    loan.id === bestLoan.id ? 'text-success-600' : 
                    loan.id === worstLoan.id ? 'text-danger-600' : 
                    'text-gray-900 dark:text-gray-100'
                  }`}>
                    ${Math.round(loan.totalCost).toLocaleString()}
                  </div>
                  {loan.id === worstLoan.id && loan.id !== bestLoan.id && (
                    <div className="text-xs text-danger-600 mt-1">
                      +${Math.round(loan.totalCost - bestLoan.totalCost).toLocaleString()} vs best
                    </div>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-6 py-4"></td>
              {loansWithDetails.map(loan => (
                <td key={loan.id} className="px-6 py-4 text-center">
                  <button
                    onClick={() => onRemove(loan.id)}
                    className="text-gray-400 hover:text-danger-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4 mx-auto" />
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}