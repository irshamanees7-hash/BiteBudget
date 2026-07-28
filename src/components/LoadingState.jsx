export default function LoadingState({ message = 'Generating recipes...' }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-soft">
      <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-sky-500"></div>
      <p className="text-sm text-slate-600">{message}</p>
    </div>
  );
}
