'use client'

import { useState } from 'react'
import { Activity, AlertCircle, Zap } from 'lucide-react'

const mockMachines = [
  {
    id: 1,
    name: 'Treadmill A',
    status: 'In Use',
    duration: '12 min',
    user: 'John Doe',
    lastMaintenance: '2024-11-20',
    health: 'Good',
  },
  {
    id: 2,
    name: 'Leg Press',
    status: 'Idle',
    duration: '0 min',
    user: 'Available',
    lastMaintenance: '2024-11-18',
    health: 'Good',
  },
  {
    id: 3,
    name: 'Bench Press',
    status: 'In Use',
    duration: '8 min',
    user: 'Sarah Smith',
    lastMaintenance: '2024-11-22',
    health: 'Good',
  },
  {
    id: 4,
    name: 'Cable Row',
    status: 'Maintenance',
    duration: 'N/A',
    user: 'Maintenance',
    lastMaintenance: '2024-11-27',
    health: 'Warning',
  },
  {
    id: 5,
    name: 'Smith Machine',
    status: 'In Use',
    duration: '5 min',
    user: 'Mike Johnson',
    lastMaintenance: '2024-11-21',
    health: 'Good',
  },
  {
    id: 6,
    name: 'Lat Pulldown',
    status: 'Idle',
    duration: '0 min',
    user: 'Available',
    lastMaintenance: '2024-11-19',
    health: 'Good',
  },
]

export default function DashboardPage() {
  const [filter, setFilter] = useState('all')

  const filteredMachines = mockMachines.filter((machine) => {
    if (filter === 'in-use') return machine.status === 'In Use'
    if (filter === 'idle') return machine.status === 'Idle'
    if (filter === 'maintenance') return machine.status === 'Maintenance'
    return true
  })

  const getStatusColor = (status: string) => {
    if (status === 'In Use') return 'bg-green-500 bg-opacity-20 text-green-400'
    if (status === 'Idle') return 'bg-gray-500 bg-opacity-20 text-gray-400'
    if (status === 'Maintenance') return 'bg-orange-500 bg-opacity-20 text-orange-400'
    return 'bg-gray-500 bg-opacity-20 text-gray-400'
  }

  const getHealthColor = (health: string) => {
    if (health === 'Good') return 'text-green-400'
    if (health === 'Warning') return 'text-orange-400'
    return 'text-red-400'
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Machine Dashboard</h1>
        <p className="text-gray-400">Real-time monitoring of all gym machines</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-400 text-sm font-medium">In Use</h3>
              <p className="text-3xl font-bold mt-2">
                {mockMachines.filter((m) => m.status === 'In Use').length}
              </p>
            </div>
            <Activity className="w-10 h-10 text-green-500" />
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-400 text-sm font-medium">Available</h3>
              <p className="text-3xl font-bold mt-2">
                {mockMachines.filter((m) => m.status === 'Idle').length}
              </p>
            </div>
            <Zap className="w-10 h-10 text-blue-500" />
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-400 text-sm font-medium">Maintenance</h3>
              <p className="text-3xl font-bold mt-2">
                {mockMachines.filter((m) => m.status === 'Maintenance').length}
              </p>
            </div>
            <AlertCircle className="w-10 h-10 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            filter === 'all'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          All Machines
        </button>
        <button
          onClick={() => setFilter('in-use')}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            filter === 'in-use'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          In Use
        </button>
        <button
          onClick={() => setFilter('idle')}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            filter === 'idle'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Available
        </button>
        <button
          onClick={() => setFilter('maintenance')}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            filter === 'maintenance'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Maintenance
        </button>
      </div>

      {/* Machine Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMachines.map((machine) => (
          <div key={machine.id} className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-indigo-500 transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">{machine.name}</h3>
                <p className="text-gray-400 text-sm">{machine.user}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(machine.status)}`}>
                {machine.status}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Duration:</span>
                <span className="font-medium">{machine.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Last Service:</span>
                <span className="font-medium">{machine.lastMaintenance}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Health:</span>
                <span className={`font-medium ${getHealthColor(machine.health)}`}>{machine.health}</span>
              </div>
            </div>

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg font-medium transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
