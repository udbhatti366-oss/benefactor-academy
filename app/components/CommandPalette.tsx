
export default function CommandPalette() {

  return (
    <section className="px-8 lg:px-20 py-32">

      <div className="max-w-5xl mx-auto">

        <div className="rounded-[40px] border border-white/10 bg-[#0f0f0f] overflow-hidden shadow-2xl">

          <div className="border-b border-white/10 px-6 py-5 flex items-center gap-4">

            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>

          </div>

          <div className="p-8">

            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 flex items-center gap-4">

              <span className="text-white/40 text-xl">
                ⌘
              </span>

              <input
                type="text"
                placeholder="Search viral food trends, AI recipes, creator insights..."
                className="bg-transparent outline-none w-full text-lg text-white"
              />

            </div>

            <div className="mt-8 space-y-4">

              <div className="flex items-center justify-between rounded-2xl bg-white/[0.03] border border-white/10 px-6 py-5 hover:bg-white hover:text-black transition duration-300">

                <div>

                  <p className="font-semibold">
                    Generate Viral Breakfast Idea
                  </p>

                  <p className="text-sm opacity-60 mt-1">
                    AI Food Assistant
                  </p>

                </div>

                <span>
                  ↵
                </span>

              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/[0.03] border border-white/10 px-6 py-5 hover:bg-white hover:text-black transition duration-300">

                <div>

                  <p className="font-semibold">
                    Discover Luxury Dessert Trends
                  </p>

                  <p className="text-sm opacity-60 mt-1">
                    Viral Trend Engine
                  </p>

                </div>

                <span>
                  ↵
                </span>

              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/[0.03] border border-white/10 px-6 py-5 hover:bg-white hover:text-black transition duration-300">

                <div>

                  <p className="font-semibold">
                    AI Creator Analytics Dashboard
                  </p>

                  <p className="text-sm opacity-60 mt-1">
                    Creator Intelligence
                  </p>

                </div>

                <span>
                  ↵
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
