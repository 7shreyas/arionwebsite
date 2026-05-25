import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, message, time } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // Send via Resend when API key is configured
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: 'Arion Contact Form <noreply@arionaisolutions.com>',
        to: 'hello@arionaisolutions.com',
        replyTo: email,
        subject: `New inquiry — ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Preferred time: ${time || 'Not specified'}`,
          '',
          'Message:',
          message,
        ].join('\n'),
      })
    }

    console.log('[ARION Contact]', {
      name,
      email,
      message,
      time: time ?? null,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('[ARION Contact Error]', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
