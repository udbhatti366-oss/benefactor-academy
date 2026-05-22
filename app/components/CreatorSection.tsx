
export default function CreatorSection() {

  return (
    <section className="px-8 lg:px-20 py-28">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <p className="uppercase tracking-[0.3em] text-sm text-white/40">
            For Food Creators
          </p>

          <h2 className="text-5xl lg:text-7xl font-black leading-tight mt-6">

            Grow Faster
            <br />
            With AI-Powered
            <br />
            Food Content

          </h2>

          <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-xl">

            Discover viral food trends, AI-generated captions,
            creator insights, luxury food aesthetics and content strategies
            designed for modern cooking influencers.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="glow-button bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-500">

              Join Creator Hub

            </button>

            <button className="border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-500">

              Explore AI Tools

            </button>

          </div>

        </div>

        <div className="relative">

          <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1600&auto=format&fit=crop"
            alt="Creator"
            className="relative rounded-[40px] h-[700px] w-full object-cover"
          />

        </div>

      </div>

    </section>
  );
}

