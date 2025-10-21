import { useState } from "react";

const packages = [
  {
    id: 1,
    title: "Hunza & Skardu",
    duration: "8 Days / 7 Nights",
    price: "PKR 35,500/-",
    image: "/Hunza.jpg",
    description:
<div className="prose max-w-none prose-sm sm:prose lg:prose-lg xl:prose-xl text-gray-800 font-arial">
  <h2 className="!text-3xl !font-extrabold text-primary">Hunza & Skardu Tour Overview</h2>

  <p>
    <strong>Embark on a breathtaking journey</strong> to the northern jewels of Pakistan — Hunza & Skardu.
    From the serene valleys of Hunza to the majestic landscapes of Skardu, this 8-day adventure is perfect for nature lovers,
    photography enthusiasts, and anyone seeking peace and adventure.
  </p>

  <h3 className="!text-2xl !font-bold text-primary mt-8">✅ What's Included:</h3>
  <ul className="list-disc list-inside">
    <li>Private AC Transport (Coaster/Hiace)</li>
    <li>Hotel Accommodation (Twin/Triple Sharing)</li>
    <li>Breakfast & Dinner (7 Dinners and 8 Breakfasts)</li>
    <li>Local Sightseeing Tours</li>
    <li>Professional Tour Guide</li>
    <li>Bonfire Night (Skardu)</li>
    <li>Basic First Aid</li>
  </ul>

  <h3 className="!text-2xl !font-bold text-primary mt-8">❌ What's Not Included:</h3>
  <ul className="list-disc list-inside">
    <li>Lunch & Personal Meals</li>
    <li>Entry Tickets (Forts, Parks, Lakes)</li>
    <li>Personal Shopping</li>
    <li>Porters for Luggage</li>
    <li>Tips/Gratuities</li>
    <li>Jeeps</li>
  </ul>

  <h3 className="!text-2xl !font-bold text-primary mt-8">📅 Day-wise Itinerary</h3>
  <div className="space-y-6">
    {[
      {
        day: "Day 0",
        events: [
          "Departure from Lahore via Motorway",
          "Short breaks: Kalar Kahar / Bhera Service Area, Mia Gee Hotel GT Road",
          "Pickup from Islamabad: 4:30–5:00 AM",
        ],
      },
      {
        day: "Day 1",
        events: [
          "Breakfast at Besham/Balakot (9:00 AM)",
          "Travel via KKH Road or Naran",
          "Visit: Dasu, Sumar Nala, Lulusar Lake, Babusar Top (if open)",
          "Arrival in Chillas by 8:00 PM",
          "Dinner at 9:00 PM | Overnight in Chillas",
        ],
      },
      {
        day: "Day 2",
        events: [
          "Breakfast at 8:00 AM",
          "Departure for Skardu",
          "Visit: Nanga Parbat View Point, Astak Nala, Shangrilla & Kachura Lake",
          "Dinner at 8:00 PM | Overnight in Skardu",
        ],
      },
      {
        day: "Day 3",
        events: [
          "Breakfast at 8:00 AM",
          "Visit: Manthoka Waterfall, Sarfaranga Desert, Shigar Fort",
          "Return by evening | Dinner & Overnight in Skardu",
        ],
      },
      {
        day: "Day 4",
        events: [
          "4x4 Jeep Tour: Deosai National Park, Sadpara Lake, Sheosar Lake",
          "Optional: Basho Valley, Suspension Bridge, Basho Forest",
          "Overnight in Skardu",
        ],
      },
      {
        day: "Day 5",
        events: [
          "Visit Naltar Valley (Jeep): Ski Resort, Snow Leopard Point, Blue Lake",
          "Continue to Hunza | Overnight stay in Hunza",
        ],
      },
      {
        day: "Day 6",
        events: [
          "Full-day trip: Attabad Lake, Gulmit, Passu, Hussaini Bridge, Sost",
          "Visit Khunjerab Pass, Karimabad Bazaar",
          "Dinner & Overnight in Hunza",
        ],
      },
      {
        day: "Day 7",
        events: [
          "Visit: Altit Fort, Royal Garden, Rakaposhi Viewpoint",
          "Optional: Naran & Babusar Top (if open)",
          "Overnight in Chillas or Naran",
        ],
      },
      {
        day: "Day 8",
        events: [
          "Departure for Islamabad & Lahore",
          "Arrival in Islamabad: ~6:00 PM",
          "Arrival in Lahore: ~12:00 AM",
          "(*± 2–3 hours depending on road/weather conditions*)",
        ],
      },
    ].map(({ day, events }) => (
      <div key={day}>
        <h4 className="font-semibold text-lg text-primary">{day}</h4>
        <ul className="list-disc list-inside">
          {events.map((event, i) => (
            <li key={i}>{event}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>

  <h3 className="!text-2xl !font-bold text-primary mt-8">🎒 What to Pack:</h3>
  <ul className="list-disc list-inside">
    <li>CNIC (Compulsory)</li>
    <li>Warm Clothing & Hiking Shoes</li>
    <li>Camera / Power Bank</li>
    <li>Personal Water Bottle & Snacks</li>
  </ul>

  <p className="mt-6 text-lg font-bold text-primary">
    ✨ A perfect blend of adventure, heritage, and luxury — let De Silk Tours make your trip unforgettable!
  </p>
</div>

,
  },
  {
    id: 2,
    title: "Astore/Minimarg & Deosai",
    duration: "6 Days / 5 Nights",
    price: "PKR 42,500/-",
    image: "/Deosai.jpg",
    description:<div className="prose max-w-none prose-sm sm:prose lg:prose-lg xl:prose-xl text-gray-800 font-arial">
  <h2 className="text-primary font-bold">Astore, Minimarg & Deosai Tour Overview</h2>
  <p>
    Explore the untouched beauty of Northern Pakistan with our Astore, Minimarg, and Deosai tour.
    This 6-day journey offers a perfect blend of adventure, serenity, and scenic landscapes. 
    From lush green valleys to the world's second highest plateau, this tour is crafted for nature lovers and explorers.
  </p>

  <h3 className="mt-6 text-primary font-semibold">🗓 Day-Wise Itinerary:</h3>

  <h4 className="font-semibold text-gray-700">Day 0 – Pickup from Lahore</h4>
  <ul className="list-disc list-inside">
    <li>Pickup from Thokar Niaz Baig, Lahore at 10:30 PM</li>
    <li>Travel overnight towards Islamabad</li>
  </ul>

  <h4 className="font-semibold text-gray-700">Day 1:</h4>
  <ul className="list-disc list-inside">
    <li>Departure from Islamabad 4:30 AM</li>
    <li>Breakfast at Balakot</li>
    <li>Reach Naran</li>
    <li>Short stay at Lulusar Lake</li>
    <li>Continue towards Babusar Pass</li>
    <li>Reach Chilas</li>
    <li>Dinner & night stay in Chilas</li>
  </ul>

  <h4 className="font-semibold text-gray-700">Day 2:</h4>
  <ul className="list-disc list-inside">
    <li>Breakfast at the hotel</li>
    <li>Depart from hotel at 8:30 AM</li>
    <li>Reach Astore & transfer to jeep</li>
    <li>Drive to Rama Meadows</li>
    <li>Visit Rama Lake</li>
    <li>Dinner & camping at Rama Meadows</li>
  </ul>

  <h4 className="font-semibold text-gray-700">Day 3:</h4>
  <ul className="list-disc list-inside">
    <li>Breakfast at the hotel</li>
    <li>Visit Deosai National Park</li>
    <li>Explore landscapes, meadows, wildlife</li>
    <li>Visit Sheosar Lake</li>
    <li>Return to Chilim Valley</li>
    <li>Dinner & night stay in Chilim Valley</li>
  </ul>

  <h4 className="font-semibold text-gray-700">Day 4:</h4>
  <ul className="list-disc list-inside">
    <li>Breakfast at the hotel</li>
    <li>Depart for Minimarg</li>
    <li>Visit Rainbow Lake & Kargil base camp</li>
    <li>Return to Chilim / stay in Minimarg</li>
    <li>Dinner & night stay (camping or hotel)</li>
  </ul>

  <h4 className="font-semibold text-gray-700">Day 5:</h4>
  <ul className="list-disc list-inside">
    <li>Depart for Islamabad via Babusar</li>
    <li>Short stay at Babusar Top</li>
    <li>Lunch at Moon Restaurant, Besal Naran</li>
    <li>Continue journey to Naran</li>
    <li>Night stay in Naran</li>
  </ul>

  <h4 className="font-semibold text-gray-700">Day 6:</h4>
  <ul className="list-disc list-inside">
    <li>Breakfast at the hotel</li>
    <li>Depart for Islamabad</li>
    <li>Short scenic stops on the way</li>
    <li>Reach Islamabad in the evening</li>
    <li>Departure for Lahore (late night)</li>
  </ul>

  <h3 className="mt-6 text-primary font-semibold">✅ Includes:</h3>
  <ul className="list-disc list-inside">
    <li>Comfortable transport (AC/Non-AC)</li>
    <li>5 nights hotel stay (sharing basis)</li>
    <li>Daily breakfast & dinner</li>
    <li>Guided tours</li>
    <li>Jeeps for off-road locations</li>
  </ul>

  <h3 className="mt-6 text-primary font-semibold">❌ Excludes:</h3>
  <ul className="list-disc list-inside">
    <li>Lunch and personal snacks</li>
    <li>Entry tickets & NOC fees (if any)</li>
    <li>Personal shopping and tips</li>
    <li>Anything not mentioned in ‘includes’</li>
  </ul>

  <h3 className="mt-6 text-primary font-semibold">✨ Highlights:</h3>
  <ul className="list-disc list-inside">
    <li>Breathtaking views of the Deosai Plains</li>
    <li>Adventure ride to Minimarg (subject to permission)</li>
    <li>Scenic beauty of Rama Lake and Astore Valley</li>
    <li>Ideal for couples, groups, and solo travelers</li>
  </ul>

  <p className="mt-4 font-semibold text-gray-900">
    Book now and embark on a journey to the roof of the world with De Silk Tours!
  </p>
</div>,
  },
  {
    id: 3,
    title: "Skardu Valley",
    duration: "6 Days / 5 Nights",
    price: "PKR 29,500/-",
    image: "/skardu.jpg",
    description:<div className="prose max-w-none prose-sm sm:prose lg:prose-lg xl:prose-xl text-gray-800 font-[Arial]">
  <h2 className="text-primary font-bold">Skardu Valley Tour Overview</h2>
  <p>
    <strong>Discover the breathtaking beauty of Skardu Valley</strong> — a land of towering mountains, crystal-clear lakes, and timeless culture. This 6-day adventure takes you deep into the heart of Gilgit-Baltistan, where you'll experience nature in its purest form.
  </p>

  <h3 className="text-primary font-semibold">🗓 Day-Wise Itinerary:</h3>
  
  <h4 className="mt-4 font-semibold">Day 00: Lahore – Islamabad</h4>
  <ul className="list-disc list-inside">
    <li>Meet and greet guests</li>
    <li>Departure towards Islamabad</li>
    <li>Short stay at Bhera/Mian G</li>
    <li>Reach Islamabad</li>
  </ul>

  <h4 className="mt-4 font-semibold">Day 01: Islamabad – Naran – Chilas</h4>
  <ul className="list-disc list-inside">
    <li>Pick Participants from Islamabad</li>
    <li>Move towards Naran</li>
    <li>Breakfast at Balakot</li>
    <li>Short stay at Naran and Babusar Top</li>
    <li>Reach Chilas. Dinner and overnight stay at Hotel (1st Night)</li>
  </ul>

  <h4 className="mt-4 font-semibold">Day 02: Chilas – Jaglot – Stak Nala – Shangrila – Upper Kachura – Skardu</h4>
  <ul className="list-disc list-inside">
    <li>Breakfast at hotel</li>
    <li>Visit Nanga Parbat viewpoint & Mountain Junction Point</li>
    <li>Drive through Astak Nala to Skardu</li>
    <li>Visit Shangrila Resort & Upper Kachura Lake</li>
    <li>Transfer to hotel. Dinner & overnight stay (2nd Night)</li>
  </ul>

  <h4 className="mt-4 font-semibold">Day 03: Skardu – Basho Valley – Sultanabad Basho</h4>
  <ul className="list-disc list-inside">
    <li>Breakfast at hotel</li>
    <li>Drive to Basho Valley via Suspension Bridge</li>
    <li>Sightseeing at Basho Waterfall & Heart Rock</li>
    <li>Visit Basho River, Camel Rock, and Forest</li>
    <li>Return to Skardu city & shopping at Bazar</li>
    <li>Overnight stay in Hotel (3rd Night)</li>
  </ul>

  <h4 className="mt-4 font-semibold">Day 04: Skardu – Manthokha Waterfall – Cold Desert – Shigar Valley</h4>
  <ul className="list-disc list-inside">
    <li>Breakfast at hotel</li>
    <li>Visit Mehdiabad & Sermik Valleys</li>
    <li>Explore Manthokha Waterfall</li>
    <li>Visit Cold Desert, Shigar Fort & Amburiq Mosque</li>
    <li>BBQ Dinner & Bonfire at hotel (4th Night)</li>
  </ul>

  <h4 className="mt-4 font-semibold">Day 05: Skardu – Chilas</h4>
  <ul className="list-disc list-inside">
    <li>Breakfast at hotel</li>
    <li>Departure towards Besham via Astak Nala</li>
    <li>Reach Chilas. Dinner & overnight stay (5th Night)</li>
  </ul>

  <h4 className="mt-4 font-semibold">Day 06: Chilas – Islamabad – Lahore</h4>
  <ul className="list-disc list-inside">
    <li>Breakfast at hotel</li>
    <li>Departure towards Islamabad/Lahore</li>
    <li>Stopovers at rest points (Astak, Bhera)</li>
    <li>Drop off in Islamabad and Lahore</li>
  </ul>

  <h3 className="text-primary font-semibold">✅ What's Included:</h3>
  <ul className="list-disc list-inside">
    <li>AC/Non-AC transport</li>
    <li>Hotel accommodation (sharing basis)</li>
    <li>Daily breakfast & dinner</li>
    <li>Jeep ride (if needed for off-road locations)</li>
    <li>Tour guide services</li>
  </ul>

  <h3 className="text-primary font-semibold">❌ What's Not Included:</h3>
  <ul className="list-disc list-inside">
    <li>Lunch and personal expenses</li>
    <li>Entry tickets to forts/resorts</li>
    <li>Any additional sightseeing not mentioned</li>
    <li>Tips, shopping, and personal insurance</li>
  </ul>

  <h3 className="text-primary font-semibold">✨ Tour Highlights:</h3>
  <ul className="list-disc list-inside">
    <li>Breathtaking landscapes and valleys</li>
    <li>Shangrila "Heaven on Earth" Resort</li>
    <li>Shigar Fort — a blend of culture and history</li>
    <li>Beautiful lakes like Satpara and Kachura</li>
    <li>Cold desert adventure</li>
  </ul>

  <p>
    Whether you're a nature enthusiast, a couple looking for a romantic getaway, or a group of friends seeking adventure — Skardu Valley has it all. <strong>Join De Silk Tours</strong> and create unforgettable memories in the north of Pakistan!
  </p>
</div>
  },
  {
    id: 4,
    title: "Hunza & Khunjrab Pass",
    duration: "5 Days / 4 Nights",
    price: "PKR 25,999/-",
    image: "/khunjrab.jpg",
    description:<div className="prose max-w-none prose-sm sm:prose lg:prose-lg xl:prose-xl text-gray-800" style={{ fontFamily: 'Arial, sans-serif' }}>
  <p>
    <strong>Embark on a scenic journey</strong> to the majestic Hunza Valley and the world’s highest paved international border – Khunjerab Pass. This 5-day tour is a perfect blend of culture, adventure, and breathtaking landscapes.
  </p>

  <h3 className="text-primary font-bold">🗓 Day-Wise Itinerary:</h3>

  <h4 className="mt-4 text-primary font-semibold">Day 1:</h4>
  <ul className="list-disc list-inside">
    <li>Departure from PSO Petrol Pump Thoker Niaz Baig (Lahore) at 09:00 PM (Day 0)</li>
    <li>Departure from Daewoo Terminal 26 Number Islamabad at 03:00 AM</li>
    <li>Departure for Gonar Farm, Chilas</li>
    <li>Breakfast at Balakot / Besham at 09:00 AM</li>
    <li>Short stays and sightseeing (Kiwai Waterfall, Babusar Top)</li>
    <li>Arrival at Gonar Farm, Chilas at 08:00 PM</li>
    <li>Night stay and dinner at Gonar Farm, Chilas</li>
  </ul>

  <h4 className="mt-4 text-primary font-semibold">Day 2:</h4>
  <ul className="list-disc list-inside">
    <li>Breakfast call at 07:00 AM</li>
    <li>Departure for Hunza at 08:00 AM</li>
    <li>Short stops (Rakaposhi View Point, Nanga Parbat View Point, Three Mountain Junction)</li>
    <li>Sightseeing and photography on the way</li>
    <li>Hunza arrival at 02:00 PM</li>
    <li>Hotel check-in</li>
    <li>Drive to Altit Fort and Karimabad Market</li>
    <li>Back to hotel by 07:00 PM</li>
    <li>Night stay and dinner at hotel</li>
  </ul>

  <h4 className="mt-4 text-primary font-semibold">Day 3:</h4>
  <ul className="list-disc list-inside">
    <li>Breakfast call at 07:00 AM</li>
    <li>Departure for Khunjerab Top at 08:00 AM</li>
    <li>Stops at Attabad Tunnels, Attabad Lake, Hussaini Bridge, Passu Cones, and Sost</li>
    <li>Sightseeing on the way</li>
    <li>Arrival at Khunjerab Top at 02:00 PM</li>
    <li>Explore Khunjerab Pass</li>
    <li>Return to Attabad Lake for night stay at 08:00 PM</li>
    <li>BBQ, Bonfire, and Dinner at Campo De Berg</li>
  </ul>

  <h4 className="mt-4 text-primary font-semibold">Day 4:</h4>
  <ul className="list-disc list-inside">
    <li>Breakfast call at 07:00 AM</li>
    <li>Departure for Baltit Fort at 09:00 AM</li>
    <li>Arrival and exploration of Baltit Fort until 11:00 AM</li>
    <li>Departure for Naran at 11:15 AM</li>
    <li>Arrival at Naran at 09:00 PM</li>
    <li>Night stay and dinner at hotel</li>
  </ul>

  <h4 className="mt-4 text-primary font-semibold">Day 5:</h4>
  <ul className="list-disc list-inside">
    <li>Breakfast call at 08:30 AM</li>
    <li>Departure for Islamabad at 09:30 AM</li>
    <li>Short stops on the way for sightseeing</li>
    <li>Arrival at Islamabad at 07:00 PM and Lahore at 11:30 PM (IN-SHAH-ALLAH)</li>
  </ul>

  <h3 className="text-primary font-bold mt-6">✅ Tour Includes:</h3>
  <ul className="list-disc list-inside">
    <li>Comfortable transport (AC/non-AC depending on group)</li>
    <li>Hotel accommodation (twin/triple sharing)</li>
    <li>Daily breakfast & dinner</li>
    <li>Sightseeing as per itinerary</li>
    <li>Professional guide assistance</li>
  </ul>

  <h3 className="text-red-600 font-bold mt-6">❌ Tour Excludes:</h3>
  <ul className="list-disc list-inside">
    <li>Entry tickets (forts/lakes/resorts)</li>
    <li>Lunch and snacks</li>
    <li>Jeep charges (if required)</li>
    <li>Personal shopping and tips</li>
  </ul>

  <h3 className="text-primary font-bold mt-6">✨ Highlights:</h3>
  <ul className="list-disc list-inside">
    <li>Khunjerab Pass at 15,397 ft above sea level</li>
    <li>Serene Attabad Lake boat ride</li>
    <li>Iconic Passu Cones & Gojal Valley views</li>
    <li>Cultural exploration of historic forts</li>
    <li>Hunza's warm hospitality and organic cuisine</li>
  </ul>

  <p>
    From awe-inspiring mountains to rich cultural heritage, this tour is ideal for nature lovers, families, and photography enthusiasts. Travel with <strong>De Silk Tours</strong> and experience the unmatched charm of Hunza & Khunjerab like never before!
  </p>
</div>,
  },
  {
    id: 5,
    title: "Fairy Meadows & Beyal Camp",
    duration: "5 Days / 4 Nights",
    price: "PKR 25,999/-",
    image: "/fairy.jpg",
    description: <div className="prose max-w-none prose-sm sm:prose lg:prose-lg xl:prose-xl text-gray-800 font-[Arial]">
  <h2 className="text-primary font-bold">Fairy Meadows Tour Overview</h2>
  <p>
    <strong>Escape into one of the most enchanting landscapes in the world</strong> — Fairy Meadows. Nestled beneath the majestic Nanga Parbat, this tour takes you through lush green meadows, alpine forests, and panoramic mountain views with a chance to camp under the stars near the “Killer Mountain.”
  </p>

  <h3 className="mt-6 text-primary font-semibold">🗓 Day-Wise Itinerary:</h3>
  <ul className="list-disc list-inside">
    <li><strong>Day 1:</strong>
      <ul className="list-disc list-inside ml-5">
        <li>Departure From PSO Petrol Pump Thoker Niaz Baig Near Daewoo Terminal Lahore at 09:00 pm (Day 0).</li>
        <li>Departure From Daewoo Terminal 26 Number Islamabad at 03:00 am.</li>
        <li>Departure for Gonar Farm, Chilas via Besham or Naran.</li>
        <li>Breakfast at Besham or Balakot 09:00 am.</li>
        <li>Short stays and sightseeing (Sumar Nala, Rainbow Abshar, Kiwai WaterFall, Babusar Top).</li>
        <li>Arrival at Gonar Farm, Chilas at 08:00 pm.</li>
        <li>Night stay and Dinner at Gonar Farm, Chilas.</li>
      </ul>
    </li>
    <li><strong>Day 2:</strong>
      <ul className="list-disc list-inside ml-5">
        <li>Departure for Fairy Meadows at 08:00 am.</li>
        <li>Arrival at Raikot at 10:00 am and shift to Jeeps.</li>
        <li>Arrival at Tattu Village at 1:00 pm, start trekking toward Fairy Meadows.</li>
        <li>Reached Fairy Meadows at 4:00 pm.</li>
        <li>Night stay and Dinner at Camps in Fairy Meadows.</li>
      </ul>
    </li>
    <li><strong>Day 3:</strong>
      <ul className="list-disc list-inside ml-5">
        <li>Breakfast call at 07:00 am.</li>
        <li>Departure for Nanga Parbat Base Camp at 07:30 am.</li>
        <li>Sightseeing and photography en route.</li>
        <li>Reach Beyal Camp at 10:30 am, short stay.</li>
        <li>Hike to Nanga Parbat Base Camp at 11:30 am.</li>
        <li>Reach base camp by 02:00 pm, short stay.</li>
        <li>Back to Fairy Meadows by 07:00 pm.</li>
        <li>Bonfire, Dinner, and Overnight Stay in Fairy Meadows.</li>
      </ul>
    </li>
    <li><strong>Day 4:</strong>
      <ul className="list-disc list-inside ml-5">
        <li>Breakfast call at 07:00 am.</li>
        <li>Visit Fairy Meadows till 11:00 am.</li>
        <li>Trek back to Tattu Village at 12:00 pm, reach by 03:00 pm.</li>
        <li>Back to Raikot via Jeep by 06:00 pm.</li>
        <li>Drive to Gonar Farm. Reach hotel by 07:30 pm.</li>
        <li>Dinner and Overnight Stay in Chilas/Naran.</li>
      </ul>
    </li>
    <li><strong>Day 5:</strong>
      <ul className="list-disc list-inside ml-5">
        <li>Breakfast call at 08:00 am.</li>
        <li>Departure for Islamabad at 09:00 am.</li>
        <li>Short sightseeing stops en route.</li>
        <li>Arrival in Islamabad by 07:00 pm and Lahore by 11:30 pm.</li>
      </ul>
    </li>
  </ul>

  <h3 className="mt-6 text-green-700 font-semibold">✅ Tour Includes:</h3>
  <ul className="list-disc list-inside">
    <li>Transport (Coaster/Grand Cabin/Car depending on group)</li>
    <li>Jeep from Raikot Bridge to Tattu Village</li>
    <li>Accommodation (Camp/Hut on sharing basis)</li>
    <li>Daily breakfast and dinner</li>
    <li>Guided trekking experience</li>
    <li>Basic medical and emergency support</li>
  </ul>

  <h3 className="mt-6 text-red-600 font-semibold">❌ Tour Excludes:</h3>
  <ul className="list-disc list-inside">
    <li>Personal trekking gear</li>
    <li>Lunch and snacks</li>
    <li>Porter services</li>
    <li>Any sightseeing or activity not mentioned</li>
  </ul>

  <h3 className="mt-6 text-yellow-600 font-semibold">✨ Highlights:</h3>
  <ul className="list-disc list-inside">
    <li>Breathtaking views of Nanga Parbat (8,126 m)</li>
    <li>Camping in Fairy Meadows — among the world’s top camping sites</li>
    <li>Moderate-level trekking experience to Beyal Camp</li>
    <li>Star-gazing nights, bonfires, and nature photography</li>
  </ul>

  <p>
    Whether you're an adventure seeker or nature enthusiast, this journey offers a surreal and unforgettable experience. Discover the magic of Fairy Meadows with <strong>De Silk Tours</strong> — where dreams meet mountains.
  </p>
</div>
,
  },
  {
    id: 6,
    title: "Neelum Valley/ Ratti Gali Lake/ Taobat",
    duration: "5 Days / 4 Nights",
    price: "PKR 25,999/-",
    image: "/ratigali.jpg",
    description:<div className="prose max-w-none prose-sm sm:prose lg:prose-lg xl:prose-xl text-gray-800" style={{ fontFamily: 'Arial, sans-serif' }}>
  <h2 className="text-primary font-bold">Neelum Valley, Ratti Gali & Taobat Tour Overview</h2>
  <p>
    Explore the enchanting beauty of Azad Kashmir with our Neelum Valley, Ratti Gali Lake, and Taobat tour. This 5-day journey offers lush green valleys, glacial rivers, and one of Pakistan’s most scenic alpine lakes. Perfect for nature lovers and photography enthusiasts.
  </p>

  <h3 className="text-primary font-semibold mt-6">✅ Inclusions:</h3>
  <ul className="list-disc list-inside">
    <li>Luxury Transport (Coaster / Hiace)</li>
    <li>4 Nights Hotel Accommodation (Keran / Sharda / Taobat)</li>
    <li>Breakfast & Dinner (Daily)</li>
    <li>Bonfire Night (Weather Permitting)</li>
    <li>Experienced Guide</li>
  </ul>

  <h3 className="text-primary font-semibold mt-6">❌ Exclusions:</h3>
  <ul className="list-disc list-inside">
    <li>Entry Tickets (Where applicable)</li>
    <li>Lunch, Snacks & Personal Expenses</li>
    <li>Porter charges during hikes</li>
    <li>Jeep Ride to Ratti Gali Lake</li>
  </ul>

  <h3 className="text-primary font-semibold mt-6">🗓 Itinerary:</h3>

  <h4 className="font-semibold mt-4">Day 01</h4>
  <ul className="list-disc list-inside">
    <li>Departure from Lahore 10:30 PM (Day 00)</li>
    <li>Departure from Islamabad 4:30 AM</li>
    <li>Continue drive to Kashmir</li>
    <li>Breakfast at Muzaffarabad</li>
    <li>Visit LOC Viewpoint</li>
    <li>Short stay at Athmuqam</li>
    <li>Reach Sharda for night stay (Wadi Resort Sharda)</li>
  </ul>

  <h4 className="font-semibold mt-4">Day 02</h4>
  <ul className="list-disc list-inside">
    <li>Breakfast at 8:00 AM</li>
    <li>Leave for Taobutt on Jeeps</li>
    <li>Stopover at Jamgarh Waterfall</li>
    <li>Visit Taobutt Riverside & Taobutt Bala (30–40 mins hike)</li>
    <li>Night stay in Taobutt (Corner View / Neelum View)</li>
  </ul>

  <h4 className="font-semibold mt-4">Day 03</h4>
  <ul className="list-disc list-inside">
    <li>Breakfast at 7:00 AM</li>
    <li>Travel back to Kel</li>
    <li>Cable car ride + 30 min hiking to Arangkel</li>
    <li>Visit Arangkel surroundings</li>
    <li>Night stay in Arangkel (Chinar / 2nd Home)</li>
  </ul>

  <h4 className="font-semibold mt-4">Day 04</h4>
  <ul className="list-disc list-inside">
    <li>Early wake-up call</li>
    <li>Reach back to Sharda by 8:00 AM</li>
    <li>Breakfast at Sharda</li>
    <li>Travel to Ratti Gali Lake at 10:00 AM</li>
    <li>2-hour Jeep ride from Dowarian</li>
    <li>1-hour hike or horse ride to the lake</li>
    <li>Visit Queen of Lakes – Ratti Gali</li>
    <li>Return to Keran at night</li>
    <li>Night stay in Keran (Highland / Twinhill)</li>
  </ul>

  <h4 className="font-semibold mt-4">Day 05</h4>
  <ul className="list-disc list-inside">
    <li>Breakfast at 8:00 AM</li>
    <li>Travel to Lahore</li>
    <li>Visit Kutton Waterfall</li>
    <li>Stopover at Dhani Waterfall</li>
    <li>Lunch break on the way</li>
    <li>Arrival at Islamabad in evening and Lahore at night</li>
  </ul>

  <p className="mt-4 italic text-sm">
    Note: Plan can be altered depending on weather and road conditions.
  </p>

  <p className="mt-4">
    This tour is a perfect blend of adventure, serenity, and cultural richness. <strong>Book now</strong> and reconnect with nature like never before!
  </p>
</div>
,
  },
  {
    id: 7,
    title: "Kashmir/Arang Kel & Taobat",
    duration: "4 Days / 3 Nights",
    price: "PKR 22,999/-",
    image: "/neelum.jpg",
    description:<div className="font-[Arial] text-gray-800 space-y-4">
  <h2 className="text-2xl font-bold text-green-700">
    Experience the breathtaking beauty of Azad Kashmir with our exclusive Arang Kel and Taobat tour.
  </h2>
  <p>
    A perfect escape into nature, this 4-day journey takes you through lush green meadows, snow-covered peaks,
    and charming wooden villages along the Neelum River.
  </p>

  <h3 className="text-xl font-bold text-gray-900">Inclusions:</h3>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>Comfortable Transport (Coaster / Hiace)</li>
    <li>3 Nights Hotel Accommodation (Sharda / Taobat)</li>
    <li>Daily Breakfast & Dinner</li>
    <li>Cable Car to Arang Kel</li>
    <li>Bonfire & Music Night (Subject to weather)</li>
    <li>Professional Guide</li>
  </ul>

  <h3 className="text-xl font-bold text-gray-900">Exclusions:</h3>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>Entry Tickets (If any)</li>
    <li>Lunch, Snacks, and Personal Shopping</li>
    <li>Jeep & Horse riding or porters in Arang Kel</li>
  </ul>

  <h3 className="text-xl font-bold text-gray-900">Itinerary:</h3>
  <div className="space-y-2">
    <p>
      <span className="font-semibold">Day 0 –</span> Departure from Lahore at night (Thokar Niaz Baig). Overnight travel to Islamabad.
      Karachi clients can join from Lahore or Islamabad.
    </p>
    <p>
      <span className="font-semibold">Day 1 –</span> Pickup from Islamabad at 4:00 AM. Breakfast stop at Muzaffarabad.
      Visit Dhani Waterfall, tea break at Kutton Waterfall. Continue drive along Neelum River to Sharda. Sightseeing in Sharda. 
      Night stay in Sharda.
    </p>
    <p>
      <span className="font-semibold">Day 2 –</span> Breakfast at 7:00 AM. Shift to 4x4 jeeps and depart for Taobat via scenic route.
      Visit Jamgarh Waterfall. Explore Upper Taobat & Halmat. Return in evening. Night stay in Taobat.
    </p>
    <p>
      <span className="font-semibold">Day 3 –</span> Breakfast at 8:00 AM. Jeep ride to Kel. Doli ride across river, 
      followed by trek to Arang Kel (~40 minutes). Explore village. Return to Sharda. Night stay in Sharda.
    </p>
    <p>
      <span className="font-semibold">Day 4 –</span> Breakfast and check-out. Stop at Kutton Waterfall (1.5 hours). 
      Drive back to Islamabad. Arrival in Lahore by night.
    </p>
  </div>

  <p className="mt-4">
    This tour is ideal for families, couples, and explorers seeking a peaceful getaway in the heart of Kashmir. 
    <span className="font-semibold text-green-700"> Reserve your seat now and uncover the hidden gems of the Neelum Valley!</span>
  </p>
</div>,
  },
  {
    id: 8,
    title: "Kumrat/Jahaz-banda & Katora Lake",
    duration: "4 Days / 3 Nights",
    price: "PKR 22,999/-",
    image: "/Katora.jpg",
    description:<div className="font-[Arial] text-gray-800 space-y-6 leading-relaxed">
  <p className="text-lg font-semibold">
    Embark on an adventurous journey to one of Pakistan’s most scenic valleys – Kumrat.
    This 4-day tour offers a perfect blend of nature, hiking, waterfalls, and alpine lakes surrounded by lush green landscapes.
  </p>

  <div>
    <h3 className="text-xl font-bold text-primary mb-2">Inclusions:</h3>
    <ul className="list-disc list-inside space-y-1">
      <li>Luxury Transport (Coaster / Hiace)</li>
      <li>3 Nights Tent or Hotel Accommodation (Kumrat / Jahaz Banda)</li>
      <li>Local 4x4 Jeep Ride to Jahaz Banda</li>
      <li>Guided Hike to Katora Lake</li>
      <li>Daily Breakfast & Dinner</li>
      <li>Campfire & Traditional Night (Weather Permitting)</li>
      <li>Tour Guide & Trip Management</li>
    </ul>
  </div>

  <div>
    <h3 className="text-xl font-bold text-primary mb-2">Exclusions:</h3>
    <ul className="list-disc list-inside space-y-1">
      <li>Personal trekking gear</li>
      <li>Entry fees (if any)</li>
      <li>Porter charges during hike</li>
      <li>Lunch, snacks, and drinks</li>
    </ul>
  </div>

  <div>
    <h3 className="text-xl font-bold text-primary mb-2">Itinerary:</h3>

    <h4 className="font-semibold mt-4">Day 01:</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>Departure from Lahore</li>
      <li>Pick-ups from Islamabad</li>
      <li>Travel towards Upper Dir</li>
      <li>Breakfast at Shringal (time permitting)</li>
      <li>Rest stop at Thal</li>
      <li>Travel to Kumrat Valley</li>
      <li>Hotel Check-in & Free time to explore Panjkora River</li>
      <li>Night Stay in Huts (Camps optional)</li>
    </ul>

    <h4 className="font-semibold mt-4">Day 02:</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>Breakfast</li>
      <li>Visit Kumrat Waterfall (Abshar)</li>
      <li>Jeep ride to Takki Banda</li>
      <li>Hike to Jahaz Banda (approx. 3 hours)</li>
      <li>Dinner & Night Stay in Huts (Camps optional)</li>
    </ul>

    <h4 className="font-semibold mt-4">Day 03:</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>Breakfast</li>
      <li>Free time to explore Jahaz Banda</li>
      <li>Optional visit to Kund Banda</li>
      <li>Trek to Katora Lake (3–4 hrs one side)</li>
      <li>Return by evening</li>
      <li>Night Stay in Huts (Camps optional)</li>
    </ul>

    <h4 className="font-semibold mt-4">Day 04:</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>Breakfast</li>
      <li>Hike back to Takki Banda</li>
      <li>Jeep transfer to Thal</li>
      <li>Departure at 11:59 AM</li>
      <li>Return via Lower Dir / Chakdara</li>
      <li>Arrival at Islamabad & Lahore</li>
    </ul>
  </div>

  <p className="text-lg font-semibold">
    Explore the hidden jewel of Khyber Pakhtunkhwa and witness the unspoiled beauty of nature.
    Perfect for adventure seekers, hikers, and nature lovers. Book your slot now!
  </p>
</div>
,
  },
  {
    id: 9,
    title: "Kumrat Valley",
    duration: "3 Days / 2 Nights",
    price: "PKR 15,999/-",
    image: "/Kumrat.jpg",
    description:<div className="font-[Arial] text-gray-800 space-y-4 leading-relaxed">
  <p className="text-lg font-medium">
    Experience the raw and untouched beauty of <span className="font-semibold">Kumrat Valley</span>, a hidden gem in Khyber Pakhtunkhwa. This 3-day trip is perfect for nature enthusiasts, offering riverside camping, pine forests, and refreshing waterfalls.
  </p>

  <div>
    <h2 className="text-xl font-bold text-primary">Inclusions:</h2>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Private or Group Transport (Hiace / Coaster)</li>
      <li>2 Nights Tent or Hotel Accommodation (Thal or Kumrat)</li>
      <li>Visit to Panjkora River, Kumrat Forest, Kala Chashma, and Do Kala</li>
      <li>Guided local exploration</li>
      <li>Daily Breakfast & Dinner</li>
      <li>Bonfire and cultural night (subject to weather)</li>
      <li>Basic first aid and tour management</li>
    </ul>
  </div>

  <div>
    <h2 className="text-xl font-bold text-primary">Exclusions:</h2>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Entry tickets (if applicable)</li>
      <li>Jeep charges (if needed)</li>
      <li>Personal expenses & snacks</li>
      <li>Hiking gear or camping essentials</li>
    </ul>
  </div>

  <div>
    <h2 className="text-xl font-bold text-primary">Itinerary:</h2>
    <ul className="space-y-2">
      <li>
        <strong>Day 00:</strong> <br />
        Lahore Departure: 9:00 PM (Thursday Night) – PSO Pump Thokar Niaz Baig (near new Daewoo Terminal) <br />
        Islamabad Pickup: 4:30 AM (Friday Morning) – Daewoo Terminal 26 Number
      </li>
      <li>
        <strong>Day 01:</strong> <br />
        Pickup members from ISB at 3:30 AM <br />
        Departure for Kumrat <br />
        Short stay at Katlang <br />
        Breakfast at Timergara <br />
        Arrival at Thal Village: 3:00 PM <br />
        Transfer to Jeeps <br />
        Arrival at Camping Site <br />
        Night stay at camps in Kumrat Jungle
      </li>
      <li>
        <strong>Day 02:</strong> <br />
        Breakfast at 7:00 AM <br />
        Jeep Tour to: <br />
        - Kumrat Valley <br />
        - Kala Chashma <br />
        - Kumrat Jungle <br />
        - Panjkora River <br />
        - Two Abshar <br />
        Musical Night <br />
        Dinner & Overnight at Camp
      </li>
      <li>
        <strong>Day 03:</strong> <br />
        Breakfast & Drive Back to Thal <br />
        Transfer to Buses: 9:00 AM <br />
        Arrival at Islamabad: 8:00 PM <br />
        Arrival at Lahore: 12:00 AM
      </li>
    </ul>
  </div>

  <p className="text-lg font-medium">
    Reconnect with nature in the peaceful valleys of Kumrat. Whether you’re a <span className="font-semibold">photographer, camper, or looking for a quick escape</span>, this tour promises unforgettable views and serenity.
  </p>
</div>
,
  },
  {
    id: 10,
    title: "Naran & Babusar Top",
    duration: "3 Days / 2 Nights",
    price: "PKR 15,999/-",
    image: "/Babusar.jpg",
    description:<div className="prose max-w-none prose-sm sm:prose lg:prose-lg xl:prose-xl text-gray-800 font-[Arial]">
  <h2 className="text-primary font-bold">Naran & Babusar Top Tour Overview</h2>
  <p>
    <strong>Escape to the majestic Kaghan Valley</strong> with our Naran & Babusar Top tour. This 3-day trip is a perfect blend of scenic landscapes, alpine lakes, and panoramic mountain passes, ideal for families, friends, or solo travelers.
  </p>

  <h3 className="mt-6 text-primary font-semibold">✅ Inclusions:</h3>
  <ul className="list-disc list-inside">
    <li>Luxury transport (Coaster / Hiace depending on group size)</li>
    <li>2 Nights hotel accommodation in Naran</li>
    <li>Breakfast and Dinner included</li>
    <li>Sightseeing of Naran Bazaar, Saif-ul-Mulook Lake & Babusar Top</li>
    <li>Basic tour guide and management services</li>
  </ul>

  <h3 className="mt-6 text-primary font-semibold">❌ Exclusions:</h3>
  <ul className="list-disc list-inside">
    <li>Jeep ride to Saif-ul-Mulook Lake (if road is inaccessible for vans)</li>
    <li>Personal expenses (lunch, snacks, shopping)</li>
    <li>Entry passes (where applicable)</li>
    <li>Any extra activity not mentioned in the itinerary</li>
  </ul>

  <h3 className="mt-6 text-primary font-semibold">🗓️ Itinerary:</h3>
  <ul className="list-disc list-inside">
    <li>
      <strong>Day 1:</strong> Departure from Islamabad/Lahore – Drive through Hazara Motorway – Reach Naran – Hotel check-in – Explore Naran Bazaar
    </li>
    <li>
      <strong>Day 2:</strong> Early morning visit to Lake Saif-ul-Mulook – After breakfast, journey to Babusar Top via Lulusar Lake and Batakundi – Return to hotel
    </li>
    <li>
      <strong>Day 3:</strong> Breakfast – Visit Kunhar River viewpoint – Start journey back to Islamabad/Lahore
    </li>
  </ul>

  <p>
    Explore emerald lakes, breathe in the fresh mountain air, and take in some of the most awe-inspiring views of Pakistan on this unforgettable journey to the heart of Kaghan Valley.
  </p>
</div>
,
  },
 {
  id: 11,
  title: "Neelum Valley & Arang Kel",
  duration: "3 Days / 2 Nights",
  price: "PKR 15,999/-",
  image: "/arangkel.jpg",
  description: (
    <div className="text-white font-[Arial] space-y-4 leading-relaxed">
      <p>
        <strong>
          Embark on a breathtaking journey to the paradise-like Neelum Valley
          and the majestic meadows of Arang Kel.
        </strong>{" "}
        This 3-day adventure offers a perfect escape into lush green valleys,
        crystal-clear rivers, and serene mountain views.
      </p>

      <div>
        <h2 className="text-xl font-bold underline">Inclusions:</h2>
        <ul className="list-disc list-inside">
          <li>Comfortable transport (Coaster / Hiace)</li>
          <li>2 Nights hotel/guesthouse accommodation (Keran/Sharda)</li>
          <li>Breakfast and Dinner included</li>
          <li>Local tour guide and trip management</li>
          <li>Hiking support to Arang Kel</li>
          <li>Sightseeing of Keran, Sharda, and Arang Kel</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold underline">Exclusions:</h2>
        <ul className="list-disc list-inside">
          <li>Jeep ride (if needed)</li>
          <li>Personal expenses (lunch, snacks, porter charges)</li>
          <li>Anything not mentioned in inclusions</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold underline">Itinerary:</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Day 1:</strong> Departure from Islamabad/Lahore – Reach
            Muzaffarabad – Drive along the Neelum River – Visit Keran –
            Overnight stay in Sharda
          </li>
          <li>
            <strong>Day 2:</strong> Early morning visit to Sharda – Hike or
            chairlift to Arang Kel (approx. 1–1.5 hour hike) – Explore the
            stunning village of Arang Kel – Return to Sharda
          </li>
          <li>
            <strong>Day 3:</strong> Breakfast – Visit nearby viewpoints –
            Departure back to Islamabad/Lahore with sightseeing stops
          </li>
        </ul>
      </div>

      <p>
        Whether you're a nature lover or looking for a peaceful retreat, this
        tour to Neelum Valley & Arang Kel promises an unforgettable experience
        filled with scenic beauty, tranquility, and cultural richness.
      </p>
    </div>
  ),
},

  {
    id: 12,
    title: "Neelum Valley & Ratti Gali Lake",
    duration: "3 Days / 2 Nights",
    price: "PKR 15,999/-",
    image: "/neelum.jpg",
    description:<div className="font-[Arial] text-gray-800 space-y-6 leading-relaxed">
  <p>
    Experience the unmatched natural beauty of Neelum Valley and the alpine wonder of <strong>Ratti Gali Lake</strong> on this 3-day, 2-night adventure. From lush valleys to crystal-clear glacial lakes, this tour is perfect for nature lovers and photography enthusiasts.
  </p>

  <div>
    <h2 className="font-bold text-lg mb-2">Inclusions:</h2>
    <ul className="list-disc list-inside space-y-1">
      <li>Comfortable transport (Coaster / Hiace)</li>
      <li>2 nights accommodation (Keran/Sharda)</li>
      <li>Breakfast and Dinner included</li>
      <li>Local tour guide and trip coordinator</li>
      <li>Sightseeing of Keran, Sharda, and Ratti Gali Base Camp</li>
    </ul>
  </div>

  <div>
    <h2 className="font-bold text-lg mb-2">Exclusions:</h2>
    <ul className="list-disc list-inside space-y-1">
      <li>Jeep ride to Ratti Gali Lake (mandatory)</li>
      <li>Personal expenses (lunch, snacks, porter charges)</li>
      <li>Entry tickets and any activity fees</li>
      <li>Anything not mentioned in inclusions</li>
    </ul>
  </div>

  <div>
    <h2 className="font-bold text-lg mb-2">Itinerary:</h2>
    <ul className="space-y-2">
      <li>
        <span className="font-semibold">Day 1:</span> Departure from Islamabad/Lahore – Drive through Muzaffarabad – Visit Keran and Sharda – Overnight stay in Sharda
      </li>
      <li>
        <span className="font-semibold">Day 2:</span> Early breakfast – Jeep ride to Ratti Gali Base Camp – Short hike to Ratti Gali Lake – Explore and enjoy the scenic lake – Return to Sharda
      </li>
      <li>
        <span className="font-semibold">Day 3:</span> Breakfast – Visit local viewpoints – Return journey with sightseeing en route – Reach Islamabad/Lahore at night
      </li>
    </ul>
  </div>

  <p>
    This tour offers a perfect mix of relaxation and exploration in the lap of northern Pakistan’s natural beauty. <strong>Ratti Gali Lake</strong> is a sight to behold, with its turquoise waters nestled between snow-capped peaks — a bucket-list destination for every traveler.
  </p>
</div>
,
  },
  {
  id: 13,
  title: "Swat/Malam Jabba & Kalam",
  duration: "3 Days / 2 Nights",
  price: "PKR 15,999/-",
  image: "/malamjabba.jpg",
  description: <div className="font-[Arial] text-gray-800 space-y-5 leading-relaxed">
  <p>
    Experience the mesmerizing beauty of Swat Valley with this 3-day tour covering <strong>Malam Jabba</strong> and <strong>Kalam</strong>. From snow-covered landscapes to thrilling adventures, this tour is perfect for nature lovers, families, and photography enthusiasts.
  </p>

  <div>
    <h2 className="font-bold text-lg mb-1">✨ Inclusions:</h2>
    <ul className="list-disc list-inside space-y-1">
      <li>Comfortable AC transportation (Hiace/Coaster)</li>
      <li>2 Nights hotel stay (twin/triple sharing)</li>
      <li>Daily Breakfast</li>
      <li>Professional tour guide</li>
      <li>Bonfire & group activities</li>
    </ul>
  </div>

  <div>
    <h2 className="font-bold text-lg mt-4 mb-1">🚫 Exclusions:</h2>
    <ul className="list-disc list-inside space-y-1">
      <li>Entry tickets (Chairlift, Zipline, Parks)</li>
      <li>Lunch & Dinner</li>
      <li>Personal expenses or extras not mentioned</li>
    </ul>
  </div>

  <div>
    <h2 className="font-bold text-lg mt-4 mb-2">📅 Day-Wise Itinerary:</h2>
    
    <div>
      <p className="font-semibold">Day 1:</p>
      <p>
        Departure from Islamabad/Lahore early morning. Travel through the scenic route to <strong>Malam Jabba</strong>. Enjoy chairlift, zipline, and snow activities. Transfer to Swat/Kalam for overnight stay.
      </p>
    </div>

    <div className="mt-3">
      <p className="font-semibold">Day 2:</p>
      <p>
        Breakfast at hotel. Full-day exploration of <strong>Kalam Valley</strong>, including <strong>Ushu Forest</strong>, <strong>Mahodand Lake</strong> (if accessible), and other nearby attractions. Return to Kalam for overnight stay.
      </p>
    </div>

    <div className="mt-3">
      <p className="font-semibold">Day 3:</p>
      <p>
        Breakfast & checkout. Drive back to Islamabad/Lahore with sightseeing stops en route. Reach back by evening with unforgettable memories.
      </p>
    </div>
  </div>

  <p className="font-medium text-md mt-4">
    🌄 Create lasting memories in the <strong>Switzerland of Pakistan</strong> with De Silk Tours.
  </p>
</div>
},
  {
    id: 14,
    title: "Sharan Forest",
    duration: "2 Days / 1 Nights",
    price: "PKR 12,999/-",
    image: "/sharan.jpg",
    description:<div className="font-[Arial] text-gray-800 space-y-4 leading-relaxed">
  <p>
    Escape into the heart of nature with our <strong>2-day tour to <em>Sharan Forest</em></strong>, a hidden gem in the Kaghan Valley known for its dense pine forests, fresh air, and untouched wilderness. This peaceful retreat is ideal for camping lovers and nature explorers.
  </p>

  <div>
    <h2 className="text-lg font-bold text-green-700">Inclusions:</h2>
    <ul className="list-disc list-inside ml-4">
      <li>AC transport (Hiace/Coaster)</li>
      <li>1-night camp accommodation or wooden hut (twin/triple sharing)</li>
      <li>Jeep ride from Paras to Sharan</li>
      <li>Tour guide services</li>
      <li>Bonfire and light music (subject to weather)</li>
    </ul>
  </div>

  <div>
    <h2 className="text-lg font-bold text-red-700">Exclusions:</h2>
    <ul className="list-disc list-inside ml-4">
      <li>Meals (lunch/dinner)</li>
      <li>Personal trekking gear</li>
      <li>Entry tickets if any</li>
      <li>Anything not mentioned in inclusions</li>
    </ul>
  </div>

  <div>
    <h2 className="text-lg font-bold text-blue-700">Itinerary:</h2>

    <div className="mt-2">
      <p className="font-semibold">Day 1:</p>
      <ul className="list-disc list-inside ml-4">
        <li>Departure from Islamabad early morning</li>
        <li>Short stopovers for breakfast (self-paid)</li>
        <li>Reach Paras and transfer to jeeps for Sharan Forest</li>
        <li>Arrival at campsite, check-in and settle</li>
        <li>Explore the forest trails, optional hike to Manshi Top</li>
        <li>Evening bonfire and group activities</li>
        <li>Overnight stay in tents or huts</li>
      </ul>
    </div>

    <div className="mt-2">
      <p className="font-semibold">Day 2:</p>
      <ul className="list-disc list-inside ml-4">
        <li>Breakfast at campsite</li>
        <li>Free time to explore or relax in the forest</li>
        <li>Return to Paras by jeep and start journey back</li>
        <li>Arrival in Islamabad by evening</li>
      </ul>
    </div>
  </div>

  <p>
    Experience the raw beauty of the forest, cool climate, and tranquil environment. <strong>Sharan</strong> is perfect for families, groups, and adventurers looking for a peaceful, green escape.
  </p>
</div>
,
  },
  {
    id: 15,
    title: "Shogran Siri/Paye",
    duration: "2 Days / 1 Nights",
    price: "PKR 12,999/-",
    image: "/shogran.jpg",
    description:   <div className="font-[Arial] text-gray-800 space-y-6 leading-relaxed">
      <p>
        <strong>Embark on a serene getaway</strong> to the scenic hill station of <em>Shogran</em>, nestled in the Kaghan Valley, followed by a thrilling jeep ride to the breathtaking <strong>Siri Paye Meadows</strong>. This 2-day tour is ideal for those seeking nature, peace, and adventure in a short span.
      </p>

      <div>
        <h2 className="text-lg font-bold text-primary mb-2">✨ Inclusions:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Luxury AC transport (Hiace/Coaster)</li>
          <li>1-night hotel accommodation in Shogran (twin/triple sharing)</li>
          <li>Jeep ride to Siri Paye</li>
          <li>Tour guide services</li>
          <li>Bonfire (weather dependent)</li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-bold text-red-600 mb-2">🚫 Exclusions:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Personal expenses</li>
          <li>Lunch/Dinner</li>
          <li>Entry tickets</li>
          <li>Anything not mentioned in inclusions</li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-bold text-primary mb-2">📅 Day-Wise Itinerary:</h2>
        <p>
          <strong>Day 1:</strong><br />
          Departure from Islamabad early morning. Breakfast on the way (self-paid). Arrival in Shogran by noon, hotel check-in. Free time to explore surroundings or rest. Evening jeep ride to Siri Paye Meadows. Return to Shogran and enjoy bonfire (if weather allows). Overnight stay at hotel.
        </p>
        <p>
          <strong>Day 2:</strong><br />
          Breakfast at the hotel. Optional short hike or relax at the hotel. Check-out and begin return journey. Arrival back in Islamabad by evening.
        </p>
      </div>

      <p>
        <strong>Shogran and Siri Paye</strong> offer a refreshing retreat surrounded by pine forests, alpine meadows, and stunning mountain views – perfect for a weekend escape from city life.
      </p>
    </div>,
  },
  {
    id: 16,
    title: "Sharan Forest / Shogran Siri/Paye",
    duration: "1 Day",
    price: "PKR 4800/-",
    image: "/siripaye.jpg",
    description:<div className="font-[Arial] space-y-4 text-gray-800">
  <p className="text-lg font-medium">
    Escape into the heart of the Kaghan Valley with this scenic 1-day tour to <span className="font-semibold italic">Sharan Forest</span> and <span className="font-semibold italic">Shogran Siri/Paye Meadows</span>. Ideal for a weekend getaway or nature retreat, this journey offers unmatched serenity, dense pine forests, and panoramic mountain views.
  </p>

  <div>
    <h3 className="text-xl font-bold text-primary mb-1">Inclusions:</h3>
    <ul className="list-disc list-inside space-y-1">
      <li>Luxury transport (Coaster / Hiace)</li>
      <li>Services of a professional tour guide</li>
      <li>Photography assistance</li>
      <li>Basic first aid and trip management</li>
    </ul>
  </div>

  <div>
    <h3 className="text-xl font-bold text-primary mb-1">Exclusions:</h3>
    <ul className="list-disc list-inside space-y-1">
      <li>Lunch, snacks & personal expenses</li>
      <li>Jeep ride to Siri Paye (approx. PKR 4,000 per jeep)</li>
      <li>Entry tickets (if applicable)</li>
    </ul>
  </div>

  <div>
    <h3 className="text-xl font-bold text-primary mb-1">Itinerary:</h3>
    <ul className="list-none space-y-1">
      <li><span className="font-semibold italic">Early Morning:</span> Departure from Islamabad/Lahore</li>
      <li><span className="font-semibold italic">Mid Morning:</span> Arrival in Kiwai – Short stop at waterfall</li>
      <li><span className="font-semibold italic">Late Morning:</span> Travel to Shogran and onward jeep ride to Siri Paye (optional)</li>
      <li><span className="font-semibold italic">Afternoon:</span> Visit lush green Siri & Paye Meadows – enjoy photography and hiking</li>
      <li><span className="font-semibold italic">Evening:</span> Return from Siri Paye – visit Sharan Forest (subject to time)</li>
      <li><span className="font-semibold italic">Night:</span> Depart back for Islamabad/Lahore</li>
    </ul>
  </div>

  <p className="text-lg font-medium">
    Perfect for nature lovers and photography enthusiasts, this trip offers tranquil moments, scenic vistas, and a refreshing break from city chaos — all in just one day!
  </p>
</div>
,
  },
  {
    id: 17,
    title: "Ganga Choti",
    duration: "1 Day",
    price: "PKR 3800/-",
    image: "/ganga.jpg",
    description:<div className="font-[Arial] text-gray-800 space-y-6 leading-relaxed">
  <p className="text-lg font-semibold">
    Conquer the scenic heights of Azad Kashmir with a one-day trek to <span className="italic font-bold">Ganga Choti</span>, 
    a breathtaking peak in the Bagh District standing tall at 9,989 ft above sea level. This adventure is perfect for thrill-seekers, 
    nature lovers, and photographers seeking a quick escape into the Himalayan beauty.
  </p>

  <div>
    <h2 className="text-xl font-bold text-gray-900 mb-2">✨ Inclusions:</h2>
    <ul className="list-disc list-inside space-y-1">
      <li>Comfortable AC transport (Hiace/Coaster)</li>
      <li>Services of a professional tour guide</li>
      <li>Basic first aid & trip management</li>
      <li>Photography assistance</li>
    </ul>
  </div>

  <div>
    <h2 className="text-xl font-bold text-gray-900 mb-2">🚫 Exclusions:</h2>
    <ul className="list-disc list-inside space-y-1">
      <li>Meals, snacks & beverages</li>
      <li>Entry tickets (if applicable)</li>
      <li>Personal hiking gear or equipment</li>
    </ul>
  </div>

  <div>
    <h2 className="text-xl font-bold text-gray-900 mb-2">📅 Itinerary:</h2>
    <ul className="space-y-2">
      <li>
        <span className="font-semibold">Early Morning:</span> Departure from Islamabad/Lahore. 
        Breakfast stop en route (self-paid). Short break at Kohala.
      </li>
      <li>
        <span className="font-semibold">Late Morning:</span> Arrival at Sudhan Gali — Start your moderate hike to 
        <span className="italic"> Ganga Choti </span> (approx. 1.5–2 hours).
      </li>
      <li>
        <span className="font-semibold">Afternoon:</span> Reach the summit. Explore the area, capture panoramic views of 
        the Himalayas, and enjoy peaceful nature moments.
      </li>
      <li>
        <span className="font-semibold">Evening:</span> Descend back to Sudhan Gali and start return journey.
      </li>
      <li>
        <span className="font-semibold">Night:</span> Arrival back in Islamabad/Lahore with memories of a thrilling mountain adventure.
      </li>
    </ul>
  </div>

  <p className="text-lg font-semibold">
    🌄 Whether you're a beginner or seasoned hiker, this tour offers a perfect blend of nature, challenge, and tranquility — all in one unforgettable day!
  </p>
</div>
,
  },
  {
    id: 18,
    title: "Swat & Malam Jabba",
    duration: "1 Day",
    price: "PKR 4800/-",
    image: "/swat.jpg",
    description:<div className="font-[Arial] text-gray-800 space-y-6 leading-relaxed">
  <p className="text-lg font-semibold">
    Embark on a scenic one-day adventure to the captivating <span className="font-bold">Swat Valley</span> and the famous ski resort of 
    <span className="italic font-bold"> Malam Jabba</span>. This tour is perfect for nature lovers, families, and those looking 
    to escape into the serene beauty of northern Pakistan.
  </p>

  <div>
    <h2 className="text-xl font-bold text-gray-900 mb-2">✨ Inclusions:</h2>
    <ul className="list-disc list-inside space-y-1">
      <li>Air-conditioned transport (Hiace/Coaster)</li>
      <li>Services of professional driver and local guide</li>
      <li>Stopovers for sightseeing & photography</li>
      <li>Basic first aid</li>
    </ul>
  </div>

  <div>
    <h2 className="text-xl font-bold text-gray-900 mb-2">🚫 Exclusions:</h2>
    <ul className="list-disc list-inside space-y-1">
      <li>Meals and refreshments</li>
      <li>Chairlift/zipline tickets at Malam Jabba</li>
      <li>Personal expenses</li>
    </ul>
  </div>

  <div>
    <h2 className="text-xl font-bold text-gray-900 mb-2">📅 Itinerary:</h2>
    <ul className="space-y-2">
      <li>
        <span className="font-semibold">Early Morning:</span> Departure from Islamabad/Peshawar
      </li>
      <li>
        <span className="font-semibold">Morning:</span> Breakfast en route, continue journey along the scenic Swat River
      </li>
      <li>
        <span className="font-semibold">Late Morning:</span> Reach <span className="italic">Malam Jabba</span> – explore the ski resort, 
        take part in optional activities like zipline or chairlift
      </li>
      <li>
        <span className="font-semibold">Afternoon:</span> Visit <span className="italic">Fizagat Park</span> or explore Mingora city 
        for local shopping or snacks
      </li>
      <li>
        <span className="font-semibold">Evening:</span> Drive back to Islamabad/Peshawar
      </li>
      <li>
        <span className="font-semibold">Night:</span> Expected return by late evening
      </li>
    </ul>
  </div>

  <p className="text-lg font-semibold">
    🌄 Enjoy a refreshing getaway surrounded by snow-capped peaks, green valleys, and a touch of adventure at Malam Jabba. 
    Ideal for day explorers and quick mountain escapes.
  </p>
</div>
 ,
  },
  {
    id: 19,
    title: "Mushkpuri Top",
    duration: "1 Day",
    price: "PKR 4500/-",
    image: "/mushkpuri.jpg",
    description:<div className="space-y-4 text-gray-700 font-arial">
  <h2 className="text-2xl font-bold text-green-700">Mushkpuri Top - One Day Tour</h2>
  <p>
    Experience the breathtaking beauty of the <span className="font-semibold italic">Mushkpuri Top</span>, located at an elevation of around 9,200 feet in the <span className="font-semibold italic">Galiyat region near Nathia Gali</span>. 
    This one-day tour is perfect for adventure lovers, couples, and solo travelers seeking a refreshing nature escape.
  </p>

  <div>
    <h3 className="text-lg font-semibold text-green-600">Inclusions:</h3>
    <ul className="list-disc list-inside ml-4">
      <li>Comfortable transport (Hiace/Coaster)</li>
      <li>Services of an experienced tour guide</li>
      <li>Photography & trekking support</li>
      <li>Basic first aid</li>
    </ul>
  </div>

  <div>
    <h3 className="text-lg font-semibold text-green-600">Exclusions:</h3>
    <ul className="list-disc list-inside ml-4">
      <li>Meals and personal snacks</li>
      <li>Entry tickets (if applicable)</li>
      <li>Personal trekking gear or jackets</li>
    </ul>
  </div>

  <div>
    <h3 className="text-lg font-semibold text-green-600">Itinerary:</h3>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li><strong>Early Morning:</strong> Departure from Islamabad/Lahore</li>
      <li><strong>Morning:</strong> Breakfast stop at Murree Expressway</li>
      <li><strong>Late Morning:</strong> Arrival in Nathia Gali – Begin the scenic trek to Mushkpuri Top (approx. 2-hour hike)</li>
      <li><strong>Afternoon:</strong> Reach the top – Explore lush green meadows, panoramic views of Kashmir & Murree hills, and take photos</li>
      <li><strong>Evening:</strong> Begin descent and drive back</li>
      <li><strong>Night:</strong> Return to Islamabad/Lahore</li>
    </ul>
  </div>

  <p>
    This tour is ideal for nature lovers and photography enthusiasts. The trail is surrounded by pine forests, flowers, and cool mountain breeze — a truly refreshing day out in Pakistan's northern beauty.
  </p>
</div>
,
  },
  {
    id: 20,
    title: "Muzaffarabad & Pir Chanasi",
    duration: "1 Day",
    price: "PKR 4800/-",
    image: "/pirchanasi.jpg",
    description:<div className="space-y-4 text-gray-700 font-arial">
  <h2 className="text-2xl font-bold text-green-700">Muzaffarabad & Pir Chanasi - One Day Tour</h2>
  <p>
    Experience a breathtaking journey to <span className="font-semibold italic">Muzaffarabad</span>, the capital of Azad Kashmir, and the scenic viewpoint of 
    <span className="font-semibold italic"> Pir Chanasi</span>, known for its panoramic views and serene landscapes. 
    This one-day escape is perfect for nature lovers and peace seekers.
  </p>

  <div>
    <h3 className="text-lg font-semibold text-green-600">Inclusions:</h3>
    <ul className="list-disc list-inside ml-4">
      <li>Comfortable air-conditioned transport (Hiace/Coaster)</li>
      <li>Guided sightseeing tour</li>
      <li>Stopovers for photography and refreshments</li>
      <li>Basic first aid</li>
    </ul>
  </div>

  <div>
    <h3 className="text-lg font-semibold text-green-600">Exclusions:</h3>
    <ul className="list-disc list-inside ml-4">
      <li>Meals and snacks</li>
      <li>Entry fees (if applicable)</li>
      <li>Personal expenses</li>
    </ul>
  </div>

  <div>
    <h3 className="text-lg font-semibold text-green-600">Itinerary:</h3>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li><strong>Early Morning:</strong> Departure from Islamabad</li>
      <li><strong>Morning:</strong> Scenic drive along the <span className="italic">Neelum River</span> to reach Muzaffarabad</li>
      <li><strong>Midday:</strong> Visit landmarks like <span className="italic">Red Fort</span>, <span className="italic">Domel Point</span>, and local markets</li>
      <li><strong>Afternoon:</strong> Drive up to <span className="italic">Pir Chanasi</span> (approx. 1.5-hour drive) – enjoy majestic views of the valley and lush meadows</li>
      <li><strong>Late Afternoon:</strong> Return journey begins with optional tea/snack break</li>
      <li><strong>Evening:</strong> Arrival back in Islamabad</li>
    </ul>
  </div>

  <p>
    This tour offers a perfect blend of natural beauty, culture, and peaceful mountain air. A great choice for weekend travelers and short getaways.
  </p>
</div>
,
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
        className="absolute top-3 right-0 text-gray-600 text-4xl hover:text-red-500"
      >
        &times;
      </button>

      {/* Image */}
      <img
        src={selectedPackage.image}
        alt={selectedPackage.title}
        className="w-full h-48 object-cover rounded mb-5"
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
