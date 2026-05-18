export default function Loading() {
return ( <main className="min-h-screen bg-[#0b0b0b] flex items-center justify-center">

```
  <div className="flex flex-col items-center">

    <div className="h-16 w-16 rounded-full border-4 border-white/10 border-t-white animate-spin" />

    <h1 className="text-white text-2xl font-black mt-8 tracking-wide">
      Recipe Secrets
    </h1>

    <p className="text-white/40 mt-2 tracking-[0.3em] uppercase text-xs">
      Loading Experience
    </p>

  </div>

</main>


);
}
