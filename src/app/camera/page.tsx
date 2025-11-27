'use client'

import { useRef, useEffect, useState } from 'react'
import { Camera as CameraIcon, Maximize2, RotateCcw } from 'lucide-react'

export default function CameraPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isStreaming, setIsStreaming] = useState(true)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const drawFrame = () => {
      // Clear canvas
      ctx.fillStyle = '#1f2937'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw simulated camera feed with grid
      ctx.strokeStyle = '#374151'
      ctx.lineWidth = 1

      for (let i = 0; i < canvas.width; i += 40) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, canvas.height)
        ctx.stroke()
      }

      for (let i = 0; i < canvas.height; i += 40) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(canvas.width, i)
        ctx.stroke()
      }

      // Draw random exercise detection boxes
      ctx.strokeStyle = '#10b981'
      ctx.lineWidth = 2
      ctx.font = '12px Arial'
      ctx.fillStyle = '#10b981'

      // Simulated detection 1
      ctx.strokeRect(100, 80, 150, 200)
      ctx.fillText('Person (95%)', 105, 75)

      // Simulated detection 2
      ctx.strokeStyle = '#6366f1'
      ctx.fillStyle = '#6366f1'
      ctx.strokeRect(350, 150, 120, 180)
      ctx.fillText('Machine (87%)', 355, 145)

      // Draw timestamp
      ctx.fillStyle = '#9ca3af'
      ctx.font = '14px Arial'
      ctx.fillText(new Date().toLocaleTimeString(), 10, 30)

      if (isStreaming) {
        animationFrameRef.current = requestAnimationFrame(drawFrame)
      }
    }

    drawFrame()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isStreaming])

  const toggleStream = () => {
    setIsStreaming(!isStreaming)
  }

  const resetView = () => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.fillStyle = '#1f2937'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Live Camera Feed</h1>
        <p className="text-gray-400">Real-time video detection with exercise recognition</p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
          <h3 className="text-gray-400 text-sm font-medium">Camera Status</h3>
          <p className="text-2xl font-bold mt-2 flex items-center space-x-2">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span>Connected</span>
          </p>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
          <h3 className="text-gray-400 text-sm font-medium">FPS</h3>
          <p className="text-2xl font-bold mt-2">30</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
          <h3 className="text-gray-400 text-sm font-medium">Detections</h3>
          <p className="text-2xl font-bold mt-2">2 active</p>
        </div>
      </div>

      {/* Canvas */}
      <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 overflow-hidden">
        <canvas
          ref={canvasRef}
          width={800}
          height={600}
          className="w-full border border-gray-700 rounded-lg bg-gray-800"
        />
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={toggleStream}
          className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium transition"
        >
          <CameraIcon className="w-5 h-5" />
          <span>{isStreaming ? 'Stop Stream' : 'Start Stream'}</span>
        </button>
        <button
          onClick={resetView}
          className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg font-medium transition"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Reset View</span>
        </button>
        <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg font-medium transition">
          <Maximize2 className="w-5 h-5" />
          <span>Fullscreen</span>
        </button>
      </div>

      {/* Detection Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h2 className="text-xl font-bold mb-4">Detection Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Confidence Threshold</label>
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="75"
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-xs text-gray-400 mt-1">75%</p>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Detection Speed</label>
              <div className="grid grid-cols-3 gap-2">
                <button className="bg-gray-800 hover:bg-indigo-600 px-4 py-2 rounded font-medium text-sm transition">
                  Fast
                </button>
                <button className="bg-indigo-600 px-4 py-2 rounded font-medium text-sm transition">
                  Balanced
                </button>
                <button className="bg-gray-800 hover:bg-indigo-600 px-4 py-2 rounded font-medium text-sm transition">
                  Accurate
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h2 className="text-xl font-bold mb-4">Active Detections</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
              <div>
                <p className="font-semibold">Person</p>
                <p className="text-xs text-gray-400">Upper body detected</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-400">95%</p>
                <p className="text-xs text-gray-400">confidence</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
              <div>
                <p className="font-semibold">Machine</p>
                <p className="text-xs text-gray-400">Bench Press detected</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-indigo-400">87%</p>
                <p className="text-xs text-gray-400">confidence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
