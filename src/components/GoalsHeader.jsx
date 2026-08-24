import React, { useContext } from "react";
import { HabitContext } from "../context/HabitContext";

function GoalsHeader() {
  const {
    saveEditedGoal,
    editGoalIndex,
    goalsTitle,
    goalsDetail,
    setGoalsTitle,
    setGoalsDetail,
    goalTarget,
    setGoalTarget,
    goalProgress,
    setGoalProgress,
    goalDeadline,
    setGoalDeadline,
    addGoal,
  } = useContext(HabitContext);

  return (
    <div
      className="bg-white dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-md dark:shadow-2xl space-y-6 mb-8 transition-colors duration-300"
      id="onEditGoal"
    >
      {/* 1. Header Title */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700/60 pb-4">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
          <span>
            {editGoalIndex === null ? "🎯 Set New Goal" : "✏️ Edit Goal"}
          </span>
        </h2>
        {editGoalIndex !== null && (
          <span className="font-mono text-sm uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            Editing Mode
          </span>
        )}
      </div>

      {/* 2. Form Inputs Container */}
      <div className="space-y-4">
        {/* Goal Title */}
        <div>
          <label className="block font-mono text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
            Goal Title
          </label>
          <input
            type="text"
            placeholder="e.g. Run a 10k Marathon, Read 12 Books..."
            value={goalsTitle}
            onChange={(e) => setGoalsTitle(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/80 rounded-2xl px-4 py-3 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
          />
        </div>

        {/* Goal Description */}
        <div>
          <label className="block font-mono text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
            Description (Optional)
          </label>
          <textarea
            placeholder="What is your roadmap or motivation for this milestone?"
            value={goalsDetail}
            onChange={(e) => setGoalsDetail(e.target.value)}
            rows={3}
            className="w-full bg-slate-50 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/80 rounded-2xl px-4 py-3 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm resize-none"
          />
        </div>

        {/* 3. Metrics Grid (Target, Progress, Deadline) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {/* Target */}
          <div>
            <label
              htmlFor="target"
              className="block font-mono text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2"
            >
              Target Count
            </label>
            <input
              id="target"
              type="number"
              placeholder="e.g. 100"
              value={goalTarget}
              onChange={(e) =>
                e.target.value.slice(0, 1) === "0"
                  ? setGoalTarget(e.target.value.slice(1))
                  : setGoalTarget(e.target.value)
              }
              className="w-full font-mono bg-slate-50 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/80 rounded-2xl px-4 py-3 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
            />
          </div>

          {/* Current Progress */}
          <div>
            <label
              htmlFor="progress"
              className="block font-mono text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2"
            >
              Initial Progress
            </label>
            <input
              id="progress"
              type="number"
              placeholder="e.g. 0"
              value={goalProgress}
              onChange={(e) =>
                e.target.value.slice(0, 1) === "0"
                  ? setGoalProgress(e.target.value.slice(1))
                  : setGoalProgress(e.target.value)
              }
              className="w-full font-mono bg-slate-50 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/80 rounded-2xl px-4 py-3 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
            />
          </div>

          {/* Deadline */}
          <div>
            <label
              htmlFor="deadline"
              className="block font-mono text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2"
            >
              Target Deadline
            </label>
            <input
              id="deadline"
              type="date"
              value={goalDeadline}
              onChange={(e) => setGoalDeadline(e.target.value)}
              className="w-full font-mono bg-slate-50 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/80 rounded-2xl px-4 py-3 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm [color-scheme:light] dark:[color-scheme:dark]"
            />
          </div>
        </div>
      </div>

      {/* 4. Action Button */}
      <div className="pt-2">
        {editGoalIndex === null ? (
          <button
            type="button"
            onClick={addGoal}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200 cursor-pointer"
          >
            + Set Goal
          </button>
        ) : (
          <button
            type="button"
            onClick={saveEditedGoal}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-semibold text-sm text-white bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200 cursor-pointer"
          >
            💾 Save Changes
          </button>
        )}
      </div>
    </div>
  );
}

export default GoalsHeader;
