import { useState } from "react";

export function useToggleVisibility() {
  const [visible, setVisible] = useState(false);

  function toggleVisibility() {
    setVisible((prev) => !prev);
  }

  return { visible, toggleVisibility };
}
