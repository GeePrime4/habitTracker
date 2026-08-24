import { useContext } from "react";
import { HabitContext } from "../context/HabitContext";

export default function HabitListDisplay() {
  const { habitList, deleteHabit, openEdit, toggleComplete, layout } =
    useContext(HabitContext);

  if (habitList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center rounded-3xl bg-white dark:bg-slate-800/40 border-2 border-dashed border-slate-300 dark:border-slate-700/70 space-y-3 shadow-sm dark:shadow-none transition-colors">
        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-2xl">
          🌱
        </div>
        <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
          No habits added yet.
        </h4>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
          Start by creating your first daily habit to build momentum!
        </p>
      </div>
    );
  }

  return (
    <>
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
            onChange={layout}
          >
            <option value="oldest">Oldest</option>
            <option value="newest">Newest</option>
            <option value="totalChecks">Completed</option>
            <option value="totalSkips">Incomplete</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {habitList.map((habit, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 border transition-all duration-300 hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-lg shadow-md dark:shadow-xl flex flex-col justify-between ${
              habit.completed
                ? "bg-emerald-50/50 dark:bg-slate-800/90 border-emerald-400/50 dark:border-emerald-500/40 ring-1 ring-emerald-500/20"
                : "bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600"
            }`}
          >
            <div>
              <div className="flex items-start justify-between gap-4">
                <h3
                  className={`text-lg font-bold tracking-tight transition-colors ${
                    habit.completed
                      ? "line-through text-slate-400 dark:text-slate-500"
                      : "text-slate-900 dark:text-white"
                  }`}
                >
                  {habit.title}
                </h3>
                <input
                  type="checkbox"
                  checked={habit.completed}
                  onChange={() => toggleComplete(index)}
                  className="w-5 h-5 mt-0.5 rounded accent-emerald-500 cursor-pointer transition-transform active:scale-95"
                />
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 min-h-[36px] line-clamp-2">
                {habit.detail || "No description provided."}
              </p>

              <div className="flex flex-wrap gap-1.5 my-4">
                {habit.days.map((day) => (
                  <span
                    key={day}
                    className="px-2.5 py-1 text-sm font-semibold rounded-lg bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 font-mono"
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-700/80 flex items-center justify-between">
              <span className="font-mono text-sm text-slate-500">
                {new Date(habit.time).toLocaleDateString()}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 transition-colors cursor-pointer"
                  onClick={() => openEdit(index)}
                >
                  <a href="#onEdit" className="no-underline">
                    Edit
                  </a>
                </button>
                <button
                  type="button"
                  className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 hover:bg-rose-500/20 transition-colors cursor-pointer"
                  onClick={() => deleteHabit(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
