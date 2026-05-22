import RecipeCard from "./RecipeCard";

export default function FeaturedRecipes() {
  return (
    <section className="px-8 lg:px-20 py-20">

      <div className="flex items-end justify-between gap-6 mb-14">

        <div>

          <p className="uppercase tracking-[0.3em] text-sm text-white/40">
            Featured Recipes
          </p>

          <h2 className="text-5xl lg:text-6xl font-black mt-4">
            Viral Food Discoveries
          </h2>

        </div>

      </div>

      <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">

        <RecipeCard
          href="/recipes/chicken-pasta"
          image="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1600&auto=format&fit=crop"
          title="Creamy Chicken Pasta"
          description="Rich creamy texture with restaurant-style presentation."
          tag="Viral Discovery"
          height="h-[500px]"
        />

        <RecipeCard
          href="/recipes/matcha-latte"
          image="https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=1600&auto=format&fit=crop"
          title="Iced Matcha Latte"
          description="Café aesthetic drinks exploding on Pinterest."
          tag="Viral Drink"
          height="h-[700px]"
        />

        <RecipeCard
          href="/recipes/luxury-breakfast-bowl"
          image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format&fit=crop"
          title="Luxury Breakfast Bowl"
          description="High-protein breakfast trends everyone is saving."
          tag="Healthy Discovery"
          height="h-[600px]"
        />

      </div>

    </section>
  );
}

