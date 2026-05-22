
export default function StatsSection() {

  return (
    <section className="px-8 lg:px-20 py-24">

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white/[0.03] border border-white/10 rounded-[30px] p-10 backdrop-blur-xl hover:-translate-y-2 transition duration-500">

          <p className="text-5xl font-black">5M+</p>

          <p className="mt-4 text-white/60 uppercase tracking-[0.25em] text-sm">
            Monthly Food Discoveries
          </p>

        </div>

        <div className="bg-white/[0.03] border border-white/10 rounded-[30px] p-10 backdrop-blur-xl hover:-translate-y-2 transition duration-500">

          <p className="text-5xl font-black">120K+</p>

          <p className="mt-4 text-white/60 uppercase tracking-[0.25em] text-sm">
            Newsletter Readers
          </p>

        </div>

        <div className="bg-white/[0.03] border border-white/10 rounded-[30px] p-10 backdrop-blur-xl hover:-translate-y-2 transition duration-500">

          <p className="text-5xl font-black">850+</p>

          <p className="mt-4 text-white/60 uppercase tracking-[0.25em] text-sm">
            Curated Discoveries
          </p>

        </div>

        <div className="bg-white/[0.03] border border-white/10 rounded-[30px] p-10 backdrop-blur-xl hover:-translate-y-2 transition duration-500">

          <p className="text-5xl font-black">AI</p>

          <p className="mt-4 text-white/60 uppercase tracking-[0.25em] text-sm">
            Powered Trend Engine
          </p>

        </div>

      </div>

    </section>
  );
}

