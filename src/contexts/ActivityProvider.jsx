import { createContext, useContext, useState } from "react";
import { useActivityFetcher } from "../helpers/useActivityFetcher";

const ActivityContext = createContext();

function ActivityProvider({ children }) {
  const [activity, setActivity] = useState();
  const {
    fetchActivity: fetchActivityData,
    isLoading,
    error,
  } = useActivityFetcher();

  const fetchActivity = async function (type) {
    const data = await fetchActivityData(type);
    if (data) {
      console.log(data);
      setActivity(data);
    }
  };

  return (
    <ActivityContext.Provider
      value={{ activity, fetchActivity, isLoading, error }}
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
