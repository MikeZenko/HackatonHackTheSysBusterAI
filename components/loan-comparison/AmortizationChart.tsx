'use client'

import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { Calendar, DollarSign, TrendingDown } from 'lucide-react'

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

interface AmortizationChartProps {
  loans: Loan[]
}

export function AmortizationChart({ loans }: AmortizationChartProps) {
  const generateAmortizationData = (loan: Loan) => {
    const monthlyRate = loan.apr / 100 / 12
    const numPayments = loan.termMonths
    
    const monthlyPayment = loan.principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)
    
    let balance = loan.principal
    const data = []
    
    // Generate data for every 6 months to keep chart readable
    for (let month = 0; month <= numPayments; month += 6) {
      if (month > 0) {
        // Calculate remaining balance after payments
        for (let i = 0; i < 6 && balance > 0; i++) {
          const interestPayment = balance * monthlyRate
          const principalPayment = monthlyPayment - interestPayment
          balance = Math.max(0, balance - principalPayment)
        }
      }
      
      data.push({
        month,
        balance: Math.round(balance),
        payment: month > 0 ? Math.round(monthlyPayment * 6) : 0
      })
    }
    
    return data
  }

  const colors = ['#0EA5E9', '#EC4899', '#10B981', '#F59E0B', '#8B5CF6']
  
  // Get the longest term for x-axis
  const maxMonths = Math.max(...loans.map(l => l.termMonths))
  
  // Combine all loan data
  const combinedData = []
  for (let month = 0; month <= maxMonths; month += 6) {
    const dataPoint: any = { month }
    loans.forEach((loan, index) => {
      const loanData = generateAmortizationData(loan)
      const monthData = loanData.find(d => d.month === month)
      if (monthData) {
        dataPoint[`balance_${index}`] = monthData.balance
      }
    })
    combinedData.push(dataPoint)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-lg font-medium mb-4">Balance Over Time</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={combinedData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="month" 
                stroke="#6B7280"
                style={{ fontSize: '12px' }}
                tickFormatter={(value) => `${value}mo`}
              />
              <YAxis 
                stroke="#6B7280"
                style={{ fontSize: '12px' }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                }}
                formatter={(value: any) => [`$${value?.toLocaleString() || '0'}`, '']}
                labelFormatter={(label) => `Month ${label}`}
              />
              {loans.map((loan, index) => (
                <Line
                  key={loan.id}
                  type="monotone"
                  dataKey={`balance_${index}`}
                  stroke={colors[index % colors.length]}
                  strokeWidth={2}
                  name={loan.name}
                  dot={false}
                />
              ))}
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Payment Schedule Table */}
      <div>
        <h3 className="text-lg font-medium mb-4">Sample Payment Schedule</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th className="px-4 py-2 text-left">Payment #</th>
                <th className="px-4 py-2 text-right">Date</th>
                <th className="px-4 py-2 text-right">Payment</th>
                <th className="px-4 py-2 text-right">Principal</th>
                <th className="px-4 py-2 text-right">Interest</th>
                <th className="px-4 py-2 text-right">Balance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {/* Show first 3 payments for the first loan */}
              {loans.length > 0 && (() => {
                const loan = loans[0]
                const monthlyRate = loan.apr / 100 / 12
                const numPayments = loan.termMonths
                
                const monthlyPayment = loan.principal * 
                  (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
                  (Math.pow(1 + monthlyRate, numPayments) - 1)
                
                let balance = loan.principal
                const payments = []
                
                for (let i = 1; i <= 3 && i <= numPayments; i++) {
                  const interestPayment = balance * monthlyRate
                  const principalPayment = monthlyPayment - interestPayment
                  balance -= principalPayment
                  
                  const date = new Date()
                  date.setMonth(date.getMonth() + i)
                  
                  payments.push({
                    number: i,
                    date: date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
                    payment: monthlyPayment,
                    principal: principalPayment,
                    interest: interestPayment,
                    balance: balance
                  })
                }
                
                return payments.map(p => (
                  <tr key={p.number}>
                    <td className="px-4 py-2">{p.number}</td>
                    <td className="px-4 py-2 text-right">{p.date}</td>
                    <td className="px-4 py-2 text-right font-medium">
                      ${Math.round(p.payment).toLocaleString()}
                    </td>
                    <td className="px-4 py-2 text-right text-success-600">
                      ${Math.round(p.principal).toLocaleString()}
                    </td>
                    <td className="px-4 py-2 text-right text-danger-600">
                      ${Math.round(p.interest).toLocaleString()}
                    </td>
                    <td className="px-4 py-2 text-right">
                      ${Math.round(p.balance).toLocaleString()}
                    </td>
                  </tr>
                ))
              })()}
            </tbody>
          </table>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            * Showing first 3 payments for {loans[0]?.name || 'selected loan'}
          </p>
        </div>
      </div>
    </motion.div>
  )
}