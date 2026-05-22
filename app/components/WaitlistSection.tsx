
export default function WaitlistSection() {

  return (
    <section className="px-8 lg:px-20 py-32">

      <div className="relative overflow-hidden rounded-[50px] border border-white/10 bg-gradient-to-br from-pink-500/10 via-black to-blue-500/10 p-16 lg:p-24 text-center">

        <div className="absolute inset-0 backdrop-blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-sm text-white/40">
            Early Access
          </p>

          <h2 className="text-5xl lg:text-8xl font-black mt-8 leading-tight">

            Join The Future
            <br />
            Of Food Creators

          </h2>

          <p className="mt-10 text-lg text-white/70 leading-relaxed">

            Get early access to AI creator tools,
            viral trend intelligence, luxury food insights
            and premium creator growth systems.

          </p>

          <div className="flex flex-col lg:flex-row gap-5 justify-center mt-14">

            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border border-white/10 rounded-full px-8 py-5 text-white outline-none w-full lg:w-[420px]"
            />

            <button className="glow-button bg-white text-black px-10 py-5 rounded-full font-semibold hover:scale-105 transition duration-500">

              Join Waitlist

            </button>

          </div>

          <p className="mt-8 text-sm text-white/40">

            12,000+ creators already joined

          </p>

        </div>

      </div>

    </section>
  );
}