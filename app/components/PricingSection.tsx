
export default function PricingSection() {

  const plans = [
    {
      name: "Starter",
      price: "Free",
      features: [
        "Trending Recipes",
        "Weekly Newsletter",
        "Food Inspiration",
      ],
    },

    {
      name: "Creator Pro",
      price: "$29",
      features: [
        "AI Recipe Tools",
        "Viral Captions",
        "Trend Analytics",
        "Creator Growth System",
      ],
    },

    {
      name: "Elite",
      price: "$199",
      features: [
        "Private Creator Community",
        "Luxury Trend Reports",
        "AI Automation",
        "Brand Collaborations",
      ],
    },
  ];

  return (
    <section className="px-8 lg:px-20 py-32">

      <div className="text-center max-w-4xl mx-auto">

        <p className="uppercase tracking-[0.3em] text-sm text-white/40">
          Pricing
        </p>

        <h2 className="text-5xl lg:text-8xl font-black mt-8 leading-tight">

          Monetize Your
          <br />
          Food Influence

        </h2>

      </div>

      <div className="grid lg:grid-cols-3 gap-8 mt-24">

        {plans.map((plan, index) => (

          <div
            key={index}
            className="rounded-[40px] border border-white/10 bg-white/[0.03] p-12 hover:-translate-y-2 transition duration-500"
          >

            <p className="uppercase tracking-[0.25em] text-sm text-white/40">
              {plan.name}
            </p>

            <h3 className="text-6xl font-black mt-8">

              {plan.price}

            </h3>

            <div className="mt-10 space-y-5">

              {plan.features.map((feature, i) => (

                <div
                  key={i}
                  className="flex items-center gap-4 text-white/70"
                >

                  <span>✦</span>

                  <span>{feature}</span>

                </div>

              ))}

            </div>

            <button className="mt-12 w-full glow-button bg-white text-black py-5 rounded-full font-semibold hover:scale-105 transition duration-500">

              Get Started

            </button>

          </div>

        ))}

      </div>

    </section>
  );
}
