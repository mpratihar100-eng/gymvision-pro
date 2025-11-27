// Constants for GymVision Pro

export const MACHINE_STATUS = {
  IN_USE: 'In Use',
  IDLE: 'Idle',
  MAINTENANCE: 'Maintenance',
} as const

export const HEALTH_STATUS = {
  GOOD: 'Good',
  WARNING: 'Warning',
  CRITICAL: 'Critical',
} as const

export const DETECTION_TYPES = {
  PERSON: 'Person',
  MACHINE: 'Machine',
  EQUIPMENT: 'Equipment',
  BARBELL: 'Barbell',
  DUMBBELL: 'Dumbbell',
} as const

export const USER_ROLES = {
  ADMIN: 'admin',
  TRAINER: 'trainer',
  MEMBER: 'member',
} as const

export const API_ENDPOINTS = {
  BASE_URL: 'http://localhost:3000',
  MACHINES: '/api/machines',
  ANALYTICS: '/api/analytics',
  DETECTIONS: '/api/detections',
  AUTH: '/api/auth',
} as const

export const CHART_COLORS = {
  primary: '#6366f1',
  secondary: '#ec4899',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  info: '#06b6d4',
  dark: '#1f2937',
  light: '#f3f4f6',
} as const

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
} as const

export const VALIDATION = {
  MIN_PASSWORD_LENGTH: 6,
  MAX_PASSWORD_LENGTH: 128,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
} as const

export const TOAST_MESSAGES = {
  SUCCESS: 'Operation successful!',
  ERROR: 'An error occurred. Please try again.',
  LOADING: 'Loading...',
  SAVED: 'Changes saved successfully!',
} as const
