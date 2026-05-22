
export default function AISearchSection() {

  return (
    <section className="px-8 lg:px-20 py-32">

      <div className="rounded-[50px] border border-white/10 bg-white/[0.03] p-16 lg:p-24">

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-white/40">
            AI Search
          </p>

          <h2 className="text-5xl lg:text-8xl font-black mt-8 leading-tight">

            Ask Anything
            <br />
            About Food Trends

          </h2>

          <p className="mt-10 text-lg text-white/70 leading-relaxed">

            Search viral recipes, luxury meals,
            creator strategies and AI-powered food insights instantly.

          </p>

          <div className="mt-14 relative max-w-4xl mx-auto">

            <input
              type="text"
              placeholder="Ask AI about viral recipes, luxury desserts, creator growth..."
              className="w-full bg-black/40 border border-white/10 rounded-full px-10 py-7 text-lg text-white outline-none"
            />

            <button className="absolute right-3 top-1/2 -translate-y-1/2 glow-button bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-500">

              Search

            </button>

          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <button className="bg-white/10 border border-white/10 px-5 py-3 rounded-full text-sm hover:bg-white hover:text-black transition duration-300">

              Viral Breakfasts

            </button>

            <button className="bg-white/10 border border-white/10 px-5 py-3 rounded-full text-sm hover:bg-white hover:text-black transition duration-300">

              Luxury Desserts

            </button>

            <button className="bg-white/10 border border-white/10 px-5 py-3 rounded-full text-sm hover:bg-white hover:text-black transition duration-300">

              TikTok Recipes

            </button>

            <button className="bg-white/10 border border-white/10 px-5 py-3 rounded-full text-sm hover:bg-white hover:text-black transition duration-300">

              AI Food Trends

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
