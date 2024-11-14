import ActivityForm from "./components/ActivityForm";
import ReturnedActivity from "./components/ReturnedActivity";

import { useActivity } from "./contexts/ActivityProvider";

function App() {
  const { showActivity } = useActivity();

  return (
    <div className="bg-secondary relative h-[100dvh] overflow-hidden flex">
      <div
        className={`transition-all duration-700 ${
          showActivity ? "w-full xl:w-1/2" : "w-full"
        }`}
      >
        <ActivityForm />
      </div>
      <ReturnedActivity />
    </div>
  );
}

export default App;
