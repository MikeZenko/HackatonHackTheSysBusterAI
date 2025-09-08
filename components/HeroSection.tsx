'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-200"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-warning-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-400"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Hack the System 2025 Submission</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Take Control of Your
              <span className="block gradient-text">Financial Future</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              AI-powered debt management meets transparent loan analysis. 
              Break free from debt with personalized strategies and real-time insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                Start Free Analysis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 border-2 border-white dark:border-gray-800"
                    />
                  ))}
                </div>
                <span>10k+ users</span>
              </div>
              <div>
                <span className="font-semibold">$2.3M+</span> debt analyzed
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20"></div>
              <div className="w-full h-[400px] bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-lg font-semibold text-gray-600 dark:text-gray-400">DebtBuster AI Dashboard</p>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                <span className="text-sm font-medium">Debt reduced by 23%</span>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-warning-500 rounded-full"></div>
                <span className="text-sm font-medium">$452/mo saved</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}