
export default function AIToolsPage() {

  const tools = [
    {
      title: "AI Recipe Generator",

      desc: "Generate viral luxury recipes instantly with AI.",
    },

    {
      title: "AI Caption Generator",

      desc: "Create TikTok & Instagram food captions in seconds.",
    },

    {
      title: "AI Meal Planner",

      desc: "Smart meal planning for creators & healthy lifestyles.",
    },

    {
      title: "AI Hashtag Generator",

      desc: "Generate viral hashtags for food creators automatically.",
    },

    {
      title: "AI Grocery Assistant",

      desc: "Luxury grocery planning powered by AI systems.",
    },

    {
      title: "Viral Trend Predictor",

      desc: "Predict upcoming food trends before they explode online.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-8 lg:px-24 py-32">

      <div className="max-w-6xl">

        <p className="uppercase tracking-[0.4em] text-sm text-white/40">

          AI Creator Systems

        </p>

        <h1 className="text-6xl lg:text-8xl font-black mt-8 leading-[0.9]">

          AI Tools
          <br />

          For Food Creators

        </h1>

        <p className="text-white/60 text-xl mt-10 max-w-3xl leading-relaxed">

          Discover AI-powered creator tools designed for viral food creators, luxury brands and modern content ecosystems.

        </p>

      </div>

      <div className="grid lg:grid-cols-3 gap-10 mt-24">

        {tools.map((tool, index) => (

          <div
            key={index}
            className="luxury-card glass rounded-[40px] p-10"
          >

            <h2 className="text-3xl font-black leading-tight">

              {tool.title}

            </h2>

            <p className="text-white/60 text-lg mt-6 leading-relaxed">

              {tool.desc}

            </p>

            <button className="bg-white text-black px-6 py-3 rounded-full mt-10 font-semibold hover:scale-105 transition duration-300">

              Explore Tool

            </button>

          </div>

        ))}

      </div>

    </main>
  );
}
