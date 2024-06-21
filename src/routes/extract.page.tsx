import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, DownloadIcon } from "lucide-react";
import { useState } from "react";

import bitcoin from "@/assets/bitcoin.svg";
import ethereum from "@/assets/ethereum.svg";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/Calendar";
import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export function ExtractPage() {
  const [date, setDate] = useState<Date>();

  return (
    <div className="flex flex-col gap-4 px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Extrato</h1>
        <div className="flex items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? (
                  format(date, "yyyy", { locale: ptBR })
                ) : (
                  <span>Selecione uma data</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto bg-background p-0 shadow-md">
              <Calendar
                locale={ptBR}
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <DownloadIcon className="cursor-pointer hover:text-primary" />
        </div>
      </div>
      <h2 className="text-lg font-bold">
        {date && format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
      </h2>
      <Card>
        <CardContent className="flex items-center justify-evenly gap-4 px-0 py-4">
          <div className="flex flex-col">
            <span className="font-semibold">08/10/2021</span>
            <span>17h54m</span>
          </div>
          <span className="text-emerald-500">159,077015 BTC</span>
          <span>2.227,741613 BTC</span>
          <span className="font-mono text-sm tracking-wide before:mr-2 before:inline-flex before:h-2 before:w-2 before:rounded-full before:bg-amber-500">
            Em aberto
          </span>
          <Badge variant="secondary">
            <img alt="Bitcoin" width={12} height={12} src={bitcoin} />
            <span className="ml-2">BTC</span>
          </Badge>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex items-center justify-evenly gap-4 px-0 py-4">
          <div className="flex flex-col">
            <span className="font-semibold">08/10/2021</span>
            <span>17h54m</span>
          </div>
          <span className="text-rose-500">159,077015 ETH</span>
          <span>1.785,789214 ETH</span>
          <span className="font-mono text-sm tracking-wide before:mr-2 before:inline-flex before:h-2 before:w-2 before:rounded-full before:bg-emerald-500">
            Executada
          </span>
          <Badge variant="secondary">
            <img alt="Ethereum" width={12} height={12} src={ethereum} />
            <span className="ml-2">ETH</span>
          </Badge>
        </CardContent>
      </Card>
    </div>
  );
}
