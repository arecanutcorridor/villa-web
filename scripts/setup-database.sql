-- Areca-Nut Corridor Database Setup
-- Execute this script in your Supabase SQL editor after setting up the project

-- Create rooms table
CREATE TABLE IF NOT EXISTS rooms (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price_per_night INTEGER NOT NULL,
  capacity INTEGER NOT NULL,
  size VARCHAR(50),
  image_url VARCHAR(500),
  amenities TEXT[] DEFAULT '{}',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create availability table
CREATE TABLE IF NOT EXISTS availability (
  id BIGSERIAL PRIMARY KEY,
  room_id BIGINT REFERENCES rooms(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(room_id, date)
);

-- Create reservations table
CREATE TABLE IF NOT EXISTS reservations (
  id BIGSERIAL PRIMARY KEY,
  room_id BIGINT REFERENCES rooms(id),
  guest_name VARCHAR(255) NOT NULL,
  guest_email VARCHAR(255) NOT NULL,
  guest_phone VARCHAR(20),
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  number_of_guests INTEGER NOT NULL,
  special_requests TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create newsletter subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  unsubscribed_at TIMESTAMP
);

-- Insert sample room data
INSERT INTO rooms (name, description, price_per_night, capacity, size, amenities) VALUES
  ('Luxury Suite', 'Spacious suite with king bed, marble bathroom, and garden view', 450, 3, '45 sqm', '{"King bed","Marble bathroom","Premium linens","Air conditioning","Free WiFi","Flat-screen TV","Minibar","Daily housekeeping"}'),
  ('Ocean View Room', 'Premium room featuring panoramic ocean views and private balcony', 550, 4, '55 sqm', '{"King bed + sofa bed","Private balcony","Ocean view","Marble bathroom","Free WiFi","Entertainment system","Coffee maker","24-hour room service"}'),
  ('Presidential Suite', 'Ultra-luxury suite with living area, jacuzzi, and exclusive amenities', 850, 5, '85 sqm', '{"King bedroom + guest room","Living area","Jacuzzi bathtub","Steam shower","Full kitchen","Private workspace","Personalized service","VIP amenities"}'),
  ('Garden Villa', 'Private villa with direct garden access and outdoor shower', 650, 4, '70 sqm', '{"King bed","Garden access","Outdoor shower","Indoor/outdoor living","Fireplace","Premium amenities","Garden patio","Private entrance"}');

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_reservations_email ON reservations(guest_email);
CREATE INDEX IF NOT EXISTS idx_reservations_check_in ON reservations(check_in);
CREATE INDEX IF NOT EXISTS idx_availability_room_date ON availability(room_id, date);
CREATE INDEX IF NOT EXISTS idx_contact_created ON contact_messages(created_at);

-- Enable RLS (Row Level Security) if needed
ALTER TABLE rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE availability ENABLE ROW LEVEL SECURITY;

-- Create policies for public access to rooms (read-only)
CREATE POLICY "Enable read access for all users" 
  ON rooms FOR SELECT 
  USING (true);

-- Create policies for contact message submissions
CREATE POLICY "Enable insert access for contact messages"
  ON contact_messages FOR INSERT
  WITH CHECK (true);

-- Create policies for newsletter subscriptions
CREATE POLICY "Enable insert access for newsletter"
  ON newsletter_subscriptions FOR INSERT
  WITH CHECK (true);

-- Create policies for reservation submissions
CREATE POLICY "Enable insert access for reservations"
  ON reservations FOR INSERT
  WITH CHECK (true);

-- Create policies for availability (read-only for users)
CREATE POLICY "Enable read access for availability"
  ON availability FOR SELECT
  USING (true);

-- Create functions for updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_rooms_updated_at BEFORE UPDATE ON rooms
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_reservations_updated_at BEFORE UPDATE ON reservations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
