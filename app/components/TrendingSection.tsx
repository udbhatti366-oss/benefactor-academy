
export default function TrendingSection() {

  const trends = [
    {
      title: "Luxury Breakfast Bowls",
      category: "Trending 2026",
    },

    {
      title: "AI-Generated Recipes",
      category: "Future Food",
    },

    {
      title: "Celebrity Matcha Drinks",
      category: "Viral Drinks",
    },

    {
      title: "Pinterest Aesthetic Meals",
      category: "Creator Trends",
    },
  ];

  return (
    <section className="luxury-card px-8 lg:px-20 py-28">

      <div className="luxury-card flex items-end justify-between gap-6 mb-16">

        <div>
 
          <p className="luxury-card uppercase tracking-[0.3em] text-sm text-white/40">
            Trending
          </p>

          <h2 className="luxury-card text-5xl lg:text-7xl font-black mt-6">

            Viral Luxury
            <br />
            Food Trends 2026

          </h2>

        </div>

      </div>

      <div className="luxury-card grid lg:grid-cols-2 gap-8">

        {trends.map((trend, index) => (

          <div
            key={index}
            className="luxury-card group border border-white/10 bg-white/[0.03] rounded-[35px] p-10 hover:bg-white hover:text-black transition duration-500 cursor-pointer"
          >

            <p className="luxury-card uppercase tracking-[0.25em] text-sm opacity-60">

              {trend.category}

            </p>

            <h3 className="luxury-card text-3xl lg:text-4xl font-black mt-6 leading-tight">

              {trend.title}

            </h3>

            <div className="luxury-card mt-10 flex items-center justify-between">

              <span className="luxury-card text-sm uppercase tracking-[0.25em] opacity-60">

                Explore Trend

              </span>

              <span className="luxury-card text-3xl group-hover:translate-x-2 transition duration-500">

                →

              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

