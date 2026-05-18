"use client";

import Link from "next/link";
import { useState } from "react";
import { Playfair_Display } from "next/font/google";

import Logo from "./logo";

const playfair = Playfair_Display({
subsets: ["latin"],
weight: ["700", "800", "900"],
});

export default function Home() {
  
const [menuOpen, setMenuOpen] = useState(false);

return ( <main className="min-h-screen bg-[#0b0b0b] text-white">

         <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-pink-300/20 blur-3xl rounded-full -z-10"></div>

<div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-yellow-200/20 blur-3xl rounded-full -z-10"></div>

{/* HERO SECTION */} <section className="grid lg:grid-cols-2 gap-10 items-center px-8 lg:px-20 py-20">

```
    <div className="inline-flex items-center gap-3 bg-white/90 border border-black/10 px-6 py-3 rounded-full text-base font-semibold shadow-lg mb-8">
  <span className="h-3 w-3 rounded-full bg-green-500"></span>
  Trending Food Discoveries • Daily Inspiration
</div>


      <h1 className={`${playfair.className} text-5xl lg:text-7xl font-black leading-tight`}>

        Cook Smarter.
        <br />
        Eat Better.
        <br />
        Discover More.
      </h1>

      <p className="mt-8 text-lg text-zinc-300

/70 max-w-xl leading-relaxed">
        A premium food discovery brand sharing viral recipes,
        kitchen secrets, meal prep shortcuts and aesthetic cooking inspiration.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-10">

  <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">
    Start Exploring
  </button>

  <button className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300">
    Subscribe
  </button>

</div>

    

    <div>
      <img
        src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format&fit=crop"
        alt="Food"
        className="rounded-[40px] shadow-2xl h-[700px] w-full object-cover"
      />
    </div>
  </section>

  {/* DISCOVERY CARDS */}
  {/* NAVBAR */}

<nav className="sticky top-6 z-50 mx-6 lg:mx-20 flex items-center justify-between px-8 py-5 rounded-full bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl">

  <Logo />


  <div className="hidden md:flex items-center gap-8 text-sm font-medium">

  <Link
    href="/category/viral-recipes"
    className="hover:text-white/60 transition"
  >
    Discover
  </Link>

  <Link
    href="/category/kitchen-finds"
    className="hover:text-white/60 transition"
  >
    Recipes
  </Link>

  <Link
    href="/category/meal-prep"
    className="hover:text-white/60 transition"
  >
    Kitchen
  </Link>

  <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300">
    Subscribe
  </button>

</div>

<button
onClick={() => setMenuOpen(!menuOpen)}
className="md:hidden text-3xl text-white"

>

☰ </button>


  <button className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 hover:shadow-2xl transition duration-300
 hover:scale-105 transition duration-300 ease-out
">
    Subscribe
  </button>
  {
menuOpen && ( <div className="md:hidden bg-[#111111] border-t border-white/10 px-8 py-6 flex flex-col gap-6 text-lg">

```
  <Link href="/category/viral-recipes">
    Discover
  </Link>

  <Link href="/category/kitchen-finds">
    Recipes
  </Link>

  <Link href="/category/meal-prep">
    Kitchen
  </Link>

  <button className="bg-white text-black py-3 rounded-full font-semibold">
    Subscribe
  </button>

</div>


)
}

</nav>

  <section className="px-8 lg:px-20 pb-24">
    <h2 className="text-4xl font-black mb-12">
      Trending Food Discoveries 👀
    </h2>

    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8
">

      <Link
  href="/recipes/chicken-pasta"
  className="block break-inside-avoid bg-white rounded-[32px] overflow-hidden shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-500"
>

<img
 src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1600&auto=format&fit=crop"
 alt="Chicken Pasta"
 className="h-[500px] w-full object-cover"
/>

  <div className="p-8">

