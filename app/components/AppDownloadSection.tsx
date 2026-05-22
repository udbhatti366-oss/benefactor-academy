
export default function AppDownloadSection() {

  return (
    <section className="px-8 lg:px-20 py-32">

      <div className="relative overflow-hidden rounded-[50px] border border-white/10 bg-gradient-to-br from-black via-zinc-900 to-black p-16 lg:p-24">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-white/40">
              Mobile Experience
            </p>

            <h2 className="text-5xl lg:text-8xl font-black mt-8 leading-tight">

              Discover Food
              <br />
              Trends Anywhere

            </h2>

            <p className="mt-10 text-lg text-white/70 leading-relaxed max-w-xl">

              Access AI-powered food discovery,
              viral recipe trends and creator tools directly from your phone.

            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-14">

              <button className="bg-white text-black px-10 py-5 rounded-full font-semibold hover:scale-105 transition duration-500">

                App Store

              </button>

              <button className="border border-white/20 px-10 py-5 rounded-full hover:bg-white hover:text-black transition duration-500">

                Google Play

              </button>

            </div>

          </div>

          <div className="relative flex justify-center">

            <div className="w-[320px] h-[650px] rounded-[50px] border border-white/10 bg-black overflow-hidden shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1600&auto=format&fit=crop"
                alt="App Preview"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
