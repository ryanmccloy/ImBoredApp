import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ScaleLoader } from "react-spinners";

import ActivitySearchForm from "./ActivitySearchForm";
import Button from "./Button";
import { useActivity } from "../contexts/ActivityProvider";

function ActivityForm() {
  const [isLoadingActivityByParticipants, setIsLoadingActivityByParticipants] =
    useState(false);
  const [isLoadingActivityByType, setIsLoadingActivityByType] = useState(false);
  const [isLoadingActivityByRandom, setIsLoadingActivityByRandom] =
    useState(false);

  const { showActivity, setShowActivity, fetchActivity, error } = useActivity();

  const loaderColor =
    getComputedStyle(document.documentElement).getPropertyValue(
      "--tw-color-secondary"
    ) || "#bde0fe";

  const handleSubmitRandom = async (e) => {
    e.preventDefault();
    setIsLoadingActivityByRandom(true);
    const success = await fetchActivity("random");

    if (success) {
      setShowActivity(true);
      setIsLoadingActivityByRandom(false);
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
            <span className="italic">
              &quot;The cure for boredom is curiosity&quot;
            </span>
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

      const removeLoader = setTimeout(() => {
        setIsLoadingActivityByType(false);
        setIsLoadingActivityByParticipants(false);
        setIsLoadingActivityByRandom(false);
      }, 1000);

      return () => clearTimeout(removeLoader);
    }
  }, [error]);

  return (
    <div
      className={`h-full flex flex-col justify-center items-center gap-28 relative transition-all duration-700 ${
        showActivity ? "w-full xl:w-1/2" : "w-full"
      }`}
    >
      <Toaster />
      <h1 className=" absolute top-10 text-6xl bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">
        I&apos;m Bored
      </h1>
      <ActivitySearchForm
        isLoadingActivityByParticipants={isLoadingActivityByParticipants}
        setIsLoadingActivityByParticipants={setIsLoadingActivityByParticipants}
        isLoadingActivityByType={isLoadingActivityByType}
        setIsLoadingActivityByType={setIsLoadingActivityByType}
        loaderColor={loaderColor}
      />
      <Button onClick={handleSubmitRandom} bg="primary">
        {isLoadingActivityByRandom ? (
          <ScaleLoader color={loaderColor} height={10} />
        ) : (
          "Surprise Me"
        )}
      </Button>
    </div>
  );
}

export default ActivityForm;
