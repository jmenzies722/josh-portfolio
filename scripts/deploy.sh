#!/bin/bash

# Deployment script for Josh's Portfolio
set -e

echo "🚀 Starting deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Clean previous builds
print_status "Cleaning previous builds..."
rm -rf .next
rm -rf node_modules/.cache

# Install dependencies
print_status "Installing dependencies..."
npm ci

# Run pre-deployment checks
print_status "Running type check..."
npm run typecheck

print_status "Running linting..."
npm run lint

print_status "Running tests..."
npm run test

# Build the application
print_status "Building application..."
npm run build

print_status "Build completed successfully!"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    print_warning "Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Deploy to Vercel
print_status "Deploying to Vercel..."
vercel --prod

print_status "Deployment completed successfully! 🎉"
