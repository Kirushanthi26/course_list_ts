import { type FC } from "react";
import CourseGoal from "./CourseGoal";
import {CourseGoals} from "../App.tsx"

interface CourseGoalsList {
  goalProps: CourseGoals[];
  onDeleteGoal: (id:number)=>void;
}

const CourseGoalsList: FC<CourseGoalsList> = ({ goalProps, onDeleteGoal }) => {
  return (
    <ul>
      {goalProps.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalsList;
