import { Dispatch, SetStateAction } from "react";
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
        setOverlayVisible(false);
        setWarpActive(true);
        setTimeout(() => setWarpActive(false), 10000);
      }}
      id={"overlay"}
    >
      Clickity click
    </div>
  );
}
