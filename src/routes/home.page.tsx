import {
  ArrowLeftRightIcon,
  BanknoteIcon,
  BookTextIcon,
  ChevronRightIcon,
  EyeIcon,
  EyeOffIcon,
  HandCoinsIcon,
  SendIcon,
  SendToBackIcon,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import bitcoin from "@/assets/bitcoin.svg";
import ethereum from "@/assets/ethereum.svg";
import solana from "@/assets/solana.svg";
import tether from "@/assets/tether.svg";
import { CryptoCard } from "@/components/CryptoCard";
import { ShortcutCard } from "@/components/ShortcutCard";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { currencyFormatter } from "@/lib/utils";

import { RoutesEnum } from "./routesEnum";

export function HomePage() {
  const [visible, setVisible] = useState(false);

  function toggleVisibility() {
    setVisible((prev) => !prev);
  }

  return (
    <div className="m-auto mt-8 max-w-7xl px-4">
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Meu Patrimônio</h1>
          <Button
            className="h-10 w-10 rounded-full bg-muted p-0 hover:bg-zinc-600"
            onClick={toggleVisibility}
          >
            {visible ? <EyeOffIcon /> : <EyeIcon />}
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Total</CardTitle>
            <CardDescription>Saldo total em sua conta</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-semibold">
              {visible ? currencyFormatter(10000) : "******"}
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="link" asChild>
              <NavLink to={RoutesEnum.PATRIMONY}>Ver detalhes</NavLink>
            </Button>
          </CardFooter>
        </Card>
      </section>
      <section className="mt-8">
        <div className="flex flex-wrap gap-2">
          <ShortcutCard text="Depositar" icon={BanknoteIcon} />
          <ShortcutCard text="Sacar" icon={HandCoinsIcon} />
          <ShortcutCard text="Comprar" icon={HandCoinsIcon} />
          <ShortcutCard text="Receber Cripto" icon={SendToBackIcon} />
          <ShortcutCard text="Enviar Cripto" icon={SendIcon} />
          <ShortcutCard text="Extrato" icon={BookTextIcon} />
          <ShortcutCard text="Ordens" icon={ArrowLeftRightIcon} />
        </div>
      </section>

      <Separator className="my-10 h-1 bg-primary" />

      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="font-mono text-lg font-medium uppercase">
              Criptoativos
            </h2>
            <span className="text-2xl font-semibold">
              Diversifique sua carteira
            </span>
            <p className="text-pretty text-muted-foreground">
              Negocie mais de 200 opções de um jeito simples e seguro a partir
              de R$ 1.
            </p>
          </div>
          <Button asChild variant="ghost">
            <NavLink to={RoutesEnum.PRODUCTS} className="flex items-center">
              Ver todos
              <ChevronRightIcon className="ml-2" />
            </NavLink>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <CryptoCard
            type="up"
            icon={bitcoin}
            cryptoName="Bitcoin"
            cryptoPercentage={0.0045}
            cryptoValue={361913.01}
          />
          <CryptoCard
            type="down"
            icon={ethereum}
            cryptoName="Ethereum"
            cryptoPercentage={0.0164}
            cryptoValue={19190.47}
          />
          <CryptoCard
            type="up"
            icon={tether}
            cryptoName="Tether"
            cryptoPercentage={0.0033}
            cryptoValue={5.44}
          />
          <CryptoCard
            type="down"
            icon={solana}
            cryptoName="Solana"
            cryptoPercentage={0.0323}
            cryptoValue={782.81}
          />
        </div>
      </section>
    </div>
  );
}
