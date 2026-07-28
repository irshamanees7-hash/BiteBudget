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

3. Run development server:

```
npm run dev
```

## Notes
- This is a frontend-only prototype.
- The Anthropic API key is stored client-side for local use only.
- If you want a production-safe build, add a backend proxy for the API key.
