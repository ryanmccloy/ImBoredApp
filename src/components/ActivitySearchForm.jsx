import { useState } from "react";
import { ScaleLoader } from "react-spinners";

import Button from "./Button";
import { useActivity } from "../contexts/ActivityProvider";

function ActivitySearchForm({
  isLoadingActivityByParticipants,
  setIsLoadingActivityByParticipants,
  isLoadingActivityByType,
  setIsLoadingActivityByType,
  loaderColor,
}) {
  const [activityType, setActivityType] = useState("education");
  const [participants, setParticipants] = useState(1);
  const [rotationAngle, setRotationAngle] = useState(0);
  const { setShowActivity, fetchActivity } = useActivity();

  const handleActivityTypeChange = (e) => {
    setActivityType(e.target.value);
  };

  const handleSliderChange = (e) => {
    setParticipants(e.target.value);
    setRotationAngle((prevAngle) => prevAngle + 360);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    let success = false;
    const action = e.nativeEvent.submitter.name;

    if (action === "byType") {
      setIsLoadingActivityByType(true);
      success = await fetchActivity(activityType);
    } else if (action === "byParticipants") {
      setIsLoadingActivityByParticipants(true);
      success = await fetchActivity(participants);
    }
    if (success) {
      setShowActivity(true);
      setIsLoadingActivityByType(false);
      setIsLoadingActivityByParticipants(false);
    }
  };

  return (
    <form
      className="mx-auto w-fit text-center flex flex-col gap-14"
      onSubmit={handleSubmitForm}
    >
      <div className="flex justify-between gap-2 items-center">
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
          max="5"
          id="participants"
          name="participants"
          value={participants}
          onChange={handleSliderChange}
          className="flex-grow range-slider"
          style={{ "--thumb-rotation": `rotate(${rotationAngle}deg)` }}
        />
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="self-start">Find me something to do by:</h2>
        <div className="flex gap-4">
          <Button type="submit" bg="primary" name="byType">
            {isLoadingActivityByType ? (
              <ScaleLoader color={loaderColor} height={10} />
            ) : (
              "Activity Type"
            )}
          </Button>
          <Button type="submit" bg="primary" name="byParticipants">
            {isLoadingActivityByParticipants ? (
              <ScaleLoader color={loaderColor} height={10} />
            ) : (
              "Participants"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default ActivitySearchForm;
