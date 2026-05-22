
import { supabase } from "../../lib/supabase";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const { data: article } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single();

  const { data: relatedArticles } = await supabase
    .from("articles")
    .select("*")
    .neq("slug", slug)
    .limit(3);

  if (!article) {

    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">

        <h1 className="text-5xl font-black">

          Article Not Found

        </h1>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="h-[70vh] overflow-hidden relative">

        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-end">

          <div className="px-8 lg:px-24 pb-20 max-w-5xl">

            <h1 className="text-6xl lg:text-8xl font-black leading-[0.9]">

              {article.title}

            </h1>

          </div>

        </div>

      </div>

      <article className="px-8 lg:px-24 py-24 max-w-4xl">

        <div className="text-xl text-white/80 leading-[2] whitespace-pre-line">

          {article.content}

        </div>

      </article>

      <section className="px-8 lg:px-24 pb-32">

        <h2 className="text-5xl font-black mb-16">

          Related Articles

        </h2>

        <div className="grid lg:grid-cols-3 gap-10">

          {relatedArticles?.map((item: any) => (

            <a
              key={item.id}
              href={`/blog/${item.slug}`}
              className="glass rounded-[40px] overflow-hidden"
            >

              <div className="h-[260px] overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-black leading-tight">

                  {item.title}

                </h3>

              </div>

            </a>

          ))}

        </div>

      </section>

    </main>
  );
}