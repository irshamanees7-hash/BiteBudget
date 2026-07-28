import { BookmarkPlus, Trash2 } from 'lucide-react';

export default function RecipeCard({ recipe, onSave, onDelete, saved }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">{recipe.name}</h2>
          <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-600">
            <span className="rounded-full bg-slate-100 px-2 py-1">{recipe.timeMinutes} mins</span>
            <span className="rounded-full bg-slate-100 px-2 py-1">{recipe.costLabel}</span>
            {recipe.dietaryTags.map((tag) => (
              <span key={tag} className="rounded-full bg-slate-100 px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          {onSave && (
            <button
              type="button"
              onClick={() => onSave(recipe)}
              disabled={saved}
              className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                saved
                  ? 'cursor-not-allowed bg-slate-200 text-slate-600'
                  : 'bg-sky-600 text-white hover:bg-sky-700'
              }`}
            >
              <BookmarkPlus className="h-4 w-4" />
              {saved ? 'Saved' : 'Save'}
            </button>
          )}
          {onDelete && (
            <button
              type="button"
              onClick={() => onDelete(recipe.id)}
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </button>
          )}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-2 rounded-3xl bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900">Pantry Ingredients</p>
          <ul className="space-y-1 text-sm text-slate-600">
            {recipe.pantryIngredients.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-2 rounded-3xl bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900">Staples</p>
          <ul className="space-y-1 text-sm text-slate-600">
            {recipe.staples.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-2 rounded-3xl bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900">Optional Extras</p>
          <ul className="space-y-1 text-sm text-slate-600">
            {recipe.optionalExtras.length > 0 ? (
              recipe.optionalExtras.map((item) => <li key={item}>• {item}</li>)
            ) : (
              <li>None</li>
            )}
          </ul>
        </div>
      </div>
      <div className="mt-6 space-y-3">
        <div>
          <p className="mb-2 text-sm font-semibold text-slate-900">Instructions</p>
          <ol className="space-y-2 text-sm leading-6 text-slate-600">
            {recipe.steps.map((step, index) => (
              <li key={index}> {index + 1}. {step}</li>
            ))}
          </ol>
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Calories</p>
            <p>{recipe.nutrition.calories} kcal</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Protein</p>
            <p>{recipe.nutrition.protein}g</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Carbs/Fat</p>
            <p>{recipe.nutrition.carbs}g / {recipe.nutrition.fat}g</p>
          </div>
        </div>
        <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
          <p className="font-semibold text-slate-900">Zero-Waste Tip</p>
          <p>{recipe.zeroWasteTip}</p>
        </div>
      </div>
    </article>
  );
}
