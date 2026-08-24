import { Routes, Route, NavLink } from "react-router-dom";
import { useContext } from "react";
import { HabitContext } from "./context/HabitContext";
import Home from "./pages/Home";
import Habits from "./pages/Habits";
import Goals from "./pages/Goals";
import Progress from "./pages/Progress";

export default function App() {
  const { theme, toggleTheme } = useContext(HabitContext);

  const getNavLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
      isActive
        ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/30"
        : "text-slate-600 hover:text-indigo-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800"
    }`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
      <nav className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 px-6 sm:px-12 py-4 flex items-center justify-between shadow-md dark:shadow-lg sticky top-0 z-50 mb-6 transition-colors duration-300">
        <h1 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-500 to-indigo-500 dark:from-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent">
          ⚡ Habit Tracker
        </h1>

        <div className="flex items-center gap-1 sm:gap-3">
          <div className="flex items-center gap-1 sm:gap-2">
            <NavLink className={getNavLinkClass} to="/" end>
              Home
            </NavLink>
            <NavLink className={getNavLinkClass} to="/habits">
              Habits
            </NavLink>
            <NavLink className={getNavLinkClass} to="/progress">
              Progress
            </NavLink>
            <NavLink className={getNavLinkClass} to="/goals">
              Goals
            </NavLink>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="sm:ml-4 px-0.5 py-0.5 sm:px-3 sm:py-2 py rounded-xl border transition-all duration-200 cursor-pointer bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-amber-400 hover:scale-105 shadow-sm text-sm font-semibold flex items-center gap-1.5"
            title="Toggle Light/Dark Theme"
          >
            <span>{theme === "dark" ? "☀️" : "🌙"}</span>
            <span className="hidden sm:inline font-mono text-sm uppercase tracking-wider">
              {theme === "dark" ? "Light" : "Dark"}
            </span>
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-4 sm:px-8 max-w-6xl pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/habits" element={<Habits />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
      </main>
    </div>
  );
}
