import { useState } from "react";

const packages = [
  {
    id: 1,
    title: "Hunza & Skardu",
    duration: "8 Days / 7 Nights",
    price: "PKR 35,500/-",
    image: "public/Hunza.jpg",
    description:`
Embark on a breathtaking journey to the northern jewels of Pakistan — Hunza & Skardu. From the serene valleys of Hunza to the majestic landscapes of Skardu, this 8-day adventure is perfect for nature lovers, photography enthusiasts, and anyone seeking peace and adventure.
</br>

✅ What's Included:
- Private AC Transport (Coaster/Hiace)
- Hotel Accommodation (Twin/Triple Sharing)
- Breakfast & Dinner (7 Meals)
- Local Sightseeing Tours
- Professional Tour Guide
- Bonfire Night (Skardu)
- Basic First Aid

❌ What's Not Included:
- Lunch & Personal Meals
- Entry Tickets (Forts, Parks, Lakes)
- Personal Shopping
- Porters for Luggage
- Tips/Gratuities

📅 Day-wise Itinerary:

**Day 1:** Departure from Islamabad – Drive to Chilas via Naran or Besham – Overnight stay in Chilas  
**Day 2:** Depart for Hunza Valley – Short stops at Rakaposhi View Point, Attabad Lake – Overnight in Hunza  
**Day 3:** Explore Hunza – Visit Altit & Baltit Forts, Passu Cones, and Hussaini Suspension Bridge – Overnight stay in Hunza  
**Day 4:** Leave for Skardu via the scenic route – Photo stops along the way – Overnight stay in Skardu  
**Day 5:** Visit Shangrila Resort & Upper Kachura Lake – Free time in local bazaar – Overnight in Skardu  
**Day 6:** Full-day excursion to Deosai National Park & Sheosar Lake – Return by evening  
**Day 7:** Start journey back to Chilas – Overnight stay in Chilas  
**Day 8:** Return to Islamabad – End of the memorable tour  

🎒 What to Pack:
- CNIC (compulsory)
- Warm clothing & hiking shoes
- Camera/Power Bank
- Personal water bottle & snacks

✨ A perfect blend of adventure, heritage, and luxury — let De Silk Tours make your trip unforgettable!
`,
  },
  {
    id: 2,
    title: "Astore/Minimarg & Deosai",
    duration: "6 Days / 5 Nights",
    price: "PKR 42,500/-",
    image: "public/Deosai.jpg",
    description:`
Explore the untouched beauty of Northern Pakistan with our Astore, Minimarg, and Deosai tour. This 6-day journey offers a perfect blend of adventure, serenity, and scenic landscapes. From lush green valleys to the world's second highest plateau, this tour is crafted for nature lovers and explorers.

🗓️ **Day-Wise Itinerary:**
- **Day 1:** Departure from Islamabad – Night stay in Astore
- **Day 2:** Explore Astore Valley – Visit Rama Lake
- **Day 3:** Drive to Minimarg (subject to NOC) – Sightseeing & photography
- **Day 4:** Full-day trip to the majestic Deosai Plains – Sheosar Lake & wildlife exploration
- **Day 5:** Return to Skardu – Explore local bazaar (if time permits)
- **Day 6:** Drive back to Islamabad

✅ **Includes:**
- Comfortable transport (AC/Non-AC)
- 5 nights hotel stay (sharing basis)
- Daily breakfast & dinner
- Guided tours
- Jeep ride to Deosai

❌ **Excludes:**
- Lunch and personal snacks
- Entry tickets & NOC fees (if any)
- Personal shopping and tips
- Anything not mentioned in ‘includes’

✨ **Highlights:**
- Breathtaking views of the Deosai Plains
- Adventure ride to Minimarg (subject to permission)
- Scenic beauty of Rama Lake and Astore Valley
- Ideal for couples, groups, and solo travelers

Book now and embark on a journey to the roof of the world with De Silk Tours!`,
  },
  {
    id: 3,
    title: "Skardu Valley",
    duration: "6 Days / 5 Nights",
    price: "PKR 29,500/-",
    image: "public/skardu.jpg",
    description:`
Discover the breathtaking beauty of Skardu Valley — a land of towering mountains, crystal-clear lakes, and timeless culture. This 6-day adventure takes you deep into the heart of Gilgit-Baltistan, where you'll experience nature in its purest form.

🗓️ **Day-Wise Itinerary:**
- **Day 1:** Departure from Islamabad – Overnight stay in Chilas or Besham
- **Day 2:** Drive to Skardu via the stunning Karakoram Highway
- **Day 3:** Visit Shangrila Resort & Lower Kachura Lake – Sunset at Upper Kachura
- **Day 4:** Explore Shigar Valley, Shigar Fort & Cold Desert
- **Day 5:** Visit Satpara Lake – Free time for shopping or local sightseeing
- **Day 6:** Departure for Islamabad with beautiful memories

✅ **Includes:**
- AC/non-AC transport
- Hotel accommodation (sharing basis)
- Daily breakfast & dinner
- Jeep ride (if needed for off-road locations)
- Tour guide services

❌ **Excludes:**
- Lunch and personal expenses
- Entry tickets to forts/resorts
- Any additional sightseeing not mentioned
- Tips, shopping, and personal insurance

✨ **Highlights:**
- Breathtaking landscapes and valleys
- Shangrila Heaven on Earth Resort
- Shigar Fort — a blend of culture and history
- Beautiful lakes like Satpara and Kachura
- Cold desert adventure

Whether you're a nature enthusiast, a couple looking for a romantic getaway, or a group of friends seeking adventure — Skardu Valley has it all. Join De Silk Tours and create unforgettable memories in the north of Pakistan!`,
  },
  {
    id: 4,
    title: "Hunza & Khunjrab Pass",
    duration: "5 Days / 4 Nights",
    price: "PKR 25,999/-",
    image: "public/khunjrab.jpg",
    description:`
Embark on a scenic journey to the majestic Hunza Valley and the world’s highest paved international border – Khunjerab Pass. This 5-day tour is a perfect blend of culture, adventure, and breathtaking landscapes.

🗓️ **Day-Wise Itinerary:**
- **Day 1:** Departure from Islamabad/Lahore – Overnight stay in Naran or Chilas
- **Day 2:** Arrive in Hunza Valley – Visit Rakaposhi View Point & local sightseeing
- **Day 3:** Excursion to Khunjerab Pass (Pakistan-China Border) via Attabad Lake & Passu Cones
- **Day 4:** Visit Altit & Baltit Forts – Leisure time in Karimabad Market
- **Day 5:** Departure for home with memories of a lifetime

✅ **Tour Includes:**
- Comfortable transport (AC/non-AC depending on group)
- Hotel accommodation (twin/triple sharing)
- Daily breakfast & dinner
- Sightseeing as per itinerary
- Professional guide assistance

❌ **Tour Excludes:**
- Entry tickets (forts/lakes/resorts)
- Lunch and snacks
- Jeep charges (if required)
- Personal shopping and tips

✨ **Highlights:**
- Khunjerab Pass at 15,397 ft above sea level
- Serene Attabad Lake boat ride
- Iconic Passu Cones & Gojal Valley views
- Cultural exploration of historic forts
- Hunza's warm hospitality and organic cuisine

From awe-inspiring mountains to rich cultural heritage, this tour is ideal for nature lovers, families, and photography enthusiasts. Travel with De Silk Tours and experience the unmatched charm of Hunza & Khunjerab like never before!
`,
  },
  {
    id: 5,
    title: "Fairy Meadows & Beyal Camp",
    duration: "5 Days / 4 Nights",
    price: "PKR 25,999/-",
    image: "public/fairy.jpg",
    description: `
Escape into one of the most enchanting landscapes in the world — Fairy Meadows. Nestled beneath the majestic Nanga Parbat, this tour takes you through lush green meadows, alpine forests, and panoramic mountain views with a chance to camp under the stars near the “Killer Mountain.”

🗓️ **Day-Wise Itinerary:**
- **Day 1:** Departure from Islamabad/Lahore – Overnight stay in Chilas/Naran
- **Day 2:** Arrival at Raikot Bridge – Jeep ride to Tattu Village – Trek to Fairy Meadows (approx. 3-4 hours) – Camp overnight
- **Day 3:** Trek to Beyal Camp for stunning views of Nanga Parbat – Return to Fairy Meadows for overnight stay
- **Day 4:** Trek down to Tattu – Jeep to Raikot – Overnight stay in Chilas
- **Day 5:** Return journey home via Naran/Babusar Top

✅ **Tour Includes:**
- Transport (Coaster/Grand Cabin/Car depending on group)
- Jeep from Raikot Bridge to Tattu Village
- Accommodation (Camp/Hut on sharing basis)
- Daily breakfast and dinner
- Guided trekking experience
- Basic medical and emergency support

❌ **Tour Excludes:**
- Personal trekking gear
- Lunch and snacks
- Porter services
- Any sightseeing or activity not mentioned

✨ **Highlights:**
- Breathtaking views of Nanga Parbat (8,126 m)
- Camping in Fairy Meadows — among the world’s top camping sites
- Moderate-level trekking experience to Beyal Camp
- Star-gazing nights, bonfires, and nature photography

Whether you're an adventure seeker or nature enthusiast, this journey offers a surreal and unforgettable experience. Discover the magic of Fairy Meadows with De Silk Tours — where dreams meet mountains.
`,
  },
  {
    id: 6,
    title: "Neelum Valley/ Ratti Gali Lake/ Taobat",
    duration: "5 Days / 4 Nights",
    price: "PKR 25,999/-",
    image: "public/ratigali.jpg",
    description:`Explore the enchanting beauty of Azad Kashmir with our Neelum Valley, Ratti Gali Lake, and Taobat tour. This 5-day journey offers lush green valleys, glacial rivers, and one of Pakistan’s most scenic alpine lakes. Perfect for nature lovers and photography enthusiasts.

**Inclusions:**
- Luxury Transport (Coaster / Hiace)
- 4 Nights Hotel Accommodation (Keran / Sharda / Taobat)
- Breakfast & Dinner (Daily)
- Jeep Ride to Ratti Gali Lake
- Bonfire Night (Weather Permitting)
- Experienced Guide

**Exclusions:**
- Entry Tickets (Where applicable)
- Lunch, Snacks & Personal Expenses
- Porter charges during hikes

**Itinerary:**
- **Day 1:** Departure from Islamabad – Reach Keran, night stay at riverside hotel
- **Day 2:** Transfer to Sharda – Jeep to Ratti Gali Basecamp – Optional hike to Ratti Gali Lake – Return & stay at Sharda
- **Day 3:** Departure to Taobat – explore scenic beauty and wooden villages – Night stay at Taobat
- **Day 4:** Leisure day in Taobat or short trek to nearby viewpoints
- **Day 5:** Return journey to Islamabad with sightseeing stops

This tour is a perfect blend of adventure, serenity, and cultural richness. Book now and reconnect with nature like never before!`,
  },
  {
    id: 7,
    title: "Kashmir/Arang Kel & Taobat",
    duration: "4 Days / 3 Nights",
    price: "PKR 22,999/-",
    image: "public/neelum.jpg",
    description:`Experience the breathtaking beauty of Azad Kashmir with our exclusive Arang Kel and Taobat tour. A perfect escape into nature, this 4-day journey takes you through lush green meadows, snow-covered peaks, and charming wooden villages along the Neelum River.

**Inclusions:**
- Comfortable Transport (Coaster / Hiace)
- 3 Nights Hotel Accommodation (Sharda / Taobat)
- Daily Breakfast & Dinner
- Cable Car to Arang Kel
- Bonfire & Music Night (Subject to weather)
- Professional Guide

**Exclusions:**
- Entry Tickets (If any)
- Lunch, Snacks, and Personal Shopping
- Horse riding or porters in Arang Kel

**Itinerary:**
- **Day 1:** Departure from Islamabad – Reach Sharda by evening – Hotel check-in & dinner
- **Day 2:** Visit Arang Kel via cable car – Explore the picturesque meadow – Return to Sharda or continue to Taobat
- **Day 3:** Explore Taobat village – Visit the riverbanks and wooden houses – Free time to relax and enjoy
- **Day 4:** Return to Islamabad with scenic photo stops en route

This tour is ideal for families, couples, and explorers seeking a peaceful getaway in the heart of Kashmir. Reserve your seat now and uncover the hidden gems of the Neelum Valley!`,
  },
  {
    id: 8,
    title: "Kumrat/Jahaz-banda & Katora Lake",
    duration: "4 Days / 3 Nights",
    price: "PKR 22,999/-",
    image: "public/Katora.jpg",
    description:`Embark on an adventurous journey to one of Pakistan’s most scenic valleys – Kumrat. This 4-day tour offers a perfect blend of nature, hiking, waterfalls, and alpine lakes surrounded by lush green landscapes.

**Inclusions:**
- Luxury Transport (Coaster / Hiace)
- 3 Nights Tent or Hotel Accommodation (Kumrat / Jahaz Banda)
- Local 4x4 Jeep Ride to Jahaz Banda
- Guided Hike to Katora Lake
- Daily Breakfast & Dinner
- Campfire & Traditional Night (Weather Permitting)
- Tour Guide & Trip Management

**Exclusions:**
- Personal trekking gear
- Entry fees (if any)
- Porter charges during hike
- Lunch, snacks, and drinks

**Itinerary:**
- **Day 1:** Departure from Islamabad – Reach Thal/Kumrat – Riverside camping & dinner
- **Day 2:** 4x4 jeep ride to Jahaz Banda – Sightseeing & overnight stay in camps
- **Day 3:** Early morning trek to the beautiful Katora Lake – Enjoy serene views – Return to Jahaz Banda
- **Day 4:** Drive back to Islamabad with memories of mountains, meadows, and waterfalls

Explore the hidden jewel of Khyber Pakhtunkhwa and witness the unspoiled beauty of nature. Perfect for adventure seekers, hikers, and nature lovers. Book your slot now!`,
  },
  {
    id: 9,
    title: "Kumrat Valley",
    duration: "3 Days / 2 Nights",
    price: "PKR 15,999/-",
    image: "public/Kumrat.jpg",
    description:`Experience the raw and untouched beauty of Kumrat Valley, a hidden gem in Khyber Pakhtunkhwa. This 3-day trip is perfect for nature enthusiasts, offering riverside camping, pine forests, and refreshing waterfalls.

**Inclusions:**
- Private or Group Transport (Hiace / Coaster)
- 2 Nights Tent or Hotel Accommodation (Thal or Kumrat)
- Visit to Panjkora River, Kumrat Forest, Kala Chashma, and Do Kala
- Guided local exploration
- Daily Breakfast & Dinner
- Bonfire and cultural night (subject to weather)
- Basic first aid and tour management

**Exclusions:**
- Entry tickets (if applicable)
- Jeep charges (if needed)
- Personal expenses & snacks
- Hiking gear or camping essentials

**Itinerary:**
- **Day 1:** Departure from Islamabad/Lahore – Arrival in Kumrat – Explore Kumrat Forest – Riverside camping
- **Day 2:** Sightseeing tour – Kala Chashma, Do Kala, and Thal Bazar – Photography and cultural experience
- **Day 3:** Return journey back to Islamabad/Lahore

Reconnect with nature in the peaceful valleys of Kumrat. Whether you’re a photographer, camper, or looking for a quick nature escape, this tour promises unforgettable views and serenity.`,
  },
  {
    id: 10,
    title: "Naran & Babusar Top",
    duration: "3 Days / 2 Nights",
    price: "PKR 15,999/-",
    image: "public/Babusar.jpg",
    description:`Escape to the majestic Kaghan Valley with our Naran & Babusar Top tour. This 3-day trip is a perfect blend of scenic landscapes, alpine lakes, and panoramic mountain passes, ideal for families, friends, or solo travelers.

**Inclusions:**
- Luxury transport (Coaster / Hiace depending on group size)
- 2 Nights hotel accommodation in Naran
- Breakfast and Dinner included
- Sightseeing of Naran Bazaar, Saif-ul-Mulook Lake & Babusar Top
- Entry passes (where applicable)
- Basic tour guide and management services

**Exclusions:**
- Jeep ride to Saif-ul-Mulook Lake (if road is inaccessible for vans)
- Personal expenses (lunch, snacks, shopping)
- Any extra activity not mentioned in the itinerary

**Itinerary:**
- **Day 1:** Departure from Islamabad/Lahore – Drive through Hazara Motorway – Reach Naran – Hotel check-in – Explore Naran Bazaar
- **Day 2:** Early morning visit to Lake Saif-ul-Mulook – After breakfast, journey to Babusar Top via Lulusar Lake and Batakundi – Return to hotel
- **Day 3:** Breakfast – Visit Kunhar River viewpoint – Start journey back to Islamabad/Lahore

Explore emerald lakes, breathe in the fresh mountain air, and take in some of the most awe-inspiring views of Pakistan on this unforgettable journey to the heart of Kaghan Valley.`,
  },
  {
    id: 11,
    title: "Neelum Valley & Arang Kel",
    duration: "3 Days / 2 Nights",
    price: "PKR 15,999/-",
    image: "public/arangkel.jpg",
    description:`Embark on a breathtaking journey to the paradise-like Neelum Valley and the majestic meadows of Arang Kel. This 3-day adventure offers a perfect escape into lush green valleys, crystal-clear rivers, and serene mountain views.

**Inclusions:**
- Comfortable transport (Coaster / Hiace)
- 2 Nights hotel/guesthouse accommodation (Keran/Sharda)
- Breakfast and Dinner included
- Local tour guide and trip management
- Hiking support to Arang Kel
- Sightseeing of Keran, Sharda, and Arang Kel

**Exclusions:**
- Jeep ride (if needed)
- Personal expenses (lunch, snacks, porter charges)
- Anything not mentioned in inclusions

**Itinerary:**
- **Day 1:** Departure from Islamabad/Lahore – Reach Muzaffarabad – Drive along the Neelum River – Visit Keran – Overnight stay in Sharda
- **Day 2:** Early morning visit to Sharda – Hike or chairlift to Arang Kel (approx. 1-1.5 hour hike) – Explore the stunning village of Arang Kel – Return to Sharda
- **Day 3:** Breakfast – Visit nearby viewpoints – Departure back to Islamabad/Lahore with sightseeing stops

Whether you're a nature lover or looking for a peaceful retreat, this tour to Neelum Valley & Arang Kel promises an unforgettable experience filled with scenic beauty, tranquility, and cultural richness.`,
  },
  {
    id: 12,
    title: "Neelum Valley & Ratti Gali Lake",
    duration: "3 Days / 2 Nights",
    price: "PKR 15,999/-",
    image: "public/neelum.jpg",
    description:`Experience the unmatched natural beauty of Neelum Valley and the alpine wonder of Ratti Gali Lake on this 3-day, 2-night adventure. From lush valleys to crystal-clear glacial lakes, this tour is perfect for nature lovers and photography enthusiasts.

**Inclusions:**
- Comfortable transport (Coaster / Hiace)
- 2 nights accommodation (Keran/Sharda)
- Breakfast and Dinner included
- Local tour guide and trip coordinator
- Sightseeing of Keran, Sharda, and Ratti Gali Base Camp

**Exclusions:**
- Jeep ride to Ratti Gali Lake (mandatory)
- Personal expenses (lunch, snacks, porter charges)
- Entry tickets and any activity fees
- Anything not mentioned in inclusions

**Itinerary:**
- **Day 1:** Departure from Islamabad/Lahore – Drive through Muzaffarabad – Visit Keran and Sharda – Overnight stay in Sharda
- **Day 2:** Early breakfast – Jeep ride to Ratti Gali Base Camp – Short hike to Ratti Gali Lake – Explore and enjoy the scenic lake – Return to Sharda
- **Day 3:** Breakfast – Visit local viewpoints – Return journey with sightseeing en route – Reach Islamabad/Lahore at night

This tour offers a perfect mix of relaxation and exploration in the lap of northern Pakistan’s natural beauty. Ratti Gali Lake is a sight to behold, with its turquoise waters nestled between snow-capped peaks — a bucket-list destination for every traveler.`,
  },
  {
    id: 13,
    title: "Swat/Malam Jabba & Kalam",
    duration: "3 Days / 2 Nights",
    price: "PKR 15,999/-",
    image: "public/malamjabba.jpg",
    description:"this is the Description of the Swat/Malam Jabba & Kalam Tour",
  },
  {
    id: 14,
    title: "Sharan Forest",
    duration: "2 Days / 1 Nights",
    price: "PKR 12,999/-",
    image: "public/sharan.jpg",
    description:`Escape into the heart of nature with our 2-day tour to **Sharan Forest**, a hidden gem in the Kaghan Valley known for its dense pine forests, fresh air, and untouched wilderness. This peaceful retreat is ideal for camping lovers and nature explorers.

**Inclusions:**
- AC transport (Hiace/Coaster)
- 1-night camp accommodation or wooden hut (twin/triple sharing)
- Jeep ride from Paras to Sharan
- Tour guide services
- Bonfire and light music (subject to weather)

**Exclusions:**
- Meals (lunch/dinner)
- Personal trekking gear
- Entry tickets if any
- Anything not mentioned in inclusions

**Itinerary:**

**Day 1:**
- Departure from Islamabad early morning
- Short stopovers for breakfast (self-paid)
- Reach Paras and transfer to jeeps for Sharan Forest
- Arrival at campsite, check-in and settle
- Explore the forest trails, optional hike to Manshi Top
- Evening bonfire and group activities
- Overnight stay in tents or huts

**Day 2:**
- Breakfast at campsite
- Free time to explore or relax in the forest
- Return to Paras by jeep and start journey back
- Arrival in Islamabad by evening

Experience the raw beauty of the forest, cool climate, and tranquil environment. Sharan is perfect for families, groups, and adventurers looking for a peaceful, green escape.`,
  },
  {
    id: 15,
    title: "Shogran Siri/Paye",
    duration: "2 Days / 1 Nights",
    price: "PKR 12,999/-",
    image: "public/shogran.jpg",
    description: `Embark on a serene getaway to the scenic hill station of **Shogran**, nestled in the Kaghan Valley, followed by a thrilling jeep ride to the breathtaking **Siri Paye Meadows**. This 2-day tour is ideal for those seeking nature, peace, and adventure in a short span.

**Inclusions:**
- Luxury AC transport (Hiace/Coaster)
- 1-night hotel accommodation in Shogran (twin/triple sharing)
- Jeep ride to Siri Paye
- Tour guide services
- Bonfire (weather dependent)

**Exclusions:**
- Personal expenses
- Lunch/Dinner
- Entry tickets
- Anything not mentioned in inclusions

**Itinerary:**

**Day 1:**
- Departure from Islamabad early morning
- Breakfast on the way (self-paid)
- Arrival in Shogran by noon, hotel check-in
- Free time to explore surroundings or rest
- Evening jeep ride to Siri Paye Meadows
- Return to Shogran and enjoy bonfire (if weather allows)
- Overnight stay at hotel

**Day 2:**
- Breakfast at the hotel
- Optional short hike or relax at the hotel
- Check-out and begin return journey
- Arrival back in Islamabad by evening

Shogran and Siri Paye offer a refreshing retreat surrounded by pine forests, alpine meadows, and stunning mountain views – perfect for a weekend escape from city life.`,
  },
  {
    id: 16,
    title: "Sharan Forest / Shogran Siri/Paye",
    duration: "1 Day",
    price: "PKR 4800/-",
    image: "public/siripaye.jpg",
    description:`Escape into the heart of the Kaghan Valley with this scenic 1-day tour to **Sharan Forest** and **Shogran Siri/Paye Meadows**. Ideal for a weekend getaway or nature retreat, this journey offers unmatched serenity, dense pine forests, and panoramic mountain views.

**Inclusions:**
- Luxury transport (Coaster / Hiace)
- Services of a professional tour guide
- Photography assistance
- Basic first aid and trip management

**Exclusions:**
- Lunch, snacks & personal expenses
- Jeep ride to Siri Paye (approx. PKR 4,000 per jeep)
- Entry tickets (if applicable)

**Itinerary:**
- **Early Morning:** Departure from Islamabad/Lahore
- **Mid Morning:** Arrival in Kiwai – Short stop at waterfall
- **Late Morning:** Travel to Shogran and onward jeep ride to Siri Paye (optional)
- **Afternoon:** Visit lush green Siri & Paye Meadows – enjoy photography and hiking
- **Evening:** Return from Siri Paye – visit Sharan Forest (subject to time)
- **Night:** Depart back for Islamabad/Lahore

Perfect for nature lovers and photography enthusiasts, this trip offers tranquil moments, scenic vistas, and a refreshing break from city chaos — all in just one day!`,
  },
  {
    id: 17,
    title: "Ganga Choti",
    duration: "1 Day",
    price: "PKR 3800/-",
    image: "public/ganga.jpg",
    description:`Embark on an adventurous one-day trek to **Ganga Choti**, one of the most scenic peaks in the **Bagh District of Azad Kashmir**, standing at 9,989 ft above sea level. This tour is perfect for thrill-seekers, hikers, and nature photographers looking for a quick and stunning escape into the mountains.

**Inclusions:**
- Comfortable transport (Hiace/Coaster)
- Services of a professional tour guide
- Basic first aid & trip management
- Photography assistance

**Exclusions:**
- Meals, snacks & beverages
- Entry tickets (if any)
- Personal hiking equipment

**Itinerary:**
- **Early Morning:** Departure from Islamabad/Lahore
- **Morning:** Breakfast en route – Short stop in Kohala
- **Late Morning:** Arrival in Sudhan Gali – Begin hike to Ganga Choti (moderate trek of 1.5–2 hours)
- **Afternoon:** Reach summit – Explore surroundings, enjoy breathtaking views, and photography
- **Evening:** Descend back to Sudhan Gali and begin return journey
- **Night:** Arrival back in Islamabad/Lahore

This tour offers majestic panoramic views of the **Himalayas**, peaceful nature trails, and a chance to disconnect from the urban rush — all in just a single day. Ideal for both beginners and experienced hikers.`,
  },
  {
    id: 18,
    title: "Swat & Malam Jabba",
    duration: "1 Day",
    price: "PKR 4800/-",
    image: "public/swat.jpg",
    description:`Embark on a scenic one-day adventure to the captivating Swat Valley and the famous ski resort of **Malam Jabba**. This tour is perfect for nature lovers, families, and those looking to escape into the serene beauty of northern Pakistan.

**Inclusions:**
- Air-conditioned transport (Hiace/Coaster)
- Services of professional driver and local guide
- Stopovers for sightseeing & photography
- Basic first aid

**Exclusions:**
- Meals and refreshments
- Chairlift/zipline tickets at Malam Jabba
- Personal expenses

**Itinerary:**
- **Early Morning:** Departure from Islamabad/Peshawar
- **Morning:** Breakfast en route, continue journey along the scenic Swat River
- **Late Morning:** Reach **Malam Jabba** – explore the ski resort, take part in optional activities like zipline or chairlift
- **Afternoon:** Visit **Fizagat Park** or explore Mingora city for local shopping or snacks
- **Evening:** Drive back to Islamabad/Peshawar
- **Night:** Expected return by late evening

Enjoy a refreshing getaway surrounded by snow-capped peaks, green valleys, and a touch of adventure at Malam Jabba. Ideal for day explorers and quick mountain escapes.` ,
  },
  {
    id: 19,
    title: "Mushkpuri Top",
    duration: "1 Day",
    price: "PKR 4500/-",
    image: "public/mushkpuri.jpg",
    description:`Experience the breathtaking beauty of the **Mushkpuri Top**, located at an elevation of around 9,200 feet in the **Galiyat region near Nathia Gali**. This one-day tour is perfect for adventure lovers, couples, and solo travelers seeking a refreshing nature escape.

**Inclusions:**
- Comfortable transport (Hiace/Coaster)
- Services of an experienced tour guide
- Photography & trekking support
- Basic first aid

**Exclusions:**
- Meals and personal snacks
- Entry tickets (if applicable)
- Personal trekking gear or jackets

**Itinerary:**
- **Early Morning:** Departure from Islamabad/Lahore
- **Morning:** Breakfast stop at Murree Expressway
- **Late Morning:** Arrival in Nathia Gali – Begin the scenic trek to Mushkpuri Top (approx. 2-hour hike)
- **Afternoon:** Reach the top – Explore lush green meadows, panoramic views of Kashmir & Murree hills, and take photos
- **Evening:** Begin descent and drive back
- **Night:** Return to Islamabad/Lahore

This tour is ideal for nature lovers and photography enthusiasts. The trail is surrounded by pine forests, flowers, and cool mountain breeze — a truly refreshing day out in Pakistan's northern beauty.`,
  },
  {
    id: 20,
    title: "Muzaffarabad & Pir Chanasi",
    duration: "1 Day",
    price: "PKR 4800/-",
    image: "public/pirchanasi.jpg",
    description:`Experience a breathtaking journey to **Muzaffarabad**, the capital of Azad Kashmir, and the scenic viewpoint of **Pir Chanasi**, known for its panoramic views and serene landscapes. This one-day escape is perfect for nature lovers and peace seekers.

**Inclusions:**
- Comfortable air-conditioned transport (Hiace/Coaster)
- Guided sightseeing tour
- Stopovers for photography and refreshments
- Basic first aid

**Exclusions:**
- Meals and snacks
- Entry fees (if applicable)
- Personal expenses

**Itinerary:**
- **Early Morning:** Departure from Islamabad
- **Morning:** Scenic drive along the **Neelum River** to reach Muzaffarabad
- **Midday:** Visit landmarks like **Red Fort**, **Domel Point**, and local markets
- **Afternoon:** Drive up to **Pir Chanasi** (approx. 1.5-hour drive) – enjoy majestic views of the valley and lush meadows
- **Late Afternoon:** Return journey begins with optional tea/snack break
- **Evening:** Arrival back in Islamabad

This tour offers a perfect blend of natural beauty, culture, and peaceful mountain air. A great choice for weekend travelers and short getaways.`,
  },
];

