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
- Breakfast & Dinner (7 Dinner and 8 Breakfast)
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
- Jeeps

📅 Day-wise Itinerary:

** DAY 0
-DEPARTURE FROM LAHORE AND TRAVEL VIA MOTORWAY.
-SHORT BREAK (KALAR KAHAR (BHERA) SERVICE AREA
-SHORT BREAK AT MIA GEE HOTEL GT ROAD
-PICKUP MEMBERS FROM ISLAMABAD : 4:30 TO 5:00 AM
DAY 1
-BREAKFAST : 9:00 AM (BESHAM/BALAKOT)
-CONTINUE THE JOURNEY AND TRAVEL VIA KKH ROAD BESHAM
OR NARAN
-VISIT DASU - SUMAR NALA
-VISIT - KAWAI - NARAN/KAGAN - LULLUSAR LAKE - BABUSAR TOP
(IF OPEN)
-ARRIVAL IN CHILLAS AT 8:00 PM
-DINNER 9:00 PM
-OVERNIGHT STAY IN CHILLAS
𝐃𝐚𝐲 𝟐
-BREAKFAST 8:00 AM
-DEPARTURE FOR SKARDU AT 9:00 AM
-SHORT STAY IN ROUTE AT NANGA PARBAT VIEW POINT
-CONTINUE THE JOURNEY FOR SKARDU
-SHORT STAY AT ASTAK NALA
-ARRIVAL IN SKARDU AND VISIT SHANGRILLA LAKE AND
UPPER KACHURA LAKE
(IF TIME ALLOWS, OTHERWISE WILL BE VISITED ON RETURN)
-TRANSFER TO HOTEL
-DINNER 8:00 PM
-OVERNIGHT STAY IN SKARDU
FOOD: BREAKFAST + DINNER
𝐃𝐚𝐲 𝟑
-BREAKFAST 8:00 AM
-DEPARTURE TOWARDS MANTHOKA WATERFALL
-VISIT SARFRANGA COLD DESERT
-VISIT SHIGAR VALLEY AND SHIGAR FORT
-DRIVE BACK TO SKARDU TILL EVENING
-DINNER 8:00 PM
-OVERNIGHT STAY IN SKARDU
FOOD: BREAKFAST + DINNER
DAY 4
-BREAKFAST 8:00 AM
-TRANSFER TO 4X4 JEEPS AND DEPARTURE
-VISIT DEOSAI NATIONAL PARK - SADPARA LAKE - ALI MALIK TOP
-KALA PANI - BHARA PANI - SHEOSAR LAKE (IF OPEN)
-VISIT BASHO VALLEY (OPTIONAL)
-SHORT STAY AT BASHO SUSPENSION BRIDGE. - SIGHTSEEING AT
BASHO WATERFALL
-MOVE TOWARDS SULTANABAD BASHO
-REACH SULTANABAD VISIT BASHO RIVER, CAMEL ROCK AND
BASHO FOREST
-OVERNIGHT STAY IN SKARDU
-FOOD: BREAKFAST + DINNER
DAY 5
-BREAKFAST 8:00 AM
-DEPARTURE FOR HUNZA
-ARRIVAL IN NOMAL
-TRANSFER TO JEEPS 4X4
-TRAVEL TOWARDS NALTAR VALLEY
-VISIT SKI RESORT & SNOW LEOPARD POINT
-VISIT NALTAR ZERO POINT (WINTER POINT)
-VISIT BLUE LAKE - SATGRANGI LAKE (SUMMER POINT)
BACK TO NOMAL AND TRAVEL TOWARD HUNZA
-OVERNIGHT STAY IN HUNZA
FOOD: BREAKFAST + DINNER 
DAY 6
-BREAKFAST 8:00 AM
-DEPARTURE TOWARDS KHUNJERAB AT 9:00 AM
-WHOLE DAY TRIP TO VISIT ATTABAD LAKE, GULMIT, PASSU,
HUSSAINI BRIDGE, SOST
-VISIT KHUNJERAB PASS PAK CHINA BORDER (IN WINTERS 4X4)
-VISIT KARIMABAD BAZAAR
-DINNER 9:00 PM
-OVERNIGHT STAY IN HUNZA
FOOD: BREAKFAST + DINNER
DAY 7
-BREAKFAST 8:00 AM
-VISIT ALTIT FORT AND ROYAL GARDEN HUNZA
-SHORT STAY AT RAKAPOSHI VIEWPOINT
-VISIT NARAN BAZAAR - BABUSAR TOP (SHORT BREAK IF OPEN)
-DEPARTURE FOR CHILLAS/NARAN
-DINNER AT 8:00 PM
-OVERNIGHT STAY AT CHILLAS/NARAN
FOOD: BREAKFAST + DINNER
DAY 8
-BREAKFAST 8:00 AM
-DEPARTURE FOR ISLAMABAD AT 9:00 AM
-ARRIVAL IN ISLAMABAD AT 6:00 PM
-ARRIVAL IN LAHORE AT 12:00 AM
-END OF SERVICES
(+- 2/3 ℎ𝑜𝑢𝑟𝑠 𝑑𝑢𝑒 𝑡𝑜 𝑎𝑛𝑦 𝑢𝑛𝑐𝑒𝑟𝑡𝑎𝑖𝑛 )
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

🗓 *Day-Wise Itinerary:*
- ** Day 0 – Pickup from Lahore
-Pickup from Thokar Niaz Baig, Lahore at 10:30 PM
-Travel overnight towards Islamabad
𝐃𝐚𝐲 𝟏:

- Departure from Islamabad 4:30 AM 
- Breakfast at Balakot 
- Reach Naran 
- Short stay at Lulusar Lake
- Continue the journey towards Babusar Pass
- Reach Chilas 
- Dinner 
- Night stay in Chilas 

𝐃𝐚𝐲 𝟐:
- Breakfast at the Hotel 
- Depart from Hotel at 08:30:00 AM 
- Reach Astore 
- Transfer to the jeep and drive towards Rama Meadows, passing through the beautiful valleys and scenic landscape
- Visit the beautiful Rama Lake and spend some time exploring the area
- Dinner 
- Night stay at Rama Meadows 
Camping at Rama Meadows

𝐃𝐚𝐲 𝟑:
- Breakfast at the Hotel 
- Depart for Deosai National Park, one of the highest plateaus in the world
- Explore the stunning landscapes, meadows, and wildlife of Deosai
- visit Sheosar lake 
- Back to Chilim Valley 
- Dinner 
- Night stay in Chilim Valley, Astore 
- Camping and Hoteling 

𝐃𝐚𝐲 𝟒:
- Breakfast at the Hotel 
- Depart for Minimarg, the last village of Pakistan before the Indian border
- Visit the village and explore its unique culture and way of life
- Head towards the base camp of Kargil and spend some time admiring the stunning views of the surrounding mountains
- Visit the famous Rainbow Lake of Minimarg, known for its incredible natural beauty and vibrant colors
- Return to Chilim in the evening or stay in the minimarg 
- Dinner & Night stay at Chilim / minimarg 
- Camping in the minimarg or chilim valley 

𝐃𝐚𝐲 𝟓:
- Depart for Islamabad via the Babusar, passing through the beautiful valleys and scenic landscape
- Short stay at Babusar top 
- Stop for lunch at Moon Restaurant in Besal Naran
- Continue the journey towards Naran 
- Night stay in Naran 

𝐃𝐚𝐲 𝟔:
- Breakfast at the Hotel 
- Departure for Islamabad  
- short stays on the way 
- Reach Islamabad 
- Arrive in Islamabad in the evening
- Departure from Islamabad 
- Reach islamabad late at night
✅ *Includes:*
- Comfortable transport (AC/Non-AC)
- 5 nights hotel stay (sharing basis)
- Daily breakfast & dinner
- Guided tours
- Jeeps

❌ *Excludes:*
- Lunch and personal snacks
- Entry tickets & NOC fees (if any)
- Personal shopping and tips
- Anything not mentioned in ‘includes’

✨ *Highlights:*
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

🗓 *Day-Wise Itinerary:*
- Day 00: Lahore – Islamabad
• Meet and greet guests.
• Departure towards Islamabad.
• Short stay at Bhera/Mian G.
• Reach Islamabad.

Day 01: Islamabad – naran – Chilas 
• Pick Participants from Islamabad.
• Move towards Naran.
• Breakfast at Balakot.
• Continue drive towards Chilas.
• Short stay at Naran and Babusar Top.
• Reach Chilas. Dinner and overnight stay at Hotel. (1st Night stay)

Day 02: Chilas – Jaglot – Stak Nala – Shangrilla – Upper Kachura – Skardu
• Breakfast at hotel.
• Move towards Skardu.
• Stopover at Nanga Parbat view point.
• Stopover at Mountain Junction Point.
• Continue drive towards Skardu valley.
• Stopover at Astak Nala.
• Continue traveling towards Shangrila Skardu.
• Visit Shangrila Resort.
• Visit Upper Kachora.
• Move towards Hotel.
• Reach Skardu & transfer to Hotel.
• Enjoy Dinner & Overnight stay at Hotel. (2nd Night stay)

Day 03: Skardu – Basho Valley – Sultanabad Basho
• Breakfast at Hotel.
• Drive towards Basho Valley.
• Short stay at Basho Suspension Bridge.
• Sightseeing at Basho Waterfall.
• Move towards Sultanabad Basho.
• Visit Heart Rock on the way towards Sultanabad.
• Reach Sultanabad, Visit Basho River, Camel Rock, and Basho Forest.
• Back to Skardu city.
• Visit Skardu Bazar for shopping.
• Overnight stay in Hotel. (3rd Night stay)

Day 04: Skardu – Manthokha Waterfall – Cold Desert – Shigar Valley
• Breakfast at Hotel.
• Move towards Manthokha Waterfall.
• Visit Mehdiabad Valley, Sermik Valley.
• Reach Manthokha.
• Move towards Shiger Valley.
• Stopover at Bab E Shigar.
• Visit Cold Desert Shigar.
• Visit Shigar Fort.
• Visit Amburiq Mosque.
• Explore Shigar Valley.
• Move back towards Hotel.
• Enjoy BBQ Dinner & Bonfire.
• Overnight stay at Hotel. (4th Night stay)

Day 05: Skardu – Chilas
• Breakfast at hotel.
• Departure towards Besham.
• Stopover at Astak Nala.
• Continue drive towards Chilas.
• Reach Chilas. Dinner & Overnight stay at hotel. (5th Night stay)

Day 06: Chilas – Islamabad – Lahore
• Breakfast at Hotel.
• Departure towards Home.
• Travel all day towards Islamabad/Lahore.
• Consecutive stopovers for restrooms & refueling.
• Reach Islamabad & Drop Guests.
• Stopover at Bhera interchange.
• Reach Lahore & end of services.
✅ *Includes:*
- AC/non-AC transport
- Hotel accommodation (sharing basis)
- Daily breakfast & dinner
- Jeep ride (if needed for off-road locations)
- Tour guide services

❌ *Excludes:*
- Lunch and personal expenses
- Entry tickets to forts/resorts
- Any additional sightseeing not mentioned
- Tips, shopping, and personal insurance

✨ *Highlights:*
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

🗓 *Day-Wise Itinerary:*
- Day 1:
•	Departure From PSO Petrol Pump Thoker Niaz Baig Near Daewoo Terminal Lahore at 09:00 pm at Day0.
•	Departure From Daewoo Terminal 26 Number Islamabad at 03:00 am.
•	Departure for "Gonar Farm, Chilas"
•	Breakfast at Balakot /Besham09:00 am.
•	Short Stays and sightseeing (Kiwai WaterFall, Babusar Top).
•	Arrival at "Gonar Farm, Chilas" at 08:00 pm.
•	Night stay and Dinner at "Gonar Farm, Chilas".
Day 2:
•	Breakfast call at 07:00 am.
•	Departure for "Hunza" at 08:00 am.
•	Short Stays and sightseeing (Rakaposhi view Point, Nanga Parbat View Point, Three Mountain Junction).
•	Sightseeing  , Photography on the Way.
•	Hunza Arrival at 02:00 pm.
•	Check-In to Hotel 
•	Drive to Altit Fort and Karimabad Market.
•	Back to Hotel at 07:00 pm.
•	Night stay and Dinner at hotel.
Day 3:
•	Breakfast call at 07:00 am.
•	Departure for "Khunjerab Top" at 08:00 am.
•	Short Stays at Attabad Tunnels, Attabad Lake, Hussaini Bridge, Passu Cones and Sost.
•	Sightseeing on the way.
•	Arrival at Khunjerab Top at 02:00 pm.
•	Explore Khunjarab Pass.
•	Back to Attabad lake for Night Stay at 08:00 pm.
•	BBQ, Bonfire and Dinner at Campo De Berg.
Day 4:
•	Breakfast call at 07:00 am.
•	Departure for Baltit Fort at 09:00 am.
•	Arrival at Baltit Fort at 09:30 am.
•	Exploring Baltit Fort till 11:00 am.
•	Departure for Naran at 11:15 am.
•	Arrival at Naran  at 09:00 pm.
•	Night stay and Dinner at Hotel.
Day 5:
•	   Breakfast call at 08:30 am.
•	   Departure for Islamabad at 09:30 am.
•	   Short Stays on the way for Sightseeing.
•	   Arrival at Islamabad at 07:00 pm and Lahore at 11:30 pm (IN-SHAH-ALLAH).
✅ *Tour Includes:*
- Comfortable transport (AC/non-AC depending on group)
- Hotel accommodation (twin/triple sharing)
- Daily breakfast & dinner
- Sightseeing as per itinerary
- Professional guide assistance

❌ *Tour Excludes:*
- Entry tickets (forts/lakes/resorts)
- Lunch and snacks
- Jeep charges (if required)
- Personal shopping and tips

✨ *Highlights:*
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

🗓 *Day-Wise Itinerary:*
- Day 1:
•	Departure From PSO Petrol Pump Thoker Niaz Baig Near Daewoo Terminal Lahore at 09:00 pm at Day0.
•	Departure From Daewoo Terminal 26 Number Islamabad at 03:00 am.
•	Departure for "Gonar Farm, Chilas" via Besham or Naran.
•	Breakfast at Besham Or Balakot 09:00 am.
•	Short Stays and sightseeing (Sumar Nala, Rainbow Abshar, Kiwai WaterFall, Babusar Top).
•	Arrival at "Gonar Farm, Chilas" at 08:00 pm.
•	Night stay and Dinner at "Gonar Farm, Chilas".
Day 2:
•	Departure for Fairy Meadows at 8:00 am.
•	Arrival at Raikot at 10:00am shifting to Jeeps.
•	Arrival at Tattu Village at 1:00 pm and Start Trekking Towards Fairy Meadows.
•	Reached Fairy Meadows at 4:00 pm.
•	Night stay and Dinner at Camps in Fairy Meadows.
Day 3:
•	Breakfast call at 07:00 am.
•	Departure for Nanga Parbat Base Camp at 7:30 am.
•	Sightseeing, Photography on the Way.
•	Reach Beyal Camp at 10:30 am.
•	Short stay there.
•	Hike towards Nanga Parbat Base Camp at 11:30 am.
•	Reach at base camp till 02:00 pm.
•	Short Stay there.
•	Back to Fairy Meadows till 07:00 pm.
•	Bonfire, Dinner and Over Night Stay in Fairy Meadows.
 
Day 4:
•	Breakfast call at 07:00 am.
•	Visit Fairy Meadows till 11:00 am.
•	Start Trekking Back to Tattu Village at 12:00 pm.
•	Reached Village at 03:00 pm.
•	Back to Raikot on Jeeps at 06:00 pm.
•	Drive towards Gunar Farm.
•	Reach Hotel till 07:30 pm.
•	Dinner and Over Night Stay in Chillas/Naran.
Day 5:
•	Breakfast call at 08:00 am.
•	 Departure for Islamabad at 09:00 am.
•	 Short Stays on the way for Sightseeing.
•	 Arrival at Islamabad at 07:00 pm and Lahore at 11:30
✅ *Tour Includes:*
- Transport (Coaster/Grand Cabin/Car depending on group)
- Jeep from Raikot Bridge to Tattu Village
- Accommodation (Camp/Hut on sharing basis)
- Daily breakfast and dinner
- Guided trekking experience
- Basic medical and emergency support

❌ *Tour Excludes:*
- Personal trekking gear
- Lunch and snacks
- Porter services
- Any sightseeing or activity not mentioned

✨ *Highlights:*
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

*Inclusions:*
- Luxury Transport (Coaster / Hiace)
- 4 Nights Hotel Accommodation (Keran / Sharda / Taobat)
- Breakfast & Dinner (Daily)
- Bonfire Night (Weather Permitting)
- Experienced Guide

*Exclusions:*
- Entry Tickets (Where applicable)
- Lunch, Snacks & Personal Expenses
- Porter charges during hikes
- Jeep Ride to Ratti Gali Lake
*Itinerary:*
- Day 01 
Departure from lhr 10:30 pm ( Day 00)
Departure from Islamabad: 4:30 am
Continue drive to Kashmir
Breakfast at Muzzaffarabad
Visit Loc View point 
Short Stay at Authmuqam 
Reach Sharda for Night stay 
Wadi Resort Sharda 

Day 02
Breakfast 8:00 am
Leave for Taobutt on Jeeps
Stopover at JamGarh Waterfall
Visit Taobutt Riverside
Visit Taobutt Bala ( Roadside Hiking 30-40 minuts)
Night Stay Taobutt 
Corner View/Neelum View

Day 03
Breakfast 7:00 am
Travel Back To Kel
Cable car ride + 30 minuts Hiking to Reach Arangkel 
Visit Arangkel Surroundings
Night Stay Arangkel
Chinar/2nd Home 

Day 04
Early Wakeup call 
Reach Back to Sharda till 8:00 am 
Breakfast at Sharda 
Travel to  Rattigalli lake 10:00 am
2:00 hours Jeep Ride from Dowarian 
1 Hour Hike or Horse Ride to Reach Lake ahead of Basecamp Jeep Stop.
Visit Queen of Lakes Rattigalli 
Reach back to Keran in Night
Night Stay Keran 
Highland/Twinhill

Day 05
Breakfast  8:00 am
Travel To Lahore
Visit  Kutton waterfall
Stopover at Dhani Waterfall 
Lunch Break on the Way 
Arrival at Islamabad in evening and Lahore in night 
Note : Plan can be Altered According to weather and Road Conditions
This tour is a perfect blend of adventure, serenity, and cultural richness. Book now and reconnect with nature like never before!`,
  },
  {
    id: 7,
    title: "Kashmir/Arang Kel & Taobat",
    duration: "4 Days / 3 Nights",
    price: "PKR 22,999/-",
    image: "public/neelum.jpg",
    description:`Experience the breathtaking beauty of Azad Kashmir with our exclusive Arang Kel and Taobat tour. A perfect escape into nature, this 4-day journey takes you through lush green meadows, snow-covered peaks, and charming wooden villages along the Neelum River.

*Inclusions:*
- Comfortable Transport (Coaster / Hiace)
- 3 Nights Hotel Accommodation (Sharda / Taobat)
- Daily Breakfast & Dinner
- Cable Car to Arang Kel
- Bonfire & Music Night (Subject to weather)
- Professional Guide

*Exclusions:*
- Entry Tickets (If any)
- Lunch, Snacks, and Personal Shopping
- Jeep & Horse riding or porters in Arang Kel

*Itinerary:*
- Day 0 – Departure from Lahore
Night departure from Lahore (Thokar Niaz Baig)
Overnight travel to Islamabad
Karachi clients can join from Lahore or Islamabad
Day 1 – Muzaffarabad to Sharda
Pickup from Islamabad at 4:00 AM
Breakfast stop at Muzaffarabad
Visit Dhani Waterfall
Tea break at Kutton Waterfall
Continue drive along Neelum River to Sharda
Sightseeing in Sharda
Night stay at hotel in Sharda
Day 2 – Taobat & Halmat Jeep Safari
Breakfast at 7:00 AM
Shift to 4x4 jeeps
Depart for Taobat via scenic route
Visit Jamgarh Waterfall
Explore Upper Taobat & Halmat
Return in evening
Night stay at hotel in Taobat
Day 3 – Kel & Arang Kel Trek
Breakfast at 8:00 AM
Jeep ride to Kel
Doli ride across river
Trek to Arang Kel (approx. 40 minutes)
Explore the village and surrounding beauty
Return to Sharda
Night stay in hotel at Sharda
Day 4 – Return to Lahore
Breakfast and check-out
Stop at Kutton Waterfall (1.5 hours)
Drive back to Islamabad
Arrival in Lahore by night

This tour is ideal for families, couples, and explorers seeking a peaceful getaway in the heart of Kashmir. Reserve your seat now and uncover the hidden gems of the Neelum Valley!`,
  },
  {
    id: 8,
    title: "Kumrat/Jahaz-banda & Katora Lake",
    duration: "4 Days / 3 Nights",
    price: "PKR 22,999/-",
    image: "public/Katora.jpg",
    description:`Embark on an adventurous journey to one of Pakistan’s most scenic valleys – Kumrat. This 4-day tour offers a perfect blend of nature, hiking, waterfalls, and alpine lakes surrounded by lush green landscapes.

*Inclusions:*
- Luxury Transport (Coaster / Hiace)
- 3 Nights Tent or Hotel Accommodation (Kumrat / Jahaz Banda)
- Local 4x4 Jeep Ride to Jahaz Banda
- Guided Hike to Katora Lake
- Daily Breakfast & Dinner
- Campfire & Traditional Night (Weather Permitting)
- Tour Guide & Trip Management

*Exclusions:*
- Personal trekking gear
- Entry fees (if any)
- Porter charges during hike
- Lunch, snacks, and drinks

*Itinerary:*
- Trip Schedule:
Day 01:
Departure from Lahore
Pick-ups from Islamabad
Travel towards Upper Dir
Breakfast at Shringal (time permitting)
Rest stop at Thal
Travel to Kumrat Valley
Hotel Check-in & Free time to explore Panjkora River
Night Stay in Huts (Camps optional)

Day 02:
Breakfast
Visit Kumrat Waterfall (Abshar)
Jeep ride to Takki Banda
Hike to Jahaz Banda (approx. 3 hours)
Dinner &  Night Stay in Huts (Camps optional)

Day 03:
Breakfast
Free time to explore Jahaz Banda
Optional visit to Kund Banda
Trek to Katora Lake (3–4 hrs one side)
Return by evening
Night Stay in Huts (Camps optional)

Day 04:
Breakfast
Hike back to Takki Banda
Jeep transfer to Thal
Departure at 11:59 AM
Return via Lower Dir / Chakdara
Arrival at Islamabad & Lahore
Explore the hidden jewel of Khyber Pakhtunkhwa and witness the unspoiled beauty of nature. Perfect for adventure seekers, hikers, and nature lovers. Book your slot now!`,
  },
  {
    id: 9,
    title: "Kumrat Valley",
    duration: "3 Days / 2 Nights",
    price: "PKR 15,999/-",
    image: "public/Kumrat.jpg",
    description:`Experience the raw and untouched beauty of Kumrat Valley, a hidden gem in Khyber Pakhtunkhwa. This 3-day trip is perfect for nature enthusiasts, offering riverside camping, pine forests, and refreshing waterfalls.

*Inclusions:*
- Private or Group Transport (Hiace / Coaster)
- 2 Nights Tent or Hotel Accommodation (Thal or Kumrat)
- Visit to Panjkora River, Kumrat Forest, Kala Chashma, and Do Kala
- Guided local exploration
- Daily Breakfast & Dinner
- Bonfire and cultural night (subject to weather)
- Basic first aid and tour management

*Exclusions:*
- Entry tickets (if applicable)
- Jeep charges (if needed)
- Personal expenses & snacks
- Hiking gear or camping essentials

*Itinerary:*
- Day 00:
Lahore Departure Point
Timings: 9:00 PM on ( Thursday Night ) from Lahore
Location: PSO Pump Thokar Niaz baig near new Daewoo Terminal, Lahore
Pickup Point & Timings For Islamabad
Timings:04:30AM (Friday Morning) from Islamabad
Location: Daewoo Terminal 26 number
Day 01:
Pickup members from ISB at 03:30 AM
Departure for kumrat
Short stay at Katlang
Breakfast at Timergara
Arrival to Thal Village: 3:00 pm
Transfer to Jeeps
Arrival at camping sight
Night stay at Camps
Night stay at camps at Kumrat Jungle

Day 02:
Breakfast call at 7:00am
Transfer to jeeps
Visit:
- Kumrat Valley
- Kala Chashma
- Kumrat Jungle
- Panjkora River
- Two Abshar
Musical Night
Dinner & Over Night at Camp
Day 03:
Breakfast & Drive Back to Thal.
Transfer to Buses: 9:00 AM
Departure and Arrival to Islamabad 8:00 PM
Arrival to Lahore at 12:00 AM
Reconnect with nature in the peaceful valleys of Kumrat. Whether you’re a photographer, camper, or looking for a quick nature escape, this tour promises unforgettable views and serenity.`,
  },
  {
    id: 10,
    title: "Naran & Babusar Top",
    duration: "3 Days / 2 Nights",
    price: "PKR 15,999/-",
    image: "public/Babusar.jpg",
    description:`Escape to the majestic Kaghan Valley with our Naran & Babusar Top tour. This 3-day trip is a perfect blend of scenic landscapes, alpine lakes, and panoramic mountain passes, ideal for families, friends, or solo travelers.

*Inclusions:*
- Luxury transport (Coaster / Hiace depending on group size)
- 2 Nights hotel accommodation in Naran
- Breakfast and Dinner included
- Sightseeing of Naran Bazaar, Saif-ul-Mulook Lake & Babusar Top
- Basic tour guide and management services

*Exclusions:*
- Jeep ride to Saif-ul-Mulook Lake (if road is inaccessible for vans)
- Personal expenses (lunch, snacks, shopping)
- Entry passes (where applicable)
- Any extra activity not mentioned in the itinerary

*Itinerary:*
- *Day 1:* Departure from Islamabad/Lahore – Drive through Hazara Motorway – Reach Naran – Hotel check-in – Explore Naran Bazaar
- *Day 2:* Early morning visit to Lake Saif-ul-Mulook – After breakfast, journey to Babusar Top via Lulusar Lake and Batakundi – Return to hotel
- *Day 3:* Breakfast – Visit Kunhar River viewpoint – Start journey back to Islamabad/Lahore

Explore emerald lakes, breathe in the fresh mountain air, and take in some of the most awe-inspiring views of Pakistan on this unforgettable journey to the heart of Kaghan Valley.`,
  },
  {
    id: 11,
    title: "Neelum Valley & Arang Kel",
    duration: "3 Days / 2 Nights",
    price: "PKR 15,999/-",
    image: "public/arangkel.jpg",
    description:`Embark on a breathtaking journey to the paradise-like Neelum Valley and the majestic meadows of Arang Kel. This 3-day adventure offers a perfect escape into lush green valleys, crystal-clear rivers, and serene mountain views.

*Inclusions:*
- Comfortable transport (Coaster / Hiace)
- 2 Nights hotel/guesthouse accommodation (Keran/Sharda)
- Breakfast and Dinner included
- Local tour guide and trip management
- Hiking support to Arang Kel
- Sightseeing of Keran, Sharda, and Arang Kel

*Exclusions:*
- Jeep ride (if needed)
- Personal expenses (lunch, snacks, porter charges)
- Anything not mentioned in inclusions

*Itinerary:*
- *Day 1:* Departure from Islamabad/Lahore – Reach Muzaffarabad – Drive along the Neelum River – Visit Keran – Overnight stay in Sharda
- *Day 2:* Early morning visit to Sharda – Hike or chairlift to Arang Kel (approx. 1-1.5 hour hike) – Explore the stunning village of Arang Kel – Return to Sharda
- *Day 3:* Breakfast – Visit nearby viewpoints – Departure back to Islamabad/Lahore with sightseeing stops

Whether you're a nature lover or looking for a peaceful retreat, this tour to Neelum Valley & Arang Kel promises an unforgettable experience filled with scenic beauty, tranquility, and cultural richness.`,
  },
  {
    id: 12,
    title: "Neelum Valley & Ratti Gali Lake",
    duration: "3 Days / 2 Nights",
    price: "PKR 15,999/-",
    image: "public/neelum.jpg",
    description:`Experience the unmatched natural beauty of Neelum Valley and the alpine wonder of Ratti Gali Lake on this 3-day, 2-night adventure. From lush valleys to crystal-clear glacial lakes, this tour is perfect for nature lovers and photography enthusiasts.

*Inclusions:*
- Comfortable transport (Coaster / Hiace)
- 2 nights accommodation (Keran/Sharda)
- Breakfast and Dinner included
- Local tour guide and trip coordinator
- Sightseeing of Keran, Sharda, and Ratti Gali Base Camp

*Exclusions:*
- Jeep ride to Ratti Gali Lake (mandatory)
- Personal expenses (lunch, snacks, porter charges)
- Entry tickets and any activity fees
- Anything not mentioned in inclusions

*Itinerary:*
- *Day 1:* Departure from Islamabad/Lahore – Drive through Muzaffarabad – Visit Keran and Sharda – Overnight stay in Sharda
- *Day 2:* Early breakfast – Jeep ride to Ratti Gali Base Camp – Short hike to Ratti Gali Lake – Explore and enjoy the scenic lake – Return to Sharda
- *Day 3:* Breakfast – Visit local viewpoints – Return journey with sightseeing en route – Reach Islamabad/Lahore at night

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
    description:`Escape into the heart of nature with our 2-day tour to *Sharan Forest*, a hidden gem in the Kaghan Valley known for its dense pine forests, fresh air, and untouched wilderness. This peaceful retreat is ideal for camping lovers and nature explorers.

*Inclusions:*
- AC transport (Hiace/Coaster)
- 1-night camp accommodation or wooden hut (twin/triple sharing)
- Jeep ride from Paras to Sharan
- Tour guide services
- Bonfire and light music (subject to weather)

*Exclusions:*
- Meals (lunch/dinner)
- Personal trekking gear
- Entry tickets if any
- Anything not mentioned in inclusions

*Itinerary:*

*Day 1:*
- Departure from Islamabad early morning
- Short stopovers for breakfast (self-paid)
- Reach Paras and transfer to jeeps for Sharan Forest
- Arrival at campsite, check-in and settle
- Explore the forest trails, optional hike to Manshi Top
- Evening bonfire and group activities
- Overnight stay in tents or huts

*Day 2:*
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
    description: `Embark on a serene getaway to the scenic hill station of *Shogran, nestled in the Kaghan Valley, followed by a thrilling jeep ride to the breathtaking **Siri Paye Meadows*. This 2-day tour is ideal for those seeking nature, peace, and adventure in a short span.

*Inclusions:*
- Luxury AC transport (Hiace/Coaster)
- 1-night hotel accommodation in Shogran (twin/triple sharing)
- Jeep ride to Siri Paye
- Tour guide services
- Bonfire (weather dependent)

*Exclusions:*
- Personal expenses
- Lunch/Dinner
- Entry tickets
- Anything not mentioned in inclusions

*Itinerary:*

*Day 1:*
- Departure from Islamabad early morning
- Breakfast on the way (self-paid)
- Arrival in Shogran by noon, hotel check-in
- Free time to explore surroundings or rest
- Evening jeep ride to Siri Paye Meadows
- Return to Shogran and enjoy bonfire (if weather allows)
- Overnight stay at hotel

*Day 2:*
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
    description:`Escape into the heart of the Kaghan Valley with this scenic 1-day tour to *Sharan Forest* and *Shogran Siri/Paye Meadows*. Ideal for a weekend getaway or nature retreat, this journey offers unmatched serenity, dense pine forests, and panoramic mountain views.

*Inclusions:*
- Luxury transport (Coaster / Hiace)
- Services of a professional tour guide
- Photography assistance
- Basic first aid and trip management

*Exclusions:*
- Lunch, snacks & personal expenses
- Jeep ride to Siri Paye (approx. PKR 4,000 per jeep)
- Entry tickets (if applicable)

*Itinerary:*
- *Early Morning:* Departure from Islamabad/Lahore
- *Mid Morning:* Arrival in Kiwai – Short stop at waterfall
- *Late Morning:* Travel to Shogran and onward jeep ride to Siri Paye (optional)
- *Afternoon:* Visit lush green Siri & Paye Meadows – enjoy photography and hiking
- *Evening:* Return from Siri Paye – visit Sharan Forest (subject to time)
- *Night:* Depart back for Islamabad/Lahore

Perfect for nature lovers and photography enthusiasts, this trip offers tranquil moments, scenic vistas, and a refreshing break from city chaos — all in just one day!`,
  },
  {
    id: 17,
    title: "Ganga Choti",
    duration: "1 Day",
    price: "PKR 3800/-",
    image: "public/ganga.jpg",
    description:`Embark on an adventurous one-day trek to *Ganga Choti, one of the most scenic peaks in the **Bagh District of Azad Kashmir*, standing at 9,989 ft above sea level. This tour is perfect for thrill-seekers, hikers, and nature photographers looking for a quick and stunning escape into the mountains.

*Inclusions:*
- Comfortable transport (Hiace/Coaster)
- Services of a professional tour guide
- Basic first aid & trip management
- Photography assistance

*Exclusions:*
- Meals, snacks & beverages
- Entry tickets (if any)
- Personal hiking equipment

*Itinerary:*
- *Early Morning:* Departure from Islamabad/Lahore
- *Morning:* Breakfast en route – Short stop in Kohala
- *Late Morning:* Arrival in Sudhan Gali – Begin hike to Ganga Choti (moderate trek of 1.5–2 hours)
- *Afternoon:* Reach summit – Explore surroundings, enjoy breathtaking views, and photography
- *Evening:* Descend back to Sudhan Gali and begin return journey
- *Night:* Arrival back in Islamabad/Lahore

This tour offers majestic panoramic views of the *Himalayas*, peaceful nature trails, and a chance to disconnect from the urban rush — all in just a single day. Ideal for both beginners and experienced hikers.`,
  },
  {
    id: 18,
    title: "Swat & Malam Jabba",
    duration: "1 Day",
    price: "PKR 4800/-",
    image: "public/swat.jpg",
    description:`Embark on a scenic one-day adventure to the captivating Swat Valley and the famous ski resort of *Malam Jabba*. This tour is perfect for nature lovers, families, and those looking to escape into the serene beauty of northern Pakistan.

*Inclusions:*
- Air-conditioned transport (Hiace/Coaster)
- Services of professional driver and local guide
- Stopovers for sightseeing & photography
- Basic first aid

*Exclusions:*
- Meals and refreshments
- Chairlift/zipline tickets at Malam Jabba
- Personal expenses

*Itinerary:*
- *Early Morning:* Departure from Islamabad/Peshawar
- *Morning:* Breakfast en route, continue journey along the scenic Swat River
- *Late Morning:* Reach *Malam Jabba* – explore the ski resort, take part in optional activities like zipline or chairlift
- *Afternoon:* Visit *Fizagat Park* or explore Mingora city for local shopping or snacks
- *Evening:* Drive back to Islamabad/Peshawar
- *Night:* Expected return by late evening

Enjoy a refreshing getaway surrounded by snow-capped peaks, green valleys, and a touch of adventure at Malam Jabba. Ideal for day explorers and quick mountain escapes.` ,
  },
  {
    id: 19,
    title: "Mushkpuri Top",
    duration: "1 Day",
    price: "PKR 4500/-",
    image: "public/mushkpuri.jpg",
    description:`Experience the breathtaking beauty of the *Mushkpuri Top, located at an elevation of around 9,200 feet in the **Galiyat region near Nathia Gali*. This one-day tour is perfect for adventure lovers, couples, and solo travelers seeking a refreshing nature escape.

*Inclusions:*
- Comfortable transport (Hiace/Coaster)
- Services of an experienced tour guide
- Photography & trekking support
- Basic first aid

*Exclusions:*
- Meals and personal snacks
- Entry tickets (if applicable)
- Personal trekking gear or jackets

*Itinerary:*
- *Early Morning:* Departure from Islamabad/Lahore
- *Morning:* Breakfast stop at Murree Expressway
- *Late Morning:* Arrival in Nathia Gali – Begin the scenic trek to Mushkpuri Top (approx. 2-hour hike)
- *Afternoon:* Reach the top – Explore lush green meadows, panoramic views of Kashmir & Murree hills, and take photos
- *Evening:* Begin descent and drive back
- *Night:* Return to Islamabad/Lahore

This tour is ideal for nature lovers and photography enthusiasts. The trail is surrounded by pine forests, flowers, and cool mountain breeze — a truly refreshing day out in Pakistan's northern beauty.`,
  },
  {
    id: 20,
    title: "Muzaffarabad & Pir Chanasi",
    duration: "1 Day",
    price: "PKR 4800/-",
    image: "public/pirchanasi.jpg",
    description:`Experience a breathtaking journey to *Muzaffarabad, the capital of Azad Kashmir, and the scenic viewpoint of **Pir Chanasi*, known for its panoramic views and serene landscapes. This one-day escape is perfect for nature lovers and peace seekers.

*Inclusions:*
- Comfortable air-conditioned transport (Hiace/Coaster)
- Guided sightseeing tour
- Stopovers for photography and refreshments
- Basic first aid

*Exclusions:*
- Meals and snacks
- Entry fees (if applicable)
- Personal expenses

*Itinerary:*
- *Early Morning:* Departure from Islamabad
- *Morning:* Scenic drive along the *Neelum River* to reach Muzaffarabad
- *Midday:* Visit landmarks like *Red Fort, **Domel Point*, and local markets
- *Afternoon:* Drive up to *Pir Chanasi* (approx. 1.5-hour drive) – enjoy majestic views of the valley and lush meadows
- *Late Afternoon:* Return journey begins with optional tea/snack break
- *Evening:* Arrival back in Islamabad

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
