import { Dispatch, SetStateAction } from "react";
export default function LaunchOverlay({
  setVisible,
}: {
  setVisible: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div onClick={() => setVisible(false)} id={"overlay"}>
      Clickity click
    </div>
  );
}
