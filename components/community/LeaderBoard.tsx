'use client'

import { motion } from 'framer-motion'
import { Trophy, Medal, Award, TrendingUp, Star, Target } from 'lucide-react'

export function LeaderBoard() {
  const timeFrames = ['This Week', 'This Month', 'All Time']
  const categories = ['Debt Paid', 'Streak Days', 'Helpful Posts', 'Challenges Won']

  const leaders = [
    {
      rank: 1,
      name: 'Emma L.',
      avatar: 'EL',
      debtPaid: 45000,
      streak: 245,
      helpfulPosts: 156,
      challengesWon: 12,
      badges: ['Debt Free', 'Mentor', 'Champion'],
      trend: 'up',
    },
    {
      rank: 2,
      name: 'Michael K.',
      avatar: 'MK',
      debtPaid: 38500,
      streak: 189,
      helpfulPosts: 134,
      challengesWon: 8,
      badges: ['Consistent', 'Helper'],
      trend: 'up',
    },
    {
      rank: 3,
      name: 'Sarah W.',
      avatar: 'SW',
      debtPaid: 32000,
      streak: 156,
      helpfulPosts: 98,
      challengesWon: 6,
      badges: ['Rising Star'],
      trend: 'same',
    },
    {
      rank: 4,
      name: 'David P.',
      avatar: 'DP',
      debtPaid: 28500,
      streak: 134,
      helpfulPosts: 87,
      challengesWon: 5,
      badges: ['Dedicated'],
      trend: 'down',
    },
    {
      rank: 5,
      name: 'Jessica M.',
      avatar: 'JM',
      debtPaid: 25000,
      streak: 98,
      helpfulPosts: 76,
      challengesWon: 4,
      badges: ['Newcomer'],
      trend: 'up',
    },
  ]

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />
      case 3:
        return <Award className="w-6 h-6 text-orange-500" />
      default:
        return <span className="text-lg font-bold text-gray-500">#{rank}</span>
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-success-500" />
      case 'down':
        return <TrendingUp className="w-4 h-4 text-danger-500 transform rotate-180" />
      default:
        return <div className="w-4 h-4 bg-gray-400 rounded-full" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap gap-4"
      >
        <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-lg p-1">
          {timeFrames.map(timeFrame => (
            <button
              key={timeFrame}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                timeFrame === 'This Month'
                  ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {timeFrame}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Top 3 Podium */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8"
      >
        <div className="grid grid-cols-3 gap-4 mb-8">
          {/* Second Place */}
          <div className="text-center pt-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center text-white font-bold text-xl mb-3">
                {leaders[1].avatar}
              </div>
              <Medal className="absolute -top-2 -right-2 w-8 h-8 text-gray-400" />
            </motion.div>
            <h4 className="font-semibold">{leaders[1].name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              ${leaders[1].debtPaid.toLocaleString()}
            </p>
          </div>

          {/* First Place */}
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-3 shadow-lg">
                {leaders[0].avatar}
              </div>
              <Trophy className="absolute -top-2 -right-2 w-10 h-10 text-yellow-500" />
            </motion.div>
            <h4 className="font-semibold text-lg">{leaders[0].name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              ${leaders[0].debtPaid.toLocaleString()}
            </p>
          </div>

          {/* Third Place */}
          <div className="text-center pt-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7 }}
              className="relative"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-3">
                {leaders[2].avatar}
              </div>
              <Award className="absolute -top-2 -right-2 w-8 h-8 text-orange-500" />
            </motion.div>
            <h4 className="font-semibold">{leaders[2].name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              ${leaders[2].debtPaid.toLocaleString()}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Full Leaderboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden"
      >
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Top Contributors</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Member
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Debt Paid
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Streak
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Helpful
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Trend
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {leaders.map((leader) => (
                <tr key={leader.rank} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center">
                      {getRankIcon(leader.rank)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                        leader.rank === 1 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
                        leader.rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-400' :
                        leader.rank === 3 ? 'bg-gradient-to-br from-orange-400 to-orange-600' :
                        'bg-gradient-to-br from-primary-400 to-secondary-400'
                      }`}>
                        {leader.avatar}
                      </div>
                      <div>
                        <p className="font-medium">{leader.name}</p>
                        <div className="flex items-center space-x-1 mt-1">
                          {leader.badges.slice(0, 2).map((badge, index) => (
                            <span key={index} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                              {badge}
                            </span>
                          ))}
                          {leader.badges.length > 2 && (
                            <span className="text-xs text-gray-500">+{leader.badges.length - 2}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-lg font-semibold">${leader.debtPaid.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <span className="text-lg font-semibold">{leader.streak}</span>
                      <span className="text-xs text-gray-500">days</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-lg font-semibold">{leader.helpfulPosts}</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {getTrendIcon(leader.trend)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}