'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  MessageSquare,
  Heart,
  TrendingUp,
  Award,
  Calendar,
  Filter,
  Plus,
  Search,
  Star,
  ThumbsUp,
  Share2,
  BookmarkPlus
} from 'lucide-react'
import { CommunityPost } from '@/components/community/CommunityPost'
import { SuccessStories } from '@/components/community/SuccessStories'
import { ChallengeCard } from '@/components/community/ChallengeCard'
import { LeaderBoard } from '@/components/community/LeaderBoard'

export default function CommunityPage() {
  const [selectedTab, setSelectedTab] = useState('feed')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const tabs = [
    { id: 'feed', label: 'Community Feed', icon: MessageSquare },
    { id: 'stories', label: 'Success Stories', icon: Star },
    { id: 'challenges', label: 'Challenges', icon: Award },
    { id: 'leaderboard', label: 'Leaderboard', icon: TrendingUp },
  ]

  const categories = [
    'All Posts',
    'Debt Wins',
    'Questions',
    'Tips & Advice',
    'Motivation',
    'Resources',
  ]

  const posts = [
    {
      id: '1',
      author: {
        name: 'Sarah M.',
        avatar: 'SM',
        level: 'Debt Warrior',
        debtPaid: 15000,
      },
      content: 'Just paid off my first credit card! $3,500 down, $12,000 to go. The avalanche method is really working for me. 🎉',
      timestamp: '2 hours ago',
      likes: 45,
      comments: 12,
      category: 'Debt Wins',
      liked: true,
    },
    {
      id: '2',
      author: {
        name: 'Michael R.',
        avatar: 'MR',
        level: 'Rising Star',
        debtPaid: 8500,
      },
      content: 'Anyone have experience negotiating with student loan servicers? Looking for tips on getting a lower interest rate.',
      timestamp: '5 hours ago',
      likes: 23,
      comments: 18,
      category: 'Questions',
      liked: false,
    },
    {
      id: '3',
      author: {
        name: 'Emma L.',
        avatar: 'EL',
        level: 'Debt Free!',
        debtPaid: 45000,
      },
      content: 'Debt free as of today! Started with $45k in various debts 3 years ago. Key was staying consistent and finding a supportive community (you all!). Full story in comments...',
      timestamp: '1 day ago',
      likes: 234,
      comments: 56,
      category: 'Success Stories',
      liked: false,
      featured: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Community</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Connect with others on the journey to financial freedom
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">12.5k</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Members</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-success-100 dark:bg-success-900/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-success-600 dark:text-success-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">$2.3M</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Debt Paid</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-warning-100 dark:bg-warning-900/20 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-warning-600 dark:text-warning-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">847</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Success Stories</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-secondary-100 dark:bg-secondary-900/20 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">98%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Support Rate</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-1 inline-flex">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  selectedTab === tab.id
                    ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {selectedTab === 'feed' && (
              <>
                {/* Create Post */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm mb-6"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white font-semibold">
                      YO
                    </div>
                    <input
                      type="text"
                      placeholder="Share your progress or ask a question..."
                      className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <button className="px-4 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>

                {/* Filter Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center justify-between mb-6"
                >
                  <div className="flex items-center space-x-2 overflow-x-auto">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category.toLowerCase().replace(/\s+/g, '-'))}
                        className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                          selectedCategory === category.toLowerCase().replace(/\s+/g, '-') || 
                          (category === 'All Posts' && selectedCategory === 'all')
                            ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                            : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                  <button className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                    <Filter className="w-4 h-4" />
                    <span>Filter</span>
                  </button>
                </motion.div>

                {/* Posts */}
                <div className="space-y-6">
                  {posts.map((post, index) => (
                    <CommunityPost key={post.id} post={post} delay={0.5 + index * 0.1} />
                  ))}
                </div>
              </>
            )}

            {selectedTab === 'stories' && <SuccessStories />}
            {selectedTab === 'challenges' && <ChallengeCard />}
            {selectedTab === 'leaderboard' && <LeaderBoard />}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Active Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-6 text-white"
            >
              <h3 className="text-lg font-semibold mb-2">30-Day Challenge</h3>
              <p className="text-white/90 mb-4">No-Spend November</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm">Progress</span>
                <span className="text-sm font-semibold">Day 12/30</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                <div className="bg-white rounded-full h-2 w-2/5 transition-all duration-500"></div>
              </div>
              <button className="w-full px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                View Challenge
              </button>
            </motion.div>

            {/* Top Contributors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4">Top Contributors</h3>
              <div className="space-y-4">
                {[
                  { name: 'Emma L.', posts: 156, helpful: 89 },
                  { name: 'David K.', posts: 134, helpful: 76 },
                  { name: 'Lisa T.', posts: 98, helpful: 82 },
                ].map((contributor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {contributor.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-medium">{contributor.name}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {contributor.posts} posts • {contributor.helpful}% helpful
                        </p>
                      </div>
                    </div>
                    <Award className={`w-5 h-5 ${
                      index === 0 ? 'text-warning-500' : 
                      index === 1 ? 'text-gray-400' : 
                      'text-orange-400'
                    }`} />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Community Guidelines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6"
            >
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
                Community Guidelines
              </h3>
              <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                <li>• Be supportive and encouraging</li>
                <li>• Share your real experiences</li>
                <li>• Respect privacy - no personal details</li>
                <li>• No financial advice or promotions</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}