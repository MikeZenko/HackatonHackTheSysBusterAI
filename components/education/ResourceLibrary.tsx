'use client'

import { motion } from 'framer-motion'
import { FileText, Download, ExternalLink, BookOpen, Video, Headphones, Users } from 'lucide-react'

export function ResourceLibrary() {
  const resources = [
    {
      title: 'Debt Payoff Calculator Spreadsheet',
      type: 'spreadsheet',
      icon: FileText,
      description: 'Excel template to track and plan your debt payoff journey',
      size: '245 KB',
      downloads: 1234,
    },
    {
      title: 'Understanding Your Credit Report',
      type: 'guide',
      icon: BookOpen,
      description: 'Comprehensive guide to reading and improving your credit report',
      size: '1.2 MB',
      downloads: 892,
    },
    {
      title: 'Negotiating with Creditors',
      type: 'video',
      icon: Video,
      description: 'Step-by-step video guide on how to negotiate better terms',
      duration: '12:34',
      views: 3421,
    },
    {
      title: 'Financial Freedom Podcast',
      type: 'podcast',
      icon: Headphones,
      description: 'Weekly episodes on debt management and building wealth',
      episodes: 45,
      subscribers: 5632,
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'spreadsheet':
        return 'text-success-600 bg-success-100 dark:bg-success-900/20'
      case 'guide':
        return 'text-primary-600 bg-primary-100 dark:bg-primary-900/20'
      case 'video':
        return 'text-danger-600 bg-danger-100 dark:bg-danger-900/20'
      case 'podcast':
        return 'text-warning-600 bg-warning-100 dark:bg-warning-900/20'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
    >
      <h2 className="text-xl font-semibold mb-6">Resource Library</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resources.map((resource, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer group"
          >
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-lg ${getTypeColor(resource.type)}`}>
                <resource.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium mb-1 group-hover:text-primary-600 transition-colors">
                  {resource.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                  <div>
                    {resource.size && <span>{resource.size}</span>}
                    {resource.duration && <span>{resource.duration}</span>}
                    {resource.episodes && <span>{resource.episodes} episodes</span>}
                  </div>
                  <div className="flex items-center space-x-1">
                    {resource.downloads && (
                      <>
                        <Download className="w-3 h-3" />
                        <span>{resource.downloads.toLocaleString()}</span>
                      </>
                    )}
                    {resource.views && (
                      <>
                        <ExternalLink className="w-3 h-3" />
                        <span>{resource.views.toLocaleString()}</span>
                      </>
                    )}
                    {resource.subscribers && (
                      <>
                        <Users className="w-3 h-3" />
                        <span>{resource.subscribers.toLocaleString()}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
          View All Resources
          <ExternalLink className="w-4 h-4 ml-1" />
        </button>
      </div>
    </motion.div>
  )
}