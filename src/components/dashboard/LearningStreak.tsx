'use client'

import { motion } from 'framer-motion'
import { Flame, Calendar } from 'lucide-react'

interface LearningStreakProps {
  streak: number
}

export function LearningStreak({ streak }: LearningStreakProps) {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const weekData = [true, true, false, true, true, false, true] // Mock data

  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-dark-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
          <Flame className="w-5 h-5 text-orange-500" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Learning Streak
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Keep it up!
          </p>
        </div>
      </div>

      <div className="text-center mb-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="text-3xl font-bold text-orange-500 mb-1"
        >
          {streak}
        </motion.div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          days in a row
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <Calendar className="w-4 h-4" />
          <span>This week</span>
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {daysOfWeek.map((day, index) => (
            <div key={day} className="text-center">
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                {day}
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  weekData[index]
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 dark:bg-dark-700 text-gray-400'
                }`}
              >
                {weekData[index] ? '✓' : ''}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}