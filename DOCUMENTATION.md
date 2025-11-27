# GymVision Pro - Complete Project Documentation

## 📋 Project Overview

GymVision Pro is a modern, fully-featured Next.js frontend for gym machine usage monitoring with AI-powered detection capabilities. The application includes real-time analytics, live video detection, annotation tools, and a comprehensive dashboard for managing gym equipment.

## 🏗️ Project Structure

```
gymvision-pro/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout with global navigation
│   │   ├── page.tsx                  # Home page (redirect logic)
│   │   ├── globals.css               # Global Tailwind styles
│   │   ├── login/
│   │   │   └── page.tsx              # Authentication page
│   │   ├── dashboard/
│   │   │   └── page.tsx              # Main dashboard (machine monitoring)
│   │   ├── camera/
│   │   │   └── page.tsx              # Live camera feed with detection
│   │   ├── bounding-box/
│   │   │   └── page.tsx              # Interactive annotation tool
│   │   └── analytics/
│   │       └── page.tsx              # Analytics & charts dashboard
│   │
│   ├── components/
│   │   └── Layout.tsx                # Navigation & layout wrapper
│   │
│   ├── types/
│   │   └── index.ts                  # TypeScript type definitions
│   │
│   ├── utils/
│   │   ├── helpers.ts                # Utility helper functions
│   │   └── constants.ts              # Application constants
│   │
│   └── middleware.ts                 # Route protection middleware
│
├── package.json                      # Dependencies & scripts
├── tsconfig.json                     # TypeScript configuration
├── tailwind.config.js                # Tailwind CSS configuration
├── postcss.config.js                 # PostCSS configuration
├── next.config.js                    # Next.js configuration
├── vercel.json                       # Vercel deployment config
├── .gitignore                        # Git ignore rules
├── README.md                         # User-facing documentation
└── deploy.sh                         # Deployment script

```

## 🎨 Features Breakdown

### 1. **Authentication System** (`/login`)
- Simple email/password login form
- Demo mode for instant testing
- Token-based session management using localStorage
- Automatic redirection based on auth status
- Features:
  - Input validation
  - Error messaging
  - Demo credentials display
  - Styled with icons and gradients

### 2. **Dashboard** (`/dashboard`)
- Real-time machine monitoring grid
- Machine status filtering (All, In Use, Available, Maintenance)
- Key metrics cards (In Use, Available, Maintenance counts)
- Machine cards showing:
  - Name and current user
  - Status badge with color coding
  - Duration and last maintenance date
  - Health indicator
  - View Details button for each machine
- Responsive grid layout (1-3 columns)
- Mock data with 6 gym machines

### 3. **Camera Feed** (`/camera`)
- Simulated live video stream canvas
- Real-time detection visualization with bounding boxes
- Color-coded detections (green for people, blue for machines)
- Detection statistics panel
- Camera controls:
  - Start/Stop stream
  - Reset view
  - Fullscreen mode
- Settings panel:
  - Confidence threshold slider
  - Detection speed selection (Fast/Balanced/Accurate)
  - Active detections list
- 30 FPS simulated frame rate

### 4. **Bounding Box Annotation Tool** (`/bounding-box`)
- Interactive canvas-based annotation tool
- Features:
  - Click and drag to draw boxes
  - Multiple label types (Person, Machine, Equipment, Barbell, Dumbbell)
  - Color-coded boxes (auto-assigned from palette)
  - Select boxes to highlight
  - Delete individual boxes
  - Clear all annotations
  - Export to JSON
- Sidebar with:
  - Label selector
  - Statistics counter
  - Annotations list
  - Action buttons

### 5. **Analytics Dashboard** (`/analytics`)
- Comprehensive data visualization with Recharts
- Key metrics:
  - Total machine uses (2,847)
  - Active users (287)
  - Peak hours (5 PM)
  - Average session (47 min)
- Charts:
  - **Weekly Line Chart**: Usage trends and active users over 7 days
  - **Machine Type Pie Chart**: Distribution of Cardio (28%), Strength (45%), Functional (17%), Stretching (10%)
  - **Daily Bar Chart**: Machine usage time and sets completed for each machine
- Performance metrics table:
  - Machine name, usage time, sets completed
  - Average reps calculation
  - Active status indicator

### 6. **Navigation** (Responsive Layout)
- Top navigation bar with:
  - GymVision Pro branding
  - Desktop navigation menu
  - Logout button
- Mobile-friendly dropdown menu
- Active route styling
- Icon-based navigation for clarity

## 🛠️ Technology Stack

