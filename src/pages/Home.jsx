export default function Home({ onStart }) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Save food, save money</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Turn leftover ingredients into 2 cheap, zero-waste meals.
          </h1>
          <p className="max-w-2xl text-lg text-slate-600">
            BiteBudget helps students and busy households stretch grocery budgets by turning pantry scraps into fast, sustainable recipes.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={onStart}
              className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-sky-700"
            >
              Start Planning
            </button>
            <a href="#saved" className="text-sm font-semibold text-slate-700 underline-offset-4 hover:underline">
              Explore saved recipes
            </a>
          </div>
        </div>
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-soft sm:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Food waste facts</p>
          <div className="mt-8 space-y-6 text-sm leading-7 text-slate-300">
            <p>
              Students throw away up to 20% of groceries every month. BiteBudget turns leftovers into meals before they spoil.
            </p>
            <p>
              Rapid meal ideas cut shopping costs and help you waste less by using what you already own.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