```
<p className="uppercase tracking-[0.2em] text-xs text-white/40
 mb-4">
  Viral Discovery
</p>

<h2 className="text-3xl font-black leading-tight text-black">
  Creamy Chicken Pasta
</h2>



<p className="mt-4 text-black/60

">
  Rich creamy texture with restaurant-style presentation.
</p>


  </div>

</Link>


      <Link
  href="/recipes/matcha-latte"
  className="block break-inside-avoid bg-white rounded-[32px] overflow-hidden shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-500"
>

<img
 src="https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=1600&auto=format&fit=crop"
 alt="Matcha Latte"
 className="h-[700px] w-full object-cover"
/>

  <div className="p-8">


<p className="uppercase tracking-[0.2em] text-xs text-white/40
 mb-4">
  Viral Drink
</p>

<h2 className="text-3xl font-black leading-tight text-black">

  Iced Matcha Latte
</h2>

<p className="mt-4 text-black/60
">
  Café aesthetic drinks exploding on Pinterest.
</p>


  </div>

</Link>


      <Link
  href="/recipes/luxury-breakfast-bowl"
  className="block break-inside-avoid bg-white rounded-[32px] overflow-hidden shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-500"
>

<img
 src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format&fit=crop"
 alt="Luxury Breakfast Bowl"
 className="h-[600px] w-full object-cover"
/>

  <div className="p-8">


<p className="uppercase tracking-[0.2em] text-xs text-white/40
 mb-4">
  Healthy Discovery
</p>

<h2 className="text-3xl font-black leading-tight text-black">

  Luxury Breakfast Bowl
</h2>

<p className="mt-4 text-black/60
">
  High-protein breakfast trends everyone is saving.
</p>
```

  </div>

</Link>


    </div>
  </section>

  {/* NEWSLETTER */}
  <section className="mx-8 lg:mx-20 rounded-[40px] bg-black text-white p-10 lg:p-16 mb-20">
    <div className="max-w-3xl">
      <p className="uppercase tracking-[0.3em] text-sm text-white/50 mb-4">
        Join Thousands Of Readers
      </p>

      <h2 className="text-4xl lg:text-6xl font-black leading-tight">
        Get Daily Recipe Secrets & Smart Kitchen Discoveries.
      </h2>

      <p className="mt-6 text-white/70 text-lg">
        Viral recipes, hidden food hacks and aesthetic kitchen finds delivered daily.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mt-10">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 rounded-2xl px-6 py-4 text-black"
        />

        <button className="bg-[#0a0a0a] text-white

 text-black px-8 py-4 rounded-2xl font-semibold">
          Unlock The Secrets
        </button>
      </div>
    </div>
  </section>
  {/* DARK LUXURY SECTION */}

<section className="bg-black text-white px-8 lg:px-20 py-28 mt-24">
  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

```
<div>
  <p className="uppercase tracking-[0.4em] text-sm text-white/40 mb-6">
    Premium Food Intelligence
  </p>

  <h2 className={`${playfair.className} text-5xl lg:text-7xl font-black leading-tight`}>
    Not Just Recipes.
    <br />
    A Food Discovery Experience.
  </h2>

<p className="mt-8 text-lg text-zinc-300 max-w-xl leading-relaxed">


    Discover hidden food trends, kitchen upgrades, viral meal hacks,
    chef-inspired techniques and premium culinary inspiration curated daily.
  </p>

  <button className="mt-10 bg-[#111111]
 text-white
 px-8 py-4 rounded-full font-semibold hover:scale-110
 hover:scale-110
">
    Explore The Experience
  </button>
</div>

<div className="relative">
  <img
    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop"
    alt="Luxury Food"
    className="rounded-[40px] shadow-2xl h-[700px] w-full object-cover"
  />

  <div className="absolute -bottom-10 -left-10 bg-[#111111]
 text-white
 p-8 rounded-[30px] shadow-2xl max-w-xs">
    <p className="text-sm uppercase tracking-widest text-white/40
 mb-2">
      Trending
    </p>

    <h3 className="text-2xl font-black">
      Viral Luxury Food Trends 2026
    </h3>
  </div>
</div>
```

  </div>
</section>
{/* STATS SECTION */}

<section className="px-8 lg:px-20 py-24">
  <div className="bg-[#111111]
 rounded-[40px] shadow-2xl p-10 lg:p-16 grid md:grid-cols-3 gap-10 text-center">

```
<div className="hover:scale-105 transition duration-500">
  <h3 className={`${playfair.className} text-6xl font-black`}>
    5M+
  </h3>

  <p className="mt-4 text-white
/60 font-medium">
    Monthly Food Discoveries
  </p>
</div>

<div className="hover:scale-105 transition duration-500">
  <h3 className={`${playfair.className} text-6xl font-black`}>
    120K+
  </h3>

  <p className="mt-4 text-white
/60 font-medium">
    Newsletter Readers
  </p>
</div>

<div className="hover:scale-105 transition duration-500">
  <h3 className={`${playfair.className} text-6xl font-black`}>
    850+
  </h3>

  <p className="mt-4 text-white
/60 font-medium">
    Curated Discoveries
  </p>
</div>
```

  </div>
