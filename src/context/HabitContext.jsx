import { createContext, useState } from "react";

export const HabitContext = createContext();

export function HabitProvider({ children }) {
  const [habitTitle, setHabitTitle] = useState("");
  const [habitDetail, setHabitDetail] = useState("");
  const [days, setDays] = useState([]);
  const [habitList, setHabitList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const toggleDay = (day) => {
    setDays((prev) =>
      prev.includes(day)
        ? prev.filter((d) => d !== day)
        : [...prev, day]
    );
  };

  const resetForm = () => {
    setHabitTitle("");
    setHabitDetail("");
    setDays([]);
    setEditIndex(null);
  };

  const addHabit = () => {
    if (!habitTitle.trim()) return;

    const newHabit = {
      title: habitTitle.trim(),
      detail: habitDetail.trim(),
      days: days,
      completed: false,
    };

    setHabitList((prev) => [...prev, newHabit]);
    resetForm();
  };

  const deleteHabit = (index) => {
    setHabitList((prev) => prev.filter((prevHabitlist_, i) => i !== index));
  };

  const openEdit = (index) => {
    const habit = habitList[index];
    setHabitTitle(habit.title);
    setHabitDetail(habit.detail);
    setDays(habit.days);
    setEditIndex(index);
  };

  const saveEdit = () => {
    if (editIndex === null) return;

    setHabitList((prev) =>
      prev.map((habit, index) =>
        index === editIndex
          ? {
            ...habit,
            title: habitTitle.trim(),
            detail: habitDetail.trim(),
            days,
          }
          : habit
      )
    );

    resetForm();
  };

  const toggleComplete = (index) => {
    setHabitList((prev) =>
      prev.map((habit, i) =>
        i === index
          ? { ...habit, completed: !habit.completed }
          : habit
      )
    );
  };

  return (
    <HabitContext.Provider
      value={{
        habitTitle,setHabitTitle,
        habitDetail,setHabitDetail,
        days,toggleDay,
        habitList,addHabit,deleteHabit,
        openEdit,saveEdit,editIndex,
        toggleComplete,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
}
