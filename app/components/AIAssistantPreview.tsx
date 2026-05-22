
export default function AIAssistantPreview() {

  return (
    <section className="px-8 lg:px-20 py-32">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <p className="uppercase tracking-[0.3em] text-sm text-white/40">
            AI Assistant
          </p>

          <h2 className="text-5xl lg:text-8xl font-black mt-8 leading-tight">

            Meet Your
            <br />
            AI Food
            <br />
            Creator Assistant

          </h2>

          <p className="mt-10 text-lg text-white/70 leading-relaxed max-w-xl">

            Generate viral recipe ideas, captions, content hooks,
            trend predictions and creator strategies using AI-powered food intelligence.

          </p>

          <div className="flex flex-wrap gap-5 mt-12">

            <button className="glow-button bg-white text-black px-10 py-5 rounded-full font-semibold hover:scale-105 transition duration-500">

              Try AI Assistant

            </button>

            <button className="border border-white/20 px-10 py-5 rounded-full hover:bg-white hover:text-black transition duration-500">

              Watch Demo

            </button>

          </div>

        </div>

        <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">

          <div className="space-y-6">

            <div className="bg-black/40 rounded-3xl p-6">

              <p className="text-white/50 text-sm">
                User
              </p>

              <p className="mt-3 text-lg">
                Give me a viral luxury breakfast trend idea.
              </p>

            </div>

            <div className="glow-button bg-white text-black rounded-3xl p-6">

              <p className="text-black/50 text-sm">
                AI Assistant
              </p>

              <p className="mt-3 text-lg leading-relaxed">

                Create a “Golden Matcha Croissant Bowl”
                with edible flowers, premium honey drizzle
                and cinematic slow-motion plating for TikTok engagement.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
