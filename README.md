# GymVision Pro - AI-Powered Gym Machine Monitoring

A modern Next.js + TypeScript + Tailwind CSS frontend for gym machine usage monitoring with AI-powered detection.

## 🎯 Features

- **Dashboard**: Real-time machine activity monitoring with status filtering
- **Camera Feed**: Live video detection with exercise recognition
- **Bounding Box Annotation**: Interactive tool to draw and label exercise regions
- **Analytics**: Comprehensive charts and performance metrics with Recharts
- **Authentication**: Simple login system with demo mode
- **Responsive Design**: Mobile-friendly layout with Tailwind CSS
- **Mock Data**: Pre-configured demo data for instant testing

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Demo Login

- **Email**: demo@gym.com
- **Password**: password123
- Or use the "Try Demo" button

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Home/redirect page
│   ├── login/
│   │   └── page.tsx         # Authentication page
│   ├── dashboard/
│   │   └── page.tsx         # Main dashboard
│   ├── camera/
│   │   └── page.tsx         # Live camera feed
│   ├── bounding-box/
│   │   └── page.tsx         # Annotation tool
│   ├── analytics/
│   │   └── page.tsx         # Analytics dashboard
│   └── globals.css          # Global styles
├── components/
│   └── Layout.tsx           # Navigation layout
└── middleware/ (optional)   # Auth middleware

```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **Authentication**: Local Storage (demo)

## 📊 Pages Overview

### Dashboard
- Real-time machine status cards
- Filterable machine grid (All, In Use, Available, Maintenance)
- Machine health indicators
- Usage statistics

### Camera Feed
- Simulated live video stream
- Detection boxes with confidence scores
- Camera settings panel
- Stream controls

### Bounding Box Tool
- Canvas-based annotation tool
- Multiple label types (Person, Machine, Equipment, etc.)
- Color-coded boxes
- Export annotations as JSON

### Analytics
- Weekly usage trends
- Machine type distribution pie chart
- Daily activity breakdown
- Performance metrics table
- Key KPIs

## 🌐 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo directly in Vercel dashboard.

### Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

## 📝 Customization

### Add Real API
Update API calls in each page component to connect to your backend:

```typescript
const response = await fetch('/api/machines')
const data = await response.json()
```

### Update Mock Data
Edit the mock data objects at the top of each page file to match your data structure.

### Customize Styling
Modify `tailwind.config.js` to adjust colors, spacing, and other theme options.

### Add Authentication
Replace localStorage-based auth in `src/components/Layout.tsx` with proper JWT authentication.

## 🔒 Security Notes

This is a demo frontend. For production:
- Implement proper JWT authentication
- Add environment variables for API endpoints
- Implement CORS properly
- Add rate limiting
- Validate all inputs
- Use HTTPS only

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🤝 Contributing

Feel free to fork and customize this template for your needs!

## 📄 License

MIT License - feel free to use for personal and commercial projects

## 📧 Support

For issues or questions, create an issue or reach out to the maintainers.

---

**Ready to deploy?** Push to GitHub and connect to Vercel for automatic deployments on every push!
