import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('[v0] Supabase credentials not configured. Contact messages will not be saved to database.');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, email, phone, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // If Supabase is configured, save to database
    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { data, error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name,
            email,
            phone: phone || null,
            subject,
            message,
            status: 'new',
          },
        ])
        .select();

      if (error) {
        console.error('[v0] Supabase contact insert error:', error);
        return NextResponse.json(
          { error: `Database error: ${error.message}` },
          { status: 500 }
        );
      }

      console.log('[v0] Contact message saved to database:', data);
    } else {
      // Fallback: just log if Supabase is not configured
      console.log('[v0] Contact form submission (not saved to DB):', {
        name,
        email,
        phone,
        subject,
        message,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Thank you for contacting us. We will get back to you soon.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
