import { useContext } from "react";
import { HabitContext } from "../context/HabitContext";

export default function HabitListDisplay() {
  const { habitList, deleteHabit, openEdit, toggleComplete } =
    useContext(HabitContext);

  if (habitList.length === 0) {
    return <p className="empty">No habits added yet.</p>;
  }
  return (
    <div className="habit-grid">{habitList.map((habit, index) => (
      <div key={index} className={habit.completed ? "habit-card completed" : "habit-card"}>
        <div className="habit-header">
          <h3>{habit.title}</h3>
          <input type="checkbox" checked={habit.completed} onChange={() => toggleComplete(index)} />
        </div>
        <p>{habit.detail || "No description"}</p>
        <div className="day-list">{habit.days.map((day) => (
          <span key={day} className="day-pill">{day}
          </span>
        ))}
        </div>

        <div className="actions">
          <button className="edit-btn" onClick={() => openEdit(index)}>
            <a href="#onEdit" className="anchorTag">Edit</a>
          </button>
          <button className="delete-btn" onClick={() => deleteHabit(index)}>
            Delete
          </button>
        </div>
      </div>
    ))}
    </div>
  );
}
