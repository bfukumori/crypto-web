import { BitcoinIcon } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

import { Notifications } from "@/components/Notifications";
import { ProfileMenu } from "@/components/ProfileMenu";

import { RoutesEnum } from "./routesEnum";

export function Root() {
  return (
    <div className="flex h-dvh flex-col">
      <header className="bg-secondary p-5 px-10">
        <nav className="flex items-center justify-between">
          <ul className="flex space-x-8">
            <BitcoinIcon />
            <NavLink
              to={RoutesEnum.HOME}
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Início
            </NavLink>
            <NavLink
              to={RoutesEnum.PRODUCTS}
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Produtos
            </NavLink>
            <NavLink
              to={RoutesEnum.EXTRACT}
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Extrato
            </NavLink>
          </ul>
          <div className="flex items-center gap-2">
            <Notifications />
            <ProfileMenu />
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="mt-8 bg-neutral-900 p-4 text-center text-muted-foreground">
        <p>Crypto Web© 2024</p>
      </footer>
    </div>
  );
}
