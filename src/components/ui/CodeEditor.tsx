'use client'

import { useEffect, useRef } from 'react'
import * as monaco from 'monaco-editor'
import { useTheme } from '@/hooks/useTheme'

interface CodeEditorProps {
  value: string
  onChange: (value: string) => void
  language: string
  height?: string
  readOnly?: boolean
}

export function CodeEditor({
  value,
  onChange,
  language,
  height = '100%',
  readOnly = false,
}: CodeEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const monacoRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (editorRef.current) {
      // Configure Rust language support
      monaco.languages.register({ id: 'rust' })
      
      // Create editor
      monacoRef.current = monaco.editor.create(editorRef.current, {
        value,
        language,
        theme: theme === 'dark' ? 'vs-dark' : 'vs-light',
        fontSize: 14,
        fontFamily: 'JetBrains Mono, Monaco, Consolas, monospace',
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        automaticLayout: true,
        readOnly,
        lineNumbers: 'on',
        roundedSelection: false,
        scrollbar: {
          vertical: 'auto',
          horizontal: 'auto',
        },
        wordWrap: 'on',
        tabSize: 4,
        insertSpaces: true,
      })

      // Listen for content changes
      monacoRef.current.onDidChangeModelContent(() => {
        const newValue = monacoRef.current?.getValue() || ''
        onChange(newValue)
      })

      return () => {
        monacoRef.current?.dispose()
      }
    }
  }, [])

  useEffect(() => {
    if (monacoRef.current) {
      monaco.editor.setTheme(theme === 'dark' ? 'vs-dark' : 'vs-light')
    }
  }, [theme])

  useEffect(() => {
    if (monacoRef.current && monacoRef.current.getValue() !== value) {
      monacoRef.current.setValue(value)
    }
  }, [value])

  return (
    <div
      ref={editorRef}
      style={{ height }}
      className="border border-gray-200 dark:border-dark-700 rounded-lg overflow-hidden"
    />
  )
}