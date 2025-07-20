'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code, Users, Trophy, BookOpen, Zap, Shield } from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'
import { HeroSection } from '@/components/home/HeroSection'
import { FeatureSection } from '@/components/home/FeatureSection'
import { StatsSection } from '@/components/home/StatsSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { CTASection } from '@/components/home/CTASection'

const features = [
  {
    icon: Code,
    title: 'Interactive Code Editor',
    description: 'Write and execute Rust code in real-time with our advanced Monaco-based editor featuring syntax highlighting and auto-completion.',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'Learn from basics to advanced concepts including ownership, borrowing, concurrency, and systems programming.',
  },
  {
    icon: Zap,
    title: 'Instant Feedback',
    description: 'Get immediate results from your code with our integrated Rust compiler and testing environment.',
  },
  {
    icon: Trophy,
    title: 'Achievement System',
    description: 'Track your progress with badges, certificates, and a comprehensive learning dashboard.',
  },
  {
    icon: Users,
    title: 'Community Learning',
    description: 'Join discussions, share solutions, and learn from fellow Rust enthusiasts in our vibrant community.',
  },
  {
    icon: Shield,
    title: 'Memory Safety Focus',
    description: 'Master Rust\'s unique approach to memory safety without garbage collection through hands-on examples.',
  },
]

export default function HomePage() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-rust-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      <HeroSection />
      
      <FeatureSection features={features} />
      
      <StatsSection />
      
      <TestimonialsSection />
      
      <CTASection />
    </div>
  )
}