import { Dispatch, SetStateAction } from "react";
import disableScroll from "disable-scroll";
export default function LaunchOverlay({
  setOverlayVisible,
  setWarpActive,
}: {
  setOverlayVisible: Dispatch<SetStateAction<boolean>>;
  setWarpActive: Dispatch<SetStateAction<boolean>>;
}) {
  //TODO: add typing text using typical.js
  return (
    <div
      onClick={() => {
        setWarpActive(true);
        setOverlayVisible(false);
        setTimeout(() => {
          setWarpActive(false);
          disableScroll.off();
        }, 10000);
      }}
      id={"overlay"}
    >
      Clickity click
    </div>
  );
}
