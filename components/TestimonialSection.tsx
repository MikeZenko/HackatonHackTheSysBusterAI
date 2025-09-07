'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export function TestimonialSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Graduate Student',
      content: 'DebtBuster AI helped me create a clear plan to tackle my $45k in student loans. The visual progress tracking keeps me motivated!',
      rating: 5,
      avatar: 'SJ',
      gradient: 'from-pink-400 to-purple-400',
    },
    {
      name: 'Michael Chen',
      role: 'Small Business Owner',
      content: 'The loan comparison tool saved me from a predatory loan. I could see exactly how much extra I would have paid in hidden fees.',
      rating: 5,
      avatar: 'MC',
      gradient: 'from-blue-400 to-cyan-400',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Teacher',
      content: 'Finally, a tool that explains financial concepts in plain English! The education modules helped me understand my options.',
      rating: 5,
      avatar: 'ER',
      gradient: 'from-green-400 to-emerald-400',
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Real People, <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Join thousands who have taken control of their financial future
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gray-200 dark:text-gray-700" />
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-warning-500 text-warning-500" />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-semibold`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}