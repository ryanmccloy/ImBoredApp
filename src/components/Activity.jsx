import { useEffect, useRef } from "react";
import { useActivity } from "../contexts/ActivityProvider";
import { sleep } from "../helpers/helpers";

function Activity() {
  const typewriterRef = useRef(null);
  const { activity } = useActivity();

  useEffect(() => {
    const typer = async (text) => {
      for (let i = 0; i < text.length; i++) {
        if (typewriterRef.current) {
          typewriterRef.current.innerText = text.substring(0, i + 1);
        }

        await sleep(100);
      }
    };

    if (activity) {
      typer(activity);
    }
  }, [activity]);

  return (
    <h2
      className=" text-secondary  font-semibold leading-tight"
      style={{ fontSize: "clamp(2rem, 4rem, 6rem)" }}
    >
      <span ref={typewriterRef}></span>
      <span className="cursor">|</span>
    </h2>
  );
}

export default Activity;
