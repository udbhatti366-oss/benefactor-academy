export default function RecipePage({
params,
}: {
params: { slug: string };
}) {

    const recipeTitle = (params?.slug || "")
.replace(/-/g, " ")
.replace(/\b\w/g, (char) => char.toUpperCase());

    const recipes: Record<string, any> = {
"chicken-pasta": {
title: "Creamy Chicken Pasta",
image:
"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1600&auto=format&fit=crop",
description:
"A rich creamy chicken pasta loaded with flavor and restaurant-style texture.",
},

"matcha-latte": {
title: "Iced Matcha Latte",
image:
"https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=1600&auto=format&fit=crop",
description:
"A smooth earthy matcha latte packed with aesthetic café vibes.",
},
};

const recipe = recipes[params?.slug];




return ( <main className="min-h-screen bg-[#f5efe6] text-black">

```
  {/* HERO */}
  <section className="px-8 lg:px-20 py-20">
    <div className="max-w-5xl mx-auto">

      <p className="uppercase tracking-[0.3em] text-sm text-black/40 mb-6">
        Viral Recipe Discovery
      </p>

      <h1 className="text-5xl lg:text-7xl font-black leading-tight max-w-4xl">
        {recipe?.title || recipeTitle}


      </h1>

      <p className="mt-8 text-xl text-black/60 max-w-3xl leading-relaxed">
  {recipe?.description}
</p>


      <img
src={
recipe?.image ||
"https://images.unsplash.com/photo-1514986888952-8cd320577b68?q=80&w=1600&auto=format&fit=crop"
}
alt="Recipe"
className="mt-16 rounded-[40px] h-[700px] w-full object-cover shadow-2xl"
/>

    </div>
  </section>

  {/* ARTICLE */}
  <section className="px-8 lg:px-20 pb-24">
    <div className="max-w-3xl mx-auto text-lg leading-[2] text-black/80 space-y-10">

      <p>
        Air fryer pasta recipes are taking over food communities because
        they combine speed, flavor and aesthetic presentation in one dish.
      </p>

      <p>
        The secret is using high heat to create crispy texture while
        keeping the inside creamy and rich.
      </p>

      <h2 className="text-4xl font-black text-black">
        Why Everyone Loves It
      </h2>

      <p>
        Minimal ingredients, fast preparation and restaurant-style visuals
        make this recipe perfect for social sharing and repeat cooking.
      </p>

      <div className="bg-white p-10 rounded-[40px] shadow-xl">
        <h3 className="text-3xl font-black mb-6">
          Kitchen Tools Used
        </h3>

        <div className="space-y-4">

          <div className="flex items-center justify-between border-b pb-4">
            <p>Premium Air Fryer</p>
            <button className="bg-black text-white px-5 py-2 rounded-full">
              View Product
            </button>
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <p>Non-Stick Pasta Bowl</p>
            <button className="bg-black text-white px-5 py-2 rounded-full">
              View Product
            </button>
          </div>

        </div>
      </div>

    </div>
  </section>

</main>


);
}
