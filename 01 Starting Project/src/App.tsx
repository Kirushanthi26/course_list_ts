import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import { useState } from "react";
import CourseGoalsList from "./components/CourseGoalsList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export interface CourseGoals {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoals[]>([]);

  const addGoalHandler = (goal:string, summary:string) => {
    setGoals((prevState) => {
      const newCourseGoal: CourseGoals = {
        id: Math.random(),
        title: goal,
        description: summary
      };
      return [...prevState, newCourseGoal];
    });
  };

  const deleteGoalHandler = (id:number) => {
    setGoals((prevGoals) => prevGoals.filter((goal)=>goal.id !== id))
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "header goal img" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={addGoalHandler}/>
      <CourseGoalsList goalProps={goals} onDeleteGoal={deleteGoalHandler}/>
    </main>
  );
}
