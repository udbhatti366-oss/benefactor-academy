export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const recipeTitle = (slug || "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const recipes: Record<string, any> = {
    "chicken-pasta": {
      title: "Creamy Chicken Pasta",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1600&auto=format&fit=crop",
    },

    "matcha-latte": {
      title: "Iced Matcha Latte",
      image:
        "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=1600&auto=format&fit=crop",
    },

    "luxury-breakfast-bowl": {
      title: "Luxury Breakfast Bowl",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format&fit=crop",
    },
  };

  const recipe = recipes[slug];

  return (
    <main className="min-h-screen bg-black text-white px-8 lg:px-20 py-20">

      <div className="max-w-5xl mx-auto">

        <img
          src={recipe?.image}
          alt={recipe?.title}
          className="w-full h-[600px] object-cover rounded-[40px]"
        />

        <p className="uppercase tracking-[0.3em] text-sm text-white/40 mt-10">
          Recipe Discovery
        </p>

        <h1 className="text-5xl lg:text-7xl font-black mt-4">
          {recipe?.title || recipeTitle}
        </h1>

        <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-3xl">
          Discover premium flavors, aesthetic presentation,
          and viral cooking inspiration loved by modern food creators.
        </p>

      </div>

    </main>
  );
}

