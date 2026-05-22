
export default function Footer() {

  return (
    <footer className="border-t border-white/10 px-8 lg:px-24 py-20">

      <div className="flex flex-col lg:flex-row justify-between gap-12">

        <div>

          <h2 className="text-4xl font-black">

            Recipe Secrets

          </h2>

          <p className="text-white/50 mt-6 max-w-xl leading-relaxed">

            The AI-powered luxury food discovery platform for the creator generation.

          </p>

        </div>

        <div className="grid grid-cols-2 gap-10 text-white/60">

          <div className="flex flex-col gap-4">

            <a href="/blog">Blog</a>

            <a href="/trends">Trends</a>

            <a href="/ai-tools">AI Tools</a>

            <a href="/creators">Creators</a>

          </div>

          <div className="flex flex-col gap-4">

            <a href="#">TikTok</a>

            <a href="#">Pinterest</a>

            <a href="#">Instagram</a>

            <a href="#">YouTube</a>

          </div>

        </div>

      </div>

    </footer>
  );
}
