
export default function CreatorsPage() {

  const creators = [
    {
      name: "TikTok Food Creators",

      desc: "AI-powered growth systems for viral food creators.",
    },

    {
      name: "Pinterest Food Bloggers",

      desc: "Luxury aesthetic food strategy & Pinterest scaling.",
    },

    {
      name: "Instagram Chefs",

      desc: "Creator tools, AI captions & viral growth ideas.",
    },

    {
      name: "YouTube Food Channels",

      desc: "AI scripts, thumbnails & trend prediction systems.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-8 lg:px-24 py-32">

      <div className="max-w-5xl">

        <p className="uppercase tracking-[0.4em] text-sm text-white/40">

          Creator Economy

        </p>

        <h1 className="text-6xl lg:text-8xl font-black mt-8 leading-tight">

          Creator Hub
          <br />

          For Food Influencers

        </h1>

      </div>

      <div className="grid lg:grid-cols-2 gap-10 mt-24">

        {creators.map((creator, index) => (

          <div
            key={index}
            className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10"
          >

            <h2 className="text-4xl font-black leading-tight">

              {creator.name}

            </h2>

            <p className="text-white/60 text-lg mt-6 leading-relaxed">

              {creator.desc}

            </p>

          </div>

        ))}

      </div>

    </main>
  );
}
