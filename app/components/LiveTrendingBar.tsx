
export default function LiveTrendingBar() {

  const trends = [
    "🔥 Matcha Croissant Bowls",
    "🍓 Viral Strawberry Cheesecake Cups",
    "🥐 Luxury French Toast Trends",
    "☕ Celebrity Coffee Recipes",
    "🍫 Dubai Chocolate Desserts",
    "🥗 AI Healthy Meal Trends",
  ];

  return (
    <section className="border-y border-white/10 bg-white/[0.03] overflow-hidden py-5">

      <div className="flex gap-10 whitespace-nowrap animate-[scroll_30s_linear_infinite]">

        {[...trends, ...trends].map((trend, index) => (

          <div
            key={index}
            className="text-lg font-semibold text-white/70"
          >

            {trend}

          </div>

        ))}

      </div>

    </section>
  );
}
