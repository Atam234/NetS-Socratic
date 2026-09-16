import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NetS - Socratic Question Platform',
  description: 'Learn through Socratic questioning. Challenge your thinking, not follow AI answers.',
  keywords: ['Socratic Method', 'Education', 'AI', 'Critical Thinking', 'Learning'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-socratic-900 text-socratic-50">
        <div className="min-h-screen flex flex-col">
          <header className="bg-gradient-to-r from-socratic-800 to-socratic-700 border-b border-socratic-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">𝒩</span>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-white">NetS</h1>
                    <p className="text-sm text-socratic-300">Network Socratic</p>
                  </div>
                </div>
                <nav className="hidden md:flex gap-6">
                  <a href="/" className="text-socratic-100 hover:text-white transition">Home</a>
                  <a href="/learn" className="text-socratic-100 hover:text-white transition">Learn</a>
                  <a href="/about" className="text-socratic-100 hover:text-white transition">About</a>
                </nav>
              </div>
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="bg-socratic-800 border-t border-socratic-700 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-center text-socratic-400 text-sm">
                <p>NetS © 2024 - Learn Through Questioning, Not Answering</p>
                <p className="mt-2 text-socratic-500">Powered by Socratic Method & AI</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
