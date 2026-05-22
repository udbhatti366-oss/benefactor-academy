
import Navbar from "./components/navbar";
import NewsletterSection from "./components/NewsletterSection";

import Footer from "./components/footer";



export default function Home() {

  return (
    <main className="bg-black text-white overflow-hidden">

      <Navbar />

      <section className="relative min-h-screen flex items-center px-8 lg:px-24">

        <div className="absolute inset-0 opacity-30">

          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2200&auto=format&fit=crop"
            alt="Luxury Food"
            className="w-full h-full object-cover"
          />

        </div>

        <div className="absolute top-[-200px] right-[-200px] hero-glow" />

        <div className="relative z-10 max-w-7xl">

          <p className="uppercase tracking-[0.5em] text-sm text-white/50">

            AI-Powered Luxury Food Platform

          </p>

          <h1 className="text-6xl lg:text-[130px] font-black leading-[0.9] mt-10 text-gradient">

            Discover
            <br />

            Viral Recipes
            <br />

            & Luxury
            <br />

            Food Trends

          </h1>

          <p className="text-xl text-white/70 max-w-2xl mt-10 leading-relaxed">

            The AI-powered luxury food discovery platform for the creator generation.

          </p>

          <div className="flex flex-wrap gap-6 mt-14">

            <a
              href="/blog"
              className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition duration-500"
            >

              Explore Trends

            </a>

            <a
              href="/ai-tools"
              className="glass px-8 py-4 rounded-full hover:bg-white/10 transition duration-500"
            >

              AI Tools

            </a>

          </div>

        </div>

      </section>

      <section className="px-8 lg:px-24 py-32">

        <div className="grid lg:grid-cols-3 gap-10">

          <div className="luxury-card glass rounded-[40px] p-10">

            <p className="uppercase tracking-[0.3em] text-sm text-white/40">

              Viral Trends

            </p>

            <h2 className="text-4xl font-black mt-6 leading-tight">

              TikTok & Pinterest Food Trends

            </h2>

          </div>

          <div className="luxury-card glass rounded-[40px] p-10">

            <p className="uppercase tracking-[0.3em] text-sm text-white/40">

              AI Creator Tools

            </p>

            <h2 className="text-4xl font-black mt-6 leading-tight">

              AI Growth Systems For Creators

            </h2>

          </div>

          <div className="luxury-card glass rounded-[40px] p-10">

            <p className="uppercase tracking-[0.3em] text-sm text-white/40">

              Luxury Food Culture

            </p>

            <h2 className="text-4xl font-black mt-6 leading-tight">

              Vogue-Level Food Discovery

            </h2>

          </div>

        </div>

      </section>

      <section className="px-8 lg:px-24 py-32">

        <div className="flex items-end justify-between mb-16">

          <div>

            <p className="uppercase tracking-[0.4em] text-sm text-white/40">

              Trending Articles

            </p>

            <h2 className="text-5xl lg:text-7xl font-black mt-6">

              Viral Food Stories

            </h2>

          </div>

          <a
            href="/blog"
            className="text-white/60 hover:text-white transition"
          >

            View All

          </a>

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          <a
            href="/blog/viral-luxury-food-trends-2026"
            className="luxury-card glass rounded-[40px] overflow-hidden"
          >

            <div className="h-[320px] overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop"
                alt="Luxury Food"
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />

            </div>

            <div className="p-8">

              <h3 className="text-3xl font-black leading-tight">

                Top Viral Luxury Food Trends of 2026

              </h3>

            </div>

          </a>

          <a
            href="/blog/best-ai-tools-for-food-creators"
            className="luxury-card glass rounded-[40px] overflow-hidden"
          >

            <div className="h-[320px] overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format&fit=crop"
                alt="AI Food"
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />

            </div>

            <div className="p-8">

              <h3 className="text-3xl font-black leading-tight">

                Best AI Tools For Food Creators

              </h3>

            </div>

          </a>

          <a
            href="/blog/celebrity-breakfast-trends"
            className="luxury-card glass rounded-[40px] overflow-hidden"
          >

            <div className="h-[320px] overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1600&auto=format&fit=crop"
                alt="Breakfast"
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />

            </div>

            <div className="p-8">

              <h3 className="text-3xl font-black leading-tight">

                Celebrity Breakfast Trends

              </h3>

            </div>

          </a>

        </div>

      </section>

      <NewsletterSection />

      <Footer />

    </main>
  );
}

