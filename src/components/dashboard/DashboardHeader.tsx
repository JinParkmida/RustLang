'use client'

import { motion } from 'framer-motion'
import { Bell, Search, Settings, User, LogOut } from 'lucide-react'
import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { User as UserType } from '@/types/auth'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

interface DashboardHeaderProps {
  user: UserType
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { logout } = useAuth()

  return (
    <header className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and navigation */}
          <div className="flex items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-rust-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                RustMaster
              </span>
            </motion.div>

            <nav className="hidden md:flex items-center gap-6">
              <a href="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-rust-600 dark:hover:text-rust-400 font-medium">
                Dashboard
              </a>
              <a href="/learn" className="text-gray-700 dark:text-gray-300 hover:text-rust-600 dark:hover:text-rust-400 font-medium">
                Learn
              </a>
              <a href="/practice" className="text-gray-700 dark:text-gray-300 hover:text-rust-600 dark:hover:text-rust-400 font-medium">
                Practice
              </a>
              <a href="/community" className="text-gray-700 dark:text-gray-300 hover:text-rust-600 dark:hover:text-rust-400 font-medium">
                Community
              </a>
            </nav>
          </div>

          {/* Search and actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden sm:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search lessons..."
                className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rust-500 focus:border-transparent"
              />
            </div>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* Notifications */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-rust-500 rounded-full"></span>
            </motion.button>

            {/* User menu */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700"
              >
                <div className="w-8 h-8 bg-rust-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {user.name}
                </span>
              </motion.button>

              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-48 bg-white dark:bg-dark-800 rounded-lg shadow-lg border border-gray-200 dark:border-dark-700 py-2"
                >
                  <a
                    href="/profile"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </a>
                  <a
                    href="/settings"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                  >
                    <Settings className="w-4 h-4" />
                    Settings
                  </a>
                  <hr className="my-2 border-gray-200 dark:border-dark-600" />
                  <button
                    onClick={logout}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-dark-700 w-full text-left"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign out
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}