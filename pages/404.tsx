import { useEffect } from "react";
import { useRouter } from "next/router";

// Redirect to home for any page that is not found
export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  });

  return null;
}
