import { useActivity } from "../contexts/ActivityProvider";
import { BarLoader } from "react-spinners";

function Activity() {
  const { isLoading, activity } = useActivity();
  return (
    <>
      {isLoading ? (
        <div className="my-auto">
          <BarLoader color="#bde0fe" />
        </div>
      ) : (
        <div className=" self-start">
          <img
            src="/public/images/bored.png"
            alt="bored emoji"
            className="absolute top-28 -right-[30%] -z-10 opacity-80 scale-150"
          />
          <h2
            className=" text-secondary font-semibold leading-tight"
            style={{ fontSize: "clamp(2rem, 4rem, 6rem)" }}
          >
            {activity}
          </h2>
        </div>
      )}
    </>
  );
}

export default Activity;
