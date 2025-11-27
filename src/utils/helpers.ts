// Utility functions for GymVision Pro

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

export const calculateUptime = (lastMaintenance: string): string => {
  const last = new Date(lastMaintenance)
  const now = new Date()
  const diff = now.getTime() - last.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  
  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  if (days < 7) return `${days} days ago`
  
  const weeks = Math.floor(days / 7)
  return `${weeks} week${weeks > 1 ? 's' : ''} ago`
}

export const getMachineStatusColor = (status: string): string => {
  switch (status) {
    case 'In Use':
      return '#10b981' // green
    case 'Idle':
      return '#6b7280' // gray
    case 'Maintenance':
      return '#f59e0b' // amber
    default:
      return '#6b7280'
  }
}

export const getHealthColor = (health: string): string => {
  switch (health) {
    case 'Good':
      return '#10b981'
    case 'Warning':
      return '#f59e0b'
    case 'Critical':
      return '#ef4444'
    default:
      return '#6b7280'
  }
}

export const generateMockId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

export const parseJsonSafely = (json: string) => {
  try {
    return JSON.parse(json)
  } catch {
    return null
  }
}

export const exportToCSV = (data: any[], filename: string) => {
  const csv = convertToCSV(data)
  const blob = new Blob([csv], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

const convertToCSV = (data: any[]): string => {
  if (!data || data.length === 0) return ''
  
  const headers = Object.keys(data[0])
  const csv = [headers.join(',')]
  
  for (const row of data) {
    const values = headers.map((header) => {
      const value = row[header]
      return typeof value === 'string' ? `"${value}"` : value
    })
    csv.push(values.join(','))
  }
  
  return csv.join('\n')
}

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>

  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
