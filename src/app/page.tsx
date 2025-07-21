'use client'

import { motion } from 'framer-motion'
import { Code, Users, Trophy, BookOpen, Zap, Shield } from 'lucide-react'
import { HeroSection } from '@/components/home/HeroSection'
import { FeatureSection } from '@/components/home/FeatureSection'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const features = [
  {
    icon: Code,
    title: 'Interactive Code Editor',
    description: 'Write and execute Rust code in real-time with our advanced Monaco-based editor featuring syntax highlighting and auto-completion.',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'Learn from basics to advanced concepts including ownership, borrowing, concurrency, and systems programming.',
  },
  {
    icon: Zap,
    title: 'Instant Feedback',
    description: 'Get immediate results from your code with our integrated Rust compiler and testing environment.',
  },
  {
    icon: Trophy,
    title: 'Achievement System',
    description: 'Track your progress with badges, certificates, and a comprehensive learning dashboard.',
  },
  {
    icon: Users,
    title: 'Community Learning',
    description: 'Join discussions, share solutions, and learn from fellow Rust enthusiasts in our vibrant community.',
  },
  {
    icon: Shield,
    title: 'Memory Safety Focus',
    description: 'Master Rust\'s unique approach to memory safety without garbage collection through hands-on examples.',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-rust-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-rust-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            RustMaster
          </span>
        </motion.div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <motion.a
            href="/learn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-rust-600 hover:bg-rust-700 text-white font-medium px-6 py-2 rounded-lg transition-colors"
          >
            Get Started
          </motion.a>
        </div>
      </header>

      <HeroSection />
      <FeatureSection features={features} />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-rust-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">R</span>
            </div>
            <span className="text-xl font-bold">RustMaster</span>
          </div>
          <p className="text-gray-400">
            Master Rust programming with interactive tutorials and hands-on exercises.
          </p>
          <p className="text-gray-500 text-sm mt-4">
            © 2024 RustMaster. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}