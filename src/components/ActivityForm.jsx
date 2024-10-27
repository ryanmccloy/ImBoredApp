import { useState } from "react";
import Button from "./Button";

function ActivityForm() {
  const [participants, setParticpants] = useState(1);
  const [rotating, setRotating] = useState(false);

  const handleSliderChange = (e) => {
    setParticpants(e.target.value);
  };

  const handleMouseUp = () => {
    if (rotating === true) return;
    setRotating(true);
    setTimeout(() => setRotating(false), 1000);
  };

  return (
    <div className="h-[100dvh] flex flex-col justify-center items-center gap-28">
      <form className="mx-auto w-fit text-center flex flex-col gap-10">
        <div className="flex gap-2">
          <label htmlFor="activity-type">Activity type: </label>
          <select id="activity-type" name="activity-type" className="rounded">
            <option>Education</option>
            <option>Recreational</option>
            <option>Social</option>
            <option>Charity</option>
            <option>Cooking</option>
            <option>Relaxation</option>
            <option>Busy Work</option>
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
            onMouseUp={handleMouseUp}
            className="flex-grow range-slider"
            style={{
              "--thumb-rotation": rotating ? "rotate(360deg)" : "rotate(0deg)",
            }}
          />
        </div>

        <Button type="submit">Find me something to do</Button>
      </form>
      <Button>Surpise Me</Button>
    </div>
  );
}

export default ActivityForm;

// style option dropdown
// control activity type input by state
// Create context
// create api calls for onSubmit, and onClick for random button
// handle loading state
// handle disabled state on button?
// create activity component
