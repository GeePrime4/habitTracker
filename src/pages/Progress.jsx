import { useContext } from "react";
import { HabitContext } from "../context/HabitContext";

export default function Progress() {
  const { habitList } = useContext(HabitContext);

  const total = habitList.length;
  const completed = habitList.filter((h) => h.completed).length;
  const remaining = total - completed;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  const getMotivation = () => {
    if (total === 0)
      return "🌱 Add habits to start tracking your daily progress!";
    if (percentage === 100)
      return "🏆 Perfection! You've crushed all your habits today!";
    if (percentage >= 70)
      return "🔥 Incredible momentum! You're almost at 100%!";
    if (percentage >= 40) return "⚡ Good progress! Keep up the consistency!";
    if (completed > 0) return "🚀 Off to a great start today!";
    return "⏳ Ready to get started? Check off your first habit today!";
  };

  return (
    <section className="space-y-8">
      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b-2 border-slate-200 dark:border-slate-800 pb-6 transition-colors">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
            <span>📊</span>
            <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Progress & Analytics
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
            Real-time insights on your daily consistency and completion rate.
          </p>
        </div>
      </div>

      {/* 2. Hero Completion Rate Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 border border-indigo-500/20 p-6 sm:p-8 shadow-xl text-white space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="font-mono text-sm font-semibold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 px-3 py-1 rounded-full inline-block">
              Overall Score
            </span>
            <h3 className="text-2xl font-bold text-white mt-2">
              Daily Completion Rate
            </h3>
            <p className="text-sm text-slate-300 mt-1">{getMotivation()}</p>
          </div>

          {/* Big Percentage Display */}
          <div className="flex items-baseline gap-1 bg-slate-900/80 px-6 py-4 rounded-2xl border border-slate-700/60 self-start sm:self-auto">
            <span className="font-mono text-4xl sm:text-5xl font-extrabold text-white">
              {percentage}
            </span>
            <span className="font-mono text-xl font-bold text-indigo-400">%</span>
          </div>
        </div>

        {/* Master Progress Bar */}
        <div className="space-y-1.5 pt-2">
          <div className="w-full h-4 bg-slate-900/90 rounded-full p-1 border border-slate-700/60 overflow-hidden shadow-inner">
            <div
              style={{ width: `${percentage}%` }}
              className="h-full rounded-full transition-all duration-700 ease-out bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/50"
            />
          </div>
          <div className="flex justify-between text-sm font-mono text-slate-400">
            <span>0%</span>
            <span>
              {completed} of {total} completed
            </span>
            <span>100%</span>
          </div>
        </div>
      </div>

      {/* 3. Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Total Habits Card */}
        <div className="bg-white dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 shadow-md dark:shadow-xl hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-sm uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-wider">
              Total Habits
            </span>
            <span className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-lg">
              📋
            </span>
          </div>
          <p className="font-mono text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {total}
          </p>
          <span className="text-sm text-slate-500 mt-1 block">
            Active daily routines
          </span>
        </div>

        {/* Completed Card */}
        <div className="bg-white dark:bg-slate-800/80 backdrop-blur-md border border-emerald-300 dark:border-emerald-500/30 rounded-2xl p-6 shadow-md dark:shadow-xl hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-sm uppercase font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider">
              Completed
            </span>
            <span className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-lg">
              ✅
            </span>
          </div>
          <p className="font-mono text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
            {completed}
          </p>
          <span className="text-sm text-slate-500 mt-1 block">
            Finished for today
          </span>
        </div>

        {/* Remaining Card */}
        <div className="bg-white dark:bg-slate-800/80 backdrop-blur-md border border-amber-300 dark:border-amber-500/30 rounded-2xl p-6 shadow-md dark:shadow-xl hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-sm uppercase font-semibold text-amber-600 dark:text-amber-400 tracking-wider">
              Remaining
            </span>
            <span className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 text-lg">
              ⏳
            </span>
          </div>
          <p className="font-mono text-3xl sm:text-4xl font-extrabold text-amber-600 dark:text-amber-400">
            {remaining}
          </p>
          <span className="text-sm text-slate-500 mt-1 block">
            Pending check-in
          </span>
        </div>
      </div>
    </section>
  );
}
