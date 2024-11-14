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
      className={` bg-primary h-[100dvh] p-5 md:p-9 lg:p-12 w-full flex flex-col justify-between items-center absolute top-0 left-0 xl:left-1/2 xl:w-1/2 transition-transform duration-700 ${
        showActivity
          ? "transform translate-y-0 xl:translate-x-0"
          : "transform translate-y-full xl:translate-y-0 xl:translate-x-full"
      }`}
    >
      <Button onClick={handleBackClick} bg="secondary">
        Back
      </Button>

      <div className="self-start">
        <Activity />
      </div>
    </div>
  );
}

export default ReturnedActivity;
