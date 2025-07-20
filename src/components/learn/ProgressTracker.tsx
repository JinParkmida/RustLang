'use client'

import { motion } from 'framer-motion'
import { Trophy, Target, Clock, BookOpen } from 'lucide-react'

export function ProgressTracker() {
  const progress = {
    completedChapters: 2,
    totalChapters: 12,
    currentStreak: 7,
    totalPoints: 2450,
    weeklyGoal: 5,
    completedThisWeek: 3,
  }

  const completionPercentage = (progress.completedChapters / progress.totalChapters) * 100
  const weeklyProgress = (progress.completedThisWeek / progress.weeklyGoal) * 100

  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-dark-700">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-6">
        Your Progress
      </h3>

      {/* Overall progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Overall Progress
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {progress.completedChapters}/{progress.totalChapters}
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-3 mb-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${completionPercentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-gradient-to-r from-rust-500 to-orange-500 h-3 rounded-full"
          />
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {Math.round(completionPercentage)}% complete
        </span>
      </div>

      {/* Weekly goal */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Weekly Goal
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {progress.completedThisWeek}/{progress.weeklyGoal}
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${weeklyProgress}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg mb-2 mx-auto">
            <Trophy className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
          </div>
          <div className="text-lg font-bold text-gray-900 dark:text-white">
            {progress.totalPoints}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Points
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg mb-2 mx-auto">
            <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div className="text-lg font-bold text-gray-900 dark:text-white">
            {progress.currentStreak}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Day Streak
          </div>
        </div>
      </div>
    </div>
  )
}