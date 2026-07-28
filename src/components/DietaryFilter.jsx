export default function DietaryFilter({ value, onChange }) {
  const options = ['Vegetarian', 'Vegan', 'Halal', 'Kosher', 'Gluten-Free', 'Dairy-Free', 'None'];

  const toggleOption = (option) => {
    if (option === 'None') {
      onChange(['None']);
      return;
    }
    const filtered = value.filter((item) => item !== 'None');
    if (filtered.includes(option)) {
      onChange(filtered.filter((item) => item !== option));
    } else {
      onChange([...filtered, option]);
    }
  };

  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-semibold text-slate-900">Dietary Constraints</legend>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {options.map((option) => {
          const selected = value.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => toggleOption(option)}
              className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                selected ? 'border-sky-600 bg-sky-50 text-sky-700' : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
