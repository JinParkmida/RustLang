'use client'

import { motion } from 'framer-motion'
import { Clock, BookOpen, Trophy, Code } from 'lucide-react'

const activities = [
  {
    id: 1,
    type: 'lesson',
    title: 'Completed "Understanding Ownership"',
    time: '2 hours ago',
    icon: BookOpen,
    color: 'text-blue-500',
  },
  {
    id: 2,
    type: 'exercise',
    title: 'Solved "Borrowing Challenge"',
    time: '4 hours ago',
    icon: Code,
    color: 'text-green-500',
  },
  {
    id: 3,
    type: 'achievement',
    title: 'Earned "Memory Master" badge',
    time: '1 day ago',
    icon: Trophy,
    color: 'text-yellow-500',
  },
  {
    id: 4,
    type: 'lesson',
    title: 'Started "Structs and Enums"',
    time: '2 days ago',
    icon: BookOpen,
    color: 'text-blue-500',
  },
]

export function RecentActivity() {
  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-dark-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Recent Activity
      </h3>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors"
          >
            <div className={`p-2 rounded-lg bg-gray-100 dark:bg-dark-700 ${activity.color}`}>
              <activity.icon className="w-4 h-4" />
            </div>
            
            <div className="flex-1">
              <p className="font-medium text-gray-900 dark:text-white text-sm">
                {activity.title}
              </p>
              <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                <Clock className="w-3 h-3" />
                {activity.time}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        className="w-full mt-4 py-2 text-sm text-rust-600 dark:text-rust-400 hover:text-rust-700 dark:hover:text-rust-300 font-medium"
      >
        View all activity
      </motion.button>
    </div>
  )
}