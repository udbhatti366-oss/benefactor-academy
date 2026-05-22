
export default function FinalCTA() {

  return (
    <section className="px-8 lg:px-20 py-40">

      <div className="relative overflow-hidden rounded-[60px] border border-white/10 bg-gradient-to-br from-pink-500/10 via-black to-blue-500/10 p-16 lg:p-28 text-center">

        <div className="absolute inset-0 backdrop-blur-3xl"></div>

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-5xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-sm text-white/40">
            Future Of Food Culture
          </p>

          <h2 className="text-5xl lg:text-9xl font-black mt-10 leading-none">

            Build The Next
            <br />
            Viral Food Empire

          </h2>

          <p className="mt-12 text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">

            Join creators, influencers and trendsetters using AI-powered food intelligence
            to dominate the future of digital food culture.

          </p>

          <div className="flex flex-col lg:flex-row gap-6 justify-center mt-16">

            <button className="glow-button bg-white text-black px-12 py-6 rounded-full text-lg font-semibold hover:scale-105 transition duration-500">

              Start Free Today

            </button>

            <button className="border border-white/20 px-12 py-6 rounded-full text-lg hover:bg-white hover:text-black transition duration-500">

              Explore AI Platform

            </button>

          </div>

          <div className="flex flex-wrap justify-center gap-10 mt-16 text-white/40 uppercase tracking-[0.25em] text-sm">

            <p>AI Powered</p>
            <p>Creator Focused</p>
            <p>Luxury Food Trends</p>
            <p>Global Community</p>

          </div>

        </div>

      </div>

    </section>
  );
}
