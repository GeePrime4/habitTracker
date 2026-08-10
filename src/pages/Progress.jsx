import { useContext } from "react";
import { HabitContext } from "../context/HabitContext";

export default function Progress() {
  const { habitList } = useContext(HabitContext);

  const total = habitList.length;
  const completed = habitList.filter((h) => h.completed).length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <section className="page-card">
      <h2>Progress</h2>

      <div className="stats">
        <div className="stat">
          <span>Total Habits</span>
          <strong>{total}</strong>
        </div>

        <div className="stat">
          <span>Completed</span>
          <strong>{completed}</strong>
        </div>

        <div className="stat">
          <span>Completion Rate</span>
          <strong>{percentage}%</strong>
        </div>
      </div>
    </section>
  );
}
