import { getArticles } from "../lib/articles";

export default async function BlogPage() {

  const articles = await getArticles();

  return (
    <main className="min-h-screen bg-black text-white px-8 lg:px-24 py-32">

      <div className="max-w-6xl">

        <p className="uppercase tracking-[0.4em] text-sm text-white/40">

          Recipe Secrets Blog

        </p>

        <h1 className="text-6xl lg:text-8xl font-black mt-8 leading-[0.9]">

          Viral Recipes
          <br />

          & Luxury Food Trends

        </h1>

      </div>

      <div className="grid lg:grid-cols-3 gap-10 mt-24">

        {articles.map((article: any) => (

          <a
            key={article.id}
            href={`/blog/${article.slug}`}
            className="glass rounded-[40px] overflow-hidden"
          >

            <div className="h-[320px] overflow-hidden">

              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />

            </div>

            <div className="p-8">

              <h2 className="text-3xl font-black leading-tight">

                {article.title}

              </h2>

            </div>

          </a>

        ))}

      </div>

    </main>
  );
}
