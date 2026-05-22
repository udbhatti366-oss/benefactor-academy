import Link from "next/link";

<RecipeCard
  href="/recipes/luxury-breakfast-bowl"
  image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format&fit=crop"
  title="Luxury Breakfast Bowl"
  description="High-protein breakfast trends everyone is saving."
  tag="Healthy Discovery"
  height="h-[600px]"
/>

type RecipeCardProps = {
  href: string;
  image: string;
  title: string;
  description: string;
  tag: string;
  height?: string;
};

export default function RecipeCard({
  href,
  image,
  title,
  description,
  tag,
  height = "h-[500px]",
}: RecipeCardProps) {
  return (
    <Link
      href={href}
      className="block break-inside-avoid bg-white rounded-[32px] overflow-hidden shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-500"
    >

<img
  src={image}
  alt={title}
  className={`${height} w-full object-cover`}
/>





      <div className="p-8">

        <p className="uppercase tracking-[0.2em] text-xs text-black/40 mb-4">
          {tag}
        </p>

        <h2 className="text-3xl font-black leading-tight text-black">
          {title}
        </h2>

        <p className="mt-4 text-black/60">
          {description}
        </p>

      </div>

    </Link>
  );
}

