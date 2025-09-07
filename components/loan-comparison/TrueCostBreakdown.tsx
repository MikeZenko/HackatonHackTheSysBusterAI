'use client'

import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { DollarSign, Percent, Calendar, TrendingUp } from 'lucide-react'

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

interface TrueCostBreakdownProps {
  loans: Loan[]
}

export function TrueCostBreakdown({ loans }: TrueCostBreakdownProps) {
  if (loans.length === 0) return null

  const calculateBreakdown = (loan: Loan) => {
    const monthlyRate = loan.apr / 100 / 12
    const numPayments = loan.termMonths
    
    const monthlyPayment = loan.principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)
    
    const totalPayments = monthlyPayment * numPayments
    const totalInterest = totalPayments - loan.principal
    
    return [
      { name: 'Principal', value: loan.principal, color: '#10B981' },
      { name: 'Interest', value: totalInterest, color: '#EF4444' },
      { name: 'Fees', value: loan.fees, color: '#F59E0B' },
    ]
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
    >
      <h2 className="text-xl font-semibold mb-6">True Cost Breakdown</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {loans.map(loan => {
          const data = calculateBreakdown(loan)
          const totalCost = data.reduce((sum, item) => sum + item.value, 0)
          
          return (
            <div key={loan.id} className="space-y-4">
              <h3 className="font-medium text-center">{loan.name}</h3>
              
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value: number) => `$${value.toLocaleString()}`}
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        border: '1px solid #E5E7EB',
                        borderRadius: '8px',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="relative -mt-32 text-center pointer-events-none">
                  <div className="text-2xl font-bold">${Math.round(totalCost).toLocaleString()}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Cost</div>
                </div>
              </div>
              
              <div className="space-y-2">
                {data.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-gray-600 dark:text-gray-400">{item.name}</span>
                    </div>
                    <div className="font-medium">
                      ${Math.round(item.value).toLocaleString()}
                      <span className="text-gray-500 ml-1">
                        ({((item.value / totalCost) * 100).toFixed(1)}%)
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              {loan.isPredatory && (
                <div className="p-3 bg-danger-50 dark:bg-danger-900/20 rounded-lg text-sm text-danger-700 dark:text-danger-300">
                  ⚠️ High cost loan - consider alternatives
                </div>
              )}
            </div>
          )
        })}
      </div>

      {loans.length > 1 && (
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
          <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
            💡 Quick Insight
          </h4>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            The loan with the lowest APR isn't always the cheapest. Consider total cost, 
            monthly payments, and how long you'll be in debt when making your decision.
          </p>
        </div>
      )}
    </motion.div>
  )
}