
export default function PressSection() {

  const press = [
    "Featured In Forbes",
    "Trending On TikTok",
    "Loved By Creators",
    "AI-Powered Platform",
  ];

  return (
    <section className="px-8 lg:px-20 py-20">

      <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10 lg:p-16">

        <div className="grid lg:grid-cols-4 gap-8">

          {press.map((item, index) => (

            <div
              key={index}
              className="text-center"
            >

              <h3 className="text-3xl font-black">

                {item}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
