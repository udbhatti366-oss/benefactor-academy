import GenerateArticleForm from "../components/GenerateArticleForm";
export default function AdminPage() {
    

  return (
    <main className="min-h-screen bg-black text-white px-8 lg:px-24 py-32">

      <div className="max-w-5xl">

        <p className="uppercase tracking-[0.4em] text-sm text-white/40">

          Recipe Secrets CMS

        </p>

        <h1 className="text-6xl lg:text-8xl font-black mt-8 leading-[0.9]">

          Admin
          <br />

          Dashboard

        </h1>

        <p className="text-white/60 text-xl mt-10 leading-relaxed max-w-3xl">

          Control your AI-powered luxury food media empire.

        </p>

      </div>

      <div className="grid lg:grid-cols-3 gap-10 mt-24">

        <div className="glass rounded-[40px] p-10">

          <h2 className="text-3xl font-black">

            SEO Articles

          </h2>

          <p className="text-white/60 mt-6">

            Publish and manage viral food content.

          </p>

        </div>

        <div className="glass rounded-[40px] p-10">

          <h2 className="text-3xl font-black">

            Newsletter Growth

          </h2>

          <p className="text-white/60 mt-6">

            Track audience and subscribers.

          </p>

        </div>

        <div className="glass rounded-[40px] p-10">

          <h2 className="text-3xl font-black">

            AI Content Engine

          </h2>

          <p className="text-white/60 mt-6">

            Generate AI-powered food articles.

          </p>

        </div>

      </div>
     
      <GenerateArticleForm />
    </main>
  );
}
