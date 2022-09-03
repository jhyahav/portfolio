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
  // Focus on overlay div on mount so onKeyDown works properly
  useEffect(() => overlayRef.current?.focus(), []);
  const [launchEnabled, setLaunchEnabled] = useState(false);
  const launchHandler = () => {
    // Disable launch until epilepsy warning has been properly displayed
    if (launchEnabled) {
      setWarpActive(true);
      setOverlayVisible(false);
      setTimeout(() => {
        setWarpActive(false);
        disableScroll.off();
      }, 5000);
    }
  };
  // TODO: add some nice colors/hover effects, maybe separate for each letter of name using sass mixin
  return (
    <div
      ref={overlayRef}
      tabIndex={0}
      onDoubleClick={launchHandler}
      onKeyDown={launchHandler}
      id={"overlay"}
      aria-label="Warning: this site contains effects that may be unsuitable for users with epilepsy or motion sensitivity. The text content of the site may not be compatible with some screen readers. An accessible version is available at j h yahav.vercel.app/accessible"
    >
      <div className="text_container">
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter
              .changeDelay(1)
              .typeString(
                "<span class='warning_message'>⚠️ This site contains effects that may be unsuitable for users with epilepsy or motion sensitivity. An accessible version is available at <a href='/accessible' class='blue'>jhyahav.vercel.app/accessible</a>. </span>"
              )
              .pauseFor(3000)
              .deleteAll(0.0001)
              .callFunction(() => setLaunchEnabled(true))
              .changeDelay("natural")
              .typeString("<h1> Hi, I'm Jonathan. </h1>")
              .changeDelay(50)
              .pauseFor(500)
              .typeString(
                "<span class='instructions'>PRESS ANY KEY or DOUBLE-CLICK anywhere!</span>"
              )
              .start();
          }}
        />
      </div>
    </div>
  );
}
