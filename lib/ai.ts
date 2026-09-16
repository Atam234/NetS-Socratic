import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const SOCRATIC_SYSTEM_PROMPT = `You are a Socratic tutor. Your role is NOT to give direct answers, but to guide learners through thoughtful questions.

Your approach:
1. Ask clarifying questions to understand what the learner already knows
2. Help them identify gaps in their understanding
3. Challenge their assumptions gently
4. Guide them to discover answers themselves
5. Ask follow-up questions based on their responses
6. Encourage deeper thinking

Never:
- Give direct answers
- Tell them if they're right or wrong immediately
- Use simple yes/no questions
- Give up on guiding them

Always:
- Ask open-ended questions
- Build on their previous responses
- Be respectful and encouraging
- Focus on understanding their reasoning
`

export async function generateSocraticQuestion(
  topic: string,
  context: string | null
): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: SOCRATIC_SYSTEM_PROMPT,
        },
        {
          role: 'user',
          content: context
            ? `Topic: ${topic}\n\nContext: ${context}\n\nAsk a follow-up Socratic question based on this context.`
            : `Topic: ${topic}\n\nStart a Socratic learning session about this topic. Begin with an engaging opening question that will make someone think deeply about ${topic}.`,
        },
      ],
      max_tokens: 300,
      temperature: 0.7,
    })

    return response.choices[0].message.content || 'Failed to generate question'
  } catch (error) {
    console.error('Error generating Socratic question:', error)
    throw new Error('Failed to generate question')
  }
}

export async function analyzAnswer(
  topic: string,
  answer: string,
  previousMessages: Array<{ role: string; content: string }>
): Promise<string> {
  try {
    const messages = [
      {
        role: 'system' as const,
        content: SOCRATIC_SYSTEM_PROMPT,
      },
      ...previousMessages.map((msg) => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
      {
        role: 'user' as const,
        content: `The learner answered: "${answer}"\n\nBased on this response about ${topic}, ask a thoughtful follow-up question that will help them deepen their understanding. Don't tell them if they're right or wrong. Instead, guide them with questions.`,
      },
    ]

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages,
      max_tokens: 300,
      temperature: 0.7,
    })

    return response.choices[0].message.content || 'Failed to generate response'
  } catch (error) {
    console.error('Error analyzing answer:', error)
    throw new Error('Failed to analyze answer')
  }
}
