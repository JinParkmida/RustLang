'use client'

import { motion } from 'framer-motion'
import { Play, BookOpen, Users, Target } from 'lucide-react'

const actions = [
  {
    id: 1,
    title: 'Continue Learning',
    description: 'Resume your current lesson',
    icon: Play,
    color: 'bg-green-500',
    href: '/learn/current',
  },
  {
    id: 2,
    title: 'Practice Coding',
    description: 'Solve coding challenges',
    icon: Target,
    color: 'bg-blue-500',
    href: '/practice',
  },
  {
    id: 3,
    title: 'Browse Lessons',
    description: 'Explore all available content',
    icon: BookOpen,
    color: 'bg-purple-500',
    href: '/learn',
  },
  {
    id: 4,
    title: 'Join Community',
    description: 'Connect with other learners',
    icon: Users,
    color: 'bg-orange-500',
    href: '/community',
  },
]

export function QuickActions() {
  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-dark-700">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-6">
        Quick Actions
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <motion.a
            key={action.id}
            href={action.href}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block p-4 bg-gray-50 dark:bg-dark-700 rounded-lg hover:shadow-md transition-all duration-200 group"
          >
            <div className={`w-8 h-8 ${action.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
              <action.icon className="w-4 h-4 text-white" />
            </div>
            <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">
              {action.title}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {action.description}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  )
}