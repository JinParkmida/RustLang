'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const stats = [
  { label: 'Active Learners', value: 50000, suffix: '+' },
  { label: 'Code Exercises', value: 500, suffix: '+' },
  { label: 'Success Rate', value: 94, suffix: '%' },
  { label: 'Countries', value: 120, suffix: '+' },
]

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        setCount((prev) => {
          const increment = Math.ceil(value / 50)
          const next = prev + increment
          return next >= value ? value : next
        })
      }, 30)

      return () => clearInterval(timer)
    }
  }, [inView, value])

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold text-rust-600 dark:text-rust-400">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-rust-600 to-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by Developers Worldwide
          </h2>
          <p className="text-xl text-rust-100 max-w-3xl mx-auto">
            Join thousands of developers who have mastered Rust programming through our platform
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-rust-100 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}