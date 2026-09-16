export default function About() {
  return (
    <div className="min-h-screen bg-socratic-900 py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-5xl font-bold text-white mb-8">About NetS</h1>

        <section className="card">
          <h2 className="text-3xl font-bold text-white mb-4">What is the Socratic Method?</h2>
          <p className="text-socratic-200 leading-relaxed">
            The Socratic Method is an ancient form of inquiry attributed to the Greek philosopher Socrates. Rather than providing direct answers, 
            it uses a series of questions to help learners discover knowledge for themselves, challenge their assumptions, and develop critical thinking skills.
          </p>
        </section>

        <section className="card">
          <h2 className="text-3xl font-bold text-white mb-4">Why NetS?</h2>
          <p className="text-socratic-200 leading-relaxed mb-4">
            In an era of instant answers and AI assistants that provide immediate solutions, NetS takes a different approach. 
            We believe that true learning comes from thinking deeply, questioning assumptions, and discovering answers yourself.
          </p>
          <p className="text-socratic-200 leading-relaxed">
            NetS combines the ancient Socratic Method with modern AI to create an interactive learning experience that challenges you 
            to think deeper and develop genuine understanding, not just memorize answers.
          </p>
        </section>

        <section className="card">
          <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-3 text-socratic-200">
            <li>You select a topic you want to explore</li>
            <li>NetS presents you with a question related to that topic</li>
            <li>You think and provide your answer</li>
            <li>Instead of telling you if you're right or wrong, NetS asks follow-up questions</li>
            <li>Through this dialogue, you refine your understanding</li>
            <li>You discover deeper insights and develop critical thinking skills</li>
          </ol>
        </section>

        <section className="card">
          <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-socratic-200 leading-relaxed">
            To empower learners worldwide to think deeply, question meaningfully, and discover their own truths. 
            We believe education should challenge and inspire, not just inform.
          </p>
        </section>
      </div>
    </div>
  )
}
