export default function About() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
        <h1 className="text-3xl font-semibold text-slate-900">About BiteBudget</h1>
        <p className="mt-4 text-slate-600">
          BiteBudget is a student-first meal planner built to reduce food waste, lower grocery bills, and make sustainable cooking easy.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Reduce Waste</h2>
            <p className="mt-3 text-slate-600">Use leftover ingredients before they go bad with quick recipe ideas.</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Save Money</h2>
            <p className="mt-3 text-slate-600">Plan two budget-friendly meals from what you already have on hand.</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Cook Smart</h2>
            <p className="mt-3 text-slate-600">Lean recipes, safe dietary tags, and easy prep help busy households eat healthier.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
