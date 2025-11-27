'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'

const machineActivityData = [
  { machine: 'Treadmill A', usage: 45, sets: 12, date: '2024-11-27' },
  { machine: 'Leg Press', usage: 38, sets: 8, date: '2024-11-27' },
  { machine: 'Bench Press', usage: 52, sets: 10, date: '2024-11-27' },
  { machine: 'Cable Row', usage: 29, sets: 7, date: '2024-11-27' },
  { machine: 'Smith Machine', usage: 41, sets: 9, date: '2024-11-27' },
  { machine: 'Lat Pulldown', usage: 33, sets: 6, date: '2024-11-27' },
]

const weeklyData = [
  { day: 'Mon', usage: 145, activeUsers: 32 },
  { day: 'Tue', usage: 178, activeUsers: 41 },
  { day: 'Wed', usage: 165, activeUsers: 38 },
  { day: 'Thu', usage: 192, activeUsers: 45 },
  { day: 'Fri', usage: 208, activeUsers: 52 },
  { day: 'Sat', usage: 225, activeUsers: 58 },
  { day: 'Sun', usage: 156, activeUsers: 35 },
]

const machineTypeData = [
  { name: 'Cardio', value: 28, fill: '#6366f1' },
  { name: 'Strength', value: 45, fill: '#ec4899' },
  { name: 'Functional', value: 17, fill: '#f59e0b' },
  { name: 'Stretching', value: 10, fill: '#10b981' },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
        <p className="text-gray-400">Real-time machine usage analytics and insights</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h3 className="text-gray-400 text-sm font-medium">Total Machine Uses</h3>
          <p className="text-3xl font-bold mt-2">2,847</p>
          <p className="text-green-400 text-sm mt-1">+12% from last week</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h3 className="text-gray-400 text-sm font-medium">Active Users</h3>
          <p className="text-3xl font-bold mt-2">287</p>
          <p className="text-green-400 text-sm mt-1">+8% from last week</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h3 className="text-gray-400 text-sm font-medium">Peak Hours</h3>
          <p className="text-3xl font-bold mt-2">5 PM</p>
          <p className="text-blue-400 text-sm mt-1">Most busy time</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h3 className="text-gray-400 text-sm font-medium">Avg Session</h3>
          <p className="text-3xl font-bold mt-2">47 min</p>
          <p className="text-green-400 text-sm mt-1">+2 min from avg</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Trend */}
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h2 className="text-xl font-bold mb-4">Weekly Machine Usage</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend />
              <Line type="monotone" dataKey="usage" stroke="#6366f1" strokeWidth={2} />
              <Line type="monotone" dataKey="activeUsers" stroke="#ec4899" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Machine Type Distribution */}
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h2 className="text-xl font-bold mb-4">Machine Type Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={machineTypeData} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name} ${value}%`} outerRadius={100} fill="#8884d8" dataKey="value">
                {machineTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Machine Activity */}
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">Today's Machine Activity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={machineActivityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="machine" stroke="#9ca3af" angle={-45} textAnchor="end" height={100} />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend />
              <Bar dataKey="usage" fill="#6366f1" name="Usage Time (min)" />
              <Bar dataKey="sets" fill="#ec4899" name="Sets Completed" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Machine Breakdown Table */}
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <h2 className="text-xl font-bold mb-4">Machine Performance Metrics</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-3 px-4 font-semibold text-gray-300">Machine</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-300">Usage Time</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-300">Sets</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-300">Avg Reps</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {machineActivityData.map((machine, idx) => (
                <tr key={idx} className="border-b border-gray-800 hover:bg-gray-800 transition">
                  <td className="py-3 px-4 font-medium">{machine.machine}</td>
                  <td className="text-right py-3 px-4">{machine.usage} min</td>
                  <td className="text-right py-3 px-4">{machine.sets}</td>
                  <td className="text-right py-3 px-4">{(machine.usage / machine.sets).toFixed(1)}</td>
                  <td className="text-right py-3 px-4">
                    <span className="bg-green-500 bg-opacity-20 text-green-400 px-2 py-1 rounded text-xs">Active</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
