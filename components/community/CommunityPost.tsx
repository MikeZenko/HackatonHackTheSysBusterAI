'use client'

import { motion } from 'framer-motion'
import { Heart, MessageSquare, Share2, BookmarkPlus, MoreHorizontal } from 'lucide-react'
import { useState } from 'react'

interface Post {
  id: string
  author: {
    name: string
    avatar: string
    level: string
    debtPaid: number
  }
  content: string
  timestamp: string
  likes: number
  comments: number
  category: string
  liked: boolean
  featured?: boolean
}

interface CommunityPostProps {
  post: Post
  delay: number
}

export function CommunityPost({ post, delay }: CommunityPostProps) {
  const [liked, setLiked] = useState(post.liked)
  const [likes, setLikes] = useState(post.likes)

  const handleLike = () => {
    setLiked(!liked)
    setLikes(liked ? likes - 1 : likes + 1)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm ${
        post.featured ? 'ring-2 ring-primary-500' : ''
      }`}
    >
      {post.featured && (
        <div className="inline-flex items-center space-x-1 text-xs bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full mb-4">
          <span>✨</span>
          <span>Featured Story</span>
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white font-semibold">
            {post.author.avatar}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h4 className="font-semibold">{post.author.name}</h4>
              <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                {post.author.level}
              </span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
              <span>{post.timestamp}</span>
              <span>•</span>
              <span>${post.author.debtPaid.toLocaleString()} paid off</span>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <p className="text-gray-800 dark:text-gray-200 mb-4 whitespace-pre-wrap">
        {post.content}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-1">
          <button
            onClick={handleLike}
            className={`inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg transition-colors ${
              liked
                ? 'text-danger-600 bg-danger-50 dark:bg-danger-900/20'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
            <span className="text-sm font-medium">{likes}</span>
          </button>
          <button className="inline-flex items-center space-x-1 px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm font-medium">{post.comments}</span>
          </button>
        </div>
        <div className="flex items-center space-x-1">
          <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
          <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <BookmarkPlus className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="mt-3">
        <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
          {post.category}
        </span>
      </div>
    </motion.div>
  )
}