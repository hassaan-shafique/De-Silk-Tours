export default function ContactForm() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">Book Now</h2>

        <form action= "https://formspree.io/f/mblkrdok" method="POST" className="bg-white shadow-md rounded-lg p-8 space-y-6">
          {/* Full Name */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Full Name</label>
            <input
            name="fullname"
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Email Address</label>
            <input
            name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Phone Number</label>
            <input
            name="phone"
              type="tel"
              placeholder="Enter your phone"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Tour Interested In */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Tour Interested In</label>
           <select
           name="tour"
  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
  required
>
  <option value="">Select a tour</option>
  <option value="astore">Astore/Minimarg & Deosai</option>
  <option value="skardu">Skardu Valley</option>
  <option value="hunza-khunjrab">Hunza & Khunjrab Pass</option>
  <option value="fairy-meadows">Fairy Meadows & Beyal Camp</option>
  <option value="neelum-ratti-taobat">Neelum Valley / Ratti Gali Lake / Taobat</option>
  <option value="kashmir-arang-taobat">Kashmir / Arang Kel & Taobat</option>
  <option value="kumrat-katora">Kumrat / Jahaz-banda & Katora Lake</option>
  <option value="kumrat-valley">Kumrat Valley</option>
  <option value="naran-babusar">Naran & Babusar Top</option>
  <option value="neelum-arang">Neelum Valley & Arang Kel</option>
  <option value="neelum-ratti">Neelum Valley & Ratti Gali Lake</option>
  <option value="swat-kalam">Swat / Malam Jabba & Kalam</option>
  <option value="sharan">Sharan Forest</option>
  <option value="shogran">Shogran Siri / Paye</option>
  <option value="sharan-shogran">Sharan Forest / Shogran Siri / Paye</option>
  <option value="ganga-choti">Ganga Choti</option>
  <option value="swat-malam">Swat & Malam Jabba</option>
  <option value="mushkpuri">Mushkpuri Top</option>
  <option value="pir-chanasi">Muzaffarabad & Pir Chanasi</option>
</select>

          </div>

          {/* Number of Persons */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Number of Persons</label>
            <input
            name="persons"
              type="number"
              min="1"
              placeholder="e.g., 2"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>

          {/* Preferred Travel Date (Optional) */}
          <div>

            <label className="block mb-2 text-sm font-semibold">Preferred Travel Date</label>
            <input
            name="traveldate"
              type="date"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Message</label>
            <textarea
            name="Message"
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-accent text-primary font-semibold px-6 py-2 rounded-full hover:opacity-90 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
