'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you for subscribing! We'll send updates to ${email}`)
    setEmail('')
  }

  return (
    <div className="bg-socratic-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="text-gradient">Think Deeper</span>
              <br />
              <span>Not Faster</span>
            </h2>
            <p className="text-xl md:text-2xl text-socratic-300 max-w-2xl mx-auto">
              NetS uses the Socratic Method to challenge your thinking. We ask questions, not give answers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/learn" className="btn-primary text-lg px-8 py-3">
              Start Learning
            </Link>
            <Link href="/about" className="btn-secondary text-lg px-8 py-3">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-socratic-800">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16 text-white">Why NetS?</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-4xl mb-4">🤔</div>
              <h4 className="text-xl font-bold mb-3 text-white">Socratic Questions</h4>
              <p className="text-socratic-300">
                Instead of direct answers, we guide you with thoughtful questions that help you discover the truth yourself.
              </p>
            </div>

            <div className="card">
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="text-xl font-bold mb-3 text-white">Deep Thinking</h4>
              <p className="text-socratic-300">
                Challenge your assumptions and develop critical thinking skills through dialogue and reflection.
              </p>
            </div>

            <div className="card">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="text-xl font-bold mb-3 text-white">AI-Powered</h4>
              <p className="text-socratic-300">
                Leverages advanced AI to generate personalized Socratic questions tailored to your learning journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h3 className="text-4xl font-bold text-white">Ready to Transform Your Learning?</h3>
          <p className="text-xl text-socratic-300">
            Join thousands of learners who are discovering the power of questioning.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-socratic-700 text-white placeholder-socratic-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