</section>
{/* FOOTER */}

<footer className="bg-black text-white px-8 lg:px-20 py-20 mt-24">
  <div className="grid md:grid-cols-4 gap-14">

```
<div>
  <h2 className={`${playfair.className} text-4xl font-black`}>
    Benefactor
  </h2>

  <p className="mt-6 text-white/60 leading-relaxed">
    Premium food discoveries, viral recipes,
    kitchen inspiration and curated culinary experiences.
  </p>
</div>

<div>
  <h3 className="font-bold text-lg mb-6">
    Explore
  </h3>

  <div className="space-y-4 text-white/60">
    <p>Recipes</p>
    <p>Kitchen Finds</p>
    <p>Meal Prep</p>
    <p>Food Trends</p>
  </div>
</div>

<div>
  <h3 className="font-bold text-lg mb-6">
    Resources
  </h3>

  <div className="space-y-4 text-white/60">
    <p>Newsletter</p>
    <p>Affiliate Picks</p>
    <p>Guides</p>
    <p>Discoveries</p>
  </div>
</div>

<div>
  <h3 className="font-bold text-lg mb-6">
    Stay Updated
  </h3>

  <div className="flex flex-col gap-4">
    <input
      type="email"
      placeholder="Enter your email"
      className="rounded-2xl px-6 py-4 text-white
"
    />

    <button className="bg-white text-white
 px-6 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300">
      Join Free
    </button>
  </div>
</div>
```

  </div>

  <div className="border-t border-white/10 mt-16 pt-8 text-white/40 text-sm flex flex-col md:flex-row justify-between gap-4">
    <p>© 2026 Benefactor. All rights reserved.</p>

```
<div className="flex gap-6">
  <p>Privacy</p>
  <p>Terms</p>
  <p>Contact</p>
</div>
```

  </div>
</footer>
<footer className="border-t border-white/10 mt-20">

  <div className="max-w-7xl mx-auto px-8 lg:px-20 py-16">

```
<div className="grid md:grid-cols-4 gap-12">

  <div>
    <h3 className="text-2xl font-black">
      Recipe Secrets
    </h3>

    <p className="mt-4 text-white/50 leading-relaxed">
      A modern food discovery media brand sharing viral recipes,
      kitchen finds and aesthetic cooking inspiration.
    </p>
  </div>

  <div>
    <p className="uppercase tracking-[0.3em] text-xs text-white/40 mb-6">
      Explore
    </p>

    <div className="flex flex-col gap-4 text-white/70">

      <a href="#">
        Viral Recipes
      </a>

      <a href="#">
        Kitchen Finds
      </a>

      <a href="#">
        Meal Prep
      </a>

    </div>
  </div>

  <div>
    <p className="uppercase tracking-[0.3em] text-xs text-white/40 mb-6">
      Company
    </p>

    <div className="flex flex-col gap-4 text-white/70">

      <div>
  <p className="uppercase tracking-[0.3em] text-xs text-white/40 mb-6">
    Company
  </p>

  <div className="flex flex-col gap-4 text-white/70">

```
<Link href="/about">
  About
</Link>

<Link href="/contact">
  Contact
</Link>

<Link href="/privacy-policy">
  Privacy Policy
</Link>

<Link href="/terms">
  Terms
</Link>
```

  </div>
</div>


      <a href="#">
        Newsletter
      </a>

    </div>
  </div>

  <div>
    <p className="uppercase tracking-[0.3em] text-xs text-white/40 mb-6">
      Stay Updated
    </p>

    <div className="flex gap-3">

      <input
        type="email"
        placeholder="Your email"
        className="bg-white
 border border-white/10 rounded-full px-5 py-3 w-full text-sm"
      />

      <button className="bg-white text-black rounded-full px-6 font-semibold hover:scale-105 transition duration-300">
        Join
      </button>

    </div>
  </div>

</div>

<div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

  <p className="text-white/40 text-sm">
    © 2026 Recipe Secrets. All rights reserved.
  </p>

  <p className="text-white/30 text-sm">
    Designed for the next generation of food media.
  </p>

</div>
```

  </div>

</footer>

</main>


);
}
