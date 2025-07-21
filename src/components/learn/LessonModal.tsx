'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, Check } from 'lucide-react'
import { CodePreview } from '@/components/ui/CodePreview'
import { chapters } from '@/data/curriculum'

interface LessonModalProps {
  lessonId: string
  onClose: () => void
}

export function LessonModal({ lessonId, onClose }: LessonModalProps) {
  const [currentTab, setCurrentTab] = useState<'content' | 'exercise' | 'quiz'>('content')
  const [userCode, setUserCode] = useState('')
  const [testResults, setTestResults] = useState<any>(null)

  // Find the lesson
  const lesson = chapters
    .flatMap(chapter => chapter.lessons)
    .find(lesson => lesson.id === lessonId)

  useEffect(() => {
    if (lesson?.exercises?.[0]) {
      setUserCode(lesson.exercises[0].starterCode)
    }
  }, [lesson])

  if (!lesson) {
    return null
  }

  const runCode = async () => {
    // Mock code execution - in real app, this would call Rust Playground API
    setTestResults({
      success: true,
      output: 'Hello, Alice!',
      tests_passed: 1,
      tests_total: 1
    })
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-dark-800 rounded-xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-dark-700">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {lesson.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {lesson.description}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 dark:border-dark-700">
            <button
              onClick={() => setCurrentTab('content')}
              className={`px-6 py-3 font-medium text-sm transition-colors ${
                currentTab === 'content'
                  ? 'text-rust-600 dark:text-rust-400 border-b-2 border-rust-600 dark:border-rust-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Content
            </button>
            {lesson.exercises?.length > 0 && (
              <button
                onClick={() => setCurrentTab('exercise')}
                className={`px-6 py-3 font-medium text-sm transition-colors ${
                  currentTab === 'exercise'
                    ? 'text-rust-600 dark:text-rust-400 border-b-2 border-rust-600 dark:border-rust-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Exercise
              </button>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-hidden">
            {currentTab === 'content' && (
              <div className="h-full overflow-y-auto p-6">
                <div className="prose dark:prose-invert max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: lesson.content.replace(/\n/g, '<br>') }} />
                </div>
                
                {lesson.codeExamples.map((example) => (
                  <div key={example.id} className="mt-8">
                    <h4 className="text-lg font-semibold mb-4">{example.title}</h4>
                    <CodePreview
                      code={example.code}
                      language={example.language}
                      title={example.title}
                      showLineNumbers
                      executable={example.runnable}
                    />
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                      {example.explanation}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {currentTab === 'exercise' && lesson.exercises?.[0] && (
              <div className="h-full flex">
                {/* Left side - Instructions */}
                <div className="w-1/2 p-6 border-r border-gray-200 dark:border-dark-700 overflow-y-auto">
                  <h3 className="text-lg font-semibold mb-4">
                    {lesson.exercises[0].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {lesson.exercises[0].description}
                  </p>
                  
                  {testResults && (
                    <div className={`p-4 rounded-lg mb-4 ${
                      testResults.success 
                        ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                        : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Check className={`w-4 h-4 ${testResults.success ? 'text-green-600' : 'text-red-600'}`} />
                        <span className={`font-medium ${testResults.success ? 'text-green-800 dark:text-green-400' : 'text-red-800 dark:text-red-400'}`}>
                          {testResults.success ? 'Tests Passed!' : 'Tests Failed'}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Output: {testResults.output}
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <h4 className="font-medium">Hints:</h4>
                    {lesson.exercises[0].hints.map((hint, index) => (
                      <div key={index} className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-dark-700 p-3 rounded-lg">
                        💡 {hint}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side - Code editor */}
                <div className="w-1/2 flex flex-col">
                  <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-dark-700">
                    <span className="font-medium">main.rs</span>
                    <button
                      onClick={runCode}
                      className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                    >
                      <Play className="w-4 h-4" />
                      Run Code
                    </button>
                  </div>
                  <div className="flex-1 p-4">
                    <textarea
                      value={userCode}
                      onChange={(e) => setUserCode(e.target.value)}
                      className="w-full h-full bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg p-4 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-rust-500"
                      placeholder="Write your Rust code here..."
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}