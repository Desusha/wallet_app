# Wallet App

A mobile-first wallet application built with React, TypeScript, and Ant Design. This app displays card balance, daily points, and transaction history with detailed views.

## 🎯 Task Overview

This project implements a two-screen mobile wallet application:

### Screen 1: Transactions List
![Transactions List](./screenshots/transactions-list.png)

**Features:**
- **Card Balance Block**: Displays current balance and available credit
  - Maximum card limit: $1,500
  - Available amount calculated as: limit - balance
- **No Payment Due Block**: Shows payment status message
- **Daily Points Block**: Calculates points based on current season day
  - Formula: Day 1 = 2 points, Day 2 = 3 points
  - Day 3+: 100% of (day-2) + 60% of (day-1)
  - Displayed as "K" format when > 1000 (e.g., 29K)
- **Latest Transactions**: Shows 10 most recent transactions
  - Payment (top-ups): Amount with "+" prefix
  - Credit (expenses): Standard amount
  - Date formatting: Last 7 days show day names, older show date
  - Pending status indicator
  - Authorized user display (if applicable)

### Screen 2: Transaction Detail
![Transaction Detail](./screenshots/transaction-detail.png)

**Features:**
- Large amount display
- Merchant name and transaction time
- Status indicator (Approved/Pending)
- Card information
- Total amount
- Back navigation to list

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Running the Project

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

```bash
# Build the app
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Ant Design** - UI component library
- **React Router** - Navigation
- **FontAwesome** - Icons for merchants and UI elements

## 📁 Project Structure

```
src/
├── pages/
│   ├── TransactionsListPage.tsx    # Main list screen
│   └── TransactionDetailPage.tsx   # Detail view screen
├── data/
│   └── transactions.json           # Test data (10 transactions)
├── types/
│   └── index.ts                    # TypeScript interfaces
├── utils/
│   ├── calculateDailyPoints.ts     # Points calculation logic
│   └── dateFormatter.ts            # Date formatting utilities
├── styles/
│   ├── TransactionsListPage.css    # List screen styles
│   └── TransactionDetailPage.css   # Detail screen styles
├── App.tsx                         # Main app with routing
└── main.tsx                        # Entry point
```

## 📊 Daily Points Calculation

The daily points system is based on the current season (Spring, Summer, Autumn, Winter):

- **Seasons:**
  - Spring: March 1 - May 31
  - Summer: June 1 - August 31
  - Autumn: September 1 - November 30
  - Winter: December 1 - February 28/29

- **Points Formula:**
  - Day 1 of season: 2 points
  - Day 2 of season: 3 points
  - Day 3+: Previous day × 60% + Two days ago × 100%

## 📱 Mobile Layout

The application is optimized for mobile devices with:
- Max-width: 480px
- Responsive card layouts
- Touch-friendly interactions
- Mobile-first design patterns
