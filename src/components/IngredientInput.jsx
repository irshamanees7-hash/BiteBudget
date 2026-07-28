import { Plus } from 'lucide-react';
import { useState } from 'react';

export default function IngredientInput({ ingredients, onChange }) {
  const [value, setValue] = useState('');

  const addIngredient = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    if (ingredients.includes(trimmed.toLowerCase())) {
      setValue('');
      return;
    }
    onChange([...ingredients, trimmed]);
    setValue('');
  };

  const removeIngredient = (item) => {
    onChange(ingredients.filter((ingredient) => ingredient !== item));
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addIngredient();
    }
  };

  return (
    <div className="space-y-3">
      <label htmlFor="ingredient-input" className="block text-sm font-semibold text-slate-900">
        Ingredients
      </label>
      <div className="flex flex-wrap gap-2">
        {ingredients.map((item) => (
          <span key={item} className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700">
            {item}
            <button type="button" onClick={() => removeIngredient(item)} className="font-bold text-slate-500 hover:text-slate-900">
              ×
            </button>
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          id="ingredient-input"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add ingredient and press Enter"
          className="flex-1 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
        />
        <button
          type="button"
          onClick={addIngredient}
          className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
        >
          <Plus className="h-4 w-4" />
          Add
        </button>
      </div>
    </div>
  );
}
