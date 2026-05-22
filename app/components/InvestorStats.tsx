
export default function InvestorStats() {

  const stats = [
    {
      number: "5M+",
      label: "Monthly Reach",
    },

    {
      number: "120K+",
      label: "Creator Community",
    },

    {
      number: "850+",
      label: "Luxury Food Discoveries",
    },

    {
      number: "98%",
      label: "Engagement Growth",
    },
  ];

  return (
    <section className="px-8 lg:px-20 py-24">

      <div className="grid lg:grid-cols-4 gap-8">

        {stats.map((stat, index) => (

          <div
            key={index}
            className="luxury-card rounded-[35px] border border-white/10 bg-white/[0.03] p-10 text-center"
          >

            <h3 className="text-5xl lg:text-6xl font-black">

              {stat.number}

            </h3>

            <p className="mt-5 uppercase tracking-[0.25em] text-sm text-white/40">

              {stat.label}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}
