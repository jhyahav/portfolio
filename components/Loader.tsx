import { useEffect, useState } from "react";
import { RevolvingDot } from "react-loader-spinner";

export default function Loader({ timeout }: { timeout: number }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), timeout);
  }, []);

  return (
    <>
      {visible && (
        <RevolvingDot
          height="100"
          width="100"
          radius="6"
          color="#8130f3"
          ariaLabel="revolving-dot-loading"
          wrapperClass="loader"
        />
      )}
    </>
  );
}
