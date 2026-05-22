
export default function PartnersSection() {

  const brands = [
    "Netflix",
    "TikTok",
    "YouTube",
    "OpenAI",
    "Instagram",
    "Spotify",
  ];

  return (
    <section className="px-8 lg:px-20 py-20">

      <p className="uppercase tracking-[0.3em] text-sm text-white/40 text-center">
        Trusted By Modern Creators
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 mt-14">

        {brands.map((brand, index) => (

          <div
            key={index}
            className="rounded-3xl border border-white/10 bg-white/[0.03] py-8 text-center text-2xl font-black text-white/70 hover:bg-white hover:text-black transition duration-500"
          >

            {brand}

          </div>

        ))}

      </div>

    </section>
  );
}
