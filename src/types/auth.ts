export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  createdAt: string
  progress: UserProgress
}

export interface UserProgress {
  completedLessons: string[]
  currentChapter: number
  totalPoints: number
  achievements: Achievement[]
  streak: number
  lastActiveDate: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlockedAt: string
  category: 'learning' | 'coding' | 'community' | 'milestone'
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface SignupCredentials {
  email: string
  password: string
  name: string
}