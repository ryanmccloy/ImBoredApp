import { BarLoader } from "react-spinners";
import { useActivity } from "../contexts/ActivityProvider";

function Activity() {
  const { isLoading, activity } = useActivity();
  return (
    <>
      {isLoading ? (
        <div className="my-auto">
          <BarLoader color="#bde0fe" />
        </div>
      ) : (
        <h2
          className=" text-secondary font-semibold leading-tight"
          style={{ fontSize: "clamp(3rem, 4rem, 6rem)" }}
        >
          {activity}
        </h2>
      )}
    </>
  );
}

export default Activity;
