import { useRef, type FormEvent } from "react"


const NewGoal = () => {
    const goal = useRef<HTMLInputElement>(null)
    const summary = useRef<HTMLInputElement>(null)

    const submitHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const enteredGoal = goal.current!.value;
        const enteredsummary = summary.current!.value;
    }

  return (
    <form onSubmit={submitHandler}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref="goal"/>
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" ref="summary"/>
      </p>
      <button>Add Goal</button>
    </form>
  )
}

export default NewGoal
