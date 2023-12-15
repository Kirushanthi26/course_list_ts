import { type FC, type ReactNode } from "react";

interface CourseGoalProps {
  id:number;
  title: string;
  children: ReactNode;
  onDelete: (id:number)=>void;
}

const CourseGoal: FC<CourseGoalProps> = ({ title, children, onDelete,id }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
