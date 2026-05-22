
export default function FeaturedCreators() {

  const creators = [
    {
      name: "Sophia Kim",
      role: "Luxury Food Creator",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1600&auto=format&fit=crop",
    },

    {
      name: "Daniel Carter",
      role: "Viral Recipe Expert",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1600&auto=format&fit=crop",
    },

    {
      name: "Mia Johnson",
      role: "TikTok Food Influencer",
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <section className="px-8 lg:px-20 py-32">

      <div className="mb-16">

        <p className="uppercase tracking-[0.3em] text-sm text-white/40">
          Featured Creators
        </p>

        <h2 className="text-5xl lg:text-8xl font-black mt-8 leading-tight">

          Meet The Creators
          <br />
          Defining Food Culture

        </h2>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {creators.map((creator, index) => (

          <div
            key={index}
            className="group luxury-card rounded-[40px] overflow-hidden border border-white/10 bg-white/[0.03]"
          >

            <div className="h-[500px] overflow-hidden">

              <img
                src={creator.image}
                alt={creator.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

            </div>

            <div className="p-8">

              <h3 className="text-3xl font-black">

                {creator.name}

              </h3>

              <p className="mt-3 uppercase tracking-[0.25em] text-sm text-white/40">

                {creator.role}

              </p>

              <button className="mt-8 glow-button bg-white text-black px-6 py-3 rounded-full hover:scale-105 transition duration-500">

                View Profile

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
