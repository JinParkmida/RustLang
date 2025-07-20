'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Star } from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'
import { CodePreview } from '@/components/ui/CodePreview'

const rustCode = `fn main() {
    let message = "Welcome to RustMaster!";
    println!("{}", message);
    
    // Learn ownership, borrowing, and more
    let numbers = vec![1, 2, 3, 4, 5];
    let doubled: Vec<i32> = numbers
        .iter()
        .map(|x| x * 2)
        .collect();
    
    println!("Doubled: {:?}", doubled);
}`

export function HeroSection() {
  const { user } = useAuth()

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-rust-500/10 to-orange-500/10 dark:from-rust-600/20 dark:to-orange-600/20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-rust-400/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-rust-100 dark:bg-rust-900/30 text-rust-700 dark:text-rust-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4" />
              <span>Trusted by 50,000+ developers</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Master{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rust-600 to-orange-600">
                Rust
              </span>{' '}
              Programming
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Learn systems programming with memory safety, zero-cost abstractions, 
              and fearless concurrency. Interactive tutorials, real-time code execution, 
              and comprehensive exercises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href={user ? "/dashboard" : "/auth/signup"}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-rust-600 hover:bg-rust-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  {user ? 'Continue Learning' : 'Start Learning Free'}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <Link href="/demo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-white dark:bg-dark-800 hover:bg-gray-50 dark:hover:bg-dark-700 text-gray-900 dark:text-white font-semibold px-8 py-4 rounded-xl border border-gray-200 dark:border-dark-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <Play className="w-5 h-5" />
                  Try Demo
                </motion.button>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-500 dark:text-gray-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>100+ interactive lessons</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Code preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              <CodePreview
                code={rustCode}
                language="rust"
                title="main.rs"
                showLineNumbers
                className="shadow-2xl"
              />
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
            >
              ✓ Compiled
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
            >
              🚀 Fast
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}