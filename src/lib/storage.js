const STORAGE_KEY = 'bitebudget_saved_recipes';

export const loadSavedRecipes = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error('Failed to load saved recipes', error);
    return [];
  }
};

export const saveRecipe = (recipe) => {
  try {
    const current = loadSavedRecipes();
    const updated = [recipe, ...current];
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (error) {
    console.error('Failed to save recipe', error);
    return null;
  }
};

export const deleteRecipe = (id) => {
  try {
    const current = loadSavedRecipes();
    const updated = current.filter((recipe) => recipe.id !== id);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (error) {
    console.error('Failed to delete recipe', error);
    return [];
  }
};
