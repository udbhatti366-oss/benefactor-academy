
export default function FounderSection() {

  return (
    <section className="px-8 lg:px-20 py-32">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div className="relative">

          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1600&auto=format&fit=crop"
            alt="Founder"
            className="relative rounded-[40px] h-[700px] w-full object-cover"
          />

        </div>

        <div>

          <p className="uppercase tracking-[0.3em] text-sm text-white/40">
            Founder Vision
          </p>

          <h2 className="text-5xl lg:text-8xl font-black mt-8 leading-tight">

            Building The
            <br />
            Future Of
            <br />
            Food Culture

          </h2>

          <p className="mt-10 text-lg text-white/70 leading-relaxed max-w-xl">

            Recipe Secrets was created to merge AI,
            luxury food culture, creator media and viral storytelling
            into one next-generation platform for modern creators.

          </p>

          <p className="mt-8 text-lg text-white/50 leading-relaxed max-w-xl">

            Our mission is to empower food influencers,
            creators and brands with the tools, trends and inspiration
            needed to dominate the future of digital food media.

          </p>

          <button className="mt-12 glow-button bg-white text-black px-10 py-5 rounded-full font-semibold hover:scale-105 transition duration-500">

            Read Vision

          </button>

        </div>

      </div>

    </section>
  );
}
