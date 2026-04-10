# Areca-Nut Corridor - Setup Guide

Welcome to your luxury villa website! This guide will help you complete the setup and integrate all services.

## 1. Image Setup

Your website is ready to display images. You need to add your villa images to these folders:

### Required Image Directories and Files:

```
public/
├── logo.png (already added)
├── images/
│   ├── hero/
│   │   ├── hero-1.jpg (Villa hero/main image)
│   │   ├── hero-2.jpg (Secondary villa image)
│   │   └── hero-3.jpg (Tertiary villa image)
│   ├── rooms/
│   │   ├── room-1.png (Luxury Suite)
│   │   ├── room-2.png (Ocean View Room)
│   │   ├── room-3.png (Presidential Suite)
│   │   └── room-4.jpeg (Garden Villa)
│   ├── gallery/
│   │   ├── gallery-1.png through gallery-16.jpg (General gallery images)
│   ├── living-room/
│   │   └── living-room-1.png
│   ├── kitchen/
│   │   └── kitchen-1.png
│   ├── bedroom/
│   │   └── bedroom-1.png
│   ├── bathroom/
│   │   └── bathroom-1.png
│   ├── gym/
│   │   └── gym-1.jpeg
│   ├── dining/
│   │   └── dining-1.png
│   └── outside/
│       └── outside-1.png
```

## 2. Supabase Setup

### Step 1: Create a Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in
3. Create a new project
4. Wait for the project to be provisioned

### Step 2: Get Your Credentials
1. In your Supabase project, go to **Settings > API**
2. Copy:
   - `Project URL` → This becomes `NEXT_PUBLIC_SUPABASE_URL`
   - `anon key` → This becomes `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role key` → This becomes `SUPABASE_SERVICE_KEY` (keep this secret!)

### Step 3: Set Environment Variables
Add these to your `.env.local` file in your project root:

```
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_KEY=your_service_role_key_here
```

### Step 4: Run Database Migration
1. Go to your Supabase project SQL Editor
2. Copy the entire contents of `/scripts/setup-database.sql`
3. Paste into the SQL Editor
4. Click "Run" or "Execute"
5. Wait for the migration to complete

## 3. EmailJS Setup (Optional - for email notifications)

If you want to send confirmation emails:

1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up for a free account
3. Follow their setup guide to:
   - Verify an email address (YOUR_EMAIL)
   - Add an email service (Gmail, etc.)
   - Create an email template
4. Get your:
   - Service ID
   - Template ID
   - Public Key

Add to `.env.local`:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 4. Implement Backend Integration

Once Supabase is set up, uncomment the code in these files to enable database operations:

- `/app/api/contact/route.ts` - Contact form submissions
- `/app/api/newsletter/route.ts` - Newsletter subscriptions
- `/app/api/rooms/route.ts` - Room data queries

The commented sections show where to use the Supabase client.

## 5. Customization

### Update Contact Information
Edit `/components/Footer.tsx` and `/app/contact/page.tsx`:
- Address
- Phone number
- Email address

### Update Room Pricing and Details
Edit `/components/sections/RoomsSection.tsx` and `/app/rooms/page.tsx`

### Update Colors
Edit `/app/globals.css` to change the color scheme:
- `--primary: #1B4B3A` (Dark forest green)
- `--accent: #D4AF37` (Gold)

## 6. Deployment

Your website is ready to deploy to Vercel:

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Add environment variables in Vercel project settings
4. Deploy!

## 7. Features Currently Working

✓ Fully responsive design
✓ Beautiful homepage with 12 sections
✓ Room showcase page
✓ Full gallery with lightbox
✓ Reservation form (frontend only until database setup)
✓ Contact form (frontend only until database setup)
✓ Newsletter signup (frontend only until database setup)
✓ About and dedicated pages
✓ Mobile-optimized navigation
✓ Smooth animations and transitions

## 8. Next Steps

1. **Add your villa images** to the public/images folders
2. **Set up Supabase** and run the database migration
3. **Uncomment database code** in API routes
4. **Update contact information** with your actual details
5. **Deploy** to Vercel
6. **Optional**: Set up EmailJS for email notifications

## Support

For questions about:
- **Supabase**: Visit [supabase.com/docs](https://supabase.com/docs)
- **Next.js**: Visit [nextjs.org](https://nextjs.org)
- **EmailJS**: Visit [emailjs.com/docs](https://www.emailjs.com/docs)

---

Your luxury villa website is built with modern technologies and best practices. Enjoy!
