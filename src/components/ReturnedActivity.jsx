import { useActivity } from "../contexts/ActivityProvider";
import Button from "./Button";
import Activity from "./Activity";

function ReturnedActivity() {
  const { setActivity, showActivity, setShowActivity } = useActivity();

  const handleBackClick = () => {
    setShowActivity(false);
    setActivity(null);
  };

  return (
    <div
      className={`bg-primary h-[100dvh] p-5 w-full flex flex-col justify-between items-center absolute top-0 left-0 transition-transform duration-700 ${
        showActivity ? "transform translate-y-0" : "transform translate-y-full"
      }`}
    >
      <Button onClick={handleBackClick} bg="secondary">
        Back
      </Button>

      <Activity />
    </div>
  );
}

export default ReturnedActivity;
