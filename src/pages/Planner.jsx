import { useMemo, useState } from 'react';
import IngredientInput from '../components/IngredientInput';
import DietaryFilter from '../components/DietaryFilter';
import LoadingState from '../components/LoadingState';
import RecipeCard from '../components/RecipeCard';
import { generateRecipes } from '../lib/claude';
import { saveRecipe, loadSavedRecipes } from '../lib/storage';

const timeOptions = [15, 30, 45, 60];

const initialForm = {
  ingredients: [],
  dietary: ['None'],
  timeLimit: 30,
  staples: true,
};

export default function Planner() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState(null);
  const [savedRecipes, setSavedRecipes] = useState(loadSavedRecipes());

  const canSubmit = form.ingredients.length >= 3;
  const userMessage = useMemo(
    () => ({
      ingredients: form.ingredients,
      dietaryConstraints: form.dietary.includes('None') ? [] : form.dietary,
      timeLimit: `${form.timeLimit} mins`,
      hasStaples: form.staples,
    }),
    [form]
  );

  const handleGenerate = async (event) => {
    event.preventDefault();
    if (!canSubmit) {
      setError('Add at least 3 ingredients before generating recipes.');
      return;
    }
    setError('');
    setLoading(true);
    setResults(null);

    try {
      const payload = {
        ingredients: form.ingredients,
        dietaryConstraints: form.dietary.includes('None') ? [] : form.dietary,
        timeLimit: `${form.timeLimit} mins`,
        hasStaples: form.staples,
      };
      const response = await generateRecipes(payload);
      setResults(response);
    } catch (err) {
      setError(err.message || 'Unable to generate recipes right now.');
    } finally {
      setLoading(false);
    }
  };

  const recipeKey = (recipe) => `${recipe.name}-${recipe.timeMinutes}-${recipe.dietaryTags.join('|')}`;

  const handleSave = (recipe) => {
    const item = {
      ...recipe,
      id: `${recipeKey(recipe)}-${Date.now()}`,
      savedAt: new Date().toISOString(),
    };
    const updated = saveRecipe(item);
    if (updated) {
      setSavedRecipes(updated);
    }
  };

  const savedIds = useMemo(
    () => new Set(savedRecipes.map((recipe) => recipeKey(recipe))),
    [savedRecipes]
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">Recipe Planner</h1>
            <p className="mt-2 text-slate-600">Enter your pantry items, select dietary preferences, and get two budget-friendly meals.</p>
          </div>
          <form className="space-y-6" onSubmit={handleGenerate}>
            <IngredientInput
              ingredients={form.ingredients}
              onChange={(ingredients) => setForm((prev) => ({ ...prev, ingredients }))}
            />
            <DietaryFilter value={form.dietary} onChange={(dietary) => setForm((prev) => ({ ...prev, dietary }))} />
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-semibold text-slate-900">
                Time Limit
                <select
                  value={form.timeLimit}
                  onChange={(event) => setForm((prev) => ({ ...prev, timeLimit: Number(event.target.value) }))}
                  className="block w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                >
                  {timeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option} mins
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm transition focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-200">
                <input
                  type="checkbox"
                  checked={form.staples}
                  onChange={(event) => setForm((prev) => ({ ...prev, staples: event.target.checked }))}
                  className="h-5 w-5 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                />
                <span>Use basic staples (salt, pepper, oil, water)</span>
              </label>
            </div>
            {error && <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
            <button
              type="submit"
              disabled={!canSubmit || loading}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-sky-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              {loading ? 'Generating...' : 'Generate Recipes'}
            </button>
          </form>
        </div>
        <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
          <h2 className="text-2xl font-semibold text-slate-900">Quick tips</h2>
          <div className="space-y-4 text-slate-600">
            <p>Keep ingredient names short and consistent, like “tomato”, “spinach”, “lentils”.</p>
            <p>Save recipes you like so the app remembers them locally across reloads.</p>
            <p>If the AI returns a fallback message, adjust your ingredients to remove non-food items.</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        {loading && <LoadingState />}
        {results?.fallbackMessage && (
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-900 shadow-soft">
            {results.fallbackMessage}
          </div>
        )}
        {results?.recipes?.length > 0 && (
          <div className="grid gap-6 md:grid-cols-1">
            {results.recipes.map((recipe, index) => (
              <RecipeCard
                key={`${recipe.name}-${index}`}
                recipe={recipe}
                onSave={handleSave}
                saved={savedIds.has(recipeKey(recipe))}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
