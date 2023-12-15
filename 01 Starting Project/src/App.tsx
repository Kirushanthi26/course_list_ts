import CourseGoal from "./components/CourseGoal.tsx";
import goalsImg from "./assets/goals.jpg"
import Header from "./components/Header.tsx";

export default function App() {
  return (
    <main>
      <Header image={{src:goalsImg, alt:"header goal img"}}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title="learn React and TS">
        <p>learn basic typescript based react project</p>
      </CourseGoal>
    </main>
  );
}
