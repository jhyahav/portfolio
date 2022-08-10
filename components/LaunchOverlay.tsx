import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import disableScroll from "disable-scroll";
import TypewriterComponent from "typewriter-effect";
export default function LaunchOverlay({
  setOverlayVisible,
  setWarpActive,
}: {
  setOverlayVisible: Dispatch<SetStateAction<boolean>>;
  setWarpActive: Dispatch<SetStateAction<boolean>>;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  useEffect(() => overlayRef.current?.focus(), []);
  const [launchEnabled, setLaunchEnabled] = useState(false);
  const launchHandler = () => {
    if (launchEnabled) {
      setWarpActive(true);
      setOverlayVisible(false);
      setTimeout(() => {
        setWarpActive(false);
        disableScroll.off();
      }, 10000);
    }
  };
  return (
    <div
      ref={overlayRef}
      tabIndex={0}
      onDoubleClick={launchHandler}
      onKeyDown={launchHandler}
      id={"overlay"}
    >
      <div className="text_container">
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter
              .changeDelay(10)
              .typeString(
                "<span class='warning_message'><strong class='danger'>⚠️WARNING: </strong>This site contains flashing effects that may be unsuitable for users with photosensitive epilepsy.</strong></span>"
              )
              .pauseFor(3500)
              .deleteAll(0.01)
              .callFunction(() => setLaunchEnabled(true))
              .changeDelay("natural")
              .typeString("<h1> Hi, I'm Jonathan. </h1>")
              .changeDelay(50)
              .pauseFor(500)
              .typeString("<sp>PRESS ANY KEY or DOUBLE-CLICK anywhere!</sp>")
              .start();
          }}
        />
      </div>
    </div>
  );
}
