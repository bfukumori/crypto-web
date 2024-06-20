import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@radix-ui/react-select";
import {
  BanknoteIcon,
  BookTextIcon,
  ChevronRightIcon,
  ReplaceIcon,
  SendIcon,
} from "lucide-react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import bitcoin from "@/assets/bitcoin.svg";
import ethereum from "@/assets/ethereum.svg";
import solana from "@/assets/solana.svg";
import tether from "@/assets/tether.svg";
import { ToggleValuesButton } from "@/components/ToggleValuesButton";
import { SelectValue } from "@/components/ui/Select";
import { useToggleVisibility } from "@/hooks/useToggleVisibility";

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

export function ExtractLayout() {
  const { toggleVisibility, visible } = useToggleVisibility();
  const [crypto, setCrypto] = useState("BTC");

  return (
    <div className="m-auto mt-8 max-w-7xl px-4">
      <div className="grid grid-cols-[300px_minmax(900px,1fr)]">
        <aside className="flex flex-col gap-6 bg-zinc-900 p-4">
          <section>
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-semibold">Selecionar ativo</span>
              <ToggleValuesButton
                visible={visible}
                toggleVisibility={toggleVisibility}
              />
            </div>
            <Select onValueChange={setCrypto} value={crypto}>
              <SelectTrigger className="w-full">
                <SelectValue>
                  <div className="flex items-center gap-4 rounded-md bg-zinc-800 p-4">
                    <img
                      src={CRYPTO_IMG[crypto]}
                      alt="Bitcoin"
                      width={24}
                      height={24}
                    />
                    <div className="flex flex-col items-start">
                      <span className="text-sm uppercase">{crypto}</span>
                      <h2 className="text-lg font-bold">
                        {CRYPTO_NAME[crypto]}
                      </h2>
                    </div>
                    <ChevronRightIcon className="ml-auto" />
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="-mt-1 w-[268px] space-y-4 rounded-b-md bg-zinc-950 p-4">
                <SelectItem
                  className="cursor-pointer rounded-sm p-2 hover:bg-zinc-800"
                  value="BTC"
                >
                  Bitcoin
                </SelectItem>
                <SelectItem
                  className="cursor-pointer rounded-sm p-2 hover:bg-zinc-800"
                  value="ETH"
                >
                  Ethereum
                </SelectItem>
                <SelectItem
                  className="cursor-pointer rounded-sm p-2 hover:bg-zinc-800"
                  value="USDT"
                >
                  Tether
                </SelectItem>
                <SelectItem
                  className="cursor-pointer rounded-sm p-2 hover:bg-zinc-800"
                  value="SOL"
                >
                  Solana
                </SelectItem>
              </SelectContent>
            </Select>
          </section>
          <section className="flex flex-col gap-4">
            <div>
              <h2 className="font-mono text-xs uppercase leading-relaxed tracking-wider">
                Saldo disponível {crypto}
              </h2>
              <span className="font-semibold tracking-wide text-primary">
                {visible ? "2.227,741613" : "******"}
              </span>
            </div>
            <div>
              <h2 className="font-mono text-xs uppercase leading-relaxed tracking-wider">
                Em ordens {crypto}
              </h2>
              <span className="tracking-wide text-muted-foreground">
                {visible ? "0,000000" : "******"}
              </span>
            </div>
          </section>
          <section className="-mx-4 -mb-4 flex flex-col gap-6 border-t border-t-zinc-600 bg-zinc-800 p-4">
            <span className="mt-4 text-lg font-semibold">
              Movimentar {crypto}
            </span>
            <NavLink
              replace={true}
              to="/extract"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center justify-start text-primary hover:text-primary"
                  : "flex items-center justify-start hover:text-primary"
              }
            >
              <BookTextIcon />
              <span className="ml-4">Ver extrato</span>
            </NavLink>
            <NavLink
              replace={true}
              to="/deposit"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center justify-start text-primary hover:text-primary"
                  : "flex items-center justify-start hover:text-primary"
              }
            >
              <BanknoteIcon />
              <span className="ml-4">Depositar</span>
            </NavLink>
            <NavLink
              replace={true}
              to="/transfer"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center justify-start text-primary hover:text-primary"
                  : "flex items-center justify-start hover:text-primary"
              }
            >
              <SendIcon />
              <span className="ml-4">Transferir</span>
            </NavLink>
            <NavLink
              replace={true}
              to="/exchange"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center justify-start text-primary hover:text-primary"
                  : "flex items-center justify-start hover:text-primary"
              }
            >
              <ReplaceIcon />
              <span className="ml-4">Converter</span>
            </NavLink>
          </section>
        </aside>
        <div className="col-span-2 col-start-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
