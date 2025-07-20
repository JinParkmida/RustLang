'use client'

import { motion } from 'framer-motion'
import { BookOpen, Clock, Trophy, Target } from 'lucide-react'
import { UserProgress } from '@/types/auth'

interface ProgressOverviewProps {
  progress: UserProgress
}

export function ProgressOverview({ progress }: ProgressOverviewProps) {
  const completionPercentage = Math.round((progress.completedLessons.length / 100) * 100)
  const currentLevel = Math.floor(progress.totalPoints / 1000) + 1

  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-dark-700">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Learning Progress
        </h2>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Trophy className="w-4 h-4" />
          Level {currentLevel}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Overall Progress
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {completionPercentage}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-3">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${completionPercentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-gradient-to-r from-rust-500 to-orange-500 h-3 rounded-full progress-bar"
          />
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-50 dark:bg-dark-700 p-4 rounded-lg"
        >
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Lessons
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {progress.completedLessons.length}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            completed
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-50 dark:bg-dark-700 p-4 rounded-lg"
        >
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Streak
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {progress.streak}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            days
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-50 dark:bg-dark-700 p-4 rounded-lg"
        >
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Points
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {progress.totalPoints.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            earned
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-50 dark:bg-dark-700 p-4 rounded-lg"
        >
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Badges
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {progress.achievements.length}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            unlocked
          </div>
        </motion.div>
      </div>
    </div>
  )
}