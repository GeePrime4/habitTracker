import HabitListHeader from "../components/HabitListHeader";
import HabitListDisplay from "../components/HabitListDisplay";

export default function Habits() {
  return (
    <section className="habits-page">
      <HabitListHeader />
      <HabitListDisplay />
    </section>
  );
}
