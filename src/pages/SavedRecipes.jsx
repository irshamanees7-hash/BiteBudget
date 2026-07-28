import { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { loadSavedRecipes, deleteRecipe } from '../lib/storage';

export default function SavedRecipes({ onNavigate }) {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    setSaved(loadSavedRecipes());
  }, []);

  const handleDelete = (id) => {
    setSaved(deleteRecipe(id));
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8" id="saved">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">Saved Recipes</h1>
            <p className="mt-2 text-slate-600">Your locally stored recipe cards are available even after reloading the page.</p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('planner')}
            className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Plan another meal
          </button>
        </div>
        {saved.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-600">
            <p className="text-lg font-semibold text-slate-900">No saved recipes yet.</p>
            <p className="mt-3">Use the Recipe Planner to generate and save your first budget meal ideas.</p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {saved.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
