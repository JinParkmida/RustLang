'use client'

import { motion } from 'framer-motion'
import { Clock, BookOpen, Star, ChevronRight, Lock } from 'lucide-react'
import { Chapter } from '@/types/curriculum'

interface ChapterCardProps {
  chapter: Chapter
  onLessonSelect: (lessonId: string) => void
}

const difficultyColors = {
  beginner: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  advanced: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
}

export function ChapterCard({ chapter, onLessonSelect }: ChapterCardProps) {
  const completedLessons = 3 // Mock data - would come from user progress
  const totalLessons = chapter.lessons.length
  const progressPercentage = (completedLessons / totalLessons) * 100

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-100 dark:border-dark-700">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {chapter.title}
              </h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[chapter.difficulty]}`}>
                {chapter.difficulty}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {chapter.description}
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Progress
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {completedLessons}/{totalLessons} lessons
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-gradient-to-r from-rust-500 to-orange-500 h-2 rounded-full"
            />
          </div>
        </div>

        {/* Meta info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{chapter.estimatedTime} min</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{totalLessons} lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            <span>4.8 rating</span>
          </div>
        </div>
      </div>

      {/* Lessons */}
      <div className="p-6">
        <h4 className="font-medium text-gray-900 dark:text-white mb-4">
          Lessons
        </h4>
        <div className="space-y-2">
          {chapter.lessons.slice(0, 4).map((lesson, index) => {
            const isCompleted = index < completedLessons
            const isLocked = index > completedLessons
            
            return (
              <motion.button
                key={lesson.id}
                whileHover={{ x: 4 }}
                onClick={() => !isLocked && onLessonSelect(lesson.id)}
                disabled={isLocked}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                  isLocked
                    ? 'bg-gray-50 dark:bg-dark-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                    : isCompleted
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30'
                    : 'bg-gray-50 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    isCompleted
                      ? 'bg-green-500 text-white'
                      : isLocked
                      ? 'bg-gray-300 dark:bg-gray-600 text-gray-500'
                      : 'bg-rust-500 text-white'
                  }`}>
                    {isLocked ? <Lock className="w-3 h-3" /> : index + 1}
                  </div>
                  <div className="text-left">
                    <div className="font-medium">{lesson.title}</div>
                    <div className="text-xs opacity-75">{lesson.estimatedTime} min</div>
                  </div>
                </div>
                {!isLocked && <ChevronRight className="w-4 h-4" />}
              </motion.button>
            )
          })}
          
          {chapter.lessons.length > 4 && (
            <div className="text-center pt-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                +{chapter.lessons.length - 4} more lessons
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}