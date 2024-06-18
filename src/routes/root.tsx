import { Link, Outlet } from "react-router-dom";

import { RoutesEnum } from "./routesEnum";

export function Root() {
  return (
    <div className="flex h-dvh flex-col">
      <header className="bg-secondary p-5">
        <nav>
          <ul className="flex space-x-8">
            <Link to={RoutesEnum.HOME}>Início</Link>
            <Link to={RoutesEnum.PRODUCTS}>Produtos</Link>
            <Link to={RoutesEnum.PATRIMONY}>Patrimônio</Link>
            <Link to={RoutesEnum.EXTRACT}>Extrato</Link>
          </ul>
        </nav>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="p-4 text-center text-muted-foreground">
        <p>Crypto Web© 2024</p>
      </footer>
    </div>
  );
}
