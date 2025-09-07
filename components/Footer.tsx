import Link from 'next/link'
import { TrendingDown, Github, Twitter, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-white transform rotate-180" />
              </div>
              <span className="text-xl font-bold">DebtBuster AI</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering financial freedom through intelligent debt management and transparent loan analysis.
            </p>
            <p className="text-gray-400 text-sm">
              Built for Hack the System 2025
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/debt-analyzer" className="hover:text-primary-400 transition-colors">Debt Analyzer</Link></li>
              <li><Link href="/loan-comparison" className="hover:text-primary-400 transition-colors">Loan Comparison</Link></li>
              <li><Link href="/education" className="hover:text-primary-400 transition-colors">Financial Education</Link></li>
              <li><Link href="/community" className="hover:text-primary-400 transition-colors">Community Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-primary-400 transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-primary-400 transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              <p>Contact us:</p>
              <p className="text-primary-400">support@debtbuster.ai</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; 2025 DebtBuster AI. All rights reserved. | Built with ❤️ for financial empowerment</p>
        </div>
      </div>
    </footer>
  )
}