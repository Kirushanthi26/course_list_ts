import { useRef, type FormEvent, type FC } from "react"

interface NewGoalProps{
    onAddGoal: (goal:string, summary:string) => void;
}

const NewGoal: FC<NewGoalProps> = ({onAddGoal}) => {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    const submitHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        e.currentTarget.reset();
        onAddGoal(enteredGoal,enteredSummary);
    }

  return (
    <form onSubmit={submitHandler}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goal}/>
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" ref={summary}/>
      </p>
      <button>Add Goal</button>
    </form>
  )
}

export default NewGoal
