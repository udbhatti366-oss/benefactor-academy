
export default function Loading() {

  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">

      <div className="relative flex flex-col items-center">

        <div className="absolute w-[300px] h-[300px] bg-pink-500/20 blur-3xl rounded-full"></div>

        <div className="absolute w-[300px] h-[300px] bg-blue-500/20 blur-3xl rounded-full"></div>

        <div className="relative z-10">

          <div className="w-24 h-24 border-4 border-white/10 border-t-white rounded-full animate-spin"></div>

        </div>

        <h2 className="mt-10 text-3xl font-black tracking-[0.25em] uppercase">

          Recipe Secrets

        </h2>

        <p className="mt-4 text-white/40 uppercase tracking-[0.3em] text-sm">

          Loading Luxury Food Intelligence

        </p>

      </div>

    </div>
  );
}

