
export default function ReelsSection() {

  const reels = [
    {
      title: "Luxury Matcha Bowl",
      views: "2.4M Views",
    },

    {
      title: "Viral Croissant Pasta",
      views: "5.8M Views",
    },

    {
      title: "Celebrity Breakfast Trend",
      views: "8.1M Views",
    },
  ];

  return (
    <section className="px-8 lg:px-20 py-32">

      <div className="mb-16">

        <p className="uppercase tracking-[0.3em] text-sm text-white/40">
          Viral Reels
        </p>

        <h2 className="text-5xl lg:text-8xl font-black mt-8 leading-tight">

          Scroll Viral
          <br />
          Food Content

        </h2>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {reels.map((reel, index) => (

          <div
            key={index}
            className="group relative overflow-hidden rounded-[40px] border border-white/10 h-[700px]"
          >

            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop"
              alt={reel.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-8">

              <p className="uppercase tracking-[0.25em] text-sm text-white/60">

                {reel.views}

              </p>

              <h3 className="text-4xl font-black mt-4">

                {reel.title}

              </h3>

            </div>

            <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center text-2xl">

              ▶

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
