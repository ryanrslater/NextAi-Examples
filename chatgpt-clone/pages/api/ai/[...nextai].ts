import NextAI from 'nextai'

export default NextAI({
    Providers: {
        OpenAi: {
            apiKey: process.env.OPENAI ? process.env.OPENAI  : ''
        }
    }
})