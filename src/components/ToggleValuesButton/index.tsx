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
      className="h-10 w-10 rounded-full bg-muted p-0 hover:bg-zinc-600"
      onClick={toggleVisibility}
    >
      {visible ? <EyeOffIcon /> : <EyeIcon />}
    </Button>
  );
}
