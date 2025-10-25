"use client";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

interface WindowDimensions {
  width?: number,
  height?: number,
}

function getWindowDimensions(): WindowDimensions {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      console.log("Resized!");
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default function FullscreenConfetti() {
  const { width, height } = useWindowDimensions();

  return (
    <div className="fixed size-full top-0 left-0 pointer-events-none">
      <Confetti width={width} height={height} />
    </div>
  );
}
