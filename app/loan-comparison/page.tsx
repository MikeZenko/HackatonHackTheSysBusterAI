'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Calculator,
  AlertTriangle,
  CheckCircle,
  Info,
  FileText,
  Download,
  Shield,
  DollarSign,
  Percent,
  Calendar,
  TrendingUp,
  Eye,
  EyeOff
} from 'lucide-react'
import { LoanInputForm } from '@/components/loan-comparison/LoanInputForm'
import { LoanComparisonTable } from '@/components/loan-comparison/LoanComparisonTable'
import { AmortizationChart } from '@/components/loan-comparison/AmortizationChart'
import { PredatoryLoanWarning } from '@/components/loan-comparison/PredatoryLoanWarning'
import { TrueCostBreakdown } from '@/components/loan-comparison/TrueCostBreakdown'

export default function LoanComparisonPage() {
  const [loans, setLoans] = useState([
    {
      id: '1',
      name: 'Federal Student Loan',
      principal: 30000,
      apr: 4.99,
      termMonths: 120,
      fees: 0,
      type: 'student',
      isPredatory: false,
    },
    {
      id: '2',
      name: 'Private Student Loan',
      principal: 30000,
      apr: 7.5,
      termMonths: 120,
      fees: 600,
      type: 'student',
      isPredatory: false,
    },
  ])

  const [showAmortization, setShowAmortization] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Loan Truth-Teller</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Compare loans side-by-side and uncover the true cost of borrowing
          </p>
        </motion.div>

        {/* Warning Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 bg-gradient-to-r from-warning-500 to-danger-500 rounded-2xl p-6 text-white"
        >
          <div className="flex items-start space-x-4">
            <Shield className="w-8 h-8 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Protect Yourself from Predatory Lending</h2>
              <p className="text-white/90">
                Our AI-powered analysis flags unfair terms, hidden fees, and predatory practices.
                We'll show you the true cost of every loan, including all fees and compound interest.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Loan Inputs */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold mb-4">Add Loans to Compare</h2>
              <LoanInputForm
                onAdd={(loan) => {
                  setLoans([...loans, { ...loan, id: Date.now().toString() }])
                }}
              />
              
              {/* Quick Templates */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-medium mb-3">Quick Templates</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setLoans([
                        {
                          id: '1',
                          name: 'Auto Loan - Bank',
                          principal: 25000,
                          apr: 4.5,
                          termMonths: 60,
                          fees: 0,
                          type: 'auto',
                          isPredatory: false,
                        },
                        {
                          id: '2',
                          name: 'Auto Loan - Dealer',
                          principal: 25000,
                          apr: 6.9,
                          termMonths: 72,
                          fees: 500,
                          type: 'auto',
                          isPredatory: false,
                        },
                      ])
                    }}
                    className="w-full text-left px-3 py-2 text-sm bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    🚗 Auto Loan Comparison
                  </button>
                  <button
                    onClick={() => {
                      setLoans([
                        {
                          id: '1',
                          name: 'Credit Card Balance Transfer',
                          principal: 5000,
                          apr: 0,
                          termMonths: 18,
                          fees: 150,
                          type: 'credit_card',
                          isPredatory: false,
                        },
                        {
                          id: '2',
                          name: 'Personal Loan',
                          principal: 5000,
                          apr: 12.5,
                          termMonths: 36,
                          fees: 0,
                          type: 'personal',
                          isPredatory: false,
                        },
                      ])
                    }}
                    className="w-full text-left px-3 py-2 text-sm bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    💳 Debt Consolidation
                  </button>
                  <button
                    onClick={() => {
                      setLoans([
                        {
                          id: '1',
                          name: 'Payday Loan',
                          principal: 500,
                          apr: 400,
                          termMonths: 1,
                          fees: 50,
                          type: 'payday',
                          isPredatory: true,
                        },
                        {
                          id: '2',
                          name: 'Credit Union Loan',
                          principal: 500,
                          apr: 18,
                          termMonths: 6,
                          fees: 0,
                          type: 'personal',
                          isPredatory: false,
                        },
                      ])
                    }}
                    className="w-full text-left px-3 py-2 text-sm bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    ⚠️ Predatory vs Fair Lending
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Educational Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6"
            >
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
                What to Look For
              </h3>
              <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>APR under 36% (legal limit in many states)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Clear disclosure of all fees upfront</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>No prepayment penalties</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Fixed interest rates (for predictability)</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right Column - Comparison Results */}
          <div className="lg:col-span-2 space-y-6">
            <PredatoryLoanWarning loans={loans} />
            <LoanComparisonTable loans={loans} onRemove={(id) => setLoans(loans.filter(l => l.id !== id))} />
            <TrueCostBreakdown loans={loans} />
            
            {/* Amortization Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Payment Schedule</h2>
                <button
                  onClick={() => setShowAmortization(!showAmortization)}
                  className="inline-flex items-center px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  {showAmortization ? <EyeOff className="w-4 h-4 mr-1" /> : <Eye className="w-4 h-4 mr-1" />}
                  {showAmortization ? 'Hide' : 'Show'} Details
                </button>
              </div>
              
              {showAmortization && <AmortizationChart loans={loans} />}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <button className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                <FileText className="w-5 h-5 mr-2" />
                Generate Report
              </button>
              <button className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <Download className="w-5 h-5 mr-2" />
                Download Checklist
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}