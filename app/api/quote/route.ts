import { NextResponse } from 'next/server';

export interface QuotePayload {
  name: string;
  companyName?: string;
  phone: string;
  email: string;
  city?: string;
  country?: string;
  category: string;
  capacity?: string;
  material?: string;
  inputMoisture?: string;
  outputMoisture?: string;
  heatSource?: string;
  beltWidth?: string;
  message?: string;
  honeypot?: string;
}

export async function POST(request: Request) {
  try {
    const body: QuotePayload = await request.json();

    // Spam honeypot protection: if honeypot is filled, discard
    if (body.honeypot && body.honeypot.trim() !== '') {
      return NextResponse.json(
        { success: true, message: 'Enquiry received successfully.' },
        { status: 200 }
      );
    }

    // Required fields validation
    if (!body.name || !body.phone || !body.category) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please provide your name, telephone number, and equipment category.',
        },
        { status: 400 }
      );
    }

    // Basic phone validation (at least 8 digits)
    const phoneDigits = body.phone.replace(/\D/g, '');
    if (phoneDigits.length < 8) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid telephone number.' },
        { status: 400 }
      );
    }

    // Log the enquiry for works engineering review
    const leadRecord = {
      timestamp: new Date().toISOString(),
      name: body.name.trim(),
      company: body.companyName?.trim() || 'N/A',
      phone: body.phone.trim(),
      email: body.email?.trim() || 'N/A',
      location: `${body.city || ''}, ${body.country || 'India'}`.trim(),
      category: body.category,
      capacity: body.capacity || 'Not specified',
      material: body.material || 'Not specified',
      dryingDetails: {
        inputMoisture: body.inputMoisture || 'N/A',
        outputMoisture: body.outputMoisture || 'N/A',
        heatSource: body.heatSource || 'N/A',
      },
      conveyorDetails: {
        beltWidth: body.beltWidth || 'N/A',
      },
      notes: body.message?.trim() || '',
    };

    console.log('[LEAD RECEIVED - WORKS DESK]:', JSON.stringify(leadRecord, null, 2));

    // Integration Note: To connect to an SMTP mailer or CRM lead webhook:
    // Configure process.env.SMTP_HOST or process.env.LEAD_WEBHOOK_URL
    // Example: fetch(process.env.LEAD_WEBHOOK_URL, { method: 'POST', body: JSON.stringify(leadRecord) })

    return NextResponse.json(
      {
        success: true,
        message:
          'Your machinery quotation request has been received. Our fabrication and process engineering team at Zak GIDC will review your specifications and contact you shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[QUOTE API ERROR]:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Unable to process enquiry at this time. Please call our works desk directly at +91 63524 53050.',
      },
      { status: 500 }
    );
  }
}

