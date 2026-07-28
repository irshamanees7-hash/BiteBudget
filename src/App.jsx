import { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Planner from './pages/Planner';
import SavedRecipes from './pages/SavedRecipes';

const pages = {
  home: Home,
  about: About,
  planner: Planner,
  saved: SavedRecipes,
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const PageComponent = pages[currentPage];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <NavBar currentPage={currentPage} onChange={setCurrentPage} />
      <PageComponent onStart={() => setCurrentPage('planner')} onNavigate={setCurrentPage} />
    </div>
  );
}
