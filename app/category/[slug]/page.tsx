export default function CategoryPage({
params,
}: {
params: { slug: string };
}) {

const categoryTitle = (params?.slug || "")
.replace(/-/g, " ")
.replace(/\b\w/g, (char) => char.toUpperCase());

return (

  <main className="min-h-screen bg-[#f5efe6] text-black">

```
{/* HERO */}
<section className="px-8 lg:px-20 py-20">

  <div className="max-w-6xl mx-auto">

    <p className="uppercase tracking-[0.3em] text-sm text-black/40 mb-6">
      Curated Food Category
    </p>

    <h1 className="text-5xl lg:text-7xl font-black leading-tight">
      {categoryTitle}
    </h1>

    <p className="mt-8 text-xl text-black/60 max-w-3xl leading-relaxed">
      Explore trending discoveries, viral recipes and premium culinary inspiration.
    </p>

  </div>

</section>

{/* CATEGORY GRID */}
<section className="px-8 lg:px-20 pb-24">

  <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">

    <div className="break-inside-avoid bg-white rounded-[32px] overflow-hidden shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-500">

      <img
        src="https://images.unsplash.com/photo-1514986888952-8cd320577b68?q=80&w=1600&auto=format&fit=crop"
        alt="Recipe"
        className="h-[500px] w-full object-cover"
      />

      <div className="p-8">
        <p className="uppercase tracking-[0.2em] text-xs text-black/40 mb-4">
          Viral Discovery
        </p>

        <h2 className="text-3xl font-black leading-tight">
          Crispy Air Fryer Pasta
        </h2>

        <p className="mt-4 text-black/60">
          Creamy texture, crispy edges and restaurant vibes.
        </p>
      </div>

    </div>

    <div className="break-inside-avoid bg-white rounded-[32px] overflow-hidden shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-500">

      <img
        src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format&fit=crop"
        alt="Recipe"
        className="h-[700px] w-full object-cover"
      />

      <div className="p-8">
        <p className="uppercase tracking-[0.2em] text-xs text-black/40 mb-4">
          Trending Recipe
        </p>

        <h2 className="text-3xl font-black leading-tight">
          Luxury Breakfast Bowl
        </h2>

        <p className="mt-4 text-black/60">
          Aesthetic breakfast inspiration for healthy food lovers.
        </p>
      </div>

    </div>

  </div>
<div className="mt-16 bg-white rounded-[40px] p-10 shadow-2xl">

  <p className="uppercase tracking-[0.3em] text-xs text-black/40 mb-6">
    Recommended Kitchen Gear
  </p>

  <div className="grid md:grid-cols-3 gap-8">

```
<div className="rounded-[30px] overflow-hidden border border-black/10 hover:-translate-y-3 hover:shadow-2xl transition duration-500 bg-[#faf7f2]">

  <img
    src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop"

    alt="Air Fryer"
    className="h-72 w-full object-cover"
  />

  <div className="p-6">
    <h3 className="text-2xl font-black">
      Premium Air Fryer
    </h3>

    <p className="mt-3 text-black/60">
      Crispy restaurant-style cooking with less oil.
    </p>

    <button className="mt-6 w-full bg-black text-white px-6 py-4 rounded-2xl font-semibold tracking-wide hover:bg-white hover:text-black border border-black transition-all duration-300">
  View On Amazon
</button>

  </div>

</div>
```

  </div>

</div>

</section>
```
{/* DISCOVER MORE */}

<section className="px-8 lg:px-20 pb-24">

  <div className="max-w-7xl mx-auto">

```
<div className="flex items-center justify-between mb-12">
  <h2 className="text-5xl font-black">
    Discover More
  </h2>

  <p className="text-black/50">
    Curated food inspiration
  </p>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">

  <div className="break-inside-avoid bg-white rounded-[32px] overflow-hidden shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-500">

    <img
      src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format&fit=crop"
      alt="Food"
      className="h-[500px] w-full object-cover"
    />

    <div className="p-8">
      <p className="uppercase tracking-[0.2em] text-xs text-black/40 mb-4">
        Trending Recipe
      </p>

      <h3 className="text-3xl font-black">
        Luxury Breakfast Bowl
      </h3>

      <p className="mt-4 text-black/60">
        High-protein breakfast trends everyone is saving.
      </p>
    </div>

  </div>

  <div className="break-inside-avoid bg-white rounded-[32px] overflow-hidden shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-500">

    <img
      src="https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=1600&auto=format&fit=crop"
      alt="Matcha"
      className="h-[700px] w-full object-cover"
    />

    <div className="p-8">
      <p className="uppercase tracking-[0.2em] text-xs text-black/40 mb-4">
        Viral Drink
      </p>

      <h3 className="text-3xl font-black">
        Iced Matcha Latte
      </h3>

      <p className="mt-4 text-black/60">
        Café aesthetic drinks exploding on Pinterest.
      </p>
    </div>

  </div>

</div>
```

  </div>

</section>

  </main>
);
}
