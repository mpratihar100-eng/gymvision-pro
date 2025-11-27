'use client'

import { useRef, useEffect, useState } from 'react'
import { Type, RotateCcw, Download, RotateCw } from 'lucide-react'

interface BoundingBox {
  id: string
  x: number
  y: number
  width: number
  height: number
  label: string
  color: string
}

export default function BoundingBoxPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })
  const [boxes, setBoxes] = useState<BoundingBox[]>([])
  const [currentLabel, setCurrentLabel] = useState('Person')
  const [selectedBox, setSelectedBox] = useState<string | null>(null)

  const colors = ['#10b981', '#6366f1', '#ec4899', '#f59e0b', '#06b6d4']

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Draw background
    ctx.fillStyle = '#1f2937'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw grid
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

    // Draw existing boxes
    boxes.forEach((box, idx) => {
      ctx.strokeStyle = box.color
      ctx.lineWidth = selectedBox === box.id ? 3 : 2
      ctx.strokeRect(box.x, box.y, box.width, box.height)

      // Draw label
      ctx.fillStyle = box.color
      ctx.font = 'bold 12px Arial'
      ctx.fillRect(box.x, box.y - 20, ctx.measureText(box.label).width + 4, 18)
      ctx.fillStyle = '#000'
      ctx.fillText(box.label, box.x + 2, box.y - 5)
    })
  }, [boxes, selectedBox])

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Check if clicking on existing box
    let clickedBox = false
    for (const box of boxes) {
      if (x >= box.x && x <= box.x + box.width && y >= box.y && y <= box.y + box.height) {
        setSelectedBox(box.id)
        clickedBox = true
        break
      }
    }

    if (!clickedBox) {
      setSelectedBox(null)
      setIsDrawing(true)
      setStartPos({ x, y })
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const width = x - startPos.x
    const height = y - startPos.y

    // Redraw with preview
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.fillStyle = '#1f2937'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Redraw grid
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

    // Draw existing boxes
    boxes.forEach((box) => {
      ctx.strokeStyle = box.color
      ctx.lineWidth = 2
      ctx.strokeRect(box.x, box.y, box.width, box.height)
      ctx.fillStyle = box.color
      ctx.font = 'bold 12px Arial'
      ctx.fillRect(box.x, box.y - 20, ctx.measureText(box.label).width + 4, 18)
      ctx.fillStyle = '#000'
      ctx.fillText(box.label, box.x + 2, box.y - 5)
    })

    // Draw preview box
    ctx.strokeStyle = '#06b6d4'
    ctx.lineWidth = 2
    ctx.setLineDash([5, 5])
    ctx.strokeRect(startPos.x, startPos.y, width, height)
    ctx.setLineDash([])
  }

  const handleMouseUp = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const width = x - startPos.x
    const height = y - startPos.y

    if (Math.abs(width) > 10 && Math.abs(height) > 10) {
      const newBox: BoundingBox = {
        id: Date.now().toString(),
        x: Math.min(startPos.x, x),
        y: Math.min(startPos.y, y),
        width: Math.abs(width),
        height: Math.abs(height),
        label: currentLabel,
        color: colors[boxes.length % colors.length],
      }
      setBoxes([...boxes, newBox])
    }

    setIsDrawing(false)
  }

  const deleteBox = (id: string) => {
    setBoxes(boxes.filter((box) => box.id !== id))
    setSelectedBox(null)
  }

  const clearAll = () => {
    setBoxes([])
    setSelectedBox(null)
  }

  const downloadAnnotations = () => {
    const data = JSON.stringify(boxes, null, 2)
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'annotations.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Bounding Box Annotation</h1>
        <p className="text-gray-400">Draw and label regions for machine and exercise detection</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Canvas */}
        <div className="lg:col-span-3">
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <canvas
              ref={canvasRef}
              width={800}
              height={600}
              className="w-full border border-gray-700 rounded-lg bg-gray-800 cursor-crosshair"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={() => setIsDrawing(false)}
            />
          </div>
          <p className="text-xs text-gray-400 mt-2">Click and drag to draw bounding boxes. Click on a box to select it.</p>
        </div>

        {/* Controls Sidebar */}
        <div className="space-y-4">
          {/* Label Selection */}
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <h3 className="font-semibold mb-3 flex items-center space-x-2">
              <Type className="w-4 h-4" />
              <span>Label</span>
            </h3>
            <select
              value={currentLabel}
              onChange={(e) => setCurrentLabel(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm"
            >
              <option>Person</option>
              <option>Machine</option>
              <option>Equipment</option>
              <option>Barbell</option>
              <option>Dumbbell</option>
            </select>
          </div>

          {/* Statistics */}
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <h3 className="font-semibold mb-3">Statistics</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Boxes:</span>
                <span className="font-bold">{boxes.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Selected:</span>
                <span className="font-bold">{selectedBox ? 1 : 0}</span>
              </div>
            </div>
          </div>

          {/* Annotations List */}
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <h3 className="font-semibold mb-3">Annotations</h3>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {boxes.map((box) => (
                <div
                  key={box.id}
                  onClick={() => setSelectedBox(box.id)}
                  className={`p-2 rounded text-sm cursor-pointer transition ${
                    selectedBox === box.id
                      ? 'bg-indigo-600 border border-indigo-400'
                      : 'bg-gray-800 border border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded"
                      style={{ backgroundColor: box.color }}
                    ></div>
                    <span className="flex-1">{box.label}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        deleteBox(box.id)
                      }}
                      className="text-red-400 hover:text-red-300 text-xs"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
              {boxes.length === 0 && (
                <p className="text-gray-500 text-xs">No annotations yet</p>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-2">
            <button
              onClick={clearAll}
              className="w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-medium transition text-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Clear All</span>
            </button>
            <button
              onClick={downloadAnnotations}
              disabled={boxes.length === 0}
              className="w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 rounded-lg font-medium transition text-sm"
            >
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
