import { useContext } from "react";
import { HabitContext } from "../context/HabitContext";

export default function GoalsDisplay() {
  const { goals, deleteGoal, openEditGoal, goalsLayout } =
    useContext(HabitContext);

  // 1. Empty State
  if (goals.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center rounded-3xl bg-white dark:bg-slate-800/40 border-2 border-dashed border-slate-300 dark:border-slate-700/70 space-y-3 shadow-sm dark:shadow-none transition-colors">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-2xl">
          🎯
        </div>
        <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
          No Goals set yet
        </h4>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
          Set ambitious milestones to push your habit growth to the next level!
        </p>
      </div>
    );
  }

  return (
    <>
      {/* 2. Sort Dropdown */}
      <div className="flex justify-end mb-6">
        <div className="flex items-center gap-2">
          <label
            htmlFor="layout"
            className="font-mono text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
          >
            Sort by:
          </label>
          <select
            name="layout"
            id="layout"
            className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all cursor-pointer shadow-sm"
            onChange={goalsLayout}
          >
            <option value="oldest">Oldest</option>
            <option value="newest">Newest</option>
            <option value="targetComplete">Goals Completed</option>
            <option value="targetIncomplete">Goals Incomplete</option>
          </select>
        </div>
      </div>

      {/* 3. Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.map((goal, index) => {
          const rawPercentage =
            goal.target > 0 ? (goal.progress / goal.target) * 100 : 0;
          const percentage = Math.min(100, Math.round(rawPercentage));
          const isCompleted = percentage >= 100;

          return (
            <div
              key={index}
              className={`rounded-2xl p-6 border transition-all duration-300 hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-lg shadow-md dark:shadow-xl flex flex-col justify-between ${
                isCompleted
                  ? "bg-emerald-50/50 dark:bg-slate-800/90 border-emerald-400/50 dark:border-emerald-500/40 ring-1 ring-emerald-500/20"
                  : "bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600"
              }`}
            >
              <div>
                {/* Header: Title + Status Badge */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                    {goal.title}
                  </h3>
                  <span
                    className={`font-mono text-sm tracking-wider uppercase font-bold px-2.5 py-0.5 rounded-full border shrink-0 ${
                      isCompleted
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
                        : "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30"
                    }`}
                  >
                    {isCompleted ? "🎉 Done" : "⚡ In Progress"}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-5 min-h-[36px] line-clamp-2">
                  {goal.detail || "No description provided."}
                </p>

                {/* 📊 PROGRESS BAR SECTION */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-sm font-mono">
                    <span className="text-slate-500 dark:text-slate-400">Progress</span>
                    <span className="font-bold text-slate-800 dark:text-white">
                      {goal.progress} / {goal.target}{" "}
                      <span className="text-indigo-600 dark:text-indigo-400">
                        ({percentage}%)
                      </span>
                    </span>
                  </div>

                  {/* The Track (Outer container) */}
                  <div className="w-full h-3 bg-slate-200 dark:bg-slate-900/90 rounded-full p-0.5 border border-slate-300 dark:border-slate-700/60 overflow-hidden shadow-inner">
                    {/* The Fill (Inner dynamic bar) */}
                    <div
                      style={{ width: `${percentage}%` }}
                      className={`h-full rounded-full transition-all duration-500 ease-out shadow-sm ${
                        isCompleted
                          ? "bg-gradient-to-r from-emerald-500 to-teal-400 shadow-emerald-500/50"
                          : "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 shadow-indigo-500/50"
                      }`}
                    />
                  </div>
                </div>

                {/* Meta details: Deadline */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-sm text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/60 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700/50">
                    🗓️ Deadline: {new Date(goal.deadline).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* Footer: Timestamp & Action buttons */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between">
                <span className="font-mono text-sm text-slate-500">
                  {new Date(goal.time).toLocaleDateString()}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => openEditGoal(index)}
                    className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 transition-colors cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteGoal(index)}
                    className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 hover:bg-rose-500/20 transition-colors cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
