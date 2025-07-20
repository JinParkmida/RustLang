# RustMaster - Comprehensive Rust Learning Platform

A production-ready web application for learning Rust programming with interactive tutorials, hands-on exercises, and real-time code execution.

## 🚀 Features

### Core Learning Features
- **Interactive Code Editor**: Monaco-based editor with syntax highlighting and auto-completion
- **Real-time Code Execution**: Integrated Rust compiler with instant feedback
- **Progressive Curriculum**: Structured learning path from beginner to advanced
- **Hands-on Exercises**: Coding challenges with automated testing
- **Visual Learning**: Interactive diagrams for complex concepts like ownership and borrowing

### User Experience
- **Modern UI/UX**: Clean, responsive design with dark/light theme support
- **Progress Tracking**: Comprehensive dashboard with learning analytics
- **Achievement System**: Badges and certificates to motivate learning
- **Community Features**: Discussions, comments, and peer learning
- **Mobile Optimized**: Fully responsive design for all devices

### Technical Excellence
- **Performance**: Fast loading times (<3 seconds)
- **Accessibility**: WCAG 2.1 compliant
- **SEO Optimized**: Server-side rendering with Next.js
- **Type Safety**: Full TypeScript implementation
- **Modern Stack**: React 18, Next.js 14, Tailwind CSS, Framer Motion

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Code Editor**: Monaco Editor
- **State Management**: Zustand
- **Data Fetching**: React Query

### Backend
- **Runtime**: Node.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with JWT
- **Code Execution**: Rust Playground API integration

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint
- **Type Checking**: TypeScript
- **Build Tool**: Next.js built-in

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- PostgreSQL 14+
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/rustmaster.git
   cd rustmaster
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure the following environment variables:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/rustmaster"
   
   # Authentication
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   
   # Rust Playground API
   RUST_PLAYGROUND_URL="https://play.rust-lang.org"
   ```

4. **Database Setup**
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # User dashboard
│   ├── learn/             # Learning interface
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/                # Reusable UI components
│   ├── dashboard/         # Dashboard-specific components
│   ├── learn/             # Learning interface components
│   └── providers/         # Context providers
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
├── data/                  # Static data and curriculum
├── lib/                   # Utility functions
└── styles/                # Global styles
```

## 📚 Curriculum Structure

The platform includes comprehensive Rust curriculum covering:

### Beginner Level
- Getting Started & Installation
- Hello World & Basic Syntax
- Variables & Data Types
- Functions & Control Flow

### Intermediate Level
- Ownership & Borrowing
- Structs & Enums
- Error Handling
- Collections (Vec, HashMap, etc.)
- Modules & Packages

### Advanced Level
- Lifetimes & Advanced References
- Traits & Generics
- Concurrency & Async Programming
- Unsafe Rust
- Macros & Metaprogramming

## 🎯 Key Components

### Interactive Code Editor
```typescript
// Monaco-based editor with Rust syntax highlighting
<CodeEditor
  value={code}
  onChange={setCode}
  language="rust"
  theme={theme}
  options={{
    minimap: { enabled: false },
    fontSize: 14,
    fontFamily: 'JetBrains Mono',
  }}
/>
```

### Progress Tracking
```typescript
// Comprehensive progress tracking
interface UserProgress {
  completedLessons: string[]
  currentChapter: number
  totalPoints: number
  achievements: Achievement[]
  streak: number
}
```

### Real-time Code Execution
```typescript
// Integration with Rust Playground API
const executeCode = async (code: string) => {
  const response = await fetch('/api/execute', {
    method: 'POST',
    body: JSON.stringify({ code }),
  })
  return response.json()
}
```

## 🔧 Configuration

### Theme Configuration
The platform supports both light and dark themes with automatic system preference detection:

```typescript
// Theme provider with persistence
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    setTheme(savedTheme || systemTheme)
  }, [])
  
  // ... theme logic
}
```

### Database Schema
```sql
-- Core tables for user management and progress tracking
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR UNIQUE NOT NULL,
  name VARCHAR NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE user_progress (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  lesson_id VARCHAR NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  score INTEGER,
  completed_at TIMESTAMP
);
```

## 🚀 Deployment

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables for Production
```env
NODE_ENV=production
DATABASE_URL=your_production_db_url
NEXTAUTH_SECRET=your_production_secret
NEXTAUTH_URL=https://your-domain.com
```

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests
```bash
npm run test:e2e
```

### Type Checking
```bash
npm run type-check
```

## 📈 Performance Optimizations

- **Code Splitting**: Automatic route-based code splitting with Next.js
- **Image Optimization**: Next.js Image component with lazy loading
- **Caching**: React Query for efficient data fetching and caching
- **Bundle Analysis**: Webpack bundle analyzer for optimization insights

## 🔒 Security Features

- **Authentication**: Secure JWT-based authentication
- **Input Validation**: Comprehensive input sanitization
- **CSRF Protection**: Built-in CSRF protection with NextAuth.js
- **Rate Limiting**: API rate limiting to prevent abuse

## 🌐 Accessibility

- **WCAG 2.1 AA Compliance**: Full accessibility support
- **Keyboard Navigation**: Complete keyboard navigation support
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **High Contrast**: Support for high contrast themes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Rust Programming Language team for the excellent documentation
- Monaco Editor team for the powerful code editor
- Tailwind CSS team for the utility-first CSS framework
- Framer Motion team for smooth animations
- The open-source community for inspiration and tools

## 📞 Support

For support, email support@rustmaster.com or join our Discord community.

---

**Built with ❤️ for the Rust community**