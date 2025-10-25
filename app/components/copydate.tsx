"use client";
import { useEffect, useState } from "react";

export default function Copydate() {
  const [year, setYear] = useState(2025);
  useEffect(() => {
    setYear(new Date().getFullYear());
  });

  return <time>© {year}</time>;
}