### Core
- **Next.js 14**: React framework with App Router
- **React 18**: UI library
- **TypeScript**: Type safety and better DX

### Styling & UI
- **Tailwind CSS 3**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Lucide React**: Icon library (Activity, Camera, BarChart3, etc.)

### Data Visualization
- **Recharts 2**: React charting library for:
  - Line charts
  - Bar charts
  - Pie charts
  - Responsive containers
  - Custom tooltips

### Configuration
- **ESLint**: Code linting
- **TypeScript**: Type checking

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "next": "^14.0.0",
  "recharts": "^2.10.3",
  "lucide-react": "^0.294.0"
}
```

## 🎯 Key Features

✅ **Mock Data System**: Pre-configured demo data for all pages
✅ **Responsive Design**: Mobile, tablet, and desktop support
✅ **Type Safety**: Full TypeScript implementation
✅ **Clean Architecture**: Modular components and utilities
✅ **Interactive Tools**: Canvas-based annotation tool
✅ **Data Visualization**: Multiple chart types with Recharts
✅ **Authentication Flow**: Login/logout with session management
✅ **Easy Customization**: Well-organized code structure
✅ **Vercel Ready**: Pre-configured for Vercel deployment
✅ **Dark Theme**: Modern dark UI with indigo accents

## 🚀 Getting Started

### Prerequisites
```bash
- Node.js 18 or higher
- npm or yarn package manager
```

### Installation & Development

```bash
# Clone or navigate to the project
cd gymvision-pro

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Visit http://localhost:3000
```

### Demo Credentials
- **Email**: demo@gym.com
- **Password**: password123
- Or click "Try Demo" button

### Production Build

```bash
# Build optimized bundle
npm run build

# Start production server
npm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect GitHub repo in Vercel dashboard for auto-deployment
```

### Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 🔧 Customization Guide

### Connect to Real API

Update any page component (e.g., `/dashboard`):

```typescript
useEffect(() => {
  const fetchMachines = async () => {
    const response = await fetch('/api/machines')
    const data = await response.json()
    setMachines(data)
  }
  fetchMachines()
}, [])
```

### Modify Mock Data

Edit data objects at the top of page files:

```typescript
const mockMachines = [
  // Your data here
]
```

### Customize Theme

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    },
  },
}
```

### Add Authentication

Replace localStorage logic in `src/components/Layout.tsx`:

```typescript
const token = localStorage.getItem('gymvision_token')
// Replace with: const token = getJWTToken()
```

## 📊 Data Structures

### Machine Object
```typescript
interface Machine {
  id: number
  name: string
  status: 'In Use' | 'Idle' | 'Maintenance'
  duration: string
  user: string
  lastMaintenance: string
  health: 'Good' | 'Warning' | 'Critical'
}
```

### Bounding Box
```typescript
interface BoundingBox {
  id: string
  x: number
  y: number
  width: number
  height: number
  label: string
  color: string
}
```

### Analytics Data
```typescript
interface AnalyticsData {
  machine: string
  usage: number
  sets: number
  date: string
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (1 column)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (3-4 columns)

## 🔐 Security Considerations

**Current**: Demo authentication with localStorage
**For Production**, implement:
- JWT tokens with httpOnly cookies
- Backend API validation
- CORS configuration
- Rate limiting
- Input sanitization
- HTTPS only

## 🎯 Next Steps

1. **Connect Backend**: Replace mock data with real API calls
2. **Implement Auth**: Add proper JWT authentication
3. **Add Users**: Implement user management system
4. **Live Feed**: Integrate real camera stream
5. **Push Notifications**: Add real-time alerts
6. **Database**: Connect to database for persistence
7. **CI/CD**: Set up GitHub Actions for auto-deployment

## 📝 Code Examples

### Adding a New Feature

```typescript
// Create new page at src/app/feature/page.tsx
'use client'

import { useState, useEffect } from 'react'

export default function FeaturePage() {
  const [data, setData] = useState([])

  useEffect(() => {
    // Fetch or initialize data
  }, [])

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Feature Title</h1>
      {/* Your content */}
    </div>
  )
}
```

## 🤝 Contributing

Feel free to fork, modify, and use this project for your needs!

## 📄 License

MIT License - Use freely for personal and commercial projects

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Recharts Guide](https://recharts.org)

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Tailwind styles not loading
```bash
npm run build
```

### Build errors
```bash
rm -rf .next
npm install
npm run build
```

## 📞 Support

For questions or issues:
1. Check the README.md
2. Review code comments
3. Check Next.js documentation
4. Open an issue if needed

---

**Ready to launch?** Connect to Vercel for instant deployment! 🚀
