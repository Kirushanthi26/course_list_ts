import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import { useState } from "react";
import CourseGoalsList from "./components/CourseGoalsList.tsx";

export interface CourseGoals {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoals[]>([]);

  const addGoalHandler = () => {
    setGoals((prevState) => {
      const newCourseGoal: CourseGoals = {
        id: Math.random(),
        title: "learn React js",
        description: "learn React js with ts, as soon as possible",
      };
      return [...prevState, newCourseGoal];
    });
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "header goal img" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={addGoalHandler}>Add Goal</button>
      <CourseGoalsList goalProps={goals}/>
    </main>
  );
}
