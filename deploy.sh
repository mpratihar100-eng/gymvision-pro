#!/bin/bash

# GymVision Pro - Deployment Script
# This script sets up and deploys the application

set -e

echo "🏋️  GymVision Pro - Deployment Script"
echo "=================================="
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Verify build was successful
if [ -d ".next" ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed"
    exit 1
fi

# Start the production server
echo ""
echo "🚀 Starting production server..."
npm start

echo ""
echo "✅ Deployment complete!"
echo "📍 Visit http://localhost:3000"
