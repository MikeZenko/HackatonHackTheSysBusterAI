'use client'

import { motion } from 'framer-motion'
import { Star, TrendingDown, Calendar, Heart } from 'lucide-react'

export function SuccessStories() {
  const stories = [
    {
      id: '1',
      author: {
        name: 'Jennifer K.',
        avatar: 'JK',
        debtAmount: 78000,
        timeToPayoff: '4 years',
      },
      title: 'From $78k to Debt Free in 4 Years',
      excerpt: 'Started with massive student loans and credit card debt. Through consistent budgeting and side hustles...',
      image: '/api/placeholder/400/200',
      likes: 1234,
      date: '2 weeks ago',
      featured: true,
    },
    {
      id: '2',
      author: {
        name: 'Robert M.',
        avatar: 'RM',
        debtAmount: 45000,
        timeToPayoff: '2.5 years',
      },
      title: 'Paid Off $45k While Supporting a Family',
      excerpt: 'As a single parent, I thought it was impossible. But with the avalanche method and community support...',
      image: '/api/placeholder/400/200',
      likes: 892,
      date: '1 month ago',
    },
    {
      id: '3',
      author: {
        name: 'Ashley T.',
        avatar: 'AT',
        debtAmount: 23000,
        timeToPayoff: '18 months',
      },
      title: 'Young Professional Crushes Student Debt',
      excerpt: 'Fresh out of college with $23k in loans. Here\'s how I paid it off in just 18 months on an entry-level salary...',
      image: '/api/placeholder/400/200',
      likes: 567,
      date: '1 month ago',
    },
  ]

  return (
    <div className="space-y-6">
      {stories.map((story, index) => (
        <motion.div
          key={story.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          className={`bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden ${
            story.featured ? 'ring-2 ring-warning-500' : ''
          }`}
        >
          {story.featured && (
            <div className="bg-gradient-to-r from-warning-500 to-warning-600 text-white px-6 py-2 text-sm font-medium">
              ⭐ Featured Success Story
            </div>
          )}
          
          <div className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-success-400 to-success-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {story.author.avatar}
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <TrendingDown className="w-4 h-4" />
                    <span>${story.author.debtAmount.toLocaleString()} paid off</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{story.author.timeToPayoff}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {story.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="inline-flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-danger-600 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{story.likes}</span>
                    </button>
                    <span className="text-sm text-gray-500">{story.date}</span>
                  </div>
                  
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    Read Full Story →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center py-8"
      >
        <button className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
          Load More Stories
        </button>
      </motion.div>
    </div>
  )
}