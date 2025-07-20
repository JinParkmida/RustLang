export interface Chapter {
  id: string
  title: string
  description: string
  order: number
  estimatedTime: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  lessons: Lesson[]
  prerequisites: string[]
  learningObjectives: string[]
}

export interface Lesson {
  id: string
  title: string
  description: string
  content: string
  order: number
  type: 'tutorial' | 'exercise' | 'quiz' | 'project'
  estimatedTime: number
  codeExamples: CodeExample[]
  exercises: Exercise[]
  quiz?: Quiz
}

export interface CodeExample {
  id: string
  title: string
  code: string
  language: string
  explanation: string
  runnable: boolean
  expectedOutput?: string
}

export interface Exercise {
  id: string
  title: string
  description: string
  starterCode: string
  solution: string
  tests: TestCase[]
  hints: string[]
  difficulty: 'easy' | 'medium' | 'hard'
}

export interface TestCase {
  id: string
  input: string
  expectedOutput: string
  description: string
}

export interface Quiz {
  id: string
  questions: QuizQuestion[]
  passingScore: number
}

export interface QuizQuestion {
  id: string
  question: string
  type: 'multiple-choice' | 'true-false' | 'code-completion'
  options?: string[]
  correctAnswer: string | number
  explanation: string
}

export interface UserProgress {
  userId: string
  chapterId: string
  lessonId: string
  completed: boolean
  score?: number
  timeSpent: number
  lastAccessed: string
}