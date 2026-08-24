import GoalsDisplay from "../components/GoalsDisplay";
import GoalsHeader from "../components/GoalsHeader";

export default function Goals() {
  return (
    <section className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b-2 border-slate-200 dark:border-slate-800 pb-6 transition-colors">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
            <span>🎯</span>
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 dark:from-amber-400 dark:via-orange-400 dark:to-rose-400 bg-clip-text text-transparent">
              Milestone Goals
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
            Set long-term targets and measure your habit consistency over time.
          </p>
        </div>
      </div>

      {/* Goal Form & Goal Cards */}
      <GoalsHeader />
      <GoalsDisplay />
    </section>
  );
}
