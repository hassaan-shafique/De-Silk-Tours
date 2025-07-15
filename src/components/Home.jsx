export default function Hero() {
  return (
    <section id="home"
      className="relative bg-cover bg-center h-[90vh] text-white"
      style={{
  backgroundImage: "url('/home.jpg')",
}}>
      <div className="bg-black bg-opacity-60 absolute inset-0" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
  Explore Pakistan with De Silk Tours
</h1>
<p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
  Discover the beauty of Pakistan with our expertly crafted custom tours, luxury hotel stays, and premium travel experiences — tailored just for you.
</p>
        <a  href= "#contact" className="mt-6 px-6 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-yellow-400 transition">
          Plan Your Trip
        </a>
      </div>
    </section>
  );
}
