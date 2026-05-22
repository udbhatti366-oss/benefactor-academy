
"use client";

import { useState } from "react";

export default function FAQSection() {

  const faqs = [
    {
      question: "What is Recipe Secrets?",
      answer:
        "Recipe Secrets is an AI-powered platform for viral recipes, luxury food trends and creator growth.",
    },

    {
      question: "How does the AI food assistant work?",
      answer:
        "Our AI helps creators discover viral trends, generate content ideas and predict food culture movements.",
    },

    {
      question: "Is Recipe Secrets free?",
      answer:
        "Yes. You can explore free features while premium creator tools are available through subscriptions.",
    },

    {
      question: "Who is this platform for?",
      answer:
        "Food creators, influencers, chefs, luxury food brands and trend-focused audiences.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-8 lg:px-20 py-32">

      <div className="max-w-5xl mx-auto">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-white/40">
            FAQ
          </p>

          <h2 className="text-5xl lg:text-8xl font-black mt-8 leading-tight">

            Frequently Asked
            <br />
            Questions

          </h2>

        </div>

        <div className="mt-20 space-y-6">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="luxury-card rounded-[35px] border border-white/10 bg-white/[0.03] overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-8 text-left"
              >

                <h3 className="text-2xl font-black">
                  {faq.question}
                </h3>

                <span className="text-3xl">
                  {openIndex === index ? "−" : "+"}
                </span>

              </button>

              {openIndex === index && (

                <div className="px-8 pb-8 text-white/70 leading-relaxed text-lg">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
