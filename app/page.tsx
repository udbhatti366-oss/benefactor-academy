export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-7xl font-black text-center">
        Recipe Secrets 😮‍💨🔥
      </h1>

      <p className="text-white/70 text-2xl mt-8 text-center max-w-2xl">
        Viral recipes, luxury food trends, celebrity meals, AI food tools and aesthetic desserts.
      </p>

      <a
        href="/admin"
        className="mt-12 bg-white text-black px-10 py-5 rounded-2xl font-black text-xl"
      >
        Open Admin 😎🚀
      </a>

    </main>
  );
}
