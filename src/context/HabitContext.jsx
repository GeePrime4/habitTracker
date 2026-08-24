import { createContext, useEffect, useState } from "react";

export const HabitContext = createContext();

export function HabitProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });
  // For habits: initialize from localStorage (or fallback to empty array)
  const [habitList, setHabitList] = useState(() => {
    try {
      const savedHabits = localStorage.getItem("habitList");
      return savedHabits ? JSON.parse(savedHabits) : [];
    } catch (error) {
      console.error("Failed to read habits from localStorage:", error);
      return [];
    }
  });

  const [habitTitle, setHabitTitle] = useState("");
  const [habitDetail, setHabitDetail] = useState("");
  const [days, setDays] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // For goals: initialize from localStorage (or fallback to empty array)
  const [goals, setGoals] = useState(() => {
    try {
      const savedGoals = localStorage.getItem("goals");
      return savedGoals ? JSON.parse(savedGoals) : [];
    } catch (error) {
      console.error("Failed to read goals from localStorage:", error);
      return [];
    }
  });

  const [goalsTitle, setGoalsTitle] = useState("");
  const [goalsDetail, setGoalsDetail] = useState("");
  const [goalTarget, setGoalTarget] = useState(0);
  const [goalProgress, setGoalProgress] = useState(0);
  const [goalDeadline, setGoalDeadline] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [editGoalIndex, setEditGoalIndex] = useState(null);

  // Automatically sync habits to localStorage on every change
  useEffect(() => {
    try {
      localStorage.setItem("habitList", JSON.stringify(habitList));
    } catch (error) {
      console.error("Failed to save habits to localStorage:", error);
    }
  }, [habitList]);

  // Automatically sync goals to localStorage on every change
  useEffect(() => {
    try {
      localStorage.setItem("goals", JSON.stringify(goals));
    } catch (error) {
      console.error("Failed to save goals to localStorage:", error);
    }
  }, [goals]);

  //toggle function for theme
  const toggleTheme = () => {
    setTheme((prev) => (
      prev === "dark" ? "light" : "dark"
    ));
  };
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  //toggle day function for habits
  const toggleDay = (day) => {
    setDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  };

  // Reset form fields for habits
  const resetHabitForm = () => {
    setHabitTitle("");
    setHabitDetail("");
    setDays([]);
    setEditIndex(null);
  };
  //reset form fields for goals
  const resetGoalForm = () => {
    setGoalsTitle("");
    setGoalsDetail("");
    setGoalTarget(0);
    setGoalProgress(0);
    setGoalDeadline(new Date().toISOString().split("T")[0]);
    setEditGoalIndex(null);
  };
  //adds habit to the habit list array
  const addHabit = () => {
    if (!habitTitle.trim() || days.length === 0) return;

    const newHabit = {
      title: habitTitle.trim(),
      detail: habitDetail.trim(),
      days: days,
      completed: false,
      time: Date.now(),
    };

    setHabitList((prev) => [...prev, newHabit]);
    resetHabitForm();
  };

  //deletes habit from the habit list array
  const deleteHabit = (index) => {
    setHabitList((prev) =>
      prev.filter((prevHabitValues, index_) => index_ !== index),
    );
  };
  //deletes goal from the goals array
  const deleteGoal = (index) => {
    setGoals((prev) =>
      prev.filter((prevGoalvalues, index_) => index_ !== index),
    );
  };
  //opens the edit form for habits
  const openEdit = (index) => {
    const habit = habitList[index];
    setHabitTitle(habit.title);
    setHabitDetail(habit.detail);
    setDays(habit.days);
    setEditIndex(index);
  };
  //saves edited habit to the habit list array
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
          : habit,
      ),
    );

    resetHabitForm();
  };
  //saves edited goal to the goals array
  const saveEditedGoal = () => {
    if (editGoalIndex === null) return;

    setGoals((prev) =>
      prev.map((goal, index) =>
        index === editGoalIndex
          ? {
              ...goal,
              title: goalsTitle.trim(),
              detail: goalsDetail.trim(),
              target: goalTarget,
              progress: goalProgress,
              deadline: goalDeadline,
            }
          : goal,
      ),
    );
    resetGoalForm();
  };
  //toggles the completed status of a habit in the habit list array
  const toggleComplete = (index) => {
    setHabitList((prev) =>
      prev.map((habit, i) =>
        i === index ? { ...habit, completed: !habit.completed } : habit,
      ),
    );
  };
  //sorts habits from oldest to newest based on time
  const oldestHabits = () => {
    setHabitList((prev) => {
      return [...prev].sort((a, b) => a.time - b.time);
    });
  };

  //sorts goals from oldest to newest based on time
  const oldestGoals = () => {
    setGoals((prev) => {
      return [...prev].sort((a, b) => a.time - b.time);
    });
  };

  //sorts habits from newest to oldest based on time
  const newestHabits = () => {
    setHabitList((prev) => {
      return [...prev].sort((a, b) => b.time - a.time);
    });
  };

  //sorts goals from newest to oldest based on time
  const newestGoals = () => {
    setGoals((prev) => {
      return [...prev].sort((a, b) => b.time - a.time);
    });
  };

  //sorts habits based on completed status, with completed habits first
  const checkedHabits = () => {
    setHabitList((prev) => {
      return [...prev].sort(
        (a, b) => Number(b.completed) - Number(a.completed),
      );
    });
  };

  //sorts goals based on progress towards target, with completed goals first
  const goalsCompleted = () => {
    setGoals((prev) => {
      return [...prev].sort(
        (a, b) =>
          Number(b.progress >= b.target) - Number(a.progress >= a.target),
      );
    });
  };

  //sorts habits based on completed status, with incomplete habits first
  const uncheckedHabits = () => {
    setHabitList((prev) => {
      return [...prev].sort(
        (a, b) => Number(a.completed) - Number(b.completed),
      );
    });
  };

  //sorts goals based on progress towards target, with incomplete goals first
  const goalsIncomplete = () => {
    setGoals((prev) => {
      return [...prev].sort(
        (a, b) =>
          Number(a.progress >= a.target) - Number(b.progress >= b.target),
      );
    });
  };

  //sorts habits based on options
  const layout = (e) => {
    const value = e.target.value;
    if (value === "oldest") {
      oldestHabits();
    } else if (value === "newest") {
      newestHabits();
    } else if (value === "totalChecks") {
      checkedHabits();
    } else if (value === "totalSkips") {
      uncheckedHabits();
    }
  };

  //sorts goals based on options
  const goalsLayout = (e) => {
    const value = e.target.value;
    if (value === "oldest") {
      oldestGoals();
    } else if (value === "newest") {
      newestGoals();
    } else if (value === "targetComplete") {
      goalsCompleted();
    } else if (value === "targetIncomplete") {
      goalsIncomplete();
    }
  };

  //adds goal to the goals array
  const addGoal = () => {
    if (!goalsTitle.trim() || !goalTarget || !goalDeadline) return;

    const newGoal = {
      title: goalsTitle.trim(),
      detail: goalsDetail.trim(),
      target: goalTarget,
      progress: goalProgress,
      deadline: goalDeadline,
      time: Date.now(),
    };

    setGoals((prev) => [...prev, newGoal]);
    // console.log(goals)
    resetGoalForm();
  };
  //opens the edit form for goals
  const openEditGoal = (index) => {
    const goal = goals[index];
    setGoalsTitle(goal.title);
    setGoalsDetail(goal.detail);
    setGoalTarget(goal.target);
    setGoalProgress(goal.progress);
    setGoalDeadline(goal.deadline);
    setEditGoalIndex(index);
  };
  return (
    <HabitContext.Provider
      value={{
        habitTitle,
        setHabitTitle,
        habitDetail,
        setHabitDetail,
        days,
        toggleDay,
        habitList,
        addHabit,
        deleteHabit,
        openEdit,
        saveEdit,
        editIndex,
        toggleComplete,
        layout,
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
        goals,
        openEditGoal,
        saveEditedGoal,
        editGoalIndex,
        deleteGoal,
        goalsLayout,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
}
