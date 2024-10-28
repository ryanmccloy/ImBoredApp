import { useState } from "react";
import Button from "./Button";
import { useActivity } from "../contexts/ActivityProvider";

function ActivityForm() {
  const [activityType, setActivityType] = useState("education");
  const [participants, setParticipants] = useState(1);
  const [rotationAngle, setRotationAngle] = useState(0);

  const { fetchActivity } = useActivity();

  const handleActivityTypeChange = (e) => {
    setActivityType(e.target.value);
  };

  const handleSliderChange = (e) => {
    setParticipants(e.target.value);
    setRotationAngle((prevAngle) => prevAngle + 360);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    fetchActivity(activityType);
  };

  const handleSubmitRandom = (e) => {
    e.preventDefault();
    fetchActivity("random");
  };

  return (
    <div className="h-[100dvh] flex flex-col justify-center items-center gap-28">
      <form
        className="mx-auto w-fit text-center flex flex-col gap-14"
        onSubmit={handleSubmitForm}
      >
        <div className="flex gap-2 items-center">
          <label htmlFor="activity-type">Activity type: </label>
          <select
            id="activity-type"
            name="activity-type"
            className="rounded a p-1  bg-primary border border-white cursor-pointer"
            value={activityType}
            onChange={handleActivityTypeChange}
          >
            <option value="education">Education</option>
            <option value="recreational">Recreational</option>
            <option value="social">Social</option>
            <option value="charity">Charity</option>
            <option value="cooking">Cooking</option>
            <option value="relaxation">Relaxation</option>
            <option value="busywork">Busy Work</option>
          </select>
        </div>

        <div className=" flex flex-col gap-3">
          <label htmlFor="participants" className="flex justify-between ">
            <span>Number of participants:</span>
            <span className="font-semibold">{participants}</span>
          </label>

          <input
            type="range"
            min="1"
            max="8"
            id="participants"
            name="participants"
            value={participants}
            onChange={handleSliderChange}
            className="flex-grow range-slider"
            style={{ "--thumb-rotation": `rotate(${rotationAngle}deg)` }}
          />
        </div>

        <Button type="submit">Find me something to do</Button>
      </form>
      <Button onClick={handleSubmitRandom}>Surpise Me</Button>
    </div>
  );
}

export default ActivityForm;

// Create context
// create api calls for onSubmit, and onClick for random button
// handle loading state
// handle disabled state on button?
// create activity component
