# 🌱 Community Garden Project - Hiro Platform Customization

This document outlines the complete customization of the Hiro Platform fundraising template for the **GreenGrow Community Garden Initiative**.

## 🎯 Project Overview

The original "Cooking with Crypto" fundraising template has been completely transformed into a comprehensive community garden fundraising platform with the following key features:

- **Campaign Title**: "GreenGrow Community Garden Initiative"
- **Funding Goal**: $25,000 USD
- **Duration**: 6 months
- **Theme Colors**: Fresh green (#4CAF50), earthy brown (#8D6E63), harvest orange (#FF9800)

## 📁 File Structure & Changes

### 1. Core Configuration Files

#### `front-end/src/constants/campaign.ts`
- Updated campaign title and subtitle
- Added garden-specific metadata and theme colors
- Included feature descriptions for harvest calendar, nutrition tracker, volunteer plots, and education resources

#### `front-end/src/theme.ts`
- Implemented garden color scheme throughout the application
- Added garden-specific component styling
- Configured default color schemes for buttons and progress bars

### 2. Content & Assets

#### `front-end/public/campaign-details.md`
Complete rewrite with comprehensive community garden content:
- Campaign overview and mission statement
- Detailed funding breakdown ($25,000 USD)
- 6-month project timeline
- Impact and benefits analysis
- Team information for Local Community Garden Association
- Food security and community building focus

#### `front-end/public/campaign/` (Images)
Replaced cooking images with 5 custom garden-themed SVG illustrations:
- `garden1.svg` - Community garden with raised beds and people working
- `garden2.svg` - Digital garden management tools (harvest calendar, nutrition tracker)
- `garden3.svg` - Community education and workshops
- `garden4.svg` - Funding goal breakdown and impact visualization
- `garden5.svg` - Harvest celebration and community impact

### 3. New Garden-Specific Components

#### `front-end/src/components/HarvestCalendar.tsx`
Interactive seasonal planting and harvesting guide featuring:
- Seasonal breakdown (Spring, Summer, Fall, Winter)
- Plant-specific information (growth time, planting/harvest seasons)
- Visual indicators for planting and harvesting periods
- Growing tips and best practices

#### `front-end/src/components/NutritionTracker.tsx`
Comprehensive nutrition tracking system including:
- Community nutrition goals and progress
- Detailed nutritional information for garden vegetables
- Vitamin and mineral tracking
- Health impact metrics
- Educational nutrition tips

#### `front-end/src/components/VolunteerPlots.tsx`
Community plot management system featuring:
- Garden overview statistics
- Individual plot assignments and status
- Volunteer directory with specialties
- Progress tracking for each plot
- Call-to-action for new volunteers

### 4. Updated Existing Components

#### `front-end/src/components/CampaignDetails.tsx`
Enhanced with garden-themed styling:
- Updated color scheme using garden theme colors
- Garden-themed progress bar with growth messaging
- Updated contribution button with garden icon
- Community-focused funding description
- Enhanced visual appeal with garden elements

#### `front-end/src/components/DonationModal.tsx`
Customized donation experience:
- Garden-themed modal header
- Random garden-themed success messages
- Enhanced user experience with community-focused messaging

#### `front-end/src/components/Navbar.tsx`
Updated branding:
- Garden leaf icon (🌱) instead of "/-/"
- "GreenGrow Community Garden" branding
- Garden theme colors throughout

#### `front-end/src/app/page.tsx`
Comprehensive garden experience:
- Integrated all garden components
- Feature overview section
- Interactive garden management tools
- Multiple call-to-action sections
- Responsive design for all screen sizes

### 5. Styling & Theming

#### `front-end/src/app/globals.css`
Added garden-themed styling:
- CSS custom properties for garden colors
- Garden-themed animations (grow, leaf-sway, soil-dig)
- Hover effects for garden cards
- Custom scrollbar with garden theme
- Seasonal color themes
- Responsive design considerations
- Print-friendly styles

## 🌿 Garden Features Implemented

### 1. Harvest Calendar Integration
- **Purpose**: Help community members plan their garden activities
- **Features**: Seasonal planting guides, growth timelines, harvest schedules
- **Benefits**: Maximizes garden productivity and community engagement

### 2. Nutrition Tracker
- **Purpose**: Monitor community health impact and nutritional education
- **Features**: Vegetable nutrition data, community health goals, vitamin tracking
- **Benefits**: Promotes healthy eating and tracks community wellness

### 3. Volunteer Plot Management
- **Purpose**: Organize community participation and plot assignments
- **Features**: Plot status tracking, volunteer directory, progress monitoring
- **Benefits**: Efficient resource management and community coordination

### 4. Educational Resources
- **Purpose**: Provide learning opportunities for sustainable gardening
- **Features**: Workshop information, skill development, best practices
- **Benefits**: Builds community knowledge and long-term sustainability

## 🎨 Design System

### Color Palette
- **Primary Green**: #4CAF50 (Fresh garden green)
- **Secondary Brown**: #8D6E63 (Earthy soil brown)
- **Accent Orange**: #FF9800 (Harvest orange)
- **Success Green**: #66BB6A (Light green)
- **Warning Orange**: #FFA726 (Light orange)
- **Info Green**: #81C784 (Pale green)

### Typography & Icons
- Garden-themed emojis throughout (🌱, 🥕, 👥, 📚, etc.)
- Consistent heading hierarchy
- Readable font sizes and spacing
- Accessible color contrast ratios

### Animations & Interactions
- Smooth hover effects on garden cards
- Growth animations for progress indicators
- Leaf-sway animations for decorative elements
- Soil-dig animations for interactive elements

## 📱 Responsive Design

All components are fully responsive and optimized for:
- **Mobile devices** (320px+)
- **Tablets** (768px+)
- **Desktop** (1024px+)
- **Large screens** (1440px+)

## 🔧 Technical Implementation

### Stacks Blockchain Integration
- All original Stacks blockchain functionality preserved
- Smart contract integration maintained
- Wallet connection features intact
- Transaction processing unchanged

### Performance Optimizations
- SVG images for scalability
- CSS animations for smooth interactions
- Efficient component rendering
- Optimized bundle size

### Accessibility Features
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Screen reader compatibility
- High contrast color schemes

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 🌱 Community Garden Impact

This customization transforms the fundraising platform into a comprehensive community garden management system that:

- **Promotes Food Security**: Provides fresh, local produce access
- **Builds Community**: Creates spaces for neighbor interaction and learning
- **Educates**: Offers sustainable gardening and nutrition education
- **Tracks Progress**: Monitors community health and garden productivity
- **Facilitates Participation**: Makes it easy for community members to get involved

## 📈 Future Enhancements

Potential additions for future development:
- Real-time garden monitoring sensors
- Weather integration for planting recommendations
- Community recipe sharing platform
- Garden-to-table meal planning tools
- Volunteer scheduling and communication system
- Harvest sharing and distribution tracking

## 🤝 Contributing

This project demonstrates how blockchain technology can support community initiatives. The codebase is well-documented and modular, making it easy to adapt for other community projects.

---

**Together, we can grow a healthier, more connected community – one seed at a time!** 🌱 