export default function ContactPage() {
return ( <main className="min-h-screen bg-[#0b0b0b] text-white px-8 lg:px-20 py-24">

```
  <div className="max-w-3xl mx-auto">

    <p className="uppercase tracking-[0.3em] text-xs text-white/40 mb-6">
      Contact
    </p>

    <h1 className="text-5xl lg:text-7xl font-black leading-tight">
      Get In Touch
    </h1>

    <p className="mt-8 text-zinc-300 text-lg leading-relaxed">
      For collaborations, sponsorships, affiliate partnerships or business inquiries,
      feel free to contact us.
    </p>

    <div className="mt-12 bg-[#111111] border border-white/10 rounded-3xl p-10">

      <p className="text-white/50 uppercase tracking-[0.2em] text-xs mb-4">
        Email
      </p>

      <p className="text-2xl font-semibold">
        hello@recipesecrets.com
      </p>

      <p className="mt-8 text-white/60 leading-relaxed">
        We typically respond within 24–48 hours.
      </p>

    </div>

  </div>

</main>


);
}
