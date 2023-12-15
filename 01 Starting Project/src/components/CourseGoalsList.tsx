import { type FC } from "react";
import CourseGoal from "./CourseGoal";
import {CourseGoals} from "../App.tsx"

interface CourseGoalsList {
  goalProps: CourseGoals[];
}

const CourseGoalsList: FC<CourseGoalsList> = ({ goalProps }) => {
  return (
    <ul>
      {goalProps.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalsList;
