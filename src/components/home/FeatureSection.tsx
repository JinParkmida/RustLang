'use client'

import { motion } from 'framer-motion'
import { DivideIcon as LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface FeatureSectionProps {
  features: Feature[]
}

export function FeatureSection({ features }: FeatureSectionProps) {
  return (
    <section className="py-20 bg-white dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose RustMaster?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with proven learning methodologies 
            to deliver the most effective Rust programming education.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-gray-50 dark:bg-dark-700 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-600"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-rust-100 dark:bg-rust-900/30 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-rust-600 dark:text-rust-400" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}