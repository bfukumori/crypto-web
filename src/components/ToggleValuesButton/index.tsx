import { EyeIcon, EyeOffIcon } from "lucide-react";

import { Button } from "../ui/Button";

type ToggleValuesButtonProps = {
  visible: boolean;
  toggleVisibility: () => void;
};

export function ToggleValuesButton({
  toggleVisibility,
  visible,
}: ToggleValuesButtonProps) {
  return (
    <Button
      variant="secondary"
      className="h-10 w-10 rounded-full p-0"
      onClick={toggleVisibility}
    >
      {visible ? <EyeOffIcon /> : <EyeIcon />}
    </Button>
  );
}
