import { NextRequest, NextResponse } from 'next/server';

// Mock room data - will be replaced with database queries after Supabase setup
const mockRooms = [
  {
    id: 1,
    name: 'Luxury Suite',
    description: 'Spacious suite with king bed, marble bathroom, and garden view',
    price_per_night: 450,
    capacity: 3,
    size: '45 sqm',
    amenities: ['King bed', 'Marble bathroom', 'Premium linens', 'Air conditioning', 'Free WiFi', 'Flat-screen TV', 'Minibar', 'Daily housekeeping'],
  },
  {
    id: 2,
    name: 'Ocean View Room',
    description: 'Premium room featuring panoramic ocean views and private balcony',
    price_per_night: 550,
    capacity: 4,
    size: '55 sqm',
    amenities: ['King bed + sofa bed', 'Private balcony', 'Ocean view', 'Marble bathroom', 'Free WiFi', 'Entertainment system', 'Coffee maker', '24-hour room service'],
  },
  {
    id: 3,
    name: 'Presidential Suite',
    description: 'Ultra-luxury suite with living area, jacuzzi, and exclusive amenities',
    price_per_night: 850,
    capacity: 5,
    size: '85 sqm',
    amenities: ['King bedroom + guest room', 'Living area', 'Jacuzzi bathtub', 'Steam shower', 'Full kitchen', 'Private workspace', 'Personalized service', 'VIP amenities'],
  },
  {
    id: 4,
    name: 'Garden Villa',
    description: 'Private villa with direct garden access and outdoor shower',
    price_per_night: 650,
    capacity: 4,
    size: '70 sqm',
    amenities: ['King bed', 'Garden access', 'Outdoor shower', 'Indoor/outdoor living', 'Fireplace', 'Premium amenities', 'Garden patio', 'Private entrance'],
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const roomId = searchParams.get('id');

    // TODO: After setting up Supabase, replace with actual database query:
    
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_KEY!
    );

    if (roomId) {
      const { data, error } = await supabase
        .from('rooms')
        .select('*')
        .eq('id', roomId)
        .single();

      if (error) {
        return NextResponse.json({ error: 'Room not found' }, { status: 404 });
      }
      return NextResponse.json(data);
    }

    const { data, error } = await supabase
      .from('rooms')
      .select('*');

    if (error) {
      return NextResponse.json({ error: 'Failed to fetch rooms' }, { status: 500 });
    }
    

    if (roomId) {
      const room = mockRooms.find(r => r.id === parseInt(roomId));
      if (!room) {
        return NextResponse.json({ error: 'Room not found' }, { status: 404 });
      }
      return NextResponse.json(room);
    }

    return NextResponse.json(mockRooms);
  } catch (error) {
    console.error('Rooms API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
