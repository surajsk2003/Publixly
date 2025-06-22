import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Debug: Log the request method
  console.log('API Route called with method:', req.method)
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body
  console.log('Received email:', email)
  
  if (!email || !email.includes('@')) {
    console.log('Invalid email provided:', email)
    return res.status(400).json({ error: 'Invalid email address' })
  }

  const FORM_ID = process.env.CONVERTKIT_FORM_ID
  const API_KEY = process.env.CONVERTKIT_API_KEY
  
  // Debug: Check if environment variables are loaded
  console.log('Form ID:', FORM_ID)
  console.log('API Key exists:', !!API_KEY)
  
  if (!FORM_ID || !API_KEY) {
    console.error('Missing environment variables')
    return res.status(500).json({ error: 'Server configuration error' })
  }

  try {
    const url = `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`
    const payload = { email, api_key: API_KEY }
    
    console.log('Making request to:', url)
    console.log('Payload:', { email, api_key: '***' })
    
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const data = await response.json()
    console.log('ConvertKit response status:', response.status)
    console.log('ConvertKit response data:', data)

    if (!response.ok) {
      console.error('ConvertKit API error:', data)
      return res.status(400).json({ 
        error: data?.message || data?.error || 'Subscription failed',
        details: data
      })
    }

    console.log('Subscription successful for:', email)
    return res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed!',
      subscriber: data.subscription
    })
  } catch (error) {
    console.error('API Route error:', error)
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}