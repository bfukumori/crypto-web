import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import bitcoin from "@/assets/bitcoin.svg";
import ethereum from "@/assets/ethereum.svg";
import solana from "@/assets/solana.svg";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { cn, currencyFormatter, percentFormatter } from "@/lib/utils";

enum Tabs {
  CRYPTO,
  FIXED_INCOME,
  VARIABLE_INCOME,
}

enum Filters {
  FAVORITES = "FAVORITES",
  WITH_BALANCE = "WITH_BALANCE",
  ALL = "ALL",
  NEW = "NEW",
}

type TabsType = keyof typeof Tabs;
type FiltersType = keyof typeof Filters;

export function ProductsPage() {
  const [tab, setTab] = useState<TabsType>("CRYPTO");
  const [searchParams, setSearchParams] = useSearchParams();

  function handleFilter(filter: FiltersType) {
    setSearchParams({ filter });
  }

  function handleTabChange(tab: TabsType) {
    setTab(tab);
  }

  return (
    <div className="m-auto mt-8 max-w-7xl px-4">
      <h1 className="text-4xl font-semibold">Produtos</h1>
      <div className="mb-4 mt-8 flex items-center gap-4">
        <Button
          onClick={() => handleTabChange("CRYPTO")}
          variant="link"
          className={cn(
            "text-lg text-foreground decoration-primary decoration-2 underline-offset-8",
            tab === "CRYPTO" && "font-bold underline",
          )}
        >
          Criptoativos
        </Button>
        <Button
          onClick={() => handleTabChange("FIXED_INCOME")}
          variant="link"
          className={cn(
            "text-lg text-foreground decoration-primary decoration-2 underline-offset-8",
            tab === "FIXED_INCOME" && "font-bold underline",
          )}
        >
          Renda Fixa Digital
        </Button>
        <Button
          onClick={() => handleTabChange("VARIABLE_INCOME")}
          variant="link"
          className={cn(
            "text-lg text-foreground decoration-primary decoration-2 underline-offset-8",
            tab === "VARIABLE_INCOME" && "font-bold underline",
          )}
        >
          Renda Variavel Digital
        </Button>
      </div>

      <Label htmlFor="search" className="font-light">
        Diversifique seus investimentos com as principais criptomoedas do
        mercado e negocie com segurança e praticidade
      </Label>
      <Input id="search" placeholder="Busque um produto" className="mt-2" />

      <div className="my-4 flex gap-4">
        <Button
          variant="outline"
          className={cn(
            searchParams.get("filter") === Filters.FAVORITES &&
              "border-primary",
          )}
          onClick={() => handleFilter("FAVORITES")}
        >
          Favoritos
        </Button>
        <Button
          variant="outline"
          className={cn(
            searchParams.get("filter") === Filters.WITH_BALANCE &&
              "border-primary",
          )}
          onClick={() => handleFilter("WITH_BALANCE")}
        >
          Com Saldo
        </Button>
        <Button
          variant="outline"
          className={cn(
            searchParams.get("filter") === Filters.ALL && "border-primary",
          )}
          onClick={() => handleFilter("ALL")}
        >
          Todos
        </Button>
        <Button
          variant="outline"
          className={cn(
            searchParams.get("filter") === Filters.NEW && "border-primary",
          )}
          onClick={() => handleFilter("NEW")}
        >
          Novos
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Ativo</TableHead>
            <TableHead>Ticker</TableHead>
            <TableHead>Segmento</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead>Variação</TableHead>
            <TableHead>Captalização de mercado</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="hover:bg-transparent">
            <TableCell>
              {" "}
              <img
                src={bitcoin}
                alt="Bitcoin"
                width={16}
                height={16}
                className="mr-2 inline"
              />
              Bitcoin
            </TableCell>
            <TableCell>BTC</TableCell>
            <TableCell>Criptomoeda</TableCell>
            <TableCell className="font-bold">
              {currencyFormatter(361913.01)}
            </TableCell>
            <TableCell className="font-bold text-green-500">
              +{percentFormatter(0.02)}
            </TableCell>
            <TableCell>{currencyFormatter(6987636113403.18)}</TableCell>
            <TableCell>
              <Button
                variant="outline"
                className="border-primary text-primary hover:text-primary"
              >
                Negociar
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="hover:bg-transparent">
            <TableCell>
              <img
                src={ethereum}
                alt="Ethereum"
                width={16}
                height={16}
                className="mr-2 inline"
              />
              Ethereum
            </TableCell>
            <TableCell>ETH</TableCell>
            <TableCell>Criptomoeda</TableCell>
            <TableCell className="font-bold">
              {currencyFormatter(19190.46)}
            </TableCell>
            <TableCell className="font-bold text-red-500">
              -{percentFormatter(0.0167)}
            </TableCell>
            <TableCell>{currencyFormatter(2300303659972.83)}</TableCell>
            <TableCell>
              <Button
                variant="outline"
                className="border-primary text-primary hover:text-primary"
              >
                Negociar
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="hover:bg-transparent">
            <TableCell>
              {" "}
              <img
                src={solana}
                alt="Solana"
                width={16}
                height={16}
                className="mr-2 inline"
              />
              Solana
            </TableCell>
            <TableCell>SOL</TableCell>
            <TableCell>Criptomoeda</TableCell>
            <TableCell className="font-bold">
              {currencyFormatter(2.22)}
            </TableCell>
            <TableCell className="font-bold text-red-500">
              -{percentFormatter(0.0134)}
            </TableCell>
            <TableCell>{currencyFormatter(78279300529.68)}</TableCell>
            <TableCell>
              <Button
                variant="outline"
                className="border-primary text-primary hover:text-primary"
              >
                Negociar
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
