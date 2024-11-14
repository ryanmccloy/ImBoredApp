import ActivityForm from "./components/ActivityForm";
import ReturnedActivity from "./components/ReturnedActivity";

function App() {
  return (
    <div className="bg-secondary relative h-[100dvh] overflow-hidden ">
      <ActivityForm />

      <ReturnedActivity />
    </div>
  );
}

export default App;
