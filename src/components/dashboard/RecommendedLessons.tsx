'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, Star } from 'lucide-react'

const recommendations = [
  {
    id: 1,
    title: 'References and Borrowing',
    description: 'Learn how to use references without taking ownership',
    difficulty: 'Intermediate',
    duration: '25 min',
    rating: 4.8,
    progress: 0,
  },
  {
    id: 2,
    title: 'Error Handling with Result',
    description: 'Master Rust\'s approach to recoverable errors',
    difficulty: 'Intermediate',
    duration: '30 min',
    rating: 4.9,
    progress: 0,
  },
  {
    id: 3,
    title: 'Collections: Vectors',
    description: 'Store multiple values with Vec<T>',
    difficulty: 'Beginner',
    duration: '20 min',
    rating: 4.7,
    progress: 0,
  },
]

export function RecommendedLessons() {
  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-dark-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recommended for You
        </h3>
        <button className="text-sm text-rust-600 dark:text-rust-400 hover:text-rust-700 dark:hover:text-rust-300 font-medium">
          View all
        </button>
      </div>

      <div className="grid gap-4">
        {recommendations.map((lesson, index) => (
          <motion.div
            key={lesson.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -2 }}
            className="group bg-gray-50 dark:bg-dark-700 rounded-lg p-4 hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-rust-600 dark:group-hover:text-rust-400 transition-colors">
                  {lesson.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {lesson.description}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-rust-500 transition-colors" />
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-3">
                <span className={`px-2 py-1 rounded-full ${
                  lesson.difficulty === 'Beginner' 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                }`}>
                  {lesson.difficulty}
                </span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {lesson.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500" />
                  {lesson.rating}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}