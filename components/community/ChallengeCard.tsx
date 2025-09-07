'use client'

import { motion } from 'framer-motion'
import { Trophy, Users, Calendar, Target, TrendingUp } from 'lucide-react'

export function ChallengeCard() {
  const challenges = [
    {
      id: '1',
      title: 'No-Spend November',
      description: 'Challenge yourself to avoid unnecessary purchases for 30 days',
      participants: 3421,
      daysLeft: 18,
      progress: 40,
      reward: 'Thrifty Saver Badge',
      difficulty: 'Medium',
      active: true,
    },
    {
      id: '2',
      title: 'Extra Payment Challenge',
      description: 'Make one extra debt payment this month, no matter how small',
      participants: 2156,
      daysLeft: 25,
      progress: 15,
      reward: 'Debt Crusher Badge',
      difficulty: 'Easy',
      active: true,
    },
    {
      id: '3',
      title: 'Side Hustle Sprint',
      description: 'Earn an extra $500 this month through side income',
      participants: 892,
      daysLeft: 10,
      progress: 70,
      reward: 'Hustler Badge + $50 Prize',
      difficulty: 'Hard',
      active: true,
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-success-600 bg-success-100 dark:bg-success-900/20'
      case 'Medium':
        return 'text-warning-600 bg-warning-100 dark:bg-warning-900/20'
      case 'Hard':
        return 'text-danger-600 bg-danger-100 dark:bg-danger-900/20'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="space-y-6">
      {/* Active Challenges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-xl font-semibold mb-4">Active Challenges</h2>
        
        <div className="grid grid-cols-1 gap-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold">{challenge.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {challenge.description}
                  </p>
                </div>
                <Trophy className="w-8 h-8 text-warning-500" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{challenge.participants.toLocaleString()} joined</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{challenge.daysLeft} days left</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">Community Progress</span>
                    <span className="font-medium">{challenge.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${challenge.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-primary-600" />
                    <span className="text-sm font-medium">Reward: {challenge.reward}</span>
                  </div>
                  <button className="px-4 py-2 bg-primary-500 text-white text-sm rounded-lg hover:bg-primary-600 transition-colors">
                    Join Challenge
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Past Winners */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-br from-warning-50 to-warning-100 dark:from-warning-900/20 dark:to-warning-900/10 rounded-2xl p-6"
      >
        <h3 className="text-lg font-semibold mb-4">Recent Winners 🏆</h3>
        
        <div className="space-y-3">
          {[
            { name: 'Sarah M.', challenge: 'October Debt Sprint', prize: '$100 Prize' },
            { name: 'Mike R.', challenge: 'Meal Prep Master', prize: 'Chef Badge' },
            { name: 'Lisa K.', challenge: '52-Week Savings', prize: 'Super Saver Badge' },
          ].map((winner, index) => (
            <div key={index} className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg p-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-warning-400 to-warning-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {winner.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-medium">{winner.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{winner.challenge}</p>
                </div>
              </div>
              <span className="text-sm font-medium text-warning-600 dark:text-warning-400">
                {winner.prize}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}