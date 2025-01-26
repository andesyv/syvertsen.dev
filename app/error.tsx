"use client";

import { useEffect } from "react";

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Oops! Something went wrong... maybe try refreshing?</p>
    </div>
  );
}
