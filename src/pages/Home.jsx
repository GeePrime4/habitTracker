import HabitListDisplay from "../components/HabitListDisplay";

export default function Home() {
  return (
    <section className="space-y-8">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 p-6 sm:p-10 border border-indigo-500/20 shadow-xl text-white">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-xl space-y-4">
          <span className="font-mono text-sm font-semibold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 px-3 py-1 rounded-full inline-block">
            ✨ Daily Overview
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Small habits make{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              big changes.
            </span>
          </h2>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Stay consistent, track your progress, and hit your daily targets.
          </p>
        </div>
      </div>

      {/* Habits Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
            Today's Habits
          </h3>
        </div>
        <HabitListDisplay />
      </div>
    </section>
  );
}
