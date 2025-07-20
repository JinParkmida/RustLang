'use client'

import { motion } from 'framer-motion'
import { useAuth } from '@/hooks/useAuth'
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
import { ProgressOverview } from '@/components/dashboard/ProgressOverview'
import { RecentActivity } from '@/components/dashboard/RecentActivity'
import { RecommendedLessons } from '@/components/dashboard/RecommendedLessons'
import { AchievementShowcase } from '@/components/dashboard/AchievementShowcase'
import { LearningStreak } from '@/components/dashboard/LearningStreak'
import { QuickActions } from '@/components/dashboard/QuickActions'

export default function DashboardPage() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-dark-900 flex items-center justify-center">
        <div className="loading-dots">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-dark-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Please log in to access your dashboard
          </h1>
          <a href="/auth/login" className="btn-primary">
            Go to Login
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <DashboardHeader user={user} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Left column */}
          <div className="lg:col-span-2 space-y-8">
            <ProgressOverview progress={user.progress} />
            <RecommendedLessons />
            <RecentActivity />
          </div>

          {/* Right column */}
          <div className="space-y-8">
            <LearningStreak streak={user.progress.streak} />
            <QuickActions />
            <AchievementShowcase achievements={user.progress.achievements} />
          </div>
        </motion.div>
      </main>
    </div>
  )
}