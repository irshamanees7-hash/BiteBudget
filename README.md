# 🍽️ BiteBudget – AI Meal Planner

BiteBudget is a responsive AI-powered meal planning web application that transforms leftover pantry ingredients into affordable, quick, and waste-reducing meals. The application uses Claude AI to generate personalized recipes while encouraging sustainable cooking and helping users reduce grocery expenses.

---

# 📌 Problem Statement

Many students and families struggle to decide what to cook using the ingredients already available at home. This often results in unnecessary grocery spending and increased food waste. Existing recipe platforms usually require ingredients users do not have, making them less practical for budget-conscious households.

---

# 💡 Solution

BiteBudget solves this problem by allowing users to enter the ingredients they already have. Claude AI then generates two simple, budget-friendly recipes that match the user's dietary preferences and available cooking time. Users can save their favorite recipes locally and revisit them anytime.

---

# 🎯 Objectives

- Reduce household food waste.
- Help users save money on groceries.
- Generate quick and affordable meal ideas.
- Support multiple dietary preferences.
- Promote sustainable and budget-friendly cooking.
- Allow users to save recipes for future use.

---

# 🚀 Features

- 🏠 Home page with project introduction and food waste awareness.
- ℹ️ About page explaining the project's mission.
- 🍳 AI-powered Recipe Planner.
- 🥗 Generates exactly two budget-friendly recipes using available ingredients.
- 🥬 Dietary filters:
  - Vegetarian
  - Vegan
  - Halal
  - Kosher
  - Gluten-Free
  - Dairy-Free
- ⏱️ Time limit options:
  - 15 Minutes
  - 30 Minutes
  - 45 Minutes
  - 60 Minutes
- 🧂 Optional staples selection (Salt, Pepper, Oil, Water).
- 📋 Displays:
  - Recipe Name
  - Cooking Time
  - Cost Level
  - Dietary Tags
  - Pantry Ingredients
  - Staples Used
  - Optional Extras
  - Step-by-Step Instructions
  - Nutrition Information
  - Zero-Waste Tips
- 💾 Save favorite recipes using Local Storage.
- 🗑️ Delete saved recipes.
- ⚠️ Loading and error handling.
- 📱 Fully responsive design.
- ♿ Accessible user interface.

---

# 🛠️ Technologies Used

- React
- Tailwind CSS
- JavaScript (ES6+)
- Vite
- Claude (Anthropic API)
- Local Storage
- Lucide React Icons

---

# 📂 Project Structure

```text
src/
├── components/
│   ├── RecipeCard.jsx
│   ├── IngredientInput.jsx
│   ├── DietaryFilter.jsx
│   ├── LoadingState.jsx
│   └── NavBar.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Planner.jsx
│   └── SavedRecipes.jsx
│
├── lib/
│   ├── claude.js
│   └── storage.js
│
├── App.jsx
└── main.jsx
```

---

# ⚙️ Installation

1. Clone the repository.

2. Install dependencies.

```bash
npm install
```

3. Create a `.env` file.

```env
VITE_ANTHROPIC_API_KEY=YOUR_API_KEY
```

4. Run the project.

```bash
npm run dev
```

---

# 📱 Pages

- Home
- About
- Recipe Planner
- Saved Recipes

---

# 🔄 Workflow

1. Enter 3–10 pantry ingredients.
2. Select dietary preferences.
3. Choose the cooking time.
4. Submit the request.
5. Claude AI generates two recipes.
6. View recipe details.
7. Save favorite recipes.
8. Access saved recipes anytime.
9. Delete recipes when no longer needed.

---


## Screenshots

<img width="848" height="409" alt="Screenshot 2026-07-28 094049" src="https://github.com/user-attachments/assets/696218da-f386-4c96-841a-33ea0eeb32aa" />
<img width="868" height="422" alt="Screenshot 2026-07-28 093905" src="https://github.com/user-attachments/assets/c159977c-91d9-4d74-a14e-9a4e59f26ee1" />
<img width="903" height="369" alt="Screenshot 2026-07-28 094008" src="https://github.com/user-attachments/assets/32f23198-e7c9-49c9-a332-e16c19863ed9" />

---

# 📄 License

This project is developed for educational purposes.
