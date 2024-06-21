import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@radix-ui/react-select";

import bitcoin from "@/assets/bitcoin.svg";
import ethereum from "@/assets/ethereum.svg";
import solana from "@/assets/solana.svg";
import tether from "@/assets/tether.svg";
import { SelectValue } from "@/components/ui/Select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRightLeft } from "lucide-react";

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
  return (
    <div className="flex flex-col gap-6 px-4">
      <div className="flex gap-6">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="mb-4 text-lg">TROCAR</CardTitle>

            <Select>
              <SelectTrigger id="framework">
                <SelectValue
                  placeholder={
                    <div className="flex items-center">
                      <img src={CRYPTO_IMG.SOL} width={20} height={20}></img>
                      <span className="ml-4">{CRYPTO_NAME.SOL}</span>
                    </div>
                  }
                  className="font-bold"
                />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="next">Cardano</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex space-x-20 pl-16">
              <div className="mt-8">
                <CardTitle className="text-sm">ULTIMO PREÇO</CardTitle>
                <CardTitle className="text-center text-sm text-red-500">
                  R$ 2,2272
                </CardTitle>
              </div>
              <div className="mt-8">
                <CardTitle className="text-sm">VARIAÇÃO 24H</CardTitle>
                <CardTitle className="text-center text-sm text-red-500">
                  1,60%
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="flex justify-end">2.227,7416 ADA</CardTitle>
            <div className="flex pb-4 pt-16">
              <CardTitle className="text-sm">Usar saldo disponível: </CardTitle>
              <CardTitle className="pl-2 text-sm font-bold">
                2.227,74161345
              </CardTitle>
            </div>
            <div className="flex space-x-4">
              <Button>100%</Button>
              <Button>75%</Button>
              <Button>50%</Button>
              <Button>25%</Button>
            </div>
          </CardContent>
        </Card>
        <ArrowRightLeft className="self-center" />
        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="mb-4 text-lg">POR</CardTitle>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue
                  placeholder={
                    <div className="flex items-center">
                      <img src={CRYPTO_IMG.ETH} width={20} height={20}></img>
                      <span className="ml-4">{CRYPTO_NAME.ETH}</span>
                    </div>
                  }
                  className="font-bold"
                />
              </SelectTrigger>
              <SelectContent className="" position="popper">
                <SelectItem value="next">Ethereum</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex space-x-20 pl-16">
              <div className="mt-8">
                <CardTitle className="text-sm">ULTIMO PREÇO</CardTitle>
                <CardTitle className="text-center text-sm text-red-500">
                  R$ 19.170,23
                </CardTitle>
              </div>
              <div className="mt-8">
                <CardTitle className="text-sm">VARIAÇÃO 24H</CardTitle>
                <CardTitle className="text-center text-sm text-red-500">
                  1,82%
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="flex justify-end">0,2554 ETH</CardTitle>
            <div className="flex justify-end pb-2 pt-20">
              <CardTitle className="text-sm">
                Valor aproximado da trasnsação:
              </CardTitle>
            </div>
            <div className="flex justify-end pt-2">
              <CardTitle className="text-sm font-bold">R$ 4.897,69</CardTitle>
            </div>
          </CardContent>
        </Card>
      </div>

      <Button className="self-end">Confirmar Troca</Button>
    </div>
  );
}
