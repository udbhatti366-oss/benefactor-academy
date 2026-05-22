
export default function DashboardPreview() {

  return (
    <section className="px-8 lg:px-20 py-32">

      <div className="text-center max-w-4xl mx-auto">

        <p className="uppercase tracking-[0.3em] text-sm text-white/40">
          Platform Preview
        </p>

        <h2 className="text-5xl lg:text-8xl font-black mt-8 leading-tight">

          Your AI Food
          <br />
          Creator Dashboard

        </h2>

      </div>

      <div className="mt-24 rounded-[50px] border border-white/10 bg-white/[0.03] overflow-hidden">

        <div className="border-b border-white/10 px-8 py-6 flex items-center gap-3">

          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>

        </div>

        <div className="grid lg:grid-cols-[280px_1fr]">

          <div className="border-r border-white/10 p-8">

            <div className="space-y-5 text-white/70">

              <p>Dashboard</p>
              <p>AI Recipes</p>
              <p>Viral Trends</p>
              <p>Creator Analytics</p>
              <p>Content Ideas</p>
              <p>Brand Deals</p>

            </div>

          </div>

          <div className="p-10">

            <div className="grid lg:grid-cols-3 gap-6">

              <div className="rounded-3xl bg-white/[0.04] border border-white/10 p-8">

                <p className="text-white/50 text-sm uppercase tracking-[0.2em]">
                  Viral Score
                </p>

                <h3 className="text-5xl font-black mt-6">
                  98%
                </h3>

              </div>

              <div className="rounded-3xl bg-white/[0.04] border border-white/10 p-8">

                <p className="text-white/50 text-sm uppercase tracking-[0.2em]">
                  Engagement
                </p>

                <h3 className="text-5xl font-black mt-6">
                  4.2M
                </h3>

              </div>

              <div className="rounded-3xl bg-white/[0.04] border border-white/10 p-8">

                <p className="text-white/50 text-sm uppercase tracking-[0.2em]">
                  AI Trends
                </p>

                <h3 className="text-5xl font-black mt-6">
                  124
                </h3>

              </div>

            </div>

            <div className="mt-10 rounded-[35px] border border-white/10 bg-black/30 p-10">

              <p className="uppercase tracking-[0.25em] text-sm text-white/40">
                AI Insight
              </p>

              <h3 className="text-4xl font-black mt-6 leading-tight">

                Matcha luxury breakfast content is projected
                to trend 340% higher this month.

              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}