import { GoogleGenerativeAI } from '@google/generative-ai'

if (!process.env.GEMINI_API_KEY) {
  throw new Error('Missing GEMINI_API_KEY environment variable')
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

export async function POST(request: Request) {
  try {
    console.log('Starting chat request processing')

    const { message, history } = await request.json()

    if (!message) {
      console.log('Missing message in request')
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    console.log('Initializing Gemini model')
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })

    const historyText = history
      .map((msg: { role: string; content: string }) => `${msg.role}: ${msg.content}`)
      .join('\n')

    const prompt = `You are a helpful AI assistant. Maintain the context of previous messages. Here is the conversation so far:\n${historyText}\nUser: ${message}\nAssistant:`

    console.log('Sending message to Gemini with context:', prompt)

    try {
      const result = await model.generateContent(prompt)
      const response = await result.response
      const text = response.text()

      console.log('Received response from Gemini')

      if (!text) {
        console.error('Empty response from Gemini')
        throw new Error('Empty response from Gemini')
      }

      return new Response(JSON.stringify({ response: text }), {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        },
      })

    } catch (modelError) {
      console.error('Gemini Model Error:', modelError)
      throw modelError
    }

  } catch (error) {
    console.error('API Route Error:', error)
    
    return new Response(JSON.stringify({ 
      error: 'Failed to process request',
      details: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      },
    })
  }
}
