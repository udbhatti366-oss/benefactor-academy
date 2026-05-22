"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function NewsletterSection() {

  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  async function handleSubscribe() {

    if (!email) return;

    setLoading(true);


const { data, error } = await supabase
  .from("subscribers")
  .insert([{ email }]);

console.log(data);

console.log(error);



    if (error) {

      setMessage("Email already exists or invalid.");

    } else {

      setMessage("Successfully subscribed 😎🔥");

      setEmail("");
    }

    setLoading(false);
  }

  return (
    <section className="px-8 lg:px-24 py-32">

      <div className="glass rounded-[50px] p-12 lg:p-20 max-w-5xl mx-auto text-center">

        <p className="uppercase tracking-[0.4em] text-sm text-white/40">

          Join Recipe Secrets

        </p>

        <h2 className="text-5xl lg:text-7xl font-black mt-8 leading-tight">

          Get Viral Food Trends
          <br />

          Before Everyone Else

        </h2>

        <p className="text-white/60 text-xl mt-8 max-w-2xl mx-auto leading-relaxed">

          Join the AI-powered luxury food creator movement.

        </p>

        <div className="flex flex-col lg:flex-row gap-5 mt-14 max-w-2xl mx-auto">

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white/5 border border-white/10 rounded-full px-8 py-5 outline-none"
          />

          <button
            onClick={handleSubscribe}
            disabled={loading}
            className="bg-white text-black px-10 py-5 rounded-full font-bold hover:scale-105 transition duration-300"
          >

            {loading ? "Loading..." : "Subscribe"}

          </button>

        </div>

        {message && (

          <p className="mt-8 text-white/70">

            {message}

          </p>

        )}

      </div>

    </section>
  );
}

