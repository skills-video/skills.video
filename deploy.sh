#!/bin/bash

# Skills.Video Deployment Script
# Usage: ./deploy.sh [github|cloudflare|netlify]

set -e

echo "🚀 Skills.Video Deployment Script"
echo "=================================="

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check Git status
echo -e "${BLUE}Checking Git status...${NC}"
if [ ! -d ".git" ]; then
    echo "❌ Not a Git repository. Run 'git init' first."
    exit 1
fi

# Get deployment target
TARGET=${1:-"github"}

case $TARGET in
    github)
        echo -e "${BLUE}Deploying to GitHub Pages...${NC}"
        
        # Check if remote exists
        if ! git remote | grep -q "origin"; then
            echo "❌ No 'origin' remote found. Please add your GitHub remote."
            echo "   git remote add origin https://github.com/your-username/skills.video.git"
            exit 1
        fi
        
        # Commit and push
        git add .
        git commit -m "Deploy $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"
        git push origin main
        
        echo -e "${GREEN}✅ Deployed to GitHub!${NC}"
        echo "   Enable GitHub Pages at: https://github.com/your-username/skills.video/settings/pages"
        ;;
        
    cloudflare)
        echo -e "${BLUE}Deploying to Cloudflare Pages...${NC}"
        
        # Check if Wrangler is installed
        if ! command -v wrangler &> /dev/null; then
            echo "❌ Wrangler CLI not found. Install with: npm install -g wrangler"
            exit 1
        fi
        
        # Deploy
        wrangler pages deploy .
        
        echo -e "${GREEN}✅ Deployed to Cloudflare Pages!${NC}"
        ;;
        
    netlify)
        echo -e "${BLUE}Deploying to Netlify...${NC}"
        
        # Check if Netlify CLI is installed
        if ! command -v netlify &> /dev/null; then
            echo "❌ Netlify CLI not found. Install with: npm install -g netlify-cli"
            exit 1
        fi
        
        # Deploy
        netlify deploy --prod --dir=.
        
        echo -e "${GREEN}✅ Deployed to Netlify!${NC}"
        ;;
        
    *)
        echo "❌ Unknown deployment target: $TARGET"
        echo "   Valid targets: github, cloudflare, netlify"
        exit 1
        ;;
esac

echo ""
echo "🎉 Deployment complete!"
