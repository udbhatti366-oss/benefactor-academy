
export default function TestimonialsSection() {

  const testimonials = [
    {
      name: "Sophia Carter",
      role: "Food Creator",
      text:
        "Recipe Secrets completely changed how I discover trends and create viral food content.",
    },

    {
      name: "Daniel Lee",
      role: "Luxury Chef",
      text:
        "The AI insights and premium aesthetics make this feel like the future of food media.",
    },

    {
      name: "Mia Johnson",
      role: "TikTok Influencer",
      text:
        "My engagement exploded after using the viral food trend strategies from this platform.",
    },
  ];

  return (
    <section className="px-8 lg:px-20 py-32">

      <div className="text-center max-w-4xl mx-auto">

        <p className="uppercase tracking-[0.3em] text-sm text-white/40">
          Testimonials
        </p>

        <h2 className="text-5xl lg:text-8xl font-black mt-8 leading-tight">

          Loved By
          <br />
          Food Creators

        </h2>

      </div>

      <div className="grid lg:grid-cols-3 gap-8 mt-24">

        {testimonials.map((item, index) => (

          <div
            key={index}
            className="luxury-card rounded-[40px] border border-white/10 bg-white/[0.03] p-10"
          >

            <div className="flex items-center gap-1 text-2xl">

              ⭐ ⭐ ⭐ ⭐ ⭐

            </div>

            <p className="mt-8 text-xl leading-relaxed text-white/70">

              "{item.text}"

            </p>

            <div className="mt-10">

              <h3 className="text-2xl font-black">
                {item.name}
              </h3>

              <p className="mt-2 text-white/40 uppercase tracking-[0.25em] text-sm">

                {item.role}

              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
