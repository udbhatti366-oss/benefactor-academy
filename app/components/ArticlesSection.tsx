
export default function ArticlesSection() {

  const articles = [
    {
      title: "Top Viral Luxury Breakfast Trends In 2026",
      category: "Luxury Food",
    },

    {
      title: "How AI Is Changing Food Content Forever",
      category: "AI Trends",
    },

    {
      title: "Celebrity Matcha Drinks Taking Over TikTok",
      category: "Viral Drinks",
    },
  ];

  return (
    <section className="px-8 lg:px-20 py-28">

      <div className="mb-16">

        <p className="uppercase tracking-[0.3em] text-sm text-white/40">
          Latest Articles
        </p>

        <h2 className="text-5xl lg:text-7xl font-black mt-6">

          Discover Viral Recipes
          <br />
          & Luxury Food Trends

        </h2>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {articles.map((article, index) => (

          <div
            key={index}
            className="group rounded-[35px] overflow-hidden border border-white/10 bg-white/[0.03]"
          >

            <div className="h-[320px] overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1600&auto=format&fit=crop"
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

            </div>

            <div className="p-8">

              <p className="uppercase tracking-[0.25em] text-sm text-white/40">

                {article.category}

              </p>

              <h3 className="text-3xl font-black mt-6 leading-tight">

                {article.title}

              </h3>

              <button className="mt-8 text-sm uppercase tracking-[0.25em] text-white/60 hover:text-white transition">

                Read Article →

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
