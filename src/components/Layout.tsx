'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { LogOut, Activity, Camera, BarChart3, Boxes } from 'lucide-react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('gymvision_token')
    setIsAuthenticated(!!token)
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <>{children}</>
  }

  const handleLogout = () => {
    localStorage.removeItem('gymvision_token')
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-indigo-500">GymVision Pro</h1>
              <div className="hidden md:flex items-center space-x-6">
                <Link
                  href="/dashboard"
                  className="flex items-center space-x-2 hover:text-indigo-400 transition"
                >
                  <Activity className="w-5 h-5" />
                  <span>Dashboard</span>
                </Link>
                <Link
                  href="/camera"
                  className="flex items-center space-x-2 hover:text-indigo-400 transition"
                >
                  <Camera className="w-5 h-5" />
                  <span>Camera</span>
                </Link>
                <Link
                  href="/bounding-box"
                  className="flex items-center space-x-2 hover:text-indigo-400 transition"
                >
                  <Boxes className="w-5 h-5" />
                  <span>Bounding Box</span>
                </Link>
                <Link
                  href="/analytics"
                  className="flex items-center space-x-2 hover:text-indigo-400 transition"
                >
                  <BarChart3 className="w-5 h-5" />
                  <span>Analytics</span>
                </Link>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-gray-900 border-b border-gray-800 p-4">
        <div className="flex flex-col space-y-2">
          <Link href="/dashboard" className="text-indigo-400 font-semibold">
            Dashboard
          </Link>
          <Link href="/camera" className="text-indigo-400 font-semibold">
            Camera
          </Link>
          <Link href="/bounding-box" className="text-indigo-400 font-semibold">
            Bounding Box
          </Link>
          <Link href="/analytics" className="text-indigo-400 font-semibold">
            Analytics
          </Link>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
    </div>
  )
}
