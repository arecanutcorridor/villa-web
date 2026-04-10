import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('[v0] Supabase credentials not configured. Reservations will not be saved to database.');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      checkIn,
      checkOut,
      numberOfGuests,
      roomType,
      guestName,
      guestEmail,
      guestPhone,
      specialRequests,
    } = body;

    // Validate required fields
    if (!checkIn || !checkOut || !numberOfGuests || !roomType || !guestName || !guestEmail || !guestPhone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // If Supabase is configured, save to database
    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);

      // Map room type to room ID
      const roomMap: { [key: string]: number } = {
        'luxury-suite': 1,
        'ocean-view': 2,
        'presidential': 3,
        'garden-villa': 4,
      };

      const roomId = roomMap[roomType] || 1;

      const { data, error } = await supabase
        .from('reservations')
        .insert([
          {
            room_id: roomId,
            guest_name: guestName,
            guest_email: guestEmail,
            guest_phone: guestPhone,
            check_in: checkIn,
            check_out: checkOut,
            number_of_guests: numberOfGuests,
            special_requests: specialRequests || null,
            status: 'pending',
          },
        ])
        .select();

      if (error) {
        console.error('[v0] Supabase insert error:', error);
        return NextResponse.json(
          { error: `Database error: ${error.message}` },
          { status: 500 }
        );
      }

      return NextResponse.json(
        {
          success: true,
          message: 'Reservation submitted successfully',
          data,
        },
        { status: 201 }
      );
    } else {
      // Fallback: just return success if Supabase is not configured
      console.log('[v0] Reservation received (not saved to DB):', {
        guestName,
        guestEmail,
        checkIn,
        checkOut,
        numberOfGuests,
        roomType,
      });

      return NextResponse.json(
        {
          success: true,
          message: 'Reservation submitted successfully (database not configured)',
        },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error('[v0] Reservations API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
