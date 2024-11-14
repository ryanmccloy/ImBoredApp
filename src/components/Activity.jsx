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
    <h2 className=" text-secondary text-7xl md:text-8xl   font-semibold leading-tight">
      <span ref={typewriterRef}></span>
      <span className="cursor">|</span>
    </h2>
  );
}

export default Activity;
