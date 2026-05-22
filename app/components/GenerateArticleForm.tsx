"use client";

import { useState } from "react";

import { supabase } from "../lib/supabase";

export default function GenerateArticleForm() {

  const [keyword, setKeyword] = useState("");

  const [message, setMessage] = useState("");

  async function generateArticle() {

    if (!keyword) return;

    const title = keyword;

    const slug = keyword
      .toLowerCase()
      .replaceAll(" ", "-");

    const content = `
${keyword} is becoming one of the biggest luxury food trends of 2026.

Creators across TikTok, Pinterest and Instagram are rapidly adopting this trend.

## Why This Trend Is Exploding

Luxury aesthetics and creator culture are driving massive engagement online.

## AI + Food Culture

AI-powered discovery platforms are changing food media forever.

## Creator Strategy

Food influencers should focus on:
- short-form video
- Pinterest content
- luxury aesthetics
- viral storytelling

## Final Thoughts

${keyword} represents the future of food creator culture.
`;
const category = "Viral Food Trends";
    const image =
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop";

    const { error } = await supabase
      .from("articles")
      .insert([
        {
          title,
          slug,
          content,
          image,
          category,
        },
      ]);

    if (error) {

      setMessage(error.message);

    } else {

      setMessage("Article published 😎🔥");

      setKeyword("");
    }
  }

  return (
    <div className="glass rounded-[40px] p-10 mt-20">

      <h2 className="text-5xl font-black">

        AI Article Publisher

      </h2>

      <div className="flex flex-col lg:flex-row gap-5 mt-10">

        <input
          type="text"
          placeholder="Enter article keyword..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="flex-1 bg-white/5 border border-white/10 rounded-full px-8 py-5 outline-none"
        />

        <button
          onClick={generateArticle}
          className="bg-white text-black px-10 py-5 rounded-full font-bold"
        >

          Publish

        </button>

      </div>

      {message && (

        <p className="mt-8 text-white/70">

          {message}

        </p>

      )}

    </div>
  );
}
