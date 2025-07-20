'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'

export function CTASection() {
  const { user } = useAuth()

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-dark-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-rust-600/20 to-orange-600/20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-rust-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-rust-500/20 text-rust-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Start your Rust journey today</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Master{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rust-400 to-orange-400">
              Rust
            </span>
            ?
          </h2>

          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of developers building fast, reliable, and memory-safe applications. 
            Start with our free tier and unlock your potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={user ? "/dashboard" : "/auth/signup"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-rust-600 hover:bg-rust-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                {user ? 'Continue Learning' : 'Get Started Free'}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>

            <Link href="/curriculum">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-200"
              >
                View Curriculum
              </motion.button>
            </Link>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 text-gray-400 text-sm"
          >
            No credit card required • 7-day free trial • Cancel anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}