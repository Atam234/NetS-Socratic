# NetS - Network Socratic

A revolutionary educational platform that uses the **Socratic Method** combined with AI to help learners think deeper, not faster.

## 🎯 Core Concept

Unlike traditional LLMs that provide instant answers, **NetS** guides you through thoughtful questions to discover knowledge yourself. We believe true learning comes from critical thinking and self-discovery.

## ✨ Features

- **Socratic Questions**: AI-powered questions that guide your thinking
- **Multiple Topics**: Philosophy, Science, History, Mathematics, Psychology, Technology
- **Deep Learning**: Focus on understanding, not memorization
- **AI-Powered**: Uses OpenAI API (or similar) for intelligent dialogue
- **Clean Interface**: Beautiful, distraction-free learning environment

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- OpenAI API key (or alternative AI provider)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Atam234/NetS-Socratic.git
cd NetS-Socratic
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your API keys to `.env.local`:
```env
OPENAI_API_KEY=your_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
NetS-Socratic/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Main layout
│   ├── globals.css           # Global styles
│   ├── learn/
│   │   └── page.tsx          # Topic selection
│   └── about/
│       └── page.tsx          # About page
├── components/
│   └── SocraticChat.tsx      # Main chat component
├── lib/
│   ├── ai.ts                 # AI integration
│   └── utils.ts              # Utility functions
├── public/                   # Static assets
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── tailwind.config.js        # Tailwind CSS config
├── next.config.js            # Next.js config
└── postcss.config.js         # PostCSS config
```

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **AI**: OpenAI API (GPT-3.5/GPT-4)
- **Database**: Optional (can add MongoDB/Postgres later)

## 📝 How It Works

1. **Select a Topic**: Choose from various learning topics
2. **Receive a Question**: NetS presents a thought-provoking question
3. **Share Your Thoughts**: Provide your answer or perspective
4. **Get Asked More Questions**: Instead of answers, receive follow-up questions
5. **Discover Understanding**: Through dialogue, you develop deeper comprehension

## 🔧 Configuration

### Supported AI Providers

- **OpenAI** (Default - GPT-3.5-turbo / GPT-4)
- **Google Gemini** (Coming soon)
- **Anthropic Claude** (Coming soon)
- **Open Source Models** (Coming soon)

To switch providers, modify `lib/ai.ts`

## 🚢 Deployment

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Add your environment variables in Vercel's dashboard.

### Deploy to Other Platforms

- **Docker**: Use provided Dockerfile (coming soon)
- **Railway**: Connect your GitHub repo
- **Render**: Similar to Railway

## 📚 Learning Topics

Currently supported:
- 🤔 Philosophy
- 🔬 Science
- 📖 History
- 🧮 Mathematics
- 🧠 Psychology
- 💻 Technology

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- Inspired by ancient Socratic methods
- Built with modern AI technology
- Designed for thoughtful learners

## 📞 Support

Having issues? Create an issue on GitHub or contact support.

---

**NetS - Learn by Questioning, Not by Answering** 🧠✨
