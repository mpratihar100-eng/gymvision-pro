// Type definitions for GymVision Pro

export interface Machine {
  id: number
  name: string
  status: 'In Use' | 'Idle' | 'Maintenance'
  duration: string
  user: string
  lastMaintenance: string
  health: 'Good' | 'Warning' | 'Critical'
}

export interface Detection {
  id: string
  type: 'Person' | 'Machine' | 'Equipment'
  confidence: number
  x: number
  y: number
  width: number
  height: number
}

export interface AnalyticsData {
  machine: string
  usage: number
  sets: number
  date: string
}

export interface BoundingBox {
  id: string
  x: number
  y: number
  width: number
  height: number
  label: string
  color: string
}

export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'trainer' | 'member'
}

export interface MachineMetrics {
  id: number
  name: string
  totalUsage: number
  averageSession: number
  setsCompleted: number
  health: string
  lastMaintenance: string
}
