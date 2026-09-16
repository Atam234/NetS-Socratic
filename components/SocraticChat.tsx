'use client'

import { useState, useRef, useEffect } from 'react'
import { generateSocraticQuestion, analyzAnswer } from '@/lib/ai'

interface SocraticChatProps {
  topicId: number
  topicName: string
  onBack: () => void
}

interface Message {
  role: 'user' | 'assistant'
  content: string
  type?: 'answer' | 'question'
}

export default function SocraticChat({ topicId, topicName, onBack }: SocraticChatProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [initialized, setInitialized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Initialize with first question
  useEffect(() => {
    if (!initialized) {
      initializeChat()
      setInitialized(true)
    }
  }, [])

  const initializeChat = async () => {
    setLoading(true)
    try {
      const question = await generateSocraticQuestion(topicName, null)
      setMessages([{ role: 'assistant', content: question, type: 'question' }])
    } catch (error) {
      setMessages([{ role: 'assistant', content: 'Failed to load question. Please try again.' }])
    }
    setLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || loading) return

    // Add user message
    const userMessage: Message = { role: 'user', content: input, type: 'answer' }
    setMessages([...messages, userMessage])
    setInput('')
    setLoading(true)

    try {
      // Analyze answer and get follow-up
      const followUp = await analyzAnswer(topicName, input, messages)
      setMessages(prev => [...prev, { role: 'assistant', content: followUp, type: 'question' }])
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'I encountered an error. Please try again.' }])
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-socratic-900 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-socratic-800 to-socratic-700 border-b border-socratic-600 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">{topicName}</h2>
            <p className="text-socratic-300">Socratic Learning Session</p>
          </div>
          <button
            onClick={onBack}
            className="px-4 py-2 bg-socratic-600 hover:bg-socratic-500 text-white rounded-lg transition"
          >
            ← Back to Topics
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-4 space-y-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-2xl ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white rounded-lg p-4 rounded-tr-none'
                    : 'bg-socratic-800 text-socratic-50 rounded-lg p-4 border border-socratic-700 rounded-tl-none'
                }}`}
              >
                {message.role === 'assistant' && (
                  <div className="text-sm text-socratic-400 mb-2 font-medium">
                    {message.type === 'question' ? '❓ Question' : '💭 Response'}
                  </div>
                )}
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-socratic-800 text-socratic-50 rounded-lg p-4 border border-socratic-700 rounded-tl-none">
                <div className="flex gap-2 items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <p>Thinking...</p>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-socratic-800 border-t border-socratic-700 p-4 sticky bottom-0">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Share your thoughts..."
            disabled={loading}
            className="flex-1 px-4 py-3 rounded-lg bg-socratic-700 text-white placeholder-socratic-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
