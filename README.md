# BiteBudget

A responsive React + Tailwind app that turns leftover pantry items into budget-friendly recipes using Claude.

## Features
- Single-page navigation without router
- Recipe Planner with ingredient inputs, dietary filters, and time limits
- Direct browser call to Anthropic Claude API
- LocalStorage persistence for saved recipes
- Mobile-first responsive UI

## Setup
1. Create a `.env` file with:

```
VITE_ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

2. Install dependencies:

```
npm install
```
## Screenshots

    ![Home Page](home.png)
    ![Recipe Page](recipe.png)
    ![Result Page](result.png)<img width="848" height="409" alt="Screenshot 2026-07-28 094049" src="https://github.com/user-attachments/assets/696218da-f386-4c96-841a-33ea0eeb32aa" />
<img width="868" height="422" alt="Screenshot 2026-07-28 093905" src="https://github.com/user-attachments/assets/c159977c-91d9-4d74-a14e-9a4e59f26ee1" />
<img width="903" height="369" alt="Screenshot 2026-07-28 094008" src="https://github.com/user-attachments/assets/32f23198-e7c9-49c9-a332-e16c19863ed9" />


3. Run development server:

```
npm run dev
```

## Notes
- This is a frontend-only prototype.
- The Anthropic API key is stored client-side for local use only.
- If you want a production-safe build, add a backend proxy for the API key.
