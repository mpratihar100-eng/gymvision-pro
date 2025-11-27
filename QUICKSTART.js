#!/usr/bin/env node

/**
 * GymVision Pro - Quick Start Guide
 * 
 * This file contains quick references and setup instructions
 */

console.log(`
╔════════════════════════════════════════════════════════════════╗
║                  🏋️  GymVision Pro                             ║
║           AI-Powered Gym Machine Monitoring                    ║
╚════════════════════════════════════════════════════════════════╝

📦 INSTALLATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Install Dependencies:
   $ npm install

2. Start Development Server:
   $ npm run dev

3. Open in Browser:
   → http://localhost:3000

   
🔐 LOGIN CREDENTIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Email:    demo@gym.com
Password: password123

Or click "Try Demo" button for instant access


📱 FEATURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Dashboard          - Machine activity monitoring
✓ Camera Feed        - Live video detection
✓ Bounding Box       - Interactive annotation tool
✓ Analytics          - Charts & performance metrics
✓ Authentication     - Login & session management
✓ Responsive Design  - Mobile friendly


🚀 DEPLOYMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Build for Production:
   $ npm run build
   $ npm start

Deploy to Vercel:
   $ npm i -g vercel
   $ vercel

Or connect GitHub repo directly in Vercel dashboard


📁 PROJECT STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

src/
├── app/
│   ├── login/           - Authentication page
│   ├── dashboard/       - Machine monitoring
│   ├── camera/          - Live feed
│   ├── bounding-box/    - Annotation tool
│   └── analytics/       - Charts & metrics
├── components/          - Reusable components
├── types/               - TypeScript definitions
├── utils/               - Helper functions
└── middleware.ts        - Route protection


🛠️ TECH STACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Next.js 14 + App Router
• React 18 + TypeScript
• Tailwind CSS + Lucide Icons
• Recharts for data visualization


💻 AVAILABLE COMMANDS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

npm run dev      - Start development server
npm run build    - Build for production
npm start        - Start production server
npm run lint     - Run ESLint checks


📚 DOCUMENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

README.md         - User guide & features
DOCUMENTATION.md  - Complete technical docs


🎯 NEXT STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Explore the demo at http://localhost:3000
2. Review DOCUMENTATION.md for customization
3. Connect your backend API
4. Deploy to Vercel
5. Add real authentication


❓ NEED HELP?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Check README.md and DOCUMENTATION.md for:
• Feature details
• Customization guide
• API integration
• Deployment instructions
• Troubleshooting


═══════════════════════════════════════════════════════════════════

Happy coding! 🚀

═══════════════════════════════════════════════════════════════════
`);
