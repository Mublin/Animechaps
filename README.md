# ChatAnime 💬

> **Connect, Share, and Express** - A next-generation social messaging platform that brings people together through seamless communication and creative content sharing.

ChatAnime is more than just a chat app—it's a comprehensive social ecosystem where conversations come alive. Built with cutting-edge web technologies, it delivers a fluid, Instagram-meets-WhatsApp experience that adapts beautifully to any device.

## 🌟 Why ChatAnime?

**For Users:**
- 🚀 **Lightning Fast** - Instant messaging with zero lag
- 🎨 **Beautiful Design** - Sleek, modern interface that feels native on every device
- 🔒 **Privacy First** - Your conversations stay secure and private
- 🌙 **Adaptive Themes** - Seamlessly switches between light, dark, and system themes
- 📱 **Mobile Optimized** - Touch-first design that works flawlessly on smartphones

**For Developers:**
- ⚡ **Modern Stack** - Built with Next.js 16, TypeScript, and Tailwind CSS
- 🏗️ **Clean Architecture** - Well-structured, maintainable codebase
- 🔧 **Developer Friendly** - Easy to extend and customize
- 📚 **Best Practices** - Follows React and Next.js conventions

## ✨ Features

### 🔐 Authentication & Security
- **Smart Login System** - Quick registration with email or Google OAuth
- **Secure Sessions** - Protected routes and persistent authentication
- **Privacy Controls** - Granular settings for who can contact you

### 💬 Rich Messaging Experience
- **Real-time Conversations** - Instant message delivery and read receipts
- **Group Chats** - Create and manage group conversations
- **Voice Messages** - Record and send voice notes with one tap
- **Media Sharing** - Send photos, videos, and files seamlessly
- **Smart Editing** - Edit messages within 10 minutes of sending
- **Message Reactions** - Express yourself with emoji reactions

### 👥 Social Networking
- **Dynamic Profiles** - Customizable profiles with bio, avatar, and stats
- **Follow System** - Build your network by following interesting people
- **Social Discovery** - Find and connect with new users
- **Activity Feeds** - Stay updated with your network's activities

### 🎬 Content Creation
- **Post Sharing** - Create and share text posts with your network
- **Reels Platform** - Share and discover short-form video content
- **Rating System** - Rate and review content with star ratings
- **Engagement Tools** - Like, comment, and share content

### 🎨 User Experience
- **Responsive Design** - Flawless experience across all devices
- **Theme Customization** - Choose from light, dark, or system themes
- **Smooth Animations** - Delightful micro-interactions and transitions
- **Intuitive Navigation** - Easy-to-use interface with logical flow

## 🛠️ Tech Stack

**Frontend Framework**
- **Next.js 16** - React framework with App Router for optimal performance
- **TypeScript** - Type-safe development with enhanced developer experience
- **React 18** - Latest React features including concurrent rendering

**Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Radix UI** - Accessible, unstyled UI primitives
- **Lucide Icons** - Beautiful, customizable icon library
- **Custom Components** - Reusable UI components with consistent design

**State Management**
- **React Context API** - Lightweight state management for user, posts, and themes
- **Local Storage** - Persistent data storage for user preferences

**Development Tools**
- **ESLint** - Code linting for consistent code quality
- **PostCSS** - CSS processing with Autoprefixer
- **Geist Fonts** - Modern typography from Vercel

## 🚀 Quick Start

### Prerequisites
```bash
Node.js 18+ and npm
Git for version control
```

### Installation & Setup
```bash
# Clone the repository
git clone <repository-url>
cd chatanime

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see ChatAnime in action!

## 📱 Mobile-First Design

ChatAnime prioritizes mobile experience with:
- **Touch-Optimized Interface** - Designed for finger navigation
- **Responsive Layouts** - Adapts seamlessly from mobile to desktop
- **Performance Optimized** - Fast loading and smooth interactions
- **Native Feel** - App-like experience in the browser

## 🗂️ Project Architecture

```
app/
├── (public)/           # Public routes (authentication)
│   └── login/         # Login and registration pages
├── (private)/         # Protected routes (main app)
│   ├── chats/         # Messaging interface
│   ├── profile/       # User profiles
│   ├── create-post/   # Content creation
│   ├── reels/         # Video content
│   └── settings/      # App preferences
├── components/        # Reusable UI components
│   ├── common/        # Basic components (Button, Card, etc.)
│   └── ui/           # Advanced UI primitives
├── contexts/          # React contexts
│   ├── UserContext    # User authentication & profile
│   ├── PostContext    # Post management
│   └── ThemeContext   # Theme switching
├── hooks/            # Custom React hooks
└── lib/              # Utility functions
```

## 🎯 Key Pages & Features

**Authentication Flow**
- `/login` - Beautiful login/register interface with Google OAuth

**Main Application**
- `/chats` - Central messaging hub with conversation list
- `/chats/[id]` - Individual chat conversations
- `/profile` - Personal profile management
- `/profile/[id]` - View other users' profiles
- `/create-post` - Content creation interface
- `/reels` - Video content discovery
- `/settings` - Theme and preference management

## 🎨 Theming System

**Dynamic Theme Support:**
- **Light Mode** - Clean, bright interface for daytime use
- **Dark Mode** - Easy-on-eyes design for low-light environments
- **System Mode** - Automatically matches your device preference
- **Persistent Storage** - Remembers your choice across sessions

## 🔧 Development Commands

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Code linting
npm run lint

# Type checking
npm run type-check
```

## 🌐 Browser Support

ChatAnime works on all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Vercel** for Next.js and deployment platform
- **Tailwind Labs** for the amazing CSS framework
- **Radix UI** for accessible component primitives
- **Lucide** for the beautiful icon library

---

**Built with ❤️ for the future of social communication**

*ChatAnime - Where every conversation matters*