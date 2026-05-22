export default function HeroSection() {
  return (
    <section className="px-8 lg:px-20 pt-10 lg:pt-20">

      
<div className="relative floating-card">

<div className="absolute -bottom-10 -left-10 floating-card-delay">

  <div className="backdrop-blur-2xl bg-white/10 border border-white/10 rounded-[30px] p-8 shadow-2xl">

    <p className="uppercase tracking-[0.25em] text-xs text-white/50">
      Trending
    </p>

    <h3 className="text-4xl font-black mt-4">
      5M+
    </h3>

    <p className="mt-3 text-white/60">
      Monthly Food Discoveries
    </p>

  </div>

</div>

<div className="absolute top-10 -right-10 floating-card">

  <div className="backdrop-blur-2xl bg-black/50 border border-white/10 rounded-[30px] p-8 shadow-2xl">

    <p className="uppercase tracking-[0.25em] text-xs text-white/50">
      Creator Growth
    </p>

    <h3 className="text-4xl font-black mt-4">
      120K+
    </h3>

    <p className="mt-3 text-white/60">
      Influencer Community
    </p>

  </div>

</div>






        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2000&auto=format&fit=crop"
          alt="Food Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute bottom-10 left-10 floating-card-delay"></div>

        <div className="relative z-10 max-w-4xl px-10 lg:px-20 py-24 text-white">

          <p className="uppercase tracking-[0.4em] text-sm text-white/70">
            Premium Food Discoveries
          </p>

          <h1 className="text-6xl lg:text-8xl font-black leading-[0.95] mt-6">
            Discover Viral Recipes & Luxury Food Trends
          </h1>

          <p className="mt-8 text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed">
            Curated recipes, aesthetic dishes, kitchen finds and modern food inspiration loved by creators worldwide.
          </p>

          <div className="flex flex-wrap gap-6 mt-10">

            
<button className="glow-button bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-110 hover:shadow-2xl hover:shadow-white/20 transition duration-500">

              Explore Recipes
            </button>

            <button className="border border-white/40 px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300">
              View Trends
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
