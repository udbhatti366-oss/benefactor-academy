
export default function VideoSection() {

  return (
    <section className="px-8 lg:px-20 py-28">

      <div className="grid lg:grid-cols-2 gap-14 items-center">

        <div className="relative rounded-[40px] overflow-hidden h-[700px]">

          <img
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1600&auto=format&fit=crop"
            alt="Luxury Food"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          <button className="absolute inset-0 flex items-center justify-center">

            <div className="w-28 h-28 rounded-full glow-button bg-white text-black flex items-center justify-center text-4xl hover:scale-110 transition duration-500">

              ▶

            </div>

          </button>

        </div>

        <div>

          <p className="uppercase tracking-[0.3em] text-sm text-white/40">
            Featured Video
          </p>

          <h2 className="text-5xl lg:text-7xl font-black leading-tight mt-6">

            The Future
            <br />
            Of Viral
            <br />
            Food Content

          </h2>

          <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-xl">

            Discover cinematic food storytelling, luxury recipes,
            creator-driven trends and AI-powered content strategies
            built for the next generation of cooking influencers.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="glow-button bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-500">

              Watch Now

            </button>

            <button className="border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-500">

              Explore Videos

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

