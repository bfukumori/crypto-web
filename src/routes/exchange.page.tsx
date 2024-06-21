import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@radix-ui/react-select";
import { ArrowRightLeft } from "lucide-react";
import { useState } from "react";

import bitcoin from "@/assets/bitcoin.svg";
import ethereum from "@/assets/ethereum.svg";
import solana from "@/assets/solana.svg";
import tether from "@/assets/tether.svg";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { SelectValue } from "@/components/ui/Select";
import { currencyFormatter, percentFormatter } from "@/lib/utils";

const CRYPTO_NAME: Record<string, string> = {
  BTC: "Bitcoin",
  ETH: "Ethereum",
  USDT: "Tether",
  SOL: "Solana",
};

const CRYPTO_IMG: Record<string, string> = {
  BTC: bitcoin,
  ETH: ethereum,
  USDT: tether,
  SOL: solana,
};

export function ExchangePage() {
  const [cryptoOrigin, setCryptoOrigin] = useState("SOL");
  const [cryptoFinal, setCryptoFinal] = useState("ETH");

  return (
    <div className="flex flex-col gap-6 px-4">
      <div className="flex gap-6">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="mb-4 text-lg">TROCAR</CardTitle>
            <Select value={cryptoOrigin} onValueChange={setCryptoOrigin}>
              <SelectTrigger>
                <SelectValue>
                  <div className="flex items-center">
                    <img
                      src={CRYPTO_IMG[cryptoOrigin]}
                      width={20}
                      height={20}
                    ></img>
                    <span className="ml-4">{CRYPTO_NAME[cryptoOrigin]}</span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent
                className="w-[250px] rounded bg-slate-800 shadow-2xl"
                position="popper"
              >
                <SelectItem className="cursor-pointer p-4" value="BTC">
                  <div className="flex items-center">
                    <img src={CRYPTO_IMG.BTC} width={16} height={16} />
                    <span className="ml-4">{CRYPTO_NAME.BTC}</span>
                  </div>
                </SelectItem>
                <SelectItem className="cursor-pointer p-4" value="ETH">
                  <div className="flex items-center">
                    <img src={CRYPTO_IMG.ETH} width={16} height={16} />
                    <span className="ml-4">{CRYPTO_NAME.ETH}</span>
                  </div>
                </SelectItem>
                <SelectItem className="cursor-pointer p-4" value="SOL">
                  <div className="flex items-center">
                    <img src={CRYPTO_IMG.SOL} width={16} height={16} />
                    <span className="ml-4">{CRYPTO_NAME.SOL}</span>
                  </div>
                </SelectItem>
                <SelectItem className="cursor-pointer p-4" value="USDT">
                  <div className="flex items-center">
                    <img src={CRYPTO_IMG.USDT} width={16} height={16} />
                    <span className="ml-4">{CRYPTO_NAME.USDT}</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            <div className="flex space-x-20 pl-16">
              <div className="mt-8">
                <p className="text-sm font-semibold">ULTIMO PREÇO</p>
                <p className="text-center text-sm text-secondary-foreground">
                  {currencyFormatter(2.2272)}
                </p>
              </div>
              <div className="mt-8">
                <p className="text-sm font-semibold">VARIAÇÃO 24H</p>
                <p className="text-center text-sm text-emerald-500">
                  +{percentFormatter(0.016)}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="flex justify-end text-2xl font-semibold">
              2.227,7416 {cryptoOrigin}
            </p>
            <div className="flex pb-4 pt-16">
              <p className="text-sm">Usar saldo disponível: </p>
              <p className="pl-2 text-sm font-bold">2.227,74161345</p>
            </div>
            <div className="flex space-x-4">
              <Button>{percentFormatter(1)}</Button>
              <Button>{percentFormatter(0.75)}</Button>
              <Button>{percentFormatter(0.5)}</Button>
              <Button>{percentFormatter(0.25)}</Button>
            </div>
          </CardContent>
        </Card>
        <ArrowRightLeft className="self-center" />
        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="mb-4 text-lg">POR</CardTitle>
            <Select value={cryptoFinal} onValueChange={setCryptoFinal}>
              <SelectTrigger>
                <SelectValue>
                  <div className="flex items-center">
                    <img src={CRYPTO_IMG[cryptoFinal]} width={20} height={20} />
                    <span className="ml-4">{CRYPTO_NAME[cryptoFinal]}</span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent
                className="w-[250px] rounded bg-slate-800 shadow-2xl"
                position="popper"
              >
                <SelectItem className="cursor-pointer p-4" value="BTC">
                  <div className="flex items-center">
                    <img src={CRYPTO_IMG.BTC} width={16} height={16} />
                    <span className="ml-4">{CRYPTO_NAME.BTC}</span>
                  </div>
                </SelectItem>
                <SelectItem className="cursor-pointer p-4" value="ETH">
                  <div className="flex items-center">
                    <img src={CRYPTO_IMG.ETH} width={16} height={16} />
                    <span className="ml-4">{CRYPTO_NAME.ETH}</span>
                  </div>
                </SelectItem>
                <SelectItem className="cursor-pointer p-4" value="SOL">
                  <div className="flex items-center">
                    <img src={CRYPTO_IMG.SOL} width={16} height={16} />
                    <span className="ml-4">{CRYPTO_NAME.SOL}</span>
                  </div>
                </SelectItem>
                <SelectItem className="cursor-pointer p-4" value="USDT">
                  <div className="flex items-center">
                    <img src={CRYPTO_IMG.USDT} width={16} height={16} />
                    <span className="ml-4">{CRYPTO_NAME.USDT}</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            <div className="flex space-x-20 pl-16">
              <div className="mt-8">
                <p className="text-sm font-semibold">ULTIMO PREÇO</p>
                <p className="text-center text-sm text-secondary-foreground">
                  {currencyFormatter(19170.23)}
                </p>
              </div>
              <div className="mt-8">
                <p className="text-sm font-semibold">VARIAÇÃO 24H</p>
                <p className="text-center text-sm text-red-500">
                  -{percentFormatter(0.0182)}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="flex justify-end text-2xl font-semibold">
              0,2554 {cryptoFinal}
            </p>
            <div className="flex justify-end pb-2 pt-20">
              <p className="text-sm">Valor aproximado da transação:</p>
            </div>
            <div className="flex justify-end pt-2">
              <p className="text-lg font-semibold text-primary">
                {currencyFormatter(4897.69)}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Button className="self-end">Confirmar Troca</Button>
    </div>
  );
}
