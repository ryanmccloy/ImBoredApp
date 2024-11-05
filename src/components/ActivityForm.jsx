import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import Button from "./Button";
import { useActivity } from "../contexts/ActivityProvider";

function ActivityForm() {
  const [activityType, setActivityType] = useState("education");
  const [participants, setParticipants] = useState(1);
  const [rotationAngle, setRotationAngle] = useState(0);

  const { setShowActivity, fetchActivity, error } = useActivity();

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
      success = await fetchActivity(activityType);
    } else if (action === "byParticipants") {
      success = await fetchActivity(participants);
    }
    if (success) {
      setShowActivity(true);
    }
  };

  const handleSubmitRandom = async (e) => {
    e.preventDefault();
    const success = await fetchActivity("random");

    if (success) {
      setShowActivity(true);
    }
  };

  useEffect(() => {
    if (error !== null) {
      toast.error(
        <div className="flex flex-col gap-5 ml-2 ">
          <p>
            Too many people are bored and looking for something to do. Please
            try again later.
          </p>
          <p>
            Dorothy Parker once said{" "}
            <quote className="italic">
              &quot;The cure for boredom is curiosity&quot;
            </quote>
          </p>
          <p>Always remember to stay curious 😉</p>
        </div>,
        {
          duration: 8000,
          position: "top-center",
          className: "border border-primary p-2",

          // Change colors of success/error/loading icon
          iconTheme: {
            primary: "#ffafcc",
            secondary: "#fff",
          },

          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        }
      );
    }
  }, [error]);

  return (
    <div className="h-full flex flex-col justify-center items-center gap-28 relative">
      <Toaster />
      <h1 className=" absolute top-10 text-6xl bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">
        I&apos;m Bored
      </h1>
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
              Activity Type
            </Button>
            <Button type="submit" bg="primary" name="byParticipants">
              Participants
            </Button>
          </div>
        </div>
      </form>
      <Button onClick={handleSubmitRandom} bg="primary">
        Surpise Me
      </Button>
    </div>
  );
}

export default ActivityForm;

// interview 2pm
// fix activity font size issue
// change emoji style on activity page?
// responsive
// readme
// add to portfolio
