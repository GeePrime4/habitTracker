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
    <div className="form-card" id='onEdit'>
      <h2>{editIndex === null ? "Add Habit" : "Edit Habit"}</h2>

      <input
        type="text"
        placeholder="Habit title"
        value={habitTitle}
        onChange={(e) => setHabitTitle(e.target.value)}
      />

      <textarea
        placeholder="Habit description"
        value={habitDetail}
        onChange={(e) => setHabitDetail(e.target.value)}
      />

      <div className="days">
        {weekDays.map((day) => (
          <button
            type="button"
            key={day}
            className={days.includes(day) ? "day active" : "day"}
            onClick={() => toggleDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      {editIndex === null ? (
        <button className="primary-btn" onClick={addHabit}>
          Add Habit
        </button>
      ) : (
        <button className="primary-btn" onClick={saveEdit}>
          Save Changes
        </button>
      )}
    </div>
  );
}
