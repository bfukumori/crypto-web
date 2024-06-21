import { MoveDownLeftIcon, MoveUpRightIcon } from "lucide-react";

import { currencyFormatter, percentFormatter } from "@/lib/utils";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

type CryptoCardProps = {
  icon: string;
  cryptoName: string;
  cryptoValue: number;
  cryptoPercentage: number;
  type: "up" | "down";
};

export function CryptoCard({
  icon,
  cryptoName,
  cryptoPercentage,
  cryptoValue,
  type,
}: CryptoCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-3">
        <img width={24} height={24} src={icon} className="mt-2" />
        <CardTitle>{cryptoName}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        {type === "up" ? (
          <div className="flex items-center gap-2">
            <MoveUpRightIcon className="text-emerald-500" />
            <p className="text-xl font-semibold text-emerald-500">
              {percentFormatter(cryptoPercentage)}
            </p>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <MoveDownLeftIcon className="text-rose-600" />
            <p className="text-xl font-semibold text-rose-600">
              {percentFormatter(cryptoPercentage)}
            </p>
          </div>
        )}
        <span className="text-2xl font-semibold">
          {currencyFormatter(cryptoValue)}
        </span>
      </CardContent>
    </Card>
  );
}
