import { createContext, useContext, useState } from "react";
import { useActivityFetcher } from "../helpers/useActivityFetcher";
import { randomIndex } from "../helpers/helpers";

const ActivityContext = createContext();

function ActivityProvider({ children }) {
  const [activity, setActivity] = useState(null);

  const [showActivity, setShowActivity] = useState(false);
  const {
    fetchActivity: fetchActivityData,
    isLoading,
    error,
  } = useActivityFetcher();

  const fetchActivity = async function (type) {
    const data = await fetchActivityData(type);
    if (data) {
      console.log(data);

      if (Array.isArray(data)) {
        const index = randomIndex(data);
        setActivity(data[index].activity);
      } else {
        setActivity(data.activity);
      }

      return true; // return success
    } else {
      return false; // return failure if no data or error occurred
    }
  };

  return (
    <ActivityContext.Provider
      value={{
        activity,
        setActivity,

        showActivity,
        setShowActivity,
        fetchActivity,
        isLoading,
        error,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
}

export const useActivity = () => {
  const context = useContext(ActivityContext);

  if (!context) {
    throw new Error("useActivity must be used within ActivityProvider");
  }
  return context;
};

export default ActivityProvider;
