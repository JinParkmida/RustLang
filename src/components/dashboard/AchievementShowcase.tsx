'use client'

import { motion } from 'framer-motion'
import { Trophy, Star, Target, Zap } from 'lucide-react'
import { Achievement } from '@/types/auth'

interface AchievementShowcaseProps {
  achievements: Achievement[]
}

const mockAchievements = [
  {
    id: '1',
    title: 'First Steps',
    description: 'Completed your first lesson',
    icon: 'star',
    unlockedAt: '2024-01-15',
    category: 'learning' as const,
  },
  {
    id: '2',
    title: 'Code Warrior',
    description: 'Solved 10 coding exercises',
    icon: 'target',
    unlockedAt: '2024-01-20',
    category: 'coding' as const,
  },
  {
    id: '3',
    title: 'Speed Demon',
    description: 'Completed a lesson in under 10 minutes',
    icon: 'zap',
    unlockedAt: '2024-01-22',
    category: 'milestone' as const,
  },
]

const iconMap = {
  star: Star,
  target: Target,
  zap: Zap,
  trophy: Trophy,
}

const categoryColors = {
  learning: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  coding: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
  community: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
  milestone: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400',
}

export function AchievementShowcase({ achievements }: AchievementShowcaseProps) {
  const displayAchievements = achievements.length > 0 ? achievements : mockAchievements

  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-dark-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          Recent Achievements
        </h3>
        <button className="text-sm text-rust-600 dark:text-rust-400 hover:text-rust-700 dark:hover:text-rust-300 font-medium">
          View all
        </button>
      </div>

      <div className="space-y-4">
        {displayAchievements.slice(0, 3).map((achievement, index) => {
          const IconComponent = iconMap[achievement.icon as keyof typeof iconMap] || Trophy
          
          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-dark-700 rounded-lg"
            >
              <div className={`p-2 rounded-lg ${categoryColors[achievement.category]}`}>
                <IconComponent className="w-4 h-4" />
              </div>
              
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                  {achievement.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>

      {displayAchievements.length === 0 && (
        <div className="text-center py-8">
          <Trophy className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Complete lessons to earn achievements!
          </p>
        </div>
      )}
    </div>
  )
}