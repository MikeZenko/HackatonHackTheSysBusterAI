'use client'

import { motion } from 'framer-motion'
import { Clock, Users, Star, Lock, CheckCircle, ChevronRight } from 'lucide-react'

interface Course {
  id: string
  title: string
  category: string
  duration: string
  difficulty: string
  completed: boolean
  locked?: boolean
  description: string
  modules: number
  rating: number
  enrolled: number
}

interface CourseCardProps {
  course: Course
  delay: number
}

export function CourseCard({ course, delay }: CourseCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'text-success-600 bg-success-100 dark:bg-success-900/20'
      case 'Intermediate':
        return 'text-warning-600 bg-warning-100 dark:bg-warning-900/20'
      case 'Advanced':
        return 'text-danger-600 bg-danger-100 dark:bg-danger-900/20'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${
        course.locked ? 'opacity-75' : ''
      }`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(course.difficulty)}`}>
                {course.difficulty}
              </span>
              {course.completed && (
                <span className="text-xs px-2 py-1 rounded-full font-medium bg-success-100 dark:bg-success-900/20 text-success-700 dark:text-success-300">
                  Completed
                </span>
              )}
            </div>
            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {course.description}
            </p>
          </div>
          {course.locked && (
            <Lock className="w-5 h-5 text-gray-400 ml-4" />
          )}
          {course.completed && (
            <CheckCircle className="w-5 h-5 text-success-500 ml-4" />
          )}
        </div>

        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{course.enrolled.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-warning-500" />
            <span>{course.rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {course.modules} modules
          </span>
          <button
            className={`inline-flex items-center space-x-1 font-medium transition-colors ${
              course.locked
                ? 'text-gray-400 cursor-not-allowed'
                : course.completed
                ? 'text-success-600 hover:text-success-700'
                : 'text-primary-600 hover:text-primary-700'
            }`}
            disabled={course.locked}
          >
            <span>{course.completed ? 'Review' : 'Start'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}