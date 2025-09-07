'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  TrendingDown, 
  Calculator, 
  GraduationCap, 
  Users, 
  Shield, 
  Zap,
  BarChart3,
  Bell,
  Target,
  Brain,
  DollarSign,
  ChevronRight,
  Star
} from 'lucide-react'
import { FeatureCard } from '@/components/FeatureCard'
import { HeroSection } from '@/components/HeroSection'
import { TestimonialSection } from '@/components/TestimonialSection'
import { CTASection } from '@/components/CTASection'

export default function HomePage() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Smart algorithms analyze your unique debt situation and create personalized strategies using proven methods.',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Calculator,
      title: 'Loan Truth-Teller',
      description: 'Compare loans side-by-side with full transparency on APR, fees, and total costs. No hidden surprises.',
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      icon: Target,
      title: 'Custom Payment Plans',
      description: 'Choose between snowball or avalanche methods with visual progress tracking and milestone celebrations.',
      color: 'from-success-500 to-success-600',
    },
    {
      icon: Shield,
      title: 'Predatory Loan Detection',
      description: 'Advanced algorithms flag unfair terms and protect you from predatory lending practices.',
      color: 'from-danger-500 to-danger-600',
    },
    {
      icon: GraduationCap,
      title: 'Financial Education',
      description: 'Learn debt management strategies, understand compound interest, and build lasting financial literacy.',
      color: 'from-warning-500 to-warning-600',
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with others on similar journeys. Share wins, get advice, and stay motivated together.',
      color: 'from-purple-500 to-purple-600',
    },
  ]

  const stats = [
    { value: '$1.7T', label: 'Student Debt Crisis' },
    { value: '43M', label: 'Americans Affected' },
    { value: '87%', label: 'Feel Financial Stress' },
    { value: '5-7yrs', label: 'Average to Pay Off' },
  ]

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Everything You Need to <span className="gradient-text">Break Free from Debt</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Comprehensive tools and education to transform your financial future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Your Path to <span className="gradient-text">Financial Freedom</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Simple steps to take control of your debt
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Connect Your Debts',
                description: 'Securely input your loans, credit cards, and other debts. Our AI analyzes your complete financial picture.',
                icon: DollarSign,
              },
              {
                step: '2',
                title: 'Get Your Strategy',
                description: 'Receive personalized recommendations using snowball or avalanche methods, optimized for your goals.',
                icon: BarChart3,
              },
              {
                step: '3',
                title: 'Track & Celebrate',
                description: 'Monitor progress, hit milestones, and celebrate wins with our supportive community.',
                icon: Star,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                    {item.step}
                  </div>
                  <item.icon className="w-12 h-12 text-primary-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection />
      <CTASection />
    </div>
  )
}