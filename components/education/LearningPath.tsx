'use client'

import { motion } from 'framer-motion'
import { Target, CheckCircle, Circle, Lock } from 'lucide-react'

export function LearningPath() {
  const milestones = [
    {
      title: 'Debt Basics',
      description: 'Understand different types of debt',
      completed: true,
      locked: false,
    },
    {
      title: 'Strategy Selection',
      description: 'Choose between snowball and avalanche',
      completed: true,
      locked: false,
    },
    {
      title: 'Budget Creation',
      description: 'Build your first budget',
      completed: true,
      locked: false,
    },
    {
      title: 'Advanced Strategies',
      description: 'Optimize your payoff plan',
      completed: false,
      locked: false,
      current: true,
    },
    {
      title: 'Building Wealth',
      description: 'Start investing while paying debt',
      completed: false,
      locked: true,
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
    >
      <div className="flex items-center space-x-2 mb-6">
        <Target className="w-6 h-6 text-primary-600" />
        <h2 className="text-xl font-semibold">Your Learning Path</h2>
      </div>

      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
        <div 
          className="absolute left-4 top-0 w-0.5 bg-primary-500 transition-all duration-500"
          style={{ height: '60%' }}
        ></div>

        {/* Milestones */}
        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="relative flex items-start space-x-4"
            >
              {/* Milestone Icon */}
              <div className="relative z-10">
                {milestone.completed ? (
                  <div className="w-8 h-8 bg-success-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                ) : milestone.locked ? (
                  <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                    <Lock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </div>
                ) : (
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    milestone.current 
                      ? 'bg-primary-500 animate-pulse' 
                      : 'bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600'
                  }`}>
                    <Circle className={`w-4 h-4 ${
                      milestone.current ? 'text-white' : 'text-gray-400'
                    }`} />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 pb-6 ${milestone.locked ? 'opacity-50' : ''}`}>
                <h4 className="font-medium mb-1">
                  {milestone.title}
                  {milestone.current && (
                    <span className="ml-2 text-xs bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full">
                      Current
                    </span>
                  )}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}