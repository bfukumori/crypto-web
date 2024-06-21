import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { BellIcon } from "lucide-react";

import { Button } from "../ui/Button";
import { Separator } from "../ui/Separator";

export function Notifications() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary" className="mr-5 h-10 w-10 rounded-full p-0">
          <BellIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="rounded bg-popover p-4 shadow-lg">
          <h2 className="text-lg font-semibold">Notificações</h2>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                Ordem de compra de{" "}
                <span className="text-primary">0.050 BTC</span> realizada com
                sucesso
              </span>
              <span className="text-xs text-muted-foreground">há 1 minuto</span>
            </li>
            <Separator />
            <li className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                Ordem de compra de{" "}
                <span className="text-primary">2.050 ETH</span> realizada com
                sucesso
              </span>
              <span className="text-xs text-muted-foreground">
                há 5 minutos
              </span>
            </li>
            <Separator />
            <li className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                Ordem de venda de <span className="text-primary">350 SOL</span>{" "}
                realizada com sucesso
              </span>
              <span className="text-xs text-muted-foreground">
                há 10 minutos
              </span>
            </li>
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
}