export default function TourPackages() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <section id="tours" className="py-16 bg-white text-gray-800 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-10">Tour Packages</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary mb-2">{pkg.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{pkg.duration}</p>
                <p className="text-sm text-primary font-bold mb-3">{pkg.price}</p>
                <button
                  onClick={() => setSelectedPackage(pkg)}
                  className="px-4 py-2 text-sm bg-accent text-primary font-semibold rounded-full hover:opacity-90 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPackage && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
    <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-lg p-6">
      {/* Close Button */}
      <button
        onClick={() => setSelectedPackage(null)}
        className="absolute top-3 right-3 text-gray-600 text-2xl hover:text-red-500"
      >
        &times;
      </button>

      {/* Image */}
      <img
        src={selectedPackage.image}
        alt={selectedPackage.title}
        className="w-full h-48 object-cover rounded mb-4"
      />

      {/* Tour Title & Details */}
      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
        {selectedPackage.title}
      </h3>
      <p className="text-sm md:text-base text-gray-600 mb-1">
        Duration: {selectedPackage.duration}
      </p>
      <p className="text-sm md:text-base text-primary font-semibold mb-4">
        Price: {selectedPackage.price}
      </p>

      {/* Tour Description */}
      <pre className="text-gray-700 text-sm md:text-base whitespace-pre-wrap">
        {selectedPackage.description}
      </pre>

      {/* Close Button */}
      <div className="mt-6 text-center">
        <button
          onClick={() => setSelectedPackage(null)}
          className="px-6 py-2 bg-accent text-primary font-semibold rounded-full hover:opacity-90 transition"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

    </section>
  );
}
