import { useContext } from "react";
import { HabitContext } from "../context/HabitContext";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function HabitListHeader() {
  const {
    habitTitle,
    setHabitTitle,
    habitDetail,
    setHabitDetail,
    days,
    toggleDay,
    addHabit,
    saveEdit,
    editIndex,
  } = useContext(HabitContext);

  return (
    <div
      className="bg-white dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-md dark:shadow-2xl space-y-6 mb-8 transition-colors duration-300"
      id="onEdit"
    >
      {/* 1. Header Title */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700/60 pb-4">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
          <span>
            {editIndex === null ? "✨ Create New Habit" : "✏️ Edit Habit"}
          </span>
        </h2>
        {editIndex !== null && (
          <span className="font-mono text-sm uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            Editing Mode
          </span>
        )}
      </div>

      {/* 2. Form Inputs Container */}
      <div className="space-y-4">
        {/* Title Input */}
        <div>
          <label className="block font-mono text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
            Habit Name
          </label>
          <input
            type="text"
            placeholder="e.g. Read 20 pages, Morning Run..."
            value={habitTitle}
            onChange={(e) => setHabitTitle(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/80 rounded-2xl px-4 py-3 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
          />
        </div>

        {/* Description Input */}
        <div>
          <label className="block font-mono text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
            Description (Optional)
          </label>
          <textarea
            placeholder="Why is this habit important to you?"
            value={habitDetail}
            onChange={(e) => setHabitDetail(e.target.value)}
            rows={3}
            className="w-full bg-slate-50 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/80 rounded-2xl px-4 py-3 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm resize-none"
          />
        </div>

        {/* 3. Weekday Selection */}
        <div>
          <label className="block font-mono text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
            Repeat on
          </label>
          <div className="flex flex-wrap gap-2">
            {weekDays.map((day) => {
              const isSelected = days.includes(day);
              return (
                <button
                  type="button"
                  key={day}
                  onClick={() => toggleDay(day)}
                  className={`px-4 py-2 rounded-xl text-sm font-mono font-semibold border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-500/30 scale-105"
                      : "bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700/80 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-700/50"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Submit Button */}
      <div className="pt-2">
        {editIndex === null ? (
          <button
            type="button"
            onClick={addHabit}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200 cursor-pointer"
          >
            + Add Habit
          </button>
        ) : (
          <button
            type="button"
            onClick={saveEdit}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-semibold text-sm text-white bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200 cursor-pointer"
          >
            💾 Save Changes
          </button>
        )}
      </div>
    </div>
  );
}
