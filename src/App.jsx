import { Routes, Route, NavLink } from "react-router-dom";
import { HabitProvider } from "./context/HabitContext";
import Home from "./pages/Home";
import Habits from "./pages/Habits";
import Goals from "./pages/Goals";
import Progress from "./pages/Progress";

export default function App() {
  return (
    <HabitProvider>
      <div className="app">
        <nav className="navbar">
          <h1>Habit Tracker</h1>
          <div className="nav-links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/habits">Habits</NavLink>
            <NavLink to="/goals">Goals</NavLink>
            <NavLink to="/progress">Progress</NavLink>
          </div>
        </nav>

        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/habits" element={<Habits />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/progress" element={<Progress />} />
          </Routes>
        </main>
      </div>
    </HabitProvider>
  );
}
