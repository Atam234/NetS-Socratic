'use client'

import { useState } from 'react'
import SocraticChat from '@/components/SocraticChat'

const TOPICS = [
  { id: 1, name: 'Philosophy', description: 'Explore fundamental questions about existence and ethics' },
  { id: 2, name: 'Science', description: 'Understand scientific concepts through questioning' },
  { id: 3, name: 'History', description: 'Analyze historical events and their causes' },
  { id: 4, name: 'Mathematics', description: 'Master mathematical concepts through Socratic dialogue' },
  { id: 5, name: 'Psychology', description: 'Explore the human mind and behavior' },
  { id: 6, name: 'Technology', description: 'Understand tech concepts and their implications' },
]

export default function LearnPage() {
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null)

  if (selectedTopic) {
    return <SocraticChat topicId={selectedTopic} topicName={TOPICS.find(t => t.id === selectedTopic)?.name || ''} onBack={() => setSelectedTopic(null)} />
  }

  return (
    <div className="min-h-screen bg-socratic-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Choose Your Topic</h1>
          <p className="text-xl text-socratic-300">Select a topic and begin your Socratic learning journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOPICS.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setSelectedTopic(topic.id)}
              className="card text-left hover:border-blue-500 hover:bg-socratic-700 transition group"
            >
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition">
                {topic.name}
              </h3>
              <p className="text-socratic-300">{topic.description}</p>
              <div className="mt-4 text-blue-400 font-medium">Start Learning →</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
