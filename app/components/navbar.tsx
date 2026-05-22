
export default function Navbar() {

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-black/40 border-b border-white/10">

      <div className="max-w-[1600px] mx-auto px-8 lg:px-24 py-6 flex items-center justify-between">

        <a
          href="/"
          className="text-2xl lg:text-3xl font-black tracking-tight"
        >

          Recipe Secrets

        </a>

        <div className="hidden lg:flex items-center gap-10 text-white/70">

          <a
            href="/blog"
            className="hover:text-white transition"
          >

            Blog

          </a>

          <a
            href="/trends"
            className="hover:text-white transition"
          >

            Trends

          </a>

          <a
            href="/ai-tools"
            className="hover:text-white transition"
          >

            AI Tools

          </a>

          <a
            href="/creators"
            className="hover:text-white transition"
          >

            Creators

          </a>

        </div>

        <a
          href="/blog"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
        >

          Explore

        </a>

      </div>

    </nav>
  );
}
