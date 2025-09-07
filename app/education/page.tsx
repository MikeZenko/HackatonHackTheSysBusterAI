'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  GraduationCap,
  BookOpen,
  Play,
  Clock,
  Award,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Shield,
  Calculator,
  Users,
  ChevronRight,
  Star,
  Lock,
  CheckCircle
} from 'lucide-react'
import { CourseCard } from '@/components/education/CourseCard'
import { LearningPath } from '@/components/education/LearningPath'
import { QuizSection } from '@/components/education/QuizSection'
import { ResourceLibrary } from '@/components/education/ResourceLibrary'

export default function EducationPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [userProgress, setUserProgress] = useState({
    completedCourses: 3,
    totalCourses: 12,
    badges: 2,
    streak: 7
  })

  const categories = [
    { id: 'all', name: 'All Courses', icon: BookOpen },
    { id: 'debt', name: 'Debt Management', icon: TrendingDown },
    { id: 'budgeting', name: 'Budgeting', icon: Calculator },
    { id: 'investing', name: 'Investing', icon: TrendingUp },
    { id: 'credit', name: 'Credit Score', icon: Shield },
  ]

  const courses = [
    {
      id: '1',
      title: 'Debt Avalanche vs Snowball Method',
      category: 'debt',
      duration: '15 min',
      difficulty: 'Beginner',
      completed: true,
      description: 'Learn the two most effective strategies for paying off multiple debts.',
      modules: 4,
      rating: 4.8,
      enrolled: 2341,
    },
    {
      id: '2',
      title: 'Understanding Compound Interest',
      category: 'debt',
      duration: '20 min',
      difficulty: 'Beginner',
      completed: true,
      description: 'Discover how compound interest works both for and against you.',
      modules: 5,
      rating: 4.9,
      enrolled: 3102,
    },
    {
      id: '3',
      title: 'Creating Your First Budget',
      category: 'budgeting',
      duration: '30 min',
      difficulty: 'Beginner',
      completed: true,
      description: 'Step-by-step guide to creating a budget that actually works.',
      modules: 6,
      rating: 4.7,
      enrolled: 4521,
    },
    {
      id: '4',
      title: 'Spotting Predatory Loans',
      category: 'debt',
      duration: '25 min',
      difficulty: 'Intermediate',
      completed: false,
      locked: false,
      description: 'Learn to identify and avoid predatory lending practices.',
      modules: 5,
      rating: 4.9,
      enrolled: 1876,
    },
    {
      id: '5',
      title: 'Building Emergency Funds',
      category: 'budgeting',
      duration: '20 min',
      difficulty: 'Beginner',
      completed: false,
      locked: false,
      description: 'Why you need an emergency fund and how to build one.',
      modules: 4,
      rating: 4.6,
      enrolled: 2987,
    },
    {
      id: '6',
      title: 'Credit Score Mastery',
      category: 'credit',
      duration: '35 min',
      difficulty: 'Intermediate',
      completed: false,
      locked: true,
      description: 'Everything you need to know about improving your credit score.',
      modules: 7,
      rating: 4.8,
      enrolled: 3456,
    },
  ]

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Financial Education Center</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Master your finances with interactive courses and expert guidance
          </p>
        </motion.div>

        {/* Progress Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-6 text-white mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <BookOpen className="w-5 h-5" />
                <span className="text-sm opacity-90">Course Progress</span>
              </div>
              <div className="text-2xl font-bold">
                {userProgress.completedCourses}/{userProgress.totalCourses}
              </div>
              <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                <div 
                  className="bg-white rounded-full h-2 transition-all duration-500"
                  style={{ width: `${(userProgress.completedCourses / userProgress.totalCourses) * 100}%` }}
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Award className="w-5 h-5" />
                <span className="text-sm opacity-90">Badges Earned</span>
              </div>
              <div className="text-2xl font-bold">{userProgress.badges}</div>
              <p className="text-sm opacity-75 mt-1">Keep learning!</p>
            </div>
            
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm opacity-90">Learning Streak</span>
              </div>
              <div className="text-2xl font-bold">{userProgress.streak} days 🔥</div>
              <p className="text-sm opacity-75 mt-1">Great job!</p>
            </div>
            
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm opacity-90">Time Invested</span>
              </div>
              <div className="text-2xl font-bold">4.5 hrs</div>
              <p className="text-sm opacity-75 mt-1">This month</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Categories */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                      selectedCategory === category.id
                        ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <category.icon className="w-5 h-5" />
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="font-semibold mb-4">Your Achievements</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-success-100 dark:bg-success-900/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-success-600 dark:text-success-400" />
                  </div>
                  <div>
                    <p className="font-medium">Debt Basics</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-warning-100 dark:bg-warning-900/20 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-warning-600 dark:text-warning-400" />
                  </div>
                  <div>
                    <p className="font-medium">Quick Learner</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">3 courses in a week</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Content - Courses */}
          <div className="lg:col-span-3 space-y-6">
            {/* Learning Path */}
            <LearningPath />

            {/* Course Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-xl font-semibold mb-4">
                {selectedCategory === 'all' ? 'All Courses' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCourses.map((course, index) => (
                  <CourseCard key={course.id} course={course} delay={0.5 + index * 0.1} />
                ))}
              </div>
            </motion.div>

            {/* Quiz Section */}
            <QuizSection />

            {/* Resource Library */}
            <ResourceLibrary />
          </div>
        </div>
      </div>
    </div>
  )
}